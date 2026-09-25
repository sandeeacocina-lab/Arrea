import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';
import { basePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Archivo de proyectos de organización, producción y comunicación de Arrea Eventos.',
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader active="proyectos" />
      <main id="contenido" className="projects-page">
        <section
          className="shell project-index-hero"
          aria-labelledby="projects-title"
        >
          <div data-reveal="left">
            <p className="eyebrow">Archivo Arrea</p>
            <h1 id="projects-title">
              Proyectos que forman parte de <span className="heading-accent">nuestra historia.</span>
            </h1>
            <p className="project-index-lead">
              Una selección de eventos, encuentros y experiencias digitales que
              muestran la evolución de ARREA y nuestra manera de organizar,
              comunicar y coordinar.
            </p>
          </div>
          <div
            className="archive-poster"
            aria-hidden="true"
            data-reveal="right"
          >
            <span>Archivo</span>
            <strong>vivo.</strong>
            <small>2021—26</small>
          </div>
        </section>

        <section
          className="project-index-section section-space"
          aria-labelledby="project-list-title"
        >
          <div className="shell">
            <div className="project-index-heading" data-reveal>
              <p className="eyebrow">Selección de proyectos</p>
              <h2 id="project-list-title">
                Ideas convertidas en <span className="heading-accent">experiencia profesional.</span>
              </h2>
            </div>
            <div className="project-card-grid">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  className={`project-card project-card-${project.theme}`}
                  href={`${basePath}/proyectos/${project.slug}/`}
                  data-reveal
                >
                  <p>
                    {project.year} · {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <span className="project-card-summary">
                    {project.summary}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <aside className="archive-principle">
          <div className="shell archive-principle-grid" data-reveal>
            <p className="eyebrow">Archivo abierto</p>
            <p>
              Cada ficha explica el contexto, el proceso y las competencias
              desarrolladas. Los documentos y las imágenes se publican solo
              cuando están revisados y autorizados.
            </p>
          </div>
        </aside>
      </main>
      <SiteFooter showContact />
    </>
  );
}
