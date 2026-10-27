import type { Metadata } from 'next';
import { ArcaTalksContent, arcaTalksPath } from '@/components/arca-talks';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'ARCA TALKS 2027 · Competencias que abren puertas',
  description: 'ARCA TALKS. Jornadas del IES Arca Real, Valladolid, los días 21 y 22 de enero de 2027. Programa, difusión y recopilatorio de charlas y materiales.',
  openGraph: {
    title: 'ARCA TALKS 2027 · Competencias que abren puertas',
    description: '21 y 22 de enero de 2027 · IES Arca Real · Valladolid. Ideas, comunicación y competencias profesionales.',
  },
};

export default function ArcaTalksPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader active="arca-talks" pagePath={arcaTalksPath} /><ArcaTalksContent /><SiteFooter /></>;
}
