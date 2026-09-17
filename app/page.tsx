/* oxlint-disable next/no-img-element -- Preserve the original brand assets on static GitHub Pages. */
import {
  CalendarDays,
  ChartColumnIncreasing,
  ClipboardCheck,
  Megaphone,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { inquiryEmail } from '@/lib/packages';
import { basePath } from '@/lib/site';

const services = [
  {
    title: 'Eventos corporativos',
    text: 'Jornadas, encuentros profesionales, ferias y presentaciones de empresa.',
    icon: CalendarDays,
  },
  {
    title: 'Secretaría técnica',
    text: 'Inscripciones, agendas y atención a asistentes y ponentes.',
    icon: UsersRound,
  },
  {
    title: 'Comunicación creativa',
    text: 'La imagen y los materiales que representan a tu empresa.',
    icon: Sparkles,
  },
  {
    title: 'Protocolo y acogida',
    text: 'Invitaciones, acreditaciones y una bienvenida cuidada.',
    icon: ClipboardCheck,
  },
  {
    title: 'Difusión y contenidos',
    text: 'Mensajes y publicaciones antes, durante y después.',
    icon: Megaphone,
  },
  {
    title: 'Evaluación y resultados',
    text: 'Opiniones, objetivos y propuestas de mejora.',
    icon: ChartColumnIncreasing,
  },
];
const archive = [
  {
    slug: 'expods',
    title: 'ExpoODS',
    date: '2022–2023',
    text: 'Exposición digital · eTwinning',
    theme: 'primary',
  },
  {
    slug: 'feria-arcadeca-2022',
    title: 'Feria ARCADECA',
    date: '2022',
    text: 'Feria híbrida',
    theme: 'light',
  },
  {
    slug: 'arca-impulsa-fp',
    title: 'Arca Impulsa FP',
    date: '2023–2026',
    text: 'Jornadas de FP',
    theme: 'sand',
  },
  {
    slug: 'voces-que-inspiran',
    title: 'Voces que inspiran',
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
        <section
          id="contenido"
          className="hero shell"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy hero-enter">
            <p className="eyebrow">Eventos empresariales · Valladolid</p>
            <h1 id="hero-title">
              Ideas que se organizan.
              <br />
              <em>Eventos que dejan huella.</em>
            </h1>
            <p className="hero-intro">
              En ARREA diseñamos y coordinamos eventos que conectan a las
              empresas con sus públicos. Transformamos tus objetivos en una
              experiencia cuidada de principio a fin.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="action action-primary">
                Cuéntanos tu evento
              </a>
              <a href={`${basePath}/proyectos/`} className="text-action">
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="hero-visual hero-enter hero-enter-late">
            <div className="photo-frame">
              <img
                src={`${basePath}/images/arrea-evento-editorial.png`}
                alt="Preparación de un evento corporativo con escenario, señalética y zona de recepción"
                width={1732}
                height={924}
                fetchPriority="high"
              />
            </div>
            <div className="hero-stamp" aria-label="Desde 2021">
              <span>Desde</span>
              <strong>2021</strong>
            </div>
            <div className="hero-note">
              Un solo punto,
              <br />
              todo tu evento
            </div>
          </div>
        </section>
        <div className="ticker">
          <span className="sr-only">
            Planificamos, coordinamos, comunicamos y conectamos.
          </span>
          <div className="ticker-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                <span>Planificamos</span>
                <i>●</i>
                <span>Coordinamos</span>
                <i>●</i>
                <span>Comunicamos</span>
                <i>●</i>
                <span>Conectamos</span>
                <i>●</i>
              </div>
            ))}
          </div>
        </div>
        <section
          id="servicios"
          className="services-section shell section-space"
          aria-labelledby="services-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Qué hacemos</p>
            <h2 id="services-title">Todo lo necesario para tu evento.</h2>
          </div>
          <div className="service-grid">
            {services.map(({ title, text, icon: Icon }, index) => (
              <article className="service-card" key={title} data-reveal>
                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="packages-banner"
          aria-labelledby="packages-cta-title"
        >
          <div className="shell packages-banner-inner">
            <div>
              <p className="eyebrow">Nuestros paquetes</p>
              <h2 id="packages-cta-title">
                Encuentra el paquete que encaja contigo.
              </h2>
              <p>
                Comunicación, jornadas y convenciones con alcance y precio
                definidos.
              </p>
              <p className="package-names">Impulso · Encuentro · Conexión</p>
            </div>
            <a className="action action-ink" href={`${basePath}/paquetes/`}>
              Consulta los paquetes
            </a>
          </div>
        </section>
        <section
          id="archivo"
          className="archive-section shell section-space"
          aria-labelledby="archive-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Archivo Arrea</p>
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
                <p>{project.date}</p>
                <h3>{project.title}</h3>
                <span>{project.text}</span>
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
          className="learning-section section-space"
          aria-labelledby="learning-title"
        >
          <div className="shell">
            <div className="learning-intro" data-reveal>
              <p className="eyebrow">Cómo trabajamos</p>
              <h2 id="learning-title">
                Tu objetivo marca el comienzo.
                <br />
                <em>Nosotros organizamos el camino.</em>
              </h2>
            </div>
            <div className="learning-grid">
              <article data-reveal>
                <h3>01 · Entendemos tu idea</h3>
                <p>
                  Definimos contigo el objetivo, el público, el formato y el
                  presupuesto.
                </p>
              </article>
              <article data-reveal>
                <h3>02 · Preparamos cada detalle</h3>
                <p>
                  Coordinamos recursos, proveedores, programa y atención a
                  invitados.
                </p>
              </article>
              <article data-reveal>
                <h3>03 · Coordinamos y evaluamos</h3>
                <p>
                  Supervisamos el evento, atendemos incidencias y revisamos los
                  resultados.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          id="opiniones"
          className="testimonials-section shell section-space"
          aria-labelledby="testimonials-title"
          aria-describedby="testimonials-disclosure"
        >
          <div className="section-heading">
            <p className="eyebrow">Nuestros clientes</p>
            <h2 id="testimonials-title">
              Muchas experiencias.
              <br />
              <em>Un mismo punto de encuentro.</em>
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
        </section>
        <section
          id="contacto"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell commercial-contact">
            <div>
              <h2 id="contact-title">Hablemos de tu próximo evento.</h2>
              <p>
                Cuéntanos qué quieres organizar, a quién va dirigido y qué fecha
                tienes en mente.
              </p>
            </div>
            <a className="action action-ink" href={inquiryEmail()}>
              Cuéntanos tu evento
            </a>
            <a className="contact-email" href="mailto:info@feriaarcadeca.es">
              info@feriaarcadeca.es
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
