import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2DAD0] bg-[#FAF8F3] pt-12 pb-8 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/homepage">
            <AppLogo text="Teleboots" size={32} iconName="BoltIcon" className="cursor-pointer" />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#7A7168]">
            <Link href="/homepage" className="hover:text-[#0D9E8F] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#0D9E8F] transition-colors">About</Link>
            <Link href="/homepage#services" className="hover:text-[#0D9E8F] transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-[#0D9E8F] transition-colors">Portfolio</Link>
            <Link href="/contact" className="hover:text-[#0D9E8F] transition-colors">Contact</Link>
          </nav>

          {/* Social + Legal */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-[#E2DAD0] flex items-center justify-center text-[#7A7168] hover:bg-[#0D9E8F] hover:text-white hover:border-[#0D9E8F] transition-all"
            >
              <Icon name="GlobeAltIcon" size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#E2DAD0] flex items-center justify-center text-[#7A7168] hover:bg-[#0D9E8F] hover:text-white hover:border-[#0D9E8F] transition-all"
            >
              <Icon name="BriefcaseIcon" size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2DAD0] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#7A7168] font-mono-custom">
          <span>© 2026 Teleboots Agency. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#0D9E8F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0D9E8F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}