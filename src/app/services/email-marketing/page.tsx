import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Marketing Services — Teleboots",
  description: "Automated sequences, newsletters, and drip campaigns engineered to nurture leads and drive repeat revenue.",
  keywords: ["email marketing", "email automation", "drip campaigns", "newsletters", "teleboots"],
};

export default function EmailMarketingPage() {
  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
            / Email Marketing
          </span>
          <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
            Turn Subscribers
            <br />
            <span className="text-gradient">Into Revenue</span>
          </h1>
          <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Automated sequences, newsletters, and drip campaigns engineered to nurture leads and drive repeat revenue.
          </p>
          <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
            Start Email Campaigns
          </Link>
        </div>
      </section>

      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "42%", label: "Avg Open Rate" },
              { value: "8.5%", label: "Click-Through Rate" },
              { value: "$38", label: "ROI per $1 Spent" },
              { value: "500K+", label: "Emails Sent/Month" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#0D9E8F] mb-2">{stat.value}</div>
                <div className="text-[#7A7168] font-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "EnvelopeIcon", title: "Welcome Sequences", desc: "Onboard new subscribers with automated flows" },
              { icon: "BoltIcon", title: "Drip Campaigns", desc: "Nurture leads over time with strategic content" },
              { icon: "NewspaperIcon", title: "Newsletters", desc: "Keep your audience engaged with regular updates" },
            ].map((item) => (
              <div key={item.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#0D9E8F]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{item.title}</h3>
                <p className="text-[#7A7168] font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}