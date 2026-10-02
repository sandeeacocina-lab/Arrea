/* oxlint-disable next/no-img-element -- Use the approved vector logo on static GitHub Pages. */
import { basePath } from '@/lib/en/site';
import { inquiryUrl } from '@/lib/en/packages';

export function SiteFooter({ showContact = false }: { showContact?: boolean }) {
  return (
    <footer className="site-footer">
      {showContact && (
        <section id="contacto" className="shell footer-contact" aria-labelledby="contact-title" data-reveal>
          <div>
            <h2 id="contact-title">Let’s talk about your next event.</h2>
            <p>Tell us your idea. We start by listening.</p>
          </div>
          <a className="action footer-contact-action" href={inquiryUrl()}>
            Tell us about your event
          </a>
        </section>
      )}
      <div className="shell footer-inner">
        <a
          href={`${basePath}/en/`}
          aria-label="Arrea Eventos, home"
          className="footer-brand"
        >
          <img
            src={`${basePath}/images/arrea-identidad-inversa.svg`}
            alt="ARREA Eventos"
            width={460}
            height={432}
          />
          <span className="footer-tagline">One point of contact, your entire event</span>
        </a>
        <div className="footer-disclosure">
          <p>
            ARREA Eventos is a practice enterprise run within the Management Assistance programme at IES Arca Real in Valladolid. This website is for educational purposes and includes AI-generated text and images. The team is represented by fictional characters. Historical projects retain their original references and credits.
          </p>
          <p className="footer-school">
            School: C/ General Shelly, 1 · Valladolid ·{' '}
            <a href="tel:+34983220818">983 22 08 18</a>
          </p>
        </div>
        <p>© {new Date().getFullYear()} ARREA Eventos</p>
      </div>
    </footer>
  );
}

