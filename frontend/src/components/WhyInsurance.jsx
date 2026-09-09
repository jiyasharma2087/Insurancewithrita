import { Wallet, Home, GraduationCap, Umbrella, Quote } from "lucide-react";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { WHY_INSURANCE, FAMILY_PHOTO } from "../lib/site";

const ICONS = [Wallet, Home, GraduationCap, Umbrella];

export default function WhyInsurance() {
  return (
    <section
      id="why-insurance"
      data-testid="why-insurance-section"
      className="py-20 sm:py-28 lg:py-36 bg-cream2/50 border-y border-line/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <Eyebrow className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" />
                Why Insurance
              </Eyebrow>
            </Reveal>
            <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
              <MaskedLines
                animateOnLoad={false}
                lines={[
                  <>YOUR FUTURE</>,
                  <>DESERVES</>,
                  <span className="italic text-gold">A PLAN.</span>,
                ]}
              />
            </h2>
            <Reveal delay={0.15}>
              <div className="mt-10 relative rounded-2xl bg-cream border border-line p-7 sm:p-8 shadow-[0_20px_50px_-30px_rgba(11,19,43,0.25)]">
                <Quote className="w-7 h-7 text-gold" />
                <p className="mt-4 font-display italic text-lg sm:text-xl text-ink leading-snug">
                  Insurance isn&rsquo;t about expecting the worst. It&rsquo;s
                  about being prepared for whatever life brings.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — editorial numbered list */}
          <div data-testid="why-insurance-list" className="flex flex-col">
            {WHY_INSURANCE.map((point, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal
                  key={point.title}
                  delay={i * 0.07}
                  className="group border-t border-line last:border-b py-8 sm:py-10 flex gap-6 sm:gap-8 items-start hover:bg-cream/70 transition-colors duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
                >
                  <span className="font-mono text-sm text-gold pt-1.5 shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-medium text-xl sm:text-2xl text-ink group-hover:text-golddark transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-ink2 leading-relaxed max-w-md">
                      {point.support}
                    </p>
                  </div>
                  <span className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-line text-ink group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Family photo band — the reason behind every plan */}
        <Reveal
          testid="family-photo-band"
          className="mt-16 sm:mt-20 relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(11,19,43,0.4)]"
        >
          <img
            src={FAMILY_PHOTO}
            alt="A young family together — the reason behind every plan"
            data-testid="family-photo"
            className="w-full h-[300px] sm:h-[440px] object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent"
          />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold">
              The reason behind every plan
            </p>
            <p className="mt-2 font-display italic text-2xl sm:text-4xl text-cream leading-snug max-w-md">
              Every policy is really about moments like this.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
