import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant Services — Teleboots",
  description: "Dedicated, trained virtual assistants who handle admin, scheduling, inbox management, research, and more. Free yourself to focus on growth.",
  keywords: ["virtual assistant", "VA services", "remote assistant", "admin support", "teleboots"],
  openGraph: {
    title: "Virtual Assistant Services — Teleboots",
    description: "Professional virtual assistants to scale your business operations.",
    type: "website",
  },
};

export default function VirtualAssistantPage() {
  const benefits = [
    { icon: "ClockIcon", title: "Save 20+ Hours/Week", description: "Focus on high-value work while your VA handles the rest" },
    { icon: "CurrencyDollarIcon", title: "Cost-Effective", description: "70% less than hiring full-time, zero overhead" },
    { icon: "UserGroupIcon", title: "Vetted Talent", description: "Pre-screened, trained professionals ready to start" },
    { icon: "BoltIcon", title: "Fast Onboarding", description: "Get matched and onboarded within 48 hours" },
  ];

  const tasks = [
    "Email & calendar management",
    "Data entry & CRM updates",
    "Customer support & follow-ups",
    "Research & reporting",
    "Social media scheduling",
    "Document preparation",
    "Travel & event coordination",
    "Invoice & expense tracking",
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
                / Virtual Assistant Services
              </span>
              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Your Business,
                <br />
                <span className="text-gradient">Supercharged</span>
              </h1>
              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Dedicated, trained VAs who handle admin, scheduling, inbox management, research, and more — freeing you to focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
                  Hire a VA Today
                </Link>
                <Link href="/portfolio" className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1aa210e07-1768343008045.png"
                  alt="Professional virtual assistant working on computer with headset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "120+", label: "VAs Placed" },
              { value: "40 hrs", label: "Avg Weekly" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "48h", label: "Onboarding Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#0D9E8F] mb-2">{stat.value}</div>
                <div className="text-[#7A7168] font-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / Why Choose Us
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Built for <span className="text-gradient">Scale</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#0D9E8F]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{benefit.title}</h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-4">
                What Your VA Can Handle
              </h2>
              <p className="text-[#7A7168] font-body text-lg">
                From daily admin to complex project coordination — we've got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <div key={task} className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E2DAD0]">
                  <div className="w-6 h-6 rounded-full bg-[#0D9E8F] flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckIcon" size={14} className="text-white" />
                  </div>
                  <span className="text-[#161412] font-body text-base">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Ready to Scale?
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Get matched with a dedicated VA in 48 hours. No long-term contracts, cancel anytime.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}