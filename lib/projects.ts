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
  poster: { top: string; script?: string; bottom: string; mark: string };
  theme: 'raspberry' | 'gold' | 'ink' | 'paper';
  sources: Array<{ label: string; url: string }>;
};

export const projects: Project[] = [
  {
    slug: 'expods',
    code: 'AR / ODS / 01',
    title: 'ExpoODS',
    year: '2022–2023',
    category: 'Exposición digital eTwinning',
    location: 'IES Arca Real · Entorno europeo',
    status: 'Proyecto destacado',
    summary:
      'Una exposición virtual para descubrir los Objetivos de Desarrollo Sostenible mediante recursos digitales creados por el alumnado.',
    context:
      'ExpoODS nació desde el Aula de Emprendimiento del IES Arca Real y se integró en el proyecto eTwinning SustainABLE. Participaron estudiantes de Administración y Finanzas y de Asistencia a la Dirección, junto con alumnado de otros centros y países.',
    challenge:
      'Convertir los ODS de la Agenda 2030 en una experiencia comprensible, visual y abierta a la comunidad, coordinando investigación, contenidos, diseño digital y colaboración internacional.',
    scope: [
      'Investigación y selección de contenidos sobre los ODS',
      'Coordinación entre grupos, centros y familias profesionales',
      'Creación de infografías, vídeos y recursos divulgativos',
      'Diseño de una visita virtual al hall del centro',
      'Publicación y mantenimiento de la experiencia web',
    ],
    work: [
      'Sitio web creado y gestionado por el alumnado',
      'Exposición virtual 3D desarrollada con ThingLink',
      'Recursos audiovisuales y piezas informativas',
      'Adaptación digital de una exposición de UNICEF',
      'Organización de evidencias y contenidos del proyecto',
    ],
    phases: [
      { title: 'Investigar', text: 'Comprender los ODS y seleccionar mensajes útiles para distintos públicos.' },
      { title: 'Diseñar', text: 'Transformar la investigación en piezas visuales, vídeos y recorridos digitales.' },
      { title: 'Conectar', text: 'Coordinar aportaciones dentro del proyecto europeo eTwinning SustainABLE.' },
      { title: 'Publicar', text: 'Construir una experiencia web accesible para el centro y su comunidad.' },
    ],
    learning: [
      'Competencia digital aplicada a un proyecto público',
      'Comunicación y síntesis de información compleja',
      'Trabajo cooperativo e internacional',
      'Sostenibilidad y ciudadanía europea',
      'Gestión de contenidos web y multimedia',
    ],
    poster: { top: 'EXP', script: 'los', bottom: 'ODS', mark: '2030' },
    theme: 'raspberry',
    sources: [
      { label: 'Visitar la experiencia ExpoODS', url: 'https://expods.decasarre.es/' },
      { label: 'Origen, objetivos y centros participantes', url: 'https://expods.decasarre.es/sobre-nosotros/' },
      { label: 'Los ODS en la web original', url: 'https://expods.decasarre.es/ods/' },
      { label: 'OreODS · Acción solidaria de 2022', url: 'https://expods.decasarre.es/oreods/' },
      { label: 'Recorrido virtual en ThingLink', url: 'https://www.thinglink.com/mediacard/1543568065126465538' },
      { label: 'Proyecto TIC del IES Arca Real', url: 'https://iesarcareal.es/proyecto-tic/' },
    ],
  },
  {
    slug: 'feria-arcadeca-2022',
    code: 'AR / 22 / 01',
    title: 'Feria ARCADECA',
    year: '2022',
    category: 'Feria híbrida de empresas simuladas',
    location: 'IES Arca Real · Valladolid',
    status: 'Proyecto de archivo',
    summary:
      'Una feria presencial y virtual que conectó empresas simuladas, centros educativos y herramientas digitales en una misma experiencia.',
    context:
      'La I Feria de Empresas Simuladas ARCADECA se celebró el 24 de febrero de 2022 como un proyecto interdepartamental, interciclos e intercentros. Reunió tres stands presenciales —Arcas Reales, Decasarre y Riberpublic— y un entorno virtual abierto a más empresas de Castilla y León.',
    challenge:
      'Diseñar una feria híbrida en la que la actividad presencial y la participación remota funcionaran como un único evento, con información clara, identidad común y canales de relación comercial entre empresas simuladas.',
    scope: [
      'Diseño de la feria virtual y organización de sus espacios',
      'Coordinación de empresas y centros participantes',
      'Campaña de comunicación y gestión de mensajes',
      'Talleres de diseño de stands, redes sociales e impresión 3D',
      'Atención a visitantes y apoyo a operaciones comerciales',
    ],
    work: [
      'Sitio de la feria construido con WordPress',
      'Plano interactivo y stands virtuales creados con Genially',
      'Vídeos, catálogos y accesos a tiendas en línea',
      'Videollamadas mediante Zoom, Teams y Google Meet',
      'Campaña en redes y comunicaciones gestionadas por Arrea Eventos',
    ],
    phases: [
      { title: 'Conectar', text: 'Definir participantes, públicos, necesidades y canales de coordinación.' },
      { title: 'Construir', text: 'Diseñar la web, el plano de la feria y los materiales de cada stand.' },
      { title: 'Comunicar', text: 'Planificar la campaña, centralizar mensajes y preparar la atención.' },
      { title: 'Activar', text: 'Coordinar stands, talleres, encuentros virtuales y operaciones de la jornada.' },
    ],
    learning: [
      'Organización integral de eventos híbridos',
      'Coordinación intercentros y trabajo en red',
      'Diseño y gestión de entornos digitales',
      'Comunicación profesional y redes sociales',
      'Iniciativa emprendedora y relación comercial',
    ],
    poster: { top: 'ARCA', script: 'en', bottom: 'RED', mark: '2022' },
    theme: 'gold',
    sources: [
      {
        label: 'Presentación de la feria · IES Arca Real',
        url: 'https://iesarcareal.es/i-feria-de-empresas-simuladas-arcadeca/',
      },
      {
        label: 'Crónica, fotografías y vídeo · Decasarre',
        url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/',
      },
      { label: 'Feria virtual original · Genially', url: 'https://view.genial.ly/61f42788de478f00129f446e' },
      { label: 'Resumen de la jornada · YouTube', url: 'https://www.youtube.com/watch?v=PV-Iv9-gqKw' },
    ],
  },
  {
    slug: 'arca-impulsa-fp',
    code: 'AR / FP / 03',
    title: 'Arca Impulsa FP',
    year: '2023–2026',
    category: 'Jornadas de Formación Profesional',
    location: 'IES Arca Real · Valladolid',
    status: 'Proyecto en evolución',
    summary:
      'Una serie de jornadas para mostrar la FP desde dentro, con espacios, talleres y comunicación organizados por el propio alumnado.',
    context:
      'Arca Impulsa FP acerca la oferta de Formación Profesional del IES Arca Real a futuros estudiantes. En sus distintas ediciones han trabajado conjuntamente Arrea Eventos, Decasarre y Arcas Reales, dentro del proyecto ArcaDeca y Aula Empresa+.',
    challenge:
      'Presentar la FP de una forma útil y participativa, haciendo que quienes visitan el centro conozcan sus ciclos a través de experiencias, demostraciones y conversaciones con el alumnado.',
    scope: [
      'Concepto, identidad y planificación general de la jornada',
      'Diseño y montaje de espacios, stands y materiales',
      'Coordinación de talleres, visitas y actividades',
      'Comunicación del programa y atención a participantes',
      'Evaluación y mejora de una edición a la siguiente',
    ],
    work: [
      'Programas, cartelería y materiales de difusión',
      'Talleres de comunicación, marketing, redes sociales e IA',
      'Recorridos por espacios formativos y demostraciones 3D',
      'Dinámicas y juegos diseñados para visitantes',
      'Presentación, acogida y desarrollo operativo del evento',
    ],
    phases: [
      { title: 'Escuchar', text: 'Definir qué necesita conocer el alumnado visitante y cómo contarlo.' },
      { title: 'Proyectar', text: 'Diseñar espacios, programa, materiales y responsabilidades del equipo.' },
      { title: 'Recibir', text: 'Conducir la jornada, acompañar a los grupos y resolver incidencias.' },
      { title: 'Evolucionar', text: 'Documentar resultados y convertir cada edición en base para la siguiente.' },
    ],
    learning: [
      'Dirección y coordinación de equipos',
      'Comunicación institucional y atención al público',
      'Diseño de experiencias y espacios',
      'Presentación oral y dinamización de grupos',
      'Competencia digital aplicada a la orientación',
    ],
    poster: { top: 'ARCA', script: 'impulsa', bottom: 'FP', mark: '03' },
    theme: 'ink',
    sources: [
      { label: 'Blog de Arca Impulsa FP', url: 'https://blog-arcaimpulsafp.webnode.es/' },
      {
        label: 'III Jornada en el IES Arca Real',
        url: 'https://iesarcareal.es/asi-vivimos-la-iii-jornada-arca-impulsa-fp/',
      },
    ],
  },
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
    poster: { top: 'VOCES', script: 'que', bottom: 'INSPIRAN', mark: '2025' },
    theme: 'paper',
    sources: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
