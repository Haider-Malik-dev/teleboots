"use client";

import { useEffect, useRef } from "react";

const words = [
  { text: "Stop", highlight: false },
  { text: "paying", highlight: false },
  { text: "full-time", highlight: false },
  { text: "salaries", highlight: false },
  { text: "for", highlight: false },
  { text: "part-time", highlight: "box" },
  { text: "results.", highlight: false },
  { text: "Teleboots", highlight: "teal" },
  { text: "gives", highlight: false },
  { text: "you", highlight: false },
  { text: "elite", highlight: false },
  { text: "talent", highlight: false },
  { text: "on", highlight: false },
  { text: "demand,", highlight: false },
  { text: "only", highlight: false },
  { text: "when", highlight: false },
  { text: "you", highlight: false },
  { text: "need", highlight: false },
  { text: "it.", highlight: false },
];

export default function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const startReveal = winH * 0.85;
      const endReveal = winH * 0.35;
      let progress = (startReveal - rect.top) / (startReveal - endReveal);
      progress = Math.max(0, Math.min(1, progress));
      const activeCount = Math.floor(progress * wordRefs.current.length);
      wordRefs.current.forEach((w, i) => {
        if (!w) return;
        if (i < activeCount) w.classList.add("active");
        else w.classList.remove("active");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 border-y border-[#E2DAD0] bg-[#F0EBE1] relative z-10 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#CCFAF4] blur-[160px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <p className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight">
          {words.map((w, i) => {
            if (w.highlight === "teal") {
              return (
                <span
                  key={i}
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="reveal-word inline-block bg-[#0D9E8F] text-white px-3 py-1 mx-1 rounded-lg"
                >
                  {w.text}
                </span>
              );
            }
            if (w.highlight === "box") {
              return (
                <span
                  key={i}
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="reveal-word inline-block border-2 border-[#E2DAD0] bg-white text-[#161412] px-3 py-1 mx-1 rounded-lg"
                >
                  {w.text}
                </span>
              );
            }
            return (
              <span
                key={i}
                ref={(el) => { wordRefs.current[i] = el; }}
                className="reveal-word inline-block text-[#161412] mx-1"
              >
                {w.text}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}