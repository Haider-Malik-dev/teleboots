import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content & Social Media Services — Teleboots",
  description: "Strategic content calendars, copywriting, graphic design, and community management to build your brand authority.",
  keywords: ["content marketing", "social media management", "copywriting", "brand strategy", "teleboots"],
};

export default function ContentSocialPage() {
  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#7A7168] mb-4 block">
                / Content & Social Media
              </span>
              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                Build Your Brand
                <br />
                <span className="text-gradient">Authority</span>
              </h1>
              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                Strategic content calendars, copywriting, graphic design, and community management to build your brand authority.
              </p>
              <Link href="/contact" className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading">
                Get Started
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1dffcc1c1-1764704595825.png"
                  alt="Content creator working on social media graphics and strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10 border-y border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Brands Managed" },
              { value: "1M+", label: "Impressions/Month" },
              { value: "5.2%", label: "Avg Engagement" },
              { value: "100+", label: "Posts/Month" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-[#7A7168] mb-2">{stat.value}</div>
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
              { icon: "PencilSquareIcon", title: "Content Strategy", desc: "Custom calendars aligned with your goals" },
              { icon: "PhotoIcon", title: "Graphic Design", desc: "Eye-catching visuals for all platforms" },
              { icon: "ChatBubbleLeftRightIcon", title: "Community Management", desc: "Engage and grow your audience" },
            ].map((item) => (
              <div key={item.title} className="service-card rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#7A7168]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={28} className="text-[#7A7168]" />
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