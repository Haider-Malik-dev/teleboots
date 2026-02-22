import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Teleboots",
  description:
    "Learn about Teleboots — a full-service digital agency helping businesses scale with virtual assistants, web development, lead generation, and growth systems.",
  keywords: ["about teleboots", "digital agency", "our story", "team", "virtual assistants", "web development", "lead generation"],
};

export default function AboutPage() {
  const values = [
    { icon: "BoltIcon", title: "Speed", description: "We move fast without compromising quality. Quick onboarding, rapid delivery." },
    { icon: "CheckBadgeIcon", title: "Quality", description: "Every team member is vetted, trained, and held to high standards." },
    { icon: "ChartBarIcon", title: "Results", description: "We’re obsessed with measurable outcomes. Your growth is the metric." },
    { icon: "HeartIcon", title: "Partnership", description: "We’re not just a vendor — we work as an extension of your team." },
  ];

  // Order matters: make the developer 4th (last)
  const team = [
    {
      name: "Sarmad Malik",
      role: "Founder & CEO",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
      alt: "Sarmad Malik - Founder and CEO of Teleboots",
    },
    {
      name: "Ahmed Shehzad",
      role: "Head of Operations",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
      alt: "Ahmed Shehzad - Head of Operations at Teleboots",
    },
    {
      name: "Abdul Haseeb",
      role: "Growth Director",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
      alt: "Abdul Haseeb - Growth Director at Teleboots",
    },
    {
      name: "Haider Malik",
      role: "Lead Developer",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
      alt: "Haider Malik - Lead Developer at Teleboots",
    },
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
              / About Teleboots
            </span>
            <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
              Built to Help You
              <br />
              <span className="text-gradient">Scale Faster</span>
            </h1>
            <p className="text-[#7A7168] font-body text-xl leading-relaxed">
              We’re a full-service digital agency helping founders and teams scale with elite support, modern web builds,
              and consistent lead flow — without the overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-5xl leading-tight tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#7A7168] font-body text-lg leading-relaxed">
                <p>
                  Teleboots was built to solve a common problem: businesses need reliable execution, but hiring full-time
                  teams is expensive and managing freelancers can be inconsistent.
                </p>
                <p>
                  So we created a simple model — a dedicated team that blends operational support with digital growth
                  services, working as an extension of your business.
                </p>
                <p>
                  From virtual assistants to web development and lead generation, our focus is straightforward: deliver
                  quality work, communicate clearly, and drive results you can measure.
                </p>
                <p className="font-semibold text-[#161412]">
                  Today, Teleboots supports growing brands with the people and systems they need to move faster.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_108a7f85a-1767613245607.png"
                  alt="Teleboots team collaborating in a modern workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / Our Values
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#0D9E8F]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{value.title}</h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / Meet The Team
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              The People Behind
              <br />
              <span className="text-gradient">Your Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative w-full h-80 rounded-3xl overflow-hidden mb-4 shadow-card">
                  <AppImage
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-1">{member.name}</h3>
                <p className="text-[#7A7168] font-body text-sm">{member.role}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              Let’s talk about how Teleboots can help you scale your business.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}