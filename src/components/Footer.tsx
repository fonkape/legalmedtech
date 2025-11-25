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
                            Ich verbinde medizinische Exzellenz mit rechtssicherer KI-Technologie.
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
                            <li><Link href="#" className="hover:text-primary transition-colors">Self-Check-In</Link></li>
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
                        © 2025 Daniel Kleiboldt. Made with <span className="text-primary">❤️</span> in Germany.
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
