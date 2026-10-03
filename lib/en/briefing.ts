export type BriefingValues = Record<string,string|string[]>;
export const briefingSections = [
  {
    "num": "01",
    "title": "Let us start with you",
    "subtitle": "Contact and decision-making",
    "fields": [
      {
        "id": "empresa",
        "label": "Company",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "contacto",
        "label": "Name and role",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "email",
        "label": "Contact email",
        "type": "email",
        "required": true,
        "help": "Use only a fictional email address ending in .test.",
        "options": []
      },
      {
        "id": "canal",
        "label": "Preferred channel",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Email",
          "Phone",
          "Online meeting"
        ]
      },
      {
        "id": "telefono",
        "label": "Fictional phone number if you choose this channel",
        "type": "text",
        "required": false,
        "help": "",
        "options": []
      },
      {
        "id": "aprobacion",
        "label": "Who approves the proposal and budget",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      }
    ]
  },
  {
    "num": "02",
    "title": "Tell us about the event",
    "subtitle": "Format, date and people",
    "fields": [
      {
        "id": "evento",
        "label": "Event name and type",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "objetivo",
        "label": "What you want to achieve",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "fecha",
        "label": "Preferred date",
        "type": "date",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "flexible",
        "label": "Is the date flexible?",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Yes",
          "No",
          "To be confirmed"
        ]
      },
      {
        "id": "horario",
        "label": "Planned schedule",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "lugar",
        "label": "City and venue, if known",
        "type": "text",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "formato",
        "label": "Format",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "In person",
          "Hybrid",
          "Online"
        ]
      },
      {
        "id": "personas",
        "label": "Expected attendees",
        "type": "number",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "publicos",
        "label": "Who you are inviting and what they need",
        "type": "textarea",
        "required": true,
        "help": "Audience profiles and approximate numbers; do not include individual details.",
        "options": []
      }
    ]
  },
  {
    "num": "03",
    "title": "Let us shape the brief",
    "subtitle": "Scope, resources and budget",
    "fields": [
      {
        "id": "servicios",
        "label": "What you want ARREA to coordinate",
        "type": "checks",
        "required": true,
        "help": "",
        "options": [
          "Invitations and registration",
          "Reception and badges",
          "On-site coordination",
          "Networking",
          "Venue",
          "Catering",
          "Audiovisual equipment",
          "Other"
        ]
      },
      {
        "id": "otros",
        "label": "Details of other services",
        "type": "text",
        "required": false,
        "help": "",
        "options": []
      },
      {
        "id": "recursos",
        "label": "What your company provides and what is already booked",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "presupuesto",
        "label": "Maximum available budget in euros",
        "type": "number",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "impuestos",
        "label": "The stated budget",
        "type": "select",
        "required": true,
        "help": "",
        "options": [
          "Includes taxes",
          "Excludes taxes",
          "To be confirmed"
        ]
      },
      {
        "id": "prioridades",
        "label": "What is essential and what can be adjusted",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      }
    ]
  },
  {
    "num": "04",
    "title": "Let us take care of the experience",
    "subtitle": "Outcomes, risks and accessibility",
    "fields": [
      {
        "id": "resultados",
        "label": "Expected outcomes and how you would measure them",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "riesgos",
        "label": "What could make the event difficult",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "accesibilidad",
        "label": "Accessibility and support requirements",
        "type": "textarea",
        "required": true,
        "help": "Describe practical access, communication or dietary requirements; avoid names, diagnoses and health information. You can write “To be confirmed”.",
        "options": []
      }
    ]
  },
  {
    "num": "05",
    "title": "Let us prepare our first meeting",
    "subtitle": "Questions and availability",
    "fields": [
      {
        "id": "reunion",
        "label": "When you can meet and what remains to be decided",
        "type": "textarea",
        "required": true,
        "help": "",
        "options": []
      },
      {
        "id": "observaciones",
        "label": "Anything else we should know",
        "type": "textarea",
        "required": false,
        "help": "",
        "options": []
      }
    ]
  }
] as const;
export const exampleBriefing: BriefingValues = {
  "empresa": "Nexo Soluciones, S. L. (fictional)",
  "contacto": "Lucía Vega · Marketing manager",
  "email": "lucia.vega@nexo.test",
  "canal": "Email",
  "aprobacion": "Lucía reviews; management approves the budget",
  "evento": "Service launch and networking",
  "objetivo": "Introduce the new service range and facilitate conversations with businesses",
  "fecha": "2026-11-12",
  "flexible": "Yes",
  "horario": "09:30 to 13:30",
  "lugar": "Valladolid; venue to be booked",
  "formato": "In person",
  "personas": "60",
  "publicos": "40 clients and 20 invited businesses. A clear presentation and time for conversations.",
  "servicios": [
    "Invitations and registration",
    "Reception and badges",
    "On-site coordination",
    "Networking",
    "Venue",
    "Catering",
    "Audiovisual equipment"
  ],
  "recursos": "Brand assets, presentation and two in-house speakers. No suppliers booked yet.",
  "presupuesto": "4800",
  "impuestos": "Includes taxes",
  "prioridades": "Accessibility, guest support and networking. Photography and video are not priorities.",
  "resultados": "At least 45 attendees; 80% of survey responses rate usefulness at 4/5 or higher. Measure using registration records and a survey.",
  "riesgos": "Low attendance and AV failure. Send reminders, run a technical check and keep a local backup.",
  "accesibilidad": "Step-free access, an accessible toilet and dietary options. Confirm requirements without asking for diagnoses.",
  "reunion": "Morning of 1 October 2026. Venue selection and supplier availability still to be confirmed.",
  "observaciones": "Fictional case B-26-014; linked to proposal PC-26-014."
};
export const CONTACT_ENDPOINT = 'https://central.sandramangas.com/api/contacto?company=arrea';
export function briefingText(values:BriefingValues,reference:string){
 const lines=['NEW EVENT BRIEF · ARREA','Reference: '+reference,''];
 for(const section of briefingSections){lines.push(section.title.toUpperCase());for(const field of section.fields){const v=values[field.id];lines.push(field.label+': '+(Array.isArray(v)?v.join(', '):v||'Not specified'));}lines.push('');}
 lines.push('Fictional details for educational simulation.');return lines.join('\n');
}
export function validateBriefing(values:BriefingValues){
 for(const section of briefingSections)for(const field of section.fields){const value=values[field.id];if(field.required&&(!value||(Array.isArray(value)?!value.length:!value.trim())))return 'Complete “'+field.label+'”.';if(typeof value==='string'&&value.length>(field.type==='textarea'?650:180))return 'Check the length of “'+field.label+'”.';}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email)))return 'Enter a valid email address.';
 if(!/\.test$/i.test(String(values.email)))return 'Use a fictional email address ending in .test.';
 if(String(values.email).length>120)return 'The email address can contain up to 120 characters.';
 if(!Number.isInteger(Number(values.personas))||Number(values.personas)<1||Number(values.personas)>100000)return 'Enter an attendee count between 1 and 100000.';
 if(!Number.isFinite(Number(values.presupuesto))||Number(values.presupuesto)<=0)return 'Enter a budget greater than zero.';
 if(values.canal==='Phone'&&!String(values.telefono||'').trim())return 'Enter the fictional contact phone number.';
 if((values.servicios as string[])?.includes('Other')&&!String(values.otros||'').trim())return 'Describe the other services.';
 return '';
}
export function briefingMessage(values:BriefingValues,id:string){return {id,senderName:String(values.empresa).slice(0,100),senderAddress:values.email,subject:('Briefing · '+values.evento+' · '+values.empresa).slice(0,160),body:briefingText(values,id),attachmentIds:[],website:''};}

