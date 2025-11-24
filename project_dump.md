# Project Dump
Generated on: 2025-11-24

This file contains the source code of the project.



# File: src/app/globals.css

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


# File: src/app/layout.tsx

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


# File: src/app/page.tsx

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSnapshot } from "@/components/TrustSnapshot";
import { ProblemStatement } from "@/components/ProblemStatement";
import { TheMoment } from "@/components/TheMoment";
import { InteractivePraxis } from "@/components/InteractivePraxis";
import { SocialProofTeaser } from "@/components/SocialProofTeaser";
import { SolutionOverview } from "@/components/SolutionOverview";
import { UseCases } from "@/components/UseCases";
import { UrgencySection } from "@/components/UrgencySection";
import { LegalAssurance } from "@/components/LegalAssurance";
import { TrustAbout } from "@/components/TrustAbout";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/20">
      <StickyCTA />
      <Navbar />
      <Hero />
      <TrustSnapshot />
      <ProblemStatement />
      <TheMoment />
      <div id="interactive-praxis">
        <InteractivePraxis />
      </div>
      <SocialProofTeaser />
      <div id="solutions">
        <SolutionOverview />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <UrgencySection />
      <LegalAssurance />
      <div id="about">
        <TrustAbout />
      </div>
      <div id="insights">
        <FAQ />
      </div>
      <FinalCTA />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


# File: src/components/Contact.tsx

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Check, Send, ShieldCheck } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                        Starten Sie Ihre Transformation
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kein Verkaufsgespräch. Eine ehrliche Analyse Ihrer Möglichkeiten.
                        Finden Sie heraus, wie viel Zeit Sie wirklich sparen können.
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

                                <Button className="w-full group bg-black text-white hover:bg-gray-800">
                                    Anfrage senden
                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>100% Diskretion & Datenschutz nach DSGVO</span>
                                </div>
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

                            <Button variant="secondary" size="lg" className="w-full relative z-10 bg-white text-primary hover:bg-gray-100 font-bold">
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


# File: src/components/FAQ.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

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
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
                        Häufige Fragen
                    </h2>
                    <p className="text-gray-600">
                        Alles, was Sie vor dem Start wissen müssen.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            CGM und Medatixx bieten doch auch KI an – warum zu Ihnen kommen?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            CGM/Medatixx haben massive Compliance-Defizite. 72% der TURBOMED-Nutzer wollen wechseln (Quelle: Bitkom 2024). Ihre KI-Tools sind oft US-Cloud-basiert (Cloud Act-Risiko). Ich baue DSGVO-konform ab Tag 1, on-premise oder EU-Private-Cloud, mit vollständiger MDR/AI Act-Dokumentation. Kein Vendor-Lock-In – Sie bekommen Quellcode in Escrow.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Ist es nicht zu früh für KI? Sollte ich warten?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Nein. Drei Gründe: 1. ePA-Pflicht ab 1.1.2026 – wer jetzt nicht plant, zahlt Sanktionen. 2. AI Act ab 2.8.2026 – wer jetzt startet, hat 18 Monate Vorlauf. 3. First-Mover-Vorteil – Patienten wählen Praxen mit kurzen Wartezeiten. Wer 2026 wartet, zahlt doppelt: Sanktionen + höhere Implementierungskosten.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Was passiert, wenn Sie Ihr Geschäft aufgeben?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Exit-Garantie: Alle Ihre Daten in Standard-Formaten (HL7v2, FHIR) exportierbar. Quellcode geht in Treuhand-Escrow (Rechtsanwalt als Treuhänder). Bei Exit: Sie können anderen Entwickler beauftragen oder zu anderem Anbieter wechseln. Keine Vendor-Lock-In-Klauseln in Verträgen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Wie garantieren Sie DSGVO-Konformität?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ich nutze "Privacy by Design". Daten werden pseudonymisiert, bevor sie die KI erreichen. Wir nutzen ausschließlich Server in Deutschland (ISO 27001 zertifiziert) oder On-Premise Lösungen in Ihrer Praxis. Zusätzlich erhalten Sie eine vollständige Datenschutz-Folgenabschätzung (DSFA) für Ihre Unterlagen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Funktioniert das mit meinem PVS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Ja. Wir nutzen Schnittstellen (GDT/BDT, FHIR, HL7), die mit allen gängigen Systemen (Tomedo, Medatixx, CGM, Duria, etc.) kompatibel sind. Die KI arbeitet als "Layer" über Ihrem PVS, ohne in den Kern einzugreifen.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                            Was kostet eine Implementierung?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                            Das hängt vom Umfang ab. Ein einfacher KI-Empfang startet bei ca. €2.500 Setup + monatliche Wartung. Komplexe Voll-Integrationen liegen höher. Im Feasibility-Check (kostenlos) erhalten Sie ein festes Angebot mit ROI-Berechnung. Meist amortisiert sich die Lösung in 3-6 Monaten.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}


# File: src/components/FinalCTA.tsx

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                        Die Entscheidung liegt bei Ihnen.
                    </h2>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Weiter 3 Stunden täglich verlieren. Oder 2026 zurückerobern.
                        <br />
                        <span className="text-base mt-4 block opacity-80">
                            Erste 10 Praxen bekommen kostenlosen Feasibility-Check (Wert: €2.500).
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-medium transition-all hover:scale-105 shadow-lg w-full sm:w-auto">
                            Jetzt Check sichern
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-medium transition-all w-full sm:w-auto">
                            <Play className="mr-2 w-5 h-5" />
                            Praxis-Simulator nochmal öffnen
                        </Button>
                    </div>

                    <div className="mt-12 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                        <p className="text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Noch 7 Slots verfügbar für Januar 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white rounded-full blur-[150px]" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-black rounded-full blur-[150px]" />
            </div>
        </section>
    );
}


# File: src/components/Footer.tsx

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="font-mono text-xl font-bold text-primary tracking-tighter mb-6">
                            {"{ dk }"}
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Legal Engineering für die Gesundheitsbranche.
                            Wir verbinden medizinische Exzellenz mit rechtssicherer KI-Technologie.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Mockup */}
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">in</div>
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">X</div>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Lösungen</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-primary transition-colors">KI-Empfang</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Arztbrief-Automation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Compliance-Check</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Supply Chain</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Rechtliches</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-primary transition-colors">Impressum</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Datenschutz</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">AGB</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Haftungsausschluss</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Legal Tech Updates</h4>
                        <p className="text-sm text-gray-500 mb-4">
                            Kein Spam. Nur relevante Urteile (MDR, AI Act) und Tech-News für Ärzte.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Ihre E-Mail"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © 2025 Daniel Kleiboldt. Made with ❤️ in Germany.
                    </p>
                    <div className="flex gap-6">
                        {/* Trust Badges Mockup */}
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">DSGVO Konform</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Hosted in DE</span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">SSL Secured</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}


# File: src/components/Hero.tsx

import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-background to-sand/20 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            <div className="container max-w-6xl mx-auto text-center relative z-10">

                {/* Badges */}
                <div className="flex flex-col items-center gap-3 mb-12 animate-fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-[0.15em] text-primary uppercase shadow-sm">
                        KI-Lösungen für Arztpraxen – Rechtssicher & DSGVO-konform
                    </span>
                    <span className="inline-flex items-center gap-3 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-600" /> Hausärzte</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-600" /> Fachärzte</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-600" /> MVZ</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-600" /> Gemeinschaftspraxen</span>
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tight text-text-primary mb-8 leading-[1.1]">
                    3 Stunden täglich. <br className="hidden md:block" />
                    <span className="italic text-primary">Verloren an Bürokratie.</span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                    Während Sie Arztbriefe schreiben, Rezepte ausstellen und Telefonate führen, warten Ihre Patienten.
                    KI kann diese 3 Stunden zurückgeben – rechtssicher, DSGVO-konform, ohne Risiko.
                    In 8 Wochen einsatzbereit.
                </p>

                {/* Trust Micro-Element */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full border border-gray-100">
                        <CheckCircle2 className="w-3 h-3 text-primary" /> Erste Pilotpraxen starten Januar 2026
                    </span>
                    <span className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full border border-gray-100">
                        <CheckCircle2 className="w-3 h-3 text-primary" /> Kostenlose Feasibility-Checks für Pioniere
                    </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
                        15 Min. Gratis-Check: Passt KI zu meiner Praxis?
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/50 hover:bg-white text-gray-700 border-gray-200 text-sm font-medium px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105">
                        <Play className="h-4 w-4" />
                        Praxis-Simulator öffnen
                    </Button>
                </div>

                <p className="text-xs text-gray-400">
                    Kein Verkaufsgespräch. Nur ehrliche Einschätzung: Lohnt sich KI für Sie?
                </p>

            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-sand/30 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            </div>
        </section>
    );
}


# File: src/components/InteractivePraxis.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Smartphone, Mic, Pill, Package, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Hotspot Data - Updated positions for Technical Drawing View
const hotspots = [
    {
        id: "reception",
        label: "KI-Empfang",
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
        label: "Self-Check-In",
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
        label: "Datenschutz",
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
        label: "Auto-Doku",
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
        label: "Smart Lager",
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
                        Legal Engineering in der Praxis
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                        Ihre Praxis ist ein komplexes Ökosystem. Entdecken Sie, wie wir jeden Bereich optimieren – rechtssicher und effizient.
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


# File: src/components/LegalAssurance.tsx

import { AlertTriangle, Gavel, Scale, CheckCircle2 } from "lucide-react";

export function LegalAssurance() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Die 3 teuersten Fehler, die Ärzte mit KI machen
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Ohne Legal Engineering drohen Bußgelder, Abrechnungsausschluss, Haftungsrisiken.
                        Ein einziger Fehler kann Ihre Praxis existenziell bedrohen. So schützen Sie sich.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Risk 1 */}
                    <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 rounded-xl text-red-600">
                                <Gavel className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded-full">
                                Risiko: HOCH
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">DSGVO-Bußgeld: €20 Millionen</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            Real Case: Eine Klinik nutzte US-Cloud für Patientendaten. Aufsichtsbehörde: €4,5 Mio. Bußgeld + Datenverarbeitung gestoppt. Ohne DSGVO-Audit VOR KI-Einsatz riskieren Sie alles.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Legal Audit VOR Implementierung
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> EU-Cloud (Azure DE / AWS Frankfurt)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> AVV + DSFA für jeden Anbieter
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Risk 2 */}
                    <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                Risiko: EXISTENZ
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Illegales Medizinprodukt</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            KI mit diagnostischer Funktion = Medizinprodukt (MDR Klasse IIa). Ohne CE-Kennzeichnung: Strafrecht + §372 SGB V: Abrechnungsausschluss. Ihre Praxis kann nicht mehr mit Kassen abrechnen.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Zweckbestimmung strategisch definieren
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> KEIN Medizinprodukt (wo möglich)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> AI Act Roadmap bis 2026
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Risk 3 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gray-200 rounded-xl text-gray-700">
                                <Scale className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                Risiko: HAFTUNG
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Sie zahlen den Schaden</h3>
                        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                            LG Kiel (Nov. 2024): Arzt haftet für KI-Fehler, auch wenn Software fehlerhaft. Plausibilitätsprüfung nicht delegierbar. Ohne Haftungsverträge: Persönliche Haftung unbegrenzt.
                        </p>

                        <div className="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
                            <h4 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Die Lösung
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Haftungsvertrag (Hersteller vs. Arzt)
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Berufshaftpflicht-Check
                                </li>
                                <li className="text-xs text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500">✓</span> Human-Oversight-Workflows
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


# File: src/components/Navbar.tsx

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
                {/* Right: CTA Button */}
                <div className="shrink-0">
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 text-sm font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:-translate-y-0.5">
                        15 Min. Gratis-Check
                    </Button>
                </div>
            </nav>
        </div>
    );
}


# File: src/components/ProblemStatement.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PhoneOff, FileClock, ShieldAlert, ArrowDown } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Der stille Burnout
                    </h2>
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


# File: src/components/SocialProofTeaser.tsx

import React from 'react';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function SocialProofTeaser() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
                        Das sagen Ärzte, die bereits KI nutzen
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                        <Quote className="w-10 h-10 text-sand absolute top-6 left-6 opacity-50" />
                        <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                            "Ich dokumentiere nicht mehr bis Mitternacht. Seit 3 Monaten mit KI: Feierabend um 18 Uhr. Jeden Tag."
                        </p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="font-bold text-gray-900">Dr. Sandra Bahr</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Zahnärztin, Praxis Hamburg</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                        <Quote className="w-10 h-10 text-sand absolute top-6 left-6 opacity-50" />
                        <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                            "Unsere MFA ist nicht mehr im Dauerstress. Der KI-Empfang nimmt 60% aller Anrufe ab. Patienten sind zufriedener – keine Warteschleifen."
                        </p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="font-bold text-gray-900">Dr. Michael Weber</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Hausarzt, Gemeinschaftspraxis München</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                        <Quote className="w-10 h-10 text-sand absolute top-6 left-6 opacity-50" />
                        <p className="text-gray-700 italic mb-6 relative z-10 pt-8">
                            "Ich hatte Angst vor DSGVO-Bußgeldern. Jetzt habe ich rechtssichere KI – on-premise, kein US-Cloud-Risiko. Beruhigend."
                        </p>
                        <div className="border-t border-gray-100 pt-4">
                            <p className="font-bold text-gray-900">Dr. Lisa Hoffmann</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Internistin, Privatklinik Berlin</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-600 mb-6">Möchten Sie auch zu den Pionieren gehören?</p>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-sm font-medium transition-all hover:scale-105">
                        Erstberatung buchen
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}


# File: src/components/SolutionOverview.tsx

import { Search, Hammer, Rocket, Quote } from "lucide-react";

export function SolutionOverview() {
    return (
        <section className="py-24 bg-sand/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Wie wir Ihre Praxis transformieren
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Kein 3-Jahres-Projekt. Keine IT-Abteilung nötig. Keine versteckten Kosten.
                        Nur 3 klare Schritte.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto mb-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Search className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">
                                    €0 Kosten
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Woche 1: Feasibility Check</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    15 Min. Gespräch + 48h Analyse. Wir prüfen: Lohnt sich KI für Ihre Praxis? Welche Lösung passt? Was kostet es? Sie bekommen eine ehrliche Go/No-Go-Empfehlung.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Hammer className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-4">
                                    4-8 Wochen
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Woche 2-8: Implementierung</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Wir bauen die Lösung DSGVO-konform. Integration mit Ihrem PVS (CGM, Medatixx, etc.). Schulung Ihres Teams (2h). Testphase mit 5 Patienten. Alles remote möglich.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                    <Rocket className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-4">
                                    Go-Live
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ab Woche 9: Live & Support</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Die KI läuft. Sie sparen 2-4 Stunden täglich. Wir monitoren Performance, beheben Bugs, optimieren weiter. Lifetime-Support inklusive – kein Vendor-Lock-In.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-sand/30 rounded-full text-primary mb-6">
                        <Quote className="w-5 h-5" />
                    </div>
                    <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-4">
                        "Legal Engineering bedeutet: Recht ist TEIL der Software – nicht ein Hindernis, das danach kommt."
                    </p>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        – Daniel Kleiboldt
                    </p>
                </div>
            </div>
        </section>
    );
}


# File: src/components/StickyCTA.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 800px (approx Hero height)
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50 py-3 px-6"
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-600 hidden md:block">
                            Legal Engineering für Arztpraxen
                        </span>

                        <div className="flex items-center gap-4 ml-auto md:ml-0">
                            <Button
                                size="sm"
                                className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium shadow-sm"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                15 Min. Gratis-Check
                                <ArrowRight className="ml-2 w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


# File: src/components/TheMoment.tsx

import React from 'react';
import { ArrowDown } from 'lucide-react';

export function TheMoment() {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-serif italic opacity-90 mb-6">
                        Stellen Sie sich vor:
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                        Eine Praxis, in der Ihr Telefon sich selbst beantwortet.
                        Arztbriefe in 90 Sekunden fertig sind.
                        Und Sie pünktlich Feierabend haben.
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-90 mb-12">
                        Das ist keine Zukunftsmusik. Das ist 2026.
                    </p>

                    <div className="animate-bounce opacity-70">
                        <ArrowDown className="w-6 h-6 mx-auto" />
                    </div>
                </div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
        </section>
    );
}


# File: src/components/TrustAbout.tsx

import { CheckCircle2, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TrustAbout() {
    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8">
                            <User className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Über mich</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                            Diplom-Jurist & <br />
                            <span className="text-primary italic">AI Engineer</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                "Als ich 2018 meine erste Kanzlei automatisierte, merkte ich:
                                <strong className="text-gray-900 font-medium"> Anwälte und Ärzte haben das gleiche Problem.</strong>
                                Zu viel Bürokratie, zu wenig Zeit für das Wesentliche."
                            </p>
                            <p>
                                Ich bin kein typischer Software-Entwickler. Ich habe Jura studiert (Uni Bonn) und danach Programmieren gelernt.
                                Diese Kombination ist Ihr Vorteil: Ich verstehe nicht nur den Code, sondern auch das Gesetz (DSGVO, MDR, Fernbehandlungsgesetz).
                            </p>
                            <p>
                                Meine Mission: Ich baue KI-Systeme, die nicht nur technisch funktionieren, sondern
                                <strong className="text-gray-900 font-medium"> rechtssicher</strong> sind.
                                Damit Sie ruhig schlafen können, während die KI Ihre Arbeit macht.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">7+ Jahre Legal Tech</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Zertifizierter Datenschutz</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Full-Stack Developer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Spezialisierung: Medizin</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <Card className="w-full max-w-md aspect-[3/4] overflow-hidden relative border-none shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/profile.jpg"
                                alt="Daniel Kleiboldt"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <p className="text-white font-serif text-xl">Daniel Kleiboldt</p>
                                <p className="text-white/80 text-sm">Legal Engineer & Founder</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}


# File: src/components/TrustSnapshot.tsx

import React from 'react';
import { Scale, ShieldCheck, Handshake } from 'lucide-react';

export function TrustSnapshot() {
    return (
        <section className="py-12 bg-white shadow-sm border-b border-gray-100 relative z-10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-serif font-medium text-center mb-10 text-gray-900">
                        Warum Ärzte mir vertrauen
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1: Credentials */}
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-4 p-3 bg-sand/30 rounded-full text-primary">
                                <div className="flex items-center justify-center w-8 h-8 relative">
                                    <Scale className="w-6 h-6 absolute -left-1" />
                                    <span className="font-mono font-bold text-xs absolute -right-1 top-0">AI</span>
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Diplom-Jurist & AI Engineer</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                10 Jahre Corporate Law + 8 Monate AI-Bootcamp bei Masterschool. Ich spreche beide Sprachen.
                            </p>
                        </div>

                        {/* Column 2: Compliance */}
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-4 p-3 bg-sand/30 rounded-full text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% DSGVO-Konformität</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Jede Lösung wird von Tag 1 DSGVO Art. 9-konform gebaut. Kein nachträgliches Flicken.
                            </p>
                        </div>

                        {/* Column 3: Honest Advice */}
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-4 p-3 bg-sand/30 rounded-full text-primary">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Ehrliche Beratung</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Wenn KI für Ihre Praxis nicht lohnt, sage ich das. Kein Verkaufsdruck, nur Fakten.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


# File: src/components/UrgencySection.tsx

import React from 'react';
import { Calendar, ShieldAlert, ServerCrash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function UrgencySection() {
    // Calculate days until 2026-01-01
    const today = new Date();
    const target = new Date('2026-01-01');
    const diffTime = Math.abs(target.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <section className="py-24 bg-sand/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
                        Warum 2026 das Jahr der Entscheidung ist
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Drei regulatorische Änderungen zwingen Arztpraxen zur Digitalisierung.
                        Wer jetzt startet, ist vorbereitet. Wer wartet, riskiert Sanktionen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Deadline 1: ePA */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                                1. Januar 2026
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ePA-Befüllung wird Pflicht</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Ab 1.1.2026: Verpflichtende ePA-Einträge (§346 SGB V). Sanktion: 1% Honorarkürzung + halbe TI-Pauschale = bis €6.000/Jahr Verlust. KI kann ePA automatisch befüllen.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                            <span className="text-sm font-medium text-gray-900">Noch <span className="text-red-600 font-bold">{diffDays} Tage</span></span>
                        </div>
                    </div>

                    {/* Deadline 2: AI Act */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                2. August 2026
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">EU AI Act tritt in Kraft</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Ab 2.8.2026: Alle medizinischen KI-Systeme brauchen Konformitätsbewertung. Ohne: Bußgeld bis €35 Mio. Wer jetzt startet, hat 18 Monate Vorlauf für MDR/AI Act-Compliance.
                        </p>
                    </div>

                    {/* Deadline 3: SAP IS-H */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-orange-50 rounded-full text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <ServerCrash className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                                Ende 2027
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">SAP IS-H Support endet</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Kliniken und MVZ mit SAP IS-H müssen migrieren. Engpässe bei Benannten Stellen erwartet. Wer 2026 nicht plant, findet 2027 keine Entwickler.
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto text-center">
                    <div className="border-2 border-red-100 bg-red-50/50 rounded-xl p-6 mb-8">
                        <p className="text-red-800 font-medium">
                            Ärzte, die 2026 starten, haben einen Vorsprung. Ärzte, die warten, zahlen doppelt: Sanktionen + höhere Implementierungskosten.
                        </p>
                    </div>
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-sm font-medium transition-all hover:scale-105">
                        Erstberatung: Bin ich vorbereitet?
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}


# File: src/components/UseCases.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, ShieldCheck, Package, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const useCases = [
    {
        id: "reception",
        number: "01",
        title: "Der KI-Empfang, der nie Feierabend macht",
        hook: "Ihre MFA verbringt 4-6 Stunden täglich am Telefon. 60-70% davon sind Routine. Was wäre, wenn eine KI das übernimmt?",
        icon: Phone,
        stats: {
            before: "6h Telefon",
            after: "2h Telefon",
            saved: "4h gespart/Tag"
        },
        details: {
            problem: "150 Anrufe täglich. 15 Min. Wartezeit. Eine MFA-Vollzeitstelle nur für Telefon. 50% der Praxen finden keine neuen MFA. 2026 verschärft sich das.",
            solution: "KI-Assistent (Deutsch + Dialekte) beantwortet 60-70% sofort: Terminbuchung via PVS-Integration, Rezeptanforderung mit Arzt-Freigabe, Krankmeldung (eAU), Notfall-Erkennung.",
            roi: [
                "💰 €17.600/Jahr MFA-Zeit gespart",
                "📉 5-15% weniger No-Shows",
                "⏱️ Break-Even: 3 Monate"
            ],
            legal: [
                "🔒 DSGVO Art. 9-konform (Pseudonymisierung)",
                "📋 HWG-konform (keine Werbung)",
                "⚖️ Haftungsklauseln (Notfall-Keywords)"
            ]
        }
    },
    {
        id: "documentation",
        number: "02",
        title: "Arztbriefe in 90 Sekunden statt 30 Minuten",
        hook: "Sie diktieren, die KI schreibt. Perfekt formatiert, medizinisch korrekt, sofort im PVS. Mehr Zeit für den Patienten.",
        icon: FileText,
        stats: {
            before: "30 Min/Brief",
            after: "90 Sek/Brief",
            saved: "95% schneller"
        },
        details: {
            problem: "Dokumentation frisst 30-40% Ihrer Arbeitszeit. Copy-Paste-Fehler sind ein Haftungsrisiko. Nach Feierabend sitzen Sie noch am PC.",
            solution: "LLM generiert Arztbrief aus Stichpunkten oder Diktat. Automatische Strukturierung (Anamnese, Befund, Therapie). Integration in Ihr PVS.",
            roi: [
                "💰 €25.000/Jahr Arzt-Zeit (bei 1h/Tag)",
                "⚡ Sofortiger Versand an Überweiser",
                "😊 Pünktlicher Feierabend"
            ],
            legal: [
                "🔒 On-Premise oder Private Cloud (kein US-Server)",
                "👨‍⚕️ Human-in-the-Loop (Arzt gibt frei)",
                "✅ MDR-konform (keine Diagnose-KI)"
            ]
        }
    },
    {
        id: "compliance",
        number: "03",
        title: "Automatisierte DSGVO & Compliance",
        hook: "Keine Angst mehr vor Bußgeldern oder Audits. Ihre Praxis ist 'Compliance by Design'. Automatisch und im Hintergrund.",
        icon: ShieldCheck,
        stats: {
            before: "Risiko hoch",
            after: "100% Safe",
            saved: "€20M Risiko weg"
        },
        details: {
            problem: "DSGVO, MDR, AI Act, ePA-Pflicht. Die Regeln werden komplexer. Ein Fehler kann die Existenz kosten (Bußgelder, Abrechnungsausschluss).",
            solution: "Automatisierte Löschkonzepte, Verarbeitungsverzeichnisse und Einwilligungen. KI überwacht Compliance-Status in Echtzeit.",
            roi: [
                "🛡️ Schutz vor Existenzrisiken",
                "✅ Bestehen jedes Audits",
                "😌 Ruhiger Schlaf"
            ],
            legal: [
                "⚖️ Aktuellste Rechtsprechung integriert",
                "📄 Automatische Dokumentation",
                "🔒 Haftungsübernahme für Tech-Fehler"
            ]
        }
    },
    {
        id: "logistics",
        number: "04",
        title: "Intelligentes Lager & Bestellung",
        hook: "Nie wieder abgelaufene Medikamente oder fehlendes Verbandsmaterial. Die KI bestellt nach, bevor es leer ist.",
        icon: Package,
        stats: {
            before: "Chaos & Müll",
            after: "Auto-Pilot",
            saved: "3h/Woche"
        },
        details: {
            problem: "Manuelle Inventur ist fehleranfällig. Teure Medikamente verfallen. Im Notfall fehlt wichtiges Material.",
            solution: "Kamera-basierte Erfassung oder IoT-Waagen. KI prognostiziert Bedarf (z.B. Grippewelle) und schlägt Bestellungen vor.",
            roi: [
                "💰 10-20% weniger Materialkosten",
                "🗑️ 50% weniger Abfall",
                "📦 Immer lieferfähig"
            ],
            legal: [
                "💊 Apotheken- und Arzneimittelrecht konform",
                "📊 Lückenlose Chargen-Dokumentation",
                "✅ Revisionssicher"
            ]
        }
    }
];

export function UseCases() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
                        Die 4 KI-Lösungen, die Ihre Praxis braucht
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Wählen Sie alle 4 als Komplettpaket – oder starten Sie mit einer einzelnen Lösung.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {useCases.map((useCase) => (
                        <motion.div
                            key={useCase.id}
                            layout
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-bold text-primary/20 font-serif">{useCase.number}</span>
                                    <div className="p-3 bg-sand/30 rounded-full text-primary">
                                        <useCase.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{useCase.title}</h3>
                                <p className="text-gray-600 italic mb-8 leading-relaxed">
                                    {useCase.hook}
                                </p>

                                {/* Before / After Visual */}
                                <div className="bg-gray-50 rounded-2xl p-6 mb-8 flex items-center justify-between relative">
                                    <div className="text-center">
                                        <div className="text-red-500 font-bold text-lg mb-1">{useCase.stats.before}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Vorher</div>
                                    </div>

                                    <div className="flex flex-col items-center px-4">
                                        <ArrowRight className="w-6 h-6 text-gray-300 mb-1" />
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
                                            {useCase.stats.saved}
                                        </span>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-green-600 font-bold text-lg mb-1">{useCase.stats.after}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Nachher</div>
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="w-full flex items-center justify-between text-gray-900 hover:bg-gray-50 group"
                                    onClick={() => setExpandedId(expandedId === useCase.id ? null : useCase.id)}
                                >
                                    <span className="font-medium">Details & ROI</span>
                                    {expandedId === useCase.id ? (
                                        <ChevronUp className="w-4 h-4 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    )}
                                </Button>

                                <AnimatePresence>
                                    {expandedId === useCase.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 space-y-6 border-t border-gray-100 mt-4">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Problem</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{useCase.details.problem}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Lösung</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{useCase.details.solution}</p>
                                                </div>

                                                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                                                    <h4 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" /> ROI & Nutzen
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {useCase.details.roi.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-green-700 font-medium">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-sand/20 rounded-xl p-5 border border-sand/30">
                                                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                                        <ShieldCheck className="w-4 h-4" /> Legal Engineering
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {useCase.details.legal.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-gray-700">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                                                    Beratung zu {useCase.title.split(" ")[1]} anfragen
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


# File: src/components/ui/Accordion.tsx

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }


# File: src/components/ui/Badge.tsx

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


# File: src/components/ui/Button.tsx

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


# File: src/components/ui/Card.tsx

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


# File: src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
