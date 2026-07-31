export const siteConfig = {
  name: "YoungShark Technologies",
  shortName: "YoungShark",
  description:
    "YoungShark Technologies engineers Android apps, fullstack commerce, ERP solutions, Quickbase workflows, and Workday integrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Nairobi, Kenya",
  phone: "+254706103000",
  phoneDisplay: "+254 706 103 000",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/search/results/companies/?keywords=Youngshark%20Technologies",
} as const;

export const siteUrl = new URL(siteConfig.url);
