'use client';
import {useEffect,useRef,useState} from 'react';
import {briefingSections,briefingMessage,exampleBriefing,validateBriefing,CONTACT_ENDPOINT,type BriefingValues} from '@/lib/en/briefing';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';

export default function BriefingForm(){
 const [values,setValues]=useState<BriefingValues>({}),[consent,setConsent]=useState(false),[busy,setBusy]=useState(''),[error,setError]=useState(''),[reference,setReference]=useState(''),[website,setWebsite]=useState('');
 const snapshot=useRef<{id:string;serialized:string;file:File}|null>(null),lock=useRef(false),receipt=useRef<HTMLDivElement>(null);
 useEffect(()=>{const name=new URLSearchParams(location.search).get('paquete');if(name&&['Impulso','Encuentro','Conexión'].includes(name))setValues(v=>({...v,observaciones:`I am interested in the package ${name}.`}))},[]);
 function update(id:string,value:string|string[]){setValues(v=>({...v,[id]:value}));setError('');}
 function valid(){const message=validateBriefing(values)||(!consent?'Confirm that the details are fictional.':'');if(message){setError(message);return false}return true}
 async function prepare(){
  const serialized=JSON.stringify(values);
  if(snapshot.current?.serialized===serialized)return snapshot.current;
  const id=crypto.randomUUID();const {briefingPDF}=await import('@/lib/en/briefing-pdf');const bytes=await briefingPDF(values,id);
  const prepared={id,serialized,file:new File([bytes as BlobPart],`ARREA_Briefing_${id.slice(0,8)}.pdf`,{type:'application/pdf'})};snapshot.current=prepared;return prepared;
 }
 async function download(){if(lock.current||!valid())return;lock.current=true;setBusy('pdf');setError('');try{const {file}=await prepare();const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)}catch{setError('The PDF could not be prepared. Your answers have been kept; please try again.')}finally{lock.current=false;setBusy('')}}
 async function submit(event:React.FormEvent){event.preventDefault();if(lock.current||!valid())return;lock.current=true;setBusy('send');setError('');
  try{const {id,file}=await prepare();const form=new FormData();form.set('message',JSON.stringify({...briefingMessage(values,id),website}));form.append('files',file,file.name);
   const response=await fetch(CONTACT_ENDPOINT,{method:'POST',body:form,credentials:'omit',signal:AbortSignal.timeout(60000)});const data=await response.json() as {ok?:boolean;reference?:string;error?:string};
   if(!response.ok||data.ok!==true||data.reference!==id)throw Error('The simulation hub has not confirmed receipt. Keep the PDF and try again.');
   setReference(data.reference);setTimeout(()=>receipt.current?.focus(),0);
  }catch(e){setError(e instanceof Error&&e.name!=='TypeError'&&e.name!=='TimeoutError'?e.message:'Submission could not be confirmed. Your answers and PDF have been kept. Select Send brief again; the same submission will not be duplicated.')}finally{lock.current=false;setBusy('')}
 }
 return <div className="briefing-content">
  <p className="briefing-notice">Use fictional details only. The brief will go to the shared inbox <strong>info@arrea.test</strong> in the Simulation Hub. No real email is sent.</p>
  {reference?<div className="briefing-receipt" ref={receipt} tabIndex={-1} role="status"><p className="eyebrow">SUBMISSION CONFIRMED</p><h2>Your brief has reached ARREA.</h2><p>We have received your answers and the attached PDF.</p><p className="briefing-reference">Reference: {reference}</p><Button type="button" className="briefing-primary" disabled={!!busy} onClick={download}>{busy==='pdf'?'Preparing PDF…':'Download my PDF copy'}</Button><p><a href="https://central.sandramangas.com/empresa/arrea/servicios/correo">Open the practice inbox</a></p><Button type="button" variant="outline" disabled={!!busy} onClick={()=>{setValues({});setConsent(false);setReference('');setError('');snapshot.current=null}}>Prepare another brief</Button></div>:
  <form onSubmit={submit}>
   <div className="briefing-form-meta"><span>Fields marked * are required.</span><Button variant="outline" type="button" disabled={!!busy} onClick={()=>{if(Object.keys(values).length&&!confirm('Replace your answers with the fictional Nexo example?'))return;setValues({...exampleBriefing});setConsent(false);setError('');snapshot.current=null}}>Load fictional example</Button></div>
   <fieldset className="briefing-all-fields" disabled={!!busy}>
   {briefingSections.map(section=><fieldset className="briefing-section" key={section.num}><legend><span>{section.num}</span> {section.title}</legend><p>{section.subtitle}</p><div className="briefing-grid">{section.fields.map(field=>{
    const conditional=(field.id==='telefono'&&values.canal==='Phone')||(field.id==='otros'&&(values.servicios as string[])?.includes('Other'));const required=field.required||conditional;const value=String(values[field.id]||'');
    return <div className={`briefing-field ${['textarea','checks'].includes(field.type)?'briefing-wide':''}`} key={field.id}>
    {field.type==='checks'?<fieldset className="briefing-services"><legend>{field.label} *</legend><div className="briefing-checks">{field.options.map(option=><label key={option}><input type="checkbox" name={field.id} checked={(values[field.id] as string[]||[]).includes(option)} onChange={e=>{const current=(values[field.id] as string[])||[];update(field.id,e.target.checked?[...current,option]:current.filter(x=>x!==option))}}/>{option}</label>)}</div></fieldset>:<><label htmlFor={`bf-${field.id}`}>{field.label}{required?' *':''}</label>
    {field.type==='textarea'?<Textarea id={`bf-${field.id}`} rows={3} required={required} maxLength={650} value={value} onChange={e=>update(field.id,e.target.value)} aria-describedby={field.help?`help-${field.id}`:undefined}/>:field.type==='select'?<select id={`bf-${field.id}`} required={required} value={value} onChange={e=>update(field.id,e.target.value)}><option value="">Select</option>{field.options.map(option=><option key={option}>{option}</option>)}</select>:<Input id={`bf-${field.id}`} type={field.type} required={required} value={value} maxLength={field.id==='email'?120:180} min={field.id==='personas'?1:field.id==='presupuesto'?0.01:undefined} max={field.id==='personas'?100000:undefined} step={field.id==='presupuesto'?'0.01':field.id==='personas'?'1':undefined} onChange={e=>update(field.id,e.target.value)} aria-describedby={field.help?`help-${field.id}`:undefined}/>}</>}
    {field.help&&<small id={`help-${field.id}`}>{field.help}</small>}</div>
   })}</div></fieldset>)}
   <label className="briefing-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>I confirm that I have used fictional details and understand that they will be stored in the shared practice inbox. *</span></label>
   <label className="briefing-honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label>
   <div className="briefing-actions"><Button type="submit" className="briefing-primary">{busy==='send'?'Sending brief…':'Send brief to ARREA'}</Button><Button type="button" variant="outline" onClick={download}>{busy==='pdf'?'Preparing PDF…':'Download PDF'}</Button></div>
   <p className="briefing-help">You can download the PDF before submitting. Downloading alone does not submit the form. Keep a copy before closing this page.</p>
   </fieldset>
  </form>}
  {error&&<p className="briefing-error" role="alert">{error}</p>}
 </div>
}

