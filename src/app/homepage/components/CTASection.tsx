"use client";

import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point: POST /api/contact with formData
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 overflow-hidden">
      <div className="cta-bg py-24 relative">
        {/* Ambient */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0D9E8F]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
                / Start Today
              </span>
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white leading-tight tracking-tight mb-6">
                Ready to
                <br />
                <span className="text-gradient-teal">Scale Faster?</span>
              </h2>
              <p className="text-white/60 font-body text-lg leading-relaxed mb-10 max-w-md">
                Book a free 30-minute strategy call. We'll audit your current setup and show you exactly where Teleboots can add leverage.
              </p>

              {/* Trust signals */}
              <div className="space-y-4">
                {[
                  "Free strategy call — no commitment",
                  "Response within 4 business hours",
                  "Month-to-month, cancel anytime",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#0D9E8F]/20 border border-[#0D9E8F]/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckIcon" size={11} className="text-[#0D9E8F]" />
                    </span>
                    <span className="text-white/70 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href="mailto:hello@teleboots.com"
                  className="flex items-center gap-3 text-white/50 hover:text-[#0D9E8F] transition-colors font-body text-sm"
                >
                  <Icon name="EnvelopeIcon" size={16} className="text-[#0D9E8F]" />
                  hello@teleboots.com
                </a>
                <a
                  href="tel:+13125550194"
                  className="flex items-center gap-3 text-white/50 hover:text-[#0D9E8F] transition-colors font-body text-sm"
                >
                  <Icon name="PhoneIcon" size={16} className="text-[#0D9E8F]" />
                  +1 (312) 555-0194
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 bg-[#CCFAF4] rounded-full flex items-center justify-center">
                    <Icon name="CheckIcon" size={28} className="text-[#0D9E8F]" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">Message Sent!</h3>
                  <p className="text-white/60 font-body text-sm">We'll be in touch within 4 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono-custom uppercase tracking-widest text-white/40 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:border-[#0D9E8F] focus:outline-none transition-colors"
                        placeholder="Alex Johnson"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-custom uppercase tracking-widest text-white/40 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:border-[#0D9E8F] focus:outline-none transition-colors"
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom uppercase tracking-widest text-white/40 mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:border-[#0D9E8F] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#161412]">Select a service...</option>
                      <option value="va" className="bg-[#161412]">Virtual Assistant</option>
                      <option value="webdev" className="bg-[#161412]">Web Development</option>
                      <option value="leads" className="bg-[#161412]">Lead Generation</option>
                      <option value="content" className="bg-[#161412]">Content & Social Media</option>
                      <option value="seo" className="bg-[#161412]">SEO & Visibility</option>
                      <option value="email" className="bg-[#161412]">Email Marketing</option>
                      <option value="other" className="bg-[#161412]">Other / Multiple</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom uppercase tracking-widest text-white/40 mb-2">
                      Tell Us About Your Goal
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:border-[#0D9E8F] focus:outline-none transition-colors resize-none"
                      placeholder="e.g. We need a VA for 20 hrs/week to handle customer support and admin..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-teal w-full py-4 rounded-xl font-heading font-bold text-base inline-flex items-center justify-center gap-2"
                  >
                    Book My Free Strategy Call
                    <Icon name="ArrowRightIcon" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}