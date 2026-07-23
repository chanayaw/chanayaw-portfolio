import type { Metadata } from 'next';
import { Geist_Mono, Nunito_Sans, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

import Footer from '../components/nav/Footer';
import Header from '../components/nav/Header';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
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
    default: 'Chanaya W | Health Information, Data & Informatics',
    template: '%s | Chanaya W',
  },
  description:
    'Software developer and Health Services Management student transitioning into health information, healthcare data, and informatics, with a long-term focus on women’s health equity.',
  metadataBase: new URL('https://chanayaw.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chanaya W | Health Information, Data & Informatics',
    description:
      'A technology professional transitioning into health information and informatics, building toward Women’s Health Equity Advocacy & Informatics.',
    url: 'https://chanayaw.com',
    siteName: 'Chanaya W',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanaya W | Health Information, Data & Informatics',
    description:
      'Software developer and Health Services Management student transitioning into health information and informatics.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                ).matches;

                if (
                  storedTheme === 'dark' ||
                  (!storedTheme && prefersDark)
                ) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <body
        className={`${plusJakartaSans.variable} ${nunitoSans.variable} ${geistMono.variable} bg-background text-foreground overflow-x-hidden overflow-y-scroll antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
