"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const services = [
{
  id: "va",
  title: "Virtual Assistant",
  description:
  "Dedicated, trained VAs who handle admin, scheduling, inbox management, research, and more — freeing you to focus on growth.",
  icon: "UserGroupIcon",
  tag: "Most Popular",
  tagColor: "bg-[#CCFAF4] text-[#0D9E8F]",
  metrics: ["120+ VAs placed", "40 hrs/wk avg"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa210e07-1768343008045.png",
  imageAlt: "Professional virtual assistant working on computer with headset",
  tall: true,
  accent: "#0D9E8F"
},
{
  id: "webdev",
  title: "Web Development",
  description:
  "From landing pages to full-stack applications — we build fast, conversion-optimized websites that look premium and perform.",
  icon: "CodeBracketIcon",
  tag: "High Demand",
  tagColor: "bg-[#F0EBE1] text-[#C9A84C]",
  metrics: ["85+ sites launched", "React & Next.js"],
  image: null,
  imageAlt: "",
  tall: false,
  accent: "#C9A84C"
},
{
  id: "leads",
  title: "Lead Generation",
  description:
  "Targeted outreach campaigns, LinkedIn prospecting, and cold email sequences that deliver qualified leads to your pipeline.",
  icon: "FunnelIcon",
  tag: "ROI Proven",
  tagColor: "bg-[#CCFAF4] text-[#0D9E8F]",
  metrics: ["3,400+ leads/mo", "28% avg open rate"],
  image: null,
  imageAlt: "",
  tall: false,
  accent: "#0D9E8F"
},
{
  id: "content",
  title: "Content & Social Media",
  description:
  "Strategic content calendars, copywriting, graphic design, and community management to build your brand authority.",
  icon: "PencilSquareIcon",
  tag: "Brand Growth",
  tagColor: "bg-[#F0EBE1] text-[#7A7168]",
  metrics: ["50+ brands managed"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dffcc1c1-1764704595825.png",
  imageAlt: "Content creator working on social media graphics and strategy",
  tall: true,
  accent: "#7A7168"
},
{
  id: "seo",
  title: "SEO & Visibility",
  description:
  "On-page, technical, and off-page SEO strategies that move you from page 3 to position 1 — sustainably.",
  icon: "MagnifyingGlassIcon",
  tag: "Long-term",
  tagColor: "bg-[#F0EBE1] text-[#7A7168]",
  metrics: ["+180% avg traffic"],
  image: null,
  imageAlt: "",
  tall: false,
  accent: "#161412"
},
{
  id: "email",
  title: "Email Marketing",
  description:
  "Automated sequences, newsletters, and drip campaigns engineered to nurture leads and drive repeat revenue.",
  icon: "EnvelopeIcon",
  tag: "High ROI",
  tagColor: "bg-[#CCFAF4] text-[#0D9E8F]",
  metrics: ["42% avg open rate"],
  image: null,
  imageAlt: "",
  tall: false,
  accent: "#0D9E8F"
}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative z-10 bg-[#FAF8F3]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div
          className="animate-on-scroll mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ animation: "animationIn 0.8s ease-out 0.1s both", animationPlayState: "paused" }}>
          
          <div>
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
              / What We Do
            </span>
            <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
              Services Built
              <br />
              <span className="text-gradient">for Results</span>
            </h2>
          </div>
          <p className="text-[#7A7168] font-body text-lg max-w-md leading-relaxed">
            Every service is designed around one goal: measurable growth for your business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {services.map((service, idx) =>
          <div
            key={service.id}
            className={`animate-on-scroll service-card rounded-3xl overflow-hidden relative group cursor-pointer ${
            service.tall ? "lg:row-span-2" : ""}`
            }
            style={{
              animation: `animationIn 0.7s ease-out ${0.1 + idx * 0.08}s both`,
              animationPlayState: "paused"
            }}>
            
              {/* Image bg if tall */}
              {service.image &&
            <div className="absolute inset-0">
                  <AppImage
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40" />
                </div>
            }

              <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${service.accent}18` }}>
                    
                      <Icon name={service.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-[#161412]" />
                    </div>
                    <span className={`text-[10px] font-mono-custom uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#161412] mb-3">{service.title}</h3>
                  <p className="text-[#7A7168] font-body text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Bottom metrics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.metrics.map((m) =>
                <span
                  key={m}
                  className="text-[11px] font-mono-custom bg-[#F0EBE1] text-[#7A7168] px-3 py-1 rounded-full">
                  
                      {m}
                    </span>
                )}
                  <span className="ml-auto text-[#0D9E8F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-semibold font-heading">
                    Learn more <Icon name="ArrowRightIcon" size={14} />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}