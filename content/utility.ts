import type { ContentSection, Faq, PageSeo } from "./types";

/**
 * Long-form content for the About, Contact and Blog index pages.
 * Facts about the company stay as [placeholders] until verified — never invent
 * founding years, team size, acres served, certificates or reviews.
 */
export type UtilityPage = {
  seo: PageSeo;
  quickAnswer: string;
  takeaways: string[];
  sections: ContentSection[];
  faqs: Faq[];
};

export const aboutPage: UtilityPage = {
  seo: {
    title: "About Kisan Drone: Agriculture Drone Experts, Noida",
    description:
      "Who we are, what we do and how we work: drone spraying, buying advice, scheme and training information for Indian farmers. Head office in Noida, UP.",
    keywords: ["Kisan Drone", "Kisan Drone company", "agriculture drone company Noida", "about Kisan Drone", "drone spraying company India"],
  },
  quickAnswer:
    "Kisan Drone is an agriculture drone company with its head office in Sector 63, Noida, Uttar Pradesh. We help farmers, FPOs, cooperatives, Custom Hiring Centres and agri-entrepreneurs with drone spraying services, honest buying advice and quotes, and clear information on government schemes and drone pilot training. Reach us on +91 82828 02150, Monday to Saturday.",
  takeaways: [
    "We recommend what suits the field — sometimes a service, not a purchase.",
    "We never publish invented prices, subsidy amounts, yields or reviews.",
    "Every scheme and rule is linked to an official source.",
    "Safety, drone rules and product labels come before speed.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        "[Write a short, factual company introduction: who started it, why, and what it does today.]",
        "[Team experience in agriculture, aviation or technology — verified information only.]",
        "Kisan Drone was set up around one simple idea: farmers deserve straight answers about agriculture drones. Drones can save time, water and effort, but only when they are used for the right job, with the right product, by a trained pilot. Too often, farmers hear exaggerated promises or forwarded messages about free drones and guaranteed subsidies. We want to replace that noise with practical, verifiable guidance.",
      ],
    },
    {
      heading: "What we do",
      subsections: [
        {
          heading: "Drone spraying and field services",
          body: [
            "We help farmers get fields sprayed by a certified pilot with a registered drone, and provide information on crop monitoring, mapping and field surveys. The farmer pays for the work, without buying a drone or holding a licence.",
          ],
        },
        {
          heading: "Buying advice and quotes",
          body: [
            "For FPOs, CHCs and entrepreneurs who want to own a drone, we explain tank classes, batteries, spare parts, certification and total cost of ownership, and share written, itemised quotes.",
          ],
        },
        {
          heading: "Scheme and training information",
          body: [
            "We explain how drone subsidies, Namo Drone Didi and the Remote Pilot Certificate work, and point you to the official portals and authorised training organisations so you can verify every detail.",
          ],
        },
      ],
    },
    {
      heading: "Who we work with",
      table: {
        caption: "The people we help and how",
        head: ["Who", "How we help"],
        rows: [
          ["Small and medium farmers", "Drone spraying services and honest advice on whether a drone suits their field"],
          ["FPOs and cooperatives", "Group spraying, seasonal planning, buying guidance and scheme information"],
          ["Custom Hiring Centres", "Choosing drones, batteries and spares for a rental or service business"],
          ["Agri-entrepreneurs and farm youth", "Pilot training information and planning a drone service"],
          ["Mills and agri-businesses", "Area-wide spraying campaigns and field mapping"],
        ],
      },
    },
    {
      heading: "How we work",
      list: [
        "We start by understanding your crop, growth stage, area, location and budget",
        "We tell you plainly when a drone is not the right tool for your field",
        "We use only registered, type-certified drones and certified pilots for spraying",
        "We follow the government SOP for drone spraying and product labels",
        "We postpone work when wind, rain or heat makes spraying unsafe or ineffective",
        "We put quotes, terms and service details in writing",
      ],
    },
    {
      heading: "Our editorial standards",
      body: [
        "Everything on this website is written to help you decide, not to push a sale. We do not publish invented prices, subsidy amounts, capacity figures, yields, certificates or customer reviews. Where something depends on your crop, product, location or the latest government guidelines, we say so and link to the official source.",
        "Scheme pages show the date they were last reviewed, and every guide shows when it was last updated. If you spot an error, email enquiry@kisandrone.co.in and we will check and correct it.",
      ],
    },
    {
      heading: "Our safety commitments",
      body: [
        "Drone spraying involves chemicals, heavy aircraft and people living near fields. We treat safety as part of the job, not an extra. Pilots survey every field for wires, trees and houses before flight, check the airspace zone, keep people and animals away, wear PPE while mixing, maintain buffer zones near water and beehives, and stop work when the wind rises. Empty containers and rinse water are handled away from water sources.",
      ],
    },
    {
      heading: "Why honest advice matters to us",
      body: [
        "A farmer who buys the wrong drone, sprays an unapproved product or pays for a “guaranteed subsidy” loses money and trust in new technology. We would rather tell you that a hired service is enough, that your plot is too obstructed for a drone, or that you need to check with your agriculture office first. Honest advice may mean a smaller sale today, but it builds the long-term relationships we value with farmers and their communities.",
      ],
    },
    {
      heading: "Our mission",
      body: [
        "To bring the benefits of agriculture drones to Indian farmers through safe operations, fair pricing and honest guidance — so that every farmer, whether they own two acres or two hundred, can protect their crop on time.",
      ],
    },
    {
      heading: "Company information",
      list: [
        "Head office: H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309",
        "Phone and WhatsApp: +91 82828 02150",
        "Email: enquiry@kisandrone.co.in",
        "Hours: Monday to Saturday, 9:30 AM – 7:00 PM (closed Sunday)",
        "Founded: [Founding year]",
        "Registered name: [Legal entity name and type]",
        "Certificates / authorisations: [Only list verified certificates]",
      ],
    },
  ],
  faqs: [
    { q: "How do I contact Kisan Drone?", a: "Call or WhatsApp +91 82828 02150, email enquiry@kisandrone.co.in or use the enquiry form on the contact page." },
    { q: "Does your company manufacture drones?", a: "[Describe your role: manufacturer, authorised dealer or service provider.]" },
    { q: "Where is the Kisan Drone head office?", a: "H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309." },
    { q: "When is your office open?", a: "Monday to Saturday, 9:30 AM to 7:00 PM. The office is closed on Sunday." },
    {
      q: "Who does Kisan Drone work with?",
      a: "Farmers, FPOs, cooperatives, Custom Hiring Centres, agri-entrepreneurs, mills and agri-businesses — for drone spraying, buying advice and scheme and training information.",
    },
    { q: "Do you guarantee subsidies?", a: "No. Subsidies are decided only by government departments. We share general information and links to official sources." },
    {
      q: "Why don't you show customer reviews on the website?",
      a: "We add reviews only when they are genuine and we have permission to publish them. We never write or buy reviews.",
    },
  ],
};

export const contactPage: UtilityPage = {
  seo: {
    title: "Contact Kisan Drone: Call 8282802150 for Price & Demo",
    description:
      "Contact Kisan Drone for agriculture drone prices, drone spraying, demos, rental or training. Call or WhatsApp 8282802150, email us or visit our Noida office.",
    keywords: [
      "Kisan drone contact",
      "agriculture drone price enquiry",
      "drone spraying service enquiry",
      "kisan drone phone number",
      "drone demo booking",
    ],
  },
  quickAnswer:
    "You can contact Kisan Drone by calling or messaging on WhatsApp at +91 82828 02150, emailing enquiry@kisandrone.co.in, using the enquiry form on this page, or visiting our head office at H-187, Lohia Rd, H Block, Sector 63, Noida, UP 201309. We are open Monday to Saturday, 9:30 AM to 7:00 PM.",
  takeaways: [
    "A call or WhatsApp message is the fastest way to reach us.",
    "Share your crop, area, location and need for a quicker, accurate reply.",
    "Call ahead before visiting the office so the right person is available.",
    "Sunday messages are answered on the next working day.",
  ],
  sections: [
    {
      heading: "What to tell us for a quick reply",
      body: [
        "The more we know about your field and your need, the faster and more accurately we can help. Use this list as a guide for your call, WhatsApp message or form.",
      ],
      subsections: [
        {
          heading: "For a drone spraying service",
          list: ["Crop and growth stage", "Approximate area and number of fields", "Village, tehsil and district", "The pest, disease or nutrient need and the product you plan to use", "Preferred date and a backup date"],
        },
        {
          heading: "For a drone price or quote",
          list: ["Crops and total acres you will cover each season", "Who will fly the drone and whether they are certified", "Your preferred tank class, if any", "Whether you plan to apply under a scheme"],
        },
        {
          heading: "For a demo",
          list: ["Your location and crop", "A field where the demo can be done", "How many people will attend — farmers, FPO members or staff"],
        },
        {
          heading: "For rental, training, schemes or spare parts",
          list: [
            "Rental: period, area, crops and whether you need an operator",
            "Training: your age, education and preferred location",
            "Schemes: your category — farmer, FPO, CHC, SHG or entrepreneur — and state",
            "Spare parts: drone model, serial number and the part you need",
          ],
        },
      ],
    },
    {
      heading: "Ways to reach us",
      table: {
        caption: "Choose the channel that suits you",
        head: ["Channel", "Best for", "Details"],
        rows: [
          ["Phone call", "Urgent spraying, quick questions", "+91 82828 02150"],
          ["WhatsApp", "Sharing field photos, locations and details", "+91 82828 02150"],
          ["Email", "Detailed requirements, documents, quotes", "enquiry@kisandrone.co.in"],
          ["Enquiry form", "Organising your details before sending", "This page — sends via WhatsApp"],
          ["Office visit", "Detailed discussions, buying decisions", "Sector 63, Noida — call ahead"],
        ],
      },
    },
    {
      heading: "What happens after you contact us",
      list: [
        "We confirm your requirement and ask any missing details",
        "For spraying, we check feasibility, the date and what you need to keep ready",
        "For buying, we explain suitable options and share a written quote",
        "For schemes and training, we share general steps and official links",
        "Everything agreed — rates, dates and terms — is confirmed in writing",
      ],
    },
    {
      heading: "Visiting our Noida office",
      body: [
        "Our head office is at H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309. Sector 63 is an industrial and commercial area in Noida; use the Google Maps link on this page for directions. Please call before visiting so that the right team member is available to discuss your requirement, and bring details of your crops, area and any quotes you want to compare.",
      ],
    },
    {
      heading: "Tips for sending field details on WhatsApp",
      list: [
        "Share your location pin so we can see the field area",
        "Send clear photos of the crop problem — leaves, stems and the whole plant",
        "Mention the product name if you already have one",
        "Write your name and village in the first message",
      ],
    },
    {
      heading: "Business enquiries and partnerships",
      body: [
        "FPOs, cooperatives, Custom Hiring Centres, sugar mills, agri-input companies and institutions planning drone spraying campaigns, demonstrations or bulk purchases can email enquiry@kisandrone.co.in with the subject line “Business enquiry”. Include your organisation name, location, crops, approximate area and timeline, and we will arrange a call with the right person.",
      ],
    },
    {
      heading: "Best times to call",
      body: [
        "Our team is available Monday to Saturday from 9:30 AM to 7:00 PM. During peak spraying seasons, mornings can be busy because pilots are in the field; if you cannot get through, send a WhatsApp message with your details and we will call you back. For urgent pest outbreaks, mention “urgent” and your crop stage in the first line so we can prioritise your request.",
      ],
    },
    {
      heading: "Our privacy promise",
      body: [
        "We use the details you share only to answer your enquiry. We do not sell or share your phone number or personal information with third parties for marketing. [Add your privacy policy link.] Please do not send bank passwords, OTPs or card details — we will never ask for them.",
      ],
    },
  ],
  faqs: [
    {
      q: "What happens after I fill the form?",
      a: "The website does not send the message itself. After checking your details, you can send the same information to us on WhatsApp with one tap.",
    },
    { q: "How quickly will I get a reply?", a: "[Add your usual response time.] For a faster reply, call us directly." },
    {
      q: "Can I visit the office?",
      a: "Yes. Our head office is at H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309, open Monday to Saturday, 9:30 AM to 7:00 PM. Please call ahead to fix a time.",
    },
    {
      q: "What details should I send on WhatsApp?",
      a: "Your name, village/district, crop, approximate area and what you need — price, spraying service, demo, rental or training information.",
    },
    {
      q: "Can I contact you on Sunday?",
      a: "The office is closed on Sunday. You can leave a WhatsApp message or email enquiry@kisandrone.co.in, and we will get back to you on the next working day.",
    },
    { q: "Is there a charge for asking questions or getting a quote?", a: "No. Advice and written quotes are free and without obligation." },
    { q: "Do you serve my district?", a: "Call or WhatsApp with your village and district, and we will confirm what services are available there." },
    { q: "Can I send field photos before booking?", a: "Yes. Share clear crop photos and a location pin on WhatsApp so we can understand the field and the problem before advising you." },
  ],
};

export const blogPage: UtilityPage = {
  seo: {
    title: "Agriculture Drone Blog: Practical Guides for Farmers",
    description:
      "Practical agriculture drone articles: how kisan drones work, drone prices, drone vs manual spraying and subsidy eligibility. Simple, honest and updated.",
    keywords: ["Kisan drone blog", "agriculture drone articles", "drone spraying guide", "agriculture drone tips", "drone farming India"],
  },
  quickAnswer:
    "The Kisan Drone blog publishes practical, plain-language articles on agriculture drones for Indian farmers, FPOs and agri-entrepreneurs — how drones work, what decides their price, drone vs manual spraying and how to check subsidy eligibility. Each article includes a quick answer, FAQs and links to official sources, and shows when it was last updated.",
  takeaways: [
    "New to drones? Start with how a kisan drone works.",
    "Planning to buy? Read how drone prices are set.",
    "Comparing methods? See drone vs manual spraying.",
    "Interested in schemes? Learn how to check subsidy eligibility.",
  ],
  sections: [
    {
      heading: "Where to start: reading paths",
      subsections: [
        {
          heading: "If you are a farmer trying drones for the first time",
          body: [
            "Read how a kisan drone works, then drone spraying vs manual spraying. Together they explain what happens on your field and when a drone is worth using. Then see the crop-wise spraying guide for your crop.",
          ],
        },
        {
          heading: "If you are planning to buy a drone",
          body: [
            "Read how agriculture drone prices are set, then the buying guide pages on 10, 16 and 20 litre drones, batteries and spare parts. These help you compare quotes on total cost, not just the sticker price.",
          ],
        },
        {
          heading: "If you want scheme support or a pilot career",
          body: [
            "Read how to check drone subsidy eligibility, then the pages on government subsidy steps, Namo Drone Didi and how to become an agricultural drone pilot.",
          ],
        },
      ],
    },
    {
      heading: "Topics we cover",
      table: {
        caption: "Blog and guide topics",
        head: ["Topic", "What you will learn"],
        rows: [
          ["Getting started", "How drones work, parts, rules and first steps"],
          ["Buying", "Prices, packages, batteries, spares, dealers and companies"],
          ["Spraying", "Drone vs manual methods, safety, drift and timing"],
          ["Crops", "Stage-wise guidance for paddy, wheat, cotton, sugarcane and more"],
          ["Schemes and training", "Subsidy eligibility, applications and pilot certificates"],
        ],
      },
    },
    {
      heading: "How we write our articles",
      list: [
        "Plain language, with technical terms explained",
        "A direct quick answer at the top of every article",
        "No invented prices, subsidy amounts, yields or reviews",
        "Links to official sources for rules and schemes",
        "Publication and update dates on every article",
      ],
      body: [
        "Our articles are general information, not agronomic prescriptions. For chemicals, doses and timing on your crop, always consult your agriculture officer, KVK or an agronomist.",
      ],
    },
    {
      heading: "In-depth guides beyond the blog",
      body: [
        "Alongside these articles, the site has detailed guides in five areas: the complete kisan drone guide, products and services (spraying, rental, monitoring and mapping), the buying guide, schemes and training, and crop-wise drone spraying. Each guide runs to 900+ words with comparison tables, FAQs and a call-to-action so you can move from reading to booking or asking a question.",
      ],
    },
    {
      heading: "Latest articles at a glance",
      list: [
        "How does a kisan drone work? — parts, flight planning, spraying steps and simple rules",
        "How are agriculture drone prices set? — cost factors, hidden running costs and comparing quotes",
        "Drone spraying vs manual spraying — speed, water, coverage, safety and when each method wins",
        "How to check drone subsidy eligibility — categories, official sources, documents and fraud warnings",
      ],
    },
    {
      heading: "Using the blog with your advisor",
      body: [
        "Our articles work best alongside local expert advice. Read an article before you talk to your KVK scientist, agriculture officer or agronomist, and take your questions with you. For example, after reading about drone vs manual spraying, ask your advisor which product is approved for drone use on your crop and what dose and timing they recommend. Then share those details with us when booking a drone spray.",
        "FPO leaders and extension workers can also share these articles in member groups to explain drones in simple language before organising a demonstration or group booking.",
      ],
    },
    {
      heading: "Glossary of common drone terms",
      list: [
        "RPC (Remote Pilot Certificate): the certificate a drone pilot needs, issued after training at a DGCA-authorised RPTO",
        "RPTO: Remote Pilot Training Organisation authorised by DGCA",
        "UIN: Unique Identification Number given to a registered drone on Digital Sky",
        "Swath: the width of the strip sprayed in one pass",
        "Downwash: air pushed down by the rotors that drives droplets into the crop",
        "NDVI: a crop vigour index calculated from multispectral images",
        "RTK: high-accuracy positioning used for precise, repeatable routes",
      ],
    },
    {
      heading: "Suggest a topic",
      body: [
        "Have a question that is not answered here? Send it on WhatsApp to +91 82828 02150 or email enquiry@kisandrone.co.in. We answer questions directly and use common questions to plan future articles.",
      ],
    },
  ],
  faqs: [
    {
      q: "What topics does this blog cover?",
      a: "How a kisan drone works, what decides agriculture drone prices, drone vs manual spraying, and how to check drone subsidy eligibility — plus links to detailed guides on crops, buying and schemes.",
    },
    {
      q: "Are these articles agricultural advice?",
      a: "No, they are for general information. For chemicals, doses and timing, consult your agriculture officer, KVK or an agronomist.",
    },
    {
      q: "How up to date is the information?",
      a: "Each article shows its publication and update dates. Schemes and rules can change, so always check related information with the official source.",
    },
    {
      q: "What if I want an article on a specific topic?",
      a: "Send your question on WhatsApp or to enquiry@kisandrone.co.in. Along with answering it, we will consider covering the topic in future articles.",
    },
    {
      q: "How do I ask about drone services or prices after reading?",
      a: "Call +91 82828 02150 or ask on WhatsApp. Sharing your crop, area and location helps us give accurate information faster.",
    },
    { q: "Can I share these articles?", a: "Yes, you are welcome to share links to our articles with other farmers, FPO members and groups." },
    { q: "Do the articles cover rules for flying drones?", a: "Yes. Articles and guides explain drone registration, the Remote Pilot Certificate, airspace zones and the spraying SOP in simple words, with official links." },
    { q: "How often do you publish new articles?", a: "We add articles as common questions come up from farmers and update existing ones when rules or schemes change. Check the dates shown on each article." },
  ],
};
