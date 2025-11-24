import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-background to-sand/20 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            <div className="container max-w-6xl mx-auto text-center relative z-10">

                {/* Badges */}
                <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
                    <span className="inline-block px-5 py-2 rounded-full border border-gray-200 bg-white text-[11px] font-bold tracking-[0.2em] text-primary uppercase shadow-sm">
                        KI-Lösungen für Arztpraxen – Rechtssicher & DSGVO-konform
                    </span>
                    <span className="inline-flex items-center gap-4 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Hausärzte</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Fachärzte</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> MVZ</span>
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-text-primary mb-10 leading-[1.15]">
                    3 Stunden täglich. <br className="hidden md:block" />
                    <span className="italic text-primary">Verloren an Bürokratie.</span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                    Während Sie Arztbriefe schreiben, Rezepte ausstellen und Telefonate führen, warten Ihre Patienten.
                    KI kann diese 3 Stunden zurückgeben – rechtssicher, DSGVO-konform, ohne Risiko.
                </p>

                {/* Trust Micro-Element */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-2 bg-white/60 px-4 py-1.5 rounded-full border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> Erste Pilotpraxen starten Januar 2026
                    </span>
                    <span className="flex items-center gap-2 bg-white/60 px-4 py-1.5 rounded-full border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> Kostenlose Feasibility-Checks für Pioniere
                    </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                    <Button variant="outline" size="lg" className="bg-white/80 hover:bg-white text-gray-800 border-gray-200 text-base font-medium px-10 py-7 rounded-full flex items-center gap-3 transition-all hover:scale-105 shadow-sm">
                        <Play className="h-5 w-5" />
                        Praxis-Simulator öffnen
                    </Button>
                </div>

                <p className="text-sm text-gray-400 font-light tracking-wide">
                    Kein Verkaufsgespräch. Nur ehrliche Einschätzung.
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
