import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectPrivacy } from '@/components/project-privacy';
import './privacy.css';

export const metadata: Metadata = {
  title: 'Información del proyecto y privacidad',
  description: 'Finalidad educativa de ARREA, uso de datos ficticios, buzón compartido y servicios externos de la web.',
};

export default function PrivacyPage() {
  return <><a className="skip-link" href="#privacy">Saltar a la información del proyecto</a><SiteHeader pagePath="/privacidad/"/><ProjectPrivacy/><SiteFooter/></>;
}
