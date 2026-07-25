import stepLogo from "@/assets/credentials/step.jpg";
import charteredAccountantsLogo from "@/assets/credentials/chartered-accountants-anz.png";
import xeroGoldPartnerLogo from "@/assets/credentials/xero-gold-partner.png";

export const credentials = [
  {
    id: "step",
    category: "Trust and estate expertise",
    name: "STEP",
    description:
      "STEP is the global professional body for trust and estate practitioners, advising families across generations.",
    image: stepLogo,
    alt: "STEP — Advising families across generations",
    href: "https://www.step.org/",
  },
  {
    id: "chartered-accountants",
    category: "Chartered accountancy",
    name: "Chartered Accountants",
    description:
      "Accounting for small to medium businesses, individuals and trusts by a Chartered Accountant.",
    image: charteredAccountantsLogo,
    alt: "Chartered Accountants Australia and New Zealand",
    href: "https://www.charteredaccountantsanz.com/",
  },
  {
    id: "xero",
    category: "Cloud accounting",
    name: "Xero Gold Partner",
    description:
      "Accounting for small to medium businesses, individuals and trusts utilising the Xero platform.",
    image: xeroGoldPartnerLogo,
    alt: "Xero gold partner badge",
    href: "https://www.xero.com/nz/",
  },
] as const;
