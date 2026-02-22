import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO & Visibility Services — Teleboots",
  description: "On-page, technical, and off-page SEO strategies that move you from page 3 to position 1 — sustainably.",
  keywords: ["SEO services", "search engine optimization", "organic traffic", "keyword research", "teleboots"],
};

export default function SEOPage() {
  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="text-xs font-mono-custom uppercase tracking-widest text-[#7A7168] mb-4 block">
            / SEO & Visibility
          </span>
          <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
            Rank Higher,
            <br />
            <span className="text-gradient">Grow Faster</span>
          </h1>
          <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            On-page, technical, and off-page SEO strategies that move you from page 3 to position 1 — sustainably.
          </p>
          <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
            Get SEO Audit
          </Link>
        </div>
      </section>

      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+180%", label: "Avg Traffic Growth" },
              { value: "#1", label: "Page Rankings" },
              { value: "90+", label: "Domain Authority" },
              { value: "6mo", label: "Avg Results Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#161412] mb-2">{stat.value}</div>
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
              { icon: "DocumentTextIcon", title: "On-Page SEO", desc: "Content optimization, meta tags, internal linking" },
              { icon: "WrenchScrewdriverIcon", title: "Technical SEO", desc: "Site speed, mobile optimization, structured data" },
              { icon: "LinkIcon", title: "Off-Page SEO", desc: "Backlink building, authority growth, PR outreach" },
            ].map((item) => (
              <div key={item.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#161412]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#161412]" />
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