import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Teleboots Agency",
  description: "Learn about Teleboots - a full-service digital agency helping businesses scale with virtual assistants, web development, and lead generation.",
  keywords: ["about teleboots", "digital agency", "our story", "team"]
};

export default function AboutPage() {
  const values = [
  { icon: "BoltIcon", title: "Speed", description: "We move fast without compromising quality. 48-hour onboarding, rapid delivery." },
  { icon: "CheckBadgeIcon", title: "Quality", description: "Every team member is vetted, trained, and held to the highest standards." },
  { icon: "ChartBarIcon", title: "Results", description: "We\'re obsessed with measurable outcomes. Your growth is our success metric." },
  { icon: "HeartIcon", title: "Partnership", description: "We're not just a vendor - we're an extension of your team." }];


  const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cabeee76-1763296842628.png",
    alt: "Sarah Chen - Founder and CEO of Teleboots"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
    alt: "Marcus Rodriguez - Head of Operations at Teleboots"
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb03ff52-1768866917631.png",
    alt: "Emily Watson - Lead Developer at Teleboots"
  },
  {
    name: "David Kim",
    role: "Growth Director",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_127a9d0c9-1766527395621.png",
    alt: "David Kim - Growth Director at Teleboots"
  }];


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
              We're a full-service digital agency on a mission: to give every business access to elite talent and proven growth strategies — without the overhead.
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
                  Teleboots started in 2019 when our founder, Sarah Chen, was running a fast-growing startup and struggling to find reliable, affordable talent to handle the day-to-day operations.
                </p>
                <p>
                  She realized the problem wasn't unique to her — thousands of businesses were stuck between expensive agencies and unreliable freelancers.
                </p>
                <p>
                  So we built Teleboots: a hybrid model combining the best of both worlds. Elite talent, agency-level quality, freelancer-level flexibility.
                </p>
                <p className="font-semibold text-[#161412]">
                  Today, we've helped 300+ businesses scale with virtual assistants, web development, lead generation, and more.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_108a7f85a-1767613245607.png"
                  alt="Teleboots team collaborating in modern office space"
                  fill
                  className="object-cover" />
                
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
            {values.map((value) =>
            <div key={value.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#0D9E8F]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{value.title}</h3>
                <p className="text-[#7A7168] font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            )}
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
            {team.map((member) =>
            <div key={member.name} className="group">
                <div className="relative w-full h-80 rounded-3xl overflow-hidden mb-4 shadow-card">
                  <AppImage
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                <h3 className="font-heading font-bold text-xl text-[#161412] mb-1">{member.name}</h3>
                <p className="text-[#7A7168] font-body text-sm">{member.role}</p>
              </div>
            )}
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
              Let's talk about how we can help you scale your business.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}