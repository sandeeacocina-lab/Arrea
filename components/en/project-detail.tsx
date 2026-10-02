import { SiteFooter } from '@/components/en/site-footer';
import { SiteHeader } from '@/components/en/site-header';
import { ProjectDossier } from '@/components/en/project-dossier';
import { projectDossiers } from '@/lib/en/project-dossiers';
import type { Project } from '@/lib/en/projects';
import { basePath } from '@/lib/en/site';

type ProjectDetailProps = {
  project: Project;
  nextProject: Project;
};

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const dossier = projectDossiers[project.slug];

  return (
    <>
      <a className="skip-link" href="#contenido">Skip to content</a>
      <SiteHeader active="proyectos" pagePath={`/proyectos/${project.slug}/`} />
      <main id="contenido" className={`project-detail-page project-${project.theme}`}>
        <header className="project-detail-hero">
          <div className="shell project-breadcrumb">
            <a href={`${basePath}/en/proyectos/`}>All projects</a>
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
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>Format</dt><dd>{project.category}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
          </dl>
          {dossier && (
            <nav className="shell dossier-nav" aria-label="On this project page">
              <a href="#experiencia">Explore the materials</a>
              <a href="#historia">The project story</a>
              <a href="#galeria">Photographs</a>
              <a href="#fuentes">Websites and sources</a>
            </nav>
          )}
        </header>

        {dossier ? <ProjectDossier dossier={dossier} /> : <>
        <section className="project-narrative">
          <div className="shell narrative-grid" data-reveal>
            <p className="detail-label">01 / Starting point</p>
            <div>
              <h2>The project</h2>
              <p>{project.context}</p>
            </div>
            <div>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </div>
          </div>
        </section>

        <section className="shell project-detail-section" data-reveal>
          <header>
            <p className="detail-label">02 / Scope</p>
            <h2>One brief, <span className="heading-accent">many parts.</span></h2>
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
              <p className="detail-label">03 / Work completed</p>
              <h2>From the plan to the <span className="heading-accent">deliverables.</span></h2>
            </header>
            <ul>
              {project.work.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="shell project-detail-section process-section" data-reveal>
          <header>
            <p className="detail-label">04 / Process</p>
            <h2>An idea taking <span className="heading-accent">shape, step by step.</span></h2>
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

        </>}
        <section className="learning-record">
          <div className="shell learning-record-grid" data-reveal>
            <header>
              <p className="detail-label">{dossier ? 'Professional learning' : '05 / Professional learning'}</p>
              <h2>Skills brought <span className="heading-accent">to life.</span></h2>
            </header>
            <ul>
              {project.learning.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section id="fuentes" className="project-sources">
          <div className="shell project-sources-grid" data-reveal>
            <div>
              <p className="eyebrow">Project materials</p>
              <h2>{project.sources.length > 0 ? 'Keep exploring.' : 'Archive in progress.'}</h2>
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
                We will add evidence and documentation once they have been reviewed and approved for publication.
              </p>
            )}
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <a href={`${basePath}/en/proyectos/${nextProject.slug}/`} className="shell">
            <span>Next project</span>
            <strong>{nextProject.title}</strong>
          </a>
        </nav>
      </main>
      <SiteFooter showContact />
    </>
  );
}

