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
import { SiteFooter } from '@/components/en/site-footer';
import { SiteHeader } from '@/components/en/site-header';
import { inquiryUrl, packages } from '@/lib/en/packages';
import { basePath } from '@/lib/en/site';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Impulso, Encuentro and Conexión: business communication, conference and convention packages with clear prices, inclusions and terms.',
};
const extras = [
  { title: 'Highlights video', icon: Video },
  { title: 'Live streaming', icon: Radio },
  { title: 'Additional printing', icon: FileText },
  { title: 'Speakers', icon: UserRound },
  { title: 'Accommodation and transport', icon: Car },
  { title: 'Additional capacity', icon: UsersRound },
];

export default function PackagesPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Skip to content
      </a>
      <SiteHeader active="paquetes" />
      <main id="contenido" className="packages-page">
        <section
          className="shell packages-hero"
          aria-labelledby="packages-title"
        >
          <nav className="packages-breadcrumb" aria-label="Breadcrumb">
            <a href={`${basePath}/en/`}>Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Packages</span>
          </nav>
          <div className="packages-hero-heading" data-reveal>
            <p className="eyebrow">ARREA packages</p>
            <p className="package-categories">
              Communication <span>·</span> Conferences <span>·</span> Conventions
            </p>
            <h1 id="packages-title">
              Your goal.
              <br />
              <span className="heading-accent">The package to make it happen.</span>
            </h1>
            <p className="packages-intro">
              Three ways to communicate, gather and connect. Compare what each includes and tell us what you need.
            </p>
          </div>
        </section>
        <section
          className="shell package-comparison"
          aria-label="Package comparison"
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
                      <strong>{item.price} €</strong> <span>+ VAT</span>
                    </p>
                    <p>{item.total} € including VAT</p>
                  </div>
                  <p className="package-scope">{item.scope}</p>
                  <div className="package-includes">
                    <h3>What is included</h3>
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
                      <strong>Lead time:</strong> {item.timeline}
                    </p>
                    <p>{item.exclusions}</p>
                  </div>
                  <a
                    className="action package-action"
                    href={inquiryUrl(item.name)}
                  >
                    Enquire about {item.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="package-price-note">
            Indicative prices for the scope shown. Your quotation confirms availability, resources, terms and the final cost. Additional services are quoted and agreed separately.
          </p>
        </section>
        <section className="package-extras" aria-labelledby="extras-title">
          <div className="shell package-extras-inner" data-reveal>
            <div>
              <h2 id="extras-title">Need something else?</h2>
              <p>We tailor the proposal to your event.</p>
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

