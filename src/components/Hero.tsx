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
