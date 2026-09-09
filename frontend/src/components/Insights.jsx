import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { ARTICLES } from "../lib/content";
import { waLink } from "../lib/site";

export default function Insights() {
  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" />
                Insights &amp; Guides
              </Eyebrow>
            </Reveal>
            <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
              <MaskedLines
                animateOnLoad={false}
                lines={[
                  <>NOTES FOR SMART,</>,
                  <span className="italic text-gold">SAFE DECISIONS.</span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-ink2 leading-relaxed sm:text-right">
              Short, jargon-free reads on life insurance in India — written the
              way Rita explains it to families every day.
            </p>
          </Reveal>
        </div>

        <div
          data-testid="insights-grid"
          className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {ARTICLES.map((article, i) => (
            <Reveal
              key={article.title}
              delay={i * 0.08}
              className="group h-full"
            >
              <article
                data-testid={`insights-card-${i + 1}`}
                className="h-full flex flex-col bg-white border border-line rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_-35px_rgba(11,19,43,0.3)] hover:shadow-[0_30px_70px_-35px_rgba(11,19,43,0.45)] hover:-translate-y-1 transition-all duration-500"
              >
                <span className="w-fit font-mono text-[10px] uppercase tracking-[0.22em] text-golddark bg-[rgba(197,160,89,0.12)] rounded-full px-3 py-1.5">
                  {article.tag}
                </span>
                <h3 className="mt-5 font-display font-medium text-xl sm:text-2xl text-ink leading-snug">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink2 flex-1">
                  {article.excerpt}
                </p>
                <a
                  href={waLink(article.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`insights-cta-${i + 1}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-golddark transition-colors"
                >
                  Ask Rita about this
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
