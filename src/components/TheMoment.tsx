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
