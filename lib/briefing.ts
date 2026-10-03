export type BriefingValues = Record<string,string|string[]>;
export const briefingSections = [
  {
    "num": "01",
    "title": "Empecemos por ti",
    "subtitle": "Contacto y toma de decisiones",
    "fields": [
      {
        "id": "empresa",
        "label": "Empresa",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "contacto",
        "label": "Nombre y cargo",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "email",
        "label": "Correo de contacto",
        "type": "email",
        "required": true,
        "help": "Utiliza únicamente un correo ficticio terminado en .test.",
        "options": []
      },
      {
        "id": "canal",
        "label": "Canal preferente",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Correo",
          "Teléfono",
          "Reunión virtual"
        ]
      },
      {
        "id": "telefono",
        "label": "Teléfono ficticio si eliges ese canal",
        "type": "text",
        "required": false,
        "help": "",
        "options": []
      },
      {
        "id": "aprobacion",
        "label": "Quién aprueba la propuesta y el presupuesto",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      }
    ]
  },
  {
    "num": "02",
    "title": "Cuéntanos el evento",
    "subtitle": "Formato, fecha y personas",
    "fields": [
      {
        "id": "evento",
        "label": "Nombre y tipo de evento",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "objetivo",
        "label": "Qué quieres conseguir",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "fecha",
        "label": "Fecha preferente",
        "type": "date",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "flexible",
        "label": "¿La fecha es flexible?",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Sí",
          "No",
          "Por confirmar"
        ]
      },
      {
        "id": "horario",
        "label": "Horario previsto",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "lugar",
        "label": "Ciudad y espacio si ya lo conoces",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "formato",
        "label": "Formato",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Presencial",
          "Híbrido",
          "Online"
        ]
      },
      {
        "id": "personas",
        "label": "Asistentes previstos",
        "type": "number",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "publicos",
        "label": "A quién invitas y qué necesitan",
        "type": "textarea",
        "required": true,
        "help": "Perfiles y cantidades aproximadas; no incluyas datos individuales.",
        "options": []
      }
    ]
  },
  {
    "num": "03",
    "title": "Demos forma al encargo",
    "subtitle": "Alcance, recursos y presupuesto",
    "fields": [
      {
        "id": "servicios",
        "label": "Qué quieres que coordine ARREA",
        "type": "checks",
        "required": true,
        "help": "",
        "options": [
          "Convocatoria y registro",
          "Recepción y acreditaciones",
          "Coordinación presencial",
          "Networking",
          "Espacio",
          "Catering",
          "Medios audiovisuales",
          "Otros"
        ]
      },
      {
        "id": "otros",
        "label": "Detalle de otros servicios",
        "type": "text",
        "required": false,
        "help": "",
        "options": []
      },
      {
        "id": "recursos",
        "label": "Qué aporta tu empresa y qué está contratado",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "presupuesto",
        "label": "Presupuesto máximo disponible en euros",
        "type": "number",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "impuestos",
        "label": "El presupuesto indicado",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Incluye impuestos",
          "No incluye impuestos",
          "Por confirmar"
        ]
      },
      {
        "id": "prioridades",
        "label": "Qué es imprescindible y qué puede ajustarse",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      }
    ]
  },
  {
    "num": "04",
    "title": "Cuidemos la experiencia",
    "subtitle": "Resultados, riesgos y accesibilidad",
    "fields": [
      {
        "id": "resultados",
        "label": "Qué resultados esperas y cómo los medirías",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "riesgos",
        "label": "Qué podría dificultar el evento",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "accesibilidad",
        "label": "Necesidades de accesibilidad y atención",
        "type": "textarea",
        "required": true,
        "help": "Indica necesidades funcionales de acceso, comunicación o alimentación; evita nombres, diagnósticos y datos de salud. Puedes escribir «Por confirmar».",
        "options": []
      }
    ]
  },
  {
    "num": "05",
    "title": "Preparemos la primera reunión",
    "subtitle": "Preguntas y disponibilidad",
    "fields": [
      {
        "id": "reunion",
        "label": "Cuándo podrías reunirte y qué falta por decidir",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "observaciones",
        "label": "Algo más que debamos saber",
        "type": "textarea",
        "required": false,
        "help": "",
        "options": []
      }
    ]
  }
] as const;
export const exampleBriefing: BriefingValues = {
  "empresa": "Nexo Soluciones, S. L. (ficticia)",
  "contacto": "Lucía Vega · Responsable de marketing",
  "email": "lucia.vega@nexo.test",
  "canal": "Correo",
  "aprobacion": "Lucía valida; dirección aprueba el presupuesto",
  "evento": "Presentación de servicios y networking",
  "objetivo": "Dar a conocer la nueva línea de servicios y facilitar conversaciones con empresas",
  "fecha": "2026-11-12",
  "flexible": "Sí",
  "horario": "09:30 a 13:30",
  "lugar": "Valladolid; sala pendiente de reservar",
  "formato": "Presencial",
  "personas": "60",
  "publicos": "40 clientes y 20 empresas invitadas. Presentación clara y tiempo para conversar.",
  "servicios": [
    "Convocatoria y registro",
    "Recepción y acreditaciones",
    "Coordinación presencial",
    "Networking",
    "Espacio",
    "Catering",
    "Medios audiovisuales"
  ],
  "recursos": "Marca, presentación y dos ponentes propios. No hay proveedores contratados.",
  "presupuesto": "4800",
  "impuestos": "Incluye impuestos",
  "prioridades": "Accesibilidad, atención y networking. Fotografía y vídeo no prioritarios.",
  "resultados": "Al menos 45 asistentes; 80 % de las respuestas a la encuesta con utilidad de 4/5 o más. Medir registro y encuesta.",
  "riesgos": "Baja asistencia y fallo audiovisual. Recordatorio, prueba técnica y copia local.",
  "accesibilidad": "Acceso sin escalones, aseo adaptado y opciones alimentarias. Confirmar necesidades sin solicitar diagnósticos.",
  "reunion": "01/10/2026 por la mañana. Falta elegir sala y confirmar disponibilidad de proveedores.",
  "observaciones": "Caso ficticio B-26-014; enlaza con la propuesta PC-26-014."
};
export const CONTACT_ENDPOINT = 'https://central.sandramangas.com/api/contacto?company=arrea';
export function briefingText(values:BriefingValues,reference:string){
 const lines=['BRIEFING DE NUEVO EVENTO · ARREA','Referencia: '+reference,''];
 for(const section of briefingSections){lines.push(section.title.toUpperCase());for(const field of section.fields){const v=values[field.id];lines.push(field.label+': '+(Array.isArray(v)?v.join(', '):v||'Sin indicar'));}lines.push('');}
 lines.push('Datos ficticios para simulación educativa.');return lines.join('\n');
}
export function validateBriefing(values:BriefingValues){
 for(const section of briefingSections)for(const field of section.fields){const value=values[field.id];if(field.required&&(!value||(Array.isArray(value)?!value.length:!value.trim())))return 'Completa «'+field.label+'».';if(typeof value==='string'&&value.length>(field.type==='textarea'?650:180))return 'Revisa la longitud de «'+field.label+'».';}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email)))return 'Introduce un correo válido.';
 if(!/\.test$/i.test(String(values.email)))return 'Utiliza un correo ficticio terminado en .test.';
 if(String(values.email).length>120)return 'El correo admite hasta 120 caracteres.';
 if(!Number.isInteger(Number(values.personas))||Number(values.personas)<1||Number(values.personas)>100000)return 'Indica un número de asistentes entre 1 y 100000.';
 if(!Number.isFinite(Number(values.presupuesto))||Number(values.presupuesto)<=0)return 'Indica un presupuesto mayor que cero.';
 if(values.canal==='Teléfono'&&!String(values.telefono||'').trim())return 'Indica el teléfono de contacto ficticio.';
 if((values.servicios as string[])?.includes('Otros')&&!String(values.otros||'').trim())return 'Describe los otros servicios.';
 return '';
}
export function briefingMessage(values:BriefingValues,id:string){return {id,senderName:String(values.empresa).slice(0,100),senderAddress:values.email,subject:('Briefing · '+values.evento+' · '+values.empresa).slice(0,160),body:briefingText(values,id),attachmentIds:[],website:''};}
