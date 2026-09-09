import { waLink, WA_DEFAULT_MSG, WA_NUMBER } from "../lib/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-navy text-cream/70 border-t border-cream/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-display font-semibold text-2xl text-cream">
              Rita Sharma
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              Life Insurance Advisor
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Based in Kathua, Jammu &amp; Kashmir — advising families across
              India.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="link-underline w-fit text-cream hover:text-gold transition-colors"
            >
              WhatsApp {WA_NUMBER}
            </a>
            <span className="text-cream/50">Kathua, Jammu &amp; Kashmir, India</span>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Rita Sharma. All rights reserved.</p>
          <p className="max-w-lg">
            Insurance is the subject matter of solicitation. Advice is tailored
            to each individual&rsquo;s financial profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
