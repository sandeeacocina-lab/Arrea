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
  { id: '61e2e74d1cb3c70d26b53b5a', key: 'agua', label: 'ODS 06', title: 'Agua limpia y saneamiento', description: 'Una infografía interactiva que despliega las metas del ODS 6.' },
  { id: '61e8685d459168001275489e', key: 'ciudades', label: 'ODS 11', title: 'Ciudades y comunidades sostenibles', description: 'Un mapa visual con puntos de información sobre la sostenibilidad urbana.' },
  { id: '61e86dfddb8673001263d514', key: 'consumo', label: 'ODS 12', title: 'Producción y consumo responsables', description: 'Información sobre consumo, agua, residuos, energía y alimentación.' },
  { id: '61e8657b45916800127547da', key: 'clima', label: 'ODS 13', title: 'Acción por el clima', description: 'Una pieza del archivo de 2022 sobre retos ambientales y hábitos cotidianos. Sus contenidos se conservan como evidencia del trabajo del alumnado.' },
  { id: '6217a8e80ea12a0011b34a34', key: 'vida-submarina', label: 'ODS 14 · Quiz', title: 'Curious facts about the ocean', description: 'Un cuestionario en inglés para explorar lo que sabemos de la vida bajo el agua.' },
  { id: '61f91e569dca580013d76149', key: 'alianzas', label: 'ODS 17', title: 'Alianzas para lograr los objetivos', description: 'Una presentación en inglés sobre cooperación y alianzas a diferentes escalas.' },
];

export const projectDossiers: Record<string, ProjectDossier> = {
  expods: {
    intro: 'Recorre la exposición en 360°, explora sus cubos 3D y abre una selección de los Genially incluidos en ella. Los materiales pertenecen al proyecto colaborativo SustainABLE y conservan sus créditos originales.',
    website: { label: 'Visitar la web de ExpoODS', url: 'https://expods.decasarre.es/' },
    media: [
      {
        label: 'Visita 360°',
        title: 'Una exposición que puedes recorrer',
        provider: 'ThingLink',
        description: 'Desplázate por el hall del IES Arca Real y pulsa los puntos interactivos. Los cubos permiten explorar los 17 ODS y los recursos asociados a cada uno.',
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
        label: 'Vídeo del proyecto',
        title: 'SustainABLE: el proyecto compartido',
        provider: 'YouTube',
        description: 'Vídeo publicado por SustainABLE para presentar el proyecto eTwinning en el que se integra ExpoODS.',
        url: 'https://www.youtube.com/watch?v=_UjLHdJcX7U',
        embedUrl: 'https://www.youtube-nocookie.com/embed/_UjLHdJcX7U',
        preview: `${expo}/montaje.jpeg`,
      },
    ],
    story: {
      title: 'Del hall del instituto a una exposición abierta.',
      paragraphs: [
        'El punto de partida fue una exposición de UNICEF instalada en el IES Arca Real en enero de 2022. Sus cubos acercaban los 17 Objetivos de Desarrollo Sostenible a quienes pasaban por el hall. El siguiente paso fue hacer que esa visita también pudiera suceder desde fuera del centro.',
        'Desde el Aula de Emprendimiento, alumnado de 1.º de Administración y Finanzas y de 2.º de Asistencia a la Dirección —Arrea Eventos— participó en su transformación digital. La web y la exposición virtual se desarrollaron en colaboración con otros tres centros dentro de eTwinning SustainABLE.',
        'El resultado combina el espacio físico, un recorrido inmersivo y recursos sobre los ODS. La web original está firmada por Arrea Eventos para el IES Arca Real; las piezas interactivas recogen aportaciones del conjunto de participantes.',
      ],
    },
    contributions: [
      { title: 'Documentar el espacio', text: 'Fotografías de 360° tomadas con el móvil y digitalización de los cubos mediante escáner 3D.' },
      { title: 'Crear los contenidos', text: 'Selección de información, infografías en Genially y Canva, vídeos y actividades sobre sostenibilidad.' },
      { title: 'Dar acceso', text: 'Integración de los materiales en ThingLink y en una web para consultar y reutilizar la exposición.' },
    ],
    participants: [
      { name: 'IES Arca Real', detail: 'Valladolid · España' },
      { name: 'Sant Josep Obrer', detail: 'Palma · España' },
      { name: 'Asunción de Nuestra Señora', detail: 'Benaguasil · España' },
      { name: 'Agrupamento de Escolas Amadeo de Souza-Cardoso', detail: 'Portugal' },
    ],
    participantsNote: 'Centros participantes recogidos en la web de ExpoODS. ThingLink apoyó el uso educativo de los modelos 3D.',
    galleryTitle: 'Antes de la pantalla, el espacio.',
    photos: [
      { src: `${expo}/exposicion.jpeg`, alt: 'Cubos con los 17 Objetivos de Desarrollo Sostenible en el hall del IES Arca Real.', caption: 'Los 17 ODS, reunidos en la exposición física.', width: 1280, height: 887 },
      { src: `${expo}/montaje.jpeg`, alt: 'Vista general del hall con la exposición de cubos de UNICEF.', caption: 'El espacio que dio origen al recorrido virtual.', width: 1280, height: 960 },
      { src: `${expo}/cubos-ods.jpeg`, alt: 'Dos alumnas junto a los cubos de la exposición de los ODS.', caption: 'El alumnado junto a la exposición del centro.', width: 1280, height: 1399 },
      { src: `${expo}/hall.jpeg`, alt: 'Cara posterior de los cubos con fotografías y mensajes de la exposición.', caption: 'Las distintas caras de los cubos aportan imágenes y mensajes.', width: 980, height: 1307 },
    ],
    photoCredit: { label: 'Archivo fotográfico de ExpoODS · IES Arca Real', url: 'https://expods.decasarre.es/' },
    chapters: [
      { label: 'Tecnología con propósito', title: '17 objetivos. Varias formas de aprender.', text: 'La visita 360° sitúa al visitante en el espacio; los modelos 3D permiten girar cada cubo; las infografías y los juegos amplían la información. La selección que mostramos arriba es una puerta de entrada: el recorrido original contiene más materiales y propuestas.' },
      { label: 'Acción solidaria · marzo de 2022', title: 'OreODS: de la sensibilización a la acción.', text: 'El proyecto también incluyó una campaña de galletas solidarias identificadas con los ODS, impulsada por 1.º de Administración y Finanzas. La publicación del 22 de marzo de 2022 anunciaba que los fondos se destinarían a UNICEF para la emergencia en Ucrania. Se conserva como parte de la historia del proyecto, no como una campaña de venta o recogida de fondos vigente.' },
    ],
    classroom: 'Propuesta de continuidad en PES: preparar una visita guiada, revisar la vigencia y las fuentes de una pieza informativa, elaborar una versión accesible y documentar su publicación. Son nuevos encargos formativos posibles, no resultados atribuidos al proyecto original.',
    archiveNote: 'Los recursos interactivos son materiales históricos. Pueden contener datos, enlaces o funcionalidades que hayan cambiado desde su creación. La dirección vigente del proyecto es expods.decasarre.es.',
  },
  'feria-arcadeca-2022': {
    intro: 'El plano original en Genially, el vídeo de la jornada y las fotografías permiten reconstruir la primera feria ARCADECA: un encuentro presencial y virtual entre empresas simuladas.',
    website: { label: 'Leer la crónica de la feria', url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/' },
    media: [
      {
        label: 'Feria en Genially',
        title: 'Entra en la feria virtual',
        provider: 'Genially',
        description: 'El plano reúne los stands virtuales y el espacio de Arrea Eventos. Cada empresa incorporó materiales de presentación y vías de contacto. Es el recurso original de 2022: algunos enlaces interiores pueden haber dejado de funcionar.',
        url: 'https://view.genial.ly/61f42788de478f00129f446e',
        embedUrl: 'https://view.genial.ly/61f42788de478f00129f446e',
        preview: `${feria}/plano-genially.jpg`,
      },
      {
        label: 'Vídeo de la jornada',
        title: 'Así fue la primera ARCADECA',
        provider: 'YouTube',
        description: 'Resumen de la feria publicado por Decasarre. Un registro audiovisual del encuentro del 24 de febrero de 2022.',
        url: 'https://www.youtube.com/watch?v=PV-Iv9-gqKw',
        embedUrl: 'https://www.youtube-nocookie.com/embed/PV-Iv9-gqKw',
        preview: `${feria}/operaciones-comerciales.jpg`,
      },
    ],
    story: {
      title: 'Una feria real para empresas simuladas.',
      paragraphs: [
        'El 24 de febrero de 2022, ARCADECA conectó la actividad presencial del IES Arca Real con empresas que participaban a distancia. La primera edición se planteó a escala local, condicionada por las restricciones de la pandemia, y combinó tres stands físicos con una feria virtual.',
        'El alumnado de 2.º de Asistencia a la Dirección asumió la organización digital desde Arrea Eventos: web en WordPress, plano y stands en Genially, campaña en redes y comunicaciones. El evento formaba parte del trabajo intercentros con el IES Ribera de Castilla y del marco de Aula-Empresa.',
        'Los stands reunían vídeos, folletos y tiendas en línea. Las conversaciones comerciales podían continuar por Zoom, Teams o Google Meet. Así, la práctica de atención y compraventa simulada convivía con la producción de un evento con visitantes, espacios y tiempos reales.',
      ],
    },
    contributions: [
      { title: 'La web de la feria', text: 'Un punto común de información en WordPress para presentar el encuentro y ordenar el acceso a sus contenidos.' },
      { title: 'El recinto digital', text: 'Un plano en Genially con stands interactivos, documentación comercial y accesos a los canales de las empresas.' },
      { title: 'La comunicación', text: 'Campaña en redes y gestión de mensajes para coordinar a participantes y dar difusión a la jornada.' },
    ],
    participants: [
      { name: 'Arcas Reales', detail: 'IES Arca Real · Stand presencial y virtual' },
      { name: 'Decasarre', detail: 'IES Arca Real · Stand presencial y virtual' },
      { name: 'Riberpublic', detail: 'IES Ribera de Castilla · Stand presencial y virtual' },
      { name: 'Mediof', detail: 'CIFP Medina del Campo · Participación virtual' },
      { name: 'Galiprint', detail: 'IES Galileo · Participación virtual' },
      { name: 'Unives', detail: 'IES Las Salinas · Participación virtual' },
    ],
    participantsNote: 'Empresas anunciadas por el IES Arca Real para la primera edición. Arrea Eventos figura como equipo organizador y también dispone de espacio en el plano virtual.',
    galleryTitle: 'La jornada, en primera persona.',
    photos: [
      { src: `${feria}/equipo-decasarre.jpg`, alt: 'Participantes de Decasarre consultan documentación comercial durante la feria.', caption: 'Preparación y consulta de la documentación comercial.', width: 3024, height: 4032 },
      { src: `${feria}/stand-decasarre.jpg`, alt: 'Stand de Decasarre con ordenadores, folletos y cartelería de la feria.', caption: 'Decasarre: identidad, materiales y atención en el stand.', width: 1536, height: 2048 },
      { src: `${feria}/stand-riberpublic.jpg`, alt: 'Participantes atienden el stand de Riberpublic en ARCADECA.', caption: 'El stand de Riberpublic, del IES Ribera de Castilla.', width: 1536, height: 2048 },
      { src: `${feria}/visitantes.jpg`, alt: 'Dos participantes de la feria con acreditaciones y materiales.', caption: 'Encuentros entre participantes durante la jornada.', width: 3024, height: 4032 },
      { src: `${feria}/operaciones-comerciales.jpg`, alt: 'Un grupo intercambia información comercial junto al stand de Decasarre.', caption: 'Intercambio de información y operaciones simuladas.', width: 3024, height: 4032 },
    ],
    photoCredit: { label: 'Crónica de Decasarre · Fotografías publicadas en ETF Open Space', url: 'https://decasarresas.wordpress.com/2022/05/05/virtual-fair/' },
    chapters: [
      { label: 'Talleres de la feria', title: 'Diseñar, comunicar y fabricar.', text: 'La propuesta formativa incluía diseño y decoración de stands con Diventia, herramientas para redes sociales a cargo del alumnado de Arrea e impresión 3D. Los talleres conectaban la presencia de marca, los materiales promocionales y la fabricación de pequeños objetos.' },
      { label: 'Organización de la jornada', title: 'Dos formatos, un mismo encuentro.', text: 'El programa publicado combinaba recepción y preparación de stands, apertura, dos bloques de intercambios comerciales y talleres, descanso y clausura. Coordinar lo presencial y lo virtual exigía que la información, los materiales y los canales de cada empresa estuvieran preparados antes del encuentro.' },
    ],
    classroom: 'Propuesta de continuidad en PES: recuperar el plano como caso de estudio, preparar un nuevo dossier de expositor, diseñar un cronograma de atención presencial y remota y revisar la documentación de una operación simulada. La feria de 2022 sirve como referencia, no como convocatoria abierta.',
    archiveNote: 'La antigua web feriaarcadeca.es ya no aloja el proyecto y no se enlaza como sitio activo. Conservamos el acceso al Genially original, al vídeo, a la noticia del IES Arca Real y a la crónica de Decasarre. Los contactos, tiendas y convocatorias dentro de los materiales son históricos.',
  },
};
