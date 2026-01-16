import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ComplianceGap } from "@/components/ComplianceGap";
import { UseCases } from "@/components/UseCases";
import { TrustAbout } from "@/components/TrustAbout";
import { Insights } from "@/components/Insights";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/20">

      <Navbar />
      <Hero />
      <ComplianceGap />
      <div id="about">
        <TrustAbout />
      </div>
      <div id="angebot">
        <UseCases />
      </div>
      <div id="insights">
        <Insights />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
