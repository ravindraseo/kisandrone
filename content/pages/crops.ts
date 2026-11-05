import type { KeywordPage } from "../types";

/**
 * Crop-specific drone spraying pages.
 * Pest and disease names are common examples only — the product, dose and timing
 * must come from the label and local agronomic advice.
 */
export const cropPages: KeywordPage[] = [
  {
    slug: "drone-spraying-for-paddy",
    category: "crops",
    navLabel: "Drone Spraying for Paddy",
    summary: "Spraying flooded paddy fields without walking into them.",
    h1: "Drone Spraying for Paddy (Rice): Stage-Wise Guide for Flooded Fields",
    seo: {
      title: "Drone Spraying for Paddy: Stage-Wise Guide & Booking",
      description:
        "Drone spraying for paddy without entering flooded fields — stage-wise uses, stem borer and blast sprays, nano urea, safety near water and how to book.",
      keywords: [
        "Drone spraying for paddy",
        "paddy drone spraying",
        "rice crop drone spray",
        "drone spraying in rice field",
        "nano urea drone paddy",
        "paddy pest control drone",
      ],
    },
    intro:
      "Paddy is one of the crops where drones make the biggest difference. Walking through a flooded rice field with a knapsack sprayer is slow, tiring and damages plants. A drone sprays from above, covering the field quickly while the operator stays dry at the bund. Here is how drone spraying fits into each stage of the paddy crop.",
    quickAnswer:
      "Drone spraying for paddy lets you apply approved pesticides, fungicides and liquid nutrients such as nano urea over flooded fields without walking in. It is used from tillering to grain filling against pests like stem borer, leaf folder and planthoppers and diseases such as blast and sheath blight. Use drone-approved products, calm weather and buffer zones near water bodies.",
    takeaways: [
      "No need to enter flooded fields — no trampling or wading.",
      "Common uses: insect and disease control and nitrogen top-up at key stages.",
      "Keep buffer zones near ponds, canals and fish farms.",
      "Group bookings across neighbouring paddy fields reduce cost.",
    ],
    sections: [
      {
        heading: "Why drones suit paddy fields",
        body: [
          "Paddy is grown in standing water for much of its life. Every time someone walks in with a sprayer, plants are disturbed and the work is slow. Labour is also hardest to find during peak transplanting and protection periods. A drone flies over the canopy, sprays evenly along GPS-planned rows and finishes in a fraction of the time.",
          "Because the pilot stands on the bund, there is far less direct contact with chemicals — a real benefit in hot, humid paddy seasons when wearing full PPE in the field is difficult.",
        ],
      },
      {
        heading: "Possible uses by crop stage",
        table: {
          caption: "Common spray targets in paddy — use products approved for drone application",
          head: ["Stage", "Common targets", "Notes"],
          rows: [
            ["Tillering", "Stem borer, leaf folder; nitrogen top-up", "Even coverage over a young canopy"],
            ["Panicle initiation", "Nutrient sprays, leaf and sheath diseases", "Timely application matters"],
            ["Booting to flowering", "Blast, sheath blight, planthoppers", "Avoid bee-active hours where relevant"],
            ["Grain filling", "Late pests and diseases", "Check pre-harvest interval on label"],
          ],
        },
      },
      {
        heading: "Special care in paddy",
        subsections: [
          {
            heading: "Water bodies and fish",
            body: [
              "Paddy fields often sit next to canals, ponds and fish farms. Keep buffer strips, avoid spraying when wind blows towards water, and never rinse the tank in a water source.",
            ],
          },
          {
            heading: "Planthoppers at the base",
            body: [
              "Brown planthoppers live near the base of the plant. Ask the pilot about height, droplet size and speed to help spray reach lower in the canopy, and follow product advice.",
            ],
          },
          {
            heading: "Wind over open water",
            body: [
              "Open, flooded fields can be windy. Early morning is often calmest; stop if drift is visible.",
            ],
          },
        ],
      },
      {
        heading: "Farmer preparation checklist",
        list: [
          "Confirm the pest or disease with your KVK or agronomist",
          "Buy a product approved for drone use on paddy and keep its label",
          "Arrange clean water near the field for mixing",
          "Mark bunds, power lines, trees and nearby fish ponds",
          "Inform neighbours and coordinate if they need the same spray",
          "Keep a dry, flat spot on the bund for take-off and landing",
        ],
      },
      {
        heading: "Nano urea and nutrient sprays in paddy",
        body: [
          "Liquid nitrogen such as nano urea is often sprayed on paddy at tillering and panicle initiation. A drone makes this practical over flooded fields. Follow the manufacturer's recommended dose and stage, and remember that foliar nutrition supplements — not replaces — your basal fertiliser plan. If you want to combine a nutrient with a pesticide in one visit, do a jar test for compatibility first.",
        ],
      },
      {
        heading: "Booking a paddy drone spray",
        body: [
          "Share your village, total paddy area, crop stage and the product you plan to use. In peak weeks, many farmers need the same spray at the same time, so book early and consider a group booking with neighbouring fields. Group bookings save travel and set-up time and usually lower the cost per acre for everyone.",
        ],
      },
      {
        "heading": "Drone vs manual spraying in paddy",
        "table": {
          "caption": "General comparison for flooded paddy fields",
          "head": [
            "Point",
            "Drone",
            "Knapsack / manual"
          ],
          "rows": [
            [
              "Entering the field",
              "Not needed",
              "Walking through water and mud"
            ],
            [
              "Crop damage",
              "None from trampling",
              "Plants disturbed along paths"
            ],
            [
              "Water carried to field",
              "Much less per acre",
              "Much more"
            ],
            [
              "Operator exposure",
              "Lower — stays on the bund",
              "Higher"
            ]
          ]
        }
      },
    ],
    faqs: [
      {
        q: "Can a drone spray paddy fields with standing water?",
        a: "Yes. That is one of its biggest advantages — the drone sprays from above, so there is no need to walk into flooded fields.",
      },
      {
        q: "Which paddy pests can be controlled with drone spraying?",
        a: "Drones can apply approved products for common pests such as stem borer, leaf folder and planthoppers, and diseases like blast and sheath blight, as advised by an agronomist.",
      },
      {
        q: "Can nano urea be sprayed on paddy by drone?",
        a: "Yes, nano urea is commonly sprayed by drone at tillering and panicle initiation. Follow the manufacturer's dose and timing.",
      },
      {
        q: "Is drone spraying effective against brown planthopper?",
        a: "With the right product, height, droplet size and speed, drones can help. Because planthoppers sit at the base, settings and timing are important.",
      },
      {
        q: "How do I protect fish ponds near my paddy field?",
        a: "Keep a buffer strip, spray when wind blows away from the pond and never rinse the tank in a water source.",
      },
      {
        q: "When is the best time to spray paddy by drone?",
        a: "Calm early mornings or late afternoons, avoiding strong wind, rain and very hot hours.",
      },
      {
        q: "What is the cost of drone spraying in paddy?",
        a: "It depends on area, field layout, distance and the product. Call 8282802150 for a written quote.",
      },
      {
        q: "How do I book paddy drone spraying?",
        a: "Call or WhatsApp 8282802150 with your village, area, crop stage and product details.",
      },
      {
        "q": "Can a drone spread granules in paddy fields?",
        "a": "Some drones accept a spreader attachment for granules. Check if the model supports it and whether the granule product is suitable for aerial application."
      },
    ],
    cta: { topic: "service", label: "Get a paddy spraying quote" },
    related: ["/drone-spraying-service/", "/drone-spraying-for-wheat/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-wheat",
    category: "crops",
    navLabel: "Drone Spraying for Wheat",
    summary: "Timely spraying on large, continuous wheat fields.",
    h1: "Drone Spraying for Wheat: Timely Weed, Rust and Nutrient Sprays",
    seo: {
      title: "Drone Spraying for Wheat: Rust, Aphids & Nutrients",
      description:
        "Drone spraying for wheat — when to spray for rust and aphids, nutrient top-ups, herbicide cautions, dew and fog tips, and how to book a certified pilot.",
      keywords: [
        "Drone spraying for wheat",
        "wheat drone spraying",
        "yellow rust spray drone",
        "wheat aphid drone spray",
        "drone spraying rabi crops",
        "wheat crop protection drone",
      ],
    },
    intro:
      "Wheat is grown over large, continuous areas in the rabi season, and many sprays need to happen within a short window — especially when a disease like yellow rust appears. Drone spraying helps cover big wheat fields quickly and evenly. Here is where it fits and what to watch out for.",
    quickAnswer:
      "Drone spraying for wheat is used to apply approved fungicides against diseases such as rusts, insecticides against aphids and liquid nutrients during tillering and before heading. Its main advantage is speed over large fields when timing is critical. Watch for winter fog and heavy dew, follow label rules for herbicides, and spray in calm conditions.",
    takeaways: [
      "Fast coverage helps when rust or aphids need urgent action.",
      "Nutrient top-ups at tillering and before heading are common.",
      "Fog and dew can delay early-morning spraying in winter.",
      "Only use herbicides approved for drone application, with drift care.",
    ],
    sections: [
      {
        heading: "Why drones suit wheat",
        body: [
          "Wheat fields across the plains are large and uniform, which suits automatic drone flight. When yellow rust or aphids appear, a whole area may need spraying within days. Drones can cover many fields quickly, helping farmers act within the right window without waiting for labour or tractors.",
          "There are no wheel tracks or trampled lines, which matters once the crop has grown tall and dense.",
        ],
      },
      {
        heading: "Possible uses by crop stage",
        table: {
          caption: "Common spray targets in wheat — confirm product approval for drone use",
          head: ["Stage", "Common targets", "Notes"],
          rows: [
            ["Early growth", "Weeds (approved herbicides only)", "High drift risk to neighbouring crops"],
            ["Tillering", "Nutrient top-up, aphids", "Good time for foliar nutrition"],
            ["Jointing to booting", "Rusts, powdery mildew", "Act quickly when disease appears"],
            ["Heading", "Diseases, late aphids", "Check pre-harvest intervals"],
          ],
        },
      },
      {
        heading: "Special care in wheat",
        subsections: [
          {
            heading: "Herbicide spraying",
            body: [
              "Herbicide drift can damage neighbouring crops like mustard, vegetables or gram. Use only approved products, coarser droplets, low height and calm conditions — and leave buffers near sensitive crops.",
            ],
          },
          {
            heading: "Fog and dew",
            body: [
              "Winter mornings can bring fog and heavy dew. Fog reduces visibility for safe flight, and dew can dilute spray on leaves. Wait until visibility is clear and leaves are drier.",
            ],
          },
          {
            heading: "Lodging",
            body: [
              "Late in the season, wind and irrigation can cause lodging. Drones avoid adding more damage, but spray coverage may be uneven on flattened crops.",
            ],
          },
        ],
      },
      {
        heading: "Farmer preparation checklist",
        list: [
          "Scout the field and confirm the disease or pest",
          "Buy a drone-approved product and keep the label handy",
          "Arrange clean water and a take-off spot near the field",
          "Inform neighbours, especially those with sensitive crops",
          "Plan a weather backup day in case of fog or rain",
        ],
      },
      {
        heading: "Rust alerts and timely action",
        body: [
          "Yellow rust can spread quickly in cool, humid weather. Agriculture departments and research institutes often issue advisories when rust appears in a region. When you see an advisory or early symptoms — yellow, powdery stripes on leaves — contact your agronomist and book spraying quickly. A drone's speed helps entire villages respond together.",
        ],
      },
      {
        heading: "Group spraying for wheat villages",
        body: [
          "Because neighbouring wheat fields often need the same spray at the same time, group bookings work very well. One farmer can collect bookings from neighbours, share field locations and agree a single date. The drone moves field to field with minimal travel, and every farmer gets timely protection.",
        ],
      },
      {
        "heading": "Drone vs tractor sprayer in wheat",
        "table": {
          "caption": "General comparison — choose by field condition and timing",
          "head": [
            "Point",
            "Drone",
            "Tractor-mounted sprayer"
          ],
          "rows": [
            [
              "Wheel tracks in standing crop",
              "None",
              "Leaves tracks, some crop damage"
            ],
            [
              "Wet fields after irrigation",
              "Can spray",
              "May not be able to enter"
            ],
            [
              "Water volume per acre",
              "Low",
              "Higher"
            ],
            [
              "Speed on large fields",
              "High",
              "High on dry, open fields"
            ],
            [
              "Herbicide drift control",
              "Needs care",
              "Needs care"
            ]
          ]
        }
      },
      {
        "heading": "Checking results after spraying",
        "body": [
          "After a fungicide spray for rust, check new leaves over the next week or two — fresh growth should stay clean if the spray worked. For aphids, count colonies on a few tillers before and a few days after spraying. Note what you see; it helps you and your advisor decide whether another spray is needed and which product to use next time."
        ]
      },
    ],
    faqs: [
      {
        q: "Can drones spray fungicide for yellow rust in wheat?",
        a: "Yes, drones can apply approved fungicides quickly over large areas, which helps when rust needs urgent control.",
      },
      {
        q: "Is drone spraying of herbicide safe in wheat?",
        a: "Only with herbicides approved for drone application, coarser droplets, low height, calm weather and buffers near sensitive crops.",
      },
      {
        q: "Can nutrients be sprayed on wheat by drone?",
        a: "Yes, liquid nutrients are commonly sprayed at tillering and before heading. Follow the product's dose and timing.",
      },
      {
        q: "Does winter fog affect drone spraying?",
        a: "Yes. Fog reduces visibility for safe flight. Wait until it clears before spraying.",
      },
      {
        q: "Will heavy dew reduce spray effectiveness?",
        a: "Heavy dew can dilute spray on leaves. Wait until leaves are drier, unless the product advice says otherwise.",
      },
      {
        q: "How quickly can my wheat field be sprayed?",
        a: "Drones are fast on open wheat fields, but total time depends on area, refills, batteries and weather.",
      },
      {
        q: "What is the cost of drone spraying in wheat?",
        a: "It depends on area, location and service terms. Call 8282802150 for a written quote.",
      },
      {
        q: "How do I book wheat drone spraying?",
        a: "Call or WhatsApp 8282802150 with your village, area, crop stage and the product.",
      },
      {
        "q": "Can drones spray wheat after irrigation when the field is wet?",
        "a": "Yes. Unlike tractors, drones do not need to enter the field, so wet soil after irrigation is not a problem for spraying."
      },
      {
        "q": "Is drone spraying useful for small wheat farms?",
        "a": "Yes, especially when neighbouring farms book together on the same day, which keeps travel time and cost per acre low."
      },
    ],
    cta: { topic: "service", label: "Get a wheat spraying quote" },
    related: ["/fertilizer-spraying-drone/", "/drone-spraying-for-paddy/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-cotton",
    category: "crops",
    navLabel: "Drone Spraying for Cotton",
    summary: "Reduce the effort of repeated spraying in tall, dense cotton.",
    h1: "Drone Spraying for Cotton: Managing Sucking Pests and Bollworms in a Tall Crop",
    seo: {
      title: "Drone Spraying for Cotton: Whitefly, Bollworm & More",
      description:
        "Drone spraying for cotton — reach tall, dense crops for whitefly, jassid and pink bollworm sprays, canopy penetration tips, safety and booking details.",
      keywords: [
        "Drone spraying for cotton",
        "cotton drone spraying",
        "pink bollworm drone spray",
        "whitefly control drone",
        "cotton pest control drone",
        "kapas drone spraying",
      ],
    },
    intro:
      "Cotton needs many sprays across the season, and once the crop grows tall and dense, walking through it with a knapsack becomes exhausting and risky for the sprayer. Drone spraying reduces that burden. But cotton also challenges drones: spray must reach deep into a thick canopy. Here is how to get it right.",
    quickAnswer:
      "Drone spraying for cotton helps apply approved insecticides and fungicides against sucking pests like whitefly, jassids, aphids and thrips, and bollworms such as pink bollworm, without walking through a tall, dense crop. Good canopy penetration needs correct height, slower speed, suitable droplet size and proper overlap. Follow the label, PPE rules and resistance management advice.",
    takeaways: [
      "Big labour saving in tall cotton with repeated sprays.",
      "Canopy penetration is the key challenge — settings matter.",
      "Follow resistance management: rotate product groups as advised.",
      "Repeated sprays mean exposure risk is higher — PPE for mixing is essential.",
    ],
    sections: [
      {
        heading: "Why drones suit cotton",
        body: [
          "Cotton may need several sprays in a season for sucking pests, bollworms and diseases. As plants grow taller, manual spraying exposes workers to chemicals for hours in hot conditions. A drone keeps the operator outside the field and completes each spray quickly, so repeated applications become easier to manage.",
        ],
      },
      {
        heading: "Possible uses by crop stage",
        table: {
          caption: "Common spray targets in cotton — use drone-approved products",
          head: ["Stage", "Common targets", "Notes"],
          rows: [
            ["Early vegetative", "Sucking pests: aphids, jassids, thrips", "Smaller canopy, easier coverage"],
            ["Squaring and flowering", "Whitefly, bollworms", "Avoid bee-active hours where relevant"],
            ["Boll development", "Pink bollworm, diseases", "Dense canopy — focus on penetration"],
            ["Late season", "Late pests", "Check pre-harvest intervals"],
          ],
        },
      },
      {
        heading: "Special care in cotton",
        subsections: [
          {
            heading: "Canopy penetration",
            body: [
              "Whiteflies feed on the underside of leaves and bollworms hide inside bolls. Ask the pilot to adjust height, speed and droplet size so the downwash pushes spray into the canopy. Water-sensitive cards at different heights help check coverage.",
            ],
          },
          {
            heading: "Resistance management",
            body: [
              "Repeated use of the same insecticide group can lead to resistance. Follow your agronomist's or KVK's advice on rotating product groups.",
            ],
          },
          {
            heading: "Service terms for repeat sprays",
            body: ["Cotton often needs multiple visits per season. [Write your policy.] Ask about scheduling repeat sprays."],
          },
        ],
      },
      {
        heading: "Farmer preparation checklist",
        list: [
          "Scout regularly and act at economic threshold levels advised by experts",
          "Buy drone-approved products and keep labels",
          "Arrange water and a take-off spot",
          "Mark power lines and trees near the field",
          "Inform neighbours, especially if beehives are nearby",
          "Keep records of every spray for the season",
        ],
      },
      {
        heading: "Integrated pest management with drones",
        body: [
          "Drones are an application tool, not a pest management strategy on their own. Combine them with good practices: pheromone traps for monitoring bollworms, timely sowing, removing crop residues and using sprays only when pest levels justify them. A drone then helps you act quickly and evenly when a spray is needed.",
        ],
      },
      {
        heading: "Booking cotton spraying",
        body: [
          "Share your village, area, crop stage, the target pest and the recommended product. For cotton belts where many farmers spray at similar times, group bookings are efficient and help ensure timely protection across neighbouring fields.",
        ],
      },
      {
        "heading": "Drone vs manual spraying in cotton",
        "table": {
          "caption": "General comparison in a tall, dense cotton crop",
          "head": [
            "Point",
            "Drone",
            "Knapsack / manual"
          ],
          "rows": [
            [
              "Effort in tall crop",
              "Low",
              "Very high"
            ],
            [
              "Operator exposure",
              "Lower",
              "High, often for hours"
            ],
            [
              "Coverage under leaves",
              "Needs correct settings",
              "Possible but slow"
            ],
            [
              "Time per spray",
              "Short",
              "Long"
            ]
          ]
        }
      },
      {
        "heading": "Monitoring before and after sprays",
        "body": [
          "Use yellow sticky traps for whitefly and pheromone traps for pink bollworm to monitor pest levels. Spray when advisors recommend based on thresholds, then keep monitoring to judge results. Opening a sample of green bolls helps you check bollworm damage. Good monitoring reduces unnecessary sprays and saves money."
        ]
      },
      {
        "heading": "Bee safety in cotton",
        "body": [
          "Cotton flowers attract bees and other pollinators. During flowering, choose products and timings that reduce harm to bees, spray early morning or late evening when bees are less active, and inform nearby beekeepers in advance. Protecting pollinators supports both your crop and your neighbours' crops."
        ]
      },
      {
        "heading": "Keeping a cotton spray diary",
        "body": [
          "Write down each spray: date, product, dose, target pest, weather and what you observed afterwards. Over a season, this diary shows which products worked, helps you rotate groups for resistance management and gives your advisor clear information for the next decision."
        ]
      },
    ],
    faqs: [
      {
        q: "Can drones control pink bollworm in cotton?",
        a: "Drones can apply approved products advised for pink bollworm. Results depend on timing, product and coverage, along with integrated pest management practices.",
      },
      {
        q: "Is drone spraying effective against whitefly?",
        a: "With good canopy penetration — right height, speed and droplet size — drones can help. Whiteflies sit under leaves, so settings are important.",
      },
      {
        q: "How many times can cotton be sprayed by drone?",
        a: "As many times as the crop protection plan requires. The drone is the application method; spray frequency depends on pest pressure.",
      },
      {
        q: "Can drones reach the lower canopy of tall cotton?",
        a: "The rotor downwash helps push spray down. Slower speed, correct height and proper overlap improve penetration.",
      },
      {
        q: "Is drone spraying safer for cotton farmers?",
        a: "Yes, it reduces direct exposure because nobody walks through the sprayed crop. PPE is still essential while mixing and filling.",
      },
      {
        q: "Should I rotate insecticides in cotton?",
        a: "Yes. Rotating product groups as advised by experts helps slow down resistance.",
      },
      {
        q: "What is the cost of drone spraying in cotton?",
        a: "It depends on area, number of sprays and service terms. Call 8282802150 for a quote.",
      },
      {
        q: "How do I book cotton drone spraying?",
        a: "Call or WhatsApp 8282802150 with your village, area, crop stage and target pest.",
      },
      {
        "q": "Can drones spray cotton defoliants or growth regulators?",
        "a": "Only products approved for drone application on cotton should be used. Check the label and ask your agronomist before using any growth regulator by drone."
      },
    ],
    cta: { topic: "service", label: "Get a cotton spraying quote" },
    related: ["/pesticide-spraying-drone/", "/drone-spraying-for-sugarcane/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-sugarcane",
    category: "crops",
    navLabel: "Drone Spraying for Sugarcane",
    summary: "Spraying tall sugarcane where ground machines cannot reach.",
    h1: "Drone Spraying for Sugarcane: Reaching Tall Cane Where Machines Cannot",
    seo: {
      title: "Drone Spraying for Sugarcane: Borers, Pyrilla & Nutrients",
      description:
        "Drone spraying for sugarcane — spray tall cane for borers, pyrilla, woolly aphid and nutrients when tractors can't enter. Tips for mills, FPOs and farmers.",
      keywords: [
        "Drone spraying for sugarcane",
        "sugarcane drone spraying",
        "ganna drone spray",
        "sugarcane pest control drone",
        "top borer drone spray",
        "sugar mill drone spraying",
      ],
    },
    intro:
      "Once sugarcane grows tall, nobody can walk or drive through it easily. That makes late-season pest control and nutrient sprays very difficult with traditional methods. Drones fly over the canopy and spray from above, which is why sugarcane is one of the strongest use cases for agricultural drones in India.",
    quickAnswer:
      "Drone spraying for sugarcane applies approved insecticides, fungicides and liquid nutrients over tall cane that tractors and workers cannot enter. Common targets include borers, pyrilla and woolly aphid. Key requirements are terrain-following height control over an uneven canopy, planned refill points for large blocks and coordination with mills or FPOs for area-wide spraying.",
    takeaways: [
      "Solves the access problem once cane is tall.",
      "Terrain following keeps height constant over uneven canopy.",
      "Large blocks benefit from larger drones and central refill points.",
      "Mills and FPOs often organise area-wide drone campaigns.",
    ],
    sections: [
      {
        heading: "Why drones suit sugarcane",
        body: [
          "Sugarcane is a long-duration crop that grows several metres tall. After the canopy closes, ground sprayers cannot enter without damaging cane, and manual spraying is nearly impossible. Drones solve this access problem, allowing timely protection and nutrition even late in the crop cycle.",
          "Sugar mills and FPOs in many regions now coordinate drone spraying campaigns across member farms, spraying large contiguous areas efficiently.",
        ],
      },
      {
        heading: "Possible uses by crop stage",
        table: {
          caption: "Common spray targets in sugarcane — use drone-approved products",
          head: ["Stage", "Common targets", "Notes"],
          rows: [
            ["Tillering", "Early shoot borer, nutrients", "Canopy still open"],
            ["Grand growth", "Top borer, pyrilla, woolly aphid, nutrients", "Tall canopy — drones are most useful"],
            ["Maturity", "Late pests and diseases", "Check pre-harvest intervals"],
          ],
        },
      },
      {
        heading: "Special care in sugarcane",
        subsections: [
          {
            heading: "Height over an uneven canopy",
            body: [
              "Cane height varies across a field. Terrain-following radar keeps the drone at a steady height above the tops, which keeps spray even and reduces drift.",
            ],
          },
          {
            heading: "Large blocks and logistics",
            body: [
              "Divide large blocks into sections matching one tank load, place refill points centrally and keep premixed spray ready to keep the drone working. [Confirm your capacity.]",
            ],
          },
          {
            heading: "Obstacles",
            body: [
              "Sugarcane areas often have power lines, trees along channels and irrigation structures. A careful field survey is essential before flight.",
            ],
          },
        ],
      },
      {
        heading: "Farmer/group preparation",
        list: [
          "Coordinate with neighbours, the mill or FPO for contiguous spraying",
          "Confirm the pest and the drone-approved product",
          "Arrange water tankers or nearby water sources",
          "Mark power lines, channels and trees",
          "Provide access to a take-off area near each block",
        ],
      },
      {
        heading: "Area-wide spraying with mills and FPOs",
        body: [
          "Pests like pyrilla and woolly aphid can move between fields. Spraying only one farm while neighbours remain untreated may give limited results. Area-wide campaigns organised by mills or FPOs cover many farms in a short time, improving effectiveness and lowering cost per acre through efficient routing.",
          "If you are a mill or FPO, share the area map, crop stages and member list in advance so routes and schedules can be planned.",
        ],
      },
      {
        heading: "Nutrient sprays in sugarcane",
        body: [
          "Foliar nutrients and micronutrients can be applied by drone during grand growth when soil application is difficult. Follow product guidance on dose and stage, and continue your basal and soil fertiliser plan for the crop's main nutrient needs.",
        ],
      },
      {
        "heading": "Drone vs manual spraying in sugarcane",
        "table": {
          "caption": "General comparison after canopy closure",
          "head": [
            "Point",
            "Drone",
            "Manual / ground sprayer"
          ],
          "rows": [
            [
              "Access to tall cane",
              "From above, easy",
              "Very difficult or impossible"
            ],
            [
              "Crop damage",
              "None",
              "Breakage when entering"
            ],
            [
              "Labour need",
              "Small crew",
              "Large crew"
            ],
            [
              "Speed on large blocks",
              "High",
              "Low"
            ]
          ]
        }
      },
      {
        "heading": "Safety around sugarcane fields",
        "body": [
          "Sugarcane fields can hide people and animals, and nearby villages may be close. Before each block, the crew should confirm nobody is working inside the field. Keep take-off points clear and stop spraying if anyone enters the area. Power lines crossing cane fields are a major hazard — survey carefully and keep safe distance."
        ]
      },
      {
        "heading": "Planning a season of cane sprays",
        "list": [
          "Map blocks by planting date and expected stage",
          "Plan pest monitoring visits during grand growth",
          "Line up drone capacity before peak pest periods",
          "Arrange water and refill points for each block"
        ]
      },
      {
        "heading": "What mills and FPOs should share before a campaign",
        "list": [
          "Map or list of member fields with locations and areas",
          "Crop stage and variety for each block",
          "Target pest and the approved product to be used",
          "Water points, access roads and preferred dates"
        ]
      },
      {
        "heading": "Checking product approval for sugarcane",
        "body": [
          "Before a drone spray on sugarcane, check that the product is approved for drone application on the crop. Approvals are granted by the CIB&RC; your agriculture department, mill advisor or KVK can help you confirm the current status."
        ]
      },
    ],
    faqs: [
      {
        q: "Can a drone spray tall sugarcane?",
        a: "Yes. Drones fly above the canopy, so height is not a barrier — this is one of the best uses of agricultural drones.",
      },
      {
        q: "Which sugarcane pests can be managed with drone spraying?",
        a: "Drones can apply approved products for pests like borers, pyrilla and woolly aphid, as advised by experts.",
      },
      {
        q: "Which drone is best for sugarcane?",
        a: "Larger drones with strong terrain following suit large blocks; mid-size drones work for smaller fields. See our 20 litre drone guide.",
      },
      {
        q: "Can sugar mills organise drone spraying?",
        a: "Yes, many mills and FPOs coordinate area-wide drone campaigns for member farms. Contact us to discuss.",
      },
      {
        q: "Is drone spraying effective in a dense cane canopy?",
        a: "Downwash helps push spray into the canopy. Correct height, speed and droplet size improve coverage.",
      },
      {
        q: "Can nutrients be sprayed on sugarcane by drone?",
        a: "Yes, foliar nutrients can be sprayed during grand growth. Follow product dose and timing.",
      },
      {
        q: "What is the cost of drone spraying in sugarcane?",
        a: "It depends on area, location and logistics. Call 8282802150 for a quote.",
      },
      {
        q: "How do I book sugarcane drone spraying?",
        a: "Call or WhatsApp 8282802150 with your location, area, crop stage and target pest.",
      },
      {
        "q": "Do I need permission to spray sugarcane near a sugar mill?",
        "a": "Check the Digital Sky airspace map. Most farm areas are in green zones, but any restrictions near specific installations must be followed."
      },
    ],
    cta: { topic: "service", label: "Get a sugarcane spraying quote" },
    related: ["/20-litre-agriculture-drone/", "/agriculture-drone-rental/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-grapes",
    category: "crops",
    navLabel: "Drone Spraying for Grapes",
    summary: "Careful planning in vineyards around trellises and export standards.",
    h1: "Drone Spraying for Grapes: Vineyard Planning, Mildew Control and Residue Care",
    seo: {
      title: "Drone Spraying for Grapes: Mildew, Trellis & Residues",
      description:
        "Drone spraying in vineyards — downy and powdery mildew sprays, trellis and row planning, RTK routes, export residue limits and when a drone may not fit.",
      keywords: [
        "Drone spraying for grapes",
        "vineyard drone spraying",
        "grape downy mildew drone",
        "drone spraying in vineyard",
        "grapes pesticide residue",
        "precision spraying vineyard",
      ],
    },
    intro:
      "Grapes are a high-value crop with frequent sprays, strict residue rules for export and a complex structure of trellises and wires. Drones can help in vineyards, but they need more careful planning than open field crops. This guide explains where drones fit in grape cultivation and what to discuss before the first flight.",
    quickAnswer:
      "Drone spraying for grapes can apply approved fungicides against downy and powdery mildew and other diseases, and approved insecticides, while reducing workers' exposure. Vineyards need precise route planning (often RTK), careful height control above trellises and wires, attention to canopy coverage and strict adherence to pre-harvest intervals and export residue limits. A field visit or demo should come first.",
    takeaways: [
      "Mildew control sprays are a major use in vineyards.",
      "Trellis wires and posts need precise routes and careful height.",
      "Export residue limits make product choice and timing critical.",
      "Start with a demo on a section of the vineyard.",
    ],
    sections: [
      {
        heading: "Why vineyards are different",
        body: [
          "Vineyards have rows of vines trained on trellises, with wires, posts and sometimes overhead structures. The canopy is vertical rather than flat, and bunches hang inside the foliage. These features affect how spray reaches the target and how safely a drone can fly.",
          "Grape growers also follow strict residue standards, especially for export. Every spray must fit into a planned schedule with product approval, dose and pre-harvest intervals carefully tracked.",
        ],
      },
      {
        heading: "Possible uses",
        table: {
          caption: "Common spray targets in grapes — use drone-approved products only",
          head: ["Target", "Notes"],
          rows: [
            ["Downy mildew", "Timely protection in humid weather is critical"],
            ["Powdery mildew", "Coverage on both leaf surfaces and bunches"],
            ["Anthracnose and other diseases", "Follow local disease forecasting advice"],
            ["Insect pests such as thrips and mealybugs", "Penetration into the canopy and bunches"],
          ],
        },
      },
      {
        heading: "Special care in grapes",
        subsections: [
          {
            heading: "Route planning and RTK",
            body: [
              "Precise routes along rows reduce waste and avoid obstacles. RTK positioning helps drones follow rows accurately and repeat routes each spray.",
            ],
          },
          {
            heading: "Height and obstacles",
            body: [
              "Keep safe clearance above trellis wires, posts and any nets. A detailed field survey and map before the first flight are essential.",
            ],
          },
          {
            heading: "Coverage inside the canopy",
            body: [
              "Use water-sensitive cards inside the canopy and near bunches to check coverage. Adjust speed, height and droplet size to improve results.",
            ],
          },
          {
            heading: "Residues and records",
            body: [
              "Follow pre-harvest intervals strictly and keep detailed records of every spray. Export buyers may ask for spray records.",
            ],
          },
        ],
      },
      {
        heading: "Farmer preparation",
        list: [
          "Share your spray schedule and the products planned",
          "Provide a vineyard map with rows, wires and structures",
          "Confirm product approval for drone use on grapes",
          "Arrange water and a clear take-off area",
          "Plan a demo on a small block first",
        ],
      },
      {
        heading: "When a drone may not be the best tool",
        body: [
          "Very dense canopies, vineyards under nets or structures, and situations needing extremely precise targeting of bunches may still be better served by ground sprayers such as air-blast machines. Many growers use drones alongside ground equipment, choosing the right tool for each spray.",
        ],
      },
      {
        heading: "Using maps for better vineyard spraying",
        body: [
          "A mapping or multispectral survey of the vineyard can show weak vines, gaps and disease hotspots. Combining these maps with drone spraying routes helps focus effort where it is needed and keep records for each block.",
        ],
      },
      {
        "heading": "Planning drone sprays around the grape calendar",
        "body": [
          "Grape cultivation follows a pruning-based calendar, with critical disease windows after pruning, during shoot growth, flowering and berry development. Plan which sprays in your schedule can be done by drone and which need ground equipment. Discuss this with your consultant and the drone operator before the season so the right product and method are ready at each stage.",
          "In humid weather when downy mildew risk rises, speed matters. A drone can cover the vineyard quickly, helping you keep protective sprays on time."
        ]
      },
      {
        "heading": "Checklist for the first vineyard demo",
        "list": [
          "Choose a representative block with typical canopy",
          "Place water-sensitive cards inside the canopy and near bunches",
          "Fly with water first to check route and clearance",
          "Compare coverage with your usual method"
        ]
      },
      {
        "heading": "Export residue requirements",
        "body": [
          "Grape exporters must meet residue monitoring requirements managed through APEDA. If your grapes are for export, align every drone spray — product, dose and pre-harvest interval — with the current residue monitoring plan and keep complete records."
        ]
      },
    ],
    faqs: [
      {
        q: "Can drones spray grapes on trellises?",
        a: "Yes, with careful route planning, safe height above wires and posts, and coverage checks. A field visit and demo should come first.",
      },
      {
        q: "Can drones control downy mildew in grapes?",
        a: "Drones can apply approved fungicides for downy mildew. Timely application and good coverage are key.",
      },
      {
        q: "Is drone spraying suitable for export grapes?",
        a: "It can be, if products are approved, pre-harvest intervals are followed strictly and records are kept for residue compliance.",
      },
      {
        q: "Why is RTK useful in vineyards?",
        a: "RTK gives precise positioning so the drone follows rows accurately and repeats routes for each spray.",
      },
      {
        q: "Can drones replace air-blast sprayers in vineyards?",
        a: "Not always. Many growers use drones for some sprays and ground sprayers for others, depending on canopy and target.",
      },
      {
        q: "How do I check spray coverage in a vineyard?",
        a: "Place water-sensitive cards inside the canopy and near bunches and check droplet density after spraying.",
      },
      {
        q: "Can I get a vineyard visit or demo?",
        a: "Yes, call 8282802150 to discuss a visit or demo on a block of your vineyard.",
      },
      {
        "q": "Will drone spraying damage grape bunches?",
        "a": "When flown at correct height and speed, the downwash is controlled. Discuss settings for sensitive stages like flowering and berry set with the pilot."
      },
      {
        "q": "How do I keep spray records for export?",
        "a": "Record the date, block, product, dose, water volume and operator for every spray. Many drone apps also log the route and area sprayed."
      },
      {
        "q": "Can drones spray vineyards under nets?",
        "a": "Usually not. Nets and overhead structures make drone flight unsafe and block spray. Ground sprayers are generally used in netted vineyards."
      },
      {
        "q": "Which grape sprays suit drones best?",
        "a": "Timely protective fungicide sprays across the vineyard often suit drones well. Sprays needing very precise bunch targeting may still be better with ground sprayers."
      },
    ],
    cta: { topic: "demo", label: "Book a vineyard visit or demo" },
    related: ["/multispectral-drone/", "/drone-spraying-for-orchards/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-vegetables",
    category: "crops",
    navLabel: "Drone Spraying for Vegetables",
    summary: "Careful, targeted spraying on small, mixed vegetable fields.",
    h1: "Drone Spraying for Vegetables: Small Plots, Mixed Crops and Harvest Intervals",
    seo: {
      title: "Drone Spraying for Vegetables: Tips for Small Plots",
      description:
        "Drone spraying for vegetables — tomato, brinjal, chilli, okra and more. Small plot tips, harvest intervals, drift near mixed crops and when to use a drone.",
      keywords: [
        "Drone spraying for vegetables",
        "vegetable crop drone spraying",
        "tomato drone spraying",
        "chilli drone spray",
        "brinjal pest drone",
        "drone spraying small farms",
      ],
    },
    intro:
      "Vegetable farms are often small, closely planted and full of different crops side by side. Sprays are frequent and harvests continuous. Drones can help vegetable growers spray quickly and reduce exposure, but they need careful planning around mixed crops and harvest intervals. Here is what to consider.",
    quickAnswer:
      "Drone spraying for vegetables works for crops like tomato, brinjal, chilli, okra, cabbage and cucurbits when the product is approved for drone use and the plot layout allows safe flight. Key cautions are drift onto neighbouring vegetables, strict pre-harvest intervals during continuous picking and small, obstructed plots. Group spraying of neighbouring vegetable fields improves efficiency.",
    takeaways: [
      "Best on contiguous vegetable blocks rather than tiny isolated plots.",
      "Drift onto neighbouring vegetables must be controlled carefully.",
      "Continuous harvesting makes pre-harvest intervals critical.",
      "Use only products approved for drone use on that vegetable.",
    ],
    sections: [
      {
        heading: "Why drones can help vegetable growers",
        body: [
          "Vegetables often need sprays every one to two weeks against pests like fruit borers, whiteflies, thrips and mites, and diseases such as blights and mildews. Spraying by hand in dense, sticky crops exposes workers to chemicals repeatedly. Drones reduce that exposure and can finish small blocks quickly, especially when neighbouring farms are sprayed together.",
        ],
      },
      {
        heading: "Possible uses by crop",
        table: {
          caption: "Examples — confirm product approval for each crop",
          head: ["Crop", "Common targets"],
          rows: [
            ["Tomato", "Fruit borer, whitefly, early and late blight"],
            ["Brinjal", "Fruit and shoot borer, sucking pests"],
            ["Chilli", "Thrips, mites, fruit rot"],
            ["Okra", "Jassids, whitefly, fruit borer"],
            ["Cabbage and cauliflower", "Diamondback moth, aphids"],
            ["Cucurbits", "Fruit fly, powdery and downy mildew"],
          ],
        },
      },
      {
        heading: "Special care in vegetables",
        subsections: [
          {
            heading: "Drift onto neighbouring crops",
            body: [
              "Vegetable plots are often next to other vegetables or crops ready for harvest. Coarser droplets, low height, calm weather and buffers help keep spray on target.",
            ],
          },
          {
            heading: "Pre-harvest intervals",
            body: [
              "Many vegetables are picked every few days. Plan sprays so the label's pre-harvest interval is respected before the next picking.",
            ],
          },
          {
            heading: "Small and obstructed plots",
            body: [
              "Plots surrounded by trees, poles, sheds or wires can be hard to fly safely. Sometimes a manual sprayer is the better choice for these.",
            ],
          },
        ],
      },
      {
        heading: "Farmer preparation",
        list: [
          "Confirm the pest or disease and a drone-approved product",
          "Plan spraying right after a picking to respect harvest intervals",
          "Inform neighbours, especially those about to harvest",
          "Mark obstacles around small plots",
          "Coordinate with nearby vegetable growers for group spraying",
        ],
      },
      {
        heading: "Making drones work in vegetable clusters",
        body: [
          "Vegetable belts near towns often have many small farms growing similar crops. When farmers coordinate — choosing the same day, sharing water points and agreeing the spray order — a drone can cover the whole cluster efficiently. FPOs and vegetable grower groups can organise such schedules, making drone spraying practical even for small holdings.",
        ],
      },
      {
        heading: "Residue-safe vegetables",
        body: [
          "Consumers and buyers increasingly care about pesticide residues. Use only approved products, the right dose and timing, and keep records of sprays. Even, accurate application by drone — combined with integrated pest management like traps and resistant varieties — helps produce residue-safe vegetables.",
        ],
      },
      {
        "heading": "Drone vs manual spraying in vegetables",
        "table": {
          "caption": "Choose the method by plot and crop",
          "head": [
            "Situation",
            "Better option"
          ],
          "rows": [
            [
              "Contiguous vegetable blocks",
              "Drone"
            ],
            [
              "Tiny plot surrounded by trees or sheds",
              "Manual sprayer"
            ],
            [
              "Crop at picking stage next door",
              "Manual, or drone with wide buffers and calm weather"
            ],
            [
              "Labour shortage at peak season",
              "Drone"
            ]
          ]
        }
      },
      {
        "heading": "Planning sprays around picking",
        "body": [
          "For continuously harvested vegetables like tomato, okra and chilli, plan sprays immediately after a picking. Choose products whose pre-harvest interval fits before the next picking. Mark the spray date in your notebook and inform pickers, so nobody harvests too early. This simple routine protects consumers and your market reputation."
        ]
      },
      {
        "heading": "Integrated pest management in vegetables",
        "body": [
          "Drones work best as part of integrated pest management. Use pheromone and sticky traps to monitor pests, remove infested fruits and shoots, use resistant varieties where available and spray only when needed. When a spray is required, a drone helps apply it quickly and evenly across the cluster, reducing time and exposure."
        ]
      },
      {
        "heading": "Questions to ask before booking",
        "list": [
          "Is this product approved for drone use on my vegetable?",
          "How will drift onto neighbouring crops be controlled?",
          "When is my next picking, and does the pre-harvest interval fit?",
          "Can neighbouring growers be sprayed the same day?"
        ]
      },
    ],
    faqs: [
      {
        q: "Can drones spray vegetable crops?",
        a: "Yes, for many vegetables, if the product is approved for drone use and the plot allows safe flight.",
      },
      {
        q: "Is drone spraying practical on small vegetable plots?",
        a: "It works best when neighbouring plots are sprayed together. Tiny, obstructed plots may be better sprayed manually.",
      },
      {
        q: "How do I avoid drift onto my neighbour's vegetables?",
        a: "Use coarser droplets, low height, calm weather and buffers, and coordinate spraying times with neighbours.",
      },
      {
        q: "Can I harvest vegetables right after drone spraying?",
        a: "No. Follow the pre-harvest interval on the product label before picking.",
      },
      {
        q: "Which vegetables are commonly sprayed by drone?",
        a: "Tomato, brinjal, chilli, okra, cabbage, cauliflower and cucurbits, among others — always with approved products.",
      },
      {
        q: "Is drone spraying safer for vegetable growers?",
        a: "It reduces direct exposure during spraying. PPE is still needed while mixing and filling.",
      },
      {
        q: "How do I book vegetable drone spraying?",
        a: "Call or WhatsApp 8282802150 with your crop, area, location and the product.",
      },
      {
        "q": "Can drones spray polyhouse or net-house vegetables?",
        "a": "Generally no. Drones are designed for open fields; protected structures need ground or fixed spraying systems."
      },
      {
        "q": "Can drones spray creeper vegetables on trellises?",
        "a": "It depends on the structure. Low trellises in open fields may be possible with careful height planning; tall or covered structures usually are not."
      },
      {
        "q": "What does drone spraying cost for vegetables?",
        "a": "It depends on area, plot layout, location and grouping with neighbours. Call 8282802150 for a written quote."
      },
    ],
    cta: { topic: "service", label: "Call for free advice" },
    related: ["/10-litre-agriculture-drone/", "/pesticide-spraying-drone/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-for-orchards",
    category: "crops",
    navLabel: "Drone Spraying for Orchards",
    summary: "Planning by tree size in mango, pomegranate, citrus and other orchards.",
    h1: "Drone Spraying for Orchards: Mango, Pomegranate, Citrus and More",
    seo: {
      title: "Drone Spraying for Orchards: Mango, Citrus & Pomegranate",
      description:
        "Drone spraying in orchards — tree-by-tree routes, canopy coverage, mango hopper and mildew sprays, pomegranate and citrus tips, and when to use a demo.",
      keywords: [
        "Drone spraying for orchards",
        "orchard drone spraying",
        "mango drone spraying",
        "pomegranate drone spray",
        "citrus orchard drone",
        "fruit tree spraying drone",
      ],
    },
    intro:
      "Spraying fruit trees by hand or with a ladder is slow, tiring and often leaves the upper canopy poorly covered. Drones can spray orchards from above, tree by tree, reducing labour and exposure. But orchards vary greatly in tree size, spacing and canopy density, so planning is everything. Here is how drones fit into orchard spraying.",
    quickAnswer:
      "Drone spraying for orchards uses mapped, tree-by-tree or row routes to apply approved products to crops like mango, pomegranate, citrus, guava and litchi. It helps cover tall canopies and reduces labour, but results depend on tree size, spacing, canopy density and correct settings. A map of the orchard and a demo on a block are recommended before regular use.",
    takeaways: [
      "Mapping the orchard first allows precise tree or row routes.",
      "Tall and dense canopies need slower speed and good downwash.",
      "Avoid bee-active hours during flowering.",
      "Use only products approved for drone use on that fruit crop.",
    ],
    sections: [
      {
        heading: "Why drones can help in orchards",
        body: [
          "Manual and ladder spraying struggles with tall trees, and ground sprayers can damage roots and low branches when moving between rows. Drones reach the top of the canopy easily and can be programmed to spray only over trees, skipping gaps. This saves product, reduces drift into open spaces and keeps workers out of the spray.",
        ],
      },
      {
        heading: "Possible uses by crop",
        table: {
          caption: "Examples — confirm product approval and local advice",
          head: ["Crop", "Common targets"],
          rows: [
            ["Mango", "Mango hoppers, powdery mildew, anthracnose"],
            ["Pomegranate", "Bacterial blight management sprays, fruit borer, thrips"],
            ["Citrus", "Citrus psylla, leaf miner, fungal diseases"],
            ["Guava", "Fruit fly, sucking pests"],
            ["Litchi and others", "Pests and diseases as advised locally"],
          ],
        },
      },
      {
        heading: "Special care in orchards",
        subsections: [
          {
            heading: "Planning by tree size",
            body: [
              "Young, small trees and old, large trees need different heights, speeds and spray volumes. Group blocks by tree size and adjust settings for each.",
            ],
          },
          {
            heading: "Canopy coverage",
            body: [
              "Dense canopies need slower flight and good downwash. Check coverage on inner and lower leaves with water-sensitive cards.",
            ],
          },
          {
            heading: "Flowering and pollinators",
            body: [
              "Many orchard sprays happen around flowering. Avoid bee-active hours, inform beekeepers and follow label restrictions.",
            ],
          },
        ],
      },
      {
        heading: "Farmer preparation",
        list: [
          "Provide an orchard map or arrange a mapping flight",
          "Share tree ages, sizes and spacing",
          "Confirm product approval and the recommended dose",
          "Mark power lines, tall trees and structures",
          "Arrange water and a clear take-off spot",
          "Start with a demo on one block",
        ],
      },
      {
        heading: "Mapping first, spraying second",
        body: [
          "A high-resolution map lets the pilot locate each tree or row and design precise routes. With RTK positioning, the same route can be repeated for every spray. This tree-by-tree approach is one of the biggest advantages of drones over manual spraying in orchards.",
        ],
      },
      {
        heading: "Limits to keep in mind",
        body: [
          "Very tall, dense trees with heavy canopies may still need ground sprayers for full coverage of inner branches. Orchards under nets or with overhead structures are difficult for drones. Many growers use drones for upper canopy and quick protective sprays and ground equipment for thorough cover sprays.",
        ],
      },
      {
        "heading": "Drone vs manual and air-blast spraying in orchards",
        "table": {
          "caption": "General comparison",
          "head": [
            "Point",
            "Drone",
            "Manual / ladder",
            "Air-blast sprayer"
          ],
          "rows": [
            [
              "Top canopy coverage",
              "Good",
              "Difficult",
              "Good on suitable trees"
            ],
            [
              "Inner canopy coverage",
              "Depends on settings",
              "Variable",
              "Good"
            ],
            [
              "Labour",
              "Low",
              "High",
              "Medium"
            ],
            [
              "Ground access needed",
              "No",
              "Yes",
              "Yes, between rows"
            ]
          ]
        }
      },
      {
        "heading": "Seasonal orchard spray planning",
        "body": [
          "Orchard sprays cluster around new flush, flowering and fruit development. Make a calendar with your horticulture advisor, mark which sprays suit a drone and book early for flowering-stage sprays, when timing is tight and demand is high. After each spray, check a few trees from different blocks for coverage and pest or disease response."
        ]
      },
      {
        "heading": "Who benefits most",
        "body": [
          "Large mango and citrus orchards, pomegranate growers facing labour shortages and FPOs managing many member orchards gain the most. For a small orchard with a few trees, manual spraying may remain practical; group demos with neighbouring orchards can show whether drones suit your area."
        ]
      },
      {
        "heading": "Checking coverage in fruit trees",
        "body": [
          "After the first drone spray in your orchard, check several trees in each block. Look at leaves at the top, middle and inside of the canopy, and on the side away from the drone's path. Water-sensitive cards clipped to branches give a clear picture. Share results with the pilot so settings can be fine-tuned for your trees."
        ]
      },
      {
        "heading": "Horticulture support and advice",
        "body": [
          "For orchard crop protection schedules and support programmes, consult your state horticulture department or the National Horticulture Board. Their guidance on products and timing should drive every drone spray in your orchard."
        ]
      },
    ],
    faqs: [
      {
        q: "Can drones spray tall mango trees?",
        a: "Yes, drones can reach the top of tall trees. Coverage of the inner canopy depends on settings and tree density.",
      },
      {
        q: "Is drone spraying good for pomegranate orchards?",
        a: "It can help with timely sprays and reduced labour, using approved products and settings matched to tree size.",
      },
      {
        q: "Do I need a map of my orchard for drone spraying?",
        a: "It is strongly recommended. A map allows tree-by-tree or row routes, saving product and improving safety.",
      },
      {
        q: "Can drones spray only over trees and skip gaps?",
        a: "Yes, with a mapped orchard and proper route planning, drones can spray tree rows and skip open ground.",
      },
      {
        q: "Can I spray during flowering?",
        a: "Only if the label allows, and avoid hours when bees are active. Inform nearby beekeepers.",
      },
      {
        q: "Will drones replace ground sprayers in orchards?",
        a: "Not entirely. Many growers use both, choosing drones for some sprays and ground equipment for thorough cover sprays.",
      },
      {
        q: "Can I get an orchard demo?",
        a: "Yes, call 8282802150 to discuss a demo on a block of your orchard.",
      },
      {
        "q": "How much spray volume does a drone use per tree?",
        "a": "It depends on tree size, canopy density and the product. The pilot sets flow rate and speed per block; the label dose per area still applies."
      },
      {
        "q": "Can drones spray orchards on slopes?",
        "a": "Yes, with terrain following and careful planning. Hilly orchards benefit because ground equipment is hard to move there."
      },
    ],
    cta: { topic: "demo", label: "Book an orchard demo" },
    related: ["/agricultural-mapping-drone/", "/drone-spraying-for-grapes/"],
    schema: "Service",
  },
];
