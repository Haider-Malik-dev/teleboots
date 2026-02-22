"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import { SocialIcon } from "react-social-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: "EnvelopeIcon", label: "Email", value: "info@teleboots.com", href: "mailto:info@teleboots.com" },
    { icon: "PhoneIcon", label: "Phone", value: "+92 312 5398738", href: "tel:+923125398738" },
    { icon: "MapPinIcon", label: "Office", value: " Safari, Behria town, Pakistan", href: null },
  ];

  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
              / Get In Touch
            </span>
            <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h1>
            <p className="text-[#7A7168] font-body text-xl leading-relaxed">
              Whether you need a VA, a website, or a full growth strategy — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#161412] mb-4">Contact Information</h2>
                <p className="text-[#7A7168] font-body text-base leading-relaxed">
                  Reach out and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D9E8F]/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={20} className="text-[#0D9E8F]" />
                    </div>
                    <div>
                      <div className="text-[#7A7168] font-body text-sm mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#161412] font-body text-base font-semibold hover:text-[#0D9E8F] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#161412] font-body text-base font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <div className="text-[#7A7168] font-body text-sm mb-3">Follow Us</div>
                  <div className="flex gap-3">
                    <SocialIcon
                      url="https://www.linkedin.com/company/teleboots/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ height: 40, width: 40 }}
                      bgColor="#ffffff"
                      fgColor="#161412"
                      className="transition-transform duration-200 hover:scale-110 hover:shadow-md"
                    />

                    <SocialIcon
                      url="https://www.instagram.com/teleboots.official"
                      target="_blank"
                      rel="noreferrer"
                      style={{ height: 40, width: 40 }}
                      bgColor="#ffffff"
                      fgColor="#161412"
                      className="transition-transform duration-200 hover:scale-110 hover:shadow-md"
                    />

                    <SocialIcon
                      url="https://www.facebook.com/profile.php?id=61568449402657"
                      target="_blank"
                      rel="noreferrer"
                      style={{ height: 40, width: 40 }}
                      bgColor="#ffffff"
                      fgColor="#161412"
                      className="transition-transform duration-200 hover:scale-110 hover:shadow-md"
                    />
                  </div>
                </div>
              </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="service-card rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-[#161412] font-body text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2DAD0] bg-[#FAF8F3] text-[#161412] font-body focus:outline-none focus:border-[#0D9E8F] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#161412] font-body text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2DAD0] bg-[#FAF8F3] text-[#161412] font-body focus:outline-none focus:border-[#0D9E8F] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-[#161412] font-body text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2DAD0] bg-[#FAF8F3] text-[#161412] font-body focus:outline-none focus:border-[#0D9E8F] transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-[#161412] font-body text-sm font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2DAD0] bg-[#FAF8F3] text-[#161412] font-body focus:outline-none focus:border-[#0D9E8F] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="va">Virtual Assistant</option>
                      <option value="webdev">Web Development</option>
                      <option value="leads">Lead Generation</option>
                      <option value="content">Content & Social Media</option>
                      <option value="seo">SEO & Visibility</option>
                      <option value="email">Email Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#161412] font-body text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2DAD0] bg-[#FAF8F3] text-[#161412] font-body focus:outline-none focus:border-[#0D9E8F] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading w-full md:w-auto"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}