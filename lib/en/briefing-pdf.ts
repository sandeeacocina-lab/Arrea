import {PDFDocument,rgb,type PDFFont} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import {briefingSections,type BriefingValues} from './briefing';
import {basePath} from './site';
const cream=rgb(247/255,242/255,235/255),ink=rgb(21/255,18/255,15/255),pink=rgb(212/255,0,87/255),sand=rgb(233/255,223/255,211/255);
async function asset(path:string){const response=await fetch(basePath+path);if(!response.ok)throw Error('A PDF resource could not be loaded.');return new Uint8Array(await response.arrayBuffer())}
export async function briefingPDF(values:BriefingValues,reference:string){
 const doc=await PDFDocument.create();doc.registerFontkit(fontkit);
 const [regularData,boldData,logoData]=await Promise.all([asset('/fonts/Geist-Regular.ttf'),asset('/fonts/Geist-Bold.ttf'),asset('/images/arrea-briefing-logo.png')]);
 const regular=await doc.embedFont(regularData,{subset:true}),bold=await doc.embedFont(boldData,{subset:true}),logo=await doc.embedPng(logoData);
 doc.setTitle('ARREA · New event brief');doc.setAuthor('Sandra Mangas Hernández');doc.setSubject('Fictional details · Reference '+reference);
 let page=doc.addPage([595.28,841.89]),top=0;
 const start=()=>{page.drawRectangle({x:0,y:0,width:595.28,height:841.89,color:cream});page.drawImage(logo,{x:44,y:734,width:80,height:75.13});page.drawText('NEW EVENT BRIEF',{x:166,y:790,size:14,font:bold,color:ink});page.drawText('One point of contact, your entire event',{x:166,y:767,size:10,font:regular,color:ink});page.drawText(reference,{x:166,y:748,size:8,font:regular,color:ink});top=141;};
 function ensure(height:number){if(top+height>747){page=doc.addPage([595.28,841.89]);start()}}
 function lines(s:string,font:PDFFont,size:number,width=507){const out:string[]=[];for(const source of s.replace(/\r\n?/g,'\n').split('\n')){let line='';for(const token of source.split(/(\s+)/)){if(font.widthOfTextAtSize(line+token,size)<=width){line+=token;continue}if(line.trim())out.push(line.trimEnd());line='';for(const char of token.trimStart()){if(font.widthOfTextAtSize(line+char,size)>width&&line){out.push(line);line=''}line+=char}}out.push(line.trimEnd())}return out}
 function paragraph(s:string,font=regular,size=10.5,color=ink){for(const line of lines(s,font,size)){ensure(size+5);if(line)page.drawText(line,{x:44,y:841.89-top-size,font,size,color});top+=size+5}}
 start();paragraph(String(values.empresa),bold,17);top+=5;paragraph('Information request to prepare our first meeting.',regular,10);top+=18;
 for(const section of briefingSections){ensure(78);paragraph(section.num+'  '+section.title,bold,15,pink);top+=10;for(const field of section.fields){const value=values[field.id];const text=Array.isArray(value)?value.join(', '):value||'Not specified';ensure(48);paragraph(field.label,bold,10.5);paragraph(text);top+=10}top+=10;}
 doc.getPages().forEach((p,i)=>{p.drawLine({start:{x:44,y:71},end:{x:551,y:71},color:sand,thickness:1});p.drawText('Practice enterprise · Fictional details · To: info@arrea.test',{x:44,y:56,font:regular,size:8,color:ink});p.drawText('Author and educational lead: Sandra Mangas Hernández.',{x:44,y:42,font:regular,size:8,color:ink});p.drawText(`${i+1} / ${doc.getPageCount()}`,{x:520,y:42,font:bold,size:8,color:ink})});
 return doc.save();
}

