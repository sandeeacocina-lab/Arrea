'use client';
import {useEffect,useRef,useState} from 'react';
import {briefingSections,briefingMessage,exampleBriefing,validateBriefing,CONTACT_ENDPOINT,type BriefingValues} from '@/lib/briefing';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {SimulationNotice} from '@/components/simulation-notice';

export default function BriefingForm(){
 const [values,setValues]=useState<BriefingValues>({}),[consent,setConsent]=useState(false),[busy,setBusy]=useState(''),[error,setError]=useState(''),[reference,setReference]=useState(''),[website,setWebsite]=useState('');
 const snapshot=useRef<{id:string;serialized:string;file:File}|null>(null),lock=useRef(false),receipt=useRef<HTMLDivElement>(null);
 useEffect(()=>{const name=new URLSearchParams(location.search).get('paquete');if(name&&['Impulso','Encuentro','Conexión'].includes(name))setValues(v=>({...v,observaciones:`Me interesa el paquete ${name}.`}))},[]);
 function update(id:string,value:string|string[]){setValues(v=>({...v,[id]:value}));setError('');}
 function valid(){const message=validateBriefing(values)||(!consent?'Confirma que los datos son ficticios.':'');if(message){setError(message);return false}return true}
 async function prepare(){
  const serialized=JSON.stringify(values);
  if(snapshot.current?.serialized===serialized)return snapshot.current;
  const id=crypto.randomUUID();const {briefingPDF}=await import('@/lib/briefing-pdf');const bytes=await briefingPDF(values,id);
  const prepared={id,serialized,file:new File([bytes as BlobPart],`ARREA_Briefing_${id.slice(0,8)}.pdf`,{type:'application/pdf'})};snapshot.current=prepared;return prepared;
 }
 async function download(){if(lock.current||!valid())return;lock.current=true;setBusy('pdf');setError('');try{const {file}=await prepare();const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)}catch{setError('No se ha podido preparar el PDF. Tus respuestas se conservan; vuelve a intentarlo.')}finally{lock.current=false;setBusy('')}}
 async function submit(event:React.FormEvent){event.preventDefault();if(lock.current||!valid())return;lock.current=true;setBusy('send');setError('');
  try{const {id,file}=await prepare();const form=new FormData();form.set('message',JSON.stringify({...briefingMessage(values,id),website}));form.append('files',file,file.name);
   const response=await fetch(CONTACT_ENDPOINT,{method:'POST',body:form,credentials:'omit',signal:AbortSignal.timeout(60000)});const data=await response.json() as {ok?:boolean;reference?:string;error?:string};
   if(!response.ok||data.ok!==true||data.reference!==id)throw Error(data.error||'La central no ha confirmado la recepción. Conserva el PDF y vuelve a intentarlo.');
   setReference(data.reference);setTimeout(()=>receipt.current?.focus(),0);
  }catch(e){setError(e instanceof Error&&e.name!=='TypeError'&&e.name!=='TimeoutError'?e.message:'No se ha podido confirmar el envío. Tus respuestas y el PDF se conservan. Pulsa de nuevo Enviar briefing; el mismo envío no se duplicará.')}finally{lock.current=false;setBusy('')}
 }
 return <div className="briefing-content">
  <SimulationNotice/>
  {reference?<div className="briefing-receipt" ref={receipt} tabIndex={-1} role="status"><p className="eyebrow">ENVÍO CONFIRMADO</p><h2>Tu briefing ya está en ARREA.</h2><p>Hemos recibido las respuestas y el PDF adjunto.</p><p className="briefing-reference">Referencia: {reference}</p><Button type="button" className="briefing-primary" disabled={!!busy} onClick={download}>{busy==='pdf'?'Preparando PDF…':'Descargar mi copia en PDF'}</Button><Button type="button" variant="outline" disabled={!!busy} onClick={()=>{setValues({});setConsent(false);setReference('');setError('');snapshot.current=null}}>Preparar otro briefing</Button></div>:
  <form onSubmit={submit}>
   <div className="briefing-form-meta"><span>Los campos con * son obligatorios.</span><Button variant="outline" type="button" disabled={!!busy} onClick={()=>{if(Object.keys(values).length&&!confirm('¿Sustituir lo escrito por el ejemplo ficticio Nexo?'))return;setValues({...exampleBriefing});setConsent(false);setError('');snapshot.current=null}}>Cargar ejemplo ficticio</Button></div>
   <fieldset className="briefing-all-fields" disabled={!!busy}>
   {briefingSections.map(section=><fieldset className="briefing-section" key={section.num}><legend><span>{section.num}</span> {section.title}</legend><p>{section.subtitle}</p><div className="briefing-grid">{section.fields.map(field=>{
    const conditional=(field.id==='telefono'&&values.canal==='Teléfono')||(field.id==='otros'&&(values.servicios as string[])?.includes('Otros'));const required=field.required||conditional;const value=String(values[field.id]||'');
    return <div className={`briefing-field ${['textarea','checks'].includes(field.type)?'briefing-wide':''}`} key={field.id}>
    {field.type==='checks'?<fieldset className="briefing-services"><legend>{field.label} *</legend><div className="briefing-checks">{field.options.map(option=><label key={option}><input type="checkbox" name={field.id} checked={(values[field.id] as string[]||[]).includes(option)} onChange={e=>{const current=(values[field.id] as string[])||[];update(field.id,e.target.checked?[...current,option]:current.filter(x=>x!==option))}}/>{option}</label>)}</div></fieldset>:<><label htmlFor={`bf-${field.id}`}>{field.label}{required?' *':''}</label>
    {field.type==='textarea'?<Textarea id={`bf-${field.id}`} rows={3} required={required} maxLength={650} value={value} onChange={e=>update(field.id,e.target.value)} aria-describedby={field.help?`help-${field.id}`:undefined}/>:field.type==='select'?<select id={`bf-${field.id}`} required={required} value={value} onChange={e=>update(field.id,e.target.value)}><option value="">Selecciona</option>{field.options.map(option=><option key={option}>{option}</option>)}</select>:<Input id={`bf-${field.id}`} type={field.type} required={required} value={value} maxLength={field.id==='email'?120:180} min={field.id==='personas'?1:field.id==='presupuesto'?0.01:undefined} max={field.id==='personas'?100000:undefined} step={field.id==='presupuesto'?'0.01':field.id==='personas'?'1':undefined} onChange={e=>update(field.id,e.target.value)} aria-describedby={field.help?`help-${field.id}`:undefined}/>}</>}
    {field.help&&<small id={`help-${field.id}`}>{field.help}</small>}</div>
   })}</div></fieldset>)}
   <label className="briefing-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>Confirmo que he utilizado datos ficticios y que conozco que se guardarán en el buzón compartido de prácticas. *</span></label>
   <label className="briefing-honeypot" aria-hidden="true">Sitio web<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label>
   <div className="briefing-actions"><Button type="submit" className="briefing-primary">{busy==='send'?'Enviando briefing…':'Enviar briefing a ARREA'}</Button><Button type="button" variant="outline" onClick={download}>{busy==='pdf'?'Preparando PDF…':'Descargar en PDF'}</Button></div>
   <p className="briefing-help">Puedes descargar el PDF antes de enviar. La descarga por sí sola no envía el formulario. Conserva una copia antes de cerrar esta página.</p>
   </fieldset>
  </form>}
  {error&&<p className="briefing-error" role="alert">{error}</p>}
 </div>
}
