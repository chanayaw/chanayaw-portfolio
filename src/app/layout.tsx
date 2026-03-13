import type { Metadata } from 'next';
import { JetBrains_Mono, Lexend } from 'next/font/google';
import './globals.css';
import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
  weight: 'variable',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'Chanaya W Portfolio',
    template: '%s | Chanaya W',
  },
  description:
    "Software Engineer building research driven systems for women's health equity. Engineering, lab notes, and research translation.",
  metadataBase: new URL('https://chanayaw.com'),
  openGraph: {
    title: 'Chanaya W',
    description: "Software Engineer building research driven systems for women's health equity.",
    url: 'https://chanayaw.com',
    siteName: 'Chanaya W Portfolio',
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
        className={`${lexend.variable} ${jetbrainsMono.variable} bg-background text-foreground overflow-x-hidden overflow-y-scroll antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
