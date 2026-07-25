export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image?: "melanie" | "sarah";
  longBio?: string[];
  personal?: string;
  facts?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Melanie Bennett",
    role: "Director",
    experience: "25+ years' experience",
    bio:
      "Melanie has over 25 years’ experience providing accounting, tax and administration advice to trusts, their trustees and beneficiaries.",
    image: "melanie",
    longBio: [
      "Melanie has over 25 years’ experience providing tax, accounting and administration advice to trusts, their trustees and beneficiaries. Melanie has specialised in providing accounting and tax advice to small-to-medium-sized businesses, trusts and their families, including their investments.",
      "Melanie has over 10 years of tax experience within Big Four firms to a Senior Manager level, as well as leading the corporate tax team at Guardian Trust, now Perpetual Guardian.",
      "In addition, Melanie has advised expatriate employees travelling into or out of New Zealand on their New Zealand tax obligations, including residency, taxation of their investments, the operation of the transitional residence rules, and the impact on their trust in New Zealand and overseas.",
    ],
    personal:
      "In Melanie’s spare time she is a taxi driver to two teenage boys and provides her various skills to many local not-for-profit organisations.",
    facts: [
      "25+ years’ experience",
      "Big Four to Senior Manager level",
      "Guardian Trust corporate tax leadership",
      "New Zealand expatriate tax advice",
    ],
  },
  {
    name: "Sarah Clay",
    role: "Trust Manager",
    experience: "15+ years' experience",
    bio:
      "Sarah has over 15 years’ experience in administering family trusts.",
    image: "sarah",
    longBio: [
      "Sarah has over 15 years’ experience in administering family trusts, deceased estates, wills and enduring powers of attorney, and in recent years charitable trusts, while working for Guardian Trust, now Perpetual Guardian.",
    ],
    personal:
      "Sarah’s personal time is spent supporting her daughter with her love of football, as well as playing competitive hockey.",
    facts: [
      "15+ years’ experience",
      "Family and charitable trusts",
      "Deceased estates and wills",
      "Enduring powers of attorney",
    ],
  },
  {
    name: "Glenn Schussler",
    role: "Accountant",
    experience: "30+ years' experience",
    bio:
      "Glenn has over 30 years of management and financial accounting experience.",
  },
  {
    name: "Helen Gleeson",
    role: "Accounting Assistant",
    experience: "10+ years' experience",
    bio:
      "Helen has over 10 years of experience in providing accounting support and administration assistance to companies.",
  },
];
