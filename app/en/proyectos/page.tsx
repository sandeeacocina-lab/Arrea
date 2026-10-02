import type { Metadata } from 'next';

import { SiteFooter } from '@/components/en/site-footer';
import { SiteHeader } from '@/components/en/site-header';
import { projects } from '@/lib/en/projects';
import { basePath } from '@/lib/en/site';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'An archive of event management, production and communication projects by Arrea Eventos.',
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Skip to content
      </a>
      <SiteHeader active="proyectos" />
      <main id="contenido" className="projects-page">
        <section
          className="shell project-index-hero"
          aria-labelledby="projects-title"
        >
          <div data-reveal="left">
            <p className="eyebrow">Arrea archive</p>
            <h1 id="projects-title">
              Projects that are part of <span className="heading-accent">our story.</span>
            </h1>
            <p className="project-index-lead">
              A selection of events, gatherings and digital experiences showing how ARREA has evolved and how we organise, communicate and coordinate.
            </p>
          </div>
          <div
            className="archive-poster"
            aria-hidden="true"
            data-reveal="right"
          >
            <span>Archive</span>
            <strong>alive.</strong>
            <small>2021—26</small>
          </div>
        </section>

        <section
          className="project-index-section section-space"
          aria-labelledby="project-list-title"
        >
          <div className="shell">
            <div className="project-index-heading" data-reveal>
              <p className="eyebrow">Selected projects</p>
              <h2 id="project-list-title">
                Ideas turned into <span className="heading-accent">professional experience.</span>
              </h2>
            </div>
            <div className="project-card-grid">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  className={`project-card project-card-${project.theme}`}
                  href={`${basePath}/en/proyectos/${project.slug}/`}
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
            <p className="eyebrow">Open archive</p>
            <p>
              Each project page explains its context, process and the skills developed. Documents and images are published only after review and approval.
            </p>
          </div>
        </aside>
      </main>
      <SiteFooter showContact />
    </>
  );
}

