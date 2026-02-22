import type { Metadata } from "next";
import HeroSection from "./homepage/components/HeroSection";
import MarqueeSection from "./homepage/components/MarqueeSection";
import ServicesSection from "./homepage/components/ServicesSection";
import ProcessSection from "./homepage/components/ProcessSection";
import ScrollRevealSection from "./homepage/components/ScrollRevealSection";
import ResultsSection from "./homepage/components/ResultsSection";
import FAQSection from "./homepage/components/FAQSection";
import CTASection from "./homepage/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Teleboots — Scale Your Business Without Limits",
  description:
    "Teleboots is a full-service digital agency offering Virtual Assistants, Web Development, Lead Generation, SEO, Content, and Email Marketing. Get elite talent on demand.",
  keywords: [
    "virtual assistant agency",
    "web development agency",
    "lead generation",
    "SEO services",
    "digital agency",
    "teleboots",
  ],
  openGraph: {
    title: "Teleboots — Scale Your Business Without Limits",
    description:
      "Elite virtual assistants, web development, and lead generation. Everything your business needs to grow — on demand.",
    type: "website",
  },
};

export default function Homepage() {
  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      {/* Container-aligned grid lines */}
      <div className="grid-overlay">
        <div className="grid-inner">
          <div className="grid-line-v" />
          <div className="grid-line-v hidden md:block" />
          <div className="grid-line-v hidden lg:block" />
          <div className="grid-line-v" />
        </div>
      </div>

      {/* Page sections */}
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ScrollRevealSection />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}