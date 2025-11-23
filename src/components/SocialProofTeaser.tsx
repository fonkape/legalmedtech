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
