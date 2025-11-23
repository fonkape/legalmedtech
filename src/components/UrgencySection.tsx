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
