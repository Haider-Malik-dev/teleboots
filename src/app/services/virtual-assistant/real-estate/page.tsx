import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate Virtual Assistant — Teleboots",
  description:
    "Speed wins in real estate. We handle calls, follow-ups, CRM updates, appointment setting, and transaction coordination so you close more deals.",
  keywords: [
    "real estate virtual assistant",
    "real estate ISA",
    "lead management",
    "CRM management",
    "appointment setting",
    "teleboots",
  ],
  openGraph: {
    title: "Real Estate Virtual Assistant — Teleboots",
    description:
      "Calls, follow-ups, CRM, appointments, and transaction support — built to move deals faster.",
    type: "website",
  },
};

export default function RealEstateVAPage() {
  const problems = [
    {
      icon: "PhoneIcon",
      title: "Missed Calls = Missed Deals",
      desc: "We handle inbound calls and follow-up so leads never go cold.",
    },
    {
      icon: "ClipboardDocumentListIcon",
      title: "Messy CRM Kills Conversions",
      desc: "Every call, note, tag, and stage update logged properly.",
    },
    {
      icon: "CalendarDaysIcon",
      title: "Unconfirmed Appointments",
      desc: "We schedule, confirm, and reduce no-shows with reminders.",
    },
    {
      icon: "BoltIcon",
      title: "Slow Follow-Up",
      desc: "Speed-to-lead systems that keep your pipeline moving.",
    },
  ];

  const supportAreas = [
    "Inbound call handling",
    "Outbound cold calling",
    "Lead qualification (ISA support)",
    "Appointment setting + confirmations",
    "SMS + email follow-ups",
    "CRM updates after every interaction",
    "Buyer/seller follow-up sequences",
    "Transaction coordination support",
  ];

  const tools = [
    "GoHighLevel",
    "Podio",
    "Follow Up Boss",
    "HubSpot",
    "Salesforce",
    "Zoho",
    "MLS systems",
    "Zillow",
    "Dotloop",
    "Buildium",
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
                / Virtual Assistant / Real Estate
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Real Estate{" "}
                <span className="text-gradient">Moves Fast</span>
                <br />
                Your Follow-Up Should Too.
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Teleboots helps agents, brokers, wholesalers, and investors stay
                responsive and organized — calls answered, leads tracked, CRM
                clean, appointments booked, and transactions supported.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
                  alt="Person holding house keys - real estate support"
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
              { value: "10+ yrs", label: "US Support Experience" },
              { value: "24/7", label: "Coverage Available" },
              { value: "48h", label: "Fast VA Onboarding" },
              { value: "$5–6/hr", label: "Starting Rates" },
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

      {/* Problems */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What We Fix
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              The Real Problems
              <br />
              <span className="text-gradient">We Solve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item) => (
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

      {/* What We Handle */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-5">
                Lead Management + ISA Support
                <br />
                Built for <span className="text-gradient">Speed</span>
              </h2>
              <p className="text-[#7A7168] font-body text-lg leading-relaxed mb-8">
                Your pipeline should never depend on “when you’re free.”
                Teleboots runs structured follow-up systems so every lead is
                handled, tracked, and moved forward consistently.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {supportAreas.map((t) => (
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
            </div>

            <div className="service-card rounded-3xl p-10">
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
                / Tools We Work With
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#161412] mb-6">
                CRMs + Real Estate Systems
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#E2DAD0]"
                  >
                    <Icon name="BoltIcon" size={16} className="text-[#0D9E8F]" />
                    <span className="text-[#161412] font-body text-sm font-semibold">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-[#0D9E8F]/10 border border-[#0D9E8F]/20">
                <p className="text-[#161412] font-body text-sm leading-relaxed">
                  Want proof before you commit? Ask for a{" "}
                  <span className="font-semibold">5–7 day risk-free trial</span>{" "}
                  and see how the system feels inside your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Stop Losing Deals to Slow Follow-Up
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Let Teleboots handle calls, CRM, lead tracking, and admin so you
              can focus on closing.
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