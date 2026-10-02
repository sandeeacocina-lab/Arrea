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
    category: 'eTwinning digital exhibition',
    location: 'IES Arca Real · European context',
    status: 'Featured project',
    summary:
      'A virtual exhibition exploring the Sustainable Development Goals through digital resources created by students.',
    context:
      'ExpoODS began in the Entrepreneurship Classroom at IES Arca Real and became part of the eTwinning SustainABLE project. Students from Administration and Finance and Management Assistance took part alongside students from other schools and countries.',
    challenge:
      'To turn the SDGs of the 2030 Agenda into a clear, visual experience open to the community, coordinating research, content, digital design and international collaboration.',
    scope: [
      'Researching and selecting content on the SDGs',
      'Coordination across groups, schools and vocational fields',
      'Creating infographics, videos and educational resources',
      'Designing a virtual tour of the school hall',
      'Publishing and maintaining the web experience',
    ],
    work: [
      'Website created and managed by students',
      '3D virtual exhibition developed with ThingLink',
      'Audiovisual resources and information materials',
      'Digital adaptation of a UNICEF exhibition',
      'Organising project evidence and content',
    ],
    phases: [
      { title: 'Research', text: 'Understand the SDGs and select useful messages for different audiences.' },
      { title: 'Design', text: 'Turn research into visual materials, videos and digital tours.' },
      { title: 'Connect', text: 'Coordinate contributions within the European eTwinning SustainABLE project.' },
      { title: 'Publish', text: 'Build an accessible web experience for the school and its community.' },
    ],
    learning: [
      'Digital skills applied to a public project',
      'Communicating and summarising complex information',
      'Cooperative and international teamwork',
      'Sustainability and European citizenship',
      'Managing web and multimedia content',
    ],
    poster: { top: 'Expo', bottom: 'ODS', mark: '2022–2023' },
    theme: 'raspberry',
    sources: [
      { label: 'Visit the ExpoODS experience', url: 'https://expods.decasarre.es/' },
      { label: 'Origins, objectives and participating schools', url: 'https://expods.decasarre.es/sobre-nosotros/' },
      { label: 'The SDGs on the original website', url: 'https://expods.decasarre.es/ods/' },
      { label: 'OreODS · 2022 fundraising initiative', url: 'https://expods.decasarre.es/oreods/' },
      { label: 'Virtual tour on ThingLink', url: 'https://www.thinglink.com/mediacard/1543568065126465538' },
      { label: 'IES Arca Real ICT project', url: 'https://iesarcareal.es/proyecto-tic/' },
    ],
  },
  {
    slug: 'feria-arcadeca-2022',
    code: 'AR / 22 / 01',
    title: 'Feria ARCADECA',
    year: '2022',
    category: 'Hybrid practice enterprise fair',
    location: 'IES Arca Real · Valladolid',
    status: 'Archived project',
    summary:
      'An in-person and virtual fair that brought practice enterprises, schools and digital tools together in one experience.',
    context:
      'The first ARCADECA Practice Enterprise Fair took place on 24 February 2022 as a project across departments, programmes and schools. It brought together three physical stands — Arcas Reales, Decasarre and Riberpublic — and a virtual space open to other enterprises from Castilla y León.',
    challenge:
      'To design a hybrid fair where in-person activities and remote participation worked as one event, with clear information, a shared identity and channels for business relationships between practice enterprises.',
    scope: [
      'Designing the virtual fair and organising its spaces',
      'Coordinating participating enterprises and schools',
      'Communication campaign and message management',
      'Workshops on stand design, social media and 3D printing',
      'Visitor support and assistance with business transactions',
    ],
    work: [
      'Fair website built with WordPress',
      'Interactive floor plan and virtual stands created with Genially',
      'Videos, catalogues and links to online shops',
      'Video calls via Zoom, Teams and Google Meet',
      'Social media campaign and communications managed by Arrea Eventos',
    ],
    phases: [
      { title: 'Connect', text: 'Define participants, audiences, needs and coordination channels.' },
      { title: 'Build', text: 'Design the website, fair floor plan and materials for each stand.' },
      { title: 'Communicate', text: 'Plan the campaign, centralise messages and prepare visitor support.' },
      { title: 'Deliver', text: 'Coordinate stands, workshops, virtual meetings and transactions throughout the day.' },
    ],
    learning: [
      'End-to-end management of hybrid events',
      'Coordination and networking across schools',
      'Designing and managing digital environments',
      'Professional communication and social media',
      'Entrepreneurial initiative and business relationships',
    ],
    poster: { top: 'Feria', bottom: 'ARCADECA', mark: '2022' },
    theme: 'gold',
    sources: [
      {
        label: 'Fair announcement · IES Arca Real',
        url: 'https://iesarcareal.es/i-feria-de-empresas-simuladas-arcadeca/',
      },
      {
        label: 'Report, photographs and video · Decasarre',
        url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/',
      },
      { label: 'Original virtual fair · Genially', url: 'https://view.genial.ly/61f42788de478f00129f446e' },
      { label: 'Event highlights · YouTube', url: 'https://www.youtube.com/watch?v=PV-Iv9-gqKw' },
    ],
  },
  {
    slug: 'arca-impulsa-fp',
    code: 'AR / FP / 03',
    title: 'Arca Impulsa FP',
    year: '2023–2026',
    category: 'Vocational education events',
    location: 'IES Arca Real · Valladolid',
    status: 'Evolving project',
    summary:
      'A series of events offering an inside look at vocational education, with spaces, workshops and communications organised by students themselves.',
    context:
      'Arca Impulsa FP introduces prospective students to vocational programmes at IES Arca Real. Across its different editions, Arrea Eventos, Decasarre and Arcas Reales have worked together within the ArcaDeca project and Aula Empresa+.',
    challenge:
      'To present vocational education in a useful, participatory way, helping visitors discover the programmes through experiences, demonstrations and conversations with students.',
    scope: [
      'Event concept, identity and overall planning',
      'Designing and setting up spaces, stands and materials',
      'Coordinating workshops, visits and activities',
      'Communicating the programme and supporting participants',
      'Evaluation and improvement from one edition to the next',
    ],
    work: [
      'Programmes, posters and promotional materials',
      'Workshops on communication, marketing, social media and AI',
      'Tours of learning spaces and 3D demonstrations',
      'Activities and games designed for visitors',
      'Presenting, welcoming and delivering the event',
    ],
    phases: [
      { title: 'Listen', text: 'Identify what visiting students need to know and how to explain it.' },
      { title: 'Plan', text: 'Design the spaces, programme, materials and team responsibilities.' },
      { title: 'Welcome', text: 'Run the event, guide groups and resolve issues.' },
      { title: 'Develop', text: 'Document results and use each edition as the starting point for the next.' },
    ],
    learning: [
      'Leading and coordinating teams',
      'Institutional communication and visitor support',
      'Designing experiences and spaces',
      'Public speaking and group facilitation',
      'Digital skills applied to educational guidance',
    ],
    poster: { top: 'Arca', script: 'Impulsa', bottom: 'FP', mark: '2023–2026' },
    theme: 'paper',
    sources: [
      { label: 'Arca Impulsa FP blog', url: 'https://blog-arcaimpulsafp.webnode.es/' },
      {
        label: 'Third event at IES Arca Real',
        url: 'https://iesarcareal.es/asi-vivimos-la-iii-jornada-arca-impulsa-fp/',
      },
    ],
  },
  {
    slug: 'voces-que-inspiran',
    code: 'AR / 25 / 01',
    title: 'Voces que inspiran',
    year: '2025',
    category: 'Educational event',
    location: 'IES Arca Real · Valladolid',
    status: 'Completed project',
    summary: 'An event coordinated through protocol, production and communication.',
    context:
      'Voces que inspiran was conceived as an educational event where students could combine different management assistance roles within one project.',
    challenge:
      'To build a coherent experience for participants and attendees, keeping the schedule, welcome, staging and event documentation under control.',
    scope: [
      'Defining the programme and operational schedule',
      'Communicating with participants and coordinating schedules',
      'Protocol, reception and support during the event',
      'Production support and space management',
      'Collecting evidence and preparing the final report',
    ],
    work: [
      'Run sheet and allocation of responsibilities',
      'Documentation for participants and the organising team',
      'Information materials and follow-up messages',
      'Records of requirements, materials and incidents',
      'Evaluating project delivery',
    ],
    phases: [
      { title: 'Brief', text: 'Review requirements, audiences and project conditions.' },
      { title: 'Preparation', text: 'Operational plan, documentation, communications and internal coordination.' },
      { title: 'Event day', text: 'Reception, protocol, support and monitoring of the planned programme.' },
      { title: 'Wrap-up', text: 'Collect evidence, evaluate and propose improvements.' },
    ],
    learning: [
      'Organising work and managing priorities',
      'Professional communication with different stakeholders',
      'Protocol and participant support',
      'Document production and traceability',
      'Evaluation and continuous improvement',
    ],
    poster: { top: 'Voces', script: 'que', bottom: 'inspiran', mark: '2025' },
    theme: 'ink',
    sources: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

