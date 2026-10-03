import type { Metadata } from 'next';
import { SiteHeader } from '@/components/en/site-header';
import { SiteFooter } from '@/components/en/site-footer';
import { ProjectPrivacy } from '@/components/project-privacy';
import '../../privacidad/privacy.css';

export const metadata: Metadata = {
  title: 'Project information and privacy',
  description: 'ARREA’s educational purpose, fictional details, shared inbox and external website services.',
};

export default function PrivacyPage() {
  return <><a className="skip-link" href="#privacy">Skip to project information</a><SiteHeader pagePath="/privacidad/"/><ProjectPrivacy locale="en"/><SiteFooter/></>;
}
