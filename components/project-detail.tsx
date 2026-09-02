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
        <header className="shell project-masthead">
          <nav aria-label="Ruta de navegación">
            <a href={`${basePath}/proyectos/`}>Proyectos</a>
            <span>/</span>
            <span>{project.title}</span>
          </nav>

          <div className="project-masthead-grid">
            <p className="project-record">{project.code}</p>
            <div>
              <p className="project-category">{project.year} · {project.category}</p>
              <h1>{project.title}</h1>
              <p className="project-lead">{project.summary}</p>
            </div>
          </div>

          <dl className="project-facts">
            <div><dt>Año</dt><dd>{project.year}</dd></div>
            <div><dt>Formato</dt><dd>{project.category}</dd></div>
            <div><dt>Lugar</dt><dd>{project.location}</dd></div>
            <div><dt>Estado</dt><dd>{project.status}</dd></div>
          </dl>
        </header>

        <section className="project-narrative">
          <div className="shell narrative-grid">
            <p className="detail-label">01 / Contexto</p>
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

        <section className="shell project-detail-section">
          <header>
            <p className="detail-label">02 / Alcance</p>
            <h2>Qué comprendía el trabajo.</h2>
          </header>
          <ol className="scope-list">
            {project.scope.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        <section className="project-work-section">
          <div className="shell project-work-grid">
            <header>
              <p className="detail-label">03 / Trabajo desarrollado</p>
              <h2>Entregables y responsabilidades.</h2>
            </header>
            <ul>
              {project.work.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="shell project-detail-section">
          <header>
            <p className="detail-label">04 / Proceso</p>
            <h2>Un proyecto dividido en fases.</h2>
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
          <div className="shell learning-record-grid">
            <header>
              <p className="detail-label">05 / Aprendizaje profesional</p>
              <h2>Competencias puestas en práctica.</h2>
            </header>
            <ul>
              {project.learning.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <aside className="shell project-documentation-note">
          <p className="detail-label">Documentación</p>
          <p>
            Esta ficha presenta la estructura profesional del proyecto. El archivo se ampliará con
            materiales y evidencias cuando hayan sido revisados y autorizados para publicación.
          </p>
        </aside>

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
