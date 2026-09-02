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
        <header className="shell page-intro">
          <p className="section-code">Archivo / Proyectos</p>
          <h1>Trabajo documentado.<br />Aprendizaje verificable.</h1>
          <p>
            El archivo reúne proyectos realizados por los equipos de Arrea. Cada ficha explica el
            contexto, el alcance, el trabajo desarrollado y las competencias puestas en práctica.
          </p>
        </header>

        <section className="shell project-archive" aria-label="Proyectos de Arrea Eventos">
          {projects.map((project, index) => (
            <a
              key={project.slug}
              className="archive-entry"
              href={`${basePath}/proyectos/${project.slug}/`}
            >
              <span className="archive-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="archive-title">
                <p>{project.code}</p>
                <h2>{project.title}</h2>
              </div>
              <dl>
                <div><dt>Año</dt><dd>{project.year}</dd></div>
                <div><dt>Formato</dt><dd>{project.category}</dd></div>
                <div><dt>Estado</dt><dd>{project.status}</dd></div>
              </dl>
            </a>
          ))}
        </section>

        <aside className="shell archive-note">
          <p className="section-code">Criterio de archivo</p>
          <p>
            Publicamos únicamente información revisada. Las fotografías, documentos y resultados
            se incorporarán a cada ficha cuando hayan sido seleccionados y validados por el centro.
          </p>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}

