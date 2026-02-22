"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const testimonials = [
{
  id: "t1",
  quote:
  "Teleboots placed a VA who handles 40+ hours of admin work every week. We scaled from 5 to 22 clients in 6 months without hiring anyone full-time.",
  name: "Sarah Mitchell",
  role: "CEO, Bright Path Consulting",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb18e0a9-1763297020873.png",
  avatarAlt: "Sarah Mitchell, CEO of Bright Path Consulting, professional headshot",
  metric: "4.4× revenue growth",
  stars: 5
},
{
  id: "t2",
  quote:
  "The lead gen team built a cold email system that fills our calendar every week. We went from 2 demos a week to 14 — consistently.",
  name: "Daniel Okonkwo",
  role: "Founder, Apex SaaS",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1373c1c56-1763291648235.png",
  avatarAlt: "Daniel Okonkwo, founder of Apex SaaS, professional headshot",
  metric: "7× demo volume",
  stars: 5
},
{
  id: "t3",
  quote:
  "Our new website cut our bounce rate in half and doubled conversion. The Teleboots dev team understood our brand better than we did.",
  name: "Priya Sharma",
  role: "Marketing Director, NovaBrand",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
  avatarAlt: "Priya Sharma, Marketing Director at NovaBrand, professional headshot",
  metric: "2× conversion rate",
  stars: 5
}];


const metrics = [
{ value: "200+", label: "Projects Delivered", icon: "BriefcaseIcon" },
{ value: "$12M+", label: "Revenue Generated for Clients", icon: "CurrencyDollarIcon" },
{ value: "98%", label: "Client Retention Rate", icon: "HeartIcon" },
{ value: "3,400+", label: "Leads Generated / Month", icon: "FunnelIcon" }];


export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={sectionRef} className="py-24 relative z-10 bg-[#FAF8F3]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div
          className="animate-on-scroll text-center mb-16"
          style={{ animation: "animationIn 0.8s ease-out 0.1s both", animationPlayState: "paused" }}>
          
          <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
            / Proof of Work
          </span>
          <h2 className="font-heading font-extrabold text-[#161412] text-4xl md:text-6xl leading-tight tracking-tight">
            Real Results,
            <br />
            <span className="text-gradient">Real Clients</span>
          </h2>
        </div>

        {/* Metrics bar */}
        <div
          className="animate-on-scroll grid grid-cols-2 lg:grid-cols-4 border border-[#E2DAD0] bg-white rounded-3xl overflow-hidden mb-16"
          style={{ animation: "animationIn 0.8s ease-out 0.2s both", animationPlayState: "paused" }}>
          
          {metrics.map((m, i) =>
          <div
            key={m.label}
            className={`p-8 flex flex-col items-center text-center gap-3 group hover:bg-[#F0EBE1] transition-colors ${
            i < metrics.length - 1 ? "border-r border-[#E2DAD0]" : ""} ${
            i >= 2 ? "border-t lg:border-t-0 border-[#E2DAD0]" : ""}`}>
            
              <div className="w-10 h-10 bg-[#CCFAF4] rounded-xl flex items-center justify-center">
                <Icon name={m.icon as Parameters<typeof Icon>[0]["name"]} size={20} className="text-[#0D9E8F]" />
              </div>
              <div className="text-3xl font-extrabold font-heading text-[#161412]">{m.value}</div>
              <div className="text-xs font-mono-custom uppercase tracking-wider text-[#7A7168] leading-tight">
                {m.label}
              </div>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) =>
          <div
            key={t.id}
            className="animate-on-scroll testimonial-card p-8 flex flex-col justify-between"
            style={{
              animation: `animationIn 0.7s ease-out ${0.2 + idx * 0.1}s both`,
              animationPlayState: "paused"
            }}>
            
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) =>
              <Icon key={si} name="StarIcon" size={16} className="text-[#C9A84C]" variant="solid" />
              )}
              </div>

              {/* Quote */}
              <blockquote className="text-[#2A2520] font-body text-base leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              {/* Metric pill */}
              <div className="inline-flex items-center gap-2 bg-[#CCFAF4] text-[#0D9E8F] px-3 py-1.5 rounded-full text-xs font-mono-custom uppercase tracking-wider mb-6 self-start">
                <Icon name="ArrowTrendingUpIcon" size={12} />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#E2DAD0]">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E2DAD0]">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-[#161412]">{t.name}</div>
                  <div className="text-xs font-body text-[#7A7168]">{t.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}