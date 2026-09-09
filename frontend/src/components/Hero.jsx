import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { MaskedLines, Eyebrow, EASE } from "./motion";
import { waLink, WA_DEFAULT_MSG, WA_CONSULT_MSG, HERO_PORTRAIT } from "../lib/site";

const HEADLINE = [
  <>SECURE YOUR</>,
  <>FAMILY&rsquo;S TOMORROW,</>,
  <span className="italic text-gold">TODAY.</span>,
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24"
    >
      {/* soft gold glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[46rem] h-[46rem] rounded-full opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(197,160,89,0.16), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
        {/* Copy */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Rita Sharma — Life Insurance Advisor
            </Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-display font-semibold uppercase tracking-[-0.01em] leading-[1.02] text-[clamp(2.55rem,6.2vw,5.1rem)] text-ink">
            <MaskedLines lines={HEADLINE} delay={0.25} stagger={0.14} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-6 max-w-md text-base sm:text-lg text-ink2 leading-relaxed"
          >
            Smart protection for the people, plans and future that matter most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-talk-to-rita-button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-8 py-4 text-sm sm:text-base hover:bg-golddark hover:text-cream transition-all duration-300"
            >
              Talk to Rita
              <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href={waLink(WA_CONSULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-free-consultation-button"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 text-ink font-semibold px-8 py-4 text-sm sm:text-base hover:border-gold hover:text-golddark transition-colors duration-300"
            >
              Get a Free Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55"
          >
            <span>15+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>1000s of Families</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Pan-India Consultation</span>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: portraitY }}
          className="relative z-10 max-w-md lg:max-w-none w-full mx-auto lg:ml-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: EASE }}
            className="relative"
          >
            {/* offset gold frame */}
            <div
              aria-hidden
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-full h-full rounded-[2rem] border border-gold/50"
            />
            <div
              data-testid="hero-portrait"
              className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(11,19,43,0.35)]"
            >
              <motion.img
                src={HERO_PORTRAIT}
                alt="Rita Sharma, Life Insurance Advisor"
                initial={{ scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
                className="w-full h-[420px] sm:h-[520px] lg:h-[560px] object-cover object-top"
              />
              {/* spotlight */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
              />
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-cream border border-line rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(11,19,43,0.3)]"
            >
              <p className="font-display font-semibold text-ink text-lg leading-tight">
                15+ Years of Trust
              </p>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                <MapPin className="w-3 h-3 text-gold" />
                Kathua, J&amp;K → Pan-India
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
