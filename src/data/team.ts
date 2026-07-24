export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image?: "melanie" | "sarah";
};

export const team: TeamMember[] = [
  {
    name: "Melanie Bennett",
    role: "Director",
    experience: "25+ years' experience",
    bio:
      "Melanie advises on accounting, tax and trusts. Her experience includes more than ten years with Big Four firms, progressing to Senior Manager, and leading the corporate tax function at Guardian Trust.",
    image: "melanie",
  },
  {
    name: "Sarah Clay",
    role: "Trust Manager",
    experience: "15+ years' experience",
    bio:
      "Sarah has worked across trusts, estates, wills, enduring powers of attorney and charitable trusts. She supports clients and trustees with practical administration and clear records.",
    image: "sarah",
  },
  {
    name: "Glenn Schussler",
    role: "Accountant",
    experience: "30+ years' experience",
    bio:
      "Glenn brings more than three decades of management and financial accounting experience to the preparation and review of client work.",
  },
  {
    name: "Helen Gleeson",
    role: "Accounting Assistant",
    experience: "10+ years' experience",
    bio:
      "Helen provides experienced accounting support and administration, helping keep client work organised and moving.",
  },
];
