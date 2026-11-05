import type { Category, CategoryId } from "./types";

/**
 * Landing (pillar) pages for the keyword categories.
 * navLabel appears in the header; keywordGroup is for internal SEO mapping.
 */
export const categories: Category[] = [
  {
    id: "kisan-drone",
    path: "/kisan-drone/",
    navLabel: "Kisan Drone",
    keywordGroup: "Main Keywords",
    h1: "Kisan Drone: The Complete Guide to Agriculture Drones for Indian Farming",
    seo: {
      title: "Kisan Drone: Complete Guide to Agriculture Drones (2026)",
      description:
        "What is a kisan drone, how does an agriculture drone work, what does it cost and is it right for your farm? A practical, honest guide for Indian farmers.",
      keywords: [
        "Kisan drone",
        "Agriculture drone",
        "Farming drone",
        "Drone for farming",
        "Drone for agriculture",
        "Agricultural drone in India",
        "krishi drone",
      ],
    },
    intro:
      "A kisan drone is an agriculture drone built for farm work — spraying pesticides and liquid fertilisers, monitoring crops and mapping fields. This guide brings together everything a farmer, FPO or agri-entrepreneur needs to know: how farming drones work, what they cost, the rules, government support and how to get started without wasting money.",
    quickAnswer:
      "A kisan drone (agriculture drone) is a remotely piloted multi-rotor aircraft used mainly to spray approved pesticides and liquid nutrients, and to map and monitor crops. In India, it must be a DGCA type-certified, registered drone flown by a pilot with a Remote Pilot Certificate. Most farmers start by hiring a drone spraying service; FPOs and entrepreneurs often buy.",
    takeaways: [
      "Kisan drone, agriculture drone and farming drone mean the same thing.",
      "Main uses: spraying, crop monitoring and field mapping.",
      "Legal use needs a certified, registered drone and a certified pilot.",
      "Hire a service first; buy only if you have enough acres to keep it busy.",
    ],
    sections: [
      {
        heading: "What is a kisan drone?",
        body: [
          "“Kisan drone” is the popular Indian name for an agricultural drone — an unmanned aerial vehicle (UAV) designed for farming. The term became widely known after the government announced its promotion in the Union Budget 2022–23. Whether you call it a kisan drone, krishi drone, farming drone or agriculture drone, it refers to the same kind of machine.",
          "Most kisan drones are multi-rotor aircraft with four, six or eight propellers. Spraying models carry a tank, pump and nozzles; mapping and monitoring models carry cameras and sensors.",
        ],
      },
      {
        heading: "What does an agriculture drone do?",
        subsections: [
          {
            heading: "Spraying",
            body: [
              "The drone flies a GPS-planned route a few metres above the crop and sprays insecticides, fungicides and liquid nutrients that are approved for drone application. Rotor downwash pushes droplets into the canopy.",
            ],
          },
          {
            heading: "Crop monitoring",
            body: [
              "Camera drones — including multispectral models — show where the crop is stressed, so you can scout those patches and act early.",
            ],
          },
          {
            heading: "Mapping and survey",
            body: [
              "Mapping drones stitch hundreds of photos into an accurate field map for area measurement, route planning, drainage and levelling.",
            ],
          },
        ],
      },
      {
        heading: "How a drone spraying job works",
        list: [
          "The pilot surveys the field for boundaries, obstacles and a take-off point",
          "The field is mapped in the app and height, speed and spray rate are set",
          "The approved product is mixed as per the label, with PPE",
          "The drone sprays in rows, returning for refills and battery swaps",
          "The sprayed area and details are recorded",
        ],
      },
      {
        heading: "Who is a drone for farming right for?",
        table: {
          caption: "Choosing the right way to use a drone",
          head: ["You are…", "Best starting point"],
          rows: [
            ["A small or medium farmer", "Hire a drone spraying service"],
            ["A large farm with short spray windows", "Rent a drone with operator, or hire a service"],
            ["An FPO, cooperative or CHC", "Rent for a season, then consider buying"],
            ["A rural entrepreneur or agri-graduate", "Get pilot training, then start a service"],
          ],
        },
      },
      {
        heading: "Rules every farmer should know",
        list: [
          "Drones must be of a DGCA type-certified model and registered on Digital Sky",
          "Pilots need a Remote Pilot Certificate from a DGCA-authorised RPTO",
          "Check the Digital Sky airspace map — green, yellow or red zone",
          "Only spray products approved for drone application, following the SOP",
        ],
      },
      {
        heading: "How much does a kisan drone cost?",
        body: [
          "The price depends on tank class, battery sets, certification, features, warranty and service support, so we do not publish a single figure. Beyond the purchase price, budget for batteries, spare parts, insurance, a pilot and transport. See our agriculture drone price guide for a full breakdown, or call for a written quote.",
        ],
      },
      {
        heading: "How to get started",
        list: [
          "Decide your crop, area and the job — spraying, monitoring or mapping",
          "Try a drone spraying service on one field and judge the results",
          "Compare the per-acre cost of a service against buying a drone",
          "Learn about drone rules, pilot certificates and schemes",
          "Call or WhatsApp us for a price, a demo or a spraying booking",
        ],
      },
      {
        "heading": "Benefits and limits at a glance",
        "body": [
          "Drones save time on large or hard-to-walk fields, use far less water per acre, reduce chemical exposure and help farmers act quickly during pest outbreaks. They are less useful on tiny plots surrounded by trees and wires, in strong wind, or with products not approved for drone use. Knowing both sides helps you use drones where they truly pay off."
        ]
      },
    ],
    faqs: [
      {
        q: "What is the difference between a kisan drone and an agriculture drone?",
        a: "There is no real difference. In India, drones used in farming are commonly called kisan drones. Farming drone, drone for farming and drone for agriculture are all names for the same type of drone.",
      },
      {
        q: "Can farmers fly a kisan drone on their own?",
        a: "Only with a Remote Pilot Certificate from a DGCA-authorised training organisation and a registered drone. Farmers who hire a service do not need any certificate.",
      },
      {
        q: "How much does a kisan drone cost?",
        a: "The price depends on tank capacity, batteries, certification, accessories, warranty and service, so we do not publish a fixed price. Call or WhatsApp us for a written quote.",
      },
      {
        q: "What jobs can a kisan drone do?",
        a: "Mainly spraying approved insecticides, fungicides and liquid nutrients, crop monitoring and field mapping or surveys.",
      },
      {
        q: "Which crops can a kisan drone spray?",
        a: "Paddy, wheat, cotton, sugarcane, vegetables, grapes, orchards and many more — always with products approved for drone use on that crop.",
      },
      {
        q: "Is there a government subsidy on kisan drones?",
        a: "Schemes have supported drone purchases for specific groups such as FPOs, CHCs, institutions and women's SHGs. Check current eligibility with official sources.",
      },
      {
        q: "Is drone spraying safe?",
        a: "It reduces the operator's direct exposure. Safety still depends on approved products, PPE while mixing, buffer zones and calm weather.",
      },
      {
        q: "How do I get started with a kisan drone?",
        a: "The easiest way is to book a drone spraying service first. Call +91 82828 02150 for information.",
      },
      {
        "q": "Do drones reduce the amount of pesticide used?",
        "a": "The label dose per acre still applies. What drops sharply is the water volume, and even coverage can reduce waste from overlaps and missed strips."
      },
    ],
    cta: { topic: "demo", label: "Book a free demo call" },
  },
  {
    id: "products-services",
    path: "/products-services/",
    navLabel: "Products & Services",
    keywordGroup: "Products & Services",
    h1: "Agriculture Drone Products and Services: Spraying, Rental, Monitoring and Mapping",
    seo: {
      title: "Agriculture Drone Services: Spraying, Rental & Mapping",
      description:
        "Drone spraying service, agriculture drone rental, spraying drones, crop monitoring and field mapping — compare every drone product and service in one place.",
      keywords: [
        "Agriculture spraying drone",
        "Drone spraying service for farmers",
        "Agriculture drone rental",
        "Agricultural mapping drone",
        "crop monitoring drone",
        "drone services for agriculture",
      ],
    },
    intro:
      "Drones do two main jobs in farming: applying inputs (spraying and spreading) and collecting information (monitoring, mapping and surveys). Some farmers need a one-time spray, others need a drone for the whole season, and some need a map before they plan anything. This page explains each option so you can pick the right one.",
    quickAnswer:
      "Agriculture drone products and services fall into two groups. Spraying: buy a spraying drone, hire a drone spraying service per job, or rent a drone (usually with an operator) for a period. Information: crop monitoring with RGB or multispectral cameras, mapping to create accurate field maps, and field surveys for elevation and layout. The right choice depends on your area, crop and how often you need the work.",
    takeaways: [
      "Occasional spraying: hire a service.",
      "Repeated seasonal spraying: rent or buy.",
      "Planning and scouting: mapping, monitoring and survey services.",
      "Every service starts with a field check for safety.",
    ],
    sections: [
      {
        heading: "Spraying drones and services",
        subsections: [
          {
            heading: "Drone spraying service",
            body: [
              "A certified pilot brings a registered drone to your field and sprays it. You pay for the work done — no investment, no licence, no maintenance.",
            ],
          },
          {
            heading: "Agriculture drone rental",
            body: [
              "A drone, usually with an operator, is available to you for a day, a week or a season. It suits FPOs, CHCs and large farms with repeated work.",
            ],
          },
          {
            heading: "Buying a spraying drone",
            body: [
              "Ownership makes sense when you can keep the drone busy — for an FPO, a Custom Hiring Centre or an entrepreneur running a spraying business.",
            ],
          },
        ],
      },
      {
        heading: "Monitoring, mapping and surveys",
        subsections: [
          {
            heading: "Crop monitoring",
            body: ["RGB, multispectral or thermal images reveal weak patches, water stress and pest hotspots so you can scout smarter."],
          },
          {
            heading: "Field mapping",
            body: ["An orthomosaic map gives accurate area, boundaries and obstacles for planning and spray routes."],
          },
          {
            heading: "Field survey",
            body: ["Elevation models and contour maps help plan drainage, land levelling, irrigation and orchard layout."],
          },
        ],
      },
      {
        heading: "Which service is right for you?",
        table: {
          caption: "Quick guide",
          head: ["Your need", "Recommended option"],
          rows: [
            ["One or two sprays this season", "Drone spraying service"],
            ["Many sprays across many fields", "Seasonal rental or buying"],
            ["Testing demand before investing", "Rental with operator"],
            ["Know where the crop is weak", "Crop monitoring / multispectral survey"],
            ["Accurate area and boundaries", "Field mapping"],
            ["Plan drainage or levelling", "Field survey"],
          ],
        },
      },
      {
        heading: "What happens before any drone service",
        list: [
          "We understand your crop, stage, area and location",
          "The field is checked for power lines, trees, houses and a landing spot",
          "Airspace zone and any permissions are confirmed",
          "Date, preparation and the quote are agreed in writing",
        ],
      },
      {
        heading: "What we offer",
        body: [
          "[Confirm which services and products you offer — sales, spraying service, rental, mapping.] Call 8282802150 or WhatsApp us with your requirement and location, and we will tell you exactly what is available in your area.",
        ],
      },
      {
        heading: "Quality and safety standards",
        body: [
          "Every drone service should use a registered drone of a certified type, a pilot with a valid Remote Pilot Certificate, products approved for drone application and the government SOP for spraying. Ask any provider — including us — to show these before work starts. Good providers will also keep a record of each job for you.",
        ],
      },
      {
        "heading": "Comparing costs: service, rental and ownership",
        "table": {
          "caption": "How each option is usually charged",
          "head": [
            "Option",
            "How you pay",
            "What is included"
          ],
          "rows": [
            [
              "Spraying service",
              "Per acre or per job",
              "Drone, pilot, batteries, travel"
            ],
            [
              "Rental with operator",
              "Per day, per acre or per season",
              "Drone, operator, often maintenance"
            ],
            [
              "Dry rental",
              "Per day, week or season",
              "Drone and batteries only"
            ],
            [
              "Ownership",
              "Purchase plus running costs",
              "Everything is your responsibility"
            ]
          ]
        },
        "body": [
          "Rates depend on area, crop, field layout, distance and terms. Ask for an itemised written quote to compare fairly."
        ]
      },
      {
        "heading": "Combining spraying with mapping",
        "body": [
          "For orchards, plantations and large farms, a mapping flight before the season makes every later spray more efficient. The map gives exact boundaries and obstacles, so spraying routes are planned once and reused. Monitoring flights during the season then show where targeted sprays are needed, saving inputs and time."
        ]
      },
    ],
    faqs: [
      {
        q: "Do you sell drones as well as provide services?",
        a: "[Confirm which services and products you offer — sales, spraying service, rental, mapping.] Call 8282802150 for accurate information.",
      },
      {
        q: "What is the difference between a spraying service and drone rental?",
        a: "With a spraying service, the team arrives with the drone and operator and completes a job. With rental, a drone (usually with an operator) is available to you for a fixed period.",
      },
      {
        q: "Which service is right for me?",
        a: "A spraying service suits occasional spraying, rental suits repeated work through the season, and mapping or monitoring suits planning and checking crop health.",
      },
      {
        q: "What does a farmer get from mapping and monitoring services?",
        a: "Mapping gives an accurate field map, boundary and area. Monitoring shows parts of the crop that differ from the rest, so they can be inspected on the ground.",
      },
      {
        q: "Is the field checked before the service?",
        a: "Yes. Field size, power lines, trees, nearby houses and a landing spot are checked first. Only then are timing and the quote fixed.",
      },
      {
        q: "Can drones spread seeds or granules?",
        a: "Some spraying drones accept a spreader attachment. Ask whether this is available for your crop and product.",
      },
      {
        q: "How do I book a drone service?",
        a: "Call or WhatsApp 8282802150 with your crop, area, location and the service you need.",
      },
      {
        "q": "Do I need to be present during the drone service?",
        "a": "It helps to be present or have someone at the field to show boundaries, confirm the product and inform neighbours. The pilot handles the flight."
      },
      {
        "q": "Can I get a mapping service and spraying together?",
        "a": "Yes, combining them is efficient — the map is used to plan spray routes. Ask about availability for your area and crop."
      },
    ],
    cta: { topic: "service", label: "Book a drone service" },
  },
  {
    id: "buying-guide",
    path: "/buying-guide/",
    navLabel: "Buying Guide",
    keywordGroup: "Buying & Comparison",
    h1: "Agriculture Drone Buying Guide: How to Choose, Compare and Buy the Right Drone",
    seo: {
      title: "Agriculture Drone Buying Guide: Compare Before You Buy",
      description:
        "How to choose an agriculture drone in India: 10 vs 16 vs 20 litre, batteries, spare parts, dealers and companies — a checklist that protects your money.",
      keywords: [
        "Best agriculture drone in India",
        "Best drone for spraying crops",
        "Agriculture drone company in India",
        "Kisan drone dealer near me",
        "agriculture drone buying guide",
        "which drone to buy for farming",
      ],
    },
    intro:
      "Buying an agriculture drone is a major investment, and the wrong choice can cost a whole season. This buying guide does not rank brands. Instead, it walks you through the decisions that matter — size, batteries, certification, service, dealer and total cost — so you can compare any drone on fair terms.",
    quickAnswer:
      "To buy the right agriculture drone, first define your crops, acres, terrain and who will fly it. Then choose a DGCA type-certified model in the right tank class (10, 16 or 20 litre), compare full packages including battery sets, check spare parts and service near you, watch a live demo and get every term — warranty, training, delivery — in writing.",
    takeaways: [
      "Start with your needs, not with brands or prices.",
      "Tank class should match field size and logistics.",
      "Batteries, spares and service decide real ownership cost.",
      "A field demo and customer references beat any brochure.",
    ],
    sections: [
      {
        heading: "5 questions to ask before buying",
        list: [
          "How many acres and which crops will the drone work on each season?",
          "Who will fly it, and do they have a Remote Pilot Certificate?",
          "Is the exact model DGCA type-certified, and will registration be supported?",
          "If it breaks down mid-season, how quickly will repairs and spare parts arrive?",
          "Am I eligible for any scheme? (Confirm with official sources before buying)",
        ],
      },
      {
        heading: "Step 1: Choose the right size",
        table: {
          caption: "General guidance by tank class",
          head: ["Class", "Best for", "Trade-off"],
          rows: [
            ["10 litre", "Small, scattered or hilly fields; new operators", "More refills per acre"],
            ["16 litre", "Medium-to-large fields; service businesses", "Needs solid charging set-up"],
            ["20 litre", "Large continuous fields; sugarcane; FPOs", "Heavier, needs more power and transport"],
          ],
        },
      },
      {
        heading: "Step 2: Compare the full package",
        subsections: [
          {
            heading: "Batteries and charging",
            body: ["Count the battery sets, charger type and generator needed to keep the drone flying continuously."],
          },
          {
            heading: "Spray system and flight features",
            body: ["Check flow control, nozzle type, terrain following, obstacle sensing and the planning app."],
          },
          {
            heading: "Warranty and training",
            body: ["Read what is covered and for how long, and confirm pilot training is included."],
          },
        ],
      },
      {
        heading: "Step 3: Judge the dealer and company",
        list: [
          "Authorisation letter from the manufacturer",
          "Service centre and spare parts within reach",
          "Live field demo before purchase",
          "References from customers in your district",
          "Clear invoice and written terms",
        ],
      },
      {
        heading: "Step 4: Calculate total cost of ownership",
        body: [
          "Add the purchase price, extra batteries, expected battery replacements, spare parts, insurance, pilot cost and transport over three seasons. Divide by the acres you expect to cover. This cost per acre is the fairest way to compare drones — and to decide whether buying beats hiring a service.",
        ],
      },
      {
        heading: "Our comparison policy",
        note: "This site does not publish made-up comparisons of the price, capacity or availability of any drone model. Get accurate model information only from the manufacturer's datasheet and a written quote.",
      },
      {
        heading: "Common buying mistakes",
        list: [
          "Choosing by tank size or price alone",
          "Ignoring battery sets and charging needs",
          "Buying an uncertified or unsupported model",
          "Buying before scheme approval when planning to claim a subsidy",
          "Skipping the demo and customer references",
        ],
      },
      {
        "heading": "Buy, rent or hire? A quick decision guide",
        "body": [
          "Before deciding which drone to buy, decide whether to buy at all. If you spray only your own small farm a few times a season, hiring a service is usually cheaper. If you run an FPO, a Custom Hiring Centre or a spraying business with steady demand, ownership can pay off. Renting for one season is a low-risk way to test demand and your team's ability to operate a drone before investing."
        ]
      },
      {
        "heading": "Pages in this buying guide",
        "list": [
          "Best agriculture drone in India and best drone for spraying crops — what to compare",
          "10, 16 and 20 litre drones — which size suits your work",
          "Buying with subsidy — the right order of steps",
          "Dealers and companies — how to judge them",
          "Batteries and spare parts — the real running costs"
        ]
      },
      {
        "heading": "Documents to collect when you buy",
        "list": [
          "Itemised invoice with the exact model name and serial number",
          "Type certificate details and UIN registration support",
          "Warranty card with coverage and exclusions",
          "Training schedule and pilot onboarding details",
          "Service centre contacts and escalation numbers"
        ],
        "body": [
          "Keep these documents together — you will need them for registration, insurance, warranty claims, scheme verification and resale."
        ]
      },
    ],
    faqs: [
      {
        q: "Which is the best agriculture drone in India?",
        a: "No single drone is best for every farmer. The right choice depends on your area, crop, budget, service network and certification.",
      },
      {
        q: "Can you tell me the prices of different models?",
        a: "Yes, we share a written quote once we understand your needs. Call or WhatsApp 8282802150 for prices and availability.",
      },
      {
        q: "How do I choose between 10, 16 and 20 litre drones?",
        a: "Consider 10 litre for small, scattered fields, 16 litre for medium-to-large fields and service businesses, and 20 litre for large continuous fields.",
      },
      {
        q: "What are the yearly costs after buying a drone?",
        a: "Battery replacement, spare parts, maintenance, insurance and pilot costs — add them together to estimate the total cost.",
      },
      {
        q: "Do I need a pilot certificate to buy a drone?",
        a: "Not to buy one, but flying it generally requires a Remote Pilot Certificate from a DGCA-authorised institute.",
      },
      {
        q: "Should I buy a second-hand agriculture drone?",
        a: "Be cautious. Check registration transfer, battery health, crash history and whether the manufacturer still supports the model.",
      },
      {
        q: "Can I see a demo before buying?",
        a: "Yes, always ask for a demo in a field like yours. Call 8282802150 to discuss demo options.",
      },
      {
        "q": "Is it better to buy or rent a drone?",
        "a": "Renting suits seasonal or uncertain demand; buying suits large, regular workloads. Many FPOs rent first, then buy once demand is proven."
      },
      {
        "q": "Does the dealer register the drone for me?",
        "a": "Many dealers help with Digital Sky registration paperwork. Confirm in writing what support is included before you buy."
      },
    ],
    cta: { topic: "price", label: "Get a free price quote" },
  },
  {
    id: "schemes-training",
    path: "/schemes-training/",
    navLabel: "Schemes & Training",
    keywordGroup: "Government Schemes & Training",
    h1: "Kisan Drone Subsidy, Government Schemes and Drone Pilot Training in India",
    seo: {
      title: "Drone Subsidy, Schemes & Pilot Training in India",
      description:
        "Kisan drone subsidy, Namo Drone Didi, SMAM support and drone pilot training explained — who is eligible, how to apply and how to verify with official sources.",
      keywords: [
        "Kisan drone subsidy",
        "Agriculture drone subsidy in India",
        "Drone Didi scheme",
        "Agriculture drone training",
        "drone pilot training India",
        "remote pilot certificate",
      ],
    },
    intro:
      "Government support and proper training are the two foundations of drone adoption in Indian agriculture. Schemes have helped FPOs, CHCs, entrepreneurs and women's SHGs buy drones, and certified training makes sure drones are flown safely. This hub explains both — and how to get accurate, current information.",
    quickAnswer:
      "Agriculture drone support in India comes mainly through the farm mechanisation programme (SMAM), the Namo Drone Didi initiative for women's SHGs and state schemes. Eligibility and amounts are set by official guidelines and change over time. To fly an agriculture drone commercially, a pilot needs a Remote Pilot Certificate from a DGCA-authorised RPTO; candidates generally need to be 18+ and class 10 pass.",
    takeaways: [
      "Subsidy rules change — always verify with official sources.",
      "Apply first; buy only after written approval.",
      "Training at an authorised RPTO is a legal requirement for pilots.",
      "Agriculture spraying skills make a pilot job-ready.",
    ],
    sections: [
      {
        heading: "Important notice",
        note: "We do not decide eligibility for any scheme and do not guarantee subsidies. No subsidy amount or percentage has been deliberately written on this site. Get the latest information from your district agriculture office, KVK or the official portal.",
      },
      {
        heading: "Government schemes for agriculture drones",
        subsections: [
          {
            heading: "Farm mechanisation support (SMAM)",
            body: [
              "Guidelines were updated to support agriculture drones — demonstrations by institutions, and purchases by FPOs, Custom Hiring Centres, entrepreneurs and other eligible groups.",
            ],
          },
          {
            heading: "Namo Drone Didi",
            body: [
              "Approved in November 2023, this initiative provides drones to selected women's self-help groups so they can offer spraying services to farmers.",
            ],
          },
          {
            heading: "State programmes",
            body: [
              "States implement central schemes and may add their own support. Application windows and portals differ by state.",
            ],
          },
        ],
      },
      {
        heading: "How to check eligibility and apply",
        list: [
          "Read the latest guidelines on official portals",
          "Visit your district agriculture office or KVK",
          "Apply during the official window with complete documents",
          "Wait for written sanction before buying",
          "Buy an eligible model and submit the claim",
        ],
      },
      {
        heading: "Why is training necessary?",
        body: [
          "Safe flying, correct calibration, drift control and safe handling of chemicals all come from training. In India, flying an agriculture drone commercially requires training at a DGCA-authorised Remote Pilot Training Organisation (RPTO) and a Remote Pilot Certificate.",
          "Beyond the certificate, agriculture-specific skills — mission planning, nozzle and droplet settings, the spraying SOP and maintenance — separate a good pilot from an average one.",
        ],
      },
      {
        heading: "Training pathways",
        table: {
          caption: "Who should train and how",
          head: ["You are…", "Suggested path"],
          rows: [
            ["Farm youth", "RPC course + agriculture spraying module"],
            ["FPO / CHC staff", "Group training for pilots and helpers"],
            ["SHG members (Drone Didi)", "Training arranged through the initiative"],
            ["Entrepreneur", "RPC + spraying + business planning"],
          ],
        },
      },
      {
        heading: "Avoiding scheme and training fraud",
        list: [
          "Never pay anyone who promises a guaranteed subsidy",
          "Use only official portals and offices",
          "Check RPTO authorisation on DGCA Digital Sky before paying fees",
          "Verify any sanction letter with the issuing office",
        ],
      },
      {
        "heading": "Pages in this section",
        "list": [
          "Kisan drone subsidy — what individual farmers should know",
          "Agriculture drone subsidy in India — central and state overview",
          "Government subsidy application process — documents and steps",
          "Kisan Drone scheme — background and current status",
          "Namo Drone Didi — drones for women's SHGs",
          "Agriculture drone training and drone pilot training — RPC and RPTOs",
          "How to become an agricultural drone pilot — step by step"
        ]
      },
      {
        "heading": "Combining training with scheme support",
        "body": [
          "For entrepreneurs and FPOs, training and scheme support often go together. A certified pilot on the team strengthens your plan to run a drone service, and some schemes look at how the drone will be operated. Plan both in parallel: identify who will train, check RPTO options, and track the scheme application window in your state.",
          "Once you have a certified pilot and a drone, start with group bookings in nearby villages to build experience and reputation before expanding."
        ]
      },
      {
        "heading": "Questions people often ask us",
        "body": [
          "Farmers frequently ask whether every farmer gets a free drone, whether a fixed subsidy percentage applies everywhere and whether anyone can fly a drone after a short video course. The honest answers are no, no and no. Support is targeted and conditional, amounts are set by current guidelines, and pilots need certified training. We would rather give you accurate expectations than false hope."
        ]
      },
    ],
    faqs: [
      {
        q: "Can you get me a subsidy?",
        a: "No. Subsidies are given by the relevant government department. We can help with general scheme information, quotes and product-related documents.",
      },
      {
        q: "Do you provide DGCA-authorised training?",
        a: "[Fill only when verified: RPTO authorisation or training partner name.] For now, call us for training information.",
      },
      {
        q: "Where can I find accurate drone subsidy information?",
        a: "From your district agriculture office, KVK, your state agriculture department website or official portals such as agrimachinery.nic.in.",
      },
      {
        q: "What qualifications do I need to become a drone pilot?",
        a: "Under the Drone Rules, 2021, generally a minimum age of 18 and class 10 pass, plus training from a DGCA-authorised RPTO.",
      },
      {
        q: "What is the Drone Didi scheme?",
        a: "Namo Drone Didi is a central initiative to give agriculture drones to selected women's self-help groups so they can provide drone services to farmers.",
      },
      {
        q: "Is there a drone subsidy for individual farmers?",
        a: "Some guidelines have included certain categories of farmers, but much support targets groups. Confirm with your state agriculture department.",
      },
      {
        q: "How do I find an authorised RPTO?",
        a: "Check the list of authorised RPTOs on DGCA's Digital Sky platform.",
      },
      {
        "q": "Can I get training and subsidy together?",
        "a": "They are separate processes. Training happens at an authorised RPTO; subsidy is applied for through official channels. Planning both together helps entrepreneurs and FPOs start faster."
      },
      {
        "q": "How often is this information updated?",
        "a": "We review scheme pages periodically and show the last review date at the top. Always confirm current details with official sources before acting."
      },
      {
        "q": "Is drone training useful even if I don't buy a drone?",
        "a": "Yes. Certified pilots can work for service providers, FPOs, CHCs and agri-businesses that own drones."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
  },
  {
    id: "crops",
    path: "/crops/",
    navLabel: "Crop Services",
    keywordGroup: "Crop-Specific Drone Services",
    h1: "Drone Spraying by Crop: Paddy, Wheat, Cotton, Sugarcane, Grapes, Vegetables and Orchards",
    seo: {
      title: "Drone Spraying by Crop: Paddy, Wheat, Cotton & More",
      description:
        "Crop-wise drone spraying guide — paddy, wheat, cotton, sugarcane, grapes, vegetables and orchards. Uses, precautions, preparation and how to get a quote.",
      keywords: [
        "Drone spraying for paddy",
        "Drone spraying for wheat",
        "Drone spraying for cotton",
        "Drone spraying for sugarcane",
        "crop wise drone spraying",
        "drone spraying service by crop",
      ],
    },
    intro:
      "Every crop has a different height, density and field layout, so drone spraying works differently on each. Flooded paddy, tall sugarcane, trellised grapes and small vegetable plots all need their own planning. Pick your crop below to see where a drone helps, what to watch out for and how to prepare.",
    quickAnswer:
      "Drone spraying works on most major Indian crops — paddy, wheat, cotton, sugarcane, grapes, vegetables and orchard fruits — when the product is approved for drone application on that crop. Drones help most where fields are hard to walk (flooded or tall crops) or where timely spraying over large areas matters. Settings, weather, buffer zones and label rules decide results.",
    takeaways: [
      "Biggest gains: paddy, sugarcane and cotton.",
      "Orchards and vineyards need mapping and precise routes.",
      "Vegetables need drift and harvest-interval care.",
      "Always use drone-approved products and follow the label.",
    ],
    sections: [
      {
        heading: "Where drones help most, crop by crop",
        table: {
          caption: "Overview — see each crop page for details",
          head: ["Crop", "Main advantage", "Key caution"],
          rows: [
            ["Paddy", "No wading through flooded fields", "Buffers near water and fish ponds"],
            ["Wheat", "Fast coverage when rust or aphids strike", "Herbicide drift, fog and dew"],
            ["Cotton", "Less effort in tall, dense crop", "Canopy penetration, resistance management"],
            ["Sugarcane", "Access to tall cane", "Height over uneven canopy, power lines"],
            ["Grapes", "Timely mildew protection", "Trellis wires, export residue limits"],
            ["Vegetables", "Quick sprays in clusters", "Drift and pre-harvest intervals"],
            ["Orchards", "Top canopy coverage, tree-by-tree routes", "Inner canopy coverage, flowering"],
          ],
        },
      },
      {
        heading: "Essentials for every crop",
        list: [
          "Use only products approved for drone spraying on that crop",
          "Follow the dose and precautions on the product label",
          "Avoid spraying in strong wind, rain or extreme heat",
          "Inform neighbouring farmers in advance to avoid drift damage",
          "Keep buffer zones near homes, water bodies and beehives",
          "Keep a record of each spray",
        ],
        note: "This is general information, not agricultural advice. Consult your agriculture officer, KVK or an agronomist for chemicals and doses. Results depend on the weather, product and crop condition.",
      },
      {
        heading: "Choosing the right time to spray",
        body: [
          "Calm, cool hours — usually early morning after dew dries, or late afternoon — give the best results. Strong wind increases drift; heat evaporates fine droplets; rain can wash spray off. Plan a backup day for every booking, especially in monsoon and winter fog seasons.",
        ],
      },
      {
        heading: "How farmers should prepare",
        subsections: [
          {
            heading: "Before the booking",
            list: ["Confirm the pest or deficiency with an expert", "Choose a drone-approved product"],
          },
          {
            heading: "On the day",
            list: ["Keep clean water and the product ready", "Clear a take-off spot and inform neighbours"],
          },
          {
            heading: "After spraying",
            list: ["Record the spray", "Check results over the next days"],
          },
        ],
      },
      {
        heading: "Group spraying saves money",
        body: [
          "When neighbouring farmers grow the same crop at the same stage, booking a drone together cuts travel and set-up time. FPOs, cooperatives, mills and village groups can collect bookings and plan routes, making drone spraying affordable even for small holdings.",
        ],
      },
      {
        heading: "Who provides the chemicals?",
        body: [
          "[Write your policy: the farmer provides the chemicals, or you supply approved products.] Whoever supplies it, the product must be approved for drone application and used at the label dose.",
        ],
      },
      {
        "heading": "Crop pages in this section",
        "list": [
          "Paddy — spraying flooded fields without wading in",
          "Wheat — timely rust, aphid and nutrient sprays",
          "Cotton — sucking pests and bollworms in a tall crop",
          "Sugarcane — reaching tall cane where machines cannot",
          "Grapes — vineyard planning, mildew control and residues",
          "Vegetables — small plots, mixed crops and harvest intervals",
          "Orchards — mango, pomegranate, citrus and more"
        ]
      },
      {
        "heading": "Results you can expect",
        "body": [
          "A drone is an application method. It gives fast, even coverage and saves labour, but the result still depends on choosing the right product, the correct dose and timing, and spraying in good weather. Drones cannot fix a wrong diagnosis or a product that does not work against the pest. Combine drone spraying with good scouting and expert advice for the best outcome."
        ]
      },
      {
        "heading": "Safety around people, animals and water",
        "body": [
          "Whatever the crop, keep people and animals away from the field during spraying, maintain buffer zones near homes, schools, ponds and beehives, and stop if the wind turns towards a sensitive area. Mixing and filling should always be done with PPE, away from drinking water. These simple habits protect your family, your neighbours and your reputation."
        ]
      },
    ],
    faqs: [
      {
        q: "Which crops can be sprayed by drone?",
        a: "Paddy, wheat, cotton, sugarcane, vegetables, grapes and horticulture crops, among others — provided the product is approved for drone spraying on that crop.",
      },
      {
        q: "Who provides the chemicals — the farmer or the service provider?",
        a: "[Write your policy: the farmer provides the chemicals, or you supply approved products.] Call us for more information.",
      },
      {
        q: "Does drone spraying damage the crop?",
        a: "The drone does not walk through the field, so the crop is not trampled. With the right height, approved products and label doses, risk stays low.",
      },
      {
        q: "What is the best time for drone spraying?",
        a: "When the wind is low and rain is not expected — often early morning or late afternoon. Also follow the product label.",
      },
      {
        q: "What information do I need for a spraying quote?",
        a: "The crop and growth stage, total area, village/district, preferred date and whether you will provide the chemicals.",
      },
      {
        q: "Is drone spraying cheaper for a group of farmers?",
        a: "Usually yes. Group bookings reduce travel and set-up time per field, which often lowers the cost per acre.",
      },
      {
        q: "Can drones spray crops in hilly areas?",
        a: "Yes, with terrain following and careful planning. Hilly and terraced fields often benefit because ground equipment is hard to use there.",
      },
      {
        "q": "Will drone spraying increase my yield?",
        "a": "Drones help apply inputs on time and evenly, which protects yield. They do not increase yield by themselves; results depend on diagnosis, product, timing and crop management."
      },
    ],
    cta: { topic: "service", label: "Get a spraying quote" },
  },
];

export function getCategory(id: CategoryId) {
  const c = categories.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown category: ${id}`);
  return c;
}
