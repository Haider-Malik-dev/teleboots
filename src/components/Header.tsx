import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";

export default function Header() {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="nav-pill flex items-center justify-between w-full max-w-6xl px-4 py-2.5 rounded-full gap-2">
        <Link href="/homepage">
          <AppLogo text="Teleboots" size={32} iconName="BoltIcon" className="cursor-pointer" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#7A7168]">
          <Link
            href="/homepage"
            className="px-4 py-2 rounded-full hover:bg-[#F0EBE1] hover:text-[#161412] transition-all text-sm font-body"
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 rounded-full hover:bg-[#F0EBE1] hover:text-[#161412] transition-all text-sm font-body flex items-center gap-1">
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-card-lg border border-[#E2DAD0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link href="/services/virtual-assistant" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  Virtual Assistant
                </Link>
                <Link href="/services/web-development" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  Web Development
                </Link>
                <Link href="/services/lead-generation" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  Lead Generation
                </Link>
                <Link href="/services/content-social" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  Content & Social Media
                </Link>
                <Link href="/services/seo" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  SEO & Visibility
                </Link>
                <Link href="/services/email-marketing" className="block px-4 py-2.5 text-sm text-[#7A7168] hover:bg-[#F0EBE1] hover:text-[#161412] transition-colors">
                  Email Marketing
                </Link>
              </div>
            </div>
          </div>
          
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-[#F0EBE1] hover:text-[#161412] transition-all text-sm font-body"
          >
            About Us
          </Link>
          <Link
            href="/portfolio"
            className="px-4 py-2 rounded-full hover:bg-[#F0EBE1] hover:text-[#161412] transition-all text-sm font-body"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full hover:bg-[#F0EBE1] hover:text-[#161412] transition-all text-sm font-body"
          >
            Contact
          </Link>
        </div>
        
        <Link
          href="/contact"
          className="btn-teal px-5 py-2.5 rounded-full text-sm font-semibold font-heading"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}