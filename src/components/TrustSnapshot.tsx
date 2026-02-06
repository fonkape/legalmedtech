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
                            <h3 className="font-bold text-gray-900 mb-2">Diplom-Jurist & Software Engineer</h3>
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
        </section >
    );
}
