import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Generation Services — Teleboots",
  description: "Targeted outreach campaigns, LinkedIn prospecting, and cold email sequences that deliver qualified leads to your pipeline.",
  keywords: ["lead generation", "LinkedIn prospecting", "cold email", "B2B leads", "teleboots"],
  openGraph: {
    title: "Lead Generation Services — Teleboots",
    description: "Fill your pipeline with qualified leads.",
    type: "website",
  },
};

export default function LeadGenerationPage() {
  const channels = [
    {
      icon: "EnvelopeIcon",
      title: "Cold Email Campaigns",
      description: "Personalized sequences with A/B testing and automated follow-ups",
      metrics: "28% avg open rate",
    },
    {
      icon: "BriefcaseIcon",
      title: "LinkedIn Outreach",
      description: "Strategic connection requests and messaging campaigns",
      metrics: "40% connection rate",
    },
    {
      icon: "PhoneIcon",
      title: "Phone Prospecting",
      description: "Trained SDRs making warm calls to qualified prospects",
      metrics: "15% conversion rate",
    },
    {
      icon: "MagnifyingGlassIcon",
      title: "Lead Research",
      description: "Deep prospect research and list building with verified contacts",
      metrics: "95% data accuracy",
    },
  ];

  const process = [
    { step: "01", title: "Define ICP", description: "We identify your ideal customer profile and target criteria" },
    { step: "02", title: "Build Lists", description: "Research and compile verified contact lists matching your ICP" },
    { step: "03", title: "Craft Messaging", description: "Create personalized outreach sequences that resonate" },
    { step: "04", title: "Execute Campaigns", description: "Launch multi-channel campaigns with tracking and optimization" },
    { step: "05", title: "Deliver Leads", description: "Qualified leads delivered directly to your CRM or inbox" },
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
              / Lead Generation
            </span>
            <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
              Fill Your Pipeline
              <br />
              <span className="text-gradient">On Autopilot</span>
            </h1>
            <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8">
              Targeted outreach campaigns, LinkedIn prospecting, and cold email sequences that deliver qualified leads to your pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
                Start Generating Leads
              </Link>
              <Link href="/portfolio" className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading">
                See Results
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
              { value: "3,400+", label: "Leads/Month" },
              { value: "28%", label: "Avg Open Rate" },
              { value: "15%", label: "Conversion Rate" },
              { value: "95%", label: "Data Accuracy" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#0D9E8F] mb-2">{stat.value}</div>
                <div className="text-[#7A7168] font-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / Our Approach
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Multi-Channel <span className="text-gradient">Outreach</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <div key={channel.title} className="service-card rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mb-4">
                  <Icon name={channel.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#0D9E8F]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{channel.title}</h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed mb-4">{channel.description}</p>
                <span className="text-xs font-mono-custom bg-[#CCFAF4] text-[#0D9E8F] px-3 py-1 rounded-full">
                  {channel.metrics}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-[#7A7168] font-body text-lg max-w-2xl mx-auto">
              A proven 5-step system to identify, reach, and convert your ideal customers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6 items-start p-6 rounded-2xl bg-[#FAF8F3] border border-[#E2DAD0]">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F] flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-white text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#161412] mb-2">{item.title}</h3>
                  <p className="text-[#7A7168] font-body text-base">{item.description}</p>
                </div>
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
              Ready to Scale Your Pipeline?
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Get a custom lead generation strategy tailored to your business.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}