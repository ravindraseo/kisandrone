/**
 * Editorial (E-E-A-T) details shown in the "About this guide" box on every
 * content page and used for dateModified in structured data.
 *
 * EDIT ME: add the real name, role and field experience of the person who
 * reviews these pages. Do not invent credentials.
 */
export const editorial = {
  /** ISO date the content was last reviewed/updated */
  updated: "2026-11-05",
  updatedLabel: "5 November 2026",
  author: "Kisan Drone team, Noida",
  reviewer: "Mohit Singh, Drone Operator — 10 years of drone-spraying experience",
  /** Used in structured data (reviewedBy) */
  reviewerPerson: { name: "Mohit Singh", jobTitle: "Drone Operator" },
  sources: [
    { label: "DGCA Digital Sky (drone rules, registration, pilot certificates)", url: "https://digitalsky.dgca.gov.in/" },
    { label: "Ministry of Civil Aviation (Drone Rules, 2021)", url: "https://www.civilaviation.gov.in/" },
    { label: "Department of Agriculture & Farmers Welfare", url: "https://agriwelfare.gov.in/" },
    { label: "CIB&RC – approved pesticide uses", url: "https://ppqs.gov.in/" },
  ],
};
