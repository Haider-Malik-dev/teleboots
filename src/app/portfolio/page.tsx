
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Teleboots",
  description: "See how we've helped businesses scale with virtual assistants, web development, and lead generation. Real results, real clients.",
  keywords: ["portfolio", "case studies", "client results", "success stories", "teleboots"]
};

export default function PortfolioPage() {
  const caseStudies = [
  {
    id: 1,
    client: "TechFlow SaaS",
    industry: "B2B Software",
    service: "Virtual Assistant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b4063b0-1769819031248.png",
    alt: "TechFlow SaaS dashboard showing analytics and metrics",
    challenge: "CEO spending 20+ hours/week on admin tasks instead of product development",
    solution: "Dedicated VA handling email, calendar, CRM, and customer support",
    results: [
    "20 hours/week saved",
    "Response time cut by 60%",
    "Customer satisfaction up 35%"],

    accent: "#0D9E8F"
  },
  {
    id: 2,
    client: "Bloom Wellness",
    industry: "Health & Fitness",
    service: "Web Development",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bef05c97-1768235977439.png",
    alt: "Bloom Wellness website design on laptop and mobile devices",
    challenge: "Outdated website with 8-second load times and 70% mobile bounce rate",
    solution: "Complete redesign with Next.js, optimized images, and mobile-first approach",
    results: [
    "1.2s load time (85% faster)",
    "Mobile conversions up 120%",
    "SEO traffic increased 200%"],

    accent: "#C9A84C"
  },
  {
    id: 3,
    client: "Apex Consulting",
    industry: "Business Consulting",
    service: "Lead Generation",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169aeba2f-1769249970808.png",
    alt: "Apex Consulting lead generation campaign results dashboard",
    challenge: "Struggling to fill sales pipeline with qualified B2B leads",
    solution: "Multi-channel outreach: LinkedIn + cold email + phone prospecting",
    results: [
    "450 qualified leads/month",
    "32% email open rate",
    "$280K in closed deals (first 90 days)"],

    accent: "#0D9E8F"
  },
  {
    id: 4,
    client: "Urban Eats",
    industry: "Food & Beverage",
    service: "Content & Social Media",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1068244c9-1768471618230.png",
    alt: "Urban Eats social media content calendar and engagement metrics",
    challenge: "Inconsistent social presence with low engagement and brand awareness",
    solution: "Strategic content calendar, professional photography, and community management",
    results: [
    "Followers grew 340%",
    "Engagement rate 8.2%",
    "15% increase in foot traffic"],

    accent: "#7A7168"
  },
  {
    id: 5,
    client: "LegalPro Firm",
    industry: "Legal Services",
    service: "SEO & Visibility",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191c757a7-1766745148992.png",
    alt: "LegalPro Firm SEO ranking improvements and organic traffic growth",
    challenge: "Ranking on page 3-4 for key practice area keywords",
    solution: "Comprehensive SEO: technical audit, content optimization, and link building",
    results: [
    "12 keywords to position #1",
    "Organic traffic up 285%",
    "40% increase in consultation requests"],

    accent: "#161412"
  },
  {
    id: 6,
    client: "FitGear Co.",
    industry: "E-commerce",
    service: "Email Marketing",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_131d208d6-1766523204279.png",
    alt: "FitGear Co email marketing campaign performance dashboard",
    challenge: "Low email engagement and minimal repeat purchase rate",
    solution: "Automated welcome series, abandoned cart recovery, and loyalty campaigns",
    results: [
    "48% email open rate",
    "12% click-through rate",
    "Repeat purchases up 65%"],

    accent: "#0D9E8F"
  }];


  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
              / Portfolio & Case Studies
            </span>
            <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
              Real Clients,
              <br />
              <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-[#7A7168] font-body text-xl leading-relaxed">
              See how we've helped businesses across industries scale with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            { value: "300+", label: "Happy Clients" },
            { value: "$12M+", label: "Revenue Generated" },
            { value: "98%", label: "Client Retention" },
            { value: "4.9/5", label: "Avg Rating" }].
            map((stat) =>
            <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#0D9E8F] mb-2">{stat.value}</div>
                <div className="text-[#7A7168] font-body text-sm">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-24">
            {caseStudies.map((study, idx) =>
            <div
              key={study.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
                {/* Image */}
                <div className="flex-1">
                  <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-card-lg">
                    <AppImage
                    src={study.image}
                    alt={study.alt}
                    fill
                    className="object-cover" />
                  
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                    className="text-xs font-mono-custom uppercase tracking-wider px-3 py-1 rounded-full font-semibold"
                    style={{ background: `${study.accent}18`, color: study.accent }}>
                    
                      {study.service}
                    </span>
                    <span className="text-[#7A7168] font-body text-sm">{study.industry}</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-[#161412] text-3xl md:text-4xl mb-6">
                    {study.client}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#161412] mb-2">Challenge</h3>
                      <p className="text-[#7A7168] font-body text-base leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#161412] mb-2">Solution</h3>
                      <p className="text-[#7A7168] font-body text-base leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#161412] mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result) =>
                      <li key={result} className="flex items-center gap-3">
                            <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: study.accent }}>
                          
                              <Icon name="CheckIcon" size={14} className="text-white" />
                            </div>
                            <span className="text-[#161412] font-body text-base font-semibold">{result}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}