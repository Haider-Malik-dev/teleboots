import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";

type Section = {
  title: string;
  content?: string;
  bullets?: string[];
};

type VaServicePageProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  heroImage: { src: string; alt: string };
  sections: Section[];
  seoParagraph?: string;
  cta: { title: string; description: string; buttonText: string; buttonHref: string };
};

export default function VaServicePage({
  eyebrow,
  title,
  highlight,
  description,
  heroImage,
  sections,
  seoParagraph,
  cta,
}: VaServicePageProps) {
  return (
    <main className="relative bg-[#FAF8F3] overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-xs font-mono-custom uppercase tracking-widest text-[#0D9E8F] mb-4 block">
                {eyebrow}
              </span>

              <h1 className="font-heading font-extrabold text-[#161412] text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                {title}
                {highlight ? (
                  <>
                    <br />
                    <span className="text-gradient">{highlight}</span>
                  </>
                ) : null}
              </h1>

              <p className="text-[#7A7168] font-body text-xl leading-relaxed mb-8 max-w-xl">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={cta.buttonHref}
                  className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  {cta.buttonText}
                </Link>
                <Link
                  href="/services/virtual-assistant"
                  className="btn-outline px-8 py-4 rounded-full text-base font-semibold font-heading"
                >
                  Back to Virtual Assistant
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-card-lg">
                <AppImage src={heroImage.src} alt={heroImage.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="p-8 rounded-3xl bg-[#FAF8F3] border border-[#E2DAD0]">
                <h2 className="font-heading font-extrabold text-[#161412] text-2xl md:text-3xl mb-4">
                  {s.title}
                </h2>

                {s.content ? (
                  <p className="text-[#7A7168] font-body text-base leading-relaxed mb-4">{s.content}</p>
                ) : null}

                {s.bullets?.length ? (
                  <ul className="grid md:grid-cols-2 gap-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <span className="mt-1 w-2 h-2 rounded-full bg-[#0D9E8F] flex-shrink-0" />
                        <span className="text-[#161412] font-body text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {seoParagraph ? (
              <div className="text-[#7A7168] font-body text-base leading-relaxed">
                {seoParagraph}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="cta-card rounded-5xl p-12 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              {cta.title}
            </h2>
            <p className="text-[#CCFAF4] font-body text-xl mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <Link
              href={cta.buttonHref}
              className="btn-gold px-10 py-5 rounded-full text-lg font-semibold font-heading inline-block"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}