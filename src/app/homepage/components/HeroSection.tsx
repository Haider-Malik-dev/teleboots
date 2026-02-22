"use client";

import { useEffect, useRef } from "react";

import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";


export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    counters.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const duration = 1600;
      const start = performance.now();
      const update = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = prefix + (target % 1 === 0 ? Math.floor(target * ease) : (target * ease).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Ambient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#CCFAF4] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="lg:w-[52%] space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white border border-[#E2DAD0] px-4 py-2 rounded-full"
              style={{ animation: "animationIn 0.7s ease-out 0.1s both" }}>
              
              <span className="w-2 h-2 bg-[#0D9E8F] rounded-full pulse-glow" />
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#7A7168]">
                Agency · Est. 2020
              </span>
            </div>

            {/* Headline */}
            <div style={{ animation: "animationIn 0.8s ease-out 0.2s both" }}>
              <h1 className="font-heading font-extrabold text-[#161412] leading-[0.92] tracking-tight text-5xl md:text-7xl lg:text-[82px]">
                Scale Your
                <br />
                <span className="text-gradient">Business</span>
                <br />
                Without Limits.
              </h1>
            </div>

            {/* Sub */}
            <div style={{ animation: "animationIn 0.8s ease-out 0.35s both" }}>
              <p className="text-lg md:text-xl text-[#7A7168] font-body leading-relaxed max-w-lg">
                Teleboots delivers elite virtual assistants, custom web development, 
                and precision lead generation — everything your business needs to grow.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ animation: "animationIn 0.8s ease-out 0.45s both" }}>
              
              <a
                href="#contact"
                className="btn-teal px-8 py-4 rounded-2xl text-base font-semibold font-heading inline-flex items-center gap-2">
                
                Book a Free Strategy Call
                <Icon name="ArrowRightIcon" size={18} />
              </a>
              <a
                href="#services"
                className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold font-heading inline-flex items-center gap-2">
                
                <Icon name="Squares2X2Icon" size={18} />
                Explore Services
              </a>
            </div>

            {/* Micro stats */}
            <div
              className="flex items-center gap-8 pt-2"
              style={{ animation: "animationIn 0.8s ease-out 0.55s both" }}>
              
              {[
              { count: 200, suffix: "+", label: "Projects Delivered" },
              { count: 98, suffix: "%", label: "Client Satisfaction" },
              { count: 4, suffix: " yrs", label: "In Business" }].
              map((s) =>
              <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold font-heading text-[#161412]">
                    <span data-count={s.count} data-suffix={s.suffix}>0</span>
                  </div>
                  <div className="text-[11px] font-mono-custom uppercase tracking-widest text-[#7A7168] mt-0.5">
                    {s.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Floating visual */}
          <div
            className="lg:w-[48%] relative h-[520px] w-full"
            style={{ animation: "animationIn 0.9s ease-out 0.5s both" }}>
            
            {/* Main card */}
            <div className="absolute inset-4 lg:inset-0 rounded-4xl overflow-hidden shadow-card-lg border border-[#E2DAD0]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_156591603-1768567666760.png"
                alt="Teleboots team working on client projects in a modern office environment"
                fill
                className="object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#161412]/50 via-transparent to-transparent" />
            </div>

            {/* Floating card A — top left */}
            <div className="float-a absolute -left-6 top-10 glass-card rounded-2xl p-4 shadow-card w-52 z-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#CCFAF4] rounded-xl flex items-center justify-center">
                  <Icon name="UserGroupIcon" size={16} className="text-[#0D9E8F]" />
                </div>
                <span className="text-xs font-mono-custom uppercase tracking-wider text-[#7A7168]">VA Placed</span>
              </div>
              <div className="text-3xl font-extrabold font-heading text-[#161412]">120+</div>
              <div className="text-xs text-[#7A7168] mt-1 font-body">Virtual Assistants deployed this year</div>
            </div>

            {/* Floating card B — bottom right */}
            <div className="float-b absolute -right-4 bottom-16 glass-card rounded-2xl p-4 shadow-card w-56 z-20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-custom uppercase tracking-wider text-[#7A7168]">Lead Pipeline</span>
                <span className="text-[10px] bg-[#CCFAF4] text-[#0D9E8F] px-2 py-0.5 rounded-full font-semibold">Live</span>
              </div>
              <div className="text-3xl font-extrabold font-heading text-[#161412]">3,400+</div>
              <div className="text-xs text-[#7A7168] mt-1 font-body">Qualified leads generated this month</div>
            </div>

            {/* Floating card C — top right */}
            <div className="float-c absolute -right-2 top-8 glass-card rounded-xl p-3 shadow-card w-40 z-20">
              <div className="flex items-center gap-2">
                <Icon name="StarIcon" size={14} className="text-[#C9A84C]" variant="solid" />
                <span className="text-sm font-extrabold font-heading text-[#161412]">4.9 / 5.0</span>
              </div>
              <div className="text-[10px] text-[#7A7168] mt-1 font-body">Average client rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}