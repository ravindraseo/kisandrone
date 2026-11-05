/**
 * The "Information last reviewed" date and official links shown on scheme pages.
 *
 * EDIT ME:
 * 1. Check the information on every scheme page against the official guidelines.
 * 2. Then write that date in `schemesReviewedOn` (e.g. "5 November 2026").
 * 3. Open every link and check it goes to the correct official page.
 */
export const schemesReviewedOn = "[Add review date]";

export const officialLinks: { label: string; url: string; note: string }[] = [
  {
    label: "Department of Agriculture & Farmers Welfare",
    url: "https://agriwelfare.gov.in/",
    note: "Guidelines and notices for central schemes",
  },
  {
    label: "Farm Mechanisation Portal (agrimachinery.nic.in)",
    url: "https://agrimachinery.nic.in/",
    note: "Information and applications for farm mechanisation schemes",
  },
  {
    label: "DGCA Digital Sky",
    url: "https://digitalsky.dgca.gov.in/",
    note: "Drone registration, Remote Pilot Certificate, RPTOs and airspace map",
  },
  {
    label: "Ministry of Civil Aviation",
    url: "https://www.civilaviation.gov.in/",
    note: "Drone rules and notifications",
  },
  {
    label: "[Your state agriculture department]",
    url: "",
    note: "Add the official link for the state you serve",
  },
];
