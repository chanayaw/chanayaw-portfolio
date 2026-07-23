import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Footer from "../components/nav/Footer";
import Header from "../components/nav/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chanayaw.com"),

  title: {
    default: "Chanaya W. | Software, Health Information & Informatics",
    template: "%s | Chanaya W.",
  },

  description:
    "Software developer and Health Services Management student transitioning into health information, healthcare data, and informatics, with a long-term focus on Women's Health Equity Advocacy & Informatics.",

  applicationName: "Chanaya W.",

  authors: [
    {
      name: "Chanaya W.",
      url: "https://www.chanayaw.com",
    },
  ],

  creator: "Chanaya W.",
  publisher: "Chanaya W.",

  keywords: [
    "Chanaya W.",
    "health information",
    "medical records",
    "healthcare data",
    "health informatics",
    "health services management",
    "software developer",
    "structured data",
    "health technology",
    "digital health",
    "women's health equity",
    "healthcare operations",
  ],

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chanaya W.",
    title: "Chanaya W. | Software, Health Information & Informatics",
    description:
      "Software developer and Health Services Management student bringing a systems-and-data foundation into healthcare.",
    url: "https://www.chanayaw.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chanaya W. | Software, Health Information & Informatics",
    description:
      "Software developer and Health Services Management student bringing a systems-and-data foundation into healthcare.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
