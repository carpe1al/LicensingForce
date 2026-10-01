// Central place for business details. Update these before launch.
export const site = {
  name: "Licensing Force",
  tagline: "Licensing • Compliance",
  description:
    "Mortgage company licensing, MLO licensing, state expansion, and ongoing compliance support for brokers and lenders nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://licensingforce.com",
  // TODO: replace with real contact details
  email: "info@licensingforce.com",
  phone: "(555) 555-5555",
  phoneHref: "tel:+15555555555",
  hours: "Mon–Fri, 9am–5pm ET",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
};

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Compliance", href: "/compliance" },
  { label: "Management Program", href: "/management-program" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
