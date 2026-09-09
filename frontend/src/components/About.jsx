import { Reveal, Eyebrow, MaskedLines, EASE } from "./motion";
import { STATS, ABOUT_PORTRAIT } from "../lib/site";
import { SPECIALTIES, AREAS_SERVED } from "../lib/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          {/* Portrait */}
          <Reveal className="relative order-2 lg:order-1 lg:sticky lg:top-28">
            {/* gallery frame */}
            <div className="bg-white border border-line rounded-[2rem] p-3 sm:p-4 shadow-[0_30px_80px_-40px_rgba(11,19,43,0.35)] max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <motion.img
                  src={ABOUT_PORTRAIT}
                  alt="Rita Sharma"
                  data-testid="about-portrait"
                  initial={{ scale: 1.28 }}
                  whileInView={{ scale: 1.12 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 2.4, ease: EASE }}
                  className="w-full h-[560px] sm:h-[640px] object-cover"
                  style={{ objectPosition: "50% 26%" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent"
                />
                <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/90">
                  Rita Sharma — Kathua, Jammu &amp; Kashmir
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy + stats */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" />
                About Rita
              </Eyebrow>
            </Reveal>

            <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
              <MaskedLines
                animateOnLoad={false}
                lines={[
                  <>15+ YEARS OF TRUST.</>,
                  <span className="italic text-gold">ONE SIMPLE PROMISE.</span>,
                ]}
              />
            </h2>

            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-base sm:text-lg text-ink2 leading-relaxed">
              <p>
                Rita Sharma is an experienced life insurance advisor based in
                Kathua, Jammu &amp; Kashmir. For over fifteen years, she has
                guided families across India through the decisions that matter
                most — choosing the right term insurance, reviewing existing
                LIC and savings policies, and planning for the milestones that
                shape a family&rsquo;s future.
              </p>
              <p>
                Her clients are young professionals buying their first term
                plan, newly married couples aligning their finances, and
                parents securing their children&rsquo;s education. Every
                engagement begins the same way: with a free, personalized
                financial gap analysis — what you already have, what your
                family would need, and the exact distance between the two.
              </p>
              <p>
                The advice continues long after the policy is issued. Rita
                stays a single point of contact for premium servicing, nominee
                updates and claim assistance — over WhatsApp, video call or in
                person around Kathua and Jammu.
              </p>
              <p className="font-display italic text-ink text-xl sm:text-2xl leading-snug border-l-2 border-gold pl-5">
                One simple promise: advice you would give your own family.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
                Areas of guidance
              </p>
              <div
                data-testid="about-specialties"
                className="mt-4 flex flex-wrap gap-2.5"
              >
                {SPECIALTIES.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-white px-4 py-2 text-xs sm:text-sm font-medium text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                data-testid="about-areas"
                className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50"
              >
                {AREAS_SERVED}
              </p>
            </Reveal>

            {/* Stats */}
            <div
              data-testid="about-stats"
              className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10"
            >
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="border-t border-line pt-5">
                  <p className="font-display font-semibold text-4xl sm:text-5xl text-ink">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
