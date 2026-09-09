import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { WHY_RITA } from "../lib/site";
import { ArrowUpRight } from "lucide-react";
import { waLink, WA_DEFAULT_MSG } from "../lib/site";

export default function WhyRita() {
  return (
    <section
      id="why-rita"
      data-testid="why-rita-section"
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Why Rita
            </Eyebrow>
          </Reveal>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
            <MaskedLines
              animateOnLoad={false}
              lines={[
                <>INSURANCE, WITHOUT</>,
                <span className="italic text-gold">THE CONFUSION.</span>,
              ]}
            />
          </h2>
        </div>

        {/* Numbered manifesto chapters */}
        <div data-testid="why-rita-manifesto" className="mt-14 sm:mt-16">
          {WHY_RITA.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr_1.1fr_auto] gap-x-6 sm:gap-x-10 gap-y-3 items-start border-t border-line last:border-b py-8 sm:py-12 hover:bg-cream2/60 transition-colors duration-300 px-2 sm:px-6 -mx-2 sm:-mx-6 rounded-lg"
            >
              <span className="font-display italic text-4xl sm:text-6xl text-gold/90 leading-none">
                0{i + 1}
              </span>
              <h3 className="font-display font-medium text-xl sm:text-3xl text-ink leading-tight group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="col-span-2 md:col-span-1 text-sm sm:text-base text-ink2 leading-relaxed max-w-lg">
                {item.support}
              </p>
              <ArrowUpRight className="hidden md:block w-6 h-6 text-ink/20 group-hover:text-gold group-hover:rotate-45 transition-all duration-300 self-center" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="why-rita-cta-link"
            className="link-underline inline-flex items-center gap-2 font-semibold text-ink hover:text-golddark transition-colors"
          >
            Start with a free gap analysis
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
