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

  // Close menu on route change (important in Next.js)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const services = [
    { href: "/services/virtual-assistant", label: "Virtual Assistant" },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/lead-generation", label: "Lead Generation" },
    { href: "/services/content-social", label: "Content & Social Media" },
    { href: "/services/seo", label: "SEO & Visibility" },
    { href: "/services/email-marketing", label: "Email Marketing" },
  ];

  const isActive = (href: string) => pathname === href;
  const isServicesActive = pathname.startsWith("/services");

  const activeStyle = "bg-[#F0EBE1] text-[#161412] font-semibold";

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      {/* attach ref here so outside-click works */}
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

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#7A7168]">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full transition-all text-sm font-body ${isActive("/")
                ? activeStyle
                : "hover:bg-[#F0EBE1] hover:text-[#161412]"
              }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`px-4 py-2 rounded-full transition-all text-sm font-body flex items-center gap-1 ${isServicesActive
                  ? activeStyle
                  : "hover:bg-[#F0EBE1] hover:text-[#161412]"
                }`}
              type="button"
            >
              Services
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-card-lg border border-[#E2DAD0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${pathname === s.href
                        ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                        : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                      }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`px-4 py-2 rounded-full transition-all text-sm font-body ${isActive("/about")
                ? activeStyle
                : "hover:bg-[#F0EBE1] hover:text-[#161412]"
              }`}
          >
            About Us
          </Link>

          <Link
            href="/portfolio"
            className={`px-4 py-2 rounded-full transition-all text-sm font-body ${isActive("/portfolio")
                ? activeStyle
                : "hover:bg-[#F0EBE1] hover:text-[#161412]"
              }`}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full transition-all text-sm font-body ${isActive("/contact")
                ? activeStyle
                : "hover:bg-[#F0EBE1] hover:text-[#161412]"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E2DAD0] bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            <Icon name={open ? "XMarkIcon" : "Bars3Icon"} size={18} />
          </button>

          <Link
            href="/contact"
            className={`btn-teal px-5 py-2.5 rounded-full text-sm font-semibold font-heading ${isActive("/contact") ? "ring-2 ring-offset-2 ring-[#0D9E8F]" : ""
              }`}
          >
            Get Started
          </Link>
        </div>

        {/* ✅ Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute left-0 right-0 top-full mt-3 transition-all duration-200 ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
            }`}
        >
          <div className="mx-2 rounded-2xl border border-[#E2DAD0] bg-white shadow-card-lg overflow-hidden">
            <div className="p-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm ${isActive("/")
                    ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                    : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                  }`}
              >
                Home
              </Link>

              <div className="mt-2">
                <div className="px-4 py-2 text-xs font-semibold tracking-wide text-[#A1968C] uppercase">
                  Services
                </div>

                <div className="space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className={`block pl-8 pr-4 py-2.5 text-sm rounded-lg transition-all ${pathname === s.href
                          ? "text-[#161412] font-medium border-l-2 border-[#0D9E8F] bg-[#F9F6F0]"
                          : "text-[#7A7168] hover:text-[#161412] hover:bg-[#F9F6F0]"
                        }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-1">
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm ${isActive("/about")
                      ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                      : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                    }`}
                >
                  About Us
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm ${isActive("/portfolio")
                      ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                      : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                    }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm ${isActive("/contact")
                      ? "bg-[#F0EBE1] text-[#161412] font-semibold"
                      : "text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412]"
                    }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}