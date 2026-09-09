import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  testid,
}) {
  return (
    <motion.div
      data-testid={testid}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLines({
  lines,
  className = "",
  lineClass = "",
  delay = 0,
  stagger = 0.13,
  animateOnLoad = true,
}) {
  const rootProps = animateOnLoad
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <motion.span className={`block ${className}`} {...rootProps}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden pb-[0.1em] -mb-[0.1em]"
        >
          <motion.span
            className={`block will-change-transform ${lineClass}`}
            variants={{ hidden: { y: "115%" }, visible: { y: "0%" } }}
            transition={{
              duration: 1.1,
              delay: (animateOnLoad ? delay : 0) + i * stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold ${className}`}
    >
      {children}
    </p>
  );
}
