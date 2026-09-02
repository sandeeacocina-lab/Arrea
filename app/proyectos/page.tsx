import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';
import { basePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Archivo de proyectos de organización, producción y comunicación de Arrea Eventos.',
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido">
        <section className="shell project-index-hero" aria-labelledby="projects-title">
          <div data-reveal="left">
            <p className="eyebrow">Archivo Arrea</p>
            <h1 id="projects-title">Proyectos que dejan <em>trabajo visible.</em></h1>
            <p className="project-index-lead">
              Eventos, experiencias digitales y colaboraciones donde el alumnado asume un encargo,
              toma decisiones y construye resultados que pueden explicarse y compartirse.
            </p>
          </div>
          <div className="archive-poster" aria-hidden="true" data-reveal="right">
            <span>AR</span>
            <strong>chivo</strong>
            <i>vivo</i>
            <small>2021—26</small>
          </div>
        </section>

        <section className="project-index-section section-space" aria-labelledby="project-list-title">
          <div className="shell">
            <div className="project-index-heading" data-reveal>
              <p className="eyebrow">Selección de proyectos</p>
              <h2 id="project-list-title">Ideas convertidas en <em>experiencia profesional.</em></h2>
            </div>
            <div className="project-card-grid" data-reveal="scale">
              {projects.map((project, index) => (
                <a
                  key={project.slug}
                  className={`project-card project-card-${project.theme} ${index === 0 ? 'project-card-featured' : ''}`}
                  href={`${basePath}/proyectos/${project.slug}/`}
                >
                  <p>{project.year} · {project.category}</p>
                  <span className="project-card-code">{project.code}</span>
                  <h3>{project.title}</h3>
                  <span className="project-card-summary">{project.summary}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <aside className="archive-principle">
          <div className="shell archive-principle-grid" data-reveal>
            <p className="eyebrow">Archivo abierto</p>
            <p>
              Cada ficha explica el contexto, el proceso y las competencias desarrolladas. Los
              documentos y las imágenes se publican solo cuando están revisados y autorizados.
            </p>
          </div>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
