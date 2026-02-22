import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services — Teleboots",
  description: "From landing pages to full-stack applications — we build fast, conversion-optimized websites that look premium and perform.",
  keywords: ["web development", "React", "Next.js", "full-stack", "landing pages", "teleboots"],
  openGraph: {
    title: "Web Development Services — Teleboots",
    description: "Premium web development with modern technologies.",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  const techStack = [
    { name: "React & Next.js", icon: "CodeBracketIcon" },
    { name: "TypeScript", icon: "CommandLineIcon" },
    { name: "Tailwind CSS", icon: "PaintBrushIcon" },
    { name: "Node.js", icon: "ServerIcon" },
  ];

  const services = [
    {
      title: "Landing Pages",
      description: "High-converting pages designed to capture leads and drive action",
      features: ["Mobile-first design", "A/B testing ready", "SEO optimized", "Fast load times"],
    },
    {
      title: "Web Applications",
      description: "Full-stack solutions with modern architecture and scalability",
      features: ["Custom dashboards", "API integrations", "Database design", "Cloud deployment"],
    },
    {
      title: "E-commerce",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Stripe integration", "Product catalogs", "Cart & checkout", "Admin panels"],
    },
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#C9A84C] mb-4 block">
              / Web Development
            </span>
            <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
              Websites That
              <br />
              <span className="text-gradient">Convert</span>
            </h1>
            <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8">
              From landing pages to full-stack applications — we build fast, conversion-optimized websites that look premium and perform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "85+", label: "Sites Launched" },
              { value: "<2s", label: "Avg Load Time" },
              { value: "100%", label: "Mobile Responsive" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#C9A84C] mb-2">{stat.value}</div>
                <div className="text-[#7A7168] font-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#C9A84C] mb-3 block">
              / Our Stack
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Modern <span className="text-gradient">Technology</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div key={tech.name} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={tech.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#161412]">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-4">
              What We Build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="service-card rounded-3xl p-8">
                <h3 className="font-heading font-bold text-2xl text-[#161412] mb-3">{service.title}</h3>
                <p className="text-[#7A7168] font-body text-base leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#161412] font-body text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckIcon" size={12} className="text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Get a free project estimate and timeline within 24 hours.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}