import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractivePraxis } from "@/components/InteractivePraxis";
import { SocialProofTeaser } from "@/components/SocialProofTeaser";
import { SolutionOverview } from "@/components/SolutionOverview";
import { UseCases } from "@/components/UseCases";
import { UrgencySection } from "@/components/UrgencySection";
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
      <div id="interactive-praxis">
        <InteractivePraxis />
      </div>
      <SocialProofTeaser />
      <div id="solutions">
        <SolutionOverview />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <UrgencySection />
      <div id="about">
        <TrustAbout />
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
