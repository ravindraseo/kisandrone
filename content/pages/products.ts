import type { KeywordPage } from "../types";

/** Products & Services keyword pages. */
export const productPages: KeywordPage[] = [
  {
    slug: "agriculture-spraying-drone",
    category: "products-services",
    navLabel: "Agriculture Spraying Drone",
    summary: "The main parts of a spraying drone, how it works and what to check when choosing one.",
    h1: "Agriculture Spraying Drone: Parts, How It Works and a Buyer's Checklist",
    seo: {
      title: "Agriculture Spraying Drone: How It Works + Buyer Checklist",
      description:
        "How an agriculture spraying drone works — tank, pump, nozzles, flight controller and batteries — plus a 10-point checklist before you buy or hire one.",
      keywords: [
        "Agriculture spraying drone",
        "spray drone",
        "drone sprayer",
        "agri spraying drone parts",
        "pesticide sprayer drone",
        "how spraying drone works",
      ],
    },
    intro:
      "An agriculture spraying drone is a multi-rotor aircraft that carries a liquid tank and sprays crops from a few metres above the canopy. Knowing its main parts and how each one affects spray quality helps you judge any model — whether you plan to buy one, rent one or simply hire a spraying service.",
    quickAnswer:
      "An agriculture spraying drone carries a tank of diluted pesticide or liquid nutrient, pumps it to nozzles under its arms and sprays while flying a GPS-planned path over the field. The rotor downwash pushes droplets into the canopy. Spray quality depends on height, speed, nozzle type, droplet size and weather — and on a certified, trained pilot.",
    takeaways: [
      "Key parts: frame and arms, motors and propellers, tank, pump, nozzles, flight controller, GNSS, batteries.",
      "Terrain-following radar and obstacle sensing make uneven fields much safer to spray.",
      "Centrifugal nozzles allow finer droplet control; pressure nozzles are simpler to maintain.",
      "Check type certification, spares availability and service support before anything else.",
    ],
    sections: [
      {
        heading: "Main parts of a spraying drone",
        subsections: [
          {
            heading: "Frame, arms, motors and propellers",
            body: [
              "Spraying drones usually have four, six or eight rotors. More rotors spread the load and add redundancy. Foldable arms make transport easier, and carbon-fibre or reinforced composite frames keep weight down. Propellers are consumables and should be inspected before every flight.",
            ],
          },
          {
            heading: "Tank, pump and nozzles",
            body: [
              "The tank holds the spray mix; common classes are 10, 16 and 20 litres. A pump sends liquid to the nozzles at a controlled flow rate. Pressure (fan) nozzles are common and easy to clean, while centrifugal nozzles spin to create droplets of adjustable size.",
            ],
          },
          {
            heading: "Flight controller, GNSS and sensors",
            body: [
              "The flight controller keeps the drone stable and follows the planned route. GNSS (GPS and other satellite systems) gives position; RTK adds centimetre-level accuracy. Radar or vision sensors handle terrain following and obstacle avoidance.",
            ],
          },
          {
            heading: "Batteries and charging",
            body: [
              "Smart lithium batteries power the drone for short sorties. Field work needs several battery sets, a fast charger and usually a generator, so one set charges while another is flying.",
            ],
          },
        ],
      },
      {
        heading: "How drone spraying works, step by step",
        list: [
          "Field inspection: boundary, obstacles, power lines, trees and a safe take-off point",
          "Mission planning: the field is mapped in the app and the route, height, speed and swath are set",
          "Mixing: the product is diluted as per the label and filled into the tank with PPE on",
          "Flight: the drone flies parallel rows; downwash pushes droplets into the canopy",
          "Refill and battery swap: the drone returns automatically and resumes from where it stopped",
          "Records: area, product and time are logged for the farmer",
        ],
      },
      {
        heading: "Pressure vs centrifugal nozzles",
        table: {
          caption: "General comparison of common nozzle systems",
          head: ["Point", "Pressure (fan) nozzles", "Centrifugal nozzles"],
          rows: [
            ["Droplet size control", "Set by nozzle tip and pressure", "Adjustable via disc speed"],
            ["Maintenance", "Simple; tips can clog", "More parts; less clogging"],
            ["Typical use", "General crop spraying", "Fine, even coverage where drift control matters"],
          ],
        },
      },
      {
        heading: "10-point checklist before you buy or hire",
        list: [
          "Valid DGCA type certificate and UIN registration support",
          "Tank class suited to your field size and terrain",
          "Number of battery sets, charger and generator in the package",
          "Terrain following and obstacle sensing",
          "Nozzle type and droplet size settings",
          "Route planning app in a language your pilot is comfortable with",
          "Warranty terms in writing",
          "Spare parts stocked near you",
          "Training for the pilot and ground crew",
          "Response time for repairs during the season",
        ],
      },
      {
        "heading": "Common problems with spraying drones and how to avoid them",
        "body": [
          "Most field problems with spraying drones come from preparation, not from the drone itself. A few habits prevent the majority of lost days during the season."
        ],
        "subsections": [
          {
            "heading": "Clogged nozzles and filters",
            "body": [
              "Poorly mixed wettable powders, dirty water and leftover residue block nozzles and strainers. Pre-mix powders in a bucket, filter the water and flush the system with clean water after every job."
            ]
          },
          {
            "heading": "Uneven spray and missed strips",
            "body": [
              "Wrong swath width, gusty wind or a drifting GNSS signal leaves untreated strips. Confirm the swath setting for your nozzle type, keep overlap between passes and stop when the wind rises."
            ]
          },
          {
            "heading": "Battery and power issues",
            "body": [
              "Flying on hot or partly charged batteries shortens their life and can cause a forced landing. Let batteries cool before charging and keep the charger and generator in the shade."
            ]
          }
        ]
      },
    ],
    faqs: [
      {
        q: "How does an agriculture spraying drone work?",
        a: "It flies a GPS-planned route over the field, pumps the spray mix from its tank to nozzles and releases droplets that the rotor downwash pushes into the crop canopy.",
      },
      {
        q: "How many acres can a spraying drone cover in a day?",
        a: "It depends on tank size, battery sets, field shape, refilling speed and weather. Ask the operator for a realistic estimate for your field instead of relying on advertised maximums.",
      },
      {
        q: "Which is better — a 4-rotor or 6-rotor spraying drone?",
        a: "Both can work well. Six or eight rotors offer more redundancy and stability with heavy loads; four rotors are simpler and lighter. Certification, support and spray quality matter more than rotor count.",
      },
      {
        q: "Can a spraying drone spread granules or seeds?",
        a: "Many models accept a spreader attachment for granules or seeds. Check whether the model supports it and whether the product is suitable for aerial application.",
      },
      {
        q: "Who can fly an agriculture spraying drone?",
        a: "A person holding a Remote Pilot Certificate from a DGCA-authorised training organisation, flying a registered drone of a certified type.",
      },
      {
        q: "How often does a spraying drone need servicing?",
        a: "Do a pre-flight check every time, clean the tank and nozzles after every job and follow the manufacturer's service schedule for motors, pumps and batteries.",
      },
      {
        "q": "What is the difference between a spraying drone and a normal camera drone?",
        "a": "A spraying drone is a much larger, heavier aircraft built to carry a liquid tank, pump and nozzles, with farm-specific software and sensors. A camera drone only carries a camera and cannot be used for spraying."
      },
    ],
    cta: { topic: "price", label: "Get a spraying drone quote" },
    related: ["/best-drone-for-spraying-crops/", "/16-litre-agriculture-drone/"],
    schema: "Service",
  },
  {
    slug: "crop-spraying-drone",
    category: "products-services",
    navLabel: "Crop Spraying Drone",
    summary: "Using drone spraying for different crops and crop growth stages.",
    h1: "Crop Spraying Drone: Settings by Crop, Growth Stage and Season",
    seo: {
      title: "Crop Spraying Drone: Settings by Crop & Growth Stage",
      description:
        "How to use a crop spraying drone at each growth stage — height, swath, droplet size and timing for paddy, wheat, cotton, sugarcane and vegetables.",
      keywords: [
        "Crop spraying drone",
        "drone crop spraying",
        "aerial crop spraying",
        "drone spraying settings",
        "spray drone for crops",
        "crop protection drone",
      ],
    },
    intro:
      "The same drone can give very different results on a young wheat crop and a tall, dense cotton field. A crop spraying drone works best when the pilot adjusts height, speed, swath width and droplet size to the crop and its growth stage. Here is how those settings change across the season.",
    quickAnswer:
      "A crop spraying drone should be set differently for each crop and growth stage: lower height and narrower swath for dense or tall canopies, finer droplets for leaf diseases, coarser droplets to reduce drift, and spraying in calm, cool hours. The product must be approved for drone use on that crop, and the label dose always applies.",
    takeaways: [
      "Early stage: less canopy, so drift control matters more than penetration.",
      "Peak growth: dense canopy needs good downwash, slower speed and correct swath overlap.",
      "Flowering: avoid bee-active hours and follow label restrictions.",
      "Always confirm the product is approved for drone application on your crop.",
    ],
    sections: [
      {
        heading: "Drone settings by crop stage",
        subsections: [
          {
            heading: "Early growth (seedling and vegetative start)",
            body: [
              "The canopy is small and much of the ground is exposed. Coarser droplets and a steady height reduce drift and keep the spray on the target rows. Herbicide applications at this stage need special care and only approved products.",
            ],
          },
          {
            heading: "Active growth and canopy closure",
            body: [
              "As leaves overlap, the spray must reach inside the canopy. Pilots usually reduce speed, keep a consistent height above the crop and ensure swaths overlap so there are no untreated strips.",
            ],
          },
          {
            heading: "Flowering and fruiting",
            body: [
              "Many fungicide and insecticide sprays happen now. Avoid hours when bees and other pollinators are active, check label pre-harvest intervals and keep buffer zones near water and homes.",
            ],
          },
        ],
      },
      {
        heading: "Crops where drones are used most in India",
        table: {
          caption: "Why drones suit these crops — general guidance",
          head: ["Crop", "Why a drone helps", "Watch out for"],
          rows: [
            ["Paddy", "Flooded fields are hard to walk", "Wind over open water, buffer zones"],
            ["Wheat", "Large continuous fields, timely sprays", "Lodging, dew in early morning"],
            ["Cotton", "Tall, dense plants and repeated sprays", "Canopy penetration"],
            ["Sugarcane", "Ground machines cannot enter tall cane", "Height setting over uneven canopy"],
            ["Vegetables", "Quick sprays on many small plots", "Mixed crops, harvest intervals"],
            ["Orchards", "Tree-by-tree spraying", "Tree height, gaps between trees"],
          ],
        },
      },
      {
        heading: "Weather and timing",
        list: [
          "Spray in calm conditions; strong or gusty wind increases drift",
          "Avoid very hot afternoons when fine droplets evaporate before landing",
          "Do not spray just before rain unless the label allows it",
          "Early morning and late afternoon are often the best windows",
          "Check that dew will not dilute the spray on the leaf",
        ],
      },
      {
        heading: "What a farmer should tell the pilot",
        body: [
          "Good results come from good information. Before the drone takes off, tell the pilot which crop and variety you have, the growth stage, the pest or disease you are targeting, the product and dose recommended to you and any sensitive areas nearby — a pond, a house, beehives or a neighbour's crop that should not be sprayed.",
          "Ask the pilot to explain the planned height, swath and flow rate. A professional operator will be happy to explain and will keep a record you can refer to later.",
        ],
      },
      {
        "heading": "Planning sprays across the whole season",
        "body": [
          "Drone spraying works best when it is part of a season plan rather than a last-minute call during an outbreak. Many farmers and FPOs now plan two or three drone visits per crop around the stages where protection matters most.",
          "Start with the crop protection schedule your agronomist or KVK recommends. Mark which sprays fall at stages where walking the field is hard — flooded paddy after transplanting, tall cotton in mid-season, sugarcane after the canopy closes. These are the sprays where a drone saves the most effort.",
          "Book these dates early with the service provider, especially in peak weeks when every farmer in the area wants the same spray. Grouping neighbouring fields with the same crop and stage on one day reduces travel time and usually lowers the rate per acre."
        ],
        "list": [
          "List all planned sprays for the crop and their target stage",
          "Mark the sprays that are hardest to do by hand",
          "Check product approval for drone use for each spray",
          "Book the drone visits in advance and keep a flexible weather backup day"
        ]
      },
    ],
    faqs: [
      {
        q: "Can a drone spray all crops?",
        a: "A drone can spray most field and orchard crops, but only products approved for drone application should be used, and some very small or obstructed plots are not practical.",
      },
      {
        q: "At what height should a crop spraying drone fly?",
        a: "The operator sets height by crop, canopy and product so that spray is even and drift is low. It is usually a few metres above the canopy, adjusted for wind and droplet size.",
      },
      {
        q: "Is a drone effective in a dense crop canopy?",
        a: "The downwash from the rotors helps push droplets into the canopy. Slower speed, correct height and proper overlap improve penetration in dense crops.",
      },
      {
        q: "When is the best time of day for drone spraying?",
        a: "Calm, cooler hours — usually early morning after dew dries or late afternoon. Avoid strong wind, heat and imminent rain.",
      },
      {
        q: "Can I spray during flowering with a drone?",
        a: "Only if the product label allows it, and preferably at times when bees are not active. Follow label instructions strictly.",
      },
      {
        q: "How do I book crop spraying by drone?",
        a: "Call or WhatsApp 8282802150 with your crop, growth stage, area and location. We will tell you what is possible and the next steps.",
      },
      {
        "q": "How many times can a crop be sprayed by drone in a season?",
        "a": "As many times as the crop protection schedule requires. The drone is just the application method — the number of sprays depends on pest pressure and agronomic advice."
      },
    ],
    cta: { topic: "service", label: "Get a spraying quote" },
    related: ["/crops/", "/drone-spraying-for-paddy/", "/drone-spraying-for-cotton/"],
    schema: "Service",
  },
  {
    slug: "pesticide-spraying-drone",
    category: "products-services",
    navLabel: "Pesticide Spraying Drone",
    summary: "Safety, approved products and drift control in pesticide spraying.",
    h1: "Pesticide Spraying Drone: Safety Rules, Approved Products and Drift Control",
    seo: {
      title: "Pesticide Spraying Drone: Safety, SOP & Drift Control",
      description:
        "Spray pesticides by drone the safe, legal way — approved products, the government SOP, PPE, buffer zones, drift control and record keeping explained.",
      keywords: [
        "Pesticide spraying drone",
        "drone pesticide spraying SOP",
        "insecticide spraying drone",
        "drone spray drift",
        "CIB&RC drone approval",
        "safe drone spraying",
      ],
    },
    intro:
      "Pesticides protect crops, but used carelessly they harm people, animals, bees and water. A pesticide spraying drone keeps the operator out of the spray cloud, yet it also brings new risks such as drift. This guide covers what the rules expect and the practical steps every farmer and pilot should follow.",
    quickAnswer:
      "To spray pesticides by drone safely in India, use only products approved for drone application, follow the label dose and the government SOP for drone spraying, wear PPE while mixing, spray in calm weather with buffer zones from homes, water and beehives, inform neighbours in advance and keep a written record of each spray.",
    takeaways: [
      "Not every registered pesticide is approved for drone use — check before spraying.",
      "Drift is the main risk; height, droplet size and wind decide how much occurs.",
      "PPE is still required for mixing, filling and cleaning, even though the pilot stays outside the field.",
      "Records of product, dose, date and area protect both the farmer and the operator.",
    ],
    sections: [
      {
        heading: "Use approved products only",
        body: [
          "In India, pesticides are registered by the Central Insecticides Board and Registration Committee (CIB&RC). Drone application requires a product and use that is approved for this method. The approval list has been growing, so check the current status with your agriculture department, KVK or the product's label and leaflet.",
          "The label dose per acre does not change because a drone is used. What changes is the water volume, which is much lower, so the mix is more concentrated. Mixing must be accurate.",
        ],
      },
      {
        heading: "What the drone spraying SOP covers",
        subsections: [
          {
            heading: "Before the flight",
            list: [
              "Drone registered and pilot certified; airspace zone checked",
              "Site survey for obstacles, buffer zones and a safe landing area",
              "Neighbours and the local community informed",
              "Weather checked — wind, temperature and rain forecast",
            ],
          },
          {
            heading: "During spraying",
            list: [
              "Keep people and animals out of the area",
              "Maintain the planned height, speed and flow rate",
              "Stop if wind picks up or the spray drifts off target",
            ],
          },
          {
            heading: "After spraying",
            list: [
              "Clean the tank and nozzles away from water sources",
              "Dispose of containers and rinse water safely",
              "Record the product, dose, area, date and weather",
            ],
          },
        ],
      },
      {
        heading: "How to control spray drift",
        table: {
          caption: "Drift factors and what to do",
          head: ["Factor", "Effect", "What to do"],
          rows: [
            ["Wind speed", "More wind, more drift", "Spray in calm hours; stop in gusts"],
            ["Height", "Higher flight, more drift", "Keep a consistent, low height above canopy"],
            ["Droplet size", "Fine droplets drift further", "Use coarser droplets near sensitive areas"],
            ["Temperature", "Heat evaporates droplets", "Avoid hot afternoons"],
            ["Buffer zone", "Protects non-target areas", "Leave a gap near homes, water and bees"],
          ],
        },
      },
      {
        heading: "Personal safety checklist",
        list: [
          "Gloves, mask or respirator, goggles and full-sleeve clothing while mixing",
          "Mix in a ventilated place, never near drinking water",
          "Do not eat, drink or smoke while handling pesticides",
          "Wash hands and clothes after the job",
          "Keep a first-aid kit and the product label at the site",
        ],
      },
      {
        "heading": "Protecting bees, water and neighbours",
        "body": [
          "Pesticide drift does not stop at the field boundary. A few extra minutes of planning protects pollinators, water sources and the people living around the field — and keeps the farmer out of disputes."
        ],
        "subsections": [
          {
            "heading": "Pollinators",
            "body": [
              "Find out if there are beehives nearby and inform the beekeeper before spraying. Avoid spraying flowering crops when bees are foraging, usually from mid-morning to afternoon, unless the label clearly allows it."
            ]
          },
          {
            "heading": "Water bodies and fish ponds",
            "body": [
              "Leave a buffer strip next to ponds, canals, wells and fish farms. Never fill or rinse the drone tank directly at a water source, and keep empty containers away from water."
            ]
          },
          {
            "heading": "Homes, schools and livestock",
            "body": [
              "Plan the flight so that the drone sprays away from houses and roads, and keep animals tied or moved away. If the wind turns towards a sensitive area, pause and wait."
            ]
          }
        ]
      },
      {
        "heading": "Pre-harvest interval and residues",
        "body": [
          "Every pesticide label gives a pre-harvest interval — the minimum days between the last spray and harvest. This does not change with drone spraying. For vegetables, fruit and export crops, plan the last drone spray carefully and keep records in case residue testing is done."
        ]
      },
      {
        "heading": "Responsibilities: farmer vs drone operator",
        "body": [
          "Safe pesticide spraying by drone is a shared job. Being clear about who does what avoids gaps that lead to accidents or poor results."
        ],
        "table": {
          "caption": "Typical division of responsibilities",
          "head": [
            "Task",
            "Farmer",
            "Operator"
          ],
          "rows": [
            [
              "Correct pest/disease diagnosis",
              "Yes, with agronomist or KVK advice",
              "Can flag concerns"
            ],
            [
              "Choosing an approved product and dose",
              "Yes",
              "Checks drone approval and label"
            ],
            [
              "Informing neighbours",
              "Yes",
              "Confirms before flight"
            ],
            [
              "Drone registration, pilot certificate, airspace check",
              "—",
              "Yes"
            ],
            [
              "Mixing, flight settings and safe spraying",
              "Supports",
              "Yes"
            ],
            [
              "Records of the spray",
              "Keeps a copy",
              "Provides details"
            ]
          ]
        }
      },
    ],
    faqs: [
      {
        q: "Can any pesticide be sprayed by drone?",
        a: "No. Only products and uses approved for drone application should be sprayed. Check the label or ask your agriculture department or KVK.",
      },
      {
        q: "Does the pesticide dose change with a drone?",
        a: "No. The label dose per acre stays the same. Only the water volume is lower, so the mix is more concentrated and must be measured carefully.",
      },
      {
        q: "Is drone pesticide spraying safer for farmers?",
        a: "It reduces direct exposure because the pilot stays outside the field. Mixing and filling still need PPE.",
      },
      {
        q: "How can I reduce drift when spraying by drone?",
        a: "Spray in calm weather, keep a low and consistent height, use coarser droplets near sensitive areas and maintain buffer zones.",
      },
      {
        q: "Should I tell my neighbours before drone spraying?",
        a: "Yes. The SOP expects the local community to be informed, and it prevents accidental exposure to people, animals and beehives.",
      },
      {
        q: "Why should I keep spray records?",
        a: "Records show what was sprayed, when and how much. They help with pre-harvest intervals, residue checks, export requirements and any later dispute.",
      },
      {
        "q": "What PPE is needed for drone pesticide spraying?",
        "a": "Chemical-resistant gloves, a mask or respirator suited to the product, goggles and full-sleeve clothing for anyone mixing, filling or cleaning. Follow the label's safety section."
      },
    ],
    cta: { topic: "service", label: "Book safe drone spraying" },
    related: ["/drone-spraying-service/", "/crops/"],
    schema: "Service",
  },
  {
    slug: "fertilizer-spraying-drone",
    category: "products-services",
    navLabel: "Fertilizer Spraying Drone",
    summary: "Information on spraying liquid fertilisers and nutrients by drone.",
    h1: "Fertilizer Spraying Drone: Nano Urea, Liquid Nutrients and Granules",
    seo: {
      title: "Fertilizer Spraying Drone: Nano Urea & Liquid Nutrients",
      description:
        "Spray nano urea, nano DAP and liquid micronutrients by drone — when foliar feeding works, mixing tips, timing, granule spreading and common mistakes.",
      keywords: [
        "Fertilizer spraying drone",
        "nano urea drone spraying",
        "liquid fertilizer drone",
        "foliar spray drone",
        "micronutrient spraying drone",
        "drone fertilizer spreader",
      ],
    },
    intro:
      "Foliar nutrition has become popular with nano fertilisers and water-soluble micronutrients, and drones are well suited to spraying them quickly over large areas. But foliar feeding supplements soil fertility — it does not replace it. Here is how fertiliser spraying by drone works and how to get value from it.",
    quickAnswer:
      "A fertiliser spraying drone applies liquid nutrients such as nano urea, nano DAP or water-soluble micronutrients as a fine foliar spray at the right crop stage. Follow the product's recommended dose and timing, check mixing compatibility before combining with pesticides, and remember foliar sprays supplement — not replace — basal soil fertiliser. Some drones can also spread granules with an attachment.",
    takeaways: [
      "Best for top-up nutrition at key growth stages, not for the crop's full nutrient need.",
      "Follow the manufacturer's dose and stage — more is not better.",
      "Do a jar test before tank-mixing nutrients with pesticides.",
      "Granule spreading needs a spreader attachment and suitable granule size.",
    ],
    sections: [
      {
        heading: "Spraying liquid fertiliser by drone",
        body: [
          "Liquid nutrients are absorbed through the leaves, so even coverage matters more than volume. A drone's downwash helps droplets reach both sides of the leaf. Nano fertilisers have been promoted for drone application in India, and many cooperatives and FPOs now combine nutrient sprays with drone services.",
        ],
        subsections: [
          {
            heading: "Common products",
            list: [
              "Nano urea and nano DAP (liquid formulations)",
              "Water-soluble NPK grades for foliar feeding",
              "Micronutrients such as zinc, boron and iron",
              "Bio-stimulants, where the label permits aerial use",
            ],
          },
          {
            heading: "Timing",
            body: [
              "Foliar feeding works when the crop has enough leaf area to absorb nutrients — typically during active vegetative growth and before flowering. The product leaflet usually names the recommended stage.",
            ],
          },
        ],
      },
      {
        heading: "Granular fertiliser and seed spreading",
        body: [
          "Some agricultural drones accept a spreader attachment that throws granules in a controlled swath. This can help in flooded paddy or hilly fields. Granule size, flowability and moisture affect accuracy, so test before spreading a full field. Not all drones support spreading — check the model.",
        ],
      },
      {
        heading: "Mixing nutrients with pesticides",
        table: {
          caption: "A simple jar test before tank-mixing",
          head: ["Step", "What to do"],
          rows: [
            ["1", "Fill a clear jar with water in the same ratio as the drone tank"],
            ["2", "Add products in the order recommended on the labels"],
            ["3", "Shake and wait 15–30 minutes"],
            ["4", "If you see lumps, separation or heat, do not tank-mix"],
          ],
        },
        note: "Some combinations reduce effectiveness or damage the crop. When in doubt, spray separately and ask your agronomist.",
      },
      {
        heading: "Common mistakes to avoid",
        list: [
          "Expecting a foliar spray to replace basal fertiliser in the soil",
          "Spraying on stressed, wilting crops in the afternoon heat",
          "Increasing the dose beyond the recommendation",
          "Skipping the jar test when mixing with pesticides",
          "Not cleaning the tank after nutrient sprays, causing nozzle blockages",
        ],
      },
      {
        heading: "Who benefits most",
        body: [
          "Large farms, FPOs and cooperatives that want to apply nutrients at the right stage across many fields in a short time get the most value. For a small farmer, combining a nutrient spray with a planned pesticide spray in a single drone visit — when compatible — can reduce the number of trips and the service cost.",
        ],
      },
      {
        "heading": "How to judge whether a nutrient spray worked",
        "body": [
          "Foliar nutrition rarely shows a dramatic change overnight. To know whether a drone nutrient spray was worth it, plan a simple comparison and keep notes."
        ],
        "list": [
          "Leave a small untreated strip in the same field as a reference",
          "Note the crop stage, product, dose and weather on the spray day",
          "Compare leaf colour and growth after one to two weeks",
          "At harvest, compare yield from the sprayed area and the reference strip if possible",
          "Use soil testing to plan next season's basal fertiliser alongside foliar sprays"
        ]
      },
      {
        "heading": "Soil health first, foliar spray second",
        "body": [
          "Healthy crops start with healthy soil. A Soil Health Card or a soil test from an accredited lab shows which nutrients are short in your field. Use it to plan basal fertiliser and organic matter. Then use drone foliar sprays as a precise top-up at stages where the crop needs a quick boost, or where soil application is difficult — such as flooded paddy or tall standing crops.",
          "This balanced approach gives better value than relying on foliar sprays alone and helps avoid overuse of any single nutrient."
        ]
      },
      {
        "heading": "Crop-wise uses of nutrient sprays by drone",
        "list": [
          "Paddy: nitrogen top-up at tillering and panicle initiation in flooded fields",
          "Wheat: nitrogen and micronutrient sprays during active tillering and before heading",
          "Cotton and sugarcane: nutrient sprays when the tall canopy makes manual spraying difficult",
          "Vegetables and fruits: micronutrient correction such as zinc or boron at key stages"
        ],
        "note": "Doses and stages differ by product and crop. Always follow the product leaflet and local agronomic advice."
      },
    ],
    faqs: [
      {
        q: "Can nano urea be sprayed by drone?",
        a: "Yes, nano urea has been promoted for drone spraying. Follow the manufacturer's dose and the recommended crop stage.",
      },
      {
        q: "Can a drone replace normal fertiliser application?",
        a: "No. Foliar sprays supplement soil fertility. The crop's main nutrient needs still come from basal and top-dressed soil fertiliser.",
      },
      {
        q: "Can fertiliser and pesticide be sprayed together?",
        a: "Sometimes, if the products are compatible. Always do a jar test and follow both labels; if unsure, spray separately.",
      },
      {
        q: "Can a drone spread granular urea or DAP?",
        a: "Some drones can with a spreader attachment. Check if the model supports it and test the granules for even spreading.",
      },
      {
        q: "When is the best time to spray liquid fertiliser?",
        a: "During active vegetative growth in calm, cool hours, when leaves can absorb nutrients well. Avoid hot afternoons.",
      },
      {
        q: "How do I book a nutrient spray by drone?",
        a: "Call 8282802150 with your crop, stage, area and the product you plan to use. We will advise on feasibility and scheduling.",
      },
    ],
    cta: { topic: "service", label: "Call for free advice" },
    related: ["/agriculture-spraying-drone/", "/drone-spraying-for-wheat/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-service",
    category: "products-services",
    navLabel: "Drone Spraying Service",
    summary: "Get your field sprayed by a trained operator without buying a drone.",
    h1: "Drone Spraying Service for Farmers: How Booking Works and What to Expect",
    seo: {
      title: "Drone Spraying Service for Farmers – Book a Certified Pilot",
      description:
        "Hire a drone spraying service — certified pilot, registered drone, no purchase needed. See how booking works, what to prepare and how rates are set.",
      keywords: [
        "Drone spraying service for farmers",
        "drone spraying service",
        "drone spraying near me",
        "hire drone for spraying",
        "drone spray per acre rate",
        "custom hiring drone",
      ],
    },
    intro:
      "You do not need to buy a drone to benefit from one. With a drone spraying service, a certified pilot brings a registered drone, batteries and equipment to your field and sprays it for you. You pay only for the work done. This page explains how the service works and how to prepare.",
    quickAnswer:
      "A drone spraying service sends a certified pilot with a registered drone to your field. You share your crop, area and location, agree the date and rate, keep the approved product and water ready, and the operator surveys, plans and sprays the field. Rates usually depend on area, crop, field condition and distance. Call 8282802150 to book.",
    takeaways: [
      "No purchase, no pilot licence and no maintenance for the farmer.",
      "Grouping neighbouring fields on the same day often lowers the cost.",
      "Keep the product, clean water and a clear take-off spot ready.",
      "Ask for the pilot's certificate and the drone's registration before work starts.",
    ],
    sections: [
      {
        heading: "How the service works",
        subsections: [
          {
            heading: "1. Enquiry",
            body: ["Call or WhatsApp with your crop, growth stage, approximate area, village/district and preferred date."],
          },
          {
            heading: "2. Confirmation",
            body: [
              "We confirm feasibility, the date, what you need to keep ready and how the rate is calculated. Service terms: [Write your rate method — per acre, minimum area and travel charges].",
            ],
          },
          {
            heading: "3. Field visit and spraying",
            body: [
              "The pilot surveys the field, marks obstacles, plans the route, mixes the product as per label with PPE and sprays the field in rows, refilling and swapping batteries as needed.",
            ],
          },
          {
            heading: "4. Completion",
            body: ["You receive the sprayed area and details for your records. Payment as agreed."],
          },
        ],
      },
      {
        heading: "What farmers should have ready",
        list: [
          "The pesticide or nutrient product approved for drone use, with its label",
          "Clean water close to the field for mixing",
          "A clear, flat spot near the field for take-off and landing",
          "Information on boundaries, power lines and sensitive areas nearby",
          "Neighbours informed about the spraying time",
        ],
      },
      {
        heading: "What decides the service rate",
        table: {
          caption: "Factors that affect drone spraying charges",
          head: ["Factor", "Why it matters"],
          rows: [
            ["Total area", "Larger or grouped areas reduce travel and set-up time per acre"],
            ["Crop and stage", "Tall or dense crops may need slower flights"],
            ["Field shape and obstacles", "Small, irregular or obstructed plots take longer"],
            ["Distance", "Travel to remote fields adds cost"],
            ["Who supplies the product", "[Write your policy: the farmer provides the chemicals, or you supply approved products]"],
          ],
        },
        note: "Minimum area: [Write your minimum area policy]. We do not publish a fixed per-acre rate online because it depends on these factors — ask for a written quote.",
      },
      {
        heading: "Why use a professional service",
        list: [
          "Certified pilot and registered drone — legal and insured operation [Confirm your insurance]",
          "Correct settings for your crop, reducing drift and missed strips",
          "No investment in a drone, batteries or repairs",
          "Records of each spray for your reference",
        ],
      },
      {
        heading: "Tips to get the most from a drone spraying visit",
        body: [
          "Coordinate with neighbours who need the same spray in the same week — a group booking saves travel time and is usually cheaper for everyone. Keep the product and water ready before the drone arrives, so the pilot can start early while the wind is calm.",
        ],
      },
      {
        "heading": "Questions to ask any drone spraying provider",
        "body": [
          "Not all drone services work to the same standard. Before booking, ask a few simple questions. A professional operator will answer them clearly and without hesitation."
        ],
        "list": [
          "Is the pilot's Remote Pilot Certificate valid, and can I see it?",
          "Is the drone registered on Digital Sky with a UIN?",
          "Is the operation insured, and what does the insurance cover?",
          "How will you set height, swath and flow rate for my crop?",
          "What happens if the drone breaks down or the weather turns?",
          "Will I get a record of the area sprayed and the product used?"
        ]
      },
      {
        "heading": "Group bookings for villages and FPOs",
        "body": [
          "The drone spraying service works most efficiently when several farmers in a village book together. The pilot sets up once, sprays field after field and moves on with minimal travel. FPOs, cooperatives and farmer groups can collect bookings from members for a common crop and stage, share a single schedule and often negotiate a better rate.",
          "If you are organising a group booking, share the list of farmers, field locations, crops and approximate areas in advance so the route can be planned."
        ]
      },
    ],
    faqs: [
      {
        q: "How do I book a drone spraying service?",
        a: "Call or WhatsApp 8282802150 with your crop, area, location and preferred date. We will confirm feasibility and next steps.",
      },
      {
        q: "What is the drone spraying cost per acre?",
        a: "It depends on area, crop, field shape, distance and who supplies the product. We give a written quote after understanding your field.",
      },
      {
        q: "Do I need a licence to hire a drone service?",
        a: "No. The operator holds the Remote Pilot Certificate and is responsible for the drone's registration and safe operation.",
      },
      {
        q: "Who provides the pesticide?",
        a: "Usually the farmer, based on the agronomist's advice. Make sure the product is approved for drone use.",
      },
      {
        q: "Can small farmers book the service?",
        a: "Yes. Grouping neighbouring fields on the same day makes it more practical and often cheaper.",
      },
      {
        q: "What if it rains or is too windy on the booked day?",
        a: "Spraying is rescheduled for safety and effectiveness. The pilot will agree a new slot with you.",
      },
      {
        q: "Which areas do you serve?",
        a: "Call with your district and village and we will confirm whether service is available there.",
      },
      {
        "q": "How long does it take to spray one acre by drone?",
        "a": "Actual flying time per acre is short, but total time depends on set-up, mixing, refilling, battery swaps and field shape. The pilot can give you a realistic estimate after seeing the field."
      },
      {
        "q": "Will I get proof of the spraying work?",
        "a": "Yes, ask for the area sprayed, date and product details. Many drone apps also keep a flight log of the spray route."
      },
    ],
    cta: { topic: "service", label: "Book drone spraying now" },
    related: ["/crops/", "/agriculture-drone-rental/"],
    schema: "Service",
  },
  {
    slug: "agriculture-drone-rental",
    category: "products-services",
    navLabel: "Agriculture Drone Rental",
    summary: "Options for renting a drone for the season or a fixed period.",
    h1: "Agriculture Drone Rental: Seasonal, Daily and With-Operator Options",
    seo: {
      title: "Agriculture Drone on Rent: Options, Terms & Rent vs Buy",
      description:
        "Agriculture drone rental for FPOs, CHCs and large farms — with-operator, seasonal and daily options, what the contract should cover and rent vs buy maths.",
      keywords: [
        "Agriculture drone rental",
        "drone on rent for agriculture",
        "kisan drone on rent",
        "spraying drone hire",
        "seasonal drone rental",
        "rent vs buy drone",
      ],
    },
    intro:
      "Renting an agriculture drone lets FPOs, Custom Hiring Centres and large farms use a drone for the busy season without the full purchase cost. It is also a good way to test whether owning a drone would pay off. Here are the common rental models and what to agree before signing.",
    quickAnswer:
      "Agriculture drones are commonly rented with an operator (pay per day or per acre) or, for certified pilots, as a dry rental for a day, a week or a full season. A rental agreement should cover the drone's registration, battery sets, insurance, damage responsibility, maintenance and breakdown replacement. Renting suits seasonal or uncertain demand; buying suits large, regular workloads.",
    takeaways: [
      "With-operator rental is easiest — no pilot certificate needed on your side.",
      "Dry rental requires your own certified pilot and clear damage terms.",
      "Agree in writing who pays for crashes, spare parts and lost days.",
      "Seasonal rental is a good trial before buying.",
    ],
    sections: [
      {
        heading: "Common rental models",
        subsections: [
          {
            heading: "Rental with operator",
            body: [
              "The provider supplies the drone, batteries and a certified pilot. You pay per day or per acre. This is the simplest option and very similar to a spraying service, but booked for a longer block of time.",
            ],
          },
          {
            heading: "Dry rental (drone only)",
            body: [
              "You take the drone and batteries and fly with your own certified pilot. This needs a clear agreement on damage, insurance, maintenance and return condition.",
            ],
          },
          {
            heading: "Seasonal rental",
            body: [
              "An FPO or CHC rents a drone for the whole kharif or rabi season, often with maintenance support. It gives assured availability at peak time.",
            ],
          },
        ],
        note: "[Confirm which rental options you offer and their terms.]",
      },
      {
        heading: "Who rental is right for",
        list: [
          "FPOs and cooperatives testing a drone service for members",
          "Custom Hiring Centres with seasonal demand",
          "Large farms with a short, intense spraying window",
          "Entrepreneurs who want to build demand before buying",
        ],
      },
      {
        heading: "Renting vs buying — a quick comparison",
        table: {
          caption: "General comparison",
          head: ["Point", "Renting", "Buying"],
          rows: [
            ["Upfront cost", "Low", "High"],
            ["Availability at peak", "Must book early", "Always available"],
            ["Maintenance", "Usually the provider's job", "Your responsibility"],
            ["Pilot", "Can be included", "Your own certified pilot"],
            ["Best for", "Seasonal or uncertain demand", "Regular, large workloads"],
          ],
        },
      },
      {
        heading: "What a rental agreement should cover",
        list: [
          "Drone model, UIN registration and type certificate",
          "Number of battery sets, charger and generator",
          "Rental period, rate and what counts as a working day",
          "Insurance cover and who pays for damage or crashes",
          "Maintenance, spare parts and breakdown replacement",
          "Pilot certification (for dry rental) and operating rules",
          "Security deposit and return condition",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "Estimate how many acres you will spray in a season and how many days the drone will actually work. If the drone would sit idle most of the year, renting or hiring a service is usually smarter. If demand is steady across seasons and crops, buying may pay off. Call us and we will help you work through the numbers.",
        ],
      },
      {
        "heading": "Pre-rental inspection checklist",
        "body": [
          "Before taking a rented drone, inspect it with the provider and note its condition in writing. This avoids disputes when you return it."
        ],
        "list": [
          "Check the frame, arms and landing gear for cracks or repairs",
          "Spin each motor and inspect propellers for chips or bends",
          "Run the pump and check every nozzle for blockages and leaks",
          "Check each battery's cycle count, health and charge level",
          "Confirm the UIN, firmware version and app login work",
          "Do a short test flight before signing"
        ]
      },
      {
        "heading": "Running a rental drone profitably",
        "body": [
          "If you are renting a drone to offer spraying to other farmers, plan your bookings before the rental starts. Idle rental days cost money. Line up group bookings by crop and stage, keep a spare battery set if possible and confirm product availability with farmers in advance.",
          "Track every day: acres sprayed, batteries used, travel and any downtime. After one season, these numbers will show clearly whether buying a drone would pay off for your business."
        ]
      },
      {
        "heading": "Rental red flags",
        "list": [
          "The provider cannot show the drone's UIN or type certificate",
          "No written agreement, or damage terms are vague",
          "Batteries with very high cycle counts or swollen cells",
          "No support number or backup drone during the season"
        ]
      },
      {
        "heading": "Rental for FPOs and CHCs",
        "body": [
          "For FPOs and Custom Hiring Centres, renting is a low-risk way to launch a drone service for members. Run one season on rent, record demand and costs, and use that evidence when applying for any scheme support or a bank loan to buy your own drone."
        ]
      },
    ],
    faqs: [
      {
        q: "Can I rent an agriculture drone without a pilot?",
        a: "Only if you have your own pilot with a Remote Pilot Certificate. Otherwise, rent with an operator.",
      },
      {
        q: "How is drone rental charged?",
        a: "Usually per day, per acre or for a season, depending on the provider and whether an operator is included.",
      },
      {
        q: "Who pays if the rented drone is damaged?",
        a: "This must be written in the agreement. Insurance and damage terms vary, so clarify before taking the drone.",
      },
      {
        q: "Is renting cheaper than buying?",
        a: "For seasonal or low use, renting is usually cheaper. For large, regular workloads, buying may cost less per acre over time.",
      },
      {
        q: "How early should I book a seasonal rental?",
        a: "As early as possible before the season, because demand peaks at the same time for everyone.",
      },
      {
        q: "How do I ask about rental?",
        a: "Call or WhatsApp 8282802150 with the period, area, crops and whether you need an operator.",
      },
      {
        "q": "What documents do I need to rent a drone?",
        "a": "Usually identity and address proof, a signed rental agreement and, for dry rental, your pilot's Remote Pilot Certificate. Some providers also take a security deposit."
      },
      {
        "q": "Is insurance included in drone rental?",
        "a": "It depends on the provider. Ask whether third-party liability and damage to the drone are covered, and get it in writing."
      },
      {
        "q": "Can I rent a drone just for one day?",
        "a": "Some providers offer daily rental, usually with an operator. Single-day dry rental is less common because of set-up, training and damage risk."
      },
    ],
    cta: { topic: "rental", label: "Ask about drone rental" },
    related: ["/drone-spraying-service/", "/buying-guide/"],
    schema: "Service",
  },
  {
    slug: "crop-monitoring-drone",
    category: "products-services",
    navLabel: "Crop Monitoring Drone",
    summary: "Checking crop health and spotting problem areas with a drone.",
    h1: "Crop Monitoring Drone: Spot Problems Early from Above",
    seo: {
      title: "Crop Monitoring Drone: Spot Crop Stress Early",
      description:
        "Use a crop monitoring drone to spot pest, water and nutrient stress early — what RGB, multispectral and thermal images show, and how to act on them.",
      keywords: [
        "Crop monitoring drone",
        "drone crop health monitoring",
        "crop scouting drone",
        "NDVI crop monitoring",
        "precision agriculture drone",
        "field monitoring drone",
      ],
    },
    intro:
      "Walking a large field to check every patch takes time, and problems can spread before you notice them. A crop monitoring drone flies over the field and captures images that show differences in crop growth. Used well, it tells you where to look — so you can scout smarter and act sooner.",
    quickAnswer:
      "A crop monitoring drone uses an RGB, multispectral or thermal camera to photograph the field from above. The images reveal patches with weaker growth, water stress, pest damage or uneven emergence. They do not diagnose the cause on their own — you or an agronomist must visit those patches to confirm, then treat only where needed.",
    takeaways: [
      "RGB shows visible damage; multispectral shows stress before it is visible.",
      "Regular flights at the same stage make changes easy to compare.",
      "Always ground-truth a problem patch before treating it.",
      "Monitoring can guide targeted spraying and save inputs.",
    ],
    sections: [
      {
        heading: "What monitoring can reveal",
        list: [
          "Patches of weak or uneven growth",
          "Gaps from poor germination or emergence",
          "Waterlogging or dry patches from irrigation problems",
          "Early signs of pest or disease spread",
          "Lodging after wind or rain",
        ],
      },
      {
        heading: "Types of cameras used",
        table: {
          caption: "Camera types and what they show",
          head: ["Camera", "What it shows", "Typical use"],
          rows: [
            ["RGB (normal colour)", "Visible differences, gaps, lodging", "General scouting, area measurement"],
            ["Multispectral", "Plant vigour indices such as NDVI", "Early stress detection, zoning"],
            ["Thermal", "Canopy temperature differences", "Water stress, irrigation checks"],
          ],
        },
      },
      {
        heading: "A drone map does not replace field checks",
        body: [
          "A colour difference on a map tells you where the crop is different, not why. The cause could be pests, disease, nutrient shortage, water, soil or even a planting error. Visit the marked patches, inspect the plants and, if needed, take samples or consult your KVK or agronomist before deciding on a treatment.",
        ],
      },
      {
        heading: "How to use monitoring well",
        subsections: [
          {
            heading: "Fly at key crop stages",
            body: [
              "Plan flights at emergence, active growth and before flowering, when decisions about inputs matter most. Flying at the same time of day keeps light conditions comparable.",
            ],
          },
          {
            heading: "Compare over time",
            body: [
              "One map is a snapshot; a series of maps shows whether a problem area is growing or recovering after treatment.",
            ],
          },
          {
            heading: "Link to action",
            body: [
              "Use the problem zones to plan targeted spraying, irrigation fixes or replanting, instead of treating the whole field the same way.",
            ],
          },
        ],
      },
      {
        heading: "Service availability",
        body: [
          "Crop monitoring is most useful for larger farms, FPOs, plantations, seed producers and research plots. [Confirm whether this service is available.] Call us to discuss your crop and area.",
        ],
      },
      {
        "heading": "Crop monitoring through the season",
        "table": {
          "caption": "What to look for at each stage",
          "head": [
            "Stage",
            "What monitoring can show",
            "Possible action"
          ],
          "rows": [
            [
              "Emergence",
              "Gaps, uneven germination",
              "Gap filling or replanting"
            ],
            [
              "Vegetative growth",
              "Weak patches, waterlogging, nutrient stress",
              "Targeted nutrient spray, drainage fix"
            ],
            [
              "Pre-flowering",
              "Pest or disease hotspots",
              "Spot spraying after field confirmation"
            ],
            [
              "Grain fill / fruiting",
              "Lodging, late stress",
              "Harvest planning, damage assessment"
            ]
          ]
        }
      },
      {
        "heading": "Satellite images vs drone monitoring",
        "body": [
          "Free satellite images can show broad changes across a farm, but their resolution is limited and clouds often block the view during the monsoon. Drones fly below the clouds and capture much finer detail — individual rows, small patches and even single plants.",
          "Many large farms combine both: satellite images to watch the overall picture and drone flights to examine problem areas closely. For smaller farms, a drone flight at one or two critical stages is often enough."
        ]
      },
      {
        "heading": "Making monitoring data useful",
        "list": [
          "Name each field and keep maps in a dated folder",
          "Write down what you found on the ground at each marked patch",
          "Record what treatment you applied and where",
          "Compare the next map to see if the patch improved"
        ]
      },
      {
        "heading": "Who should consider crop monitoring",
        "body": [
          "Crop monitoring gives the best return where the area is large, the crop is valuable or the cost of a missed problem is high. Plantations, orchards, seed production farms, contract farming projects and FPOs advising hundreds of members all benefit from seeing their fields from above.",
          "For a farmer with a few acres, regular field walks remain the most practical way to scout. Drone monitoring can still help after a storm, during a pest alert in the area or when part of the field is hard to reach."
        ]
      },
    ],
    faqs: [
      {
        q: "What does a crop monitoring drone do?",
        a: "It photographs the field from above so you can see areas where crop growth differs, then scout those areas on the ground.",
      },
      {
        q: "Can a drone tell me which disease my crop has?",
        a: "No. It shows where the crop is stressed. The cause must be confirmed by a field visit or an expert.",
      },
      {
        q: "What is NDVI?",
        a: "NDVI is a vegetation index calculated from multispectral images. It shows relative plant vigour across the field.",
      },
      {
        q: "How often should I fly a monitoring drone?",
        a: "At key stages such as emergence, active growth and pre-flowering, or after events like heavy rain or a pest alert.",
      },
      {
        q: "Is crop monitoring useful for small farms?",
        a: "It gives the most value on large areas. Small farmers can often scout on foot more cheaply.",
      },
      {
        q: "How do I ask about crop monitoring?",
        a: "Call or WhatsApp 8282802150 with your crop, area and what you want to find out.",
      },
      {
        "q": "Is drone monitoring better than satellite imagery?",
        "a": "Drones give much higher resolution and work under clouds; satellites cover large areas cheaply. Many farms use both for different purposes."
      },
      {
        "q": "Can the same drone monitor and spray?",
        "a": "Spraying drones carry cameras for navigation, but proper monitoring needs a dedicated mapping or multispectral camera and processing software. Usually separate drones are used."
      },
      {
        "q": "What resolution do I need for crop monitoring?",
        "a": "It depends on the question. Row-level problems need a few centimetres per pixel; broad zone mapping can use coarser resolution and fly higher."
      },
    ],
    cta: { topic: "service", label: "Ask about crop monitoring" },
    related: ["/multispectral-drone/", "/agricultural-mapping-drone/"],
    schema: "Service",
  },
  {
    slug: "agricultural-mapping-drone",
    category: "products-services",
    navLabel: "Agricultural Mapping Drone",
    summary: "Create a field map (orthomosaic) to make spraying and planning easier.",
    h1: "Agricultural Mapping Drone: Accurate Field Maps for Planning and Spraying",
    seo: {
      title: "Agricultural Mapping Drone: Field Maps & Area Measurement",
      description:
        "An agricultural mapping drone creates an accurate field map (orthomosaic) — measure area, plan spray routes, mark obstacles and plan drainage. Learn how.",
      keywords: [
        "Agricultural mapping drone",
        "drone field mapping",
        "orthomosaic map farm",
        "drone land measurement",
        "farm mapping drone India",
        "drone area survey",
      ],
    },
    intro:
      "A good map makes every farm decision easier. An agricultural mapping drone flies a grid over your land, takes hundreds of overlapping photos and stitches them into one high-resolution map. That map helps you measure area, plan spray routes and see your fields as a whole.",
    quickAnswer:
      "An agricultural mapping drone takes overlapping aerial photos in a planned grid, which software stitches into an orthomosaic — a single, scaled image of the field. It is used to measure area accurately, mark boundaries and obstacles, plan spraying routes, plan drainage and track crop progress. Accuracy improves with RTK or ground control points.",
    takeaways: [
      "An orthomosaic is a corrected, measurable map, not just a photo.",
      "Useful for spray-route planning, area measurement and drainage planning.",
      "RTK or ground control points improve positional accuracy.",
      "A mapping drone is different from a spraying drone.",
    ],
    sections: [
      {
        heading: "What mapping gives you",
        list: [
          "Accurate field area for planning inputs and service billing",
          "Boundaries, bunds, channels, trees and power lines marked on the map",
          "Spray-route planning with obstacles excluded",
          "Elevation models for drainage and levelling (with suitable processing)",
          "A record of crop progress across the season",
        ],
      },
      {
        heading: "How a mapping flight works",
        subsections: [
          {
            heading: "Planning",
            body: [
              "The pilot draws the area in the mapping app and sets the height and photo overlap. Lower height gives more detail but takes longer.",
            ],
          },
          {
            heading: "Flight",
            body: ["The drone flies automatic parallel lines and takes photos with enough overlap for stitching."],
          },
          {
            heading: "Processing",
            body: [
              "Photogrammetry software combines the images into an orthomosaic and, if needed, a digital surface or elevation model.",
            ],
          },
        ],
      },
      {
        heading: "Accuracy options",
        table: {
          caption: "General accuracy approaches",
          head: ["Method", "What it means", "When to use"],
          rows: [
            ["Standard GNSS", "Good relative accuracy", "Area estimates, general planning"],
            ["RTK / PPK drone", "High positional accuracy", "Precise measurement, repeat mapping"],
            ["Ground control points", "Surveyed markers on the ground", "Highest accuracy work"],
          ],
        },
      },
      {
        heading: "Who it is useful for",
        list: [
          "Large farms and plantations planning inputs zone by zone",
          "Orchards and vineyards planning tree-by-tree spraying",
          "FPOs and drone service providers planning routes across many fields",
          "Agri-research and seed production plots",
        ],
      },
      {
        heading: "What you receive",
        body: [
          "Deliverables usually include the stitched map and an area report, and can include an elevation map. [List your deliverables.] Map ownership and how files are shared should be agreed in advance.",
        ],
      },
      {
        "heading": "How mapping makes drone spraying better",
        "body": [
          "Spraying drones need a clean field boundary and a list of obstacles to fly safely and efficiently. A map from a mapping drone gives exactly that. The pilot can draw the spray area precisely, exclude trees, poles and houses, and plan the most efficient route before arriving at the field.",
          "For orchards and plantations, a high-resolution map can be used to identify individual trees, so the spraying drone treats tree rows rather than empty ground. This saves product and time and reduces drift into gaps."
        ]
      },
      {
        "heading": "Preparing your field for a mapping flight",
        "list": [
          "Share the location and approximate boundary in advance",
          "Clear the take-off area of people and animals",
          "Tell the pilot about tall trees, towers or power lines",
          "Place ground control markers if high accuracy is required",
          "Choose a day with steady light and low wind"
        ]
      },
      {
        "heading": "Mapping for planning and records",
        "body": [
          "A season-by-season set of maps becomes a valuable farm record. It shows how fields changed after levelling, drainage work or new plantings. FPOs can use member field maps to plan collective services, input supplies and drone routes across villages.",
          "When agreeing a mapping job, discuss file formats, map resolution and how the data will be shared and stored. You should receive files you can open and use later."
        ]
      },
      {
        "heading": "Mapping drone vs satellite and manual measurement",
        "table": {
          "caption": "Ways to measure and map a field",
          "head": [
            "Method",
            "Detail",
            "Practical notes"
          ],
          "rows": [
            [
              "Tape and manual measurement",
              "Low",
              "Slow on large or irregular plots"
            ],
            [
              "Handheld GPS walk",
              "Medium",
              "Boundary only, no image"
            ],
            [
              "Satellite image",
              "Medium to low",
              "Cloud cover, coarse resolution"
            ],
            [
              "Mapping drone",
              "High",
              "Full aerial image with measurable detail"
            ]
          ]
        }
      },
      {
        "heading": "Choosing the right map resolution",
        "body": [
          "Resolution is measured as ground sampling distance — how many centimetres of ground one pixel covers. Flying lower gives a sharper map but needs more flight time and more photos to process. For area measurement and route planning, moderate resolution is enough. For counting plants, spotting individual tree problems or detailed orchard planning, fly lower for finer detail.",
          "Discuss your purpose with the mapping team so they can balance detail, time and cost. There is no need to pay for very high resolution if your decision does not depend on it."
        ]
      },
      {
        "heading": "Rules for mapping flights",
        "body": [
          "Mapping drones follow the same rules as spraying drones. The drone must be registered on Digital Sky, the pilot must be certified, and the field must be checked on the airspace map before every flight — especially near airports, borders or sensitive installations."
        ]
      },
    ],
    faqs: [
      {
        q: "What is an orthomosaic map?",
        a: "A single, geometrically corrected image stitched from many aerial photos, so distances and areas can be measured on it.",
      },
      {
        q: "Can a mapping drone measure my field area?",
        a: "Yes. A properly processed map gives a reliable area measurement. For legal land records, follow the official survey process.",
      },
      {
        q: "Is a mapping drone the same as a spraying drone?",
        a: "No. A mapping drone carries a camera; a spraying drone carries a tank and nozzles. Some spraying drones use maps made by mapping drones for route planning.",
      },
      {
        q: "How accurate is drone mapping?",
        a: "Relative accuracy is good with standard GNSS. RTK/PPK or ground control points are used for higher positional accuracy.",
      },
      {
        q: "How long does it take to map a field?",
        a: "It depends on area, flight height and overlap. Processing adds time after the flight.",
      },
      {
        q: "How do I book field mapping?",
        a: "Call 8282802150 with your location, area and what you need the map for.",
      },
      {
        "q": "What file formats do drone maps come in?",
        "a": "Commonly GeoTIFF for maps and elevation models, KML/KMZ or shapefiles for boundaries, and PDF or images for easy viewing. Agree formats before the job."
      },
      {
        "q": "Can I use a drone map to plan crop rotation?",
        "a": "Yes. Dated maps show which fields were used for which crop and how they performed, which helps plan rotation and inputs."
      },
    ],
    cta: { topic: "service", label: "Book field mapping" },
    related: ["/field-survey-drone/", "/drone-spraying-for-orchards/"],
    schema: "Service",
  },
  {
    slug: "field-survey-drone",
    category: "products-services",
    navLabel: "Field Survey Drone",
    summary: "Surveying field boundaries, elevation and land shape.",
    h1: "Drone for Field Survey: Boundaries, Elevation and Land Levelling",
    seo: {
      title: "Field Survey Drone: Boundaries, Contours & Land Levelling",
      description:
        "Use a drone for field survey — measure boundaries, map slopes and contours, plan drainage and land levelling. What it can and cannot replace explained.",
      keywords: [
        "Field survey drone",
        "drone land survey agriculture",
        "contour mapping drone",
        "drone elevation survey",
        "land levelling survey drone",
        "farm boundary survey",
      ],
    },
    intro:
      "Before planting an orchard, laying drip lines or levelling land, you need to know the shape of the ground. A field survey drone captures that shape quickly — boundaries, slopes, high and low spots — and turns it into maps and models you can use for planning.",
    quickAnswer:
      "A field survey drone collects aerial images (or LiDAR data on special models) to produce boundaries, elevation models and contour maps of farmland. It helps plan drainage, land levelling, irrigation layout and orchard planting. For legal land records and disputes, the official survey and revenue process still applies.",
    takeaways: [
      "Elevation models show slopes and low spots that cause waterlogging.",
      "Useful before drip/irrigation layout, levelling and orchard planting.",
      "Accuracy depends on equipment, RTK/GCPs and processing.",
      "Drone surveys do not replace official land records.",
    ],
    sections: [
      {
        heading: "Uses of a drone field survey",
        list: [
          "Measuring field and plot area",
          "Mapping slopes, high spots and low spots",
          "Planning drainage channels and bunds",
          "Planning land levelling work",
          "Designing drip and sprinkler layouts",
          "Laying out orchard and plantation rows",
        ],
      },
      {
        heading: "Survey outputs explained",
        table: {
          caption: "Common survey deliverables",
          head: ["Output", "What it is", "Used for"],
          rows: [
            ["Orthomosaic", "Scaled aerial map", "Area, boundaries, layout"],
            ["DSM / DTM", "Surface or terrain elevation model", "Slopes, levelling"],
            ["Contour map", "Lines of equal height", "Drainage, bunds, irrigation"],
            ["Area report", "Measured areas of plots", "Planning and records"],
          ],
        },
      },
      {
        heading: "Photogrammetry vs LiDAR",
        subsections: [
          {
            heading: "Photogrammetry",
            body: [
              "Uses overlapping photos to build maps and elevation models. It is cost-effective and works well on open fields with visible ground.",
            ],
          },
          {
            heading: "LiDAR",
            body: [
              "Uses laser pulses and can measure ground under some vegetation. It is more expensive and generally used where higher precision under canopy is needed.",
            ],
          },
        ],
      },
      {
        heading: "Important limits",
        body: [
          "A drone survey is a planning tool. It does not replace official land records, demarcation by the revenue department or legal survey processes. For boundary disputes, follow the official procedure.",
          "Survey accuracy depends on the drone, positioning method (RTK/PPK or ground control points), flight planning and processing. Ask what accuracy you can expect for your purpose.",
        ],
      },
      {
        heading: "Deliverables and next steps",
        body: [
          "[List your deliverables — e.g. map, elevation map, area report.] Share your location, area and purpose, and we will explain what is possible and how long it takes.",
        ],
      },
      {
        "heading": "Drone survey vs traditional ground survey",
        "table": {
          "caption": "General comparison",
          "head": [
            "Point",
            "Drone survey",
            "Ground survey (total station / GPS)"
          ],
          "rows": [
            [
              "Speed on large areas",
              "Fast",
              "Slower"
            ],
            [
              "Data density",
              "Millions of points, full map",
              "Selected points"
            ],
            [
              "Visual record",
              "Full aerial image",
              "Limited"
            ],
            [
              "Precision on points",
              "Good with RTK/GCPs",
              "Very high"
            ],
            [
              "Legal record",
              "Not a legal document",
              "Used in official surveys"
            ]
          ]
        }
      },
      {
        "heading": "Planning land levelling and drainage with a survey",
        "body": [
          "Uneven fields waste water and fertiliser: high spots stay dry while low spots get waterlogged. A drone elevation model shows exactly where the high and low areas are and how much soil needs to move. Contractors can use this information to plan laser-levelling work more efficiently.",
          "For drainage, contour maps show the natural slope of the land, so channels and outlets can be placed where water will actually flow. This is especially useful for paddy fields, orchards on slopes and fields that flood every monsoon."
        ]
      },
      {
        "heading": "Preparing for a survey flight",
        "list": [
          "Share the location, boundary and purpose of the survey",
          "Mark any existing survey stones or reference points",
          "Clear the field of loose materials and animals if possible",
          "Plan the flight before the crop canopy hides the ground, when elevation data matters"
        ]
      },
      {
        "heading": "Who uses drone field surveys",
        "list": [
          "Farmers planning new orchards, vineyards or plantations",
          "Land levelling and earthwork contractors",
          "Drip and sprinkler irrigation companies designing layouts",
          "FPOs and agri-businesses planning collection centres and farm roads",
          "Researchers and agricultural institutions"
        ],
        "body": [
          "Each of these users needs slightly different outputs and accuracy. Tell the survey team exactly what decision the survey will support so the flight and processing can be planned accordingly."
        ]
      },
      {
        "heading": "Questions to ask before a field survey",
        "list": [
          "What accuracy can you achieve for my purpose, and how?",
          "Will you use RTK/PPK or ground control points?",
          "Which outputs will I get, and in which file formats?",
          "How long will processing take after the flight?",
          "Can the survey be repeated later for comparison?"
        ],
        "body": [
          "Clear answers to these questions make sure the survey matches the decision you are making — whether that is levelling, drainage, irrigation or planting."
        ]
      },
      {
        "heading": "Permissions before a survey flight",
        "body": [
          "Survey flights also need a registered drone and a check of the Digital Sky airspace map. Fields close to airports, defence areas or other sensitive sites may fall in yellow or red zones that require permission before the drone can fly."
        ]
      },
    ],
    faqs: [
      {
        q: "What is a drone field survey used for?",
        a: "Measuring area, mapping slopes and elevation, planning drainage, levelling, irrigation layout and orchard planting.",
      },
      {
        q: "Can a drone survey settle a land boundary dispute?",
        a: "No. For legal boundaries and disputes, the official revenue survey process applies.",
      },
      {
        q: "How accurate is a drone survey?",
        a: "It depends on the equipment, positioning method and processing. RTK/PPK and ground control points improve accuracy.",
      },
      {
        q: "What is a contour map?",
        a: "A map with lines joining points of equal height. It helps plan drainage, bunds and irrigation.",
      },
      {
        q: "Do I need a survey before planting an orchard?",
        a: "It is very helpful for laying out rows, drainage and irrigation, especially on uneven land.",
      },
      {
        q: "How do I book a field survey?",
        a: "Call 8282802150 with your location, area and purpose of the survey.",
      },
      {
        "q": "When is the best time to do a drone land survey?",
        "a": "When the ground is visible — after harvest or before sowing — so the elevation model represents the soil surface rather than the crop canopy."
      },
      {
        "q": "Can a drone survey help with irrigation design?",
        "a": "Yes. Elevation and contour data help irrigation designers place mains, laterals and valves to match the land's slope."
      },
      {
        "q": "What is the difference between a DSM and a DTM?",
        "a": "A DSM (digital surface model) shows the top of everything, including crops and trees. A DTM (digital terrain model) shows the bare ground surface, which is what levelling and drainage planning need."
      },
      {
        "q": "Is a drone survey cheaper than a ground survey?",
        "a": "On large or difficult areas it is often faster and more cost-effective, but cost depends on area, accuracy required and processing. Ask for a quote for your specific job."
      },
    ],
    cta: { topic: "service", label: "Book a field survey" },
    related: ["/agricultural-mapping-drone/"],
    schema: "Service",
  },
  {
    slug: "multispectral-drone",
    category: "products-services",
    navLabel: "Multispectral Drone",
    summary: "Analysing crop health using light the eye cannot see.",
    h1: "Multispectral Drone for Agriculture: NDVI Maps and Crop Health Analysis",
    seo: {
      title: "Multispectral Drone for Agriculture: NDVI Maps Explained",
      description:
        "How a multispectral drone measures crop health with NDVI and other indices, what the colours mean, who should use it and how to act on the maps.",
      keywords: [
        "Multispectral drone",
        "NDVI drone",
        "multispectral camera agriculture",
        "crop health map",
        "NDRE drone",
        "variable rate application",
      ],
    },
    intro:
      "Healthy plants reflect light differently from stressed plants — especially in wavelengths our eyes cannot see. A multispectral drone captures those wavelengths and turns them into crop health maps. This helps you spot stress early and treat only the areas that need it.",
    quickAnswer:
      "A multispectral drone has a camera that records specific light bands — usually green, red, red-edge and near-infrared. Software combines them into vegetation indices such as NDVI or NDRE, shown as colour maps of relative crop vigour. These maps highlight stressed zones early, but the cause must be confirmed in the field before treatment.",
    takeaways: [
      "Near-infrared reflection is a strong signal of healthy leaf structure.",
      "NDVI works well for most crops; NDRE helps in dense, mature canopies.",
      "Calibration with a reflectance panel improves map consistency.",
      "Maps can guide zone-wise or variable-rate application.",
    ],
    sections: [
      {
        heading: "How multispectral imaging works",
        body: [
          "Green leaves absorb red light for photosynthesis and strongly reflect near-infrared light. When a plant is stressed, this pattern changes — often before the leaf looks different to the eye. A multispectral camera records each band separately so the change can be measured.",
        ],
      },
      {
        heading: "What an NDVI map shows",
        table: {
          caption: "Common vegetation indices",
          head: ["Index", "Bands used", "Best for"],
          rows: [
            ["NDVI", "Red + near-infrared", "General vigour, mid-season comparison"],
            ["NDRE", "Red-edge + near-infrared", "Dense or mature canopies, nitrogen status"],
            ["GNDVI", "Green + near-infrared", "Chlorophyll variation"],
          ],
        },
        body: [
          "On a typical NDVI map, greener colours show stronger vigour and red or yellow show weaker growth. The scale is relative — compare zones within the same field and date, not across very different crops.",
        ],
      },
      {
        heading: "Getting reliable maps",
        list: [
          "Calibrate with a reflectance panel before each flight",
          "Fly around midday in steady light, avoiding patchy clouds",
          "Use the same height and settings for repeat flights",
          "Process with software that handles radiometric correction",
        ],
      },
      {
        heading: "Who it is useful for",
        subsections: [
          {
            heading: "Large farms and plantations",
            body: ["Zone-wise management across large areas where walking every row is impractical."],
          },
          {
            heading: "Vineyards and orchards",
            body: ["Finding weak vines or trees early and tracking recovery after treatment."],
          },
          {
            heading: "Research, seed production and FPO advisory",
            body: ["Comparing plots and treatments, and advising members based on maps."],
          },
        ],
      },
      {
        heading: "From map to action",
        body: [
          "Mark the weak zones, visit them, confirm the cause and then decide the treatment. With compatible spraying drones, zone maps can be used for variable-rate application — more where it is needed, less where it is not — saving inputs and reducing unnecessary chemical use.",
        ],
      },
      {
        "heading": "Mistakes to avoid when reading NDVI maps",
        "list": [
          "Comparing maps from different dates without calibration",
          "Assuming red zones are always disease — they can be soil, water or planting problems",
          "Reading bare soil between young plants as crop stress",
          "Treating a whole zone without ground-truthing first",
          "Comparing NDVI values across different crops as if they were the same scale"
        ]
      },
      {
        "heading": "Multispectral drone vs RGB drone",
        "body": [
          "An RGB drone captures normal colour images that are excellent for area measurement, gap detection and visible damage. A multispectral drone adds near-infrared and red-edge bands that reveal stress earlier and allow quantitative comparison across the field.",
          "If your goal is mostly mapping and visible scouting, an RGB drone may be enough. If you need early detection, zone management or research-grade comparisons, a multispectral system is worth considering. Many service providers offer both, so you can start with a one-time survey before investing."
        ]
      },
      {
        "heading": "Building a zone management plan",
        "body": [
          "After two or three seasons of maps, patterns often appear — some zones are consistently weaker because of soil type, drainage or history. Use these zones to adjust seed rate, fertiliser and irrigation. Combined with soil tests, a multispectral record becomes the base for precision agriculture on your farm."
        ]
      },
      {
        "heading": "Multispectral survey workflow",
        "list": [
          "Define the question — early stress, nitrogen status, zone mapping or trial comparison",
          "Choose timing by crop stage and plan repeat flights",
          "Calibrate, fly at a consistent height and time of day",
          "Process with radiometric correction and generate index maps",
          "Ground-truth the zones and record findings",
          "Plan treatments and track response in the next flight"
        ]
      },
      {
        "heading": "Limits of multispectral data",
        "body": [
          "Multispectral maps are powerful but not perfect. Cloud shadows, wet leaves, different sun angles and bare soil can all affect index values. Young crops with lots of visible soil can look 'stressed' simply because there is less leaf area. Interpreting maps well needs field knowledge, consistent flying and honest ground-truthing.",
          "Treat a multispectral map as a guide to where to look and how areas compare, not as a final diagnosis."
        ]
      },
      {
        "heading": "Flying a multispectral survey legally",
        "body": [
          "A multispectral drone is still a drone under the rules. Before a survey, confirm the drone is registered, the pilot is certified and the field lies in a permitted zone on the Digital Sky airspace map."
        ]
      },
    ],
    faqs: [
      {
        q: "What is a multispectral drone?",
        a: "A drone with a camera that records several specific light bands, including near-infrared, to calculate crop health indices.",
      },
      {
        q: "What does NDVI mean?",
        a: "Normalised Difference Vegetation Index — a number calculated from red and near-infrared light that shows relative plant vigour.",
      },
      {
        q: "Can NDVI detect disease?",
        a: "It shows stress, not the specific cause. A field check is needed to identify disease, pests, nutrients or water issues.",
      },
      {
        q: "Is a multispectral drone worth it for small farmers?",
        a: "Usually it is most valuable on large areas. Small farmers can benefit through FPO or service-provider programmes.",
      },
      {
        q: "What is the difference between NDVI and NDRE?",
        a: "NDRE uses the red-edge band and stays sensitive in dense, mature canopies where NDVI can saturate.",
      },
      {
        q: "How do I ask about a multispectral drone or survey?",
        a: "Call 8282802150 with your crop, area and what you want to learn from the maps.",
      },
      {
        "q": "When is the best time to fly a multispectral drone?",
        "a": "Around midday in steady sunlight or consistent overcast, at crop stages where decisions matter, such as active growth or before flowering."
      },
      {
        "q": "Do I need special software for multispectral maps?",
        "a": "Yes. Photogrammetry software with radiometric calibration is used to stitch the bands and calculate indices such as NDVI and NDRE. Service providers usually handle this for you."
      },
    ],
    cta: { topic: "price", label: "Ask for a price" },
    related: ["/crop-monitoring-drone/", "/drone-spraying-for-grapes/"],
    schema: "Service",
  },
];
