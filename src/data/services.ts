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
    name: "Trust establishment",
    summary:
      "Support to establish a trust with a clear purpose, structure and record from the outset.",
    details: [
      "Purpose and structure",
      "Establishment documentation",
      "Initial trustee records",
    ],
    group: "Trusts",
  },
  {
    id: "trustee-services",
    number: "02",
    name: "Trustee services",
    summary:
      "Independent professional support for trustees as they carry out their duties and make decisions.",
    details: [
      "Trustee obligations",
      "Decision support",
      "Governance records",
    ],
    group: "Trusts",
  },
  {
    id: "trust-administration",
    number: "03",
    name: "Ongoing trust administration",
    summary:
      "Practical support to keep resolutions, distributions and the trust's core records in order.",
    details: [
      "Minutes and resolutions",
      "Distribution records",
      "Annual administration",
    ],
    group: "Trusts",
  },
  {
    id: "trust-health-checks",
    number: "04",
    name: "Trust health-check reviews",
    summary:
      "A structured review of an existing trust's purpose, records, administration and current needs.",
    details: [
      "Document review",
      "Administration review",
      "Clear next steps",
    ],
    group: "Trusts",
  },
  {
    id: "accounting-tax",
    number: "05",
    name: "Accounting and tax advice",
    summary:
      "Clear accounting and tax support for individuals, companies, partnerships and trusts.",
    details: [
      "Accounts and tax returns",
      "Overseas income",
      "Rental properties",
    ],
    group: "Accounting & tax",
  },
  {
    id: "tax-structuring",
    number: "06",
    name: "Specialist tax and structuring",
    summary:
      "Advice for business transactions, ownership structures and domestic or offshore tax questions.",
    details: [
      "Business transactions",
      "Domestic and offshore structures",
      "Tax risk",
    ],
    group: "Accounting & tax",
  },
];

export const serviceGroups = ["Trusts", "Accounting & tax"] as const;
