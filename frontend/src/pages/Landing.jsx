import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import WhyInsurance from "../components/WhyInsurance";
import WhyRita from "../components/WhyRita";
import TrustBand from "../components/TrustBand";
import Insights from "../components/Insights";
import Faq from "../components/Faq";
import LocationSec from "../components/LocationSec";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (hash && hash.length > 1) {
        e.preventDefault();
        lenis.scrollTo(hash, { offset: -70 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-cream text-ink font-sans overflow-x-clip">
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyInsurance />
        <WhyRita />
        <TrustBand />
        <Insights />
        <Faq />
        <LocationSec />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
