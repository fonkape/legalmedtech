import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Engineering für Healthcare-KI & Arztpraxis | Daniel Kleiboldt",
  description: "Rechtssichere Architektur für KI in der Medizin. Als Legal Engineer & Entwickler helfe ich Praxen & Health-Tech bei EU AI Act, MDR, Haftung und Sovereign AI. Compliance Quickcheck für Doctolib & CGM.",
  metadataBase: new URL("https://kleiboldt.de"),
  keywords: [
    // Primäre Keywords
    "KI in Arztpraxis",
    "Legal Engineering Medizin",
    "EU AI Act Arztpraxis",
    "KI Compliance Healthcare",
    "Datensouveränität KI",

    // Sekundäre Keywords
    "Künstliche Intelligenz Praxis",
    "DSGVO KI Medizin",
    "MDR Compliance AI",
    "Sovereign AI Healthcare",
    "Haftung KI Arzt",
    "Privacy by Design Praxis",
    "Human Oversight KI",

    // Long-Tail & Spezifisch
    "Rechtssichere KI Integration in Arztpraxen",
    "EU AI Act Audit für Medizinische Versorgungszentren",
    "Vermeidung von Haftung durch KI in Praxen",
    "Compliance Quickcheck für Doctolib und CGM",
    "Sovereign AI Implementierung für Premium Praxen",
    "KI Risiken in Arztbriefen vermeiden",
    "DSGVO konforme KI Architektur Medizin",
    "Legal Engineering für Health Tech Startups",
    "AI Act Konformität Verträge prüfen",

    // Personal Brand
    "Daniel Kleiboldt",
    "Legal Engineer"
  ],
  authors: [{ name: "Daniel Kleiboldt" }],
  creator: "Daniel Kleiboldt",
  openGraph: {
    title: "Legal Engineering für Healthcare-KI & Arztpraxis | Daniel Kleiboldt",
    description: "Rechtssichere Architektur für KI in der Medizin. Von der Idee bis zur MD-Zertifizierung. EU AI Act & DSGVO-konform.",
    url: "https://kleiboldt.de",
    siteName: "Daniel Kleiboldt - Legal Engineering",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Engineering für Healthcare-KI & Arztpraxis | Daniel Kleiboldt",
    description: "Rechtssichere Architektur für KI in der Medizin. Sovereign AI & Governance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
