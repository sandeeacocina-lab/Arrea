import type { Metadata } from 'next';
import { ArcaTalksContent, arcaTalksPath } from '@/components/arca-talks';
import { SiteHeader } from '@/components/en/site-header';
import { SiteFooter } from '@/components/en/site-footer';

export const metadata: Metadata = {
  title: 'ARCA TALKS 2027 · Skills that open doors',
  description: 'ARCA TALKS at IES Arca Real, Valladolid, on 21 and 22 January 2027. Programme, promotion and a collection of talks and resources.',
  openGraph: {
    title: 'ARCA TALKS 2027 · Skills that open doors',
    description: '21 and 22 January 2027 · IES Arca Real · Valladolid. Ideas, communication and professional skills.',
    locale: 'en_GB',
  },
};

export default function ArcaTalksPage() {
  return <><a className="skip-link" href="#contenido">Skip to content</a><SiteHeader active="arca-talks" pagePath={arcaTalksPath} /><ArcaTalksContent locale="en" /><SiteFooter /></>;
}
