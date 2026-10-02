/* oxlint-disable next/no-img-element -- Keep the original archive photographs on static Pages, with explicit dimensions and lazy loading. */
import { ProjectExplorer } from '@/components/en/project-explorer';
import type { ProjectDossier as Dossier } from '@/lib/en/project-dossiers';
import { basePath } from '@/lib/en/site';

export function ProjectDossier({ dossier }: { dossier: Dossier }) {
  return (
    <>
      <section id="experiencia" className="shell dossier-section">
        <header className="dossier-heading" data-reveal>
          <div>
            <p className="detail-label">Experiences and materials</p>
            <h2>The project, <span className="heading-accent">from the inside.</span></h2>
          </div>
          <div className="dossier-intro">
            <p>{dossier.intro}</p>
            <a className="text-action" href={dossier.website.url} target="_blank" rel="noreferrer">{dossier.website.label}</a>
          </div>
        </header>
        <ProjectExplorer media={dossier.media} />
      </section>

      <section id="historia" className="dossier-story">
        <div className="shell">
          <div className="dossier-story-grid" data-reveal>
            <header>
              <p className="detail-label">The project story</p>
              <h2>{dossier.story.title}</h2>
            </header>
            <div>{dossier.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <div className="dossier-contributions">
            {dossier.contributions.map((item, index) => (
              <article key={item.title} data-reveal>
                <span className="detail-label">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="shell dossier-section">
        <header className="dossier-heading" data-reveal>
          <div>
            <p className="detail-label">Photo archive</p>
            <h2>{dossier.galleryTitle}</h2>
          </div>
          <p className="dossier-intro">Original project photographs. Select an image to view it in full in another tab.</p>
        </header>
        <div className={`dossier-gallery ${dossier.photos.length > 4 ? 'dossier-gallery-portraits' : ''}`}>
          {dossier.photos.map((photo, index) => (
            <figure key={photo.src} data-reveal>
              <a href={`${basePath}${photo.src}`} target="_blank" rel="noreferrer" aria-label={`View full photograph: ${photo.alt}`}>
                <img src={`${basePath}${photo.src}`} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
              </a>
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="dossier-credit">Source: <a href={dossier.photoCredit.url} target="_blank" rel="noreferrer">{dossier.photoCredit.label}</a>.</p>
      </section>

      <section className="dossier-chapters">
        <div className="shell dossier-chapter-grid">
          {dossier.chapters.map((chapter) => (
            <article key={chapter.title} data-reveal>
              <p className="detail-label">{chapter.label}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell dossier-section">
        <header className="dossier-heading" data-reveal>
          <div>
            <p className="detail-label">Participants</p>
            <h2>A shared <span className="heading-accent">effort.</span></h2>
          </div>
          <p className="dossier-intro">{dossier.participantsNote}</p>
        </header>
        <ul className="dossier-participants">
          {dossier.participants.map((participant) => (
            <li key={participant.name} data-reveal><h3>{participant.name}</h3><p>{participant.detail}</p></li>
          ))}
        </ul>
        <aside className="dossier-classroom" data-reveal>
          <p className="detail-label">Ideas for practice enterprise learning</p>
          <p>{dossier.classroom}</p>
        </aside>
        <aside className="dossier-archive-note">
          <p className="detail-label">About this archive</p>
          <p>{dossier.archiveNote}</p>
        </aside>
      </section>
    </>
  );
}

