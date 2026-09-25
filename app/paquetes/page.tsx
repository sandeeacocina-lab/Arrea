import type { Metadata } from 'next';
import {
  Car,
  Check,
  FileText,
  Radio,
  UserRound,
  UsersRound,
  Video,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { inquiryUrl, packages } from '@/lib/packages';
import { basePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Paquetes',
  description:
    'Impulso, Encuentro y Conexión: paquetes de comunicación, jornadas y convenciones empresariales con precios, inclusiones y condiciones claras.',
};
const extras = [
  { title: 'Vídeo resumen', icon: Video },
  { title: 'Retransmisión', icon: Radio },
  { title: 'Impresión adicional', icon: FileText },
  { title: 'Ponentes', icon: UserRound },
  { title: 'Alojamiento y transporte', icon: Car },
  { title: 'Ampliación de aforo', icon: UsersRound },
];

export default function PackagesPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader active="paquetes" />
      <main id="contenido" className="packages-page">
        <section
          className="shell packages-hero"
          aria-labelledby="packages-title"
        >
          <nav className="packages-breadcrumb" aria-label="Ubicación">
            <a href={`${basePath}/`}>Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Paquetes</span>
          </nav>
          <div className="packages-hero-heading" data-reveal>
            <p className="eyebrow">Paquetes ARREA</p>
            <p className="package-categories">
              Comunicación <span>·</span> Jornadas <span>·</span> Convenciones
            </p>
            <h1 id="packages-title">
              Tu objetivo.
              <br />
              <span className="heading-accent">El paquete que lo impulsa.</span>
            </h1>
            <p className="packages-intro">
              Tres propuestas para comunicar, reunir y conectar. Compara lo que
              incluye cada una y cuéntanos qué necesitas.
            </p>
          </div>
        </section>
        <section
          className="shell package-comparison"
          aria-label="Comparación de paquetes"
        >
          <div className="package-grid">
            {packages.map((item) => (
              <article
                className={`package-card package-${item.theme}`}
                key={item.id}
                id={item.id}
                data-reveal
                aria-labelledby={`${item.id}-title`}
              >
                <header className="package-card-header">
                  <h2 id={`${item.id}-title`}>{item.name}</h2>
                  <p>{item.description}</p>
                </header>
                <div className="package-card-body">
                  <div className="package-pricing">
                    <p>
                      <strong>{item.price} €</strong> <span>+ IVA</span>
                    </p>
                    <p>{item.total} € IVA incluido</p>
                  </div>
                  <p className="package-scope">{item.scope}</p>
                  <div className="package-includes">
                    <h3>Qué incluye</h3>
                    <ul>
                      {item.includes.map((included) => (
                        <li key={included}>
                          <span className="package-check">
                            <Check aria-hidden="true" />
                          </span>
                          <span>{included}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="package-conditions">
                    <p>
                      <strong>Plazo:</strong> {item.timeline}
                    </p>
                    <p>{item.exclusions}</p>
                  </div>
                  <a
                    className="action package-action"
                    href={inquiryUrl(item.name)}
                  >
                    Consultar {item.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="package-price-note">
            Precios de referencia para el alcance indicado. El presupuesto
            confirma disponibilidad, recursos, condiciones y coste final. Las
            ampliaciones se valoran y aceptan por separado.
          </p>
        </section>
        <section className="package-extras" aria-labelledby="extras-title">
          <div className="shell package-extras-inner" data-reveal>
            <div>
              <h2 id="extras-title">¿Necesitas algo más?</h2>
              <p>Personalizamos la propuesta según tu evento.</p>
            </div>
            <ul>
              {extras.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <Icon aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter showContact />
    </>
  );
}
