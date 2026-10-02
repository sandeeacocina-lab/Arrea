/* oxlint-disable next/no-img-element -- Preserve the original brand assets on static GitHub Pages. */
import { SiteFooter } from '@/components/en/site-footer';
import { SiteHeader } from '@/components/en/site-header';
import { basePath, contactUrl } from '@/lib/en/site';

const services = [
  {
    title: 'Corporate events',
    text: 'Conferences, professional gatherings, trade fairs and company presentations.',
  },
  {
    title: 'Event administration',
    text: 'Registration, schedules and support for attendees and speakers.',
  },
  {
    title: 'Creative communication',
    text: 'The visuals and materials that represent your company.',
  },
  {
    title: 'Protocol and welcome',
    text: 'Invitations, badges and a thoughtful welcome.',
  },
  {
    title: 'Promotion and content',
    text: 'Messages and posts before, during and after your event.',
  },
  {
    title: 'Evaluation and results',
    text: 'Feedback, objectives and ideas for improvement.',
  },
];
const archive = [
  {
    slug: 'expods',
    title: 'ExpoODS',
    lines: ['Expo', 'ODS'],
    date: '2022–2023',
    text: 'Digital exhibition · eTwinning',
    theme: 'primary',
  },
  {
    slug: 'feria-arcadeca-2022',
    title: 'Feria ARCADECA',
    lines: ['Feria', 'ARCADECA'],
    date: '2022',
    text: 'Hybrid fair',
    theme: 'light',
  },
  {
    slug: 'arca-impulsa-fp',
    title: 'Arca Impulsa FP',
    lines: ['Arca', 'Impulsa FP'],
    date: '2023–2026',
    text: 'Vocational education events',
    theme: 'sand',
  },
  {
    slug: 'voces-que-inspiran',
    title: 'Voces que inspiran',
    lines: ['Voces que', 'inspiran'],
    date: '2025',
    text: 'Educational event',
    theme: 'ink',
  },
];

// Illustrative testimonials for the educational simulation, not real reviews.
const exampleTestimonials = [
  {
    event: 'Business event',
    quote:
      'One point of contact, with everything coordinated. We could focus on our guests and enjoy the day.',
    name: 'Elena Rivas',
    city: 'Valladolid',
    variant: 'featured',
  },
  {
    event: 'Team gathering',
    quote:
      'They explained every step. We arrived at the event confident that everything was ready.',
    name: 'Sergio Valdés',
    city: 'Palencia',
    variant: 'light',
  },
  {
    event: 'Company presentation',
    quote:
      'They understood our idea and took care of every detail. Communication was friendly throughout.',
    name: 'Claudia Montes',
    city: 'Burgos',
    variant: 'warm',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Skip to content
      </a>
      <SiteHeader home />
      <main className="home">
        <section id="contenido" className="cinema-hero cinema-hero-alternative" aria-labelledby="hero-title">
          <img className="cinema-photo" src={`${basePath}/images/arrea-hero-networking-r06.webp`} alt="Professionals talking at a business networking event" width={1774} height={887} fetchPriority="high" />
          <div className="cinema-shade" aria-hidden="true" />
          <div className="shell cinema-content">
            <div className="cinema-copy" data-reveal>
              <p className="eyebrow">Business events · Valladolid</p>
              <h1 id="hero-title">One point of contact,<br />your entire event.</h1>
              <p className="cinema-promise">One point of contact.<br />A whole team behind you.</p>
              <div className="cinema-actions">
                <a href={contactUrl} className="action action-primary">Tell us about your event</a>
                <a href={`${basePath}/en/proyectos/`} className="text-action">View projects</a>
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
              <h2 id="services-title">Everything your event needs.</h2>
              <p className="section-lead">Six services, with one person to coordinate them all.</p>
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
                Find the package that suits you.
              </h2>
              <p>
                Communication, conferences and conventions with a clear scope and price.
              </p>
              <a className="action action-ink" href={`${basePath}/en/paquetes/`}>
                Explore the packages
              </a>
            </div>
            <nav className="package-lineup" aria-label="Our packages" data-reveal>
              <a href={`${basePath}/en/paquetes/#impulso`}>
                <strong>Impulso</strong><span>Communication</span>
              </a>
              <a href={`${basePath}/en/paquetes/#encuentro`}>
                <strong>Encuentro</strong><span>Conferences</span>
              </a>
              <a href={`${basePath}/en/paquetes/#conexion`}>
                <strong>Conexión</strong><span>Conventions</span>
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
            <p className="eyebrow">Projects from previous years</p>
            <h2 id="archive-title">
              Projects that are part of our story.
            </h2>
            <p className="section-lead">
              Events, gatherings and digital experiences that show how ARREA has evolved.
            </p>
          </div>
          <div className="archive-grid" id="proyectos">
            {archive.map((project) => (
              <a
                href={`${basePath}/en/proyectos/${project.slug}/`}
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
              href={`${basePath}/en/proyectos/`}
              className="text-action archive-all-link"
            >
              View the full archive
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
                alt="Black and white ARREA organiser badges bearing the Spanish slogan One point of contact, your entire event"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <figcaption>AI-generated illustrative image.</figcaption>
            </figure>
            <div className="learning-content" data-reveal>
              <h2 id="learning-title">Your goal is our starting point.</h2>
              <p className="process-subtitle">We take care of the journey.</p>
              <ol className="process-list">
                <li>
                  <span className="process-number" aria-hidden="true">01</span>
                  <div>
                    <h3>We understand your idea</h3>
                    <p>Together, we define the goal, audience, format and budget.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number" aria-hidden="true">02</span>
                  <div>
                    <h3>We prepare every detail</h3>
                    <p>We coordinate resources, suppliers, the programme and guest support.</p>
                  </div>
                </li>
                <li>
                  <span className="process-number" aria-hidden="true">03</span>
                  <div>
                    <h3>We coordinate and evaluate</h3>
                    <p>We oversee the event, handle issues and review the results.</p>
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
            <p className="eyebrow">Our clients</p>
            <h2 id="testimonials-title">
              Many experiences.
              <span className="testimonials-title-line">One shared meeting point.</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            {exampleTestimonials.map((testimonial) => (
              <figure
                className={`testimonial-card testimonial-card-${testimonial.variant}`}
                key={testimonial.name}
              >
                <p className="testimonial-stars">
                  <span className="sr-only">Illustrative rating: 5 out of 5</span>
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
            Fictional reviews and names created for this educational project.
          </p>
          </div>
        </section>
      </main>
      <SiteFooter showContact />
    </>
  );
}

