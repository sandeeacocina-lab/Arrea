/* oxlint-disable next/no-img-element -- Use the approved vector logo on static GitHub Pages. */
import { basePath } from '@/lib/site';
import { inquiryUrl } from '@/lib/packages';

export function SiteFooter({ showContact = false }: { showContact?: boolean }) {
  return (
    <footer className="site-footer">
      {showContact && (
        <section id="contacto" className="shell footer-contact" aria-labelledby="contact-title" data-reveal>
          <div>
            <h2 id="contact-title">Hablemos de tu próximo evento.</h2>
            <p>Cuéntanos tu idea. Empezamos por escucharte.</p>
          </div>
          <a className="action footer-contact-action" href={inquiryUrl()}>
            Cuéntanos tu evento
          </a>
        </section>
      )}
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
    </footer>
  );
}
