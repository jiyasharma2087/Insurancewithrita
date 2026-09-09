import { useState } from "react";
import { Reveal, Eyebrow, MaskedLines } from "./motion";
import { waLink, WA_NUMBER } from "../lib/site";

export default function FinalCta() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const digits = mobile.replace(/\D/g, "");
    if (!name.trim() || !age || digits.length !== 10) {
      setError("Please add your name, age and a valid 10-digit mobile number.");
      return;
    }
    setError("");
    const message = `Hi Rita, I'd like my custom insurance plan.\nName: ${name.trim()}\nAge: ${age}\nMobile: ${digits}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      data-testid="final-cta-section"
      className="py-20 sm:py-28 lg:py-36 bg-navy text-cream relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 right-[-8%] w-[42rem] h-[42rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(197,160,89,0.2), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Take the first step
            </Eyebrow>
          </Reveal>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[1.05] tracking-[-0.01em] text-[clamp(2rem,4.5vw,3.8rem)]">
            <MaskedLines
              animateOnLoad={false}
              lines={[
                <>DON&rsquo;T WAIT FOR</>,
                <>
                  THE <span className="italic text-gold">&lsquo;RIGHT TIME&rsquo;.</span>
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg sm:text-xl text-cream/75 leading-relaxed max-w-md">
              Protect what you&rsquo;ve worked hard to build.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/50">
              Prefer to message directly? WhatsApp {WA_NUMBER}
            </p>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            data-testid="final-cta-form"
            className="bg-cream text-ink rounded-[1.75rem] p-7 sm:p-10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
          >
            <p className="font-display font-medium text-2xl sm:text-3xl">
              Request my custom plan
            </p>
            <p className="mt-2 text-sm text-ink2">
              Share three details — your plan request opens in WhatsApp, ready
              to send.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="cta-name"
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55"
                >
                  Name
                </label>
                <input
                  id="cta-name"
                  data-testid="form-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cta-age"
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55"
                  >
                    Age
                  </label>
                  <input
                    id="cta-age"
                    data-testid="form-age-input"
                    type="number"
                    min="18"
                    max="99"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="28"
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-mobile"
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="cta-mobile"
                    data-testid="form-mobile-input"
                    type="tel"
                    inputMode="numeric"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98765 43210"
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p
                data-testid="form-error"
                className="mt-4 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              data-testid="form-submit-button"
              className="mt-8 w-full rounded-full bg-gold text-navy font-semibold tracking-wide px-8 py-4 text-base hover:bg-golddark hover:text-cream transition-all duration-300"
            >
              REQUEST MY CUSTOM PLAN
            </button>
            <p className="mt-4 text-center text-xs text-ink/45">
              No spam, no obligation — just a conversation.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
