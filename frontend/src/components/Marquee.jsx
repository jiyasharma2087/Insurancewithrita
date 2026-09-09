const ITEMS = [
  "15+ Years of Experience",
  "1000s of Families Guided",
  "Personalized Gap Analysis",
  "Pan-India Digital Consultation",
  "Guidance Through Claims",
];

function Row({ hidden }) {
  return (
    <div aria-hidden={hidden} className="flex items-center shrink-0">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="font-display uppercase tracking-tight text-lg sm:text-2xl text-ink/80 px-6 sm:px-10">
            {item}
          </span>
          <span className="w-2 h-2 rotate-45 bg-gold shrink-0" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      data-testid="editorial-marquee"
      className="marquee border-y border-line/70 bg-cream2/60 py-5 sm:py-6 select-none"
    >
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
