'use client';

import { useId, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import type { ProjectMedia } from '@/lib/project-dossiers';
import { basePath } from '@/lib/site';

export function ProjectExplorer({ media }: { media: ProjectMedia[] }) {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);
  const panelId = useId();
  const item = media[selected];

  return (
    <div className="project-explorer">
      <fieldset className="explorer-options">
        <legend className="sr-only">Elegir material del proyecto</legend>
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
            <Image src={`${basePath}${item.preview}`} alt={`Vista previa: ${item.title}`} fill unoptimized style={{ objectFit: 'scale-down' }} loading="lazy" />
          )}
        </div>
        <div className="explorer-caption">
          <div aria-live="polite">
            <p className="detail-label">{item.provider} · Material original</p>
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
              {active ? 'Cerrar contenido externo' : `Cargar ${item.provider}`}
            </Button>
            <a href={item.url} target="_blank" rel="noreferrer">Abrir original en otra pestaña</a>
          </div>
        </div>
      </div>
      <p className="explorer-privacy">
        {active
          ? `Contenido conectado a ${item.provider}. Si no se muestra correctamente, puedes abrir el original en otra pestaña.`
          : `Al pulsar «Cargar ${item.provider}», te conectarás a ese servicio externo, que puede utilizar cookies según su propia política. Hasta entonces, solo se muestra una imagen alojada en esta web.`}
      </p>
      <noscript>
        <p>Para ver los materiales sin JavaScript, abre sus versiones originales:</p>
        <ul>{media.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noreferrer">{resource.title}</a></li>)}</ul>
      </noscript>
    </div>
  );
}
