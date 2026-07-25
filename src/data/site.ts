export type NavItem = { label: string; href: string };

export const site = {
  name: "Bennett Advisory",
  legalName: "Bennett Advisory Ltd",
  tagline:
    "Providing trusted accounting, tax and trust services for New Zealand business owners and families.",
  url: "https://bennettadvisory.co.nz",
  description:
    "Bennett Advisory provides accounting, tax and trust services for Auckland businesses, families and trustees, with support available across New Zealand.",

  email: "melanie@bennettadvisory.co.nz",
  phone: "+6421707244",
  phoneDisplay: "021 707 244",
  contactName: "Melanie Bennett",
  privacyAddress: "52 Valley Road, Titirangi, Auckland 0604",

  address: {
    venue: "French Bay Yacht Club",
    street: "Corner Otitori Bay Road and Valley Road",
    locality: "Titirangi",
    region: "Auckland",
    postalCode: "0604",
    country: "NZ",
  },
  postalAddress: "PO Box 80004, Green Bay 0643",
  areas: ["Auckland", "New Zealand"],
  hours: [
    { days: "Monday–Friday", time: "9am–3pm" },
    { days: "Saturday–Sunday", time: "Closed" },
  ],

  primaryCta: { label: "Get in touch", href: "/contact/" },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] satisfies NavItem[],
  legal: [
    { label: "Privacy policy", href: "/privacy/" },
    { label: "Terms of use", href: "/terms/" },
  ] satisfies NavItem[],

  social: [] as { label: string; href: string }[],
};
