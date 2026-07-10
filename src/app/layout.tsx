import type { Metadata } from 'next';
import { DM_Serif_Display, Nunito_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Chanaya W',
    template: '%s | Chanaya W',
  },
  description:
    'Software developer, Health Services Management student, and Digital Health Technologist in training building toward Women’s Health Equity Advocacy & Informatics.',
  metadataBase: new URL('https://chanayaw.com'),
  openGraph: {
    title: 'Chanaya W',
    description:
      'Women’s Health Equity Advocacy & Informatics through health data, patient education, care navigation, digital health, and patient-centered tools.',
    url: 'https://chanayaw.com',
    siteName: 'Chanaya W',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Chanaya W, Women’s Health Equity Advocacy & Informatics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanaya W',
    description:
      'Digital Health Technologist in training building toward Women’s Health Equity Advocacy & Informatics.',
    images: ['/og-default.png'],
    creator: '@chanayaw',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${nunitoSans.variable} ${geistMono.variable} bg-background text-foreground overflow-x-hidden overflow-y-scroll antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
