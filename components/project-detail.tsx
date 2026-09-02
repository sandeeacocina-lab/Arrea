import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Project } from '@/lib/projects';
import { basePath } from '@/lib/site';

type ProjectDetailProps = {
  project: Project;
  nextProject: Project;
};

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido">
        <header className="project-detail-hero">
          <div className="shell project-breadcrumb">
            <a href={`${basePath}/proyectos/`}>Todos los proyectos</a>
            <span>{project.code}</span>
          </div>
          <div className="shell project-detail-hero-grid">
            <div className="project-detail-copy" data-reveal="left">
              <p className="eyebrow">{project.status} · {project.year}</p>
              <h1>{project.title}</h1>
              <p>{project.summary}</p>
            </div>
            <div className={`detail-poster detail-poster-${project.theme}`} aria-hidden="true" data-reveal="right">
              <span>{project.poster.top}</span>
              {project.poster.script && <strong>{project.poster.script}</strong>}
              <span>{project.poster.bottom}</span>
              <i>{project.poster.mark}</i>
            </div>
          </div>
          <dl className="shell project-facts" data-reveal>
            <div><dt>Año</dt><dd>{project.year}</dd></div>
            <div><dt>Formato</dt><dd>{project.category}</dd></div>
            <div><dt>Lugar</dt><dd>{project.location}</dd></div>
            <div><dt>Estado</dt><dd>{project.status}</dd></div>
          </dl>
        </header>

        <section className="project-narrative">
          <div className="shell narrative-grid" data-reveal>
            <p className="detail-label">01 / Punto de partida</p>
            <div>
              <h2>El proyecto</h2>
              <p>{project.context}</p>
            </div>
            <div>
              <h2>El reto</h2>
              <p>{project.challenge}</p>
            </div>
          </div>
        </section>

        <section className="shell project-detail-section" data-reveal>
          <header>
            <p className="detail-label">02 / Alcance</p>
            <h2>Un encargo con <em>muchas piezas.</em></h2>
          </header>
          <ol className="scope-list">
            {project.scope.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        <section className="project-work-section">
          <div className="shell project-work-grid" data-reveal>
            <header>
              <p className="detail-label">03 / Trabajo desarrollado</p>
              <h2>Del plan a los <em>entregables.</em></h2>
            </header>
            <ul>
              {project.work.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="shell project-detail-section process-section" data-reveal>
          <header>
            <p className="detail-label">04 / Proceso</p>
            <h2>Una idea que toma <em>forma por etapas.</em></h2>
          </header>
          <ol className="phase-grid">
            {project.phases.map((phase, index) => (
              <li key={phase.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="learning-record">
          <div className="shell learning-record-grid" data-reveal>
            <header>
              <p className="detail-label">05 / Aprendizaje profesional</p>
              <h2>Competencias que salen <em>del papel.</em></h2>
            </header>
            <ul>
              {project.learning.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="project-sources">
          <div className="shell project-sources-grid" data-reveal>
            <div>
              <p className="eyebrow">Material del proyecto</p>
              <h2>{project.sources.length > 0 ? 'Seguir explorando.' : 'Archivo en construcción.'}</h2>
            </div>
            {project.sources.length > 0 ? (
              <div className="source-links">
                {project.sources.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="source-note">
                Incorporaremos evidencias y documentación cuando hayan sido revisadas y autorizadas
                para su publicación.
              </p>
            )}
          </div>
        </section>

        <nav className="next-project" aria-label="Siguiente proyecto">
          <a href={`${basePath}/proyectos/${nextProject.slug}/`} className="shell">
            <span>Siguiente proyecto</span>
            <strong>{nextProject.title}</strong>
          </a>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
