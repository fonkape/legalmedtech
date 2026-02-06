"use client";

import { X, Check, ArrowRight, Mail, Phone, MapPin, Calendar, Shield, Clock, Users, Zap, Server, FileCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LeistungenPdfPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-300 py-8 px-4 md:px-8 relative print:bg-white print:p-0">

            {/* Clickable Backdrop to go home */}
            <div
                className="fixed inset-0 cursor-pointer -z-10 print:hidden"
                onClick={() => router.push('/')}
                title="Zurück zur Startseite"
            />

            {/* Controls */}
            <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden">
                <Link href="/">
                    <Button variant="ghost" size="sm" className="hover:bg-white p-2">
                        <X className="w-6 h-6 text-gray-600" />
                    </Button>
                </Link>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.print()}
                    className="bg-[#2563EB] text-white"
                >
                    Als PDF speichern / Drucken
                </Button>
            </div>

            {/* PDF Container */}
            <div className="max-w-[210mm] mx-auto space-y-10 print:space-y-0">

                {/* ========== PAGE 1: COVER ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col relative overflow-hidden print:break-after-page">
                    {/* Background */}
                    <div className="absolute inset-0 bg-[#2563EB]" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full p-16 text-white">
                        {/* Logo - White on Blue */}
                        <div className="mb-auto">
                            <Image
                                src="/logo-master.svg"
                                alt="Daniel Kleiboldt Logo"
                                width={80}
                                height={80}
                                className="brightness-0 invert"
                            />
                        </div>

                        {/* Hero - Left Aligned */}
                        <div className="my-auto py-16">
                            <p className="text-sm font-medium tracking-[0.3em] uppercase opacity-60 mb-8">
                                Daniel Kleiboldt Legal Engineering
                            </p>
                            <h1 className="text-7xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.95]">
                                Healthcare AI<br />Compliance
                            </h1>
                            <p className="text-2xl md:text-3xl opacity-70 leading-relaxed font-light max-w-md">
                                Rechtssichere KI-Integration<br />für Kliniken und Praxen
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto flex justify-between items-end text-sm opacity-60">
                            <div>
                                <p className="font-bold tracking-wider">DANIEL KLEIBOLDT</p>
                                <p className="tracking-wide">DIPLOM-JURIST | SOFTWARE ENGINEER</p>
                            </div>
                            <div className="text-right">
                                <p>kleiboldt.de</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* ========== PAGE 2: WAS IST LEGAL ENGINEERING? ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col p-16 print:break-after-page overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-16">
                        <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <p className="tech-label text-xs font-bold text-[#2563EB] tracking-[0.3em] uppercase mb-4">Einführung</p>
                        <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">WAS IST LEGAL ENGINEERING?</h2>
                        <p className="text-xl text-gray-400 mb-20">Recht und IT aus einer Hand</p>

                        <p className="text-gray-600 leading-relaxed mb-16 text-lg max-w-xl">
                            Die meisten KI-Anbieter sagen: &quot;Wir liefern die Technologie, Sie kümmern sich um Compliance.&quot;
                            Das Problem: Wer trägt dann die Haftung? <strong className="text-gray-900">Legal Engineering</strong> bedeutet:
                            Compliance von Anfang an in die Systemarchitektur einbauen – nicht nachträglich draufkleben.
                        </p>

                        {/* Comparison Grid */}
                        <div className="grid grid-cols-2 gap-10">
                            {/* Left: Standard */}
                            <div className="bg-gray-50 p-8 border border-gray-200">
                                <h3 className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]">Standard-Ansatz</h3>
                                <ul className="space-y-5 text-gray-600">
                                    <li className="flex items-start gap-4">
                                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>Kanzlei berät → IT setzt um</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>Missverständnisse bei Übersetzung</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>Compliance als &quot;Blocker&quot;</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span>3 Ansprechpartner</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right: Legal Engineering */}
                            <div className="bg-[#2563EB]/5 p-8 border-2 border-[#2563EB]">
                                <h3 className="text-sm font-bold text-[#2563EB] mb-8 uppercase tracking-[0.2em]">Legal Engineering</h3>
                                <ul className="space-y-5 text-gray-700">
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                                        <span><strong>Ein</strong> Ansprechpartner</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                                        <span>Compliance by Design</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                                        <span>Rechtssichere Architektur von Tag 1</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                                        <span>IT und Recht sprechen eine Sprache</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-10 flex justify-between items-end text-xs text-gray-400 border-t border-gray-200">
                        <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                        <span>Seite 2 / 7</span>
                    </div>
                </article>

                {/* ========== PAGE 3: KLINIKEN - DAS REGULATORISCHE UMFELD ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col print:break-after-page overflow-hidden">

                    {/* Top Section: White Background */}
                    <div className="flex-grow p-16 pb-0 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-12">
                            <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                            <span className="tech-label text-xs font-bold text-[#2563EB] tracking-[0.3em] uppercase">Kliniken</span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Das regulatorische Umfeld</h2>
                            <p className="text-xl text-gray-400 mb-20">Drei Verordnungen. Ein Ziel: Rechtssicherheit.</p>

                            {/* Three Regulations */}
                            <div className="space-y-6 mb-12">
                                <div className="flex gap-6">
                                    <div className="w-12 shrink-0 pt-1">
                                        <Shield className="w-6 h-6 text-[#2563EB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">EU AI Act</h3>
                                        <p className="text-gray-600 leading-relaxed">Hochrisiko-Klassifizierung für medizinische KI. Betreiberpflichten nach Art. 26 EU AI Act: Human Oversight, Logging, Transparenz. Bußgelder bis 35 Mio. € oder 7% des Jahresumsatzes.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 shrink-0 pt-1">
                                        <FileCheck className="w-6 h-6 text-[#2563EB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">MDR (Medical Device Regulation)</h3>
                                        <p className="text-gray-600 leading-relaxed">KI-Software als Medizinprodukt. CE-Kennzeichnung erforderlich. Klinische Bewertung, Post-Market Surveillance, technische Dokumentation nach Annex II.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 shrink-0 pt-1">
                                        <Server className="w-6 h-6 text-[#2563EB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">DSGVO & § 203 StGB</h3>
                                        <p className="text-gray-600 leading-relaxed">Gesundheitsdaten als besondere Kategorie (Art. 9). Schweigepflicht bei Cloud-Lösungen. Auftragsverarbeitung, DSFA-Pflicht, Drittlandtransfer-Problematik.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Gray Background */}
                    <div className="bg-gray-50 p-16 pt-8 flex flex-col justify-between">
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            <strong className="text-gray-900">Das Problem:</strong> Diese drei Regelwerke überschneiden sich, widersprechen sich teilweise – und niemand in der Klinik überblickt alle gleichzeitig. IT, Rechtsabteilung und Datenschutz arbeiten in Silos.
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-end text-xs text-gray-400 border-t border-gray-200 pt-10">
                            <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                            <span>Seite 3 / 7</span>
                        </div>
                    </div>
                </article>

                {/* ========== PAGE 4: KLINIKEN - LEISTUNGSPAKET ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col print:break-after-page overflow-hidden">

                    {/* Top Section: White Background */}
                    <div className="flex-grow p-16 pb-0 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-10">
                            <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                            <span className="tech-label text-xs font-bold text-[#2563EB] tracking-[0.3em] uppercase">Kliniken</span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Mein Leistungspaket</h2>
                            <p className="text-xl text-gray-400 mb-20">Drei Phasen zur rechtssicheren KI-Integration</p>

                            <div className="space-y-8">
                                {/* Phase A */}
                                <div className="grid grid-cols-[48px_1fr] gap-4">
                                    <div className="text-[#2563EB] font-bold text-2xl">A</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Technische Lastenheft-Spezifikation</h3>
                                        <p className="text-sm text-gray-500 mb-3">Klinische Requirements → AI-Act-konforme Architektur</p>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Risikoklassifizierung</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Data Governance (Art. 10)</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Technische Doku (Annex IV)</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Logging-Anforderungen</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Phase B */}
                                <div className="grid grid-cols-[48px_1fr] gap-4">
                                    <div className="text-[#2563EB] font-bold text-2xl">B</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Procurement & Vendor Management</h3>
                                        <p className="text-sm text-gray-500 mb-3">Rechtssichere Beschaffung & Lieferantenprüfung</p>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Ausschreibungstexte</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Vendor Due Diligence</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Vertragsgestaltung</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Haftungsklauseln</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Phase C */}
                                <div className="grid grid-cols-[48px_1fr] gap-4">
                                    <div className="text-[#2563EB] font-bold text-2xl">C</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation Oversight</h3>
                                        <p className="text-sm text-gray-500 mb-3">Technische Begleitung mit rechtlicher Perspektive</p>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> QMS (Art. 17 EU AI Act)</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Post-Market Monitoring</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> AI Literacy (Art. 4 EU AI Act)</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#2563EB]" /> Incident Response</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Blue Background */}
                    <div className="bg-[#2563EB] text-white p-16 pt-8 pb-12 flex flex-col justify-between">
                        <div className="grid grid-cols-3 gap-6 text-center mb-0">
                            <div>
                                <p className="font-bold">Time-to-Market</p>
                                <p className="text-sm opacity-70">halbiert</p>
                            </div>
                            <div>
                                <p className="font-bold">Rechtssicherheit</p>
                                <p className="text-sm opacity-70">von Tag 1</p>
                            </div>
                            <div>
                                <p className="font-bold">Ein Ansprechpartner</p>
                                <p className="text-sm opacity-70">statt drei</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end text-xs text-white/60 border-t border-white/20 pt-10 mt-10">
                            <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                            <span>Seite 4 / 7</span>
                        </div>
                    </div>
                </article>

                {/* ========== PAGE 5: PRAXEN / MVZs - ÜBERSICHT ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col print:break-after-page overflow-hidden">

                    {/* Top Section: Gray Background */}
                    <div className="bg-gray-50 p-16 pb-12">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-10">
                            <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                            <span className="tech-label text-xs font-bold text-[#2563EB] tracking-[0.3em] uppercase">Praxen / MVZs</span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">KI im Praxisalltag</h2>
                        <p className="text-xl text-gray-400 mb-8">Von der Strategie bis zur Umsetzung</p>

                        <div className="">
                            <p className="text-gray-700">
                                <strong className="text-gray-900">Typische KI-Anwendungen:</strong> Telefonassistenten, Dokumentation, Abrechnung, Arztbrief-Generierung, Diagnostik-Unterstützung, Terminmanagement
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: White Background */}
                    <div className="flex-grow p-16 pt-12 flex flex-col">


                        <div className="border border-gray-200 p-6 mb-5">
                            <div className="flex items-start gap-5">
                                <Zap className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">AI-Readiness & Potenzialanalyse</h3>
                                    <p className="text-sm text-gray-400 italic mb-4">Für Praxen am Anfang der KI-Reise</p>
                                    <p className="text-gray-600 mb-4">Sie hören viel über KI, wissen aber nicht, wo Sie anfangen sollen? Ich analysiere Ihre Abläufe und identifiziere konkrete Automatisierungspotenziale – ohne Buzzwords, mit klarer ROI-Einschätzung.</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Workflow-Analyse aller Praxisprozesse</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> IT-Infrastruktur-Assessment</li>
                                        </ul>
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Datenschutz-Erstbewertung</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Use-Case-Priorisierung mit Roadmap</li>
                                        </ul>
                                    </div>
                                    <p className="mt-4 text-sm font-medium text-[#2563EB]">Ab 1.900 € (Festpreis) · 1 Workshop-Tag</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 p-6">
                            <div className="flex items-start gap-5">
                                <FileCheck className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Compliance-Quickcheck</h3>
                                    <p className="text-sm text-gray-400 italic mb-4">Für Praxen, die KI bereits nutzen</p>
                                    <p className="text-gray-600 mb-4">Sie nutzen bereits Doctolib, CGM, Microsoft Dragon Copilot oder andere KI-Tools? Ich prüfe Ihre bestehenden Systeme auf Konformität mit EU AI Act, DSGVO und MDR – und identifiziere Handlungsbedarf.</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Betreiberpflichten-Analyse</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Human Oversight Bewertung</li>
                                        </ul>
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> DSFA-Notwendigkeitsprüfung</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Audit-Report mit Prioritäten-Roadmap</li>
                                        </ul>
                                    </div>
                                    <p className="mt-4 text-sm font-medium text-[#2563EB]">Ab 3.000 € (Festpreis) · 3-5 Arbeitstage</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto pt-10 flex justify-between items-end text-xs text-gray-400 border-t border-gray-200">
                            <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                            <span>Seite 5 / 7</span>
                        </div>
                    </div>
                </article>

                {/* ========== PAGE 6: PRAXEN / MVZs - PREMIUM MODULE ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col p-16 print:break-after-page overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-10">
                        <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                        <span className="tech-label text-xs font-bold text-[#2563EB] tracking-[0.3em] uppercase">Praxen / MVZs</span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Premium-Lösungen</h2>
                        <p className="text-xl text-gray-400 mb-10">Für maximale Datensouveränität und Compliance</p>

                        <div className="border border-gray-200 p-6 mb-5">
                            <div className="flex items-start gap-5">
                                <Server className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Sovereign AI Implementation</h3>
                                    <p className="text-sm text-gray-400 italic mb-4">Für Premium-Privatpraxen & spezialisierte MVZs</p>
                                    <p className="text-gray-600 mb-4">Absolute Datensouveränität: Ihre KI verlässt niemals Ihre Hardware. Ich implementiere Open-Source-Modelle (Llama, Mistral, Phi) lokal auf Ihrer Infrastruktur – komplett DSGVO-konform.</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Lokale LLM-Installation (GPU/CPU)</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Privacy-by-Design-Architektur</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Zero-Knowledge-Deployment</li>
                                        </ul>
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> § 203 StGB Schweigepflicht gewahrt</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Fine-Tuning auf Fachgebiet</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> PVS/KIS-Integration möglich</li>
                                        </ul>
                                    </div>
                                    <p className="mt-4 text-sm font-medium text-[#2563EB]">Ab 15.000 € (Projekt) · 4-8 Wochen</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 p-6">
                            <div className="flex items-start gap-5">
                                <BookOpen className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Technical Compliance Engineering</h3>
                                    <p className="text-sm text-gray-400 italic mb-4">Für Health-Tech Startups & KI-Anbieter</p>
                                    <p className="text-gray-600 mb-4">Sie entwickeln KI-Software für den Gesundheitsmarkt? Ich baue Compliance in Ihren Code – von der ersten Zeile an. Keine nachträglichen Audits, keine bösen Überraschungen.</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Privacy-Proxy-Entwicklung</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> MDR-Zertifizierungsbegleitung</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> AI Act Technical Docs</li>
                                        </ul>
                                        <ul className="space-y-1.5 text-gray-600">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Compliance-as-Code Patterns</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> Audit-Trail-Implementierung</li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" /> CE-Marking Vorbereitung</li>
                                        </ul>
                                    </div>
                                    <p className="mt-4 text-sm font-medium text-[#2563EB]">Auf Anfrage · Retainer oder Projektbasis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-10 flex justify-between items-end text-xs text-gray-400 border-t border-gray-200">
                        <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                        <span>Seite 6 / 7</span>
                    </div>
                </article>

                {/* ========== PAGE 7: CONTACT WITH QR CODE ========== */}
                <article className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] mx-auto flex flex-col p-16 print:break-after-page overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-12">
                        <Image src="/logo-master.svg" alt="Logo" width={48} height={48} />
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col justify-center">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nächster Schritt?</h2>
                        <p className="text-xl text-gray-400 mb-16 max-w-lg leading-relaxed">
                            Lassen Sie uns in einem unverbindlichen 20-Minuten-Gespräch herausfinden, ob und wie ich Ihnen helfen kann.
                        </p>

                        <div className="space-y-5 max-w-md">
                            <div className="flex items-center gap-5 p-5 bg-gray-50">
                                <Mail className="w-6 h-6 text-[#2563EB]" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">E-Mail</p>
                                    <p className="font-medium text-gray-900">mail@kleiboldt.de</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-5 bg-gray-50">
                                <Phone className="w-6 h-6 text-[#2563EB]" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Telefon</p>
                                    <p className="font-medium text-gray-900">05241 / 708 20 12</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-5 bg-gray-50">
                                <MapPin className="w-6 h-6 text-[#2563EB]" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Standort</p>
                                    <p className="font-medium text-gray-900">Gütersloh, NRW</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-10 flex justify-between items-end text-xs text-gray-400 border-t border-gray-200">
                        <span className="tracking-wider">KLEIBOLDT LEGAL ENGINEERING</span>
                        <span>Seite 7 / 7</span>
                    </div>
                </article>

            </div >

            {/* Print Styles */}
            < style jsx global > {`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style >
        </div >
    );
}
