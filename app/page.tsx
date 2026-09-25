/* oxlint-disable next/no-img-element -- Preserve the original brand assets on static GitHub Pages. */
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { basePath, contactUrl } from '@/lib/site';

const services = [
  {
    title: 'Eventos corporativos',
    text: 'Jornadas, encuentros profesionales, ferias y presentaciones de empresa.',
  },
  {
    title: 'Secretaría técnica',
    text: 'Inscripciones, agendas y atención a asistentes y ponentes.',
  },
  {
    title: 'Comunicación creativa',
    text: 'La imagen y los materiales que representan a tu empresa.',
  },
  {
    title: 'Protocolo y acogida',
    text: 'Invitaciones, acreditaciones y una bienvenida cuidada.',
  },
  {
    title: 'Difusión y contenidos',
    text: 'Mensajes y publicaciones antes, durante y después.',
  },
  {
    title: 'Evaluación y resultados',
    text: 'Opiniones, objetivos y propuestas de mejora.',
  },
];
const archive = [
  {
    slug: 'expods',
    title: 'ExpoODS',
    lines: ['Expo', 'ODS'],
    date: '2022–2023',
    text: 'Exposición digital · eTwinning',
    theme: 'primary',
  },
  {
    slug: 'feria-arcadeca-2022',
    title: 'Feria ARCADECA',
    lines: ['Feria', 'ARCADECA'],
    date: '2022',
    text: 'Feria híbrida',
    theme: 'light',
  },
  {
    slug: 'arca-impulsa-fp',
    title: 'Arca Impulsa FP',
    lines: ['Arca', 'Impulsa FP'],
    date: '2023–2026',
    text: 'Jornadas de FP',
    theme: 'sand',
  },
  {
    slug: 'voces-que-inspiran',
    title: 'Voces que inspiran',
    lines: ['Voces que', 'inspiran'],
    date: '2025',
    text: 'Jornada educativa',
    theme: 'ink',
  },
];

// Illustrative testimonials for the educational simulation, not real reviews.
const exampleTestimonials = [
  {
    event: 'Jornada empresarial',
    quote:
      'Una sola persona de contacto y todo coordinado. Pudimos centrarnos en nuestros invitados y disfrutar de la jornada.',
    name: 'Elena Rivas',
    city: 'Valladolid',
    variant: 'featured',
  },
  {
    event: 'Encuentro de equipo',
    quote:
      'Nos explicaron cada paso. Llegamos al evento con la tranquilidad de tenerlo todo preparado.',
    name: 'Sergio Valdés',
    city: 'Palencia',
    variant: 'light',
  },
  {
    event: 'Presentación de empresa',
    quote:
      'Entendieron nuestra idea y cuidaron cada detalle. La comunicación fue cercana de principio a fin.',
    name: 'Claudia Montes',
    city: 'Burgos',
    variant: 'warm',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader home />
      <main className="home">
        <section id="contenido" className="cinema-hero cinema-hero-alternative" aria-labelledby="hero-title">
          <img className="cinema-photo" src={`${basePath}/images/arrea-hero-networking-r06.webp`} alt="Profesionales conversando durante un encuentro de networking empresarial" width={1774} height={887} fetchPriority="high" />
          <div className="cinema-shade" aria-hidden="true" />
          <div className="shell cinema-content">
            <div className="cinema-copy" data-reveal>
              <p className="eyebrow">Eventos empresariales · Valladolid</p>
              <h1 id="hero-title">Un solo punto,<br />todo tu evento.</h1>
              <p className="cinema-promise">Una persona de contacto.<br />Todo un equipo detrás.</p>
              <div className="cinema-actions">
                <a href={contactUrl} className="action action-primary">Cuéntanos tu evento</a>
                <a href={`${basePath}/proyectos/`} className="text-action">Ver proyectos</a>
              </div>
            </div>
            <div className="cinema-viewfinder" aria-hidden="true" data-reveal>
              <span className="recording-label">REC</span>
              <img src={`${basePath}/images/arrea-identidad-inversa.svg`} alt="" width={460} height={432} />
              <span className="recording-time">00:00:26</span>
            </div>
          </div>
        </section>
        <section
          id="servicios"
          className="services-section section-space"
          aria-labelledby="services-title"
        >
          <div className="shell services-layout">
            <div className="section-heading" data-reveal>
              <h2 id="services-title">Todo lo necesario para tu evento.</h2>
              <p className="section-lead">Seis servicios y una sola persona que los coordina.</p>
            </div>
            <div className="service-grid">
              {services.map(({ title, text }) => (
                <article className="service-card" key={title} data-reveal>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="paquetes"
          className="packages-banner"
          aria-labelledby="packages-cta-title"
        >
          <div className="shell packages-banner-inner">
            <div className="packages-banner-copy" data-reveal>
              <h2 id="packages-cta-title">
                Encuentra el paquete que encaja contigo.
              </h2>
              <p>
                Comunicación, jornadas y convenciones con alcance y precio
                definidos.
              </p>
              <a className="action action-ink" href={`${basePath}/paquetes/`}>
                Consulta los paquetes
              </a>
            </div>
            <nav className="package-lineup" aria-label="Nuestros paquetes" data-reveal>
              <a href={`${basePath}/paquetes/#impulso`}>
                <strong>Impulso</strong><span>Comunicación</span>
              </a>
              <a href={`${basePath}/paquetes/#encuentro`}>
                <strong>Encuentro</strong><span>Jornadas</span>
              </a>
              <a href={`${basePath}/paquetes/#conexion`}>
                <strong>Conexión</strong><span>Convenciones</span>
              </a>
            </nav>
          </div>
        </section>
        <section
          id="archivo"
          className="archive-section shell section-space"
          aria-labelledby="archive-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Proyectos de años anteriores</p>
            <h2 id="archive-title">
              Proyectos que forman parte de nuestra historia.
            </h2>
            <p className="section-lead">
              Eventos, encuentros y experiencias digitales que muestran la
              evolución de ARREA.
            </p>
          </div>
          <div className="archive-grid" id="proyectos">
            {archive.map((project) => (
              <a
                href={`${basePath}/proyectos/${project.slug}/`}
                className={`archive-card archive-card-${project.theme}`}
                key={project.slug}
                data-reveal
              >
                <p className="archive-date">{project.date}</p>
                <h3 aria-label={project.title}>
                  {project.lines.map((line) => <span key={line}>{line}</span>)}
                </h3>
                <span className="archive-format">{project.text}</span>
              </a>
            ))}
          </div>
          <div className="archive-link-wrap">
            <a
              href={`${basePath}/proyectos/`}
              className="text-action archive-all-link"
            >
              Ver el archivo completo
            </a>
          </div>
        </section>
        <section
          id="aula"
          className="learning-section learning-photo-section section-space"
          aria-labelledby="learning-title"
        >
          <div className="shell learning-layout">
            <figure className="learning-photo" data-reveal>
              <img
                src={`${basePath}/images/arrea-acreditaciones.webp`}
                alt="Acreditaciones de organización ARREA en blanco y negro, con el lema Un solo punto, todo tu evento"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <figcaption>Simulación visual generada con IA.</figcaption>
            </figure>
            <div className="learning-content" data-reveal>
              <h2 id="learning-title">Tu objetivo marca el comienzo.</h2>
              <p className="process-subtitle">Nosotros organizamos el camino.</p>
              <ol className="process-list">
                <li>
                  <span className="process-number" aria-hidden="true">01</span>
                  <div>
                    <h3>Entendemos tu idea</h3>
                    <p>Definimos contigo el objetivo, el público, el formato y el presupuesto.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number" aria-hidden="true">02</span>
                  <div>
                    <h3>Preparamos cada detalle</h3>
                    <p>Coordinamos recursos, proveedores, programa y atención a invitados.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number" aria-hidden="true">03</span>
                  <div>
                    <h3>Coordinamos y evaluamos</h3>
                    <p>Supervisamos el evento, atendemos incidencias y revisamos los resultados.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section
          id="opiniones"
          className="testimonials-section section-space"
          aria-labelledby="testimonials-title"
          aria-describedby="testimonials-disclosure"
        >
          <div className="shell testimonials-inner">
          <div className="section-heading">
            <p className="eyebrow">Nuestros clientes</p>
            <h2 id="testimonials-title">
              Muchas experiencias.
              <span className="testimonials-title-line">Un mismo punto de encuentro.</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            {exampleTestimonials.map((testimonial) => (
              <figure
                className={`testimonial-card testimonial-card-${testimonial.variant}`}
                key={testimonial.name}
              >
                <p className="testimonial-stars">
                  <span className="sr-only">Valoración simulada: 5 de 5</span>
                  <span aria-hidden="true">★★★★★</span>
                </p>
                <blockquote>
                  <p>«{testimonial.quote}»</p>
                </blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.event} · {testimonial.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p id="testimonials-disclosure" className="testimonials-disclosure">
            Opiniones y nombres simulados para este proyecto educativo.
          </p>
          </div>
        </section>
      </main>
      <SiteFooter showContact />
    </>
  );
}
