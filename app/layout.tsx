import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { MotionController } from '@/components/motion-controller';

import './globals.css';
import './identity-preview.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sandeeacocina-lab.github.io'),
  title: {
    default: 'ARREA Eventos | Un solo punto, todo tu evento',
    template: '%s | ARREA Eventos',
  },
  description:
    'ARREA Eventos. Organización, coordinación y comunicación de eventos empresariales en Valladolid. Un solo punto, todo tu evento.',
  icons: {
    icon: `${basePath}/favicon-arrea.svg`,
  },
  openGraph: {
    title: 'ARREA Eventos | Un solo punto, todo tu evento',
    description: 'Un solo punto, todo tu evento. Una persona de contacto y todo un equipo coordinando cada detalle.',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: `${basePath}/og-identidad-2026.png`,
        width: 1200,
        height: 630,
        alt: 'ARREA Eventos. Un solo punto, todo tu evento.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARREA Eventos | Un solo punto, todo tu evento',
    description: 'Un solo punto, todo tu evento. Una persona de contacto y todo un equipo coordinando cada detalle.',
    images: [`${basePath}/og-identidad-2026.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionController />
        {children}
      </body>
    </html>
  );
}
