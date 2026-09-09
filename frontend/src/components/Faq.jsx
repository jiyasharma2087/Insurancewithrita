import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { FAQS } from "../lib/content";

export default function Faq() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-20 sm:py-28 lg:py-36 bg-cream2/50 border-y border-line/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Frequently Asked Questions
            </Eyebrow>
          </Reveal>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
            <MaskedLines
              animateOnLoad={false}
              lines={[
                <>QUESTIONS,</>,
                <span className="italic text-gold">ANSWERED PLAINLY.</span>,
              ]}
            />
          </h2>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base text-ink2 leading-relaxed">
              Everything families usually ask before buying life insurance in
              India — answered the honest way. Something else on your mind?
            </p>
            <a
              href="https://wa.me/917889789814?text=Hi%20Rita%2C%20I%20have%20a%20question%20about%20life%20insurance."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="faq-whatsapp-link"
              className="link-underline mt-4 inline-block font-semibold text-ink hover:text-golddark transition-colors"
            >
              Ask Rita directly →
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-line rounded-3xl px-6 sm:px-8"
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={i === FAQS.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i + 1}`}
                  className="font-display font-medium text-base sm:text-lg text-ink text-left hover:no-underline hover:text-golddark transition-colors"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i + 1}`}
                  className="text-sm sm:text-base text-ink2 leading-relaxed"
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
