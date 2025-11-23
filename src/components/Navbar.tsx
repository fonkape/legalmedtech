import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
            <nav className="flex items-center justify-between rounded-full border border-gray-200 bg-white/95 backdrop-blur-md shadow-sm py-3 pl-6 pr-3 w-full max-w-none">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="font-mono text-2xl font-bold text-primary tracking-tighter group-hover:scale-105 transition-transform">
                        {"{ dk }"}
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="flex flex-col justify-center">
                        <span className="font-serif text-base font-bold text-gray-900 leading-none mb-0.5">
                            Daniel Kleiboldt
                        </span>
                        <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] leading-none">
                            Büro für Legal Engineering
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Lösungen
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Über mich
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        FAQ
                    </Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 shrink-0">
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                    >
                        Kontakt
                    </Link>
                    <Button size="sm" variant="primary" className="rounded-full px-6">
                        Erstberatung
                    </Button>
                </div>
            </nav>
        </div>
    );
}
