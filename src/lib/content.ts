import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "company-licensing",
    icon: "building",
    title: "Company Licensing",
    summary:
      "Broker, lender, and servicer licenses prepared and filed through NMLS so your company can open its doors.",
    details: [
      "Mortgage broker and lender license applications",
      "NMLS company record setup and maintenance",
      "Control person and qualifying individual filings",
      "Surety bond and net worth requirement guidance",
      "Business plan, policies, and supporting documents",
    ],
  },
  {
    slug: "mlo-licensing",
    icon: "badge",
    title: "MLO Licensing",
    summary:
      "Individual loan originator licensing, sponsorships, and transitional authority handled for your whole team.",
    details: [
      "New MLO license applications in every state",
      "Sponsorship and relationship management in NMLS",
      "Transitional authority for incoming originators",
      "Pre-licensing and SAFE exam guidance",
      "Background check and credit report coordination",
    ],
  },
  {
    slug: "state-expansion",
    icon: "map",
    title: "State Expansion",
    summary:
      "Enter new states with a clear plan for requirements, timelines, and costs before you file.",
    details: [
      "State-by-state requirement and cost analysis",
      "Branch licensing and branch manager filings",
      "Adding business activities to existing licenses",
      "Regulator correspondence and deficiency responses",
      "Launch timelines you can plan production around",
    ],
  },
  {
    slug: "regulatory-compliance",
    icon: "shield",
    title: "Regulatory Compliance",
    summary:
      "Policies, procedures, and reviews that keep you ready for examiners and audits.",
    details: [
      "Compliance management system policies and procedures",
      "BSA/AML program and independent testing support",
      "Advertising and marketing review",
      "Mortgage Call Reports (MCR) and financial condition filings",
      "State exam preparation and response",
    ],
  },
  {
    slug: "renewals-amendments",
    icon: "refresh",
    title: "Renewals & Amendments",
    summary:
      "Annual renewals, change filings, and NMLS amendments submitted accurately and on time.",
    details: [
      "Annual company and MLO license renewals",
      "Continuing education tracking for originators",
      "Ownership, officer, and address change filings",
      "Name changes, DBAs, and trade name registrations",
      "Deadline calendar so nothing slips",
    ],
  },
];

export const growthStages = [
  {
    icon: "rocket" as IconName,
    title: "Starting a Company",
    body: "Launching a brokerage, lender, or processing company? We map every license you need and handle the filings from day one.",
    points: ["Entity and NMLS setup", "Company and qualifier licensing", "Policies and procedures"],
  },
  {
    icon: "trending" as IconName,
    title: "Expanding Your Company",
    body: "Adding states, branches, or new business lines? We plan the expansion and manage each application through approval.",
    points: ["New state licenses", "Branch licensing", "New business activities"],
  },
  {
    icon: "check" as IconName,
    title: "Compliance & Ongoing Support",
    body: "Already licensed? We keep you in good standing with renewals, reports, and audit readiness.",
    points: ["Renewals and amendments", "Call reports and filings", "Exam and audit support"],
  },
];

export const steps = [
  {
    title: "Build Your Licensing Plan",
    body: "We review your business model and goals, then lay out the licenses, requirements, costs, and timeline for each state.",
  },
  {
    title: "We Handle the Filings",
    body: "Our team prepares and submits applications, tracks progress, and responds to regulator requests on your behalf.",
  },
  {
    title: "Stay Focused on Production",
    body: "Once approved, we keep your licenses current and your compliance on track so you can focus on closing loans.",
  },
];

export const reasons = [
  {
    icon: "users" as IconName,
    title: "Mortgage Industry Experience",
    body: "We understand how mortgage companies actually operate, so our advice fits the way your business works.",
  },
  {
    icon: "scale" as IconName,
    title: "Regulatory Know-How",
    body: "We keep up with state and federal requirements so you don't have to decode them on your own.",
  },
  {
    icon: "handshake" as IconName,
    title: "A Long-Term Partner",
    body: "We stay with you after approval, through renewals, growth, and every exam along the way.",
  },
  {
    icon: "clock" as IconName,
    title: "Time Back for Your Team",
    body: "Hand off the paperwork and deadlines so your people can spend their time on borrowers and production.",
  },
];

export const programComparison = [
  { feature: "Dedicated licensing specialist", us: true, diy: false },
  { feature: "Renewal deadlines tracked and filed", us: true, diy: false },
  { feature: "NMLS amendments and change filings", us: true, diy: false },
  { feature: "MLO onboarding and sponsorships", us: true, diy: false },
  { feature: "Regulatory updates relevant to your states", us: true, diy: false },
  { feature: "Exam and audit preparation support", us: true, diy: false },
  { feature: "Predictable monthly cost", us: true, diy: false },
];

export const faqs = [
  {
    q: "How long does it take to get a mortgage company licensed?",
    a: "Timelines vary by state and license type. Some states approve applications in a few weeks, while others take several months. We give you a state-by-state estimate during planning.",
  },
  {
    q: "Do you work with brokers and lenders?",
    a: "Yes. We support mortgage brokers, mortgage lenders, correspondent lenders, servicers, and processing companies.",
  },
  {
    q: "Can you help after we're licensed?",
    a: "Yes. Our License Management Program covers renewals, amendments, MLO onboarding, and ongoing compliance support for a monthly fee.",
  },
  {
    q: "Do you handle individual MLO licenses?",
    a: "Yes. We handle new MLO applications, sponsorships, transitional authority, and renewals for individual loan originators and entire teams.",
  },
];
