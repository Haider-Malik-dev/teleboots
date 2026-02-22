"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start with a deep-dive consultation to understand your goals, bottlenecks, and ideal outcomes. From this, we build a custom growth roadmap tailored to your business.",
    bullets: ["Business audit", "Goal alignment", "Custom roadmap", "KPI definition"],
    icon: "MagnifyingGlassIcon",
  },
  {
    num: "02",
    title: "Team Assembly & Build",
    desc: "We match you with the right talent and tools — whether that's a dedicated VA, a dev team, or a lead gen campaign. Everything is set up, tested, and optimized before launch.",
    bullets: ["Talent matching", "Onboarding sprint", "System setup", "QA & testing"],
    icon: "WrenchScrewdriverIcon",
  },
  {
    num: "03",
    title: "Deliver & Scale",
    desc: "With everything running, we monitor performance, report results weekly, and continuously optimize. As you grow, we scale our support to match — no friction.",
    bullets: ["Weekly reporting", "Continuous optimization", "Scale-on-demand", "Dedicated support"],
    icon: "RocketLaunchIcon",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-step") || "0");
            setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative z-10 border-y border-[#E2DAD0] bg-[#F0EBE1]/50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Sticky right panel */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-16 lg:pl-16 border-l border-[#E2DAD0]/0 lg:border-[#E2DAD0]">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
              / How It Works
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-[#161412] tracking-tight leading-tight mb-10">
              Three Steps to
              <br />
              <span className="text-gradient-teal">Growth</span>
            </h2>

            {/* Step triggers */}
            <div className="space-y-6 mb-10 hidden lg:block">
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-5 cursor-pointer" onClick={() => {
                  stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}>
                  <div className="flex-shrink-0 h-14 w-[3px] rounded-full relative overflow-hidden bg-[#E2DAD0]">
                    <div
                      className="absolute top-0 left-0 w-full transition-all duration-500 rounded-full"
                      style={{
                        height: activeStep === i ? "100%" : "0%",
                        background: "#0D9E8F",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-heading font-bold text-lg tracking-tight transition-colors duration-300"
                      style={{ color: activeStep === i ? "#161412" : "#7A7168" }}
                    >
                      {step.num} / {step.title}
                    </div>
                    <div
                      className="text-sm font-body transition-colors duration-300"
                      style={{ color: activeStep === i ? "#7A7168" : "#B5ADA5" }}
                    >
                      {step.bullets[0]} · {step.bullets[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual preview */}
            <div className="hidden lg:block relative w-full aspect-video bg-white border border-[#E2DAD0] rounded-3xl overflow-hidden">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out"
                  style={{
                    opacity: activeStep === i ? 1 : 0,
                    transform: activeStep === i ? "scale(1)" : "scale(0.95)",
                    pointerEvents: activeStep === i ? "auto" : "none",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4"
                    style={{ background: "#CCFAF4" }}
                  >
                    <Icon name={step.icon as Parameters<typeof Icon>[0]["name"]} size={36} className="text-[#0D9E8F]" />
                  </div>
                  <div className="text-6xl font-extrabold font-heading text-[#161412]/8">{step.num}</div>
                  <div className="font-heading font-bold text-[#161412] text-lg mt-1">{step.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable left steps */}
          <div className="lg:w-1/2 lg:pr-16">
            <div className="h-[15vh] hidden lg:block" />
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el; }}
                data-step={i}
                className="min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center py-16 border-b border-[#E2DAD0] last:border-b-0"
              >
                <span className="text-7xl font-extrabold font-heading text-[#161412]/6 mb-4 block">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-3xl text-[#161412] mb-5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#7A7168] font-body text-lg leading-relaxed mb-8 max-w-md">
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-body text-[#7A7168]">
                      <span className="w-5 h-5 rounded-full bg-[#CCFAF4] flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckIcon" size={12} className="text-[#0D9E8F]" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="h-[15vh] hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}