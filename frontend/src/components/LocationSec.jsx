import { MapPin } from "lucide-react";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { CITIES, waLink } from "../lib/site";

export default function LocationSec() {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Location
            </Eyebrow>
          </Reveal>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,4vw,3.4rem)] text-ink">
            <MaskedLines
              animateOnLoad={false}
              lines={[
                <>FROM KATHUA</>,
                <>TO EVERY CORNER</>,
                <span className="italic text-gold">OF INDIA.</span>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-ink/60">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              Based in Kathua, Jammu &amp; Kashmir • Advising clients across
              India
            </p>
            <p className="mt-6 max-w-lg text-base sm:text-lg text-ink2 leading-relaxed">
              Whether you&rsquo;re in Jammu, Delhi, Mumbai, Bengaluru or
              anywhere else in India, you can connect with Rita for
              personalized insurance guidance.
            </p>
          </Reveal>
        </div>

        {/* City pills */}
        <Reveal delay={0.15} className="lg:pt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-5">
            Start a conversation from your city
          </p>
          <div className="flex flex-wrap gap-3" data-testid="location-city-pills">
            {CITIES.map((city) => (
              <a
                key={city}
                href={waLink(
                  `Hi Rita, I'm based in ${city}. I'd like to understand which insurance plan would be suitable for me.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`location-pill-${city.toLowerCase().replace(/\s+/g, "-")}-button`}
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                {city}
                <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-navy transition-colors duration-300" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
