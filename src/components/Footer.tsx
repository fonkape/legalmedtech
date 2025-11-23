import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-primary mb-2">Daniel Kleiboldt</h4>
                        <p className="text-sm text-gray-500">Legal Engineering für die Gesundheitsbranche</p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-600">
                        <Link href="#" className="hover:text-primary transition-colors">Impressum</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Datenschutz</Link>
                        <Link href="#" className="hover:text-primary transition-colors">AGB</Link>
                    </div>

                    <div className="text-sm text-gray-400">
                        © 2025 Daniel Kleiboldt
                    </div>
                </div>
            </div>
        </footer>
    );
}
