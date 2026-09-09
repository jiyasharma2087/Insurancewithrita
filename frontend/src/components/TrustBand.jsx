import { ShieldCheck, HandHeart, MessagesSquare } from "lucide-react";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { TRUST_POINTS } from "../lib/site";

const ICONS = [ShieldCheck, HandHeart, MessagesSquare];

export default function TrustBand() {
  return (
    <section
      id="trust"
      data-testid="trust-section"
      className="py-20 sm:py-28 lg:py-36 bg-navy text-cream relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -bottom-48 left-[-10%] w-[40rem] h-[40rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(197,160,89,0.18), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Why Families Trust Rita
            </Eyebrow>
          </Reveal>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)]">
            <MaskedLines
              animateOnLoad={false}
              lines={[
                <>TRUST ISN&rsquo;T CLAIMED.</>,
                <span className="italic text-gold">IT&rsquo;S EARNED.</span>,
              ]}
            />
          </h2>
        </div>

        <div
          data-testid="trust-points"
          className="mt-14 grid sm:grid-cols-3 gap-10 sm:gap-8"
        >
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={point.title}
                delay={i * 0.1}
                className="group border-t border-cream/15 pt-6 hover:border-gold/60 transition-colors duration-500"
              >
                <Icon
                  className="w-6 h-6 text-gold"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display font-medium text-xl sm:text-2xl text-cream">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cream/65 leading-relaxed">
                  {point.support}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
