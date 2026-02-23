import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant for Coaches & Trainers — Teleboots",
  description:
    "Teleboots acts as your remote operations team — lead follow-up, calendar control, onboarding systems, CRM organization, and content support.",
  keywords: [
    "virtual assistant for coaches",
    "virtual assistant for trainers",
    "coaching operations",
    "calendar management",
    "client onboarding",
    "teleboots",
  ],
  openGraph: {
    title: "Virtual Assistant for Coaches & Trainers — Teleboots",
    description:
      "Operational structure behind your coaching business — without hiring in-house.",
    type: "website",
  },
};

export default function CoachesTrainersVAPage() {
  const pillars = [
    {
      icon: "ChatBubbleLeftRightIcon",
      title: "Lead Follow-Up Systems",
      desc: "Track every lead, respond fast, and book more discovery calls.",
    },
    {
      icon: "CalendarDaysIcon",
      title: "Calendar Control",
      desc: "Scheduling, confirmations, time zones, reminders, and reschedules.",
    },
    {
      icon: "UserPlusIcon",
      title: "Onboarding + Retention",
      desc: "Welcome flow, forms, payment setup, access delivery, check-ins.",
    },
    {
      icon: "ChartBarIcon",
      title: "CRM + Visibility",
      desc: "Clean data, updated statuses, task tracking, pipeline clarity.",
    },
  ];

  const deliverables = [
    "Lead tracking + fast response (email/SMS/phone)",
    "Discovery call scheduling + reminders",
    "Client onboarding workflows",
    "Payment tracking + invoice follow-up",
    "CRM cleanup + tagging + stage updates",
    "Content scheduling + newsletter support",
    "Weekly reporting + operational checklists",
    "Retention follow-ups + client check-ins",
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
                / Virtual Assistant / Coaches & Trainers
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Your Coaching Business
                <br />
                Needs <span className="text-gradient">Systems</span>, Not Stress.
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Coaching doesn’t stall because of talent — it stalls because
                operations break down. Teleboots builds the structure behind
                your growth: follow-up, scheduling, onboarding, CRM, and
                content support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  Schedule a Free Strategy Call
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  View Results
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                  alt="Team collaboration and planning - coaching operations support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+ yrs", label: "Operational Support" },
              { value: "5–7d", label: "Risk-Free Trial" },
              { value: "24/7", label: "Coverage Options" },
              { value: "48h", label: "Quick Start" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#0D9E8F] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#7A7168] font-body text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What We Build
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Operational Structure
              <br />
              That <span className="text-gradient">Scales</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => (
              <div key={item.title} className="service-card rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mb-5">
                  <Icon
                    name={item.icon as Parameters<typeof Icon>[0]["name"]}
                    size={24}
                    className="text-[#0D9E8F]"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-4">
                What Your VA Team Can Handle
              </h2>
              <p className="text-[#7A7168] font-body text-lg">
                We don’t just complete tasks — we keep your system running daily.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E2DAD0]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0D9E8F] flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckIcon" size={14} className="text-white" />
                  </div>
                  <span className="text-[#161412] font-body text-sm font-semibold">
                    {t}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="btn-teal px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
              >
                Build My Ops System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Scale Without Drowning in Admin
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Teleboots builds the operational structure behind your coaching
              revenue — so you stay consistent and in control.
            </p>
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}