/* oxlint-disable next/no-img-element -- Keep the original logo files on static GitHub Pages. */
import { basePath } from '@/lib/site';

export function SiteHeader({
  home = false,
  active,
}: {
  home?: boolean;
  active?: 'paquetes' | 'proyectos' | 'quienes-somos';
}) {
  const homeLink = home ? '' : `${basePath}/`;
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          href={`${basePath}/`}
          aria-label="Arrea Eventos, inicio"
          className="brand-link"
        >
          <img src={`${basePath}/images/arrea-logo.png`} alt="Arrea Eventos" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href={`${homeLink}#servicios`}>Servicios</a>
          <a
            href={`${basePath}/paquetes/`}
            aria-current={active === 'paquetes' ? 'page' : undefined}
          >
            Paquetes
          </a>
          <a
            href={`${basePath}/proyectos/`}
            aria-current={active === 'proyectos' ? 'page' : undefined}
          >
            Proyectos
          </a>
          <a href={`${homeLink}#aula`}>Cómo trabajamos</a>
          <a
            href={`${basePath}/quienes-somos/`}
            aria-current={active === 'quienes-somos' ? 'page' : undefined}
          >
            Quiénes somos
          </a>
        </nav>

        <a href={`${homeLink}#contacto`} className="header-cta">
          Cuéntanos tu idea
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav aria-label="Navegación móvil">
            <a href={`${homeLink}#servicios`}>Servicios</a>
            <a
              href={`${basePath}/paquetes/`}
              aria-current={active === 'paquetes' ? 'page' : undefined}
            >
              Paquetes
            </a>
            <a href={`${basePath}/proyectos/`}>Proyectos</a>
            <a href={`${homeLink}#aula`}>Cómo trabajamos</a>
            <a
              href={`${basePath}/quienes-somos/`}
              aria-current={active === 'quienes-somos' ? 'page' : undefined}
            >
              Quiénes somos
            </a>
            <a href={`${homeLink}#contacto`}>Contacto</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
