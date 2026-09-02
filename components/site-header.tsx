import { basePath } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href={`${basePath}/`} aria-label="Arrea Eventos, inicio" className="brand-link">
          <img src={`${basePath}/images/arrea-logo.png`} alt="Arrea Eventos" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href={`${basePath}/#servicios`}>Servicios</a>
          <a href={`${basePath}/proyectos/`}>Proyectos</a>
          <a href={`${basePath}/#aula`}>Cómo trabajamos</a>
          <a href={`${basePath}/#nosotros`}>Quiénes somos</a>
        </nav>

        <a href={`${basePath}/#contacto`} className="header-cta">Contacto</a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav aria-label="Navegación móvil">
            <a href={`${basePath}/#servicios`}>Servicios</a>
            <a href={`${basePath}/proyectos/`}>Proyectos</a>
            <a href={`${basePath}/#aula`}>Cómo trabajamos</a>
            <a href={`${basePath}/#nosotros`}>Quiénes somos</a>
            <a href={`${basePath}/#contacto`}>Contacto</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
