import { basePath } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a href={`${basePath}/`} aria-label="Arrea Eventos, inicio" className="footer-brand">
          <img src={`${basePath}/images/arrea-logo-light.png`} alt="Arrea Eventos" />
        </a>
        <p>Empresa simulada del IES Arca Real</p>
        <p>© {new Date().getFullYear()} Arrea Eventos · Sin cookies de seguimiento</p>
      </div>
    </footer>
  );
}
