import { simulationNotice } from '@/components/simulation-notice';
import { basePath } from '@/lib/site';

export function ProjectPrivacy({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const en = locale === 'en';
  return (
    <main id="privacy" className="privacy-page shell">
      <p className="eyebrow">{en ? 'EDUCATIONAL SIMULATION' : 'SIMULACIÓN EDUCATIVA'}</p>
      <h1>{en ? 'Project information and privacy' : 'Información del proyecto y privacidad'}</h1>
      <p className="privacy-date">{en ? 'Updated: 3 October 2026' : 'Actualización: 3 de octubre de 2026'}</p>

      <section aria-labelledby="project-title">
        <h2 id="project-title">{en ? 'The educational project' : 'El proyecto educativo'}</h2>
        <p>{en
          ? 'ARREA Eventos is a practice enterprise within the Management Assistance programme at IES Arca Real in Valladolid. This website is used for learning activities, not to accept real commercial enquiries. Its fictional team and AI-generated content form part of the simulation.'
          : 'ARREA Eventos es una empresa simulada del ciclo de Asistencia a la Dirección del IES Arca Real de Valladolid. Esta web se utiliza para actividades de aprendizaje y no atiende solicitudes comerciales reales. El equipo ficticio y los contenidos generados con inteligencia artificial forman parte de la simulación.'}</p>
        <p>{en ? 'Author and educational lead: Sandra Mangas Hernández.' : 'Autoría y dirección pedagógica: Sandra Mangas Hernández.'}</p>
        <p>{en ? 'School: IES Arca Real, Calle General Shelly, 1, 47013 Valladolid. ' : 'Centro educativo: IES Arca Real, Calle General Shelly, 1, 47013 Valladolid. '}
          <a href="https://iesarcareal.es/contacto/">{en ? 'Official school contact page' : 'Contacto oficial del centro'}</a>.
        </p>
        <p>{en ? 'This is the school’s general contact channel. The simulated ARREA inbox is reserved for practice activities.' : 'Este es el canal de contacto general del centro. El buzón simulado de ARREA está reservado a las actividades de prácticas.'}</p>
      </section>

      <section aria-labelledby="form-title">
        <h2 id="form-title">{en ? 'The brief and the shared inbox' : 'El briefing y el buzón compartido'}</h2>
        <p>{simulationNotice[locale]}</p>
        <p>{en
          ? 'Submitting the form sends the answers and the PDF generated in your browser to ARREA’s shared inbox in the Simulation Hub at central.sandramangas.com, identified there as info@arrea.test. Downloading the PDF alone does not send the form. Your answers are not saved by this page when you close it.'
          : 'Al enviar el formulario se remiten las respuestas y el PDF generado en tu navegador al buzón compartido de ARREA en la Central de Simulación, alojada en central.sandramangas.com e identificado allí como info@arrea.test. Descargar únicamente el PDF no envía el formulario. Esta página no guarda tus respuestas cuando la cierras.'}</p>
        <p>{en
          ? 'All fields must contain fictional details, including names, telephone numbers and free text. Requiring an email ending in .test does not by itself make the other information anonymous.'
          : 'Todos los campos deben contener datos ficticios, incluidos los nombres, teléfonos y textos libres. Exigir un correo terminado en .test no convierte por sí solo el resto de la información en anónima.'}</p>
      </section>

      <section aria-labelledby="hosting-title">
        <h2 id="hosting-title">{en ? 'Hosting and language preference' : 'Alojamiento y preferencia de idioma'}</h2>
        <p>{en
          ? 'The website is hosted on GitHub Pages. GitHub states that it records visitors’ IP addresses for security purposes. '
          : 'La web se aloja en GitHub Pages. GitHub informa de que registra las direcciones IP de los visitantes por motivos de seguridad. '}
          <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection">{en ? 'GitHub Pages information' : 'Información de GitHub Pages'}</a>.
        </p>
        <p>{en
          ? 'When you select ES or EN, the website saves your language choice in your browser’s local storage under arrea-language. You can remove this preference by clearing this website’s stored data in your browser.'
          : 'Cuando eliges ES o EN, la web guarda tu preferencia de idioma en el almacenamiento local del navegador con el nombre arrea-language. Puedes eliminar esta preferencia borrando los datos almacenados de esta web en tu navegador.'}</p>
      </section>

      <section aria-labelledby="services-title">
        <h2 id="services-title">{en ? 'External services, cookies and the AI assistant' : 'Servicios externos, cookies y asistente de IA'}</h2>
        <p>{en
          ? 'The website includes a Tavus AI assistant. Its software is loaded automatically from the external provider UNPKG and connects to Tavus to load the assistant. This involves requests to external services even before you start a conversation.'
          : 'La web incluye un asistente de inteligencia artificial de Tavus. Su software se carga automáticamente desde el proveedor externo UNPKG y se conecta con Tavus para cargar el asistente. Esto implica solicitudes a servicios externos incluso antes de iniciar una conversación.'}</p>
        <p>{en
          ? 'Tavus software includes cookies and local storage functions, whose use depends on the service’s settings and your interaction. Use only fictional situations and details with the assistant. Voice and images can identify you; avoid enabling your microphone or camera if you do not wish to share them with the provider.'
          : 'El software de Tavus incluye funciones de cookies y almacenamiento local, cuyo uso depende de la configuración del servicio y de la interacción. Utiliza solo situaciones y datos ficticios con el asistente. La voz y la imagen pueden identificarte: evita activar el micrófono o la cámara si no deseas compartirlos con el proveedor.'}</p>
        <p>
          <a href="https://docs.tavus.io/sections/deployments/widget">{en ? 'How the Tavus widget works' : 'Funcionamiento del widget de Tavus'}</a>
          {' · '}
          <a href="https://www.tavus.io/privacy-policy">{en ? 'Tavus general privacy policy' : 'Política general de privacidad de Tavus'}</a>
        </p>
        <p>{en
          ? 'Project pages also offer embedded content from Genially, ThingLink and YouTube. This content loads when you select its “Load” button; until then, a preview hosted on this website is shown. Loading the content or opening the original connects you to the external provider, which may use cookies and process technical data under its own policies.'
          : 'Las páginas de proyectos también ofrecen contenidos incrustados de Genially, ThingLink y YouTube. Estos contenidos se cargan al pulsar su botón «Cargar»; hasta entonces se muestra una vista previa alojada en esta web. Cargar el contenido o abrir el original te conecta con el proveedor externo, que puede utilizar cookies y tratar datos técnicos conforme a sus propias políticas.'}</p>
      </section>

      <a className="privacy-back" href={`${basePath}${en ? '/en' : ''}/briefing/`}>
        {en ? 'Go to the educational brief' : 'Ir al briefing educativo'}
      </a>
    </main>
  );
}
