'use client';

/* oxlint-disable next/no-img-element -- Static Pages serves original images; the fixed-ratio screen reserves their layout. */
import { useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { ProjectMedia } from '@/lib/en/project-dossiers';
import { basePath } from '@/lib/en/site';

export function ProjectExplorer({ media }: { media: ProjectMedia[] }) {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);
  const panelId = useId();
  const item = media[selected];

  return (
    <div className="project-explorer">
      <fieldset className="explorer-options">
        <legend className="sr-only">Choose project materials</legend>
        {media.map((resource, index) => (
          <Button
            key={resource.url}
            variant="ghost"
            className="explorer-option"
            aria-pressed={selected === index}
            aria-controls={panelId}
            onClick={() => { setSelected(index); setActive(false); }}
          >
            {resource.label}
          </Button>
        ))}
      </fieldset>
      <div id={panelId} className="explorer-panel">
        <div className="explorer-screen">
          {active ? (
            <iframe
              key={item.url}
              src={item.embedUrl}
              title={item.title}
              allow="fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <img src={`${basePath}${item.preview}`} alt={`Preview: ${item.title}`} loading="lazy" decoding="async" />
          )}
        </div>
        <div className="explorer-caption">
          <div aria-live="polite">
            <p className="detail-label">{item.provider} · Original material</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="explorer-actions">
            <Button
              className="explorer-load"
              aria-expanded={active}
              aria-controls={panelId}
              onClick={() => setActive(!active)}
            >
              {active ? 'Close external content' : `Load ${item.provider}`}
            </Button>
            <a href={item.url} target="_blank" rel="noreferrer">Open original in another tab</a>
          </div>
        </div>
      </div>
      <p className="explorer-privacy">
        {active
          ? `Content connected to ${item.provider}. If it does not display correctly, you can open the original in another tab.`
          : `By selecting “Load ${item.provider}”, you connect to that external service, which may use cookies under its own policy. Until then, only an image hosted on this website is shown.`}
      </p>
      <noscript>
        <p>To view the materials without JavaScript, open the originals:</p>
        <ul>{media.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a></li>)}</ul>
      </noscript>
    </div>
  );
}

