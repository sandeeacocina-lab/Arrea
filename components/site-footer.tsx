/* oxlint-disable next/no-img-element -- Keep the original logo files on static GitHub Pages. */
import { basePath } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a
          href={`${basePath}/`}
          aria-label="Arrea Eventos, inicio"
          className="footer-brand"
        >
          <img
            src={`${basePath}/images/arrea-logo-light.png`}
            alt="Arrea Eventos"
          />
        </a>
        <div className="footer-disclosure">
          <p>
            ARREA Eventos es una empresa simulada del ciclo de Asistencia a la
            Dirección del IES Arca Real de Valladolid. Esta web tiene finalidad
            educativa e incluye contenidos e imágenes generados con inteligencia
            artificial. Los proyectos históricos conservan sus referencias y
            autorías correspondientes.
          </p>
          <p className="footer-school">
            Centro educativo: C/ General Shelly, 1 · Valladolid ·{' '}
            <a href="tel:+34983220818">983 22 08 18</a>
          </p>
        </div>
        <p>© {new Date().getFullYear()} ARREA Eventos</p>
      </div>
    </footer>
  );
}
