import { LanguageSwitcher } from '@/components/language-switcher';
/* oxlint-disable next/no-img-element -- Use the approved vector logo on static GitHub Pages. */
import { basePath, contactUrl } from '@/lib/en/site';

export function SiteHeader({
  home = false,
  active,
  pagePath,
}: {
  home?: boolean;
  pagePath?: string;
  active?: 'paquetes' | 'proyectos' | 'quienes-somos';
}) {
  const homeLink = home ? '' : `${basePath}/en/`;
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          href={`${basePath}/en/`}
          aria-label="Arrea Eventos, home"
          className="brand-link"
        >
          <img src={`${basePath}/images/arrea-identidad-principal.svg`} alt="ARREA Eventos" width={460} height={432} />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href={`${homeLink}#servicios`}>Services</a>
          <a
            href={`${basePath}/en/paquetes/`}
            aria-current={active === 'paquetes' ? 'page' : undefined}
          >
            Packages
          </a>
          <a
            href={`${basePath}/en/proyectos/`}
            aria-current={active === 'proyectos' ? 'page' : undefined}
          >
            Projects
          </a>
          <a href={`${homeLink}#aula`}>How we work</a>
          <a
            href={`${basePath}/en/quienes-somos/`}
            aria-current={active === 'quienes-somos' ? 'page' : undefined}
          >
            About us
          </a>
        </nav>

        <a href={contactUrl} className="header-cta">
          Tell us your idea
        </a>

        <LanguageSwitcher path={pagePath ?? (active ? `/${active}/` : '/')} locale="en" />

        <details className="mobile-menu">
          <summary aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href={`${homeLink}#servicios`}>Services</a>
            <a
              href={`${basePath}/en/paquetes/`}
              aria-current={active === 'paquetes' ? 'page' : undefined}
            >
              Packages
            </a>
            <a href={`${basePath}/en/proyectos/`} aria-current={active === 'proyectos' ? 'page' : undefined}>Projects</a>
            <a href={`${homeLink}#aula`}>How we work</a>
            <a
              href={`${basePath}/en/quienes-somos/`}
              aria-current={active === 'quienes-somos' ? 'page' : undefined}
            >
              About us
            </a>
            <a href={contactUrl}>Contact</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

