    "use client";

    import { useState } from "react";
    import Icon from "@/components/ui/AppIcon";

    const faqs = [
    {
        q: "How quickly can you place a Virtual Assistant?",
        a: "Most clients have a dedicated VA onboarded and working within 3–5 business days. We handle screening, training, and matching — you just meet your new team member.",
    },
    {
        q: "What industries do you work with?",
        a: "We work across SaaS, consulting, e-commerce, real estate, healthcare admin, and professional services. Our team has specialists in each vertical.",
    },
    {
        q: "Do you offer fixed-price packages or hourly rates?",
        a: "Both. We offer monthly retainer packages for ongoing services and project-based pricing for web development. All pricing is transparent — no hidden fees.",
    },
    {
        q: "What makes your lead generation different from others?",
        a: "We don't just send volume. Every campaign is built around your ICP, with custom copywriting, multi-channel sequencing (email + LinkedIn), and real-time A/B testing. Average clients see 28%+ open rates.",
    },
    {
        q: "Can I scale up or down services as my business changes?",
        a: "Absolutely. Our model is designed for flexibility. Add more VA hours, launch a new campaign, or pause a service anytime — with 30 days notice for major changes.",
    },
    {
        q: "Is there a minimum contract length?",
        a: "We offer month-to-month for most services. For web development projects, we work in sprints with milestone-based billing. We earn your continued business every month.",
    },
    ];

    export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-24 relative z-10 bg-[#FAF8F3] border-t border-[#E2DAD0]">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-14">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-3 block">
                / Common Questions
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-[#161412] tracking-tight">
                Answers to
                <br />
                <span className="text-gradient">Your Questions</span>
            </h2>
            </div>

            <div className="space-y-2">
            {faqs.map((faq, i) => (
                <div
                key={i}
                className="border border-[#E2DAD0] rounded-2xl overflow-hidden bg-white hover:border-[#0D9E8F]/30 transition-colors"
                >
                <button
                    className="w-full flex items-center justify-between px-7 py-5 text-left focus:outline-none group"
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                >
                    <span className="font-heading font-semibold text-[#161412] text-base pr-4">{faq.q}</span>
                    <span
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E2DAD0] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0D9E8F] group-hover:border-[#0D9E8F]"
                    style={{
                        transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                        background: openIndex === i ? "#0D9E8F" : "transparent",
                        borderColor: openIndex === i ? "#0D9E8F" : "#E2DAD0",
                    }}
                    >
                    <Icon
                        name="PlusIcon"
                        size={16}
                        className={openIndex === i ? "text-white" : "text-[#7A7168]"}
                    />
                    </span>
                </button>

                <div className={`faq-content ${openIndex === i ? "open" : ""}`}>
                    <div className="faq-inner">
                    <p className="px-7 pb-6 text-[#7A7168] font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }