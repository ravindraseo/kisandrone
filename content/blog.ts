/**
 * Blog articles (local content data).
 * To add an article, copy an entry and give it a unique `slug`. The article
 * page and sitemap update automatically. Each article needs 900+ words
 * (summary + body + FAQs) and at least 5 FAQs — the build checks this.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  /** SEO <title>; falls back to title when empty */
  seoTitle?: string;
  /** Meta description and card summary (~150–160 characters) */
  summary: string;
  /** Direct answer shown at the top (answer-engine friendly) */
  quickAnswer: string;
  category: string;
  published: string; // ISO date
  updated?: string; // ISO date
  readingMinutes: number;
  keywords: string[];
  /** FAQs shown at the end of the article (at least 5) */
  faqs: { q: string; a: string }[];
  /** Internal links shown under the article */
  related: { href: string; label: string }[];
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "how-a-kisan-drone-works",
    title: "How Does a Kisan Drone Work? A Simple Guide for First-Time Farmers",
    seoTitle: "How Does a Kisan Drone Work? Simple Guide for Farmers",
    summary:
      "How a kisan drone works step by step — parts, flight planning, spraying, safety and rules — in plain language for farmers trying drones for the first time.",
    quickAnswer:
      "A kisan drone works by flying a GPS-planned route a few metres above the crop while a pump sends diluted spray from its tank to nozzles under the arms. The rotors' downwash pushes droplets into the canopy. A certified pilot plans the field in an app, sets height, speed and spray rate, and monitors the flight from the field edge.",
    category: "Getting started",
    published: "2026-11-01",
    updated: "2026-11-05",
    readingMinutes: 7,
    keywords: ["Kisan drone", "how agriculture drone works", "drone for farming", "drone spraying process", "spray drone parts"],
    related: [
      { href: "/kisan-drone/", label: "Complete kisan drone guide" },
      { href: "/drone-spraying-service/", label: "Drone spraying service" },
      { href: "/agriculture-spraying-drone/", label: "Agriculture spraying drone" },
    ],
    faqs: [
      {
        q: "How does a kisan drone fly over a field?",
        a: "The operator marks the field boundary in the app, then the drone flies in set rows using GPS. The operator monitors it the whole time and can take manual control when needed.",
      },
      {
        q: "How high above the crop does the drone fly?",
        a: "The operator sets the height based on the crop, drone model and product — usually a few metres above the canopy — so spraying is even and drift stays low.",
      },
      {
        q: "How much solution can be sprayed in one go?",
        a: "It depends on the drone's tank class, such as 10, 16 or 20 litres. When the tank is empty, the drone returns to be refilled and resumes where it stopped.",
      },
      {
        q: "Who can fly a kisan drone?",
        a: "A person with a Remote Pilot Certificate from a DGCA-authorised institute, flying a registered drone of a certified type.",
      },
      {
        q: "Can small farmers use kisan drones too?",
        a: "Yes, by hiring a drone spraying service. There is no need to buy a drone.",
      },
      {
        q: "What happens if the battery runs low mid-flight?",
        a: "The drone warns the pilot and returns to the take-off point automatically. After a battery swap, it continues from the point where it stopped.",
      },
      {
        q: "Does the drone work at night?",
        a: "Agricultural spraying is normally done in daylight for safety and visibility. Follow the rules and the operator's safety procedures.",
      },
    ],
    body: [
      {
        type: "p",
        text: "If you have seen a drone spraying a neighbour's field and wondered how it actually works, this guide is for you. A kisan drone is a remotely piloted aircraft built for farm work. It is used most for spraying, but it also helps with crop monitoring and field mapping. Below, we explain the parts, the steps of a spraying job and what you should know as a first-time user.",
      },
      { type: "h2", text: "The main parts of a kisan drone" },
      {
        type: "ul",
        items: [
          "Frame and arms: usually four, six or eight arms, often foldable for transport",
          "Motors and propellers: create lift and the downwash that pushes spray into the crop",
          "Tank: holds the diluted spray mix — common classes are 10, 16 and 20 litres",
          "Pump and nozzles: send the liquid out at a controlled rate and droplet size",
          "Flight controller and GPS: keep the drone stable and on its planned route",
          "Sensors: radar or cameras for terrain following and obstacle sensing",
          "Batteries: smart lithium batteries that power each flight",
          "Remote controller and app: used by the pilot to plan and monitor the job",
        ],
      },
      { type: "h2", text: "Three main types of agriculture drones" },
      {
        type: "ul",
        items: [
          "Spraying drone: with a tank, pump and nozzles that spray the solution onto the crop",
          "Mapping drone: takes photos with a camera to create an accurate field map",
          "Monitoring drone: creates crop health maps with a multispectral or RGB camera",
        ],
      },
      { type: "h2", text: "How a spraying job works, step by step" },
      { type: "h3", text: "1. Field inspection" },
      {
        type: "p",
        text: "The pilot first walks the edge of the field to check its size and shape, power lines, trees, houses, water bodies and a safe spot for take-off and landing. They also check the airspace zone on the Digital Sky map.",
      },
      { type: "h3", text: "2. Mission planning" },
      {
        type: "p",
        text: "The field boundary is marked in the app — by walking it, flying it or using a map. The pilot sets flight height, speed, swath width and spray rate according to the crop and product. Obstacles are marked so the drone avoids them.",
      },
      { type: "h3", text: "3. Mixing and filling" },
      {
        type: "p",
        text: "The approved product is mixed with clean water according to the label, wearing gloves, a mask and goggles. Because drones use much less water per acre than knapsack sprayers, the mix is more concentrated and must be measured accurately.",
      },
      { type: "h3", text: "4. Flight and spraying" },
      {
        type: "p",
        text: "The drone takes off and flies parallel rows over the field. The pump sends liquid to the nozzles, and the rotor downwash pushes droplets into the canopy. The pilot watches the drone and the app the whole time, ready to pause if wind rises or someone enters the field.",
      },
      { type: "h3", text: "5. Refill and battery swap" },
      {
        type: "p",
        text: "When the tank empties or the battery runs low, the drone returns automatically. The helper refills the tank and swaps the battery, and the drone resumes exactly where it stopped.",
      },
      { type: "h3", text: "6. Records and cleaning" },
      {
        type: "p",
        text: "After the job, the sprayed area and details are recorded. The tank, pump and nozzles are flushed with clean water away from water sources, and empty containers are disposed of safely.",
      },
      {
        type: "note",
        text: "Results depend on the crop, product, weather and the operator's skill. Use only products approved for drone spraying.",
      },
      { type: "h2", text: "What makes a good spray job" },
      {
        type: "ul",
        items: [
          "Calm weather — early morning or late afternoon is often best",
          "Correct height and speed for the crop",
          "Suitable droplet size — finer for coverage, coarser to reduce drift",
          "Proper overlap between rows so no strips are missed",
          "Neighbours informed and buffer zones kept near sensitive areas",
        ],
      },
      { type: "h2", text: "Rules in simple words" },
      {
        type: "p",
        text: "In India, the drone must be of a DGCA type-certified model and registered on Digital Sky. The pilot needs a Remote Pilot Certificate from a DGCA-authorised training organisation. Spraying should follow the government SOP for drone application of pesticides and nutrients. If you hire a service, the operator takes care of these requirements.",
      },
      { type: "h2", text: "Buy or hire a service?" },
      {
        type: "p",
        text: "For most small and medium farmers, hiring a drone spraying service is the easiest way to start — you pay only for the area sprayed. For FPOs, Custom Hiring Centres or entrepreneurs starting a drone service, buying a drone can make sense when there is enough work through the season.",
      },
      {
        type: "p",
        text: "Want to see a drone at work on your own field? Call or WhatsApp 8282802150 with your crop, area and location.",
      },
    ],
  },
  {
    slug: "how-agriculture-drone-prices-are-set",
    title: "How Are Agriculture Drone Prices Set? What to Know Before You Buy",
    seoTitle: "How Agriculture Drone Prices Are Set: Buyer's Guide",
    summary:
      "Why kisan drone prices vary, what really drives the cost, hidden running costs and the exact questions to ask so you can compare drone quotes fairly.",
    quickAnswer:
      "Agriculture drone prices are set by the tank class and payload, number of battery sets and charging equipment, type certification, navigation and safety features, warranty, spare parts and service network, and training included. Two drones with similar base prices can have very different total costs, so always compare itemised packages and add yearly running costs.",
    category: "Buying guide",
    published: "2026-10-25",
    updated: "2026-11-05",
    readingMinutes: 7,
    keywords: ["Agriculture drone price in India", "Kisan drone price", "drone cost factors", "agriculture drone quote", "drone total cost"],
    related: [
      { href: "/agriculture-drone-price-in-india/", label: "Kisan drone price guide" },
      { href: "/buying-guide/", label: "Agriculture drone buying guide" },
      { href: "/agriculture-drone-battery-price/", label: "Drone battery price and care" },
    ],
    faqs: [
      {
        q: "Is the cheapest drone the best deal?",
        a: "Not necessarily. Along with a low price, check the battery sets, certification, warranty, parts and service. A drone that breaks down in season can cost more than you saved.",
      },
      {
        q: "What should a quote include?",
        a: "The drone model, number of battery sets, charger, accessories, warranty terms, training, delivery and the total price.",
      },
      {
        q: "How much do battery costs matter?",
        a: "A lot. Batteries need replacing over time and continuous work needs several sets, so always include them in the total cost.",
      },
      {
        q: "Is the price the same everywhere?",
        a: "No. Prices can vary with the package, accessories, delivery and service terms, so compare complete packages.",
      },
      {
        q: "Does a subsidy change the drone's price?",
        a: "A subsidy reduces what an eligible buyer pays, but only under official scheme rules. Confirm eligibility before buying.",
      },
      {
        q: "How do I get a written quote?",
        a: "Call or WhatsApp +91 82828 02150 with your crop, area, location and requirements, or email enquiry@kisandrone.co.in.",
      },
    ],
    body: [
      {
        type: "p",
        text: "The most common question from farmers is, “How much does a drone cost?” But comparing a single number can be misleading, because different packages include very different things. One quote may include four battery sets, a generator and training; another may include one battery and nothing else. This article explains what goes into an agriculture drone's price so you can compare quotes on fair terms.",
      },
      { type: "h2", text: "What the price depends on" },
      { type: "h3", text: "Tank capacity and payload" },
      {
        type: "p",
        text: "Larger tanks need bigger frames, stronger motors and bigger batteries. A 20 litre class drone usually costs more to buy and run than a 10 litre drone, but covers more area per flight.",
      },
      { type: "h3", text: "Battery sets and charging" },
      {
        type: "p",
        text: "Batteries are a major part of the cost. For continuous work you need several sets, a fast charger and often a generator. A package's battery count changes its real value dramatically.",
      },
      { type: "h3", text: "Certification and documents" },
      {
        type: "p",
        text: "A DGCA type certificate and support for Digital Sky registration are essential. Certified models carry development and testing costs, but an uncertified drone is a legal and financial risk.",
      },
      { type: "h3", text: "Features" },
      {
        type: "ul",
        items: [
          "Terrain following for uneven fields",
          "Obstacle sensing and automatic return-to-home",
          "RTK positioning for precision routes",
          "Spray system quality — flow control and nozzle type",
          "Spreader attachment for granules or seeds",
        ],
      },
      { type: "h3", text: "Warranty, spares, service and training" },
      {
        type: "p",
        text: "A longer warranty, local spare parts, a nearby service centre and included pilot training add value that is easy to miss when you only compare base prices.",
      },
      { type: "h2", text: "Hidden running costs" },
      {
        type: "ul",
        items: [
          "Battery replacements as cycles wear them out",
          "Propellers, nozzles, filters and pump parts",
          "Insurance",
          "Pilot salary or your own time",
          "Fuel for the generator and vehicle",
          "Repairs after accidents or hard landings",
        ],
      },
      { type: "h2", text: "Questions to ask when getting a quote" },
      {
        type: "ul",
        items: [
          "What exactly is included in the price?",
          "How many battery sets, and what is the price of an extra set?",
          "Who will handle registration and paperwork?",
          "How quickly will repairs be done if it breaks down in season?",
          "Is training included, and where?",
          "Could I be eligible for any scheme? (Confirm with official sources)",
        ],
      },
      { type: "h2", text: "How to compare two quotes fairly" },
      {
        type: "p",
        text: "Write both quotes side by side, item by item. Add the cost of anything missing from one quote — such as extra batteries or a generator — to make them equal. Then estimate yearly running costs and divide the total over three seasons by the acres you expect to spray. The result, cost per acre, is the fairest comparison.",
      },
      {
        type: "note",
        text: "We do not publish a fixed price on the website, because the right price depends on your needs and changes over time.",
      },
      {"type":"h2","text":"Example: comparing two packages"},
      {"type":"p","text":"Imagine Quote A offers a drone with one battery set, no charger upgrade and basic training. Quote B offers the same class of drone with three battery sets, a fast charger, a generator recommendation, field training and a longer warranty. Quote A looks cheaper, but to do real field work you would need to buy two more battery sets and a better charger — and you would carry more risk if something breaks. Once you add the missing items, the gap often shrinks or reverses."},
      {"type":"h2","text":"Price, value and support"},
      {"type":"p","text":"The most expensive drone is not automatically the best, and the cheapest is rarely the best value. What you are buying is a working season: reliable flights, quick repairs, available spares and a pilot who knows how to use the drone well. Ask other owners in your district how their drone performed after one or two seasons. Their experience tells you more about real value than any price list."},
      {"type":"ul","items":["Ask for references from customers near you","Check how long repairs took in peak season","Ask if a standby drone is offered during repairs","Confirm spare parts are stocked in your state"]},
      { type: "h2", text: "When hiring beats buying" },
      {
        type: "p",
        text: "If your total area is small or you spray only a few times a season, the cost per acre of owning a drone may be higher than simply hiring a drone spraying service. Do the maths honestly before investing. Call 8282802150 for a written quote or to compare service and ownership costs for your situation.",
      },
    ],
  },
  {
    slug: "drone-spraying-vs-manual-spraying",
    title: "Drone Spraying vs Manual Spraying: Which Should You Choose?",
    seoTitle: "Drone Spraying vs Manual Spraying: Honest Comparison",
    summary:
      "Drone vs knapsack and tractor spraying compared — speed, cost, coverage, drift and safety — and when each method is the better choice for your field.",
    quickAnswer:
      "Drone spraying is usually faster on large, flooded or tall crops, uses much less water per acre and keeps the operator out of the spray. Manual or tractor spraying can be better on very small or obstructed plots, with products not approved for drones, and where very thorough coverage of dense canopies is needed. The right choice depends on the field, crop, product and cost.",
    category: "Spraying",
    published: "2026-10-18",
    updated: "2026-11-05",
    readingMinutes: 7,
    keywords: ["Drone spraying vs manual spraying", "drone spraying service for farmers", "crop spraying drone", "knapsack sprayer vs drone", "drone spraying advantages"],
    related: [
      { href: "/drone-spraying-service/", label: "Drone spraying service" },
      { href: "/crops/", label: "Drone services by crop" },
      { href: "/drone-for-farming/", label: "Benefits of farming drones" },
    ],
    faqs: [
      {
        q: "Is drone spraying faster than manual spraying?",
        a: "On large or flooded fields, drone work is generally much quicker, but the real speed depends on the field layout, refills and weather.",
      },
      {
        q: "Which method is cheaper?",
        a: "It depends on the area, labour costs, field conditions and service rates. Work out both for your own field and compare.",
      },
      {
        q: "Is a drone useful on small fields too?",
        a: "Often yes, especially with group bookings, but on very small plots surrounded by trees and wires, traditional methods may be better.",
      },
      {
        q: "Which method has more drift?",
        a: "Drift can happen with both. With a drone, drift is reduced by the right height, droplet size and spraying in low wind.",
      },
      {
        q: "Is the operator safer with a drone?",
        a: "The operator stays outside the field, so direct exposure is reduced. PPE is still essential while mixing and filling.",
      },
      {
        q: "Does drone spraying cover the lower leaves?",
        a: "Downwash helps push spray into the canopy, but very dense crops may need slower flight and correct settings to reach lower leaves.",
      },
      {"q":"Can I use a drone for herbicide spraying?","a":"Only with herbicides approved for drone application, coarser droplets, low height and calm weather, keeping buffers from sensitive crops."},
    ],
    body: [
      {
        type: "p",
        text: "Drone spraying is growing fast in India, but it does not replace traditional methods everywhere. Knapsack sprayers, power sprayers and tractor-mounted booms all still have a place. This comparison looks honestly at both sides so you can choose the right method for each field and each spray.",
      },
      { type: "h2", text: "Speed and labour" },
      {
        type: "p",
        text: "A drone covers a field far faster than a person with a knapsack sprayer, and needs only a pilot and a helper. This matters most during pest outbreaks and peak seasons, when labour is scarce and every day counts. Tractor sprayers are also fast on dry, open fields, but cannot enter flooded paddy or tall crops.",
      },
      { type: "h2", text: "Water use" },
      {
        type: "p",
        text: "Drones use much less water per acre than conventional spraying. This is a real advantage where water must be carried to the field. The product dose per acre stays the same as on the label — only the dilution changes.",
      },
      { type: "h2", text: "Coverage and effectiveness" },
      {
        type: "p",
        text: "With correct height, speed, droplet size and overlap, drones give even coverage, and downwash pushes droplets into the canopy. In very dense crops or orchards, ground sprayers may still give more thorough coverage of inner leaves. Results also depend on the product, timing and weather with any method.",
      },
      { type: "h2", text: "Safety" },
      {
        type: "p",
        text: "With a drone, the operator stands at the field edge instead of walking through the spray cloud, which reduces exposure significantly. Mixing and filling still need PPE. Drones also bring their own safety needs — keeping people away from the flight area and avoiding power lines.",
      },
      { type: "h2", text: "Where a drone can help most" },
      {
        type: "ul",
        items: [
          "Flooded paddy and tall crops such as sugarcane and cotton",
          "When many fields need spraying in a short time",
          "When labour is short or you want to reduce direct contact with chemicals",
          "Hilly or uneven fields where ground equipment struggles",
          "Fields that are wet after irrigation or rain",
        ],
      },
      { type: "h2", text: "Where another method may be better" },
      {
        type: "ul",
        items: [
          "Very small plots or plots surrounded by trees and wires",
          "Products that are not approved for drone application",
          "Strong wind, or very close to homes, schools and water sources",
          "Polyhouses, net houses and covered structures",
          "Dense canopies needing very thorough inner coverage",
        ],
      },
      { type: "h2", text: "Cost: how to compare" },
      {
        type: "p",
        text: "For manual spraying, add labour wages, sprayer hire or depreciation, water transport and the time taken. For drone spraying, use the service rate per acre (or your ownership cost per acre). Compare for your own field size and number of sprays. Grouping neighbouring fields often makes drone spraying more economical.",
      },
      {"type":"h2","text":"Side-by-side summary"},
      {"type":"ul","items":["Speed on large fields: drone and tractor fast, knapsack slow","Flooded or tall crops: drone best","Very small, obstructed plots: knapsack often best","Water per acre: drone lowest","Operator exposure: drone lowest","Skill needed: drone needs a certified pilot"]},
      {"type":"h2","text":"Questions to ask before switching to drones"},
      {"type":"ul","items":["Is the product I use approved for drone application on my crop?","Is a certified drone service available nearby at the right time?","Are my fields open enough for safe flight?","Can I group bookings with neighbours to lower cost?"]},
      {"type":"h2","text":"A practical approach: use both"},
      {"type":"p","text":"Many farmers now combine methods. They use drones for urgent sprays, for flooded or tall crops and for large blocks, and keep a knapsack or power sprayer for spot treatments, small corners and crops where drone-approved products are not available. This mix gives the speed of drones without losing the flexibility of traditional sprayers."},
      {"type":"p","text":"Start by trying a drone spraying service on one field and compare it with your usual method — time taken, labour, water used and how the crop responds. Your own field results are the best guide for future decisions."},
      { type: "h2", text: "Safety matters with every method" },
      {
        type: "p",
        text: "Whatever the method, follow the label, wear PPE and inform your neighbours. For drones, the operator must hold a certificate and the drone must be registered. Keep a record of every spray.",
      },
      {
        type: "p",
        text: "Not sure which method suits your field? Call 8282802150 with your crop, area and location for honest advice.",
      },
    ],
  },
  {
    slug: "how-to-check-drone-subsidy-eligibility",
    title: "How to Check Drone Subsidy Eligibility: 3 Simple Steps",
    seoTitle: "Check Drone Subsidy Eligibility in 3 Simple Steps",
    summary:
      "Check agriculture drone subsidy eligibility the right way: identify your category, verify with official sources and get it in writing. Avoid rumours and fraud.",
    quickAnswer:
      "To check agriculture drone subsidy eligibility, first identify your beneficiary category (individual farmer, FPO, cooperative, CHC, institution, entrepreneur or women's SHG), then read the current guidelines on your state agriculture department's portal or ask the district agriculture office or KVK, and finally get the eligibility, documents, dates and approved suppliers confirmed in writing before buying.",
    category: "Schemes",
    published: "2026-10-10",
    updated: "2026-11-05",
    readingMinutes: 6,
    keywords: ["Kisan drone subsidy", "Agriculture drone subsidy in India", "drone subsidy eligibility", "how to apply drone subsidy", "drone subsidy documents"],
    related: [
      { href: "/kisan-drone-subsidy/", label: "Kisan drone subsidy" },
      { href: "/government-subsidy-for-farming-drones/", label: "Subsidy application process" },
      { href: "/drone-didi-scheme/", label: "Namo Drone Didi scheme" },
    ],
    faqs: [
      {
        q: "Who decides drone subsidy eligibility?",
        a: "The relevant government department, according to the scheme guidelines. No private company or dealer can decide eligibility.",
      },
      {
        q: "Which documents are usually needed to apply?",
        a: "Proof of identity and address, bank details, land records or organisation registration, and a category certificate (if applicable). The final list varies by scheme.",
      },
      {
        q: "Is the application online?",
        a: "Many states accept online applications through a portal, and some also at the office. Ask your state agriculture department.",
      },
      {
        q: "How do I avoid subsidy fraud?",
        a: "Do not pay anyone who promises a “guaranteed subsidy”, and confirm all information only with the official website or office.",
      },
      {
        q: "Is there a drone scheme for women's self-help groups?",
        a: "Yes, initiatives such as Namo Drone Didi are for selected women's SHGs. Selection and conditions are set by the implementing agencies.",
      },
      {
        q: "Can I check eligibility before choosing a drone?",
        a: "Yes, and you should. Eligibility may also determine which models or suppliers you are allowed to use.",
      },
      {"q":"Where can I verify a drone subsidy message I received on WhatsApp?","a":"Check with your district agriculture office, KVK or the state agriculture department's official website. Do not act on forwarded messages without verification."},
    ],
    body: [
      {
        type: "p",
        text: "A lot of information about drone subsidies spreads by word of mouth and social media. Some of it is outdated, some applies only to another state and some is simply wrong. Rules change by state and over time, so it is important to know how to get accurate information before you spend money. Here are three simple steps.",
      },
      { type: "h2", text: "Step 1: Identify your category" },
      {
        type: "p",
        text: "Drone support is usually designed for specific groups. Knowing which group you belong to tells you which part of the guidelines to read.",
      },
      {
        type: "ul",
        items: [
          "Individual farmers (some categories, where included)",
          "Farmer Producer Organisations (FPOs) and cooperatives",
          "Custom Hiring Centres (CHCs)",
          "Agricultural institutions, KVKs and universities",
          "Rural entrepreneurs and agri-graduates",
          "Women's self-help groups (through specific initiatives)",
        ],
      },
      {
        type: "p",
        text: "If you are an individual farmer and your category is not covered, consider whether joining an FPO or working with a CHC could open eligibility — or whether hiring a drone service gives you the benefit without owning a drone.",
      },
      { type: "h2", text: "Step 2: Check official sources" },
      {
        type: "ul",
        items: [
          "District agriculture office or Krishi Vigyan Kendra (KVK)",
          "State agriculture department website and mechanisation portal",
          "Central farm mechanisation portal and ministry notices",
          "State rural livelihood mission for SHG initiatives",
        ],
      },
      {
        type: "p",
        text: "Read the latest guidelines, not an old news article. Note the application window, the required documents, any conditions after purchase and whether only certain models or suppliers are allowed.",
      },
      { type: "h2", text: "Step 3: Get confirmation in writing" },
      {
        type: "p",
        text: "Ask for the current guidelines, application dates, required documents and the list of approved suppliers (if any). Keep copies of everything. Apply within the window and wait for written sanction before you buy — buying first is one of the most common reasons people lose support.",
      },
      { type: "h2", text: "Documents to keep ready" },
      {
        type: "ul",
        items: [
          "Identity and address proof",
          "Bank account details",
          "Land records, where required",
          "Category certificate, if applicable",
          "Organisation registration and resolution for FPOs and cooperatives",
          "A quotation for an eligible drone model",
        ],
      },
      { type: "h2", text: "Warning signs of subsidy fraud" },
      {
        type: "ul",
        items: [
          "Someone promises a “guaranteed subsidy” for a fee",
          "Unofficial websites asking for registration payments",
          "Requests for OTPs, passwords or bank PINs",
          "Sanction letters that cannot be verified with the issuing office",
        ],
      },
      {
        type: "note",
        text: "We do not decide eligibility and do not guarantee subsidies. Always confirm with the relevant government department.",
      },
      {"type":"h2","text":"Common myths about drone subsidies"},
      {"type":"ul","items":["Myth: every farmer gets a free drone. Fact: support is targeted and conditional.","Myth: there is one fixed subsidy percentage everywhere. Fact: terms depend on the scheme, category and state.","Myth: you can buy now and claim later. Fact: most schemes require approval before purchase.","Myth: a dealer can arrange the subsidy. Fact: only the government department decides."]},
      {"type":"h2","text":"Tips for FPOs and groups"},
      {"type":"p","text":"FPOs and cooperatives should keep registration, board resolutions, bank documents and member details up to date well before the application window opens. Prepare a short plan showing how many members and acres the drone will serve, who will be the certified pilot and how services will be charged. A clear plan helps both the application and the business once the drone arrives."},
      {"type":"p","text":"Track the application status regularly and respond quickly to any clarification requested by the department. Delays at this stage can push an application out of the current year's selection."},
      {"type":"h2","text":"If you are not eligible"},
      {"type":"p","text":"Not being eligible is not the end of the road. You can hire drone spraying services from FPOs, CHCs, SHGs or private operators, many of whom bought drones with scheme support. You can also join or form a group that qualifies, or train as a pilot and work with an existing drone owner. For most farmers, access to drone spraying matters more than ownership."},
      { type: "h2", text: "What to do next" },
      {
        type: "p",
        text: "Once eligibility is confirmed, plan which drone suits your work and get a proper quotation for your application. If you are not eligible, compare the cost of hiring drone services — for many farmers it is the simplest way to benefit. Call 8282802150 for drone guidance and quotations.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
