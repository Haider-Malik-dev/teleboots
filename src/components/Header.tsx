"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const virtualAssistantSubLinks = [
    { href: "/services/virtual-assistant/real-estate", label: "Real Estate VA" },
    { href: "/services/virtual-assistant/coaches-trainers", label: "VA for Coaches & Trainers" },
    { href: "/services/virtual-assistant/social-media-video", label: "Video editor & Social Media content VA" },
    { href: "/services/virtual-assistant/construction-&-contractors", label: "Construction & Contractors VA" },
    { href: "/services/virtual-assistant/general-admin", label: "General Admin VA" },
    { href: "/services/virtual-assistant/ghl-expert", label: "GoHighLevel Expert" },
  ];

  const services = [
    {
      href: "/services/virtual-assistant",
      label: "Virtual Assistant",
      children: virtualAssistantSubLinks,
    },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/lead-generation", label: "Lead Generation" },
    { href: "/services/content-social", label: "Content & Social Media" },
    { href: "/services/seo", label: "SEO & Visibility" },
    { href: "/services/email-marketing", label: "Email Marketing" },
  ];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onMouseDown = (e: MouseEvent) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = pathname.startsWith("/services");
  const activeStyle = "bg-[#F0EBE1] text-[#161412] font-semibold";

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        ref={panelRef}
        className="nav-pill relative flex items-center justify-between w-full max-w-6xl px-4 py-2.5 rounded-full gap-2"
      >
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <AppLogo
            text="Teleboots"
            size={32}
            iconName="BoltIcon"
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#7A7168]">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full transition-all font-body ${
              isActive("/") ? activeStyle : "hover:bg-[#F0EBE1] hover:text-[#161412]"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`px-4 py-2 rounded-full transition-all font-body flex items-center gap-1 ${
                isServicesActive
                  ? activeStyle
                  : "hover:bg-[#F0EBE1] hover:text-[#161412]"
              }`}
              type="button"
            >
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-card-lg border border-[#E2DAD0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {services.map((s) =>
                  "children" in s ? (
                    <div key={s.href} className="relative group/va">
                      <Link
                        href={s.href}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          pathname === s.href
                            ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                            : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                        }`}
                      >
                        {s.label}
                        <Icon name="ChevronRightIcon" size={14} />
                      </Link>

                      <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-2xl shadow-card-lg border border-[#E2DAD0] opacity-0 invisible group-hover/va:opacity-100 group-hover/va:visible transition-all duration-200">
                        <div className="py-2">
                          {s.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                                  : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === s.href
                          ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                          : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                      }`}
                    >
                      {s.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`px-4 py-2 rounded-full transition-all font-body ${
              isActive("/about") ? activeStyle : "hover:bg-[#F0EBE1] hover:text-[#161412]"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/portfolio"
            className={`px-4 py-2 rounded-full transition-all font-body ${
              isActive("/portfolio") ? activeStyle : "hover:bg-[#F0EBE1] hover:text-[#161412]"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full transition-all font-body ${
              isActive("/contact") ? activeStyle : "hover:bg-[#F0EBE1] hover:text-[#161412]"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E2DAD0] bg-white"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <Icon name={open ? "XMarkIcon" : "Bars3Icon"} size={18} />
          </button>

          <Link
            href="/contact"
            className="btn-teal px-5 py-2.5 rounded-full text-sm font-semibold font-heading"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full mt-3 transition-all duration-200 ${
            open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
        >
          <div className="mx-2 rounded-2xl border border-[#E2DAD0] bg-white shadow-card-lg overflow-hidden">
            <div className="p-2 space-y-1">
              <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-sm hover:bg-[#F0EBE1]">
                Home
              </Link>

              <div className="px-4 py-2 text-xs font-semibold tracking-wide text-[#A1968C] uppercase">
                Services
              </div>

              {services.map((s) =>
                "children" in s ? (
                  <div key={s.href}>
                    <Link
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="block pl-8 pr-4 py-2.5 text-sm hover:bg-[#F9F6F0]"
                    >
                      {s.label}
                    </Link>

                    <div className="ml-8 mt-1 pl-3 border-l border-[#E2DAD0] space-y-1">
                      {s.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block pr-4 py-2 text-sm hover:bg-[#F9F6F0]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block pl-8 pr-4 py-2.5 text-sm hover:bg-[#F9F6F0]"
                  >
                    {s.label}
                  </Link>
                )
              )}

              <Link href="/about" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#F0EBE1]">
                About Us
              </Link>
              <Link href="/portfolio" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#F0EBE1]">
                Portfolio
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#F0EBE1]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}