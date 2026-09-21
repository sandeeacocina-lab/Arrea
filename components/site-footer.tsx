/* oxlint-disable next/no-img-element -- Use the approved vector logo on static GitHub Pages. */
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
            src={`${basePath}/images/arrea-identidad-inversa.svg`}
            alt="ARREA Eventos"
            width={460}
            height={432}
          />
          <span className="footer-tagline">Un solo punto, todo tu evento</span>
        </a>
        <div className="footer-disclosure">
          <p>
            ARREA Eventos es una empresa simulada del ciclo de Asistencia a la
            Dirección del IES Arca Real de Valladolid. Esta web tiene finalidad
            educativa e incluye contenidos e imágenes generados con inteligencia
            artificial. El equipo se representa mediante personajes ficticios.
            Los proyectos históricos conservan sus referencias y autorías
            correspondientes.
          </p>
          <p className="footer-school">
            Centro educativo: C/ General Shelly, 1 · Valladolid ·{' '}
            <a href="tel:+34983220818">983 22 08 18</a>
          </p>
        </div>
        <p>© {new Date().getFullYear()} ARREA Eventos</p>
      </div>
      <p className="brand-authorship shell">
        Autoría y dirección pedagógica: Sandra Mangas. Identidad basada en la
        propuesta de una alumna. Apoyo de IA en adaptación visual y desarrollo,
        bajo las indicaciones, revisión y criterio de la autora.
      </p>
    </footer>
  );
}
