"use client";

const items = [
  "Virtual Assistant",
  "Web Development",
  "Lead Generation",
  "Content Creation",
  "Social Media Management",
  "Email Marketing",
  "SEO Optimization",
  "Data Entry",
  "Customer Support",
  "Graphic Design",
  "CRM Setup",
  "Automation",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-[#E2DAD0] bg-[#F0EBE1]/60 py-5 overflow-hidden relative z-10">
      <div className="marquee-wrap">
        <div className="marquee-track flex gap-0 whitespace-nowrap w-max">
          {doubled?.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-4 px-8 text-sm font-semibold font-mono-custom uppercase tracking-widest text-[#7A7168]"
            >
              <span className="w-1.5 h-1.5 bg-[#0D9E8F] rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}