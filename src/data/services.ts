export type Service = {
  id: string;
  number: string;
  name: string;
  summary: string;
  details: string[];
  group: "Trusts" | "Accounting & tax";
};

export const services: Service[] = [
  {
    id: "trust-establishment",
    number: "01",
    name: "Trust Establishment Services",
    summary:
      "Setting up a properly structured trust to protect your assets.",
    details: [
      "Trust structure",
      "Asset protection",
      "Establishment records",
    ],
    group: "Trusts",
  },
  {
    id: "trustee-services",
    number: "02",
    name: "Trustee Services",
    summary:
      "Acting as an independent trustee to work with you to keep your trust compliant.",
    details: [
      "Independent trustee",
      "Ongoing compliance",
      "Trustee records",
    ],
    group: "Trusts",
  },
  {
    id: "trust-administration",
    number: "03",
    name: "Ongoing Trust Administration",
    summary:
      "Accurate record-keeping and annual administration. We do not need to be a trustee to assist with your trust administration.",
    details: [
      "Accurate record-keeping",
      "Annual administration",
      "Trustee support",
    ],
    group: "Trusts",
  },
  {
    id: "trust-health-checks",
    number: "04",
    name: "Trust “health-check” Reviews",
    summary:
      "Checking your trust documents against current legislation.",
    details: [
      "Document review",
      "Legislative compliance",
      "Required updates",
    ],
    group: "Trusts",
  },
  {
    id: "accounting-tax",
    number: "05",
    name: "Accounting and tax advice",
    summary:
      "Accounting for small to medium businesses, individuals and trusts utilising the Xero platform by a Chartered Accountant.",
    details: [
      "Accounts and tax returns",
      "Overseas investment income calculation",
      "Rental property taxation",
    ],
    group: "Accounting & tax",
  },
  {
    id: "tax-structuring",
    number: "06",
    name: "Specialist tax and structuring advice",
    summary:
      "We can assist you with structuring your personal and business affairs for appropriate protection, taxation and compliance.",
    details: [
      "Taxation on business transactions",
      "Structuring for efficiency",
      "Domestic and offshore structuring and restructuring",
      "Tax risk review",
    ],
    group: "Accounting & tax",
  },
];

export const serviceGroups = ["Trusts", "Accounting & tax"] as const;

export const serviceGroupCopy: Record<(typeof serviceGroups)[number], string[]> = {
  Trusts: [
    "Are you concerned about the administration of your trust or want to discuss how a trust could assist you in protecting your assets to provide for future generations?",
    "Having a properly administered trust with accurate records is the backbone of ensuring your trust is protected from being “busted”.",
    "At Bennett Advisory we are supported by cloud-based trust administration software backed by top New Zealand trust experts to ensure compliance with the trust legislation.",
  ],
  "Accounting & tax": [
    "Accounting for small to medium businesses, individuals and trusts utilising the Xero platform by a Chartered Accountant.",
    "Tax affects everyone and it is key with personal and business affairs to select an ownership model and structure that provides you with the appropriate protection, taxation and compliance.",
    "At Bennett Advisory we can assist you with structuring your personal and business affairs.",
  ],
};
