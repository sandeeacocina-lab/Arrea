export type ProjectMedia = {
  label: string;
  title: string;
  provider: 'ThingLink' | 'Genially' | 'YouTube';
  description: string;
  url: string;
  embedUrl: string;
  preview: string;
};

export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectDossier = {
  intro: string;
  website: { label: string; url: string };
  media: ProjectMedia[];
  story: { title: string; paragraphs: string[] };
  contributions: Array<{ title: string; text: string }>;
  participants: Array<{ name: string; detail: string }>;
  participantsNote: string;
  galleryTitle: string;
  photos: ProjectPhoto[];
  photoCredit: { label: string; url: string };
  chapters: Array<{ label: string; title: string; text: string }>;
  classroom: string;
  archiveNote: string;
};

const expo = '/images/projects/expods';
const feria = '/images/projects/arcadeca';

const expoGenially = [
  { id: '61e2e74d1cb3c70d26b53b5a', key: 'agua', label: 'SDG 06', title: 'Clean water and sanitation', description: 'An interactive infographic exploring the targets of SDG 6.' },
  { id: '61e8685d459168001275489e', key: 'ciudades', label: 'SDG 11', title: 'Sustainable cities and communities', description: 'A visual map with information points about urban sustainability.' },
  { id: '61e86dfddb8673001263d514', key: 'consumo', label: 'SDG 12', title: 'Responsible consumption and production', description: 'Information on consumption, water, waste, energy and food.' },
  { id: '61e8657b45916800127547da', key: 'clima', label: 'SDG 13', title: 'Climate action', description: 'A resource from the 2022 archive about environmental challenges and everyday habits. Its content is preserved as evidence of student work.' },
  { id: '6217a8e80ea12a0011b34a34', key: 'vida-submarina', label: 'SDG 14 · Quiz', title: 'Curious facts about the ocean', description: 'A quiz in English to explore what we know about life underwater.' },
  { id: '61f91e569dca580013d76149', key: 'alianzas', label: 'SDG 17', title: 'Partnerships for the goals', description: 'A presentation in English about cooperation and partnerships at different levels.' },
];

export const projectDossiers: Record<string, ProjectDossier> = {
  expods: {
    intro: 'Tour the exhibition in 360°, explore its 3D cubes and open a selection of its Genially resources. These materials belong to the collaborative SustainABLE project and retain their original credits.',
    website: { label: 'Visit the ExpoODS website', url: 'https://expods.decasarre.es/' },
    media: [
      {
        label: '360° tour',
        title: 'An exhibition you can explore',
        provider: 'ThingLink',
        description: 'Move around the hall at IES Arca Real and select the interactive points. The cubes let you explore the 17 SDGs and the resources associated with each one.',
        url: 'https://www.thinglink.com/mediacard/1543568065126465538',
        embedUrl: 'https://www.thinglink.com/mediacard/1543568065126465538',
        preview: `${expo}/exposicion.jpeg`,
      },
      ...expoGenially.map((item): ProjectMedia => ({
        label: item.label,
        title: item.title,
        provider: 'Genially',
        description: item.description,
        url: `https://view.genial.ly/${item.id}`,
        embedUrl: `https://view.genial.ly/${item.id}`,
        preview: `${expo}/genially-${item.key}.jpg`,
      })),
      {
        label: 'Project video',
        title: 'SustainABLE: the shared project',
        provider: 'YouTube',
        description: 'A video published by SustainABLE introducing the eTwinning project that includes ExpoODS.',
        url: 'https://www.youtube.com/watch?v=_UjLHdJcX7U',
        embedUrl: 'https://www.youtube-nocookie.com/embed/_UjLHdJcX7U',
        preview: `${expo}/montaje.jpeg`,
      },
    ],
    story: {
      title: 'From a school hall to an open exhibition.',
      paragraphs: [
        'The starting point was a UNICEF exhibition installed at IES Arca Real in January 2022. Its cubes introduced the 17 Sustainable Development Goals to people passing through the hall. The next step was to make that visit possible from outside the school too.',
        'Through the Entrepreneurship Classroom, first-year Administration and Finance students and second-year Management Assistance students — Arrea Eventos — took part in its digital transformation. The website and virtual exhibition were developed with three other schools within eTwinning SustainABLE.',
        'The result combines the physical space, an immersive tour and SDG resources. The original website is credited to Arrea Eventos for IES Arca Real; the interactive resources bring together contributions from all participants.',
      ],
    },
    contributions: [
      { title: 'Documenting the space', text: '360° photographs taken with a mobile phone and cubes digitised using a 3D scanner.' },
      { title: 'Creating the content', text: 'Selected information, Genially and Canva infographics, videos and sustainability activities.' },
      { title: 'Providing access', text: 'Integrating the materials into ThingLink and a website so the exhibition can be explored and reused.' },
    ],
    participants: [
      { name: 'IES Arca Real', detail: 'Valladolid · Spain' },
      { name: 'Sant Josep Obrer', detail: 'Palma · Spain' },
      { name: 'Asunción de Nuestra Señora', detail: 'Benaguasil · Spain' },
      { name: 'Agrupamento de Escolas Amadeo de Souza-Cardoso', detail: 'Portugal' },
    ],
    participantsNote: 'Participating schools listed on the ExpoODS website. ThingLink supported the educational use of the 3D models.',
    galleryTitle: 'Before the screen, the space.',
    photos: [
      { src: `${expo}/exposicion.jpeg`, alt: 'Cubes displaying the 17 Sustainable Development Goals in the hall at IES Arca Real.', caption: 'The 17 SDGs brought together in the physical exhibition.', width: 1280, height: 887 },
      { src: `${expo}/montaje.jpeg`, alt: 'Overview of the hall with the UNICEF cube exhibition.', caption: 'The space that inspired the virtual tour.', width: 1280, height: 960 },
      { src: `${expo}/cubos-ods.jpeg`, alt: 'Two students beside the cubes in the SDG exhibition.', caption: 'Students beside the school exhibition.', width: 1280, height: 1399 },
      { src: `${expo}/hall.jpeg`, alt: 'The backs of the cubes displaying exhibition photographs and messages.', caption: 'The different faces of the cubes display images and messages.', width: 980, height: 1307 },
    ],
    photoCredit: { label: 'ExpoODS photo archive · IES Arca Real', url: 'https://expods.decasarre.es/' },
    chapters: [
      { label: 'Technology with a purpose', title: '17 goals. Many ways to learn.', text: 'The 360° tour places visitors inside the space; 3D models let them rotate each cube; infographics and games provide further information. The selection above is a starting point: the original tour contains more materials and activities.' },
      { label: 'Fundraising initiative · March 2022', title: 'OreODS: from awareness to action.', text: 'The project also included an SDG-themed charity biscuit campaign led by first-year Administration and Finance students. A post dated 22 March 2022 announced that the proceeds would go to UNICEF for the emergency in Ukraine. It is preserved as part of the project history, rather than an active sales or fundraising campaign.' },
    ],
    classroom: 'Possible follow-up work in the practice enterprise module (PES): prepare a guided tour, review whether an information resource and its sources are still current, create an accessible version and document its publication. These are possible new learning tasks, not outcomes attributed to the original project.',
    archiveNote: 'The interactive resources are historical materials. They may contain information, links or features that have changed since their creation. The current project address is expods.decasarre.es.',
  },
  'feria-arcadeca-2022': {
    intro: 'The original Genially floor plan, event video and photographs document the first ARCADECA fair: an in-person and virtual gathering of practice enterprises.',
    website: { label: 'Read the fair report', url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/' },
    media: [
      {
        label: 'Fair on Genially',
        title: 'Enter the virtual fair',
        provider: 'Genially',
        description: 'The floor plan brings together the virtual stands and the Arrea Eventos space. Each enterprise added presentation materials and contact channels. This is the original 2022 resource: some internal links may no longer work.',
        url: 'https://view.genial.ly/61f42788de478f00129f446e',
        embedUrl: 'https://view.genial.ly/61f42788de478f00129f446e',
        preview: `${feria}/plano-genially.jpg`,
      },
      {
        label: 'Event video',
        title: 'The first ARCADECA in action',
        provider: 'YouTube',
        description: 'Fair highlights published by Decasarre. An audiovisual record of the gathering on 24 February 2022.',
        url: 'https://www.youtube.com/watch?v=PV-Iv9-gqKw',
        embedUrl: 'https://www.youtube-nocookie.com/embed/PV-Iv9-gqKw',
        preview: `${feria}/operaciones-comerciales.jpg`,
      },
    ],
    story: {
      title: 'A real fair for practice enterprises.',
      paragraphs: [
        'On 24 February 2022, ARCADECA connected in-person activity at IES Arca Real with enterprises taking part remotely. The first edition was organised on a local scale due to pandemic restrictions and combined three physical stands with a virtual fair.',
        'Second-year Management Assistance students handled digital organisation through Arrea Eventos: a WordPress website, Genially floor plan and stands, a social media campaign and communications. The event formed part of collaboration with IES Ribera de Castilla under the Aula-Empresa framework.',
        'The stands brought together videos, brochures and online shops. Business conversations could continue on Zoom, Teams or Google Meet. Customer service and simulated trading practice took place alongside the production of an event with real visitors, spaces and schedules.',
      ],
    },
    contributions: [
      { title: 'The fair website', text: 'A shared information point on WordPress to introduce the gathering and organise access to its content.' },
      { title: 'The digital venue', text: 'A Genially floor plan with interactive stands, business documentation and links to enterprise channels.' },
      { title: 'Communication', text: 'A social media campaign and message management to coordinate participants and promote the event.' },
    ],
    participants: [
      { name: 'Arcas Reales', detail: 'IES Arca Real · Physical and virtual stand' },
      { name: 'Decasarre', detail: 'IES Arca Real · Physical and virtual stand' },
      { name: 'Riberpublic', detail: 'IES Ribera de Castilla · Physical and virtual stand' },
      { name: 'Mediof', detail: 'CIFP Medina del Campo · Virtual participation' },
      { name: 'Galiprint', detail: 'IES Galileo · Virtual participation' },
      { name: 'Unives', detail: 'IES Las Salinas · Virtual participation' },
    ],
    participantsNote: 'Enterprises announced by IES Arca Real for the first edition. Arrea Eventos is listed as the organising team and also has a space on the virtual floor plan.',
    galleryTitle: 'The event, up close.',
    photos: [
      { src: `${feria}/equipo-decasarre.jpg`, alt: 'Decasarre participants consult business documents during the fair.', caption: 'Preparing and consulting business documentation.', width: 3024, height: 4032 },
      { src: `${feria}/stand-decasarre.jpg`, alt: 'Decasarre stand with computers, brochures and fair posters.', caption: 'Decasarre: identity, materials and stand support.', width: 1536, height: 2048 },
      { src: `${feria}/stand-riberpublic.jpg`, alt: 'Participants staff the Riberpublic stand at ARCADECA.', caption: 'The Riberpublic stand from IES Ribera de Castilla.', width: 1536, height: 2048 },
      { src: `${feria}/visitantes.jpg`, alt: 'Two fair participants with badges and materials.', caption: 'Participants meeting throughout the day.', width: 3024, height: 4032 },
      { src: `${feria}/operaciones-comerciales.jpg`, alt: 'A group exchanges business information beside the Decasarre stand.', caption: 'Sharing information and carrying out simulated transactions.', width: 3024, height: 4032 },
    ],
    photoCredit: { label: 'Decasarre report · Photographs published on ETF Open Space', url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/' },
    chapters: [
      { label: 'Fair workshops', title: 'Design, communicate and make.', text: 'The learning programme included stand design and decoration with Diventia, social media tools presented by Arrea students, and 3D printing. The workshops connected brand presence, promotional materials and the production of small objects.' },
      { label: 'Organising the day', title: 'Two formats, one gathering.', text: 'The published programme combined reception and stand preparation, opening, two blocks of trading and workshops, a break and closing. Coordinating in-person and virtual participation required each enterprise to have its information, materials and channels ready before the event.' },
    ],
    classroom: 'Possible follow-up work in the practice enterprise module (PES): use the floor plan as a case study, prepare a new exhibitor dossier, design a schedule for in-person and remote support, and review the documentation for a simulated transaction. The 2022 fair serves as a reference, not an open invitation.',
    archiveNote: 'The former feriaarcadeca.es website no longer hosts the project and is not linked as an active site. We retain access to the original Genially, the video, the IES Arca Real announcement and the Decasarre report. Contacts, shops and invitations within the materials are historical.',
  },
};

