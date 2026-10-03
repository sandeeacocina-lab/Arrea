import { basePath } from '@/lib/site';

export const simulationNotice = {
  es: 'Este formulario forma parte de una simulación educativa. Utiliza únicamente datos ficticios y correos terminados en .test. Los envíos se guardan en el buzón compartido de ARREA de la Central de Simulación para realizar las actividades de aprendizaje. Si se detectan datos personales reales introducidos por error, se eliminarán en cuanto se advierta su presencia. Este canal no atiende solicitudes comerciales reales.',
  en: 'This form is part of an educational simulation. Use only fictional details and email addresses ending in .test. Submissions are stored in ARREA’s shared inbox in the Simulation Hub for learning activities. If real personal data entered by mistake is detected, it will be deleted as soon as its presence is noticed. This channel does not handle real commercial enquiries.',
};

export function SimulationNotice({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  return (
    <div className="briefing-notice">
      <p>{simulationNotice[locale]}</p>
      <a href={`${basePath}${locale === 'en' ? '/en' : ''}/privacidad/`}>
        {locale === 'en' ? 'Project information and privacy' : 'Información del proyecto y privacidad'}
      </a>
    </div>
  );
}
