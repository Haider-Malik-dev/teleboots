import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Assistant for Social Media & Video — Teleboots",
  description:
    "A dedicated VA to manage content ops: scheduling, captions, DMs/comments, basic reporting, and video publishing coordination.",
  keywords: [
    "social media virtual assistant",
    "content management VA",
    "video publishing support",
    "DM management",
    "content calendar",
    "teleboots",
  ],
  openGraph: {
    title: "Virtual Assistant for Social Media & Video — Teleboots",
    description:
      "Consistent content, organized engagement, and daily execution — without managing freelancers.",
    type: "website",
  },
};

export default function SocialMediaVideoVAPage() {
  const blocks = [
    {
      icon: "CalendarDaysIcon",
      title: "Content Calendar + Scheduling",
      desc: "Plan, format, and schedule posts with consistency.",
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      title: "DMs + Comment Responses",
      desc: "Faster replies that build trust and convert inbound leads.",
    },
    {
      icon: "VideoCameraIcon",
      title: "Video Publishing Support",
      desc: "Short-form coordination, uploads, captions, thumbnails.",
    },
    {
      icon: "ClipboardDocumentCheckIcon",
      title: "Tracking + Reporting",
      desc: "Basic weekly reporting and organized inbound lead tracking.",
    },
  ];

  const tasks = [
    "Content calendar planning",
    "Caption writing + post formatting",
    "Hashtag research",
    "Post scheduling",
    "Reels/shorts coordination",
    "Long-form upload management",
    "Thumbnail coordination",
    "DM + comment replies",
    "Lead tracking from social platforms",
    "Basic performance reporting",
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
                / Virtual Assistant / Social Media & Video
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Posting Is Easy.
                <br />
                Managing It <span className="text-gradient">Daily</span> Is Not.
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Teleboots gives you a dedicated VA trained to manage content ops
                with structure: scheduling, engagement, video publishing
                coordination, and tracking — so your growth stays consistent.
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
                  See Results
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Phone and laptop workspace for social media operations"
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
              { value: "Daily", label: "Execution Rhythm" },
              { value: "24/7", label: "Coverage Options" },
              { value: "10+ yrs", label: "Ops Experience" },
              { value: "5–7d", label: "Risk-Free Trial" },
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

      {/* Blocks */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What We Run
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Content Ops
              <br />
              With <span className="text-gradient">Structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blocks.map((item) => (
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
                What Your VA Will Handle
              </h2>
              <p className="text-[#7A7168] font-body text-lg">
                Less chaos. More consistency. Real daily execution.
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
                Get a Dedicated VA
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
              Consistent Content Without Managing Freelancers
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Teleboots gives you a managed system — trained VA, onboarding,
              backup support, and oversight.
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