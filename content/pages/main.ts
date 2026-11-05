import type { KeywordPage } from "../types";

/**
 * Main Keywords category.
 * Keywords with the same meaning (Kisan drone, Agriculture drone, Farming drone, Drone for
 * farming/agriculture) live on the /kisan-drone/ landing page to avoid duplicate pages.
 * Keywords with a different search intent get their own pages below.
 */
export const mainPages: KeywordPage[] = [
  {
    slug: "agriculture-drone-price-in-india",
    category: "kisan-drone",
    navLabel: "Kisan Drone Price",
    summary: "What decides an agriculture drone's price and how to get an accurate quote.",
    h1: "Agriculture Drone Price in India: 7 Factors That Decide What a Kisan Drone Costs",
    seo: {
      title: "Agriculture Drone Price in India: 7 Cost Factors (2026)",
      description:
        "Kisan drone price explained: tank size, battery sets, certification, warranty and hidden costs. Compare quotes the right way — free written quote on call.",
      keywords: [
        "Agriculture drone price in India",
        "Kisan drone price",
        "agriculture drone cost",
        "spraying drone price",
        "agri drone price list",
        "drone sprayer cost per acre",
      ],
    },
    intro:
      "“How much does a kisan drone cost?” is the first question most farmers and FPOs ask us. The honest answer is that there is no single price. The cost of an agriculture drone in India changes with its tank class, the number of battery sets, certification, software and after-sales support. This guide breaks the price into its parts so you can compare quotes with confidence.",
    quickAnswer:
      "Agriculture drone prices in India are not fixed. They depend mainly on payload/tank class (10, 16 or 20 litre), how many battery sets and chargers are included, DGCA type certification, navigation features, warranty and the service network. Always compare the full package cost — not the base price — and ask for a written, itemised quote.",
    takeaways: [
      "Batteries and chargers can change the real cost of a package more than the drone frame itself.",
      "Only buy a model that has a valid DGCA type certificate and can be registered on Digital Sky.",
      "Add yearly running costs — spares, repairs, insurance and pilot salary — before deciding.",
      "Small farmers usually save money by hiring a drone spraying service instead of buying.",
    ],
    sections: [
      {
        heading: "The 7 factors that set an agriculture drone's price",
        body: [
          "When two dealers quote very different numbers for what looks like the same agri drone, the gap almost always comes from one of these seven factors. Ask about each one before you compare.",
        ],
        subsections: [
          {
            heading: "1. Tank capacity and payload class",
            body: [
              "A larger tank means a bigger frame, stronger motors and bigger batteries. A 10 litre drone is usually the lightest and easiest to transport, while 16 and 20 litre models cover more area per flight but cost more to buy and run.",
            ],
          },
          {
            heading: "2. Battery sets, chargers and a generator",
            body: [
              "A single battery set keeps a drone flying for only a short sortie. For continuous field work you need several sets rotating through a fast charger, and often a generator at the field. A package with one set and a package with four sets are not the same product, even if the drone is identical.",
            ],
          },
          {
            heading: "3. Type certificate and registration",
            body: [
              "Under India's Drone Rules, a drone must have a type certificate and a Unique Identification Number (UIN) on DGCA's Digital Sky platform. Certified models cost more to develop, but an uncertified drone is a legal and financial risk.",
            ],
          },
          {
            heading: "4. Navigation and safety features",
            list: [
              "Autonomous route planning and resume-from-breakpoint",
              "Terrain-following radar for uneven fields",
              "Obstacle sensing and automatic return-to-home",
              "RTK positioning for centimetre-level accuracy (optional on many models)",
            ],
          },
          {
            heading: "5–7. Warranty, spare parts and training",
            body: [
              "A longer warranty, spare parts stocked near you, a trained service engineer and pilot onboarding all add to the quote — and all save money during the spraying season when a breakdown can cost you days of work.",
            ],
          },
        ],
      },
      {
        heading: "Base price vs total cost of ownership",
        body: [
          "The sticker price is only the start. Over a few seasons, the total cost of owning a spraying drone includes several items that are easy to forget when you look at a quote.",
        ],
        table: {
          caption: "What to add to the drone's purchase price",
          head: ["Cost item", "Why it matters"],
          rows: [
            ["Extra battery sets", "Batteries wear out with charge cycles and must be replaced over time"],
            ["Charger / generator", "Needed to keep batteries charged at the field"],
            ["Spare parts", "Propellers, nozzles, pumps and arms are consumables"],
            ["Insurance", "Third-party insurance is commonly required for operations; hull cover is optional"],
            ["Pilot", "A certified remote pilot — your own trained staff or a hired operator"],
            ["Transport", "A vehicle to move the drone, batteries and water tank between fields"],
          ],
        },
      },
      {
        heading: "How to compare two drone quotes",
        list: [
          "Put both quotes side by side and list exactly what each includes",
          "Check that the model name on the quote matches the type certificate",
          "Ask how many battery sets are included and the price of an extra set",
          "Ask where the nearest service centre is and how fast repairs are done in season",
          "Confirm if training, registration help and delivery are included or extra",
          "Get every promise in writing — especially warranty terms",
        ],
      },
      {
        heading: "Should you buy a drone or hire a service?",
        body: [
          "Buying makes sense when the drone will work on many acres every season — for an FPO, a Custom Hiring Centre, a cooperative or an entrepreneur running a spraying business. For a farmer with a few acres, hiring a drone spraying service is usually cheaper, because you pay only for the area sprayed and avoid battery, repair and pilot costs.",
          "If you are still unsure, call us with your crops and total area. We will help you compare the per-acre cost of a service against owning a drone, without pushing you towards a purchase.",
        ],
        note: "We do not publish a price list on this website because prices change often and depend on the package. Any figure you see online without the full package details can be misleading.",
      },
    ],
    faqs: [
      {
        q: "What is the price of a kisan drone in India?",
        a: "There is no single price. It depends on the tank class, battery sets, certification, features and service package. Call 8282802150 with your requirements and we will share a written, itemised quote.",
      },
      {
        q: "Why don't you list prices on the website?",
        a: "Prices depend on the model, batteries, accessories, documents and service, and they change over time. Rather than publish a number that could mislead you, we understand your needs and quote in writing.",
      },
      {
        q: "Can a subsidy reduce the price of an agriculture drone?",
        a: "Some government schemes have supported drone purchases for specific beneficiary groups. Eligibility and the amount depend on official guidelines, so confirm with your district agriculture office or the official portal before buying.",
      },
      {
        q: "What information do I need to give for a quote?",
        a: "Your crops, approximate area, location, who will fly the drone and whether you plan to buy under a scheme. This is enough for an accurate quote.",
      },
      {
        q: "Can I buy a drone on a loan or EMI?",
        a: "Many banks and financial institutions offer loans for farm machinery, including drones in some cases. Terms depend on the lender, so ask your bank about agri-machinery or agri-infrastructure loans.",
      },
      {
        q: "What costs are there apart from the drone's price?",
        a: "Extra batteries, a charger or generator, spare parts, maintenance, insurance, pilot training or salary, registration paperwork and transport.",
      },
      {
        q: "Is a cheaper drone a better deal?",
        a: "Not always. A cheaper drone without certification, spares or local service can stop working in the middle of the season. Compare the total cost over a few seasons, not just the purchase price.",
      },
    ],
    cta: { topic: "price", label: "Get a free price quote" },
    related: ["/buying-guide/", "/agriculture-drone-battery-price/", "/kisan-drone-subsidy/"],
    schema: "WebPage",
  },
  {
    slug: "agricultural-drone-in-india",
    category: "kisan-drone",
    navLabel: "Agricultural Drones in India",
    summary: "Rules, uses and ways to get started with agricultural drones in India.",
    h1: "Agricultural Drones in India: Rules, Uses, Costs and How to Get Started",
    seo: {
      title: "Agricultural Drone in India: Rules, Uses & How to Start",
      description:
        "Agricultural drones in India explained — Drone Rules 2021, Digital Sky registration, pilot certificate, uses in spraying and mapping, and 3 ways to start.",
      keywords: [
        "Agricultural drone in India",
        "agriculture drone rules India",
        "drone rules 2021 agriculture",
        "Digital Sky registration",
        "precision agriculture India",
        "UAV for agriculture",
      ],
    },
    intro:
      "Agricultural drones have moved from demonstrations to real farm work in India. Liberalised drone rules, government schemes and a growing number of trained pilots mean farmers can now hire or buy a drone for spraying, monitoring and mapping. Here is what the rules say, where drones help most and how you can get started.",
    quickAnswer:
      "Agricultural drones are legal to use in India under the Drone Rules, 2021. The drone must have a type certificate and be registered on DGCA's Digital Sky platform, the pilot needs a Remote Pilot Certificate from a DGCA-authorised training organisation, and flights must respect the airspace map and the SOP for pesticide spraying.",
    takeaways: [
      "Most farm spraying happens in green zones, but always check the Digital Sky airspace map.",
      "Only pesticides approved for drone application should be sprayed by drone.",
      "Farmers can hire a service, rent a drone or buy one — the right choice depends on area.",
      "Schemes for FPOs, CHCs and women's SHGs have helped spread drones across states.",
    ],
    sections: [
      {
        heading: "Drone rules for agriculture in India — a simple summary",
        body: [
          "The Drone Rules, 2021 replaced the older, stricter framework and made it far easier to own and fly drones. For agricultural use, four requirements matter most.",
        ],
        subsections: [
          {
            heading: "Type certificate and UIN",
            body: [
              "Every drone flown commercially must be of a certified type, and each unit gets a Unique Identification Number on Digital Sky. Ask the seller for the type certificate number before you pay.",
            ],
          },
          {
            heading: "Remote Pilot Certificate (RPC)",
            body: [
              "The person flying the drone needs an RPC, issued through a DGCA-authorised Remote Pilot Training Organisation (RPTO) after training and a test. Agriculture-focused courses also cover spraying operations.",
            ],
          },
          {
            heading: "Airspace zones",
            body: [
              "The Digital Sky airspace map divides India into green, yellow and red zones. Green zones generally allow flights within the permitted height without prior permission; yellow and red zones need approvals. Fields near airports, borders or sensitive installations may fall in restricted zones.",
            ],
          },
          {
            heading: "SOP for pesticide and nutrient spraying",
            body: [
              "The Ministry of Agriculture has issued standard operating procedures for spraying pesticides and nutrients by drone, and only products with approval for drone application should be used. The SOP covers buffer zones, weather, PPE and record keeping.",
            ],
          },
        ],
        note: "Rules are updated from time to time. Check the latest notifications on the Ministry of Civil Aviation and DGCA Digital Sky websites before operating.",
      },
      {
        heading: "How agricultural drones are helping Indian farmers",
        list: [
          "Spraying flooded paddy, tall sugarcane and dense cotton without walking through the crop",
          "Reducing the farmer's direct contact with chemicals, since the pilot stays at the field edge",
          "Using much less water per acre than conventional knapsack spraying",
          "Covering fields quickly when a pest or disease outbreak needs a timely response",
          "Creating field maps and crop health maps for better planning",
        ],
      },
      {
        heading: "Types of agricultural drones used in India",
        body: [
          "Not every drone sold in India is meant for farming. Agricultural UAVs fall into three broad groups, and many service providers use more than one type.",
        ],
        list: [
          "Spraying drones: a tank, pump and nozzles (or a spreader attachment) for pesticides, liquid nutrients and in some cases granules or seeds",
          "Mapping drones: an RGB camera flown in a grid to stitch an accurate orthomosaic map of the field",
          "Monitoring drones: multispectral or thermal cameras that reveal crop stress before it is visible to the eye",
        ],
      },
      {
        heading: "Three paths for farmers and agri-entrepreneurs",
        table: {
          caption: "Which route suits you",
          head: ["Option", "Best for", "What you pay for"],
          rows: [
            ["Hire a drone spraying service", "Individual farmers, small and medium plots", "Only the area sprayed"],
            ["Rent a drone", "FPOs and large farms for a season", "Rental period, often with an operator"],
            ["Buy a drone", "CHCs, FPOs, cooperatives, service entrepreneurs", "Drone, batteries, pilot, upkeep"],
          ],
        },
      },
      {
        heading: "Where drone adoption is heading",
        body: [
          "Government initiatives such as Kisan Drones and drone support for women's self-help groups have pushed demonstrations into villages. As more operators get certified and more products receive approval for drone use, the service is becoming available in more districts every season.",
          "The biggest gaps today are trained local pilots, reliable after-sales service and clear information for farmers. That is why we focus on honest guidance — what a drone can and cannot do — before anyone spends money.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are agricultural drones legal in India?",
        a: "Yes. Under the Drone Rules, 2021, drones can be used for agriculture when the drone is certified and registered, the pilot holds a Remote Pilot Certificate, and the flight follows airspace rules and the spraying SOP.",
      },
      {
        q: "Does a farmer need a licence to use a drone?",
        a: "A farmer who hires a spraying service does not need any licence — the operator handles compliance. Anyone who flies the drone themselves needs a Remote Pilot Certificate from a DGCA-authorised RPTO.",
      },
      {
        q: "Which crops are sprayed by drone in India?",
        a: "Paddy, wheat, cotton, sugarcane, soybean, maize, pulses, vegetables, grapes and orchard crops, among others — always with products approved for drone application on that crop.",
      },
      {
        q: "How do I register an agriculture drone?",
        a: "Registration is done on DGCA's Digital Sky platform, which issues a Unique Identification Number for a drone of a certified type. Sellers usually help buyers with the paperwork.",
      },
      {
        q: "Can I fly a drone anywhere over my own field?",
        a: "Not automatically. Check the Digital Sky airspace map first. Fields in yellow or red zones need permission, and you must keep safe distances from people, houses and sensitive sites.",
      },
      {
        q: "Is there government support for agricultural drones?",
        a: "Yes, there have been schemes for institutions, FPOs, Custom Hiring Centres and women's SHGs. Eligibility and amounts change, so check the latest guidelines with official sources.",
      },
      {
        q: "How do I start using drones on my farm?",
        a: "Start with a drone spraying service for one crop, see the results, then decide whether renting or buying makes sense for your area. Call 8282802150 to discuss your field.",
      },
    ],
    cta: { topic: "demo", label: "Book a free demo call" },
    related: ["/how-to-become-agricultural-drone-pilot/", "/drone-spraying-service/", "/kisan-drone-scheme/"],
    schema: "WebPage",
  },
  {
    slug: "drone-for-farming",
    category: "kisan-drone",
    navLabel: "Benefits of Farming Drones",
    summary: "The practical benefits and limits of farming drones, and when to use them.",
    h1: "Drone for Farming: 8 Real Benefits, Honest Limits and How to Use It Right",
    seo: {
      title: "Drone for Farming: 8 Benefits, Limits & Right Use",
      description:
        "Is a drone for farming worth it? 8 practical benefits, the situations where it fails, and a checklist for safe, effective drone spraying on your farm.",
      keywords: [
        "Drone for farming",
        "farming drone benefits",
        "advantages of drones in agriculture",
        "drone spraying benefits",
        "smart farming drone",
        "precision farming",
      ],
    },
    intro:
      "A drone for farming is a tool, not magic. Used for the right job, it saves time, water and effort and keeps people away from chemicals. Used in the wrong field or weather, it can waste money. This page gives a balanced view so you can decide when a farming drone makes sense for you.",
    quickAnswer:
      "Drones help farmers spray faster on large or hard-to-walk fields, use less water per acre, reduce direct chemical exposure and react quickly to pest outbreaks. They work less well on very small plots surrounded by trees or wires, in strong wind, or with products not approved for drone use. Results depend on correct settings and a trained pilot.",
    takeaways: [
      "Biggest gains: flooded paddy, tall sugarcane and cotton, and urgent outbreak spraying.",
      "Drones do not replace good agronomy — the right product and timing still matter most.",
      "Low wind, correct height and the right nozzles decide spray quality.",
      "Try a hired service first before investing in your own drone.",
    ],
    sections: [
      {
        heading: "8 practical benefits of drones in agriculture",
        subsections: [
          {
            heading: "1. Speed when it matters",
            body: [
              "Pest and disease attacks need a quick response. A drone can cover a field far faster than a person with a knapsack sprayer, so the whole crop is treated within the right window.",
            ],
          },
          {
            heading: "2. No need to walk into the crop",
            body: [
              "In flooded paddy, tall sugarcane or dense cotton, walking is slow and damages plants. The drone flies above the canopy, so there is no trampling and no wheel tracks.",
            ],
          },
          {
            heading: "3. Lower water use",
            body: [
              "Drones use a much smaller spray volume per acre than conventional spraying, which helps in areas where carrying water to the field is difficult.",
            ],
          },
          {
            heading: "4. Less chemical exposure",
            body: [
              "The pilot stands at the field edge instead of walking through the spray, reducing direct contact. PPE is still essential while mixing and filling.",
            ],
          },
          {
            heading: "5–8. Uniform coverage, records, labour savings and mapping",
            list: [
              "GPS-guided flight paths give even coverage with fewer missed strips",
              "Flight logs record when, where and how much was sprayed",
              "Less dependence on scarce labour at peak season",
              "Camera drones create field maps and crop health maps for planning",
            ],
          },
        ],
      },
      {
        heading: "When a farming drone may not be the right choice",
        list: [
          "Very small plots surrounded by trees, poles or power lines",
          "Strong or gusty wind, rain, or very high temperatures that increase drift and evaporation",
          "Products that are not approved for drone application on your crop",
          "Fields close to houses, schools, water bodies or beehives without proper buffer zones",
          "Fields in restricted airspace zones where permission has not been obtained",
        ],
      },
      {
        heading: "Drone vs traditional spraying at a glance",
        table: {
          caption: "General comparison — actual results depend on the field and operator",
          head: ["Point", "Drone spraying", "Knapsack / manual spraying"],
          rows: [
            ["Speed on large fields", "High", "Low"],
            ["Access to flooded or tall crops", "Easy, from above", "Difficult"],
            ["Water volume per acre", "Low", "High"],
            ["Operator exposure", "Lower (stays outside the field)", "Higher"],
            ["Small, obstructed plots", "Can be difficult", "Often easier"],
            ["Skill required", "Certified pilot", "Basic training"],
          ],
        },
      },
      {
        heading: "Is a farming drone worth it for you? A simple test",
        body: [
          "Before booking or buying, answer three questions honestly. First, how many acres need spraying each season, and how many times? Second, how hard is it to find labour at the time you need to spray? Third, how difficult is it to walk through your crop — is it flooded, tall or dense?",
          "If your area is large, labour is scarce at peak time, or the crop is hard to enter, a drone will likely save you time and effort. If your plot is small, open and easy to walk, compare costs carefully; a hired drone service shared with neighbours often gives the best value.",
        ],
      },
      {
        heading: "Checklist for good results",
        list: [
          "Identify the pest or deficiency correctly — ask your KVK or agronomist if unsure",
          "Use a product approved for drone use and follow the label dose",
          "Spray in calm conditions, usually early morning or late afternoon",
          "Ask the pilot about height, swath width, speed and nozzle type for your crop",
          "Inform neighbours and keep people and animals away during spraying",
          "Keep a record of the date, product and area sprayed",
        ],
      },
    ],
    faqs: [
      {
        q: "Is drone spraying better than manual spraying?",
        a: "On large, flooded or tall crops it is usually faster and keeps the operator away from chemicals. On very small or obstructed plots, manual spraying can still be the practical choice.",
      },
      {
        q: "Does a drone reduce pesticide use?",
        a: "The dose of the product should follow the label. What drops sharply is the water volume. Even coverage can reduce waste, but the label dose still applies.",
      },
      {
        q: "Can drones be used in small fields?",
        a: "Often yes, especially when neighbouring fields are sprayed together. Very small plots with trees or wires around them can be difficult and less economical.",
      },
      {
        q: "Does drone spraying work as well as traditional spraying?",
        a: "When the product, dose, nozzles, height and weather are right, drone spraying can give good coverage. Poor settings or windy weather reduce effectiveness with any method.",
      },
      {
        q: "Is drone spraying safe for bees and the environment?",
        a: "Risk depends on the product and timing. Avoid spraying during flowering hours when bees are active, keep buffer zones near water and follow the SOP for drone spraying.",
      },
      {
        q: "What else can a farming drone do besides spraying?",
        a: "Drones with RGB or multispectral cameras can map fields, measure area and show crop health differences, helping you find problem patches early.",
      },
      {
        q: "How do I try a drone on my farm?",
        a: "Book a drone spraying service for one field first. Call or WhatsApp 8282802150 with your crop, area and location.",
      },
    ],
    cta: { topic: "service", label: "Call for free advice" },
    related: ["/crop-spraying-drone/", "/crops/", "/agriculture-drone-price-in-india/"],
    schema: "WebPage",
  },
];
