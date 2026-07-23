import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact Chanaya W about opportunities in health information, medical records, healthcare operations, healthcare data support, health technology, informatics, and related work.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact",
    description:
      "Connect with Chanaya W about health information, healthcare data, systems, technology, and related professional opportunities.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
