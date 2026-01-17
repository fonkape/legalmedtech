import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
