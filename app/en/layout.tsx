import type { Metadata } from 'next';
import { basePath } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: 'One point of contact, your entire event',
    template: '%s | ARREA Eventos',
  },
  description: 'ARREA Eventos. Business event management, coordination and communication in Valladolid. One point of contact, your entire event.',
  openGraph: {
    title: 'ARREA Eventos | One point of contact, your entire event',
    description: 'One point of contact. A whole team behind you.',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${basePath}/og-identidad-2026.png`, width: 1200, height: 630, alt: 'ARREA Eventos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARREA Eventos | One point of contact, your entire event',
    description: 'One point of contact. A whole team behind you.',
    images: [`${basePath}/og-identidad-2026.png`],
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
