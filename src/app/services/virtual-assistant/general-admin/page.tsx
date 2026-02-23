import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant for Construction & Contractors — Teleboots",
  description:
    "Scheduling, admin support, estimates follow-up, customer communication, and lead tracking — built for contractors who need reliable backend ops.",
  keywords: [
    "construction virtual assistant",
    "contractor admin support",
    "scheduling assistant",
    "lead follow-up",
    "operations support",
    "teleboots",
  ],
  openGraph: {
    title: "Virtual Assistant for Construction & Contractors — Teleboots",
    description:
      "Scheduling, follow-ups, admin, and lead tracking so your team stays on-site and productive.",
    type: "website",
  },
};

export default function ConstructionContractorsVAPage() {
  const outcomes = [
    {
      icon: "PhoneIcon",
      title: "Fast Lead Response",
      desc: "Calls, quote requests, and form leads handled quickly.",
    },
    {
      icon: "CalendarDaysIcon",
      title: "Scheduling + Confirmations",
      desc: "Jobs booked, reminders sent, reschedules handled cleanly.",
    },
    {
      icon: "ClipboardDocumentCheckIcon",
      title: "Estimates + Follow-Up",
      desc: "We track estimates and keep prospects moving toward yes.",
    },
    {
      icon: "DocumentTextIcon",
      title: "Admin + Documentation",
      desc: "Invoices, documents, spreadsheets, and backend organization.",
    },
  ];

  const tasks = [
    "Inbound call handling + message capture",
    "Job scheduling + confirmations",
    "Estimate follow-ups (warm + cold)",
    "Customer updates + coordination",
    "Basic inbox management",
    "Invoice tracking + reminders",
    "Lead tracking + status updates",
    "Daily admin + documentation support",
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
                / Virtual Assistant / Construction & Contractors
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Stay On-Site.
                <br />
                We Handle the <span className="text-gradient">Backend</span>.
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Contractors lose money when the phone isn’t answered, schedules
                get messy, and estimates don’t get followed up. Teleboots keeps
                your operations tight — calls, scheduling, follow-ups, and admin
                handled daily.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  Get Support
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  View Work
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                  alt="Construction skyline - contractors operations support"
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
              { value: "Same-day", label: "Follow-Up Systems" },
              { value: "24/7", label: "Coverage Options" },
              { value: "48h", label: "Quick Start" },
              { value: "10+ yrs", label: "Ops Experience" },
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

      {/* Outcomes */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What You Gain
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Cleaner Operations.
              <br />
              More <span className="text-gradient">Booked Jobs</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item) => (
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

      {/* Tasks */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-4">
                What We Handle for Your Team
              </h2>
              <p className="text-[#7A7168] font-body text-lg">
                So your crew stays focused on the work that pays.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tasks.map((t) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Want More Jobs Without More Chaos?
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Teleboots keeps your follow-up, scheduling, and admin clean — so
              you can scale without bottlenecks.
            </p>
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}