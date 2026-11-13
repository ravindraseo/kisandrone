import type { KeywordPage } from "../types";

/**
 * Drone spraying cost pages.
 *
 * Rates on these pages are publicly reported market figures with their source
 * named next to them — never our own rate card. Our own rate stays a
 * [placeholder] until it is confirmed. Re-check the sources when you update.
 */
export const sprayingCostPages: KeywordPage[] = [
  {
    slug: "drone-spraying-price-per-acre",
    category: "products-services",
    navLabel: "Drone Spraying Price per Acre",
    summary: "Reported drone spraying rates per acre in India, what changes the price and how to work out your cost.",
    h1: "Drone Spraying Price per Acre in India (2026): Rates, Cost Calculator and Hidden Charges",
    seo: {
      title: "Drone Spraying Price per Acre in India (2026 Rates)",
      description:
        "Drone spraying in India usually costs ₹400–₹600 per acre, chemicals extra. See rates by crop and region, a cost calculator, hidden charges and quote tips.",
      keywords: [
        "drone spraying price per acre",
        "drone spraying price per acre in India",
        "drone spraying cost per acre",
        "drone spraying charges per acre",
        "drone spray rate per acre",
        "agriculture drone spraying cost",
        "drone spraying price per hectare",
        "drone spraying rate per bigha",
      ],
    },
    intro:
      "Most farmers ask one question before booking a drone: what will it cost per acre? The honest answer is a range, not a single number — and the range only makes sense once you know what is inside it. This guide brings together the rates reported across India, explains the eight things that push a quote up or down, shows how to work out the cost for your own field, and lists the charges that are often left out of the headline price.",
    quickAnswer:
      "Drone spraying in India typically costs about ₹400–₹600 per acre for a service-only spray, with reported rates ranging from roughly ₹300 to ₹800 per acre. The price usually excludes the pesticide or fertiliser. Dense or tall crops such as cotton, chilli and sugarcane cost more than open crops such as wheat and paddy; larger bookings, nearby fields and simple field shapes cost less. Always ask for a written per-acre quote.",
    takeaways: [
      "Typical service-only rate: about ₹400–₹600 per acre; reported extremes ₹300–₹800.",
      "The rate is for spraying only — chemical, and sometimes travel and GST, are extra.",
      "Tall, dense crops and small or scattered plots cost more per acre.",
      "Booking neighbouring fields together is the easiest way to lower the rate.",
      "Per hectare ≈ per acre × 2.47; a bigha differs by district, so confirm its size.",
    ],
    sections: [
      {
        heading: "Drone spraying price per acre at a glance",
        body: [
          "Rates for drone spraying are set by private operators, custom hiring centres (CHCs), FPOs and women self-help groups, not by a national rate card. That is why quotes vary from village to village. The table below summarises figures that have been publicly reported, with the source for each, so you can see where a quote sits before you agree to it.",
        ],
        table: {
          caption: "Publicly reported drone spraying rates in India (service only unless stated)",
          head: ["What was reported", "Rate", "Source and year"],
          rows: [
            ["Common market range across India", "₹400–₹800 per acre, by region and crop", "Agri-drone companies quoted in industry coverage, 2024–26"],
            ["Typical range most operators quote", "₹400–₹600 per acre", "Operator rate cards and farm guides, 2025–26"],
            ["Lower-cost regions and large bookings", "₹300–₹500 per acre", "Farm guides; a Bhopal farmer reported paying ₹300 per acre (BloombergQuint)"],
            ["Government-linked rate for rice spraying, Bihar", "₹450 per acre", "Bihar agriculture department scheme figure, 2024 (as reported)"],
            ["Rented drone, Hanumangarh, Rajasthan", "₹250 per bigha (about 0.2 hectare ≈ 0.49 acre)", "101Reporters ground report, 2023"],
            ["Spraying bundled with chemical", "₹700–₹1,200 per acre", "Farm cost guides, 2025–26"],
          ],
        },
        note: "These are reported figures from different years and places, shown for comparison only. They are not our rate card. Our current rate: [Add your per-acre rate, minimum area and travel charge once confirmed].",
      },
      {
        heading: "Price by crop: why some crops cost more",
        body: [
          "The single biggest driver of the per-acre price is the crop canopy. A short, open crop lets the drone fly faster with a wider swath. A tall or dense crop needs a slower flight, a narrower swath and sometimes more water per acre so the spray reaches the lower leaves — which means more battery swaps and more time for the same acre.",
        ],
        table: {
          caption: "Where each crop usually sits within the typical ₹400–₹600 per acre range",
          head: ["Crop", "Usual position in the range", "Why", "Common spray targets"],
          rows: [
            ["Wheat", "Lower end", "Short, uniform canopy; large flat fields", "Yellow rust, aphids, nutrient sprays"],
            ["Paddy (rice)", "Lower to middle", "Open canopy, but flooded fields and bunds slow set-up", "Stem borer, leaf folder, planthoppers, blast"],
            ["Mustard", "Lower to middle", "Open crop; large blocks in Rajasthan and Haryana", "Aphids, white rust, Alternaria blight"],
            ["Soybean and pulses", "Middle", "Medium canopy that closes mid-season", "Girdle beetle, semilooper, pod borer"],
            ["Maize", "Middle", "Tall later in the season", "Fall armyworm"],
            ["Cotton", "Upper end", "Tall, dense plants; many sprays a season", "Whitefly, jassids, pink bollworm"],
            ["Chilli and vegetables", "Upper end", "Dense canopy, small plots, mixed fields", "Thrips, mites, fruit borer"],
            ["Sugarcane", "Upper end", "Very tall crop; terrain following needed", "Top borer, pyrilla, woolly aphid"],
          ],
        },
        list: [
          "Herbicide sprays often cost about ₹50–₹100 more per acre, because they need coarser droplets and slower, more careful flying near other crops.",
          "Granule broadcasting (urea, seed) is priced separately from liquid spraying and depends on the spreader and the granule size.",
        ],
      },
      {
        heading: "Eight things that change your per-acre price",
        subsections: [
          { heading: "1. Crop and growth stage", body: ["Tall or dense canopies need slower flights and sometimes higher water volume. Early-stage crops are quicker and cheaper to cover."] },
          { heading: "2. Total area booked", body: ["The pilot has the same set-up time for one acre as for twenty. Bigger bookings spread that time across more acres, so the per-acre rate falls."] },
          { heading: "3. Field shape and obstacles", body: ["Square, open fields are fastest. Narrow strips, trees, electric poles and wires force extra turns and manual flying."] },
          { heading: "4. Distance and travel", body: ["Many operators add a travel charge or a minimum booking for far-off villages. Grouping neighbours removes most of this cost."] },
          { heading: "5. Who supplies the chemical", body: ["Most rates are service-only. If the operator supplies the product, the quote rises by the product cost — check the brand and the dose per acre."] },
          { heading: "6. Type of job", body: ["Herbicide, fungicide, insecticide, nutrient spray and granule broadcasting each need different settings. Herbicides and granules usually cost more."] },
          { heading: "7. Season and demand", body: ["During peak pest outbreaks every farmer wants the drone the same week. Booking early, before the peak, usually gets a better rate and a guaranteed date."] },
          { heading: "8. Water, GST and paperwork", body: ["Ask whether GST is included, who arranges clean water near the field, and whether a written record of the spray is provided."] },
        ],
      },
      {
        heading: "Drone spraying cost calculator: work out your own cost",
        body: [
          "You can estimate the full cost of a drone spray in four steps. Use the operator's written quote for the numbers — the example below only shows how the arithmetic works.",
        ],
        list: [
          "Step 1 — Spraying charge: area in acres × the operator's per-acre rate.",
          "Step 2 — Add fixed charges: travel or minimum-booking charge, if any.",
          "Step 3 — Add the chemical: dose per acre × product price × acres (skip if you already have it).",
          "Step 4 — Add GST if it is not included in the quote.",
        ],
        table: {
          caption: "Worked example (illustrative numbers — replace them with your quote)",
          head: ["Item", "Calculation", "Amount"],
          rows: [
            ["Spraying", "10 acres × ₹500 per acre", "₹5,000"],
            ["Travel charge", "One visit", "₹500"],
            ["Chemical", "Farmer's own stock", "₹0"],
            ["Total", "Spraying + travel", "₹5,500 (₹550 per acre)"],
            ["Same job shared with a neighbour (20 acres)", "20 × ₹500 + ₹500 travel", "₹10,500 (₹525 per acre)"],
          ],
        },
        note: "Prices shown in the example are assumptions to explain the method, not a quote.",
      },
      {
        heading: "Per acre, per hectare and per bigha",
        body: [
          "Quotes are given in different units in different states, so convert before you compare. One hectare equals 2.471 acres, so a per-hectare rate is about 2.5 times the per-acre rate. A bigha is not a fixed unit: its size changes from state to state and even between districts of the same state. In the Hanumangarh report above, one bigha was about 0.2 hectare (≈ 0.49 acre), so ₹250 per bigha works out to roughly ₹500 per acre. Always ask the operator which bigha they mean.",
        ],
        table: {
          caption: "Quick conversions",
          head: ["If you are quoted", "Convert to per acre"],
          rows: [
            ["Per hectare", "Divide by 2.471"],
            ["Per bigha", "Divide by the bigha size in acres (ask the operator)"],
            ["Per kanal (8 kanal = 1 acre)", "Multiply by 8"],
            ["Per guntha (40 guntha = 1 acre)", "Multiply by 40"],
          ],
        },
      },
      {
        heading: "Drone spraying vs manual spraying: real cost per acre",
        body: [
          "Comparing only the rate per acre can be misleading. Manual knapsack spraying looks cheaper on paper in some villages, but it takes far longer, needs much more water and puts the worker in the spray cloud. For flooded paddy, tall cotton or sugarcane, manual spraying may not be practical at all during peak season.",
        ],
        table: {
          caption: "General comparison — actual figures depend on the field and the operator",
          head: ["Point", "Drone spraying", "Manual knapsack spraying"],
          rows: [
            ["Time for one acre", "Minutes of flying per acre", "Several hours of walking per acre"],
            ["Water carried to the field", "Low-volume spray", "Much higher volume per acre"],
            ["Labour needed", "Pilot and one helper", "One or more sprayers per field"],
            ["Exposure to chemicals", "Low — pilot stays at the edge", "High — worker walks through the spray"],
            ["Tall or flooded crops", "Sprays from above", "Difficult or impossible late in the season"],
            ["Typical price", "₹400–₹600 per acre (service only)", "Depends on local daily wages and days needed"],
          ],
        },
      },
      {
        heading: "Hire a drone or buy one? The break-even question",
        body: [
          "For most individual farmers, hiring is cheaper: you pay only for the acres you spray and avoid batteries, repairs, insurance and a certified pilot's salary. Buying starts to make sense for FPOs, CHCs and service entrepreneurs who can keep a drone busy across many farms every season.",
          "To check the break-even point, add up the yearly cost of owning (instalment or depreciation, battery replacement, spares, insurance, pilot and transport) and divide it by the per-acre rate you would otherwise pay. The answer is the number of acres you must spray each year before owning beats hiring. Subsidy under central and state schemes can lower the purchase cost for eligible groups — see our guide to buying a drone under a scheme.",
        ],
      },
      {
        heading: "What a fair quote should include",
        list: [
          "Rate per acre (or per hectare/bigha with the unit defined)",
          "Whether chemical, water and GST are included",
          "Travel charge and minimum area",
          "Pilot's Remote Pilot Certificate and the drone's UIN registration",
          "What happens if wind or rain stops the job halfway",
          "A written record of the area sprayed, product and date",
        ],
      },
      {
        heading: "Red flags: when a low price costs more",
        list: [
          "No Remote Pilot Certificate or no drone registration to show",
          "Offers to spray any chemical, including products not approved for drone use",
          "Flies in strong wind or mid-day heat to finish faster",
          "Will not give a written quote or a spray record",
          "A per-acre rate far below every other quote in your area, with no explanation",
        ],
        body: [
          "A badly applied spray has to be repeated, and the second spray costs you both the service and the chemical again. A safe, well-set-up spray at a fair rate is cheaper over the season.",
        ],
      },
      {
        heading: "How to get an exact price for your field",
        list: [
          "Note your crop, growth stage and the pest or deficiency to treat",
          "Measure or estimate the area, and check the unit used locally",
          "Ask neighbours with the same crop and stage to book on the same day",
          "Call or WhatsApp 8282802150 with these details for a written per-acre quote",
        ],
        body: [
          "Farming in Rajasthan? Rates, crops and timing there are different — read our guide to drone spraying services in Rajasthan.",
        ],
      },
    ],
    faqs: [
      { q: "What is the drone spraying price per acre in India?", a: "Most service-only quotes fall between about ₹400 and ₹600 per acre, and reported rates range from roughly ₹300 to ₹800 per acre depending on crop, region, area and travel. Chemical is usually extra." },
      { q: "Does the drone spraying price include pesticide?", a: "Usually not. Most rates cover the drone, pilot, batteries and spraying only. If the operator supplies the chemical, the product cost is added — ask for it as a separate line." },
      { q: "Why do drone spraying rates differ by crop?", a: "Tall and dense crops such as cotton, chilli and sugarcane need slower flights, narrower swaths and sometimes more water per acre, so they take longer than open crops like wheat or paddy." },
      { q: "What is the drone spraying price per hectare?", a: "Multiply the per-acre rate by about 2.47. A ₹500 per acre rate is roughly ₹1,235 per hectare." },
      { q: "Is there a minimum area for drone spraying?", a: "Many operators set a minimum area or add a travel charge for small plots. Booking together with neighbours is the easiest way to meet the minimum and lower the rate." },
      { q: "Is drone spraying cheaper than manual spraying?", a: "Per acre it can be similar or slightly higher in some villages, but it is much faster, uses far less water and keeps the worker out of the spray. For tall or flooded crops it is often the only practical option at peak season." },
      { q: "How much does herbicide spraying by drone cost?", a: "Herbicide spraying usually costs about ₹50–₹100 more per acre than a normal pesticide spray, because it needs coarser droplets and careful flying to avoid drift onto other crops. Only herbicides approved for drone use should be sprayed." },
      { q: "How can I reduce the drone spraying cost per acre?", a: "Book early before the peak, group neighbouring fields on the same day, keep water and the product ready at the field, and clear a take-off spot so the pilot loses no time." },
      { q: "How do I get a quote for drone spraying?", a: "Call or WhatsApp 8282802150 with your crop, stage, area and village. We will confirm availability and give a written per-acre quote." },
    ],
    cta: { topic: "price", label: "Get a per-acre quote" },
    related: ["/drone-spraying-service/", "/drone-spraying-services-in-rajasthan/", "/drone-spraying-vs-manual-spraying/"],
    schema: "Service",
  },
  {
    slug: "drone-spraying-services-in-rajasthan",
    category: "products-services",
    navLabel: "Drone Spraying in Rajasthan",
    summary: "Drone spraying for mustard, cumin, wheat, guar and cotton in Rajasthan — rates, timing and how to book.",
    h1: "Drone Spraying Services in Rajasthan: Crops, Rates per Bigha and How to Book",
    seo: {
      title: "Drone Spraying Services in Rajasthan – Rates & Booking",
      description:
        "Drone spraying in Rajasthan for mustard, cumin, wheat, guar and cotton. See rates per acre and bigha, spray timing in desert heat and how to book.",
      keywords: [
        "drone spraying services in Rajasthan",
        "drone spraying in Rajasthan",
        "drone spraying price Rajasthan",
        "agriculture drone Rajasthan",
        "drone spray rate per bigha Rajasthan",
        "kisan drone Rajasthan",
        "drone spraying Jaipur",
        "drone spraying Sri Ganganagar",
      ],
    },
    intro:
      "Rajasthan farms face three problems that drones answer well: water is scarce, fields are large, and spraying by hand in the heat is hard work. From the mustard belt around Bharatpur to the cumin fields of Jodhpur and Nagaur and the cotton of Sri Ganganagar, drone spraying is now offered by private operators, custom hiring centres and FPOs. This page explains which crops benefit, what spraying costs in acres and bighas, when to spray in desert weather and how to book safely.",
    quickAnswer:
      "Drone spraying in Rajasthan is used mainly on mustard, wheat, cumin, guar, cotton, gram and groundnut. A 2023 ground report from Hanumangarh found drone spraying at ₹250 per bigha (about ₹500 per acre), in line with the ₹400–₹600 per acre typical across India; chemical is extra. Spray in the early morning to avoid wind, heat and dust, use only products approved for drone use, and book through a certified pilot or a custom hiring centre.",
    takeaways: [
      "Main crops: mustard, wheat, cumin, guar, cotton, gram, groundnut and bajra.",
      "Reported rate: ₹250 per bigha in Hanumangarh (2023) ≈ ₹500 per acre; confirm your local bigha size.",
      "Drones use a fraction of the water of knapsack spraying — important in dry districts.",
      "Spray early in the morning; stop when the wind or loo picks up.",
      "Rajasthan has supported drones for CHCs, FPOs and agriculture graduates — check current terms.",
    ],
    sections: [
      {
        heading: "Why drone spraying suits Rajasthan",
        list: [
          "Water saving: drones spray a low volume per acre, so far less water has to be carried to fields in dry districts.",
          "Large fields: canal-irrigated blocks in the north and big rabi fields of mustard and wheat suit fast, automatic flights.",
          "Heat and labour: walking through fields with a knapsack in Rajasthan's heat is slow and tiring; the pilot stays at the edge.",
          "Speed during outbreaks: aphid attacks on mustard or blight in cumin can spread within days — a drone covers a village quickly.",
          "Proven use: Rajasthan's agriculture department used drones to spray insecticide against locust swarms in Jaipur district in 2020.",
        ],
      },
      {
        heading: "Drone spraying by crop in Rajasthan",
        body: [
          "Rajasthan grows very different crops in its kharif and rabi seasons. The table lists the crops where drone spraying is most common and what farmers usually spray for. Confirm the product and dose with your KVK or agronomist, and use only products approved for drone use on that crop.",
        ],
        table: {
          caption: "Common drone spraying uses in Rajasthan (general guidance)",
          head: ["Crop", "Season", "Common spray targets", "Drone notes"],
          rows: [
            ["Mustard (sarson)", "Rabi", "Aphids, white rust, Alternaria blight", "Large open blocks — fast and economical; avoid bee-active hours at flowering"],
            ["Wheat", "Rabi", "Aphids, rust, micronutrient sprays", "Short uniform crop — usually at the lower end of the price range"],
            ["Cumin (jeera)", "Rabi", "Blight, powdery mildew, aphids", "Timing is critical; spray in calm mornings after checking for dew"],
            ["Gram (chana)", "Rabi", "Pod borer", "Spray at early pod stage for best effect"],
            ["Guar", "Kharif", "Bacterial blight, jassids, whitefly", "Rainfed fields in the west; plan around rain and wind"],
            ["Cotton", "Kharif", "Whitefly, jassids, pink bollworm", "Tall, dense crop in Sri Ganganagar and Hanumangarh — slower flights, higher rate"],
            ["Groundnut", "Kharif", "Tikka leaf spot, leaf miner", "Common around Bikaner and Jaipur; good canopy coverage needed"],
            ["Bajra and maize", "Kharif", "Fall armyworm (maize), nutrient sprays", "Maize in the south needs coverage into the whorl"],
          ],
        },
      },
      {
        heading: "Region-wise: where drones are used in Rajasthan",
        subsections: [
          { heading: "North — canal belt (Sri Ganganagar, Hanumangarh)", body: ["Irrigated cotton, wheat, mustard and gram in large blocks. Many farmers here already hire or rent drones, and group bookings across neighbouring fields are common."] },
          { heading: "East (Bharatpur, Alwar, Dholpur, Jaipur, Sawai Madhopur)", body: ["The heart of the mustard belt, plus wheat and bajra. Aphid control on mustard in winter is the main drone job."] },
          { heading: "Hadoti (Kota, Bundi, Baran, Jhalawar)", body: ["Soybean in kharif and wheat, coriander and garlic in rabi. Soybean sprays at canopy closure suit drones well."] },
          { heading: "West (Jodhpur, Nagaur, Barmer, Jaisalmer, Bikaner)", body: ["Cumin, guar, isabgol and groundnut on large, mostly rainfed farms where water for spraying is precious."] },
          { heading: "South (Udaipur, Banswara, Dungarpur, Chittorgarh)", body: ["Maize, soybean and wheat on smaller and hillier plots — terrain following and careful planning matter here."] },
        ],
        note: "Service areas: [Confirm the Rajasthan districts you currently serve before publishing a list].",
      },
      {
        heading: "Drone spraying price in Rajasthan",
        body: [
          "Rajasthan rates sit within the national range. A 2023 ground report from Hanumangarh found farmers renting drones at ₹250 per bigha, where one bigha was about 0.2 hectare (≈ 0.49 acre) — roughly ₹500 per acre. Across India, most service-only quotes are about ₹400–₹600 per acre, with chemical extra.",
          "Because bigha size differs between districts of Rajasthan, always ask the operator which bigha they are using and convert it to acres before comparing quotes. Large rabi blocks of mustard and wheat usually get lower rates than tall cotton, and far-off dhanis may carry a travel charge.",
        ],
        table: {
          caption: "How to read a Rajasthan quote",
          head: ["Quoted as", "What to ask", "Convert to per acre"],
          rows: [
            ["Per bigha", "How many acres (or square metres) is one bigha here?", "Rate ÷ bigha size in acres"],
            ["Per acre", "Does it include chemical, travel and GST?", "Already per acre"],
            ["Per hectare", "Is it service-only?", "Rate ÷ 2.471"],
          ],
        },
        note: "Figures are reported rates, not our rate card. Our Rajasthan rate: [Add your per-acre/per-bigha rate and travel charge once confirmed].",
      },
      {
        heading: "Best time to spray in Rajasthan's weather",
        list: [
          "Spray in the early morning, when the air is calm and cool; evenings can also work once the wind settles.",
          "Stop when the wind rises or the hot loo starts — fine droplets drift and evaporate quickly in dry, hot air.",
          "Avoid dusty, hazy conditions that reduce visibility and coat leaves.",
          "In winter, let heavy dew dry on cumin and mustard leaves unless the product label says otherwise.",
          "During mustard flowering, avoid the hours when bees are active and inform nearby beekeepers.",
          "Before rabi spraying, check fog warnings for the morning — fog makes flights unsafe.",
        ],
      },
      {
        heading: "Drone subsidy and training in Rajasthan",
        body: [
          "Rajasthan has promoted farm drones through the Rajasthan Agricultural Technology Mission. In 2023 the state was reported to offer drones to cooperative societies, custom hiring centres, FPOs and young agriculture graduates at subsidised rates, with the subsidy reported at 40% of the cost or up to ₹4 lakh, whichever is lower. Central support through the farm mechanisation scheme and the Namo Drone Didi initiative for women self-help groups also applies.",
          "Scheme terms change every year, so check the current guidelines with your district agriculture office, KVK or the Rajasthan agriculture department portal before buying. Pilots must train at a DGCA-authorised RPTO to get a Remote Pilot Certificate.",
        ],
      },
      {
        heading: "How to book drone spraying in Rajasthan",
        list: [
          "Share your crop, stage, area (in acres or your local bigha) and village with us on 8282802150",
          "Confirm the product is approved for drone use on your crop",
          "Group neighbouring fields with the same crop and stage on one day",
          "Keep clean water and the product ready near the field",
          "Clear a flat take-off spot and mark wires, trees and tube-well structures",
          "Get a written record of the area sprayed, product and date",
        ],
      },
      {
        heading: "Safety and rules",
        body: [
          "Every drone used for spraying must be a DGCA type-certified model registered on Digital Sky, flown by a pilot with a Remote Pilot Certificate. Check the airspace map before flying — areas near airports, defence stations and the border in western Rajasthan can be yellow or red zones that need permission. Keep people and livestock away during spraying and keep buffer zones near water bodies, homes and beehives.",
        ],
      },
    ],
    faqs: [
      { q: "Is drone spraying available in Rajasthan?", a: "Yes. Private operators, custom hiring centres, FPOs and trained young farmers offer drone spraying in many districts. Call 8282802150 with your district and village to check availability." },
      { q: "What is the drone spraying rate per bigha in Rajasthan?", a: "A 2023 Hanumangarh report found ₹250 per bigha, where a bigha was about 0.49 acre — roughly ₹500 per acre. Bigha size varies by district, so confirm it before comparing quotes." },
      { q: "Which crops are sprayed by drone in Rajasthan?", a: "Mainly mustard, wheat, cumin and gram in rabi, and guar, cotton, groundnut, bajra and maize in kharif — always with products approved for drone use on that crop." },
      { q: "Is drone spraying good for cumin?", a: "It can help with timely blight and powdery mildew sprays over large areas. Spray in calm mornings, let heavy dew dry first and follow the product label strictly, as cumin is a sensitive crop." },
      { q: "When is the best time to spray in Rajasthan?", a: "Early morning, when the air is calm and cool. Stop if the wind or hot loo picks up, and avoid foggy mornings in winter." },
      { q: "Does Rajasthan give a subsidy on agriculture drones?", a: "Rajasthan was reported in 2023 to subsidise drones for CHCs, FPOs and agriculture graduates at 40% or up to ₹4 lakh. Terms change, so confirm with the state agriculture department before buying." },
      { q: "Can drones spray near the border in western Rajasthan?", a: "Only where the airspace map allows. Areas near the border, airports and defence stations can be restricted zones that need permission or are off-limits." },
      { q: "How do I book drone spraying in Rajasthan?", a: "Call or WhatsApp 8282802150 with your crop, stage, area and village. We confirm availability, the rate per acre or bigha, and what to keep ready." },
    ],
    cta: { topic: "service", label: "Book drone spraying in Rajasthan" },
    related: ["/drone-spraying-price-per-acre/", "/drone-spraying-for-wheat/", "/drone-spraying-for-cotton/"],
    schema: "Service",
  },
];
