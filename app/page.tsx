import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  MapPin,
  Megaphone,
  Sparkles,
  UsersRound,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    number: '01',
    title: 'Eventos que conectan',
    text: 'Diseñamos jornadas, ferias y encuentros para que cada detalle tenga un propósito.',
    icon: CalendarDays,
  },
  {
    number: '02',
    title: 'Secretaría técnica',
    text: 'Coordinamos participantes, agenda, comunicaciones y documentación antes, durante y después.',
    icon: UsersRound,
  },
  {
    number: '03',
    title: 'Comunicación creativa',
    text: 'Convertimos la idea del evento en una identidad, una campaña y una experiencia coherente.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Protocolo y acogida',
    text: 'Cuidamos invitaciones, recepción, precedencias, atención a ponentes y experiencia de asistentes.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Difusión y contenidos',
    text: 'Preparamos piezas, mensajes y calendarios para dar visibilidad al proyecto antes y después del evento.',
    icon: Megaphone,
  },
  {
    number: '06',
    title: 'Memoria y evaluación',
    text: 'Recogemos evidencias, resultados y aprendizajes para cerrar cada proyecto y mejorar el siguiente.',
    icon: ChartNoAxesCombined,
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#contenido" aria-label="Arrea Eventos, inicio" className="brand-link">
            <img src={`${basePath}/images/arrea-logo.png`} alt="Arrea Eventos" />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#aula">Cómo trabajamos</a>
            <a href="#nosotros">Quiénes somos</a>
          </nav>

          <a
            href="#contacto"
            className={cn(buttonVariants({ size: 'lg' }), 'header-cta')}
          >
            Cuéntanos tu idea
            <ArrowUpRight aria-hidden="true" />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menú">Menú</summary>
            <nav aria-label="Navegación móvil">
              <a href="#servicios">Servicios</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#aula">Cómo trabajamos</a>
              <a href="#nosotros">Quiénes somos</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="contenido" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><MapPin aria-hidden="true" /> IES Arca Real · Valladolid</p>
          <h1 id="hero-title">
            Ideas que se organizan.<br />
            <em>Eventos que dejan huella.</em>
          </h1>
          <p className="hero-intro">
            Somos la empresa simulada de Asistencia a la Dirección del IES Arca Real.
            Aprendemos haciendo: planificamos, comunicamos y damos vida a eventos reales.
          </p>
          <div className="hero-actions">
            <a
              href="#contacto"
              className={cn(buttonVariants({ size: 'lg' }), 'primary-action')}
            >
              Cuéntanos tu evento
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#proyectos" className="text-action">
              Ver proyectos <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src={`${basePath}/images/arrea-evento-editorial.png`}
              alt="Preparación de un evento contemporáneo con escenario, señalética y zona de recepción"
            />
          </div>
          <div className="hero-stamp" aria-label="Desde 2021">
            <span>Desde</span>
            <strong>2021</strong>
          </div>
          <div className="hero-note">Tu evento,<br />nuestra pasión.</div>
        </div>
      </section>

      <div className="ticker" aria-label="Áreas de trabajo de Arrea Eventos">
        <div>
          <span>Planificamos</span><i>●</i><span>Coordinamos</span><i>●</i>
          <span>Comunicamos</span><i>●</i><span>Conectamos</span><i>●</i>
        </div>
      </div>

      <section id="servicios" className="services-section shell section-space">
        <div className="section-heading">
          <p className="eyebrow">Qué hacemos</p>
          <h2>Todo lo necesario para que una idea <em>se convierta en experiencia.</em></h2>
          <a href="#contacto" className="text-action">Cuéntanos qué necesitas <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="service-grid">
          {services.map(({ number, title, text, icon: Icon }) => (
            <article key={number} className="service-card">
              <div className="service-card-top">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="featured-project section-space">
        <div className="shell project-grid">
          <div className="project-poster" aria-label="Voces que inspiran">
            <span>Voces</span>
            <strong>que</strong>
            <span>inspiran</span>
            <i>2025</i>
          </div>
          <div className="project-copy">
            <p className="eyebrow">Proyecto destacado · 2025</p>
            <h2>Voces que inspiran</h2>
            <p>
              Una experiencia concebida, coordinada y comunicada por el alumnado: protocolo,
              atención a participantes, puesta en escena y seguimiento del evento.
            </p>
            <dl>
              <div><dt>Formato</dt><dd>Jornada educativa</dd></div>
              <div><dt>Equipo</dt><dd>Asistencia a la Dirección</dd></div>
              <div><dt>Lugar</dt><dd>IES Arca Real</dd></div>
            </dl>
            <a href="#archivo" className="project-link">Explorar el archivo <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="archivo" className="archive-section shell section-space" aria-labelledby="archive-title">
        <div className="section-heading archive-heading">
          <p className="eyebrow">Archivo Arrea</p>
          <h2 id="archive-title">Proyectos que construyen <em>experiencia de verdad.</em></h2>
        </div>
        <div className="archive-grid">
          <article className="archive-card archive-card-primary">
            <p>2025 · Jornada educativa</p>
            <h3>Voces que inspiran</h3>
            <span>Protocolo · Producción · Comunicación</span>
          </article>
          <article className="archive-card archive-card-light">
            <p>2022 · Feria educativa</p>
            <h3>Feria ARCADECA</h3>
            <span>Secretaría técnica · Atención · Difusión</span>
          </article>
        </div>
      </section>

      <section id="aula" className="learning-section section-space" aria-labelledby="learning-title">
        <div className="shell">
          <div className="learning-intro">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 id="learning-title">Una empresa simulada.<br /><em>Un estándar profesional.</em></h2>
            <p>
              Arrea es el eje práctico del módulo CL2103. El alumnado asume funciones reales de
              asistencia a la dirección y trabaja con encargos, plazos, reuniones y entregables.
            </p>
          </div>
          <div className="learning-grid">
            <article>
              <span>01</span>
              <h3>Simulaciones formativas</h3>
              <p>Casos preparados para ensayar decisiones, documentación y coordinación en un entorno seguro.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Proyectos cooperativos</h3>
              <p>Equipos con responsabilidades definidas que planifican, producen y evalúan un evento completo.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Colaboraciones reales</h3>
              <p>Encargos viables del centro y su entorno, con interlocución, resultados y revisión profesional.</p>
            </article>
          </div>
          <dl className="learning-stats" aria-label="Datos del módulo">
            <div><dt>54</dt><dd>horas de práctica</dd></div>
            <div><dt>5</dt><dd>resultados de aprendizaje</dd></div>
            <div><dt>1</dt><dd>empresa que conecta todo</dd></div>
          </dl>
        </div>
      </section>

      <section id="nosotros" className="about-section shell section-space">
        <p className="eyebrow">Quiénes somos</p>
        <div className="about-grid">
          <h2>Una empresa donde el aula <em>se parece al mundo real.</em></h2>
          <div>
            <p>
              Arrea nació en 2021 dentro del IES Arca Real para transformar el aprendizaje en
              práctica profesional. Cada proyecto es una oportunidad para organizar, colaborar,
              tomar decisiones y mejorar.
            </p>
            <p>
              Somos un equipo que cambia cada curso, pero mantiene la misma energía: convertir
              ideas en experiencias bien pensadas, útiles y memorables.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Hablemos</p>
            <h2>¿Tienes una idea?<br /><em>Vamos a ponerla en marcha.</em></h2>
          </div>
          <div className="contact-details">
            <a href="mailto:info@feriaarcadeca.es">info@feriaarcadeca.es <ArrowUpRight aria-hidden="true" /></a>
            <a href="tel:+34983220818">983 22 08 18 <ArrowUpRight aria-hidden="true" /></a>
            <address>IES Arca Real<br />C/ General Shelly, 1 · Valladolid</address>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a href="#contenido" aria-label="Arrea Eventos, inicio" className="footer-brand">
            <img src={`${basePath}/images/arrea-logo-light.png`} alt="Arrea Eventos" />
          </a>
          <p>Empresa simulada del IES Arca Real</p>
          <p>© {new Date().getFullYear()} Arrea Eventos · Sin cookies de seguimiento</p>
        </div>
      </footer>
    </main>
  );
}
