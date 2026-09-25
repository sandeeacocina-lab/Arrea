/* oxlint-disable next/no-img-element -- Optimized static portraits for GitHub Pages. */
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { inquiryUrl } from '@/lib/packages';
import { basePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'Conoce al equipo de ARREA Eventos: organización, comunicación y protocolo en Valladolid. Un solo contacto, todo un equipo detrás.',
};

const team = [
  {
    name: 'Lucía',
    role: 'Coordinación de eventos',
    text: 'Tu contacto durante todo el proyecto.',
    image: 'lucia.webp?v=2',
    width: 800,
    height: 1000,
  },
  {
    name: 'Diego',
    role: 'Producción y proveedores',
    text: 'Cada recurso, a tiempo y en su sitio.',
    image: 'diego.webp',
    width: 800,
    height: 1000,
  },
  {
    name: 'Nora',
    role: 'Comunicación y diseño',
    text: 'Una identidad que se ve y se entiende.',
    image: 'nora.webp',
    width: 800,
    height: 1001,
  },
  {
    name: 'Álvaro',
    role: 'Protocolo y atención',
    text: 'Una bienvenida cuidada para cada persona.',
    image: 'equipo.webp',
    width: 1456,
    height: 816,
  },
];

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader active="quienes-somos" />
      <main id="contenido" className="team-page">
        <section className="shell team-hero" aria-labelledby="team-title">
          <div className="team-hero-copy" data-reveal>
            <p className="eyebrow">Quiénes somos · ARREA Eventos</p>
            <h1 id="team-title">
              Personas detrás de <span className="heading-accent">cada gran encuentro.</span>
            </h1>
            <p className="team-intro">
              Somos un equipo de organización, comunicación y protocolo con base
              en Valladolid. Escuchamos tu idea y coordinamos cada detalle para
              convertirla en un evento bien pensado.
            </p>
            <a className="action action-primary" href={inquiryUrl()}>
              Cuéntanos tu evento
            </a>
          </div>
          <div className="team-hero-photo" data-reveal>
            <img
              src={`${basePath}/images/equipo/equipo.webp`}
              alt="Diego, Álvaro, Lucía y Nora, el equipo de ARREA Eventos"
              width={1456}
              height={816}
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="team-promise" aria-labelledby="team-promise-title">
          <div className="shell" data-reveal>
            <h2 id="team-promise-title">
              Un solo contacto. Todo un equipo detrás.
            </h2>
            <p>
              Tú compartes tu objetivo. Nosotros coordinamos a las personas y
              los recursos para hacerlo posible.
            </p>
          </div>
        </section>

        <section className="shell team-section" aria-labelledby="people-title">
          <p className="eyebrow">Nuestro equipo</p>
          <h2 id="people-title" data-reveal>
            Cuatro miradas. <span className="heading-accent">Una misma forma de cuidar tu evento.</span>
          </h2>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name} data-reveal>
                <div
                  className={`team-portrait${person.name === 'Álvaro' ? ' team-portrait-alvaro' : ''}`}
                >
                  <img
                    src={`${basePath}/images/equipo/${person.image}`}
                    alt={`Retrato de ${person.name}`}
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
            <p className="eyebrow">Lo que nos define</p>
            <h2 id="values-title" data-reveal>
              Cercanía para escuchar. <span className="heading-accent">Criterio para organizar.</span>
            </h2>
            <div className="team-values-grid">
              <article data-reveal>
                <h3>01 · Claridad desde el principio</h3>
                <p>Alcance, presupuesto y plazos definidos contigo.</p>
              </article>
              <article data-reveal>
                <h3>02 · Coordinación compartida</h3>
                <p>
                  Una persona de contacto conecta al equipo y a los proveedores.
                </p>
              </article>
              <article data-reveal>
                <h3>03 · Atención a las personas</h3>
                <p>Cuidamos la comunicación, la acogida y los detalles.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="shell team-history" aria-labelledby="history-title" data-reveal>
          <h2 id="history-title">
            Nuestra historia también se cuenta en nuestros proyectos.
          </h2>
          <a href={`${basePath}/proyectos/`}>Ver proyectos anteriores</a>
        </section>

      </main>
      <SiteFooter showContact />
    </>
  );
}
