export type NavItem = { label: string; href: string };

export const site = {
  name: "Bennett Advisory",
  legalName: "Bennett Advisory Ltd",
  tagline:
    "Practical accounting, tax and trust advice for New Zealand families and business owners.",
  url: "https://bennettadvisory.co.nz",
  description:
    "Bennett Advisory provides practical accounting, tax and trust advice for New Zealand families, business owners, trustees and organisations nationwide.",

  email: "melanie@bennettadvisory.co.nz",
  phone: "+6421707244",
  phoneDisplay: "021 707 244",
  contactName: "Melanie Bennett",

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

  social: [] as { label: string; href: string }[],
};
