import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Engineering für Healthcare-KI-Compliance | Daniel Kleiboldt",
  description: "KI in der Klinik ist kein IT-Projekt, sondern eine Haftungsfrage. Ich baue die architektonischen Leitplanken für rechtssichere Healthcare-KI. Sovereign AI & Governance.",
  metadataBase: new URL("https://kleiboldt.de"),
  keywords: ["Legal Engineering", "Healthcare AI", "KI Compliance", "MDR", "IVDR", "AI Act", "Medizinprodukte", "Software als Medizinprodukt", "SaMD", "Daniel Kleiboldt"],
  authors: [{ name: "Daniel Kleiboldt" }],
  creator: "Daniel Kleiboldt",
  openGraph: {
    title: "Legal Engineering für Healthcare-KI-Compliance | Daniel Kleiboldt",
    description: "Rechtssichere Architektur für KI in der Medizin. Von der Idee bis zur MD-Zertifizierung.",
    url: "https://kleiboldt.de",
    siteName: "Daniel Kleiboldt - Legal Engineering",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Engineering für Healthcare-KI-Compliance | Daniel Kleiboldt",
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
