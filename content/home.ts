import type { ContentSection, Faq, PageSeo } from "./types";

/** Home page SEO, long-form guide and FAQ (editable). */
export const homeSeo: PageSeo = {
  title: "Kisan Drone: Agriculture Drone Spraying, Price & Training",
  description:
    "Book drone spraying for your crop, compare agriculture drone prices, check subsidy rules and find pilot training — honest guidance. Call 8282802150 today.",
  keywords: [
    "Kisan drone",
    "Agriculture drone",
    "Drone spraying service for farmers",
    "Agriculture drone price in India",
    "agriculture drone subsidy",
    "drone pilot training",
    "drone spraying near me",
  ],
};

/** Direct answer shown at the top of the home page guide. */
export const homeQuickAnswer =
  "Kisan Drone helps Indian farmers, FPOs and agri-entrepreneurs use agriculture drones the right way: booking drone spraying services, choosing and pricing spraying drones, understanding government schemes and finding certified pilot training. We give clear, honest information — no invented prices or promises — and you can reach us on +91 82828 02150.";

/** Long-form guide on the home page (H2/H3 sections). */
export const homeGuide: ContentSection[] = [
  {
    heading: "What is a kisan drone and how does it help farmers?",
    body: [
      "A kisan drone is an agriculture drone — a remotely piloted multi-rotor aircraft built for farm work. Spraying drones carry a tank, pump and nozzles and spray approved pesticides and liquid nutrients from a few metres above the crop. Camera drones map fields and show crop health. Together, they help farmers protect crops on time, save water and labour, and make better decisions.",
      "Drones help most where fields are hard to walk — flooded paddy, tall sugarcane, dense cotton — and when a pest outbreak needs fast action over a large area. They work less well on tiny plots surrounded by trees and wires, or in strong wind.",
    ],
  },
  {
    heading: "Our services and guides",
    subsections: [
      {
        heading: "Drone spraying service",
        body: [
          "A certified pilot brings a registered drone to your field and sprays it. No purchase, licence or maintenance needed — you pay for the work done.",
        ],
      },
      {
        heading: "Buying an agriculture drone",
        body: [
          "Compare 10, 16 and 20 litre drones, batteries, spare parts, dealers and companies. We explain total cost of ownership and share written quotes.",
        ],
      },
      {
        heading: "Schemes and training",
        body: [
          "Understand drone subsidy rules, Namo Drone Didi and the Remote Pilot Certificate — with links to official sources so you can verify everything.",
        ],
      },
      {
        heading: "Crop-wise spraying guides",
        body: [
          "Stage-wise guides for paddy, wheat, cotton, sugarcane, grapes, vegetables and orchards, including precautions and preparation.",
        ],
      },
    ],
  },
  {
    heading: "Hire, rent or buy: which is right for you?",
    table: {
      caption: "Choosing the right way to use an agriculture drone",
      head: ["You are…", "Best option", "Why"],
      rows: [
        ["Small or medium farmer", "Hire a drone spraying service", "Pay only for the area sprayed"],
        ["Large farm with short spray windows", "Rent with operator or hire", "Assured capacity at peak time"],
        ["FPO, cooperative or CHC", "Rent for a season, then buy", "Prove demand before investing"],
        ["Rural entrepreneur", "Train as a pilot, then start a service", "Build a business step by step"],
      ],
    },
  },
  {
    heading: "What does drone spraying cost?",
    body: [
      "Drone spraying charges depend on the total area, crop and growth stage, field shape and obstacles, travel distance and who supplies the product. Grouping neighbouring fields on the same day usually lowers the cost per acre, because the pilot sets up once and moves quickly from field to field.",
      "For buying a drone, the price depends on the tank class, battery sets, certification, features, warranty and service support. We do not publish one-size-fits-all numbers; instead we share a written, itemised quote after understanding your needs, so you can compare options fairly.",
    ],
  },
  {
    heading: "Drone rules in India — in brief",
    list: [
      "The drone must be a DGCA type-certified model registered on Digital Sky",
      "The pilot needs a Remote Pilot Certificate from a DGCA-authorised RPTO",
      "Check the airspace map — green, yellow or red zone — before flying",
      "Spray only products approved for drone application, following the government SOP",
    ],
  },
  {
    heading: "Why farmers trust our guidance",
    body: [
      "We never publish invented prices, subsidy amounts, yields or reviews. When something depends on your crop, product, location or the latest government guidelines, we say so and point you to the official source. Our team in Noida answers calls and WhatsApp messages Monday to Saturday, 9:30 AM to 7:00 PM, and every guide on this site shows when it was last updated.",
    ],
  },
  {
    heading: "How to get started in three steps",
    list: [
      "Tell us your crop, growth stage, area and village/district",
      "Get honest advice on whether to hire a service, rent or buy",
      "Book a spray, a demo or a written quote — by call, WhatsApp or the enquiry form",
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "What does Kisan Drone do?",
    a: "Kisan Drone helps farmers, FPOs and agri-entrepreneurs with agriculture drones, drone spraying services, buying advice, scheme information and training information. Call 8282802150 for services and availability.",
  },
  {
    q: "Can I get my field sprayed without buying a drone?",
    a: "Yes. With a drone spraying service, a trained operator brings the drone and completes the job. You only pay for the service.",
  },
  {
    q: "Why are drone prices not listed on the website?",
    a: "Prices change with the model, batteries, accessories and service package. To give you accurate information, we understand your needs and share a written quote.",
  },
  {
    q: "Do you guarantee a subsidy?",
    a: "No. Subsidies are given by government departments under their own conditions. We share general information and links to official sources.",
  },
  {
    q: "Where is the Kisan Drone office and when is it open?",
    a: "Our head office is at H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309. Hours: Monday to Saturday, 9:30 AM to 7:00 PM.",
  },
  {
    q: "Do you provide information on drone pilot training?",
    a: "Yes, we share training information. A Remote Pilot Certificate is issued only after training and a test at a DGCA-authorised RPTO.",
  },
  {
    q: "Which crops can be sprayed by drone?",
    a: "Many crops, including paddy, wheat, cotton, sugarcane, grapes, vegetables and fruit orchards — provided the product is approved for drone spraying on that crop.",
  },
  {
    q: "Is drone spraying safe?",
    a: "It reduces the operator's direct exposure because nobody walks through the spray. Safety also depends on approved products, PPE while mixing, buffer zones and calm weather.",
  },
  {
    q: "How do I book a drone spraying service?",
    a: "Call or WhatsApp +91 82828 02150, or use the enquiry form, with your crop, area, location and preferred date.",
  },
  {
    q: "Can I become a drone pilot and start a spraying business?",
    a: "Yes. Get a Remote Pilot Certificate from a DGCA-authorised RPTO, learn agriculture spraying skills, gain field experience and then plan your drone, batteries, vehicle and bookings.",
  },
];
