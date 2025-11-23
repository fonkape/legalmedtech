# File: package.json
```typescript
{
  "name": "temp-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.554.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

# File: src/app/page.tsx
```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractivePraxis } from "@/components/InteractivePraxis";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionOverview } from "@/components/SolutionOverview";
import { UseCases } from "@/components/UseCases";
import { LegalAssurance } from "@/components/LegalAssurance";
import { TrustAbout } from "@/components/TrustAbout";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-text-primary">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <InteractivePraxis />
      <SolutionOverview />
      <UseCases />
      <LegalAssurance />
      <TrustAbout />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
```

# File: src/app/layout.tsx
```typescript
import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Engineering für Arztpraxen | Daniel Kleiboldt",
  description: "Mehr Zeit für Patienten: KI-Empfang, automatische Arztbriefe, Medikationsmanagement – rechtssicher durch Legal Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
```

# File: src/app/globals.css
```typescript
@import "tailwindcss";

@theme {
  --color-primary: #B85450;
  --color-primary-hover: #A0685A;
  --color-background: #FAF8F5;
  --color-sand: #E8DDD3;
  --color-text-primary: #2C2C2C;
  --color-accent-green: #7A9B76;
  --color-accent-blue: #5B7C99;
  
  --font-serif: var(--font-serif);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);

  --radius-3xl: 1.5rem;
}

:root {
  --background: #FAF8F5;
  --foreground: #2C2C2C;
}

body {
  background-color: var(--background);
  color: var(--foreground);
}
```

# File: src/components/Contact.tsx
```typescript
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Check, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Bereit für den nächsten Schritt?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Buchen Sie jetzt Ihre kostenlose Erstberatung – oder lassen Sie uns unverbindlich über Ihre Praxis sprechen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Ihr Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Dr. Max Mustermann"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="praxis@beispiel.de"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Ihre Nachricht</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Worum geht es? Welches Problem möchten Sie lösen?"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="privacy" required className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">
                                        Ich akzeptiere die Datenschutzerklärung
                                    </label>
                                </div>

                                <Button className="w-full group">
                                    Anfrage senden
                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <p className="text-xs text-center text-gray-500">Antwort innerhalb von 24h</p>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Calendly / Direct Booking */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-primary rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Oder direkt Termin buchen</h3>
                            <p className="text-white/90 mb-8 relative z-10">
                                15 Minuten Erstberatung via Zoom – kostenlos & unverbindlich. Finden Sie direkt einen passenden Slot.
                            </p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Video-Call oder Telefon</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Keine Vorbereitung nötig</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white/20 rounded-full">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span>Unverbindlich & kostenfrei</span>
                                </div>
                            </div>

                            <Button variant="secondary" size="lg" className="w-full relative z-10 bg-white text-primary hover:bg-gray-100">
                                <Calendar className="mr-2 h-5 w-5" />
                                Termin wählen
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/FAQ.tsx
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Was kostet eine Erstberatung?",
        answer: "Die ersten 15 Minuten sind kostenlos. Danach ab €150/Stunde oder Festpreis je nach Projekt. Ein Feasibility Check (48h) kostet €2.000-5.000."
    },
    {
        question: "Wie lange dauert die Implementierung?",
        answer: "AI-Empfang: 4-8 Wochen. Dokumentations-KI: 6-12 Wochen. Medikationsmanagement: 8-16 Wochen. Supply Chain: 12-24 Wochen. Abhängig von PVS-Integration."
    },
    {
        question: "Welche Praxisverwaltungssysteme unterstützen Sie?",
        answer: "CGM Albis, Medatixx x.concept, QUINCY, TurboMed, PraxisWinners. Falls Ihr PVS nicht dabei ist: Individuelle Integration möglich (API oder HL7v2/FHIR)."
    },
    {
        question: "Ist meine Praxis zu klein für KI?",
        answer: "Nein. Ab 2 Ärzten + 2 MFA lohnt sich KI bereits. Soloselbstständige: Je nach Spezialisierung (z.B. Radiologie mit hohem Dokumentationsaufwand). Ich berate ehrlich: Wenn ROI nicht gegeben, sage ich das."
    },
    {
        question: "Wer haftet, wenn die KI einen Fehler macht?",
        answer: "Sie behalten IMMER die letzte Kontrolle (Plausibilitätsprüfung). KI schlägt vor, Sie entscheiden. Haftung ist vertraglich geregelt: Ich (Hersteller) hafte für Software-Bugs, Sie (Arzt) für medizinische Entscheidungen."
    },
    {
        question: "Wie ist der Datenschutz gewährleistet?",
        answer: "EU-Cloud-Hosting (Azure Deutschland oder AWS Frankfurt), Pseudonymisierung, Ende-zu-Ende-Verschlüsselung (AES-256), AVV mit allen Anbietern, DSFA durchgeführt, Audit-Logs unveränderbar."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Häufige Fragen
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-background hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-lg text-text-primary">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-gray-400 transition-transform duration-300",
                                        openIndex === index && "rotate-180 text-primary"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/Footer.tsx
```typescript
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-primary mb-2">Daniel Kleiboldt</h4>
                        <p className="text-sm text-gray-500">Legal Engineering für die Gesundheitsbranche</p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-600">
                        <Link href="#" className="hover:text-primary transition-colors">Impressum</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Datenschutz</Link>
                        <Link href="#" className="hover:text-primary transition-colors">AGB</Link>
                    </div>

                    <div className="text-sm text-gray-400">
                        © 2025 Daniel Kleiboldt
                    </div>
                </div>
            </div>
        </footer>
    );
}
```

# File: src/components/Hero.tsx
```typescript
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
    return (

        <section className="relative bg-background min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
            <div className="container max-w-6xl mx-auto text-center">

                {/* Badge */}
                <div className="mb-12 animate-fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-[0.15em] text-primary uppercase shadow-sm">
                        Legal Engineering für Arztpraxen
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tight text-text-primary mb-12 leading-[1.1]">
                    Mehr Zeit für <br className="hidden md:block" />
                    <span className="italic text-primary">Patienten.</span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16">
                    Sie verbringen 3 Stunden täglich mit Arztbriefen, Telefon und Papierkram statt mit Ihren Patienten?
                    KI kann das ändern – rechtssicher und DSGVO-konform. Ich zeige Ihnen wie.
                </p>

                {/* CTA */}
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105">
                        Kostenlose Erstberatung
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/InteractivePraxis.tsx
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Pill, Package, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for Technical Drawing View
const hotspots = [
    {
        id: "reception",
        label: "AI-Empfang",
        icon: Phone,
        position: { top: "55%", left: "25%" }, // Reception Desk
        modal: {
            title: "Nie wieder Warteschleife",
            problem: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten hängen 15 Minuten in der Warteschleife.",
            solution: "Ein KI-Assistent beantwortet 60-70% aller Anrufe sofort: Terminbuchung, Rezeptanforderungen, Krankmeldungen.",
            roi: "4h/Tag MFA-Entlastung = €17.000/Jahr gespart",
            legal: "DSGVO Art. 9-konform durch Pseudonymisierung und EU-Cloud-Hosting."
        }
    },
    {
        id: "waiting",
        label: "Digitale Anmeldung",
        icon: Smartphone,
        position: { top: "70%", left: "45%" }, // Waiting Area
        modal: {
            title: "Selbst-Check-In am Tablet",
            problem: "Patienten stehen Schlange am Empfang. Versichertenkarte einstecken dauert. Stammdaten-Änderungen manuell.",
            solution: "Patienten scannen Karte am Tablet, bestätigen Stammdaten. KI prüft Vollständigkeit, erstellt ePA-Einträge.",
            roi: "10 Min./Patient gespart bei 40 Patienten/Tag = 6,6h/Tag",
            legal: "ePA-Befüllung ab 1.1.2026 verpflichtend (§346 SGB V)."
        }
    },
    {
        id: "office",
        label: "DSGVO-Compliance",
        icon: Shield,
        position: { top: "30%", left: "15%" }, // Back Office
        modal: {
            title: "Rechtssicherheit by Design",
            problem: "Sie wollen ChatGPT nutzen, aber Datenschutzbeauftragte warnt vor US Cloud Act.",
            solution: "Alle KI-Lösungen sind DSGVO Art. 9-konform: EU-Cloud, Pseudonymisierung, AVV, Audit-Logs.",
            roi: "Bußgeldrisiko bis €20 Mio. vermieden",
            legal: "Legal Engineering: Recht ist TEIL der Architektur."
        }
    },
    {
        id: "treatment",
        label: "Ambient AI-Dokumentation",
        icon: Mic,
        position: { top: "40%", left: "60%" }, // Treatment Room
        modal: {
            title: "Sprechen statt Tippen",
            problem: "Sie schreiben bis Mitternacht Arztbriefe. 30 Minuten pro Brief. 3 Stunden täglich reine Dokumentation.",
            solution: "KI transkribiert Gespräch in Echtzeit. Strukturierter Arztbrief (Anamnese, Befund, Diagnose) fertig in 90 Sekunden.",
            roi: "2h/Tag gespart = €50.000 Umsatzpotenzial",
            legal: "MDR-konform als Dokumentations-Tool (kein Medizinprodukt)."
        }
    },
    {
        id: "lab",
        label: "Supply Chain",
        icon: Package,
        position: { top: "25%", left: "80%" }, // Lab
        modal: {
            title: "Nie wieder leere Regale",
            problem: "Impfstoffe nicht vorrätig = Termin verloren. MFA verbringt 3h/Woche mit Bestellungen.",
            solution: "KI überwacht Lagerbestände, prognostiziert Bedarf, bestellt automatisch. Blockchain-Transparenz.",
            roi: "3h/Woche gespart + keine verpassten Umsätze",
            legal: "EU-Falsified Medicines Directive konform."
        }
    }
];

export function InteractivePraxis() {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

    const activeData = hotspots.find(h => h.id === activeHotspot);

    return (
        <section className="py-32 bg-[#FDFBF7] overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
                        Mein Ansatz: Legal Engineering
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Eine moderne Praxis ist ein komplexes System. Klicken Sie auf die Bereiche, um zu sehen, wie wir Technik und Recht verbinden.
                    </p>
                </div>

                {/* Map Container - RELATIVE positioning is crucial here */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-white rounded-sm shadow-2xl overflow-hidden border-8 border-white ring-1 ring-gray-200">

                    {/* Technical Drawing SVG */}
                    <div className="absolute inset-0">
                        <svg viewBox="0 0 1000 600" className="w-full h-full">
                            <defs>
                                {/* Millimeter Paper Pattern */}
                                <pattern id="millimeter" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
                                    <path d="M 10 0 L 10 20 M 0 10 L 20 10" fill="none" stroke="#F3F4F6" strokeWidth="0.5" />
                                </pattern>
                            </defs>

                            {/* Background */}
                            <rect width="100%" height="100%" fill="#FFFFFF" />
                            <rect width="100%" height="100%" fill="url(#millimeter)" />

                            {/* ARCHITECTURAL DRAWING */}
                            <g stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="square">

                                {/* Outer Walls */}
                                <path d="M 100 100 L 900 100 L 900 500 L 100 500 Z" strokeWidth="4" />

                                {/* Internal Walls */}
                                {/* Reception Area (Bottom Left) */}
                                <path d="M 100 300 L 350 300" />
                                <path d="M 350 300 L 350 500" />

                                {/* Waiting Area (Bottom Center) */}
                                <path d="M 350 300 L 600 300" />
                                <path d="M 600 300 L 600 500" />

                                {/* Corridor (Center Horizontal) */}
                                <path d="M 100 200 L 900 200" strokeDasharray="5,5" strokeWidth="1" opacity="0.5" />

                                {/* Treatment Rooms (Top Center) */}
                                <path d="M 400 100 L 400 300" />
                                <path d="M 650 100 L 650 300" />

                                {/* Lab/Office (Top Right) */}
                                <path d="M 750 100 L 750 250 L 900 250" />

                                {/* DOORS (White gaps + Arcs) */}
                                {/* Reception Door */}
                                <path d="M 350 400 L 350 450" stroke="white" strokeWidth="6" />
                                <path d="M 350 400 A 50 50 0 0 1 400 450" strokeWidth="1" strokeDasharray="2,2" />

                                {/* Treatment Door */}
                                <path d="M 500 300 L 550 300" stroke="white" strokeWidth="6" />
                                <path d="M 500 300 A 50 50 0 0 0 550 250" strokeWidth="1" strokeDasharray="2,2" />
                            </g>

                            {/* FURNITURE (Simplified Technical Style) */}
                            <g stroke="#9CA3AF" strokeWidth="1" fill="none">
                                {/* Reception Desk (L-Shape) */}
                                <path d="M 200 350 L 300 350 L 300 450" />
                                <rect x="220" y="370" width="20" height="20" fill="#E5E7EB" stroke="none" /> {/* Chair */}

                                {/* Waiting Area Chairs */}
                                <circle cx="400" cy="400" r="10" />
                                <circle cx="450" cy="400" r="10" />
                                <circle cx="500" cy="400" r="10" />
                                <rect x="380" y="450" width="140" height="30" rx="5" /> {/* Bench */}

                                {/* Treatment Table */}
                                <rect x="450" y="150" width="100" height="40" rx="2" />
                                <circle cx="430" cy="170" r="8" /> {/* Stool */}

                                {/* Lab Bench */}
                                <rect x="800" y="120" width="80" height="100" />
                            </g>

                            {/* LABELS */}
                            <g fill="#9CA3AF" fontFamily="monospace" fontSize="12" fontWeight="bold" stroke="none">
                                <text x="120" y="480">EMPFANG</text>
                                <text x="420" y="480">WARTEZIMMER</text>
                                <text x="480" y="130">BEHANDLUNG</text>
                                <text x="820" y="140">LABOR</text>
                                <text x="120" y="130">BÜRO</text>
                            </g>
                        </svg>
                    </div>

                    {/* Hotspots Layer - ABSOLUTE within RELATIVE container */}
                    <div className="absolute inset-0 pointer-events-none">
                        {hotspots.map((hotspot) => (
                            <motion.button
                                key={hotspot.id}
                                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 pointer-events-auto"
                                style={{ top: hotspot.position.top, left: hotspot.position.left }}
                                onClick={() => setActiveHotspot(hotspot.id)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                                    <div className="relative bg-white p-2 rounded-full shadow-md border border-gray-200 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <hotspot.icon className="h-5 w-5" />
                                    </div>
                                    {/* Label Tooltip */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {hotspot.label}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Modal Overlay */}
                    <AnimatePresence>
                        {activeHotspot && activeData && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
                                onClick={() => setActiveHotspot(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 10 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white rounded-xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden"
                                >
                                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                                <activeData.icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg font-serif font-bold text-gray-900">{activeData.modal.title}</h3>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => setActiveHotspot(null)} className="h-8 w-8 p-0 rounded-full hover:bg-gray-100">
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Problem</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{activeData.modal.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Lösung</h4>
                                            <p className="text-sm text-gray-900 font-medium leading-relaxed">{activeData.modal.solution}</p>
                                        </div>
                                        <div className="pt-4 border-t border-gray-50 flex gap-4">
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase">ROI</span>
                                                <span className="text-xs font-bold text-green-600">{activeData.modal.roi}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/LegalAssurance.tsx
```typescript
import { AlertTriangle, ShieldCheck, Scale, FileCheck, Lock, Gavel } from "lucide-react";

export function LegalAssurance() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Warum Sie einen Legal Engineer brauchen
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        KI ohne rechtliche Absicherung ist ein Bußgeld-Risiko.
                        KI mit Legal Engineering ist ein Wettbewerbsvorteil.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Risks Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-red-600 flex items-center gap-3 mb-8">
                            <AlertTriangle className="h-8 w-8" />
                            Die Risiken
                        </h3>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <Gavel className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">DSGVO-Bußgelder bis €20 Mio.</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        Gesundheitsdaten (DSGVO Art. 9) sind besonders geschützt. US-Cloud = Cloud Act = Verstoß.
                                        Ohne AVV, DSFA, Rechtsgrundlage: Bußgeld + Datenschutzbehörde stoppt Betrieb.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <AlertTriangle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Illegales Medizinprodukt</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        KI mit diagnostischer Funktion = Medizinprodukt (MDR Klasse IIa/IIb).
                                        Ohne CE-Kennzeichnung: Strafrecht + Abrechnungsausschluss §372 SGB V.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-red-600">
                                    <Scale className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Haftung bei KI-Fehler</h4>
                                    <p className="text-red-800/80 text-sm leading-relaxed">
                                        LG Kiel (Nov. 2024): Wer KI einsetzt, haftet für Ergebnisse.
                                        Fehler im AI-Arztbrief = Behandlungsfehler = Schadensersatz + Strafrecht.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-bold text-accent-green flex items-center gap-3 mb-8">
                            <ShieldCheck className="h-8 w-8" />
                            Unsere Lösung
                        </h3>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <FileCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Legal Engineering: Recht als Code</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Wir bauen DSGVO-Konformität direkt in die Software-Architektur ein.
                                        Pseudonymisierung, EU-Cloud, AVV, DSFA – alles von Tag 1. Kein nachträgliches &apos;Flicken&apos;.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">MDR/AI Act Dual-Compliance</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Wir definieren Zweckbestimmung so, dass Ihr Tool KEIN Medizinprodukt ist (wo möglich).
                                        Oder bereiten MDR-Konformität vor. Ab 2026: AI Act parallel erfüllt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-accent-green">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Haftungsverträge & Versicherung</h4>
                                    <p className="text-green-800/80 text-sm leading-relaxed">
                                        Ich regle vertraglich: Wer haftet wofür. Prüfe Ihre Berufshaftpflicht.
                                        Erstellen Patientenaufklärungsbögen. Human-Oversight-Workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-serif italic text-gray-700">
                        &quot;Technologie ohne Recht ist gefährlich. Recht ohne Technologie-Verständnis ist nutzlos. Legal Engineering verbindet beides.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/Navbar.tsx
```typescript
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
            <nav className="flex items-center justify-between rounded-full border border-gray-200 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 w-full max-w-[95%]">
                {/* Left: Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="font-mono text-xl font-bold text-primary tracking-tighter">
                        {"{ dk }"}
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="flex flex-col justify-center">
                        <span className="font-serif text-sm font-bold text-gray-900 leading-none mb-0.5">
                            Daniel Kleiboldt
                        </span>
                        <span className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-[0.15em] leading-none">
                            BÜRO FÜR LEGAL ENGINEERING
                        </span>
                    </div>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Lösung
                    </Link>
                    <Link href="#use-cases" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Profil
                    </Link>
                    <Link href="#insights" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Insights
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Kontakt
                    </Link>
                </div>
            </nav>
        </div>
    );
}
```

# File: src/components/ProblemStatement.tsx
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Phone, FileText, ShieldAlert, ArrowDown } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Kennen Sie das?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Der tägliche Spagat zwischen Patientenversorgung und Bürokratie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">Warteschleife statt Sprechstunde</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten warten 15 Minuten in der Warteschleife.
                                50% aller Praxen finden keine neuen Mitarbeiter.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <FileText className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">Dokumentations-Hölle</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Sie schreiben bis Mitternacht Arztbriefe. 3 Stunden täglich verschwinden in Bürokratie statt bei Patienten.
                                Burnout droht bei 59% aller Ärzte.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="border-none shadow-lg bg-background/50 hover:bg-white transition-colors duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-primary">
                                <ShieldAlert className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl mb-2">DSGVO-Unsicherheit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                ChatGPT für Patientendaten? Ihre Datenschutzbeauftragte droht mit Kündigung.
                                Cloud-Lösungen aus den USA = Bußgeldrisiko. Aber wie geht es rechtssicher?
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl font-medium text-gray-800 mb-8">
                        Diese Probleme kosten Sie nicht nur Zeit – sondern auch Gesundheit, Patientenzufriedenheit und Umsatz.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-primary font-serif italic text-lg">
                            Aber es gibt eine Lösung. Und sie ist näher, als Sie denken.
                        </p>
                        <Button size="lg" className="group">
                            Entdecken Sie Ihre Praxis der Zukunft
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/SolutionOverview.tsx
```typescript
import { Code, CheckSquare, Settings } from "lucide-react";

export function SolutionOverview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Unser Ansatz: Legal Engineering
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Technologie und Recht aus einer Hand – für rechtssichere KI in Ihrer Praxis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {/* Pillar 1 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">01</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <Code className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Compliance by Design</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ich baue DSGVO, MDR und AI Act direkt in die Systemarchitektur ein – nicht als nachträglichen Zusatz.
                                Das Recht ist Teil des Codes.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">02</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <CheckSquare className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Feasibility Check</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bevor Sie investieren: Ich prüfe Ihre KI-Idee auf rechtliche Machbarkeit, technische Umsetzbarkeit und ROI.
                                Go/No-Go in 48 Stunden.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="relative">
                        <div className="text-6xl font-serif font-bold text-primary/10 absolute -top-10 -left-4 z-0">03</div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary border border-sand">
                                <Settings className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Implementierung & Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ich liefere funktionierende Prototypen, schule Ihr Team und betreue Sie langfristig.
                                Keine PDF-Gutachten, sondern echte Systeme.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-sand/30 rounded-3xl p-8 md:p-12 text-center relative">
                    <div className="text-primary text-6xl font-serif absolute top-4 left-8 opacity-20">&quot;</div>
                    <blockquote className="text-xl md:text-2xl font-serif text-text-primary mb-6 relative z-10">
                        Legal Engineering bedeutet: Ihre Innovationen werden nicht von Juristen gebremst,
                        sondern von Anfang an rechtssicher gebaut.
                    </blockquote>
                    <cite className="not-italic font-medium text-gray-600 block">
                        – Daniel Kleiboldt, Legal Engineer
                    </cite>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/TrustAbout.tsx
```typescript
import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Über mich
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                            Kein Anwalt. Kein reiner Technologe. <br />
                            <span className="text-primary">Der Übersetzer.</span>
                        </h3>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Ich bin Daniel Kleiboldt, 41, Diplom-Jurist mit 10 Jahren Erfahrung in Corporate Law –
                                und aktuell in der Ausbildung zum AI Engineer.
                            </p>
                            <p>
                                Ich habe gesehen, wie brillante KI-Projekte scheitern, weil Rechtsabteilungen sie blockieren.
                                Und ich habe gesehen, wie Ärzte sich nicht trauen, KI einzusetzen, weil niemand ihnen sagen kann:
                                &quot;Das ist rechtssicher.&quot;
                            </p>
                            <p className="font-medium text-text-primary">
                                Meine Mission: Die Lücke schließen zwischen dem, was technisch möglich ist, und dem, was rechtlich erlaubt ist.
                            </p>
                        </div>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">Diplom-Jurist, WWU Münster (10 Jahre Corporate Law)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">AI Engineering Bootcamp, Masterschool (Abschluss Juli 2025)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-gray-700">Spezialisierung: DSGVO Art. 9, MDR, AI Act</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl">
                            <img
                                src="/profile.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/UseCases.tsx
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, Pill, Package, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "01",
        title: "Der KI-Empfang, der nie Feierabend macht",
        icon: Phone,
        hook: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. Patienten warten 15 Minuten. 60-70% aller Anrufe sind Routine.",
        detail: {
            problem: "Eine Hausarztpraxis erhält 50-150 Anrufe täglich. Eine MFA-Vollzeitstelle (€35k/Jahr) geht nur für Telefondienst drauf. No-Shows: 5-15% der Termine, weil Patienten in Warteschleife aufgeben.",
            solution: "KI-Assistent mit natürlicher Sprache (Deutsch + Dialekte) beantwortet Routinefragen sofort: Terminbuchung, Rezeptanforderung, Krankmeldung. Notfall-Erkennung leitet sofort weiter.",
            roi: "4h/Tag MFA-Entlastung = €17.600/Jahr gespart. No-Show-Reduktion = €5.000-15.000/Jahr.",
            legal: "DSGVO Art. 9 Rechtsgrundlagen-Mapping. AVV mit EU-Cloud-Anbieter. Keine Gesprächsaufzeichnung ohne Opt-in."
        }
    },
    {
        id: "02",
        title: "Arztbriefe in 90 Sekunden statt 30 Minuten",
        icon: FileText,
        hook: "Sie verbringen 3 Stunden täglich mit Dokumentation. 30 Minuten pro Arztbrief. Das sind 720 Stunden pro Jahr.",
        detail: {
            problem: "52% der Ärzte klagen über zu wenig Patientenzeit. Dokumentation ist Haupttreiber für Burnout. Eine Zahnarztpraxis dokumentiert bis Mitternacht.",
            solution: "Ambient AI transkribiert Ihr Patientengespräch in Echtzeit. Nach Konsultation liegt ein strukturierter Arztbrief vor. Sie prüfen, ergänzen, signieren – fertig in 90 Sekunden.",
            roi: "2h/Tag gespart = 500h/Jahr. Bei €100/h Arzt-Stundensatz = €50.000 Umsatzpotenzial.",
            legal: "On-Premise oder EU-Private-Cloud. Kein Training mit Ihren Daten. MDR-konform als Dokumentations-Tool (kein Medizinprodukt)."
        }
    },
    {
        id: "03",
        title: "Interaktionsprüfung in Sekunden",
        icon: Pill,
        hook: "Patient nimmt 8 Medikamente. Wechselwirkungen manuell prüfen dauert 5 Minuten. Dosierung für Nierenpatienten = Kopfrechnen.",
        detail: {
            problem: "Polypharmazie bei 40% der über-65-Jährigen. Interaktionsprüfung zeitaufwendig. Dosisanpassung bei Niereninsuffizienz fehleranfällig.",
            solution: "KI-basiertes CDSS gleicht Medikationsliste mit Fachinformation ab, prüft Interaktionen und Kontraindikationen, schlägt Dosisanpassungen vor.",
            roi: "5 Min./Patient gespart bei 40 Patienten/Tag = 3,3h/Tag. Haftungsrisiko minimiert.",
            legal: "CDSS als KEIN Medizinprodukt (nur Vorschlag, Sie entscheiden). Plausibilitätsprüfung bleibt bei Ihnen. Haftungsverteilung klar geregelt."
        }
    },
    {
        id: "04",
        title: "Blockchain für Ihre Medikamente",
        icon: Package,
        hook: "Impfstoffe nicht vorrätig = Termin verloren. MFA verbringt 3h/Woche mit Bestellungen. Lieferengpässe = manuelle Telefonate.",
        detail: {
            problem: "Lagerbestand manuell prüfen = fehleranfällig. Mindesthaltbarkeit übersehen = Verschwendung. Lieferengpässe = Versorgungslücken.",
            solution: "KI-Prognose für Bedarf. Automatische Bestellung. Blockchain-Tracking für transparente Lieferkette und Fälschungsschutz.",
            roi: "3h/Woche MFA-Zeit gespart = €6.000/Jahr. Keine verpassten Umsätze durch Engpässe.",
            legal: "EU Falsified Medicines Directive konform. Blockchain DSGVO-konform. AVV mit allen Teilnehmern."
        }
    }
];

export function UseCases() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Konkrete Lösungen für Ihre Praxis
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className={cn(
                                "bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-300",
                                expandedId === useCase.id ? "ring-2 ring-primary ring-opacity-50" : "hover:shadow-md"
                            )}
                        >
                            <div
                                className="cursor-pointer"
                                onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary font-serif font-bold text-xl">#{useCase.id}</div>
                                        <div className="p-3 bg-sand/30 rounded-xl text-primary">
                                            <useCase.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={cn(
                                            "h-6 w-6 text-gray-400 transition-transform duration-300",
                                            expandedId === useCase.id && "rotate-180"
                                        )}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-text-primary">{useCase.title}</h3>
                                <p className="text-gray-600 mb-4">{useCase.hook}</p>
                            </div>

                            <AnimatePresence>
                                {expandedId === useCase.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-gray-100 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-primary mb-2">Problem</h4>
                                                <p className="text-sm text-gray-600">{useCase.detail.problem}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary mb-2">Lösung</h4>
                                                <p className="text-sm text-gray-600">{useCase.detail.solution}</p>
                                            </div>
                                            <div className="bg-accent-green/10 p-4 rounded-xl border border-accent-green/20">
                                                <h4 className="font-bold text-accent-green mb-1">ROI</h4>
                                                <p className="text-sm text-gray-700 font-medium">{useCase.detail.roi}</p>
                                            </div>
                                            <div className="bg-sand/30 p-4 rounded-xl border border-sand">
                                                <h4 className="font-bold text-primary mb-1">Rechtliche Absicherung</h4>
                                                <p className="text-sm text-gray-700">{useCase.detail.legal}</p>
                                            </div>
                                            <Button variant="ghost" className="w-full justify-between group text-primary hover:text-primary-hover hover:bg-primary/5">
                                                Beratung anfragen
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

# File: src/components/ui/Badge.tsx
```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "secondary" | "destructive";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-primary text-white hover:bg-primary/80":
                        variant === "default",
                    "border-transparent bg-sand text-text-primary hover:bg-sand/80":
                        variant === "secondary",
                    "text-text-primary border-gray-200": variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
```

# File: src/components/ui/Button.tsx
```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    {
                        "bg-primary text-white hover:bg-primary-hover shadow-sm":
                            variant === "primary",
                        "bg-sand text-text-primary hover:bg-opacity-80":
                            variant === "secondary",
                        "bg-transparent hover:bg-sand/20 text-text-primary":
                            variant === "ghost",
                        "border border-primary text-primary hover:bg-primary/5":
                            variant === "outline",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
```

# File: src/components/ui/Card.tsx
```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-3xl bg-white text-text-primary shadow-sm border border-gray-100",
            className
        )}
        {...props}
    />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-serif font-semibold leading-none tracking-tight text-primary",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
```

