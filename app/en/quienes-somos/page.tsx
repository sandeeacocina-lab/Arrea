/* oxlint-disable next/no-img-element -- Optimized static portraits for GitHub Pages. */
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/en/site-footer';
import { SiteHeader } from '@/components/en/site-header';
import { inquiryUrl } from '@/lib/en/packages';
import { basePath } from '@/lib/en/site';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Meet the ARREA Eventos team: event management, communication and protocol in Valladolid. One point of contact, a whole team behind you.',
};

const team = [
  {
    name: 'Lucía',
    role: 'Event coordination',
    text: 'Your contact throughout the project.',
    image: 'lucia.webp?v=2',
    width: 800,
    height: 1000,
  },
  {
    name: 'Diego',
    role: 'Production and suppliers',
    text: 'Every resource, in the right place at the right time.',
    image: 'diego.webp',
    width: 800,
    height: 1000,
  },
  {
    name: 'Nora',
    role: 'Communication and design',
    text: 'A clear and recognisable identity.',
    image: 'nora.webp',
    width: 800,
    height: 1001,
  },
  {
    name: 'Álvaro',
    role: 'Protocol and guest support',
    text: 'A thoughtful welcome for every guest.',
    image: 'equipo.webp',
    width: 1456,
    height: 816,
  },
];

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Skip to content
      </a>
      <SiteHeader active="quienes-somos" />
      <main id="contenido" className="team-page">
        <section className="shell team-hero" aria-labelledby="team-title">
          <div className="team-hero-copy" data-reveal>
            <p className="eyebrow">About us · ARREA Eventos</p>
            <h1 id="team-title">
              The people behind <span className="heading-accent">every great gathering.</span>
            </h1>
            <p className="team-intro">
              We are an event management, communication and protocol team based in Valladolid. We listen to your idea and coordinate every detail to turn it into a carefully planned event.
            </p>
            <a className="action action-primary" href={inquiryUrl()}>
              Tell us about your event
            </a>
          </div>
          <div className="team-hero-photo" data-reveal>
            <img
              src={`${basePath}/images/equipo/equipo.webp`}
              alt="Diego, Álvaro, Lucía and Nora, the ARREA Eventos team"
              width={1456}
              height={816}
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="team-promise" aria-labelledby="team-promise-title">
          <div className="shell" data-reveal>
            <h2 id="team-promise-title">
              One point of contact. A whole team behind you.
            </h2>
            <p>
              You share your goal. We coordinate the people and resources to make it happen.
            </p>
          </div>
        </section>

        <section className="shell team-section" aria-labelledby="people-title">
          <p className="eyebrow">Our team</p>
          <h2 id="people-title" data-reveal>
            Four perspectives. <span className="heading-accent">One shared approach to caring for your event.</span>
          </h2>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name} data-reveal>
                <div
                  className={`team-portrait${person.name === 'Álvaro' ? ' team-portrait-alvaro' : ''}`}
                >
                  <img
                    src={`${basePath}/images/equipo/${person.image}`}
                    alt={`Portrait of ${person.name}`}
                    width={person.width}
                    height={person.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <p className="team-description">{person.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-values" aria-labelledby="values-title">
          <div className="shell">
            <p className="eyebrow">What defines us</p>
            <h2 id="values-title" data-reveal>
              Approachable enough to listen. <span className="heading-accent">Experienced enough to organise.</span>
            </h2>
            <div className="team-values-grid">
              <article data-reveal>
                <h3>01 · Clarity from the start</h3>
                <p>Scope, budget and timing agreed with you.</p>
              </article>
              <article data-reveal>
                <h3>02 · Working together</h3>
                <p>
                  One point of contact brings the team and suppliers together.
                </p>
              </article>
              <article data-reveal>
                <h3>03 · Care for people</h3>
                <p>We take care of communication, the welcome and every detail.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="shell team-history" aria-labelledby="history-title" data-reveal>
          <h2 id="history-title">
            Our projects tell our story too.
          </h2>
          <a href={`${basePath}/en/proyectos/`}>View previous projects</a>
        </section>

      </main>
      <SiteFooter showContact />
    </>
  );
}

