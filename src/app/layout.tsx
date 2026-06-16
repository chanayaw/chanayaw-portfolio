import type { Metadata } from 'next';
import { Sora, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';

const sora = Sora({
  variable: '--font-sora',

  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',

  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',

  subsets: ['latin'],

  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Chanaya W Portfolio',
    template: '%s | Chanaya W',
  },
  description:
    "Software developer and Health Services Management student building toward biomedical informatics, digital health product development, and women's health equity.",
  metadataBase: new URL('https://chanayaw.com'),
  openGraph: {
    title: 'Chanaya W',
    description: "Software Engineer building research driven systems for women's health equity.",
    url: 'https://chanayaw.com',
    siteName: 'Chanaya W | Software Developer + Digital Health Product Builder',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Chanaya W',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanaya W',
    description:
      "Women's Health Data and Equity Technologist | Software Engineer | Research Translator",
    images: ['/og-default.png'],
    creator: '@chanayaw',
  },
  icons: {
    icon: '/icon.png',
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
        className={`${sora.variable} ${manrope.variable} ${ibmPlexMono.variable} bg-background text-foreground overflow-x-hidden overflow-y-scroll antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
