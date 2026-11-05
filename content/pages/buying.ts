import type { KeywordPage } from "../types";

/** Buying & Comparison keyword pages. No brand rankings, prices or specs are invented. */
export const buyingPages: KeywordPage[] = [
  {
    slug: "best-agriculture-drone-in-india",
    category: "buying-guide",
    navLabel: "Best Agriculture Drone in India",
    summary: "Criteria, not brands — a checklist for choosing the best drone for you.",
    h1: "Best Agriculture Drone in India: How to Choose the Right One for Your Farm",
    seo: {
      title: "Best Agriculture Drone in India: 10-Point Buyer Checklist",
      description:
        "There is no single best agriculture drone — only the best one for your crops, area and budget. Use this 10-point checklist to compare drones before you buy.",
      keywords: [
        "Best agriculture drone in India",
        "best kisan drone",
        "top agriculture drones India",
        "agriculture drone comparison",
        "which drone is best for farming",
        "drone buying checklist",
      ],
    },
    intro:
      "Search for the “best agriculture drone in India” and you will find many lists — often written to sell a particular brand. The truth is that the best drone for a 20-acre farmer in Punjab is not the best one for a sugarcane FPO in Maharashtra or a grape grower in Nashik. This guide gives you the criteria to decide for yourself.",
    quickAnswer:
      "The best agriculture drone in India is the one that fits your crops, field size, terrain and budget — and comes with a valid DGCA type certificate, enough battery sets, reliable local service and spare parts, pilot training and clear warranty terms. Shortlist two or three certified models, see a live field demo and compare full-package quotes.",
    takeaways: [
      "Certification and after-sales support matter more than headline specifications.",
      "Match tank class to field size: smaller for scattered plots, larger for big blocks.",
      "Always watch a demo in a field similar to yours before buying.",
      "Talk to existing owners in your area about service and breakdowns.",
    ],
    sections: [
      {
        heading: "Why there is no single “best” drone",
        body: [
          "Agriculture drones are tools for a job. A light 10 litre drone that is easy to carry between small, scattered plots may be perfect for one buyer and frustrating for another who needs to cover hundreds of acres of sugarcane in a short window. The best choice depends on the work you will do, where you will do it and who will maintain the drone.",
          "Instead of chasing a ranking, define your needs first: which crops, how many acres a season, what terrain, who will fly, and how far the nearest service centre is. Then judge every model against those needs.",
        ],
      },
      {
        heading: "10-point checklist for choosing an agriculture drone",
        subsections: [
          {
            heading: "Legal and safety",
            list: [
              "1. Valid DGCA type certificate for the exact model",
              "2. Support for UIN registration on Digital Sky",
              "3. Safety features: return-to-home, obstacle sensing, geofencing",
            ],
          },
          {
            heading: "Performance in your fields",
            list: [
              "4. Tank class suited to your field size and terrain",
              "5. Spray system — nozzle type, flow control and droplet settings",
              "6. Terrain following for slopes and uneven canopies",
              "7. Battery sets and charging set-up for continuous work",
            ],
          },
          {
            heading: "Support and ownership",
            list: [
              "8. Service centre and spare parts within reach",
              "9. Pilot training and onboarding included",
              "10. Written warranty covering frame, motors, electronics and batteries",
            ],
          },
        ],
      },
      {
        heading: "Match the drone to your work",
        table: {
          caption: "General guidance — confirm with a demo in your own fields",
          head: ["Your situation", "What to look for"],
          rows: [
            ["Small, scattered plots", "Lighter, compact drone that is easy to transport"],
            ["Medium farms or a starting service business", "Balanced mid-size tank with several battery sets"],
            ["Large continuous fields, sugarcane, FPO work", "Larger tank, strong charging set-up, generator"],
            ["Hilly or terraced fields", "Reliable terrain following and good obstacle sensing"],
            ["Orchards and vineyards", "Precise route planning and good canopy penetration"],
          ],
        },
      },
      {
        heading: "Always see a live demo",
        body: [
          "Brochures and videos show ideal conditions. A live demo in a field similar to yours shows the real picture: how long set-up takes, how the drone handles wind and obstacles, how easy the app is for your pilot and how even the spray looks on the crop.",
          "During the demo, ask to see a battery swap and refill, check the spray pattern on water-sensitive paper if available, and ask the operator about common faults and how they are fixed.",
        ],
      },
      {
        heading: "Talk to existing owners",
        body: [
          "The best information often comes from drone owners in your district. Ask how quickly repairs were done during the season, whether spare parts were available, how long batteries lasted and whether they would buy the same model again. A drone with an excellent specification sheet but poor local service can cost you a whole season.",
        ],
        note: "We do not rank brands on this website. [If you are an authorised dealer for a brand, add its name and authorisation details here.]",
      },
      {
        "heading": "Total cost over three seasons, not just the price tag",
        "body": [
          "A useful way to compare drones is to estimate what each will cost you over three seasons. Add the purchase price, the extra battery sets you will need, expected battery replacements, routine spare parts, insurance, the pilot's cost and transport. Then estimate the acres each drone can realistically cover in your conditions.",
          "Dividing total cost by total acres gives a rough cost per acre for each option. The drone with the lowest purchase price is often not the one with the lowest cost per acre once downtime, batteries and repairs are counted."
        ]
      },
    ],
    faqs: [
      {
        q: "Which is the best agriculture drone in India?",
        a: "There is no single best model for everyone. The best drone matches your crops, field size and terrain, is DGCA type-certified and has reliable service and spare parts near you.",
      },
      {
        q: "Do you recommend any brand?",
        a: "We do not rank brands on the website. Tell us your needs and we will explain which options suit you and why.",
      },
      {
        q: "Is it fine to buy a cheap drone?",
        a: "A low price is fine only if the drone is certified and has spares, service and battery support. An uncertified or unsupported drone can become unusable mid-season.",
      },
      {
        q: "How can I get a demo?",
        a: "Call or WhatsApp 8282802150 with your crop, location and area, and we will tell you about demo options.",
      },
      {
        q: "What should I check in a drone warranty?",
        a: "What is covered (frame, motors, electronics, batteries), for how long, what is excluded (crash damage, misuse), and how fast claims are handled during the season.",
      },
      {
        q: "Is it fine to buy a second-hand drone?",
        a: "Be cautious. Check registration transfer, battery health, crash history, firmware and whether the manufacturer still supports the model.",
      },
      {
        q: "What specifications matter most?",
        a: "Certification, spray system quality, terrain following, battery set-up and service support matter more than the maximum tank size or top speed.",
      },
      {
        "q": "How long does an agriculture drone last?",
        "a": "With proper care, the frame can last several seasons, while propellers, nozzles, pumps and batteries are replaced as they wear. Lifespan depends heavily on maintenance and handling."
      },
    ],
    cta: { topic: "demo", label: "Book a free demo" },
    related: ["/agriculture-drone-company-in-india/", "/best-drone-for-spraying-crops/"],
    schema: "WebPage",
  },
  {
    slug: "best-drone-for-spraying-crops",
    category: "buying-guide",
    navLabel: "Best Drone for Spraying Crops",
    summary: "Which features matter most in a drone for spraying.",
    h1: "Best Drone for Spraying Crops: 7 Features That Decide Spray Quality",
    seo: {
      title: "Best Drone for Spraying Crops: 7 Features That Matter",
      description:
        "Choosing a drone for crop spraying? Compare spray system, nozzles, flow control, terrain following, RTK, batteries and app — what really matters and why.",
      keywords: [
        "Best drone for spraying crops",
        "crop spraying drone features",
        "spray drone nozzle types",
        "RTK spraying drone",
        "terrain following drone",
        "drone sprayer comparison",
      ],
    },
    intro:
      "Two spraying drones can carry the same tank and still deliver very different results in the field. What separates a good crop spraying drone from an average one is the spray system, flight control and how well the whole package suits your crops. Here are the seven features worth comparing.",
    quickAnswer:
      "The best drone for spraying crops has an accurate spray system (consistent flow control and suitable nozzles), stable flight with terrain following, reliable positioning (RTK if you need precision), enough battery capacity for continuous work, a simple planning app and good local support. These features matter more than the biggest tank or the highest advertised acres per hour.",
    takeaways: [
      "Flow control that adjusts to speed keeps the dose even across the field.",
      "Terrain following is essential on uneven land and orchards.",
      "RTK is useful for precise, repeatable routes but not essential for every farm.",
      "A bigger tank is not always better — weight, batteries and transport matter.",
    ],
    sections: [
      {
        heading: "1. Spray system and flow control",
        body: [
          "The spray system decides whether the dose is even across the field. Good drones adjust flow rate automatically as speed changes, so turns and slow-downs do not cause over-application. Ask how flow is measured and controlled, and whether the system alerts you to blockages or an empty tank.",
        ],
      },
      {
        heading: "2. Nozzle type and droplet size",
        body: [
          "Pressure (fan) nozzles are simple and easy to replace. Centrifugal nozzles allow droplet size to be adjusted, which helps balance coverage and drift. Whatever the type, you should be able to change droplet size or nozzle tips for different products and conditions.",
        ],
      },
      {
        heading: "3. Flight control and stability",
        subsections: [
          {
            heading: "Terrain following",
            body: [
              "Radar or sensors keep the drone at a constant height above the crop on slopes, bunds and uneven canopies. Without it, spray height varies and coverage suffers.",
            ],
          },
          {
            heading: "Obstacle sensing",
            body: [
              "Forward and rear sensing helps avoid trees, poles and wires. It is a safety backup, not a replacement for a careful field survey.",
            ],
          },
          {
            heading: "Positioning (GNSS and RTK)",
            body: [
              "Standard GNSS is fine for most open fields. RTK adds centimetre-level accuracy for precise, repeatable routes in orchards, narrow plots and contract work.",
            ],
          },
        ],
      },
      {
        heading: "4–7. Batteries, app, durability and support",
        list: [
          "Batteries: capacity, charging time and how many sets keep the drone flying continuously",
          "App: easy field mapping, clear settings and a language your pilot understands",
          "Durability: dust and water resistance, foldable arms, easy cleaning after chemical use",
          "Support: service centre distance, spare parts stock and training",
        ],
      },
      {
        heading: "Which drone suits which crop?",
        table: {
          caption: "Feature priorities by crop type",
          head: ["Crop type", "Most important features"],
          rows: [
            ["Paddy and wheat (open fields)", "Even flow control, wide swath, efficient batteries"],
            ["Cotton and sugarcane (tall, dense)", "Strong downwash, terrain following, stable height"],
            ["Orchards and vineyards", "Precise routes (RTK), obstacle sensing, canopy penetration"],
            ["Vegetables (small, mixed plots)", "Compact size, quick set-up, fine droplet control"],
          ],
        },
      },
      {
        heading: "How to compare drones in a demo",
        list: [
          "Ask for the same field, product and settings for each drone you compare",
          "Use water-sensitive paper at different heights in the canopy to see coverage",
          "Time a full cycle: spraying, return, refill and battery swap",
          "Observe how the drone handles wind and field edges",
          "Ask the pilot how easy it is to change nozzles and clean the system",
        ],
      },
      {
        "heading": "Software and data features worth having",
        "body": [
          "Modern spraying drones are as much software as hardware. A good planning app saves time every day and reduces mistakes in the field."
        ],
        "list": [
          "Quick field boundary mapping by walking, flying or importing a map",
          "Saved fields, so repeat jobs need no re-mapping",
          "Resume-from-breakpoint after refills and battery swaps",
          "Spray logs with area, flow and time for records and billing",
          "Fleet management if you plan to run more than one drone"
        ]
      },
      {
        "heading": "Mistakes buyers make when choosing a spraying drone",
        "list": [
          "Comparing only tank size and advertised acres per hour",
          "Ignoring how many battery sets are needed for real work",
          "Not checking whether nozzles and droplet size suit their crops",
          "Choosing a model with no service centre in their state",
          "Skipping the field demo and buying from a video"
        ]
      },
      {
        "heading": "Check certification before features",
        "body": [
          "Whatever features you shortlist, confirm the exact model has a valid type certificate and can be registered on Digital Sky. An excellent spray system is of no use if the drone cannot be operated legally."
        ]
      },
    ],
    faqs: [
      {
        q: "Is RTK necessary for a spraying drone?",
        a: "Not for every farm. RTK is valuable for precise, repeatable routes in orchards, narrow plots and service businesses. Standard GNSS works for many open fields.",
      },
      {
        q: "Is a bigger tank always better?",
        a: "No. A bigger tank means a heavier drone, bigger batteries and harder transport. Choose the tank class that matches your fields and logistics.",
      },
      {
        q: "Which drone suits which crop?",
        a: "Open fields need even flow and efficient batteries; tall crops need strong downwash and stable height; orchards need precise routes and obstacle sensing.",
      },
      {
        q: "Why is terrain following important?",
        a: "It keeps spray height constant over uneven ground and canopies, which keeps coverage even and reduces drift.",
      },
      {
        q: "Why does the nozzle type matter?",
        a: "Nozzles decide droplet size and pattern, which affect coverage, penetration and drift. The right choice depends on the product and conditions.",
      },
      {
        q: "How do I test spray coverage?",
        a: "Place water-sensitive paper cards at the top, middle and bottom of the canopy and check droplet density after a pass.",
      },
      {
        q: "Can I get a quote for a spraying drone?",
        a: "Yes. Call 8282802150 with your crops, area and terrain, and we will share options and a written quote.",
      },
      {
        "q": "What is downwash and why does it matter?",
        "a": "Downwash is the air pushed down by the rotors. It drives droplets into the canopy, helping coverage on both sides of leaves — especially in dense crops."
      },
      {
        "q": "Does a spraying drone need different nozzles for herbicides?",
        "a": "Often yes. Herbicide spraying usually needs coarser droplets to limit drift onto nearby crops. Use only herbicides approved for drone application and follow the label."
      },
    ],
    cta: { topic: "price", label: "Get a free price quote" },
    related: ["/agriculture-spraying-drone/", "/10-litre-agriculture-drone/"],
    schema: "WebPage",
  },
  {
    slug: "10-litre-agriculture-drone",
    category: "buying-guide",
    navLabel: "10 Litre Agriculture Drone",
    summary: "A lighter class of drone for small and scattered fields.",
    h1: "10 Litre Agriculture Drone: Who Should Buy One and What to Check",
    seo: {
      title: "10 Litre Agriculture Drone: Pros, Cons & Who It Suits",
      description:
        "Is a 10 litre agriculture drone right for you? Advantages for small and scattered fields, limits on large areas, what to check before buying and 10 vs 16 L.",
      keywords: [
        "10 litre agriculture drone",
        "10L spraying drone",
        "small agriculture drone",
        "10 litre kisan drone",
        "compact spray drone",
        "drone for small farmers",
      ],
    },
    intro:
      "The 10 litre class is the entry point for many agriculture drone buyers. It is lighter, easier to transport and simpler to handle than larger drones. But a smaller tank also means more refills. Here is who the 10 litre agriculture drone suits best and what to check before buying one.",
    quickAnswer:
      "A 10 litre agriculture drone suits small and scattered fields, vegetable plots, hilly terrain and new pilots or service starters. It is lighter, easier to carry and quicker to set up, but needs more frequent refills and battery swaps, so it covers less area per day than 16 or 20 litre drones. Check certification, battery sets and service support before buying.",
    takeaways: [
      "Best for small plots, scattered fields and difficult access.",
      "Lighter batteries and easier transport on a two-wheeler or small vehicle.",
      "More refills per acre than larger drones — plan water and batteries.",
      "A good learning platform for new pilots and small service businesses.",
    ],
    sections: [
      {
        heading: "Advantages of a 10 litre drone",
        subsections: [
          {
            heading: "Easy to transport",
            body: [
              "A compact frame with foldable arms fits in a small vehicle. This matters when fields are spread across villages connected by narrow roads.",
            ],
          },
          {
            heading: "Quick set-up on small plots",
            body: [
              "Small plots need many short jobs. A lighter drone with smaller batteries is faster to set up, move and pack, saving time between fields.",
            ],
          },
          {
            heading: "Lower running effort",
            body: [
              "Smaller batteries are easier to handle and charge, and the drone is less demanding to manoeuvre — useful for new pilots building experience.",
            ],
          },
        ],
      },
      {
        heading: "Limits to keep in mind",
        list: [
          "More refills and battery swaps per acre than larger drones",
          "Less area covered per day on large, continuous fields",
          "Narrower swath on many models, meaning more passes",
          "May not be the most economical choice for a large service business",
        ],
      },
      {
        heading: "10 litre vs 16 litre — quick comparison",
        table: {
          caption: "General comparison; actual figures depend on the model",
          head: ["Point", "10 litre class", "16 litre class"],
          rows: [
            ["Weight and transport", "Lighter, easier", "Heavier"],
            ["Refills per acre", "More", "Fewer"],
            ["Best fields", "Small, scattered, hilly", "Medium to large"],
            ["Ideal buyer", "Small service starter, vegetable belts", "Growing service business, FPO"],
          ],
        },
      },
      {
        heading: "What to check before buying",
        list: [
          "DGCA type certificate and registration support for the exact model",
          "Battery sets included and the price of extra sets",
          "Charging time compared with flight time",
          "Spray system: nozzle type, flow control and droplet settings",
          "Spare parts and service availability near you",
          "Training for your pilot",
        ],
        note: "[Add available models and stock information here.]",
      },
      {
        heading: "Who it is right for",
        body: [
          "A 10 litre drone fits farmers and young entrepreneurs in areas with small landholdings, vegetable belts, terraced fields or plots separated by trees and bunds. It is also a sensible first drone for someone building a spraying service step by step. As demand grows, many operators add a larger drone for big fields and keep the 10 litre drone for small jobs.",
        ],
      },
      {
        "heading": "Running a small spraying service with a 10 litre drone",
        "body": [
          "Many young entrepreneurs start a drone spraying service with a 10 litre drone because the investment and handling are manageable. The key to making it work is efficient scheduling. Group bookings in the same village, keep batteries charged and water ready, and plan routes so that travel time between fields stays short.",
          "Keep simple records of every job — date, farmer, crop, area, product and payment. After one season these records show exactly how many acres you can handle and whether adding a second drone or a larger one makes sense."
        ]
      },
      {
        "heading": "Crops where a 10 litre drone fits well",
        "list": [
          "Vegetables grown in small, mixed plots",
          "Pulses and oilseeds on scattered landholdings",
          "Terraced or hilly fields where heavy drones are harder to handle",
          "Small orchards and nurseries with careful route planning"
        ]
      },
      {
        "heading": "Upgrade path as your work grows",
        "body": [
          "A 10 litre drone does not have to be your only drone forever. Many operators keep it for small and difficult plots after adding a larger drone for big fields. Ask the dealer whether batteries, chargers or accessories can be shared across models from the same brand — this can reduce costs when you expand."
        ]
      },
    ],
    faqs: [
      {
        q: "Who should buy a 10 litre agriculture drone?",
        a: "Owners of small or scattered fields, vegetable growers, operators in hilly areas and new service providers starting small.",
      },
      {
        q: "How many acres can a 10 litre drone spray in a day?",
        a: "It depends on the spray volume per acre, battery sets, refilling speed, field layout and weather. Ask for a realistic estimate based on your conditions.",
      },
      {
        q: "Is a 10 litre drone enough for a spraying business?",
        a: "It can be a good start, especially in small-plot areas. For large fields and high demand, a larger drone may be more economical.",
      },
      {
        q: "Does a 10 litre drone need a pilot certificate?",
        a: "Yes. Commercial operation of an agriculture spraying drone requires a Remote Pilot Certificate and a registered, certified drone.",
      },
      {
        q: "How many battery sets do I need?",
        a: "For continuous work, usually several sets so one can charge while another flies. The right number depends on charging time and flight time.",
      },
      {
        q: "What is the price of a 10 litre drone?",
        a: "Prices depend on the model and package. Call 8282802150 for a written quote.",
      },
      {
        "q": "Is a 10 litre drone easier to learn on?",
        "a": "Its lighter weight and smaller size make it more forgiving for new pilots, but proper certified training is still essential."
      },
      {
        "q": "Can a 10 litre drone spray tall crops?",
        "a": "Yes, with correct height settings and terrain following, though large blocks of tall crops may be covered faster by larger drones."
      },
      {
        "q": "Can a 10 litre drone be carried on a motorcycle?",
        "a": "Some compact models with folding arms can be carried carefully, but batteries, water and equipment usually need a small vehicle. Always transport batteries safely."
      },
    ],
    cta: { topic: "price", label: "Get a 10 L drone quote" },
    related: ["/16-litre-agriculture-drone/", "/20-litre-agriculture-drone/"],
    schema: "WebPage",
  },
  {
    slug: "16-litre-agriculture-drone",
    category: "buying-guide",
    navLabel: "16 Litre Agriculture Drone",
    summary: "A balanced class for medium-to-large fields and service providers.",
    h1: "16 Litre Agriculture Drone: The Balanced Choice for Farms and Service Providers",
    seo: {
      title: "16 Litre Agriculture Drone: Is It the Right Balance?",
      description:
        "Why many service providers choose a 16 litre agriculture drone — area per flight, transport, batteries and costs compared with 10 L and 20 L drones.",
      keywords: [
        "16 litre agriculture drone",
        "16L spraying drone",
        "mid-size kisan drone",
        "16 litre drone for FPO",
        "drone for spraying business",
        "16 vs 20 litre drone",
      ],
    },
    intro:
      "The 16 litre class sits in the middle of the agriculture drone range. It covers more area per flight than a 10 litre drone, yet stays more manageable than a 20 litre drone. That balance makes it popular with farmers who have medium-to-large fields and with people building a drone spraying service.",
    quickAnswer:
      "A 16 litre agriculture drone is a balanced choice for medium-to-large farms, FPOs and spraying service providers. It needs fewer refills than a 10 litre drone while remaining easier to transport and power than a 20 litre drone. Before buying, check certification, battery sets, charging set-up, service support and training.",
    takeaways: [
      "Good balance of area per flight, weight and transport.",
      "Popular with service providers working across varied field sizes.",
      "Needs a solid charging set-up — several battery sets and often a generator.",
      "Compare the full package, not just the tank size.",
    ],
    sections: [
      {
        heading: "Who a 16 litre drone suits",
        subsections: [
          {
            heading: "Medium and large farms",
            body: [
              "Farmers with larger landholdings who spray several times a season can cover their own fields efficiently without the bulk of a heavy drone.",
            ],
          },
          {
            heading: "Drone spraying entrepreneurs",
            body: [
              "Service providers handle a mix of small and large jobs. A 16 litre drone is versatile enough for both and keeps refill trips manageable.",
            ],
          },
          {
            heading: "FPOs and Custom Hiring Centres",
            body: [
              "Groups serving many members need reliability and steady output across the season. The mid-size class is often a practical fit.",
            ],
          },
        ],
      },
      {
        heading: "10 vs 16 vs 20 litre at a glance",
        table: {
          caption: "General comparison; check each model's specifications",
          head: ["Point", "10 L", "16 L", "20 L"],
          rows: [
            ["Area per flight", "Lower", "Medium", "Higher"],
            ["Weight and transport", "Easiest", "Moderate", "Heaviest"],
            ["Battery and charging demand", "Lower", "Medium", "Higher"],
            ["Best for", "Small plots", "Mixed workloads", "Large blocks"],
          ],
        },
      },
      {
        heading: "Before buying a 16 litre drone",
        list: [
          "Confirm the DGCA type certificate for the exact model",
          "Check how many battery sets come with the package",
          "Plan your charging: fast charger and generator at the field",
          "Check transport — vehicle size and loading",
          "Ask about spare parts stock and repair times in season",
          "Confirm pilot training and app support",
        ],
      },
      {
        heading: "Planning a spraying business with a 16 litre drone",
        body: [
          "If you plan to offer spraying to other farmers, think beyond the drone. You will need a certified pilot, a helper for mixing and refilling, a vehicle, a water supply plan, a generator and enough battery sets. Demand also matters: talk to farmers and FPOs in your area to estimate how many acres you can realistically book each season.",
          "Many successful operators start by doing group bookings in their own village, building trust through good results, and then expanding to neighbouring areas.",
        ],
      },
      {
        heading: "Scheme support",
        body: [
          "Some schemes have supported drone purchases by FPOs, CHCs and other eligible groups. Check eligibility, application timing and any list of approved models with official sources before ordering. See our guide on buying a drone with subsidy for the correct order of steps.",
        ],
      },
      {
        "heading": "A typical working day with a 16 litre drone",
        "body": [
          "A productive day starts before sunrise. The crew loads the drone, charged batteries, generator, water and the farmer's product, and reaches the first field while the wind is calm. The pilot checks the field, sets the route and starts spraying while the helper mixes the next tank and manages battery charging.",
          "Through the morning, the team moves from field to field in a planned order, pausing when wind rises in the afternoon heat. Spraying often resumes in the late afternoon. At the end of the day the drone is cleaned, batteries are cooled and charged, and records are updated.",
          "This rhythm shows why a mid-size drone suits service work: enough capacity to keep moving, yet light enough to move quickly between many farmers' fields."
        ]
      },
      {
        "heading": "Costs to plan for in the first season",
        "list": [
          "Pilot certification and training",
          "Registration, insurance and paperwork",
          "Generator, fuel and charging equipment",
          "Spare propellers, nozzles and pump parts",
          "Vehicle running costs and crew wages"
        ],
        "body": [
          "Planning these costs before buying helps you set fair service rates and avoid surprises once the season starts."
        ]
      },
    ],
    faqs: [
      {
        q: "Who should buy a 16 litre agriculture drone?",
        a: "Medium-to-large farmers, FPOs, Custom Hiring Centres and service providers handling a mix of field sizes.",
      },
      {
        q: "Is a 16 litre drone better than a 10 litre drone?",
        a: "For larger areas it usually needs fewer refills. For small, scattered plots, a lighter 10 litre drone can be more practical.",
      },
      {
        q: "How many battery sets does a 16 litre drone need?",
        a: "Enough to keep flying while others charge — usually several sets plus a fast charger and generator.",
      },
      {
        q: "Can a 16 litre drone spray sugarcane?",
        a: "Yes, with proper height settings and terrain following. Large sugarcane blocks may also suit a 20 litre drone.",
      },
      {
        q: "Can I buy a 16 litre drone under a scheme?",
        a: "Eligible groups may get support under certain schemes. Confirm eligibility and approved models with official sources first.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or WhatsApp 8282802150 with your crops, area and plans.",
      },
      {
        "q": "How big a vehicle do I need for a 16 litre drone?",
        "a": "A small pickup or utility vehicle is usually needed to carry the drone, batteries, generator, water and supplies together."
      },
      {
        "q": "Can one pilot run a 16 litre drone alone?",
        "a": "It is possible but slow. A helper for mixing, refilling and battery management makes the work safer and much faster."
      },
      {
        "q": "Is a 16 litre drone good for paddy and wheat?",
        "a": "Yes. Open paddy and wheat fields are well suited to a mid-size drone with even flow control and a sensible swath width."
      },
      {
        "q": "What warranty should I expect on a 16 litre drone?",
        "a": "Terms vary by manufacturer. Ask what is covered — frame, motors, electronics, batteries — for how long, and what is excluded."
      },
    ],
    cta: { topic: "price", label: "Get a 16 L drone quote" },
    related: ["/10-litre-agriculture-drone/", "/agriculture-drone-with-subsidy/"],
    schema: "WebPage",
  },
  {
    slug: "20-litre-agriculture-drone",
    category: "buying-guide",
    navLabel: "20 Litre Agriculture Drone",
    summary: "A larger class for big, continuous fields and heavy work.",
    h1: "20 Litre Agriculture Drone: Built for Large Fields and Heavy Workloads",
    seo: {
      title: "20 Litre Agriculture Drone: For Large Farms & FPOs",
      description:
        "Is a 20 litre agriculture drone right for you? Where it saves time, what extra batteries, transport and power it needs, and how to plan before buying.",
      keywords: [
        "20 litre agriculture drone",
        "20L spraying drone",
        "large agriculture drone",
        "heavy-duty spray drone",
        "drone for sugarcane spraying",
        "high capacity kisan drone",
      ],
    },
    intro:
      "When fields are large and continuous — sugarcane blocks, big wheat or paddy areas, plantation crops — a larger tank means fewer refill trips and more acres per hour. A 20 litre agriculture drone is built for that kind of work. It also asks more of you in batteries, power, transport and pilot skill.",
    quickAnswer:
      "A 20 litre agriculture drone suits large, continuous fields and heavy service workloads, because it carries more spray per flight and needs fewer refills. It also needs bigger batteries, more charging power (often a generator), a larger vehicle and an experienced pilot. It is less practical for small, scattered or obstructed plots.",
    takeaways: [
      "Highest area per flight among common classes — fewer refill trips.",
      "Requires strong charging and power planning at the field.",
      "Heavier to transport and handle; plan vehicle and crew.",
      "Best value only when there is enough large-field work.",
    ],
    sections: [
      {
        heading: "Where a 20 litre drone is useful",
        list: [
          "Large sugarcane blocks where ground sprayers cannot enter",
          "Big continuous paddy and wheat areas",
          "Plantation crops and large orchards with planned routes",
          "FPOs and service businesses with high seasonal demand",
        ],
      },
      {
        heading: "Higher requirements too",
        subsections: [
          {
            heading: "Power and batteries",
            body: [
              "Larger batteries take more power to charge. Plan a fast charger, a generator of suitable capacity and enough battery sets to avoid waiting.",
            ],
          },
          {
            heading: "Transport and crew",
            body: [
              "The drone, batteries, generator and water tanks need a proper vehicle. A helper for mixing and refilling keeps the drone working.",
            ],
          },
          {
            heading: "Pilot experience",
            body: [
              "A heavier drone carries more momentum. Experienced pilots, careful field surveys and safety margins near obstacles are essential.",
            ],
          },
        ],
      },
      {
        heading: "When a 20 litre drone may not fit",
        list: [
          "Small or scattered plots where set-up time dominates",
          "Fields with many trees, poles or wires",
          "Areas without vehicle access close to the field",
          "Owners who cannot keep the drone busy enough to justify the cost",
        ],
      },
      {
        heading: "Planning checklist for large-field operations",
        table: {
          caption: "What to plan before the season",
          head: ["Item", "Plan"],
          rows: [
            ["Battery sets", "Enough to cover charging time continuously"],
            ["Generator", "Capacity matched to charger requirements"],
            ["Water", "Tanker or nearby source; clean, filtered water"],
            ["Crew", "Certified pilot plus helper for mixing and logistics"],
            ["Spares", "Propellers, nozzles, pump parts and a spare arm"],
            ["Bookings", "Group bookings by crop and stage to minimise travel"],
          ],
        },
      },
      {
        heading: "Making the investment pay off",
        body: [
          "A larger drone earns its cost only when it works enough acres. Before buying, estimate realistic seasonal demand in your area, how many working days the weather allows and how you will manage peak periods. Some operators run a 20 litre drone for big blocks alongside a smaller drone for small plots, so both are used efficiently.",
        ],
      },
      {
        "heading": "Safety with heavier drones",
        "body": [
          "A loaded 20 litre drone is a heavy aircraft with fast-spinning propellers. Safety margins must be larger than with small drones."
        ],
        "list": [
          "Keep people, children and animals well away from take-off and landing",
          "Survey for wires, poles and trees before every job",
          "Never fly over people, roads or houses",
          "Check propellers, arms and batteries before each flight",
          "Stop work if wind gusts increase or visibility drops"
        ]
      },
      {
        "heading": "Who should not buy a 20 litre drone yet",
        "body": [
          "If you are new to drones, do not yet have steady demand or work mostly on small plots, start with a hired service or a smaller drone. Building experience and a customer base first reduces risk. Once demand for large-field work is clear, a 20 litre drone can be added to grow your capacity."
        ]
      },
      {
        "heading": "Large-field crops and planning tips",
        "body": [
          "On large sugarcane and paddy blocks, divide the area into planned sections that match one tank load. Place the refilling point centrally so the drone's return trips are short. Keep a water tanker and premixing drums ready so the helper can refill quickly. These simple logistics often decide how many acres you finish in a day more than the drone's tank size."
        ]
      },
      {
        "heading": "Certification for larger drones",
        "body": [
          "Larger drones carry more weight and risk, so make sure the exact 20 litre model you choose has a valid type certificate and that your pilot's training covers the drone's category. Ask the seller to show both before you pay."
        ]
      },
    ],
    faqs: [
      {
        q: "Who should buy a 20 litre agriculture drone?",
        a: "Large farms, FPOs and service providers with large, continuous fields and enough seasonal demand to keep it busy.",
      },
      {
        q: "Is a 20 litre drone good for small fields?",
        a: "Usually not. Set-up time and handling make a lighter drone more practical for small or scattered plots.",
      },
      {
        q: "Do I need a generator for a 20 litre drone?",
        a: "Usually yes, to charge large batteries at the field. Match generator capacity to the charger's requirement.",
      },
      {
        q: "Is a 20 litre drone harder to fly?",
        a: "It is heavier and needs more care near obstacles. A certified, experienced pilot is important.",
      },
      {
        q: "Is a 20 litre drone suitable for sugarcane?",
        a: "Yes, large sugarcane blocks are one of its best uses, with correct height settings and terrain following.",
      },
      {
        q: "How do I get a price for a 20 litre drone?",
        a: "Call 8282802150 with your crops, area and plans for a written quote.",
      },
      {
        "q": "Does a 20 litre drone need a different pilot certificate?",
        "a": "The required Remote Pilot Certificate depends on the drone's category under the rules. Confirm with your RPTO that your training covers the class of drone you will fly."
      },
      {
        "q": "Is a 20 litre drone worth it for an FPO?",
        "a": "It can be, if the FPO has large, continuous fields and enough members to keep it busy. Otherwise a mid-size drone may be more practical."
      },
      {
        "q": "How do I reduce downtime with a 20 litre drone?",
        "a": "Keep enough charged batteries, a properly sized generator, premixed spray and a central refill point, and carry essential spare parts in the vehicle."
      },
      {
        "q": "Can a 20 litre drone spread granules?",
        "a": "Many larger drones accept a spreader attachment. Check whether your chosen model supports it and test with your granule type."
      },
    ],
    cta: { topic: "price", label: "Get a 20 L drone quote" },
    related: ["/16-litre-agriculture-drone/", "/drone-spraying-for-sugarcane/"],
    schema: "WebPage",
  },
  {
    slug: "agriculture-drone-with-subsidy",
    category: "buying-guide",
    navLabel: "Buying a Drone with Subsidy",
    summary: "The process and key precautions when buying a drone under a scheme.",
    h1: "Buying an Agriculture Drone with Subsidy: The Right Order of Steps",
    seo: {
      title: "Buy Agriculture Drone with Subsidy: 6 Steps & Pitfalls",
      description:
        "Planning to buy an agriculture drone with subsidy? Follow the right order — eligibility, approval, model, purchase, claim — and avoid costly mistakes.",
      keywords: [
        "Agriculture drone with subsidy",
        "buy kisan drone with subsidy",
        "drone subsidy process",
        "SMAM drone purchase",
        "drone subsidy for FPO",
        "subsidised agriculture drone",
      ],
    },
    intro:
      "Many buyers lose scheme support simply because they did things in the wrong order — for example, buying the drone before applying, or choosing a model that was not eligible. If you plan to buy an agriculture drone with subsidy, follow the official steps carefully. Here is the general order and the mistakes to avoid.",
    quickAnswer:
      "To buy an agriculture drone with subsidy, first confirm your eligibility and the current scheme guidelines with your state agriculture department, apply through the official portal or office, wait for written sanction, then buy an eligible model from an approved supplier (if the scheme requires it), and submit the bill and documents for the claim. Do not buy before approval unless the guidelines clearly allow it.",
    takeaways: [
      "Eligibility, amounts and approved suppliers are set by official guidelines.",
      "Never purchase before written approval unless the scheme permits it.",
      "Keep every document — application, sanction letter, invoice, registration.",
      "No dealer can guarantee a subsidy.",
    ],
    sections: [
      {
        heading: "The right order of steps",
        subsections: [
          {
            heading: "1. Confirm eligibility",
            body: [
              "Schemes usually target specific groups — FPOs, cooperatives, Custom Hiring Centres, institutions, women's SHGs or individual farmers in some categories. Check the current guidelines for your state.",
            ],
          },
          {
            heading: "2. Apply officially",
            body: ["Apply through the official portal or office within the application window, with complete documents."],
          },
          {
            heading: "3. Wait for written sanction",
            body: ["Approval or sanction should be in writing. Keep it safely."],
          },
          {
            heading: "4. Choose an eligible model and supplier",
            body: [
              "Some schemes require a certified model or an empanelled supplier. Confirm before ordering.",
            ],
          },
          {
            heading: "5. Purchase, register and verify",
            body: [
              "Buy with a proper invoice, register the drone on Digital Sky and complete any physical verification the department requires.",
            ],
          },
          {
            heading: "6. Submit the claim",
            body: ["Submit the invoice and documents as instructed to release the subsidy."],
          },
        ],
      },
      {
        heading: "Documents usually needed",
        list: [
          "Identity and address proof of the applicant or organisation",
          "Registration documents for FPOs, cooperatives or CHCs",
          "Bank account details",
          "Land records where required",
          "Category certificate if applicable",
          "Quotation, invoice and drone registration (UIN) after purchase",
        ],
        note: "The final list varies by scheme and state. Always follow the official checklist.",
      },
      {
        heading: "Mistakes that cost buyers their subsidy",
        list: [
          "Buying the drone before receiving sanction",
          "Choosing a model or supplier that is not eligible under the scheme",
          "Missing the application window",
          "Incomplete or mismatched documents",
          "Trusting someone who promises a “guaranteed subsidy” for a fee",
        ],
      },
      {
        heading: "Our role",
        body: [
          "We can explain general steps, help you plan which drone suits your work and share quotations. We do not decide eligibility and cannot guarantee any subsidy. [Add details once your eligibility/empanelment is confirmed.]",
        ],
      },
      {
        heading: "Planning beyond the subsidy",
        body: [
          "Subsidy reduces the purchase cost, but running costs remain — batteries, spares, pilot, insurance and transport. Make a simple plan of how many acres the drone will cover each season and how you will earn from it or save costs. A drone that sits idle is expensive even with a subsidy.",
        ],
      },
      {
        "heading": "Who usually qualifies for drone scheme support",
        "table": {
          "caption": "Common beneficiary groups — check current guidelines for exact terms",
          "head": [
            "Group",
            "Typical purpose"
          ],
          "rows": [
            [
              "Agricultural institutions, KVKs, universities",
              "Demonstrations for farmers"
            ],
            [
              "FPOs and cooperatives",
              "Shared services for members"
            ],
            [
              "Custom Hiring Centres",
              "Renting drones and services to farmers"
            ],
            [
              "Agri-graduates and rural entrepreneurs",
              "Starting drone service businesses"
            ],
            [
              "Women's self-help groups",
              "Drone services through specific initiatives"
            ]
          ]
        }
      },
      {
        "heading": "How to prepare a strong application",
        "list": [
          "Read the latest guidelines fully before applying",
          "Prepare all documents in advance and check names match everywhere",
          "Keep a clear plan for how the drone will be used",
          "Get a proper quotation for an eligible model",
          "Submit within the window and keep acknowledgement receipts"
        ]
      },
      {
        "heading": "After you receive the drone",
        "body": [
          "Once the drone is purchased under a scheme, the department may inspect it, check registration and require you to keep it for a minimum period or use it for specific purposes. Keep the drone's records, invoices and usage logs organised. Selling or transferring a subsidised drone may be restricted, so read the conditions carefully before making any changes."
        ]
      },
      {
        "heading": "Spotting subsidy fraud",
        "body": [
          "Fraudsters sometimes target drone buyers with fake portals, fake sanction letters or demands for “processing fees”. Government departments publish official websites and contact numbers. Never pay an individual to secure approval, never share OTPs or bank passwords, and verify every letter with the issuing office directly."
        ]
      },
    ],
    faqs: [
      {
        q: "Can I buy a drone first and claim subsidy later?",
        a: "Usually not. Most schemes require approval before purchase. Check the guidelines before buying.",
      },
      {
        q: "Who is eligible for a drone subsidy?",
        a: "It depends on the scheme — often FPOs, cooperatives, CHCs, institutions, women's SHGs and some categories of farmers. Check with your state agriculture department.",
      },
      {
        q: "How much subsidy is available on agriculture drones?",
        a: "Amounts and percentages are set in official guidelines and can change. Confirm the current figures with the official source.",
      },
      {
        q: "Do I have to buy from an approved supplier?",
        a: "Some schemes require empanelled suppliers or certified models. Confirm before ordering.",
      },
      {
        q: "Can a dealer guarantee my subsidy?",
        a: "No. Only the relevant government department decides. Be cautious of anyone promising a guaranteed subsidy.",
      },
      {
        q: "Can you help me with the process?",
        a: "We can explain general steps and help with drone selection and quotations. Call 8282802150.",
      },
      {
        "q": "Where do I apply for a drone subsidy?",
        "a": "Through your state agriculture department's portal or office, or the central farm mechanisation portal where applicable. Check which applies to your scheme."
      },
      {
        "q": "Can I sell a drone bought with subsidy?",
        "a": "Schemes often restrict sale or transfer for a period. Check the conditions in your sanction letter and guidelines."
      },
      {
        "q": "How long does subsidy approval take?",
        "a": "It varies by state, scheme and application volume. Ask the department about expected timelines and track your application status regularly."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/government-subsidy-for-farming-drones/", "/kisan-drone-subsidy/"],
    schema: "WebPage",
  },
  {
    slug: "kisan-drone-dealer-near-me",
    category: "buying-guide",
    navLabel: "Kisan Drone Dealer Near Me",
    summary: "How to identify a reliable dealer near you and who to contact.",
    h1: "Kisan Drone Dealer Near Me: How to Find a Reliable Local Dealer",
    seo: {
      title: "Kisan Drone Dealer Near Me: How to Pick a Reliable One",
      description:
        "Looking for a kisan drone dealer near you? 8 checks before you buy — authorisation, service centre, spares, demo, training and paperwork. Call 8282802150.",
      keywords: [
        "Kisan drone dealer near me",
        "agriculture drone dealer",
        "drone dealer near me",
        "authorised drone dealer India",
        "agriculture drone showroom",
        "drone service centre near me",
      ],
    },
    intro:
      "A drone is only as good as the support behind it. When a part breaks in the middle of the spraying season, a nearby dealer with spares and a trained technician can save your crop and your business. Here is how to judge a kisan drone dealer near you — and how to reach us.",
    quickAnswer:
      "A reliable kisan drone dealer near you should be authorised by the manufacturer, sell DGCA type-certified models, keep spare parts and a service technician nearby, offer a live field demo, provide pilot training and help with registration paperwork. Check their authorisation letter and talk to existing customers before buying.",
    takeaways: [
      "Ask for the manufacturer's authorisation letter.",
      "Distance to the service centre matters more than the showroom.",
      "Insist on a demo in a field like yours.",
      "Get warranty, training and delivery terms in writing.",
    ],
    sections: [
      {
        heading: "8 checks for a reliable dealer",
        list: [
          "Authorisation letter from the manufacturer for the brand they sell",
          "DGCA type-certified models and help with Digital Sky registration",
          "Service centre and trained technician within reach",
          "Spare parts in stock — propellers, nozzles, pumps, arms, batteries",
          "Live field demo before purchase",
          "Pilot training or tie-up with an RPTO",
          "Clear written warranty and invoice",
          "References from existing customers in your area",
        ],
      },
      {
        heading: "Questions to ask a dealer",
        subsections: [
          {
            heading: "About the drone",
            list: [
              "Which model is this, and can I see its type certificate?",
              "How many battery sets are included, and what does an extra set cost?",
            ],
          },
          {
            heading: "About service",
            list: [
              "Where is the nearest service point, and how fast are repairs done in season?",
              "Do you provide a standby drone if mine is under repair?",
            ],
          },
          {
            heading: "About paperwork",
            list: [
              "Will you help with registration, insurance and scheme documents if applicable?",
              "Is training included, and where is it conducted?",
            ],
          },
        ],
      },
      {
        heading: "Warning signs",
        list: [
          "No authorisation letter or reluctance to show certification",
          "Pressure to pay quickly with “limited stock” claims",
          "Promises of a guaranteed subsidy",
          "No service centre or spare parts nearby",
          "Vague warranty with no written terms",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "Our head office is at H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309, open Monday to Saturday, 9:30 AM to 7:00 PM. Call or WhatsApp 8282802150 or email enquiry@kisandrone.co.in with your location, crop and requirement.",
          "[Add dealer authorisations, brands and other showroom/demo centre addresses here only once verified.]",
        ],
      },
      {
        heading: "Buying online vs from a local dealer",
        body: [
          "Buying online may look convenient, but agriculture drones need registration, training, field set-up and quick repairs. A local dealer or a company with service support in your region is usually the safer choice. If you do buy from a distant seller, confirm in writing where service and spares will come from and how long repairs will take.",
        ],
      },
      {
        "heading": "What good after-sales support looks like",
        "body": [
          "After-sales support is what you are really paying for when you choose a dealer. Good support means a phone number that is answered in season, a technician who can diagnose problems quickly, spare parts in stock and clear repair timelines.",
          "Ask the dealer how they handle breakdowns during peak weeks. Do they offer a standby drone? Can basic repairs be done at the field? How are warranty claims processed and how long do they take? The answers tell you more than any brochure."
        ]
      },
      {
        "heading": "Before you sign the purchase",
        "list": [
          "Read the warranty card and invoice carefully",
          "Confirm the exact package contents and battery sets",
          "Get training dates and location in writing",
          "Confirm registration and insurance support",
          "Save the service contact and escalation numbers"
        ]
      },
      {
        "heading": "Service-only options near you",
        "body": [
          "If you only need spraying, you may not need a dealer at all. A local drone spraying service gives you the benefits of a drone without buying one. Ask in your village, FPO or KVK whether a certified operator works nearby, or call us with your district and crop."
        ]
      },
      {
        "heading": "Visiting a dealer: what to bring",
        "list": [
          "Details of your crops, total area and typical field sizes",
          "Who will fly the drone and whether they are certified",
          "Your budget and whether you plan to apply under a scheme",
          "Questions about service, spares and training written down in advance"
        ]
      },
    ],
    faqs: [
      {
        q: "How do I find a kisan drone dealer near me?",
        a: "Ask manufacturers for their authorised dealers in your district, check service centre locations and talk to drone owners nearby. You can also call us at 8282802150.",
      },
      {
        q: "Where is your office?",
        a: "H-187, Lohia Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309. Open Monday to Saturday, 9:30 AM to 7:00 PM.",
      },
      {
        q: "Why does a nearby service centre matter?",
        a: "Breakdowns during the season need fast repairs. A distant service centre can mean days or weeks without the drone.",
      },
      {
        q: "Should I buy a drone online?",
        a: "Only if service, registration help, training and spares are clearly arranged. A local or regional dealer is usually safer.",
      },
      {
        q: "What documents should I get from the dealer?",
        a: "A proper invoice, warranty card, type certificate details, registration support and training details.",
      },
      {
        q: "Can I see a demo before buying?",
        a: "Yes, always ask for a demo in a field similar to yours. Call us to discuss demo options.",
      },
      {
        "q": "Do you offer training with the drone?",
        "a": "Training information is available. A Remote Pilot Certificate is issued only through a DGCA-authorised RPTO after training and a test."
      },
      {
        "q": "Can you arrange a drone spraying service instead of a purchase?",
        "a": "Call 8282802150 with your village, district, crop and area, and we will tell you what service options are available."
      },
      {
        "q": "What if there is no drone dealer in my district?",
        "a": "Check the nearest authorised dealer in your region and confirm how service and spares will reach you. You can also call us at 8282802150 for guidance."
      },
    ],
    cta: { topic: "price", label: "Call us now" },
    related: ["/contact/", "/agriculture-drone-company-in-india/"],
    schema: "WebPage",
  },
  {
    slug: "agriculture-drone-company-in-india",
    category: "buying-guide",
    navLabel: "Agriculture Drone Company in India",
    summary: "Criteria for assessing an agriculture drone company.",
    h1: "Agriculture Drone Company in India: 9 Ways to Judge One Before You Buy",
    seo: {
      title: "Agriculture Drone Company in India: 9 Checks Before Buying",
      description:
        "How to judge an agriculture drone company in India — certification, service network, spares, training, finance help and track record. Avoid costly mistakes.",
      keywords: [
        "Agriculture drone company in India",
        "agriculture drone manufacturers India",
        "kisan drone company",
        "drone company for farming",
        "agri drone brands India",
        "drone manufacturer service network",
      ],
    },
    intro:
      "India now has many companies making, assembling, selling or operating agriculture drones. Some are manufacturers, some are dealers and some only offer services. Knowing what kind of company you are dealing with — and how to judge it — protects your investment.",
    quickAnswer:
      "Judge an agriculture drone company in India by its DGCA type-certified models, service network and spare-parts availability in your region, pilot training support, transparent warranty, help with registration and documentation, and track record with existing customers. Also understand its role — manufacturer, dealer or service provider — so you know who is responsible for what.",
    takeaways: [
      "Manufacturer, dealer and service provider are different roles.",
      "Service network and spares decide your uptime in season.",
      "Ask for references from customers in your region.",
      "Get every promise — warranty, training, delivery — in writing.",
    ],
    sections: [
      {
        heading: "Types of agriculture drone companies",
        table: {
          caption: "Who does what",
          head: ["Type", "What they do", "Who you deal with for service"],
          rows: [
            ["Manufacturer", "Designs, certifies and builds drones", "Their service network or dealers"],
            ["Dealer / distributor", "Sells and supports a brand locally", "The dealer, backed by the manufacturer"],
            ["Service provider", "Sprays or maps fields for a fee", "The provider handles everything"],
            ["Training organisation (RPTO)", "Trains and certifies pilots", "—"],
          ],
        },
      },
      {
        heading: "9 criteria for assessing a company",
        list: [
          "DGCA type certificates for the models offered",
          "Service centres and technicians in your region",
          "Spare parts stock and delivery times",
          "Pilot training — in-house or through an RPTO",
          "Clear written warranty and service terms",
          "Help with Digital Sky registration and insurance",
          "Track record and references from customers",
          "Software updates and app support",
          "Transparent quotations with itemised packages",
        ],
      },
      {
        heading: "Questions to ask the company",
        subsections: [
          {
            heading: "Product",
            list: ["Which models are type-certified?", "What exactly comes in the package?"],
          },
          {
            heading: "Support",
            list: ["Where is your nearest service point?", "What is your average repair time during the season?"],
          },
          {
            heading: "Business help",
            list: ["Do you help connect owners with spraying demand?", "Can you help with loan or scheme documentation?"],
          },
        ],
      },
      {
        heading: "Our role",
        body: [
          "Kisan Drone helps farmers, FPOs and entrepreneurs with information, drone spraying services, buying guidance and training information. [Describe your role.] We aim to give honest advice about what suits your work, even when the answer is a service rather than a purchase.",
        ],
      },
      {
        heading: "Red flags in a drone company",
        list: [
          "Unwilling to share certification details",
          "No service presence in your state",
          "Unrealistic claims about acres per day or earnings",
          "Guaranteed subsidy promises",
          "Pressure tactics and unclear invoices",
        ],
      },
      {
        "heading": "Comparing companies side by side",
        "table": {
          "caption": "A simple scoring sheet you can use",
          "head": [
            "Criterion",
            "What to ask or check"
          ],
          "rows": [
            [
              "Certification",
              "Type certificate numbers for each model"
            ],
            [
              "Service",
              "Nearest service point and average repair time"
            ],
            [
              "Spares",
              "Stock and delivery time for common parts"
            ],
            [
              "Training",
              "Included training and RPTO tie-ups"
            ],
            [
              "Warranty",
              "Coverage, duration and exclusions"
            ],
            [
              "References",
              "Names of customers in your area"
            ]
          ]
        },
        "body": [
          "Score each company out of five on every criterion and compare. This simple exercise turns sales conversations into a fair, side-by-side decision."
        ]
      },
      {
        "heading": "Long-term partnership, not a one-time sale",
        "body": [
          "An agriculture drone is a multi-season investment. You will need the company for software updates, spare parts, battery replacements and advice as rules and products change. Choose a company that you can reach easily and that has been supporting customers consistently."
        ]
      },
      {
        "heading": "How the industry is changing",
        "body": [
          "India's agriculture drone industry has grown quickly since drone rules were liberalised and government programmes promoted drones for farming. More models are getting type certificates, more pilots are being trained and more pesticides are being approved for drone use. At the same time, some companies have entered and exited quickly.",
          "This makes due diligence important. A company that has supported customers through multiple seasons, has a visible service presence and answers questions openly is a safer choice than one offering only a low price."
        ]
      },
      {
        "heading": "Before you pay an advance",
        "list": [
          "Get a written, itemised quotation with the exact model name",
          "Confirm the delivery date and what happens if it is delayed",
          "Pay through traceable banking channels and keep receipts",
          "Confirm cancellation and refund terms in writing"
        ]
      },
    ],
    faqs: [
      {
        q: "Which is the best agriculture drone company in India?",
        a: "The best company for you has certified models, a nearby service network, spares, training and a good track record in your region.",
      },
      {
        q: "What is the difference between a drone manufacturer and a dealer?",
        a: "A manufacturer designs, certifies and builds drones; a dealer sells and supports them locally. Service often comes through the dealer.",
      },
      {
        q: "Should I buy directly from the manufacturer?",
        a: "Either can work. What matters is who will provide service, spares and training near you.",
      },
      {
        q: "How do I verify a drone company?",
        a: "Check type certificates, ask for customer references, visit a service centre and read the warranty terms carefully.",
      },
      {
        q: "Do drone companies help with finance?",
        a: "Some help with loan or scheme documentation. Ask what support they provide and confirm with your bank.",
      },
      {
        q: "How can Kisan Drone help me?",
        a: "Call 8282802150 to discuss spraying services, buying guidance or training information.",
      },
      {
        "q": "Are Indian-made agriculture drones good?",
        "a": "Many Indian companies make type-certified agriculture drones. Judge each model on certification, field performance and local support rather than origin alone."
      },
      {
        "q": "What questions should I ask a drone company's existing customers?",
        "a": "Ask about repair speed in season, spare parts availability, battery life, software issues and whether they would buy from the company again."
      },
      {
        "q": "Should I pay the full amount in advance?",
        "a": "Avoid paying the full amount before delivery unless terms are clearly written and the company is well established. Use traceable payments and keep all receipts."
      },
      {
        "q": "Do drone companies provide pilots?",
        "a": "Some service companies provide pilots with their drones. Manufacturers and dealers usually provide training so your own pilot can fly."
      },
    ],
    cta: { topic: "price", label: "Call us now" },
    related: ["/best-agriculture-drone-in-india/", "/agriculture-drone-spare-parts/"],
    schema: "WebPage",
  },
  {
    slug: "agriculture-drone-battery-price",
    category: "buying-guide",
    navLabel: "Agriculture Drone Battery Price",
    summary: "Drone battery costs, lifespan and care.",
    h1: "Agriculture Drone Battery Price, Lifespan and Care: A Practical Guide",
    seo: {
      title: "Agriculture Drone Battery Price, Life & Care Tips",
      description:
        "What decides agriculture drone battery price, how many sets you need, how long batteries last and 9 care tips to extend battery life. Ask for current prices.",
      keywords: [
        "Agriculture drone battery price",
        "drone battery cost",
        "kisan drone battery",
        "drone battery life cycles",
        "smart battery agriculture drone",
        "drone battery charging tips",
      ],
    },
    intro:
      "Batteries are the fuel of an agriculture drone — and one of its biggest running costs. Their price, lifespan and the number of sets you need all affect how much work you can do and what it really costs to own a drone. This guide explains what drives battery cost and how to make batteries last.",
    quickAnswer:
      "Agriculture drone battery price depends on capacity, cell chemistry, smart battery features, the drone model it fits and warranty. For continuous spraying you need several battery sets plus a fast charger and often a generator. Battery life is measured in charge cycles; proper charging, cooling, storage and handling extend it significantly.",
    takeaways: [
      "Batteries are a recurring cost — plan replacements in your budget.",
      "Several sets are needed so one flies while others charge.",
      "Heat is the biggest enemy of battery life.",
      "Store batteries at the recommended storage charge, not full or empty.",
    ],
    sections: [
      {
        heading: "What battery costs depend on",
        list: [
          "Capacity and voltage required by the drone model",
          "Cell chemistry and quality",
          "Smart battery features — cell monitoring, cycle count, heating, self-discharge",
          "Original vs compatible batteries",
          "Warranty terms and rated cycle life",
        ],
      },
      {
        heading: "How many sets you need",
        body: [
          "Count how long one battery set keeps the drone flying and how long a set takes to charge. If charging takes about as long as two or three flights, you need enough sets to keep rotating without waiting. Add a spare set as backup for the busy season.",
          "Your charger and generator capacity matter too: a slow charger means you need more sets to keep the same pace.",
        ],
      },
      {
        heading: "Signs a battery needs replacing",
        list: [
          "Noticeably shorter flight time than before",
          "Swelling, cracks or damage to the casing",
          "Cells showing large voltage differences in the app",
          "Overheating during charging or flight",
          "Cycle count near or beyond the manufacturer's rated life",
        ],
        note: "Never fly or charge a swollen or damaged battery. Isolate it and dispose of it through the proper channel.",
      },
      {
        heading: "9 tips to extend battery life",
        subsections: [
          {
            heading: "Charging",
            list: [
              "Let batteries cool before charging after a flight",
              "Use only the original or approved charger",
              "Charge in the shade, not in direct sun",
            ],
          },
          {
            heading: "Flying",
            list: [
              "Do not drain to zero — land with reserve charge",
              "Avoid flying with overloaded tanks",
              "Keep connectors clean and dry",
            ],
          },
          {
            heading: "Storage",
            list: [
              "Store at the recommended storage charge level",
              "Keep in a cool, dry, fire-safe place",
              "Cycle stored batteries periodically in the off-season",
            ],
          },
        ],
      },
      {
        heading: "Budgeting for batteries",
        body: [
          "When you compare drone quotes, add the cost of the battery sets you will actually need and plan for replacements over the drone's life. A drone package with fewer sets may look cheaper but cost more once you buy the extra batteries required for real field work.",
        ],
      },
      {
        "heading": "Battery safety in the field",
        "body": [
          "Lithium batteries store a lot of energy. Mishandling can cause fires, so treat battery safety as seriously as chemical safety."
        ],
        "list": [
          "Carry batteries in a protective case; do not drop or puncture them",
          "Keep batteries and chargers away from fuel and chemicals",
          "Keep a fire extinguisher suitable for electrical fires at the charging point",
          "Never leave charging batteries unattended",
          "Dispose of dead or damaged batteries through authorised e-waste channels"
        ]
      },
      {
        "heading": "Generator and charging set-up",
        "body": [
          "For field charging, the generator must match the charger's power requirement with some margin. An undersized generator charges slowly or trips, leaving the drone grounded. Ask the dealer for the recommended generator capacity and charger type for your drone, and keep the set-up in the shade with good ventilation."
        ]
      },
      {
        "heading": "Battery cost per acre",
        "body": [
          "To understand what batteries really cost, divide the price of a battery set by the total acres it can spray over its rated life. Better care stretches that life and lowers the cost per acre. Overheating, deep discharge and poor storage do the opposite. Tracking cycle counts in the app helps you plan replacements before the busy season instead of during it."
        ]
      },
      {
        "heading": "Original vs third-party batteries",
        "body": [
          "Third-party batteries may cost less, but they can lack the communication and cell-monitoring features of smart batteries designed for your drone. A mismatch can cause wrong charge readings or sudden power loss in flight. Use original or manufacturer-approved batteries, especially for heavy spraying drones carrying full tanks."
        ]
      },
      {
        "heading": "Disposing of old drone batteries",
        "body": [
          "Dead or damaged lithium batteries must not go into household waste or be burnt. Hand them to an authorised e-waste collector or recycler as required under India's E-Waste rules, or return them through the dealer's take-back arrangement if one is offered."
        ]
      },
    ],
    faqs: [
      {
        q: "What is the price of an agriculture drone battery?",
        a: "It depends on the drone model, capacity and battery type. Call 8282802150 for current prices for your model.",
      },
      {
        q: "How long does an agriculture drone battery last?",
        a: "Life is measured in charge cycles and depends on care. Follow the manufacturer's rated cycle life and charging advice.",
      },
      {
        q: "How many battery sets do I need?",
        a: "Enough to keep flying while others charge — usually several sets, depending on flight time, charging time and charger capacity.",
      },
      {
        q: "Can I use a compatible battery instead of the original?",
        a: "Only if the manufacturer approves it. Incompatible batteries can damage the drone, void warranty and be unsafe.",
      },
      {
        q: "Why do batteries get hot?",
        a: "High current during flight and charging produces heat. Let batteries cool before charging and keep them out of the sun.",
      },
      {
        q: "How should I store batteries in the off-season?",
        a: "At the recommended storage charge, in a cool, dry, fire-safe place, checking them periodically.",
      },
      {
        "q": "Do batteries come with a warranty?",
        "a": "Often yes, with conditions linked to cycle count or time. Read the battery warranty terms separately from the drone warranty."
      },
      {
        "q": "Can I charge drone batteries from a normal home socket?",
        "a": "Some chargers work on standard household power, but fast chargers for large batteries may need more power. Check the charger's requirement and use proper wiring."
      },
      {
        "q": "Do batteries lose capacity when stored for long?",
        "a": "Yes, slowly. Storing at the recommended charge level in a cool place and checking them periodically keeps capacity loss to a minimum."
      },
    ],
    cta: { topic: "parts", label: "Ask for battery prices" },
    related: ["/agriculture-drone-spare-parts/", "/agriculture-drone-price-in-india/"],
    schema: "WebPage",
  },
  {
    slug: "agriculture-drone-spare-parts",
    category: "buying-guide",
    navLabel: "Agriculture Drone Spare Parts",
    summary: "Common spare parts, their upkeep and preparing before the season.",
    h1: "Agriculture Drone Spare Parts: What Wears Out and What to Keep Ready",
    seo: {
      title: "Agriculture Drone Spare Parts: Must-Have Kit & Care",
      description:
        "Which agriculture drone spare parts wear out fastest — propellers, nozzles, pumps, arms, batteries — plus a pre-season checklist and field spares kit.",
      keywords: [
        "Agriculture drone spare parts",
        "drone spare parts India",
        "spraying drone propeller",
        "drone nozzle replacement",
        "drone pump spare",
        "drone maintenance checklist",
      ],
    },
    intro:
      "In the middle of the spraying season, a cracked propeller or a blocked pump can stop work for days if the part is not at hand. Knowing which agriculture drone spare parts wear out — and keeping the right ones ready — keeps your drone flying when farmers need it most.",
    quickAnswer:
      "The agriculture drone spare parts that wear out most often are propellers, nozzles and filters, pump parts, spray hoses, landing gear, arm clamps and batteries. Keep a field spares kit with these items, follow a pre-season maintenance checklist and buy original or manufacturer-approved parts from a reliable supplier.",
    takeaways: [
      "Propellers, nozzles and filters are routine consumables.",
      "A field spares kit prevents lost days in peak season.",
      "Clean the spray system after every job to protect the pump.",
      "Use original or approved parts to keep warranty and safety.",
    ],
    sections: [
      {
        heading: "Parts that commonly need replacing",
        table: {
          caption: "Common wear parts and why they fail",
          head: ["Part", "Why it wears", "Prevention"],
          rows: [
            ["Propellers", "Chips, cracks from debris or minor impacts", "Inspect before every flight"],
            ["Nozzles and filters", "Clogging and abrasion from chemicals", "Filter water; flush after use"],
            ["Pump", "Residue build-up, dry running", "Clean system; never run dry"],
            ["Hoses and fittings", "Chemical wear, cracks", "Inspect for leaks"],
            ["Landing gear and arm clamps", "Hard landings, vibration", "Check tightness and cracks"],
            ["Batteries", "Charge cycles, heat", "Proper charging and storage"],
          ],
        },
      },
      {
        heading: "Field spares kit",
        list: [
          "A full set of propellers plus extras",
          "Spare nozzles, filters and O-rings",
          "Spare pump (or pump repair kit) and hoses",
          "Landing gear parts and arm clamps",
          "Basic tools, thread locker and cleaning brushes",
          "Spare battery set if possible",
        ],
      },
      {
        heading: "Preparing before the season",
        subsections: [
          {
            heading: "Inspection",
            list: [
              "Check frame, arms and motors for cracks and play",
              "Test every motor and the spray system",
              "Check battery health and cycle counts",
            ],
          },
          {
            heading: "Updates and calibration",
            list: [
              "Update firmware and the app as advised by the manufacturer",
              "Calibrate sensors, compass and flow meter",
              "Do a test flight with water before the first job",
            ],
          },
          {
            heading: "Stock",
            list: [
              "Order consumables early — demand peaks at the same time for everyone",
              "Confirm your supplier's delivery times",
            ],
          },
        ],
      },
      {
        heading: "Original vs compatible parts",
        body: [
          "Original or manufacturer-approved parts are designed for your drone's weight, motors and spray system. Cheap compatible parts may not match exactly, can affect flight stability and may void the warranty. For safety-critical parts like propellers, motors and batteries, stick to approved parts.",
        ],
        note: "[Confirm available parts and brands.]",
      },
      {
        heading: "Daily care to reduce wear",
        body: [
          "After every job, flush the tank, pump and nozzles with clean water, wipe chemical residue off the frame and arms, and check propellers and fasteners. Store the drone in a clean, dry place out of direct sun. Ten minutes of care each day prevents most mid-season breakdowns.",
        ],
      },
      {
        "heading": "Off-season storage checklist",
        "list": [
          "Clean the drone thoroughly and flush the spray system",
          "Dry all parts and store in a dust-free, dry place",
          "Store batteries at storage charge in a fire-safe location",
          "Remove and inspect propellers; replace damaged ones",
          "Note any faults to repair before the next season",
          "Keep the drone covered and away from rodents"
        ]
      },
      {
        "heading": "Keeping a maintenance log",
        "body": [
          "A simple logbook — paper or phone — that records flights, repairs and part replacements helps you predict when parts will wear out. It also supports warranty claims and increases resale value. Note the date, hours or acres flown, the issue and what was replaced.",
          "Over time, the log shows patterns, such as nozzles wearing out after a certain number of acres, so you can order spares before they fail."
        ]
      },
      {
        "heading": "Spare parts budget",
        "body": [
          "Set aside a yearly budget for consumable spare parts, just as a tractor owner budgets for tyres and filters. Propellers, nozzles, filters and pump parts are small costs compared to the loss of a working day in peak season. Buying these parts in a planned way before the season also avoids shortages when demand peaks."
        ]
      },
      {
        "heading": "When to call a technician",
        "list": [
          "Unusual vibration or noise from a motor",
          "Repeated sensor or compass errors after calibration",
          "Flow meter or pump faults that cleaning does not fix",
          "Any damage after a crash or hard landing"
        ],
        "body": [
          "Do not keep flying with these issues. A technician check prevents small faults from turning into a crash."
        ]
      },
      {
        "heading": "Repairs and type certification",
        "body": [
          "Major repairs — motors, flight controller, frame or spray system — should keep the drone in line with its type certificate. Use the authorised service centre for such work and keep repair records with the drone's registration documents."
        ]
      },
    ],
    faqs: [
      {
        q: "Which drone parts need replacing most often?",
        a: "Propellers, nozzles, filters, pump parts and hoses are the most common consumables. Batteries also wear out over charge cycles.",
      },
      {
        q: "Where can I get agriculture drone spare parts?",
        a: "From the manufacturer, its authorised dealer or service centre. Call 8282802150 to ask about parts for your model.",
      },
      {
        q: "Should I keep spare parts with me in the field?",
        a: "Yes. A basic kit with propellers, nozzles, filters and pump parts can prevent lost days.",
      },
      {
        q: "Are compatible parts safe to use?",
        a: "Only if approved by the manufacturer. Unapproved parts can affect safety and warranty.",
      },
      {
        q: "How often should I service my drone?",
        a: "Check it before every flight, clean it after every job and follow the manufacturer's service schedule.",
      },
      {
        q: "What should I check before the season starts?",
        a: "Frame, motors, spray system, batteries, firmware, calibration and your stock of consumable parts.",
      },
      {
        "q": "How do I know which spare part fits my drone?",
        "a": "Use the model name and serial number when ordering, and buy from the manufacturer or authorised dealer to make sure parts match."
      },
      {
        "q": "Are spare parts covered under warranty?",
        "a": "Manufacturing defects may be covered, but wear parts like propellers and nozzles and crash damage are usually excluded. Check the warranty terms."
      },
      {
        "q": "Can I repair my drone myself?",
        "a": "Simple tasks like changing propellers, nozzles and filters can be done by a trained pilot. Motor, electronics and crash repairs should be done by an authorised technician."
      },
    ],
    cta: { topic: "parts", label: "Ask about spare parts" },
    related: ["/agriculture-drone-battery-price/", "/agriculture-drone-company-in-india/"],
    schema: "WebPage",
  },
];
