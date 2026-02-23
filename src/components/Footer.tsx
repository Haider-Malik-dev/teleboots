"use client";

import AppLogo from "@/components/ui/AppLogo";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const serviceLinks = [
    { href: "/services/virtual-assistant", label: "Virtual Assistant" },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/lead-generation", label: "Lead Generation" },
    { href: "/services/content-social", label: "Content & Social Media" },
    { href: "/services/seo", label: "SEO & Visibility" },
    { href: "/services/email-marketing", label: "Email Marketing" },
  ];

  const vaSubLinks = [
    { href: "/services/virtual-assistant/real-estate", label: "Real Estate VA" },
    { href: "/services/virtual-assistant/coaches-trainers", label: "Coaches & Trainers VA" },
    { href: "/services/virtual-assistant/social-media-video", label: "Social Media & Video VA" },
    { href: "/services/virtual-assistant/construction-&-contractors", label: "Construction & Contractors VA" },
    { href: "/services/virtual-assistant/general-admin-va", label: "General Admin VA" },
    { href: "/services/virtual-assistant/ghl-expert", label: "GoHighLevel Expert VA" },
  ];

  return (
    <footer className="border-t border-[#E2DAD0] bg-[#FAF8F3] pt-14 pb-8 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Section */}
          <div>
            <Link href="/">
              <AppLogo
                text="Teleboots"
                size={32}
                iconName="BoltIcon"
                className="cursor-pointer"
              />
            </Link>

            <p className="text-sm text-[#7A7168] mt-4 leading-relaxed">
              Your remote team for admin support, web development,
              SEO and marketing — all under one roof.
            </p>

            <a
              href="mailto:info@teleboots.com"
              className="mt-4 inline-block text-sm font-semibold text-[#161412] hover:text-[#0D9E8F] transition-colors"
            >
              info@teleboots.com
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#161412] mb-4">
              Company
            </h4>

            <div className="flex flex-col gap-2 text-sm text-[#7A7168]">
              <Link href="/" className="hover:text-[#0D9E8F] transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#0D9E8F] transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="hover:text-[#0D9E8F] transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-[#0D9E8F] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#161412] mb-4">
              Services
            </h4>

            <div className="flex flex-col gap-2 text-sm text-[#7A7168]">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="hover:text-[#0D9E8F] transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* VA Specialties */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#161412] mb-4">
              VA Specialties
            </h4>

            <div className="flex flex-col gap-2 text-sm text-[#7A7168]">
              {vaSubLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#0D9E8F] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#161412] mb-4">
              Connect
            </h4>

            <div className="flex gap-3">
              <SocialIcon
                url="https://www.linkedin.com/company/teleboots/"
                target="_blank"
                rel="noreferrer"
                style={{ height: 40, width: 40 }}
                bgColor="#ffffff"
                fgColor="#161412"
                className="transition-transform duration-200 hover:scale-110"
              />

              <SocialIcon
                url="https://wa.me/923125398738"
                target="_blank"
                rel="noreferrer"
                style={{ height: 40, width: 40 }}
                bgColor="#ffffff"
                fgColor="#161412"
                className="transition-transform duration-200 hover:scale-110"
              />

              <SocialIcon
                url="https://www.instagram.com/teleboots.official"
                target="_blank"
                rel="noreferrer"
                style={{ height: 40, width: 40 }}
                bgColor="#ffffff"
                fgColor="#161412"
                className="transition-transform duration-200 hover:scale-110"
              />

              <SocialIcon
                url="https://www.facebook.com/profile.php?id=61568449402657"
                target="_blank"
                rel="noreferrer"
                style={{ height: 40, width: 40 }}
                bgColor="#ffffff"
                fgColor="#161412"
                className="transition-transform duration-200 hover:scale-110"
              />
            </div>

            <Link
              href="/contact"
              className="mt-5 inline-block btn-teal px-6 py-2.5 rounded-full text-sm font-semibold font-heading"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E2DAD0] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#7A7168] font-mono-custom">
          <span>© 2026 Teleboots Agency. All rights reserved.</span>

          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#0D9E8F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0D9E8F] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}