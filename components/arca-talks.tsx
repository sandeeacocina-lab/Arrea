/* oxlint-disable next/no-img-element -- Use the photograph supplied with the event project. */
import { basePath } from '@/lib/site';

export const arcaTalksPath = '/proyectos/arca-talks/';
type Locale = 'es' | 'en';

const copy = {
  es: {
    agenda: 'En nuestra agenda', upcoming: 'Próximo evento', date: '21–22 enero 2027',
    tagline: 'Competencias que abren puertas.',
    intro: 'Ideas, conversaciones y nuevas perspectivas sobre nuestro futuro profesional.',
    discover: 'Descubre las jornadas', eyebrow: 'Jornadas · IES Arca Real · Valladolid',
    welcome: 'Un encuentro para compartir ideas, conectar y mirar de otra manera al futuro profesional.',
    explore: 'Explora las jornadas', collection: 'Charlas y materiales',
    poster: 'El futuro empieza con una conversación.', january: 'Enero',
    photoAlt: 'Entrada del IES Arca Real, imagen del proyecto ARCA TALKS',
    projects: 'Proyectos', navigation: 'Apartados de ARCA TALKS',
    encounter: 'El encuentro', programme: 'Programa', diffusion: 'Difusión',
    encounterTitle: 'Ideas que se comparten. Puertas que se abren.',
    encounterBody: 'El alumnado de Gestión Administrativa y Asistencia a la Dirección toma la palabra en unas jornadas dedicadas a la comunicación y las competencias profesionales.',
    topics: ['Comunicación profesional', 'Trabajo en equipo', 'Resolución de conflictos', 'Igualdad de oportunidades', 'IA y pensamiento crítico', 'Sostenibilidad empresarial'],
    daysLabel: 'Dos días para conectar', programmeTitle: 'El programa.', preparing: 'En preparación',
    days: ['Jueves · enero', 'Viernes · enero'], pending: 'Programa y horarios pendientes de confirmar.',
    programmeNote: 'Aquí encontrarás el orden de las charlas, sus ponentes y la información para asistir.',
    collectionLabel: 'El evento continúa aquí', collectionTitle: 'Las ideas se quedan.', after: 'Después de las jornadas',
    collectionBody: 'Un recopilatorio para volver a las charlas, recuperar sus ideas principales y consultar los materiales compartidos por sus protagonistas.',
    collectionItems: [['Las charlas', 'Título, ponentes y resumen'], ['Las ideas', 'Claves y reflexiones'], ['Los materiales', 'Presentaciones y recursos']],
    collectionNote: 'El recopilatorio estará disponible después del evento.',
    diffusionTitle: 'Haz que la conversación llegue más lejos.',
    diffusionBody: 'Cartel de las jornadas y materiales para compartir. Próximamente en este espacio.',
    projectBy: 'Un proyecto del', participants: 'Participan', communications: 'Comunicación y contenidos',
    groups: ['1.º Gestión Administrativa', '1.º Asistencia a la Dirección'], team: '2.º Asistencia a la Dirección',
  },
  en: {
    agenda: 'On our calendar', upcoming: 'Upcoming event', date: '21–22 January 2027',
    tagline: 'Skills that open doors.',
    intro: 'Ideas, conversations and new perspectives on our professional future.',
    discover: 'Discover the event', eyebrow: 'Talks · IES Arca Real · Valladolid',
    welcome: 'A gathering to share ideas, connect and see our professional future from a new perspective.',
    explore: 'Explore the event', collection: 'Talks and resources',
    poster: 'The future starts with a conversation.', january: 'January',
    photoAlt: 'Entrance to IES Arca Real, photograph from the ARCA TALKS project',
    projects: 'Projects', navigation: 'ARCA TALKS sections',
    encounter: 'The event', programme: 'Programme', diffusion: 'Promotion',
    encounterTitle: 'Ideas to share. Doors to open.',
    encounterBody: 'Students from the Administrative Management and Executive Assistance programmes take the floor at an event dedicated to communication and professional skills.',
    topics: ['Professional communication', 'Teamwork', 'Conflict resolution', 'Equal opportunities', 'AI and critical thinking', 'Business sustainability'],
    daysLabel: 'Two days to connect', programmeTitle: 'The programme.', preparing: 'In preparation',
    days: ['Thursday · January', 'Friday · January'], pending: 'Programme and times to be confirmed.',
    programmeNote: 'The running order, speakers and attendance information will be shared here.',
    collectionLabel: 'The event lives on here', collectionTitle: 'The ideas stay.', after: 'After the event',
    collectionBody: 'A collection to revisit the talks, explore their key ideas and consult the resources shared by their speakers.',
    collectionItems: [['The talks', 'Titles, speakers and summaries'], ['The ideas', 'Key insights and reflections'], ['The resources', 'Presentations and materials']],
    collectionNote: 'The collection will be available after the event.',
    diffusionTitle: 'Take the conversation further.',
    diffusionBody: 'The event poster and materials to share. Coming soon to this space.',
    projectBy: 'A project by', participants: 'Participants', communications: 'Communication and content',
    groups: ['Year 1 · Administrative Management', 'Year 1 · Executive Assistance'], team: 'Year 2 · Executive Assistance',
  },
};

export function ArcaTalksTeaser({ locale = 'es' }: { locale?: Locale }) {
  const t = copy[locale];
  const href = `${basePath}${locale === 'en' ? '/en' : ''}${arcaTalksPath}`;
  return (
    <section className="arca-talks-teaser shell" aria-labelledby="arca-talks-feature-title">
      <div className="arca-talks-feature-heading">
        <p className="eyebrow">{t.agenda}</p><span className="arca-talks-status">{t.upcoming}</span>
      </div>
      <a className="arca-talks-banner" href={href}>
        <span className="arca-talks-wordmark" aria-hidden="true">ARCA<span>TALKS<span className="arca-talks-dot">.</span></span></span>
        <div className="arca-talks-banner-copy">
          <p className="arca-talks-date">{t.date} · IES Arca Real</p>
          <h2 id="arca-talks-feature-title"><span className="sr-only">ARCA TALKS. </span>{t.tagline}</h2>
          <p>{t.intro}</p>
          <span className="arca-talks-banner-link">{t.discover}</span>
        </div>
        <div className="arca-talks-door" aria-hidden="true"><span>27</span><i /></div>
      </a>
    </section>
  );
}

export function ArcaTalksContent({ locale = 'es' }: { locale?: Locale }) {
  const t = copy[locale];
  const prefix = `${basePath}${locale === 'en' ? '/en' : ''}`;
  return (
    <main id="contenido" className="arca-talks-page">
      <nav className="arca-talks-breadcrumb shell" aria-label={locale === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}>
        <a href={`${prefix}/`}>ARREA</a><span aria-hidden="true">/</span><a href={`${prefix}/proyectos/`}>{t.projects}</a><span aria-hidden="true">/</span><span aria-current="page">ARCA TALKS 2027</span>
      </nav>
      <section className="arca-talks-hero shell" aria-labelledby="arca-talks-title">
        <div className="arca-talks-intro">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 id="arca-talks-title" className="arca-talks-wordmark">ARCA<span>TALKS<span className="arca-talks-dot">.</span></span></h1>
          <p className="arca-talks-tagline">{t.tagline}</p><p className="arca-talks-welcome">{t.welcome}</p>
          <div className="arca-talks-actions"><a className="action action-ink" href="#programa">{t.explore}</a><a className="arca-talks-resource-link" href="#charlas">{t.collection}</a></div>
        </div>
        <div className="arca-talks-poster">
          <div className="arca-talks-poster-image"><img src={`${basePath}/images/arca-talks-centro.webp`} alt={t.photoAlt} width={620} height={466} fetchPriority="high" /><span className="arca-talks-poster-caption">{t.poster}</span><span className="arca-talks-poster-dot" aria-hidden="true" /></div>
          <div className="arca-talks-poster-bottom"><p className="arca-talks-days"><time dateTime="2027-01-21">21</time>–<time dateTime="2027-01-22">22</time></p><div className="arca-talks-poster-meta"><span>{t.january}<br />2027</span><span>IES Arca Real<br />Valladolid</span></div></div>
        </div>
      </section>
      <nav className="arca-talks-section-nav" aria-label={t.navigation}><div className="shell"><a href="#encuentro">{t.encounter}</a><a href="#programa">{t.programme}</a><a href="#charlas">{t.collection}</a><a href="#difusion">{t.diffusion}</a><span>{t.date}</span></div></nav>
      <section id="encuentro" className="arca-talks-encounter shell" aria-labelledby="arca-talks-encounter-title">
        <div><p className="eyebrow">{t.encounter}</p><h2 id="arca-talks-encounter-title">{t.encounterTitle}</h2></div>
        <div><p>{t.encounterBody}</p><ul className="arca-talks-topics">{t.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div>
      </section>
      <section id="programa" className="arca-talks-programme" aria-labelledby="arca-talks-programme-title"><div className="shell">
        <div className="arca-talks-section-heading"><div><p className="eyebrow">{t.daysLabel}</p><h2 id="arca-talks-programme-title">{t.programmeTitle}</h2></div><span className="arca-talks-status">{t.preparing}</span></div>
        <div className="arca-talks-day-grid">{['21', '22'].map((day, i) => <article className="arca-talks-day" key={day}><time dateTime={`2027-01-${day}`}>{day}</time><div><h3>{t.days[i]}</h3><p>{t.pending}</p></div></article>)}</div>
        <p className="arca-talks-programme-note">{t.programmeNote}</p>
      </div></section>
      <section id="charlas" className="arca-talks-collection shell" aria-labelledby="arca-talks-collection-title">
        <div className="arca-talks-section-heading"><div><p className="eyebrow">{t.collectionLabel}</p><h2 id="arca-talks-collection-title">{t.collectionTitle}</h2></div><span className="arca-talks-status">{t.after}</span></div>
        <div className="arca-talks-collection-layout"><p>{t.collectionBody}</p><dl>{t.collectionItems.map(([title, detail], i) => <div key={title}><span aria-hidden="true">0{i + 1}</span><dt>{title}</dt><dd>{detail}</dd></div>)}</dl></div>
        <p className="arca-talks-collection-note">{t.collectionNote}</p>
      </section>
      <section id="difusion" className="arca-talks-diffusion" aria-labelledby="arca-talks-diffusion-title"><div className="shell">
        <div><p className="eyebrow">{t.diffusion}</p><h2 id="arca-talks-diffusion-title">{t.diffusionTitle}</h2><p>{t.diffusionBody}</p></div>
        <div className="arca-talks-social-poster" aria-hidden="true"><span>IES Arca Real · 2027</span><strong>ARCA<br />TALKS.</strong><span>{t.tagline}</span><span className="arca-talks-social-date">21–22 {t.january}</span></div>
      </div></section>
      <section className="arca-talks-credits shell" aria-label={locale === 'es' ? 'Organización y participantes' : 'Organisation and participants'}>
        <div><p className="eyebrow">{t.projectBy}</p><strong>IES Arca Real</strong><span>Valladolid</span></div>
        <div><p className="eyebrow">{t.participants}</p>{t.groups.map(group => <span key={group}>{group}</span>)}</div>
        <div><p className="eyebrow">{t.communications}</p><strong>ARREA Eventos</strong><span>{t.team}</span></div>
      </section>
    </main>
  );
}
