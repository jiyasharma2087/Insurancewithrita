export const WA_NUMBER = "917889789814";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const waLink = (message) =>
  `${WA_BASE}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT_MSG =
  "Hi Rita, I'd like to understand which insurance plan would be suitable for me.";

export const WA_CONSULT_MSG = "Hi Rita, I'd like to schedule a free consultation.";

export const HERO_PORTRAIT =
  "https://customer-assets-4nw71qhi.emergentagent.net/job_rita-financial-guide/artifacts/nqpz0xhu_ChatGPT%20Image%20Sep%209%2C%202026%2C%2007_29_58%20PM.png";

export const ABOUT_PORTRAIT =
  "https://customer-assets-4nw71qhi.emergentagent.net/job_rita-financial-guide/artifacts/2vkhc140_image.png";

export const FAMILY_PHOTO =
  "https://images.unsplash.com/photo-1657912230234-87f45165424d?crop=entropy&cs=srgb&fm=jpg&q=85&auto=format&fit=crop&w=1600";

export const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "1000s", label: "Families Guided" },
  { value: "1:1", label: "Personalized Guidance" },
  { value: "IN", label: "Pan-India Consultation" },
];

export const WHY_INSURANCE = [
  {
    title: "Protect your income.",
    support: "Your earning years are your family's biggest asset. Guard them first.",
  },
  {
    title: "Secure your family's lifestyle.",
    support: "School runs, rent, weekend plans — life shouldn't need a downgrade.",
  },
  {
    title: "Keep your children's dreams on track.",
    support: "Their goals shouldn't depend on circumstances.",
  },
  {
    title: "Create a financial safety net.",
    support: "A quiet buffer between your family and whatever life brings.",
  },
];

export const WHY_RITA = [
  {
    title: "Personalized financial gap analysis",
    support: "A clear-eyed look at what your family would need — before anything is recommended.",
  },
  {
    title: "15+ years of practical experience",
    support: "Fifteen years of real families, real claims, real outcomes. Nothing theoretical.",
  },
  {
    title: "Guidance through policies and claims",
    support: "From the first document to the day it matters most, Rita stays with your family.",
  },
  {
    title: "Simple, convenient digital process",
    support: "Advice over a call, paperwork over WhatsApp. No offices, no queues, no jargon.",
  },
];

export const TRUST_POINTS = [
  {
    title: "Advice before sales.",
    support: "Recommendations match your life and your budget — never a product target.",
  },
  {
    title: "Present through claims.",
    support: "A policy is only as good as the day it's needed. Rita stays reachable for that day.",
  },
  {
    title: "Plain language, always.",
    support: "Every plan is explained until it feels simple. If it isn't clear, it isn't done.",
  },
];

export const CITIES = ["Jammu", "Delhi", "Mumbai", "Bengaluru", "Anywhere in India"];
