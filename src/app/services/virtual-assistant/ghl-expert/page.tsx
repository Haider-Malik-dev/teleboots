import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoHighLevel Expert Virtual Assistant — Teleboots",
  description:
    "Pipelines, automations, workflows, calendars, reporting, and cleanup — Teleboots provides GoHighLevel support that stays structured and reliable.",
  keywords: [
    "GoHighLevel VA",
    "GoHighLevel expert",
    "GHL automations",
    "GHL workflows",
    "GHL pipelines",
    "teleboots",
  ],
  openGraph: {
    title: "GoHighLevel Expert Virtual Assistant — Teleboots",
    description:
      "Automations, pipelines, workflows, and reporting — built clean and maintained consistently.",
    type: "website",
  },
};

export default function GHLExpertVAPage() {
  const modules = [
    {
      icon: "Squares2X2Icon",
      title: "Pipelines + Stages",
      desc: "Design, cleanup, stage logic, and deal visibility.",
    },
    {
      icon: "BoltIcon",
      title: "Automations + Workflows",
      desc: "Triggers, follow-ups, SMS/email sequences, and logic checks.",
    },
    {
      icon: "CalendarDaysIcon",
      title: "Calendars + Booking",
      desc: "Appointment setup, reminders, no-show reduction systems.",
    },
    {
      icon: "ChartBarIcon",
      title: "Reporting + Tracking",
      desc: "Dashboards, weekly snapshots, and KPI visibility.",
    },
  ];

  const tasks = [
    "Pipeline setup + cleanup",
    "Workflow building + troubleshooting",
    "Tags, custom fields, and segmentation",
    "Calendar setup + reminders",
    "SMS/email nurture sequences",
    "Snapshot installs + adjustments",
    "Funnel/lead form integrations (basic)",
    "Weekly reporting + maintenance",
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
                / Virtual Assistant / GoHighLevel Expert
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                GoHighLevel
                <br />
                Built <span className="text-gradient">Clean</span>. Maintained Daily.
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                GHL becomes powerful when it stays organized. Teleboots provides
                expert support for pipelines, workflows, automations, calendars,
                and reporting — built with structure and maintained consistently.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  Talk to a GHL Expert
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                  alt="Analytics dashboard on laptop - GoHighLevel expert support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What We Handle
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Systems That Stay
              <br />
              <span className="text-gradient">Reliable</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="service-card rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mb-5">
                  <Icon
                    name={m.icon as Parameters<typeof Icon>[0]["name"]}
                    size={24}
                    className="text-[#0D9E8F]"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-2">
                  {m.title}
                </h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed">
                  {m.desc}
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
                GoHighLevel Support Tasks
              </h2>
              <p className="text-[#7A7168] font-body text-lg">
                Build it right. Keep it clean. Track performance weekly.
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

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="btn-teal px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
              >
                Start With a Free Call
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
              Make GoHighLevel Work Like a System
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Teleboots builds and maintains clean automations so your leads
              don’t leak and your pipeline stays visible.
            </p>
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
            >
              Book Your Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}