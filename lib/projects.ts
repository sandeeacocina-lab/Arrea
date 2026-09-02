export type Project = {
  slug: string;
  code: string;
  title: string;
  year: string;
  category: string;
  location: string;
  status: string;
  summary: string;
  context: string;
  challenge: string;
  scope: string[];
  work: string[];
  phases: Array<{ title: string; text: string }>;
  learning: string[];
};

export const projects: Project[] = [
  {
    slug: 'voces-que-inspiran',
    code: 'AR / 25 / 01',
    title: 'Voces que inspiran',
    year: '2025',
    category: 'Jornada educativa',
    location: 'IES Arca Real · Valladolid',
    status: 'Proyecto realizado',
    summary: 'Una jornada coordinada desde el protocolo, la producción y la comunicación.',
    context:
      'Voces que inspiran se planteó como una jornada educativa en la que el alumnado pudo integrar distintas funciones de asistencia a la dirección dentro de un único proyecto.',
    challenge:
      'Construir una experiencia coherente para participantes y asistentes, manteniendo bajo control la agenda, la acogida, la puesta en escena y la documentación del evento.',
    scope: [
      'Definición del programa y cronograma operativo',
      'Comunicación con participantes y coordinación de agenda',
      'Protocolo, recepción y atención durante la jornada',
      'Apoyo a la producción y control de espacios',
      'Recogida de evidencias y memoria final',
    ],
    work: [
      'Guion de trabajo y distribución de responsabilidades',
      'Documentación para participantes y equipo organizador',
      'Piezas informativas y mensajes de seguimiento',
      'Relación de necesidades, materiales e incidencias',
      'Evaluación del desarrollo del proyecto',
    ],
    phases: [
      { title: 'Encargo', text: 'Lectura de necesidades, públicos y condiciones del proyecto.' },
      { title: 'Preparación', text: 'Plan operativo, documentación, comunicaciones y coordinación interna.' },
      { title: 'Jornada', text: 'Recepción, protocolo, asistencia y control del desarrollo previsto.' },
      { title: 'Cierre', text: 'Recopilación de evidencias, valoración y propuestas de mejora.' },
    ],
    learning: [
      'Organización del trabajo y gestión de prioridades',
      'Comunicación profesional con distintos interlocutores',
      'Protocolo y atención a participantes',
      'Producción documental y trazabilidad',
      'Evaluación y mejora continua',
    ],
  },
  {
    slug: 'feria-arcadeca-2022',
    code: 'AR / 22 / 01',
    title: 'Feria ARCADECA',
    year: '2022',
    category: 'Feria educativa',
    location: 'IES Arca Real · Valladolid',
    status: 'Proyecto de archivo',
    summary: 'Un proyecto de feria que reunió secretaría técnica, atención y difusión.',
    context:
      'La Feria ARCADECA forma parte del archivo histórico de Arrea. El proyecto permitió trabajar la lógica de una feria educativa: múltiples participantes, espacios simultáneos y una comunicación común.',
    challenge:
      'Ordenar información, tiempos, necesidades y atención a participantes para que la feria funcionara como un conjunto y no como actividades aisladas.',
    scope: [
      'Organización de información y programa de la feria',
      'Secretaría técnica y coordinación de participantes',
      'Preparación de espacios, materiales y señalización',
      'Atención y orientación durante el encuentro',
      'Difusión de contenidos vinculados al proyecto',
    ],
    work: [
      'Relación de participantes y necesidades',
      'Agenda general y documentación de apoyo',
      'Mensajes organizativos y piezas de difusión',
      'Distribución de funciones del equipo',
      'Registro del desarrollo de la feria',
    ],
    phases: [
      { title: 'Mapa de agentes', text: 'Identificación de participantes, necesidades y canales de contacto.' },
      { title: 'Plan de feria', text: 'Ordenación de agenda, espacios, materiales y responsabilidades.' },
      { title: 'Operación', text: 'Acogida, orientación y coordinación del funcionamiento general.' },
      { title: 'Archivo', text: 'Organización de documentos y aprendizajes para futuras ediciones.' },
    ],
    learning: [
      'Coordinación de múltiples interlocutores',
      'Gestión de información y documentación compartida',
      'Organización de espacios y tiempos',
      'Atención al público y comunicación presencial',
      'Trabajo cooperativo orientado a un resultado',
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

