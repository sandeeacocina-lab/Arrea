import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { MotionController } from '@/components/motion-controller';

import './globals.css';

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
    default: 'Arrea Eventos | Un solo punto, todo tu evento',
    template: '%s | Arrea Eventos',
  },
  description:
    'ARREA Eventos. Organización, coordinación y comunicación de eventos empresariales en Valladolid. Un solo punto, todo tu evento.',
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: 'Arrea Eventos | Un solo punto, todo tu evento',
    description: 'Ideas que se organizan. Eventos que dejan huella.',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1732,
        height: 909,
        alt: 'Arrea Eventos — Ideas que se organizan. Eventos que dejan huella.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrea Eventos | Un solo punto, todo tu evento',
    description: 'Ideas que se organizan. Eventos que dejan huella.',
    images: [`${basePath}/og.png`],
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
