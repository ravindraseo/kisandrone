import type { KeywordPage } from "../types";

/**
 * Schemes & Training keyword pages.
 * No subsidy amounts or percentages are stated — they change and must be
 * confirmed with official sources. Scheme pages show "Information last reviewed".
 */
export const schemePages: KeywordPage[] = [
  {
    slug: "kisan-drone-subsidy",
    category: "schemes-training",
    navLabel: "Kisan Drone Subsidy",
    summary: "What you should know about drone subsidies as an individual farmer.",
    h1: "Kisan Drone Subsidy: Who Can Get It, How to Apply and Mistakes to Avoid",
    seo: {
      title: "Kisan Drone Subsidy 2026: Eligibility, Process & Tips",
      description:
        "Kisan drone subsidy explained for farmers — who is eligible, how to apply, documents needed and how to avoid fraud. Always verify with official sources.",
      keywords: [
        "Kisan drone subsidy",
        "drone subsidy for farmers",
        "agriculture drone subsidy eligibility",
        "kisan drone yojana",
        "drone subsidy apply online",
        "SMAM drone subsidy",
      ],
    },
    intro:
      "Many farmers hear that “the government gives a subsidy on drones” and assume anyone can get one. In reality, drone support has been designed mainly for specific groups, and the rules differ by scheme and state. This page explains what an individual farmer should know before spending time or money on a drone subsidy.",
    quickAnswer:
      "Kisan drone subsidy in India has mainly been offered through central and state schemes to specific groups — agricultural institutions, FPOs, cooperatives, Custom Hiring Centres, rural entrepreneurs, women's SHGs and, in some cases, certain categories of farmers. Eligibility, amounts and processes are set by official guidelines and change over time, so confirm with your state agriculture department before buying.",
    takeaways: [
      "Support is usually targeted at groups and entrepreneurs, not every individual farmer.",
      "Apply first, buy only after written approval (unless guidelines say otherwise).",
      "Individual farmers can benefit indirectly by hiring drone services from FPOs and CHCs.",
      "Never pay anyone who promises a “guaranteed subsidy”.",
    ],
    sections: [
      {
        heading: "How drone subsidies work in India",
        body: [
          "Drone support has come mainly through the farm mechanisation programme of the Ministry of Agriculture and Farmers Welfare, implemented by state agriculture departments. Guidelines were amended to include agriculture drones, with support for demonstrations by institutions and for purchase by FPOs, Custom Hiring Centres and entrepreneurs. States may also run their own programmes.",
          "Because states implement these schemes, the application window, portal, documents and budget can differ from one state to another — and from one year to the next.",
        ],
      },
      {
        heading: "For individual farmers",
        subsections: [
          {
            heading: "Direct purchase support",
            body: [
              "Some guidelines have included support for certain categories of individual farmers. Whether this is available in your state this year, and on what terms, can only be confirmed by your district agriculture office or the official portal.",
            ],
          },
          {
            heading: "Indirect benefit through services",
            body: [
              "For most small and medium farmers, the practical benefit comes from hiring drone services from subsidised FPOs, CHCs and entrepreneurs. Because their purchase cost was supported, they can often offer services at reasonable rates.",
            ],
          },
          {
            heading: "Joining or forming a group",
            body: [
              "If you want to own a drone, joining an FPO or cooperative, or working with a Custom Hiring Centre, may open eligibility that an individual does not have.",
            ],
          },
        ],
      },
      {
        heading: "How to check your eligibility",
        list: [
          "Visit your district agriculture office or Krishi Vigyan Kendra (KVK)",
          "Check your state agriculture department's website and mechanisation portal",
          "Ask for the current guidelines in writing, including the application dates",
          "Confirm which beneficiary categories are covered this year",
          "Ask whether specific models or suppliers are required",
        ],
      },
      {
        heading: "Documents commonly requested",
        table: {
          caption: "General list — the final list depends on the scheme",
          head: ["Document", "Purpose"],
          rows: [
            ["Aadhaar / identity proof", "Identify the applicant"],
            ["Address proof", "Confirm location and jurisdiction"],
            ["Land records", "Where farmer status must be shown"],
            ["Bank account details", "Direct benefit transfer"],
            ["Category certificate", "If applying under a reserved category"],
            ["Organisation registration", "For FPOs, cooperatives, CHCs"],
          ],
        },
      },
      {
        heading: "Mistakes to avoid",
        list: [
          "Buying the drone before approval",
          "Relying on WhatsApp forwards instead of official guidelines",
          "Paying an agent who promises a guaranteed subsidy",
          "Submitting documents with mismatched names or details",
          "Choosing a model that is not eligible under the scheme",
        ],
        note: "We do not decide eligibility or guarantee any subsidy. Always confirm with the relevant government department.",
      },
      {
        heading: "Is a subsidy the only reason to buy?",
        body: [
          "A subsidy lowers the purchase price, but it does not cover batteries, repairs, pilot costs or transport. Before applying, think about how many acres the drone will spray each season and who will fly it. If the numbers do not work without the subsidy, they may not work with it either. In that case, hiring a drone spraying service may be the wiser path.",
        ],
      },
      {
        "heading": "Subsidy vs hiring a service: a quick comparison",
        "table": {
          "caption": "Which route suits an individual farmer",
          "head": [
            "Point",
            "Buying with subsidy",
            "Hiring a drone service"
          ],
          "rows": [
            [
              "Upfront money",
              "Your share of the drone cost",
              "None"
            ],
            [
              "Paperwork",
              "Application, sanction, claim",
              "None"
            ],
            [
              "Pilot",
              "You need a certified pilot",
              "Included"
            ],
            [
              "Running costs",
              "Batteries, repairs, insurance",
              "Included in the service rate"
            ],
            [
              "Best for",
              "Large areas or a service business",
              "Most small and medium farmers"
            ]
          ]
        }
      },
    ],
    faqs: [
      {
        q: "Can an individual farmer get a drone subsidy?",
        a: "Some schemes have included certain categories of individual farmers, but much of the support has been for groups and entrepreneurs. Confirm the current position with your state agriculture department.",
      },
      {
        q: "How much is the kisan drone subsidy?",
        a: "Amounts and percentages are set in official guidelines and differ by beneficiary type and over time. Check the latest figures with the official source.",
      },
      {
        q: "Where do I apply for a kisan drone subsidy?",
        a: "Usually through your state agriculture department's portal or office. Your district agriculture office or KVK can guide you.",
      },
      {
        q: "Can I get a subsidy after buying the drone?",
        a: "Usually not. Most schemes require approval before purchase.",
      },
      {
        q: "Is there a drone subsidy for FPOs?",
        a: "FPOs have been among the main beneficiary groups under drone support. Check the current guidelines for terms.",
      },
      {
        q: "How do I avoid drone subsidy fraud?",
        a: "Only use official portals and offices, never pay agents for approvals and verify every letter with the issuing office.",
      },
      {
        q: "Can Kisan Drone help me apply?",
        a: "We can explain general steps and help with drone selection and quotations. Eligibility is decided only by the government department.",
      },
      {
        "q": "Is a drone subsidy available every year?",
        "a": "It depends on budget allocations and state implementation. Application windows open and close, so watch official notices from your state agriculture department."
      },
      {
        "q": "Do I need land in my name to get a drone subsidy?",
        "a": "For schemes aimed at farmers, land records are often required. Group schemes for FPOs or CHCs may need organisation documents instead. Check the specific guidelines."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/agriculture-drone-subsidy-in-india/", "/agriculture-drone-with-subsidy/"],
    schema: "WebPage",
    showReviewDate: true,
  },
  {
    slug: "agriculture-drone-subsidy-in-india",
    category: "schemes-training",
    navLabel: "Agriculture Drone Subsidy in India",
    summary: "An overall picture of drone support at central and state level.",
    h1: "Agriculture Drone Subsidy in India: Central Schemes, State Support and Who Benefits",
    seo: {
      title: "Agriculture Drone Subsidy in India: Schemes Explained",
      description:
        "An overview of agriculture drone subsidy in India — SMAM support, Namo Drone Didi for women's SHGs, state schemes, who benefits and how to verify details.",
      keywords: [
        "Agriculture drone subsidy in India",
        "drone subsidy scheme India",
        "SMAM agriculture drone",
        "Namo Drone Didi subsidy",
        "state drone subsidy",
        "drone subsidy for CHC",
      ],
    },
    intro:
      "Government support for agriculture drones in India comes from more than one programme. Central schemes set the framework, states implement them and some states add their own support. This overview explains the main channels and who they are meant for, so you know where to look for accurate, current details.",
    quickAnswer:
      "Agriculture drone support in India has come mainly through the Sub-Mission on Agricultural Mechanization (SMAM), which covers demonstrations by institutions and purchases by FPOs, CHCs and entrepreneurs; the Namo Drone Didi initiative for women's self-help groups; and state-level programmes. Amounts, eligibility and processes are set in official guidelines and change, so verify with your state agriculture department.",
    takeaways: [
      "SMAM is the main central channel for drone purchase and demonstration support.",
      "Namo Drone Didi targets selected women's SHGs.",
      "States implement schemes and may add their own support.",
      "Always rely on the latest official guidelines, not old news articles.",
    ],
    sections: [
      {
        heading: "1. Sub-Mission on Agricultural Mechanization (SMAM)",
        body: [
          "SMAM is a central scheme for promoting farm machinery. Its guidelines were updated to include agriculture drones, with support for demonstrations by ICAR institutes, Krishi Vigyan Kendras and state agricultural universities, and for purchase by FPOs, Custom Hiring Centres and rural entrepreneurs, among others.",
        ],
        subsections: [
          {
            heading: "Demonstrations",
            body: [
              "Institutions run field demonstrations so farmers can see drone spraying in practice. Watching a demonstration is often the best first step for a farmer.",
            ],
          },
          {
            heading: "Purchase support",
            body: [
              "Eligible groups and entrepreneurs can apply for financial assistance towards buying drones, typically to provide services to farmers.",
            ],
          },
        ],
      },
      {
        heading: "2. Initiatives for women's self-help groups",
        body: [
          "The Namo Drone Didi initiative, approved by the Union Cabinet in November 2023, aims to provide drones to selected women's SHGs so they can offer drone services such as nutrient and pesticide application to farmers. Members are trained as drone pilots and assistants. Selection and implementation are handled by the designated agencies.",
        ],
      },
      {
        heading: "3. State schemes",
        body: [
          "States implement central schemes through their agriculture departments, set application windows and may add their own drone programmes or top-up support. This is why the details you hear from someone in another state may not apply to you.",
        ],
      },
      {
        heading: "Who benefits — a summary",
        table: {
          caption: "General overview; confirm current terms with official sources",
          head: ["Beneficiary", "Main purpose", "Where to ask"],
          rows: [
            ["ICAR institutes, KVKs, SAUs", "Farmer demonstrations", "Institution / ministry guidelines"],
            ["FPOs and cooperatives", "Services for members", "State agriculture department"],
            ["Custom Hiring Centres", "Renting drones and services", "State agriculture department"],
            ["Rural entrepreneurs, agri-graduates", "Drone service businesses", "State agriculture department"],
            ["Women's SHGs", "Drone services via Namo Drone Didi", "Implementing agencies"],
          ],
        },
      },
      {
        heading: "How farmers benefit even without owning a drone",
        body: [
          "The biggest impact of these schemes for most farmers is wider access to drone services. When FPOs, CHCs, SHGs and entrepreneurs receive support to buy drones, more certified operators are available in villages, and farmers can hire spraying without investing in a drone themselves.",
          "Ask your FPO, KVK or agriculture office whether a supported drone operator is active in your area.",
        ],
      },
      {
        heading: "How to get accurate, current information",
        list: [
          "Read the latest guidelines on the official ministry and state portals",
          "Visit the district agriculture office or KVK",
          "Note the application window and required documents",
          "Confirm whether specific models or suppliers are required",
          "Ignore unofficial claims about “fixed subsidy amounts” without a source",
        ],
        note: "Schemes and amounts change. This page is general guidance and is reviewed periodically — check the review date at the top.",
      },
      {
        "heading": "Related support that helps drone adoption",
        "body": [
          "Beyond direct purchase support, several other policies make drones more accessible. The production-linked incentive scheme for drones and drone components encourages manufacturing in India. Liberalised Drone Rules have reduced paperwork. Pilot training through authorised RPTOs has expanded, and an increasing number of pesticides have received approval for drone application.",
          "Some banks and financial institutions also offer loans for farm machinery that may cover drones. Combining scheme support with a loan can make a purchase feasible for FPOs and entrepreneurs, but the repayment plan should be based on realistic service demand."
        ]
      },
      {
        "heading": "Questions to ask your agriculture office",
        "list": [
          "Is drone purchase support open this year, and for which groups?",
          "What is the application window and portal?",
          "Are there specific models or suppliers I must use?",
          "What documents and conditions apply after purchase?"
        ]
      },
      {
        "heading": "Reading scheme guidelines correctly",
        "body": [
          "Scheme guidelines can be long and technical. Focus on four parts: who is eligible, what is covered (drone only, or accessories and training too), what conditions apply after purchase, and how and when to apply. If any part is unclear, ask the district agriculture office to explain it before you apply."
        ]
      },
    ],
    faqs: [
      {
        q: "Which schemes give subsidy on agriculture drones in India?",
        a: "Mainly SMAM (farm mechanisation), the Namo Drone Didi initiative for women's SHGs and state-level programmes. Check current guidelines for details.",
      },
      {
        q: "Is there a central government drone subsidy?",
        a: "Yes, central support has been provided through the farm mechanisation programme, implemented by states. Terms are in the official guidelines.",
      },
      {
        q: "What is Namo Drone Didi?",
        a: "A central initiative to provide drones to selected women's self-help groups so they can offer drone services to farmers.",
      },
      {
        q: "Do states offer extra drone subsidy?",
        a: "Some states run their own programmes or add support. Ask your state agriculture department.",
      },
      {
        q: "Can a rural entrepreneur get drone support?",
        a: "Entrepreneurs, including agri-graduates, have been among eligible groups for starting drone services. Confirm current eligibility.",
      },
      {
        q: "How do I verify a drone subsidy claim?",
        a: "Check the latest guidelines on official portals or with your district agriculture office. Do not rely on forwarded messages.",
      },
      {
        q: "Where can I see a drone demonstration?",
        a: "Ask your nearest KVK, agricultural university or district agriculture office about upcoming drone demonstrations.",
      },
      {
        "q": "Is drone subsidy the same in every state?",
        "a": "No. States implement schemes with their own windows, portals and sometimes additional support, so details differ from state to state."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/drone-didi-scheme/", "/government-subsidy-for-farming-drones/"],
    schema: "WebPage",
    showReviewDate: true,
  },
  {
    slug: "government-subsidy-for-farming-drones",
    category: "schemes-training",
    navLabel: "Government Subsidy for Farming Drones",
    summary: "The application process and a document checklist.",
    h1: "Government Subsidy for Farming Drones: Step-by-Step Application Process",
    seo: {
      title: "Government Subsidy for Farming Drones: How to Apply",
      description:
        "Step-by-step process to apply for government subsidy on farming drones — eligibility check, online application, documents, sanction, purchase and claim.",
      keywords: [
        "Government subsidy for farming drones",
        "how to apply drone subsidy",
        "drone subsidy documents",
        "agrimachinery portal drone",
        "drone subsidy application online",
        "farm drone subsidy process",
      ],
    },
    intro:
      "Applying for a government subsidy on a farming drone is a process with clear steps. Most rejections happen because of missing documents, wrong timing or buying before approval. This guide walks you through the general application process and gives you a checklist to prepare in advance.",
    quickAnswer:
      "To apply for a government subsidy on a farming drone, check eligibility in the current guidelines, register and apply on your state's official portal (or the central farm mechanisation portal where used) during the application window, upload documents, wait for selection and written sanction, buy an eligible drone, register it on Digital Sky and submit the invoice and verification documents to claim the subsidy.",
    takeaways: [
      "Prepare documents before the window opens — windows can be short.",
      "Selection may be by lottery or priority when applications exceed budget.",
      "Buy only after sanction and keep the invoice and registration.",
      "Track your application and keep acknowledgement numbers.",
    ],
    sections: [
      {
        heading: "General application steps",
        subsections: [
          {
            heading: "Step 1: Read the guidelines",
            body: ["Download the latest guidelines and note eligibility, the window, documents and conditions."],
          },
          {
            heading: "Step 2: Register on the portal",
            body: [
              "Register on the state agriculture department's portal or the central farm mechanisation portal, as applicable, using correct personal or organisation details.",
            ],
          },
          {
            heading: "Step 3: Apply and upload documents",
            body: ["Fill the application carefully and upload clear copies of all required documents."],
          },
          {
            heading: "Step 4: Selection and sanction",
            body: [
              "Applications are scrutinised. Where demand exceeds budget, selection may be by lottery or priority rules. Selected applicants receive sanction.",
            ],
          },
          {
            heading: "Step 5: Purchase and verification",
            body: [
              "Buy an eligible model as instructed, register the drone on Digital Sky and complete any physical verification by the department.",
            ],
          },
          {
            heading: "Step 6: Claim",
            body: ["Submit the invoice, registration and other documents to release the subsidy, usually by bank transfer."],
          },
        ],
      },
      {
        heading: "Documents usually requested",
        list: [
          "Identity proof (Aadhaar or equivalent)",
          "Address proof",
          "Bank account details and a cancelled cheque or passbook copy",
          "Land records, where applicable",
          "Category certificate, if applicable",
          "Organisation registration and resolution, for FPOs and cooperatives",
          "Quotation for an eligible model",
          "Invoice and drone UIN after purchase",
        ],
      },
      {
        heading: "Common reasons applications get rejected",
        table: {
          caption: "Avoid these issues",
          head: ["Problem", "How to avoid it"],
          rows: [
            ["Missing or unclear documents", "Scan clearly; check the list twice"],
            ["Name mismatch across documents", "Correct records before applying"],
            ["Applying outside the window", "Watch official notices for dates"],
            ["Ineligible category or model", "Confirm eligibility in the guidelines"],
            ["Purchase before sanction", "Wait for written approval"],
          ],
        },
      },
      {
        heading: "Help with documentation",
        body: [
          "We can explain the general process, suggest a drone that suits your work and share a quotation for your application. [Confirm your service.] We do not process applications on behalf of the department and cannot influence selection.",
        ],
      },
      {
        heading: "After the subsidy",
        body: [
          "Keep the drone, invoices, sanction letter and registration documents safely. Some schemes require the drone to be kept and used for a minimum period or inspected later. Maintain a usage log — it helps with inspections and with planning your service business.",
        ],
      },
      {
        heading: "Timeline expectations",
        body: [
          "From application to receiving the subsidy can take time — scrutiny, selection, purchase, verification and payment all happen in stages. Plan your purchase timing around the crop season so the drone is ready when demand peaks, and keep checking the application status on the portal.",
        ],
      },
      {
        "heading": "Preparing a simple usage plan",
        "body": [
          "Even when not formally required, a short usage plan strengthens your application and helps you decide whether the purchase makes sense. Write down which crops and villages you will serve, how many acres you expect to spray each season, who will fly the drone, how you will charge batteries in the field and what rate you will charge for services.",
          "This plan also helps when you talk to a bank for a loan and when you set your service prices after the drone arrives."
        ]
      },
      {
        "heading": "Keeping track of your application",
        "body": [
          "Note your application number, the date of submission and any acknowledgement. Check the portal regularly for status updates and messages asking for clarifications. Respond quickly to any request for documents — delays at this stage can push you out of the current year's selection."
        ]
      },
    ],
    faqs: [
      {
        q: "How do I apply for a farming drone subsidy?",
        a: "Check the guidelines, register on the official portal, apply during the window with documents, wait for sanction, buy an eligible drone and submit the claim.",
      },
      {
        q: "Which portal is used for drone subsidy applications?",
        a: "Usually your state agriculture department's portal; some states use the central farm mechanisation portal. Check with your district agriculture office.",
      },
      {
        q: "What documents are needed for a drone subsidy?",
        a: "Identity and address proof, bank details, land records or organisation registration, category certificate if applicable, and a quotation. The final list varies.",
      },
      {
        q: "Why was my drone subsidy application rejected?",
        a: "Common reasons are missing documents, name mismatches, ineligible category or model, or applying outside the window. Ask the department for the specific reason.",
      },
      {
        q: "Is selection first-come, first-served?",
        a: "It depends on the scheme and state. Some use lotteries or priority rules when applications exceed the budget.",
      },
      {
        q: "How is the subsidy paid?",
        a: "Usually by bank transfer after purchase and verification, as described in the guidelines.",
      },
      {
        q: "Can you help with my application?",
        a: "We can explain the process and provide drone guidance and quotations. Call 8282802150.",
      },
      {
        "q": "Do I need a pilot certificate before applying?",
        "a": "Not always for the application itself, but you will need a certified pilot to operate the drone legally. Some schemes may ask about the pilot; check the guidelines."
      },
      {
        "q": "Can I apply for a subsidy on a second drone?",
        "a": "It depends on the scheme's rules on repeat benefits. Some limit support per beneficiary or per period. Check the guidelines."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/agriculture-drone-with-subsidy/", "/kisan-drone-subsidy/"],
    schema: "WebPage",
    showReviewDate: true,
  },
  {
    slug: "kisan-drone-scheme",
    category: "schemes-training",
    navLabel: "Kisan Drone Scheme",
    summary: "Background to the “Kisan Drone” initiative in India.",
    h1: "Kisan Drone Scheme: Background, Aims and What It Means for Farmers Today",
    seo: {
      title: "Kisan Drone Scheme: Background, Aims & Current Status",
      description:
        "What is the Kisan Drone scheme? Its 2022 launch, aims for crop assessment and spraying, linked schemes and how farmers can benefit today — explained simply.",
      keywords: [
        "Kisan drone scheme",
        "kisan drone yojana",
        "kisan drone launch 2022",
        "PM kisan drone",
        "drone shakti",
        "kisan drone benefits",
      ],
    },
    intro:
      "“Kisan Drone” became a household term in Indian agriculture after the government announced its promotion in 2022. But it is often misunderstood as a single subsidy scheme. In reality it is a broader push to bring drones into farming, supported by several programmes. Here is the background and what it means for you today.",
    quickAnswer:
      "The Kisan Drone initiative was announced in the Union Budget 2022–23 to promote drones for crop assessment, digitisation of land records and spraying of pesticides and nutrients. In February 2022, 100 kisan drones were flagged off across India. It is supported through farm mechanisation schemes, demonstrations, training and initiatives such as Namo Drone Didi, rather than one standalone subsidy.",
    takeaways: [
      "Announced in Budget 2022–23; 100 kisan drones flagged off in February 2022.",
      "Aims: crop assessment, land record digitisation, spraying of pesticides and nutrients.",
      "Implemented through existing schemes, demonstrations and training.",
      "Farmers benefit mainly through wider access to drone services.",
    ],
    sections: [
      {
        heading: "Background",
        body: [
          "In the Union Budget 2022–23, the government announced that Kisan Drones would be promoted for crop assessment, digitisation of land records and spraying of insecticides and nutrients. Soon after, in February 2022, the Prime Minister flagged off 100 kisan drones in different parts of the country to demonstrate drone spraying.",
          "This came alongside wider reforms — the liberalised Drone Rules, 2021, a production-linked incentive scheme for drones and drone components, and the interim approval process for spraying pesticides by drone.",
        ],
      },
      {
        heading: "Aims of the Kisan Drone push",
        list: [
          "Faster, more uniform spraying of pesticides and nutrients",
          "Crop assessment and monitoring from the air",
          "Support for land record digitisation",
          "New rural jobs for drone pilots and service providers",
          "Reduced exposure of farm workers to chemicals",
        ],
      },
      {
        heading: "Linked schemes and programmes",
        table: {
          caption: "How the Kisan Drone push is implemented",
          head: ["Programme", "Role"],
          rows: [
            ["Farm mechanisation (SMAM)", "Support for demonstrations and drone purchases by eligible groups"],
            ["Namo Drone Didi", "Drones for selected women's SHGs to provide services"],
            ["Drone Rules, 2021", "Simpler rules for owning and flying drones"],
            ["SOP for drone spraying", "Safe procedures for pesticide and nutrient application"],
            ["RPTO training", "Certified pilots through DGCA-authorised institutes"],
          ],
        },
      },
      {
        heading: "What it means for farmers today",
        subsections: [
          {
            heading: "Access to services",
            body: [
              "More drone operators — FPOs, CHCs, SHGs and entrepreneurs — now offer spraying in many districts. Most farmers benefit by hiring these services.",
            ],
          },
          {
            heading: "Demonstrations",
            body: [
              "KVKs and agricultural institutions have held demonstrations so farmers can see drones at work before deciding.",
            ],
          },
          {
            heading: "Opportunities for youth",
            body: [
              "Young people in villages can train as certified pilots and start drone service businesses, sometimes with scheme support.",
            ],
          },
        ],
      },
      {
        heading: "Common misunderstandings",
        list: [
          "“Every farmer gets a free drone” — not true",
          "“There is one Kisan Drone Yojana with a fixed subsidy” — support comes through several schemes with their own rules",
          "“Anyone can fly a drone without training” — a Remote Pilot Certificate is required",
          "“Any pesticide can be sprayed by drone” — only approved products should be used",
        ],
      },
      {
        heading: "How to take part",
        body: [
          "If you are a farmer, start by booking a drone spraying service or attending a demonstration. If you represent an FPO, cooperative or CHC, or you are a young entrepreneur, check the current guidelines for drone purchase support with your state agriculture department and consider certified pilot training.",
        ],
      },
      {
        "heading": "Timeline of key drone policy steps",
        "table": {
          "caption": "Major milestones for drones in Indian agriculture",
          "head": [
            "When",
            "What happened"
          ],
          "rows": [
            [
              "August 2021",
              "Drone Rules, 2021 notified, simplifying ownership and operation"
            ],
            [
              "2021–22",
              "Standard operating procedures issued for drone application of pesticides and nutrients"
            ],
            [
              "February 2022",
              "Kisan Drones announced in the Union Budget; 100 kisan drones flagged off"
            ],
            [
              "2022",
              "Farm mechanisation guidelines updated to support agriculture drones"
            ],
            [
              "November 2023",
              "Namo Drone Didi approved for women's self-help groups"
            ]
          ]
        }
      },
      {
        "heading": "The road ahead",
        "body": [
          "Drone use in Indian agriculture is still growing. As more crops and products get approval for drone application, more pilots are certified and service networks reach smaller towns, drones are likely to become a routine part of crop protection — much like tractors became part of field preparation. Farmers who learn how to use drone services well today will be ready to benefit as the ecosystem matures."
        ]
      },
    ],
    faqs: [
      {
        q: "What is the Kisan Drone scheme?",
        a: "A government push, announced in Budget 2022–23, to promote drones for crop assessment, land record digitisation and spraying, implemented through several schemes and programmes.",
      },
      {
        q: "When was the Kisan Drone initiative launched?",
        a: "It was announced in the Union Budget on 1 February 2022, and 100 kisan drones were flagged off later that month.",
      },
      {
        q: "Do farmers get free drones under the scheme?",
        a: "No. Support is targeted at specific groups and comes with conditions. Most farmers benefit by hiring drone services.",
      },
      {
        q: "Is Kisan Drone a separate subsidy scheme?",
        a: "Not a single standalone scheme. Support comes through farm mechanisation programmes, Namo Drone Didi and state initiatives.",
      },
      {
        q: "How can I benefit from kisan drones?",
        a: "Hire a drone spraying service, attend a demonstration, or — if eligible — apply for purchase support through official channels.",
      },
      {
        q: "Can young people start a drone business under this push?",
        a: "Yes. Training as a certified pilot and starting a service business is one of the intended outcomes, sometimes with scheme support for eligible applicants.",
      },
      {
        q: "Where can I get current information?",
        a: "From the Ministry of Agriculture, your state agriculture department, your district agriculture office or KVK.",
      },
      {
        "q": "What is the difference between Kisan Drone and Namo Drone Didi?",
        "a": "Kisan Drone is the broader push to promote drones in agriculture. Namo Drone Didi is a specific initiative under that broader effort, providing drones to selected women's SHGs."
      },
      {
        "q": "Are kisan drones only used for spraying?",
        "a": "Spraying is the most common use, but the initiative also covers crop assessment and land record digitisation using drones with cameras."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/agriculture-drone-subsidy-in-india/", "/agricultural-drone-in-india/"],
    schema: "WebPage",
    showReviewDate: true,
  },
  {
    slug: "agriculture-drone-training",
    category: "schemes-training",
    navLabel: "Agriculture Drone Training",
    summary: "What agriculture drone training covers and who it is for.",
    h1: "Agriculture Drone Training: Syllabus, Eligibility and How to Choose a Course",
    seo: {
      title: "Agriculture Drone Training: Syllabus, Eligibility & Course",
      description:
        "Agriculture drone training explained: rules, flying, spraying, safety and maintenance, who can join, the Remote Pilot Certificate and how to choose a course.",
      keywords: [
        "Agriculture drone training",
        "agri drone pilot course",
        "drone spraying training",
        "agriculture drone course India",
        "drone training for farmers",
        "kisan drone training",
      ],
    },
    intro:
      "Flying a spraying drone safely and effectively takes more than learning the controls. Agriculture drone training combines the legal Remote Pilot Certificate with practical skills in spraying, mixing, safety and maintenance. Here is what a good course covers, who it is for and how to choose one.",
    quickAnswer:
      "Agriculture drone training usually combines the DGCA Remote Pilot Certificate course at an authorised RPTO with agriculture-specific modules: spray mission planning, nozzle and droplet settings, pesticide safety and the drone spraying SOP, mixing and calibration, battery care and maintenance. Candidates generally need to be at least 18 and to have passed class 10, as per the Drone Rules.",
    takeaways: [
      "The legal requirement is a Remote Pilot Certificate from a DGCA-authorised RPTO.",
      "Agri-specific skills — spraying, calibration, safety — make a pilot job-ready.",
      "Lots of hands-on flying with a real spraying drone is essential.",
      "Check the RPTO's authorisation on DGCA's Digital Sky before paying.",
    ],
    sections: [
      {
        heading: "What is usually taught",
        subsections: [
          {
            heading: "Rules and theory",
            list: [
              "Drone Rules, airspace zones and Digital Sky",
              "Basic aerodynamics, weather and flight planning",
              "Drone categories, registration and safety procedures",
            ],
          },
          {
            heading: "Flying skills",
            list: [
              "Simulator practice",
              "Manual and automatic flight on a training drone",
              "Emergency procedures and safe landing",
            ],
          },
          {
            heading: "Agriculture modules",
            list: [
              "Field survey and spray mission planning",
              "Nozzles, droplet size, swath and flow calibration",
              "Pesticide safety, PPE and the drone spraying SOP",
              "Mixing, tank cleaning and record keeping",
              "Battery care, maintenance and troubleshooting",
            ],
          },
        ],
      },
      {
        heading: "Who it is for",
        list: [
          "Farmers and farm youth who want to spray their own or others' fields",
          "Agri-graduates and rural entrepreneurs starting drone services",
          "FPO, cooperative and CHC staff operating drones",
          "Members of women's SHGs selected for drone initiatives",
          "Agri-input company staff and extension workers",
        ],
      },
      {
        heading: "Eligibility (general)",
        body: [
          "Under the Drone Rules, a remote pilot generally needs to be at least 18 years old and to have passed class 10 or equivalent, and must complete training at a DGCA-authorised RPTO and pass the required test. Medical or other requirements, if any, follow the current rules. Check with the RPTO before enrolling.",
        ],
      },
      {
        heading: "How to choose a good course",
        table: {
          caption: "Checklist for comparing training providers",
          head: ["Check", "Why it matters"],
          rows: [
            ["DGCA authorisation (Digital Sky RPTO list)", "Only authorised RPTOs can lead to a valid RPC"],
            ["Agriculture spraying module", "Job-ready skills beyond basic flying"],
            ["Flying hours per student", "Hands-on practice builds confidence"],
            ["Trainer experience in spraying", "Practical tips from real field work"],
            ["Batch size", "Smaller batches mean more flying time"],
            ["Support after training", "Help with jobs, drone purchase or service set-up"],
          ],
        },
      },
      {
        heading: "Details of our training",
        body: [
          "[Fill only when verified: RPTO authorisation or partner institute, duration, batch size, location, fees.] Duration: [Add the duration.] Call us to know the next batch and requirements.",
        ],
      },
      {
        heading: "After training: building real experience",
        body: [
          "A certificate is the starting point. New pilots gain confidence by working with an experienced operator for a season, starting with simple open fields and gradually moving to complex terrain and crops. Keep a log of flights and jobs; it becomes proof of experience for employers and customers.",
        ],
      },
      {
        "heading": "A typical training journey",
        "body": [
          "Most trainees begin with classroom sessions on rules, airspace and safety, then move to simulator practice to build stick skills without risk. Supervised flying follows on a training drone, starting with basic manoeuvres and progressing to automatic missions. Agriculture modules then add real spraying practice with water: mapping a field, setting flow and swath, mixing, refilling and cleaning.",
          "Good courses end with a practical assessment in a field-like setting, so trainees leave knowing how a real spraying day works — not just how to pass a test."
        ]
      },
      {
        "heading": "What to bring and prepare",
        "list": [
          "Identity proof and class 10 certificate",
          "Passport-size photographs and Digital Sky registration details if required",
          "Comfortable clothing for outdoor flying sessions",
          "A notebook for checklists and settings"
        ]
      },
      {
        "heading": "Training for FPOs and groups",
        "body": [
          "FPOs, cooperatives and companies can arrange group training for staff or members. Group batches make it easier to build a local team — a couple of certified pilots plus helpers trained in mixing, battery management and maintenance. Ask training providers about group schedules and whether practical sessions can be held on crops similar to yours."
        ]
      },
    ],
    faqs: [
      {
        q: "What is taught in agriculture drone training?",
        a: "Drone rules, flying skills and agriculture modules such as spray planning, calibration, pesticide safety, mixing and maintenance.",
      },
      {
        q: "Who can join agriculture drone training?",
        a: "Generally anyone aged 18 or above who has passed class 10, subject to current rules and the RPTO's requirements.",
      },
      {
        q: "Is a Remote Pilot Certificate required for agriculture drones?",
        a: "Yes, for commercial operation of agriculture spraying drones, the pilot needs an RPC from a DGCA-authorised RPTO.",
      },
      {
        q: "How long does agriculture drone training take?",
        a: "It varies by RPTO and course. Ask the institute for the duration of both the RPC course and any agriculture module.",
      },
      {
        q: "Can farmers do drone training?",
        a: "Yes. Many farmers and farm youth train to spray their own fields or start services for others.",
      },
      {
        q: "How do I check if an RPTO is authorised?",
        a: "Check the list of authorised RPTOs on DGCA's Digital Sky platform.",
      },
      {
        q: "How do I ask about your training?",
        a: "Call or WhatsApp 8282802150 for batch details and requirements.",
      },
      {
        "q": "Is there practical spraying in the training?",
        "a": "Good agriculture courses include practical spraying with water on a real spraying drone. Ask the institute how many hands-on flying hours each trainee gets."
      },
      {
        "q": "Do I need to own a drone to take training?",
        "a": "No. The training organisation provides drones for practice. You only need a drone later if you plan to operate on your own."
      },
      {
        "q": "Will training help me find a job?",
        "a": "Certification plus practical spraying skills makes you employable with service providers, FPOs and agri-businesses. Ask the institute whether it offers placement support or industry contacts."
      },
    ],
    cta: { topic: "training", label: "Ask about drone training" },
    related: ["/drone-pilot-training-for-agriculture/", "/how-to-become-agricultural-drone-pilot/"],
    schema: "Service",
  },
  {
    slug: "drone-pilot-training-for-agriculture",
    category: "schemes-training",
    navLabel: "Drone Pilot Training for Agriculture",
    summary: "Information on the Remote Pilot Certificate and RPTO training.",
    h1: "Drone Pilot Training for Agriculture: Getting Your Remote Pilot Certificate",
    seo: {
      title: "Drone Pilot Training for Agriculture: RPC & RPTO Guide",
      description:
        "How to get a Remote Pilot Certificate for agriculture drones — eligibility, choosing a DGCA-authorised RPTO, the training and test, and what comes next.",
      keywords: [
        "Drone pilot training for agriculture",
        "remote pilot certificate",
        "RPTO India",
        "DGCA drone pilot licence",
        "agri drone pilot certificate",
        "drone pilot course fees",
      ],
    },
    intro:
      "To fly an agriculture drone commercially in India, you need a Remote Pilot Certificate (RPC). It replaced the older idea of a “drone licence” and is issued through DGCA's Digital Sky platform after training at an authorised Remote Pilot Training Organisation (RPTO). Here is how the process works.",
    quickAnswer:
      "To become a certified agriculture drone pilot in India, enrol at a DGCA-authorised Remote Pilot Training Organisation (RPTO), complete the theory and practical training for the relevant drone category, pass the test, and receive your Remote Pilot Certificate through Digital Sky. Eligibility generally requires being at least 18 and having passed class 10.",
    takeaways: [
      "The RPC is issued via Digital Sky after training at an authorised RPTO.",
      "Training covers theory, simulator and practical flying.",
      "Choose an RPTO with agriculture spraying experience.",
      "Keep your certificate and flight records ready for customers and employers.",
    ],
    sections: [
      {
        heading: "Eligibility (general)",
        list: [
          "Minimum age of 18 years (and an upper age limit as per rules)",
          "Class 10 pass or equivalent",
          "Completion of training at a DGCA-authorised RPTO",
          "Passing the test conducted by the RPTO",
        ],
        note: "Requirements follow the current Drone Rules. Confirm with the RPTO before enrolling.",
      },
      {
        heading: "The RPC process step by step",
        subsections: [
          {
            heading: "1. Register on Digital Sky",
            body: ["Create your profile on DGCA's Digital Sky platform as required by the RPTO."],
          },
          {
            heading: "2. Enrol at an authorised RPTO",
            body: ["Choose an institute from the authorised list and select the course for the drone category you will fly."],
          },
          {
            heading: "3. Theory and simulator",
            body: ["Learn rules, airspace, weather, flight planning and emergency procedures, and practise on a simulator."],
          },
          {
            heading: "4. Practical flying",
            body: ["Fly under supervision until you can perform the required manoeuvres safely."],
          },
          {
            heading: "5. Test and certificate",
            body: ["Pass the test, after which the RPC is issued through Digital Sky."],
          },
        ],
      },
      {
        heading: "How to choose the right RPTO",
        list: [
          "Confirm it appears on DGCA's authorised RPTO list",
          "Ask if the course covers the drone category used for spraying",
          "Check whether an agriculture spraying module is included",
          "Ask how many flying hours each student gets",
          "Compare fees, location, batch dates and accommodation",
          "Talk to past students about their experience",
        ],
      },
      {
        heading: "RPC course vs agriculture spraying training",
        table: {
          caption: "Both matter for a job-ready agri pilot",
          head: ["Point", "RPC course", "Agriculture module"],
          rows: [
            ["Purpose", "Legal certification to fly", "Practical spraying skills"],
            ["Content", "Rules, flying, safety", "Calibration, mixing, SOP, crop knowledge"],
            ["Required by law", "Yes", "Not separately, but strongly recommended"],
          ],
        },
      },
      {
        heading: "Our training details",
        body: ["[Fill only when verified.] Call us for current batch information."],
      },
      {
        heading: "Career paths after certification",
        body: [
          "Certified agriculture drone pilots work with drone service companies, FPOs, cooperatives, Custom Hiring Centres and agri-input companies, or start their own spraying business. Demand is seasonal, so many pilots combine spraying with mapping, survey or maintenance work. Building a reputation for safe, careful spraying is the best way to grow.",
        ],
      },
      {
        "heading": "Preparing for the RPC test",
        "list": [
          "Revise drone rules, airspace zones and Digital Sky procedures",
          "Practise pre-flight checks until they become automatic",
          "Spend extra simulator time on emergency procedures",
          "Learn to read weather — wind, temperature and visibility",
          "Ask instructors for feedback after every practical session"
        ],
        "body": [
          "Most trainees who fail do so because of rushed checks or nervous flying, not lack of knowledge. Calm, methodical practice is the best preparation."
        ]
      },
      {
        "heading": "Responsibilities of a certified pilot",
        "body": [
          "With the certificate comes responsibility. A remote pilot must fly only registered drones, respect airspace zones, keep people safe, follow the spraying SOP and maintain records. Customers and employers will expect to see your certificate, so keep a copy handy on your phone."
        ]
      },
      {
        "heading": "Costs to budget for training",
        "list": [
          "Course fee at the RPTO",
          "Travel and accommodation if the institute is far away",
          "Time away from work during the course",
          "Any additional agriculture spraying module"
        ],
        "body": [
          "Compare total cost, not just the course fee. A slightly more expensive course with more flying hours and agriculture practice can be better value if it makes you job-ready faster."
        ]
      },
      {
        "heading": "After you get your certificate",
        "list": [
          "Keep your certificate and Digital Sky details safe and accessible",
          "Fly only registered drones of a certified type",
          "Join an experienced operator for supervised field work",
          "Keep a personal logbook of flights and jobs",
          "Stay updated on rule changes and new product approvals"
        ]
      },
    ],
    faqs: [
      {
        q: "Is a drone pilot licence needed for agriculture drones?",
        a: "Yes, in the form of a Remote Pilot Certificate from a DGCA-authorised RPTO, for commercial agriculture drone operations.",
      },
      {
        q: "What is an RPTO?",
        a: "A Remote Pilot Training Organisation authorised by DGCA to train and test drone pilots.",
      },
      {
        q: "How much does drone pilot training cost?",
        a: "Fees vary by RPTO, course and location. Ask several authorised institutes for current fees.",
      },
      {
        q: "Can I train for agriculture drones without a degree?",
        a: "Yes. The general educational requirement is class 10 pass, as per the Drone Rules.",
      },
      {
        q: "Is the RPC enough to start spraying?",
        a: "It is the legal requirement, but practical agriculture spraying training and supervised field experience are strongly recommended.",
      },
      {
        q: "Where can I find authorised RPTOs?",
        a: "On DGCA's Digital Sky platform, which publishes the list of authorised RPTOs.",
      },
      {
        q: "Can women train as agriculture drone pilots?",
        a: "Yes. Women pilots are increasingly active, including through initiatives for women's self-help groups.",
      },
      {
        "q": "Can I fly any drone with my RPC?",
        "a": "The certificate relates to the drone category and class you trained for. Confirm with your RPTO that your training matches the agriculture drone you plan to fly."
      },
      {
        "q": "Is the training conducted in Hindi or regional languages?",
        "a": "Many RPTOs offer instruction in Hindi and some regional languages. Ask the institute about the medium of instruction before enrolling."
      },
      {
        "q": "What happens if I fail the RPC test?",
        "a": "RPTOs generally allow a retest after further practice. Ask about the retest policy and any additional fees before enrolling."
      },
    ],
    cta: { topic: "training", label: "Ask about pilot training" },
    related: ["/agriculture-drone-training/", "/how-to-become-agricultural-drone-pilot/"],
    schema: "WebPage",
  },
  {
    slug: "drone-didi-scheme",
    category: "schemes-training",
    navLabel: "Drone Didi Scheme",
    summary: "The drone initiative for women's self-help groups.",
    h1: "Namo Drone Didi Scheme: Agriculture Drones for Women's Self-Help Groups",
    seo: {
      title: "Namo Drone Didi Scheme: Aims, Selection & Benefits",
      description:
        "Namo Drone Didi explained — drones for women's SHGs, how selection works, training as drone pilots, services offered to farmers and where to verify details.",
      keywords: [
        "Drone Didi scheme",
        "Namo Drone Didi",
        "drone didi yojana",
        "drones for women SHG",
        "drone sakhi",
        "women drone pilot agriculture",
      ],
    },
    intro:
      "The Namo Drone Didi initiative puts agriculture drones in the hands of women's self-help groups, so they can provide spraying services to farmers and earn an income. It combines drones with training and support. Here is what the initiative aims to do and how selection and participation generally work.",
    quickAnswer:
      "Namo Drone Didi is a central initiative, approved by the Union Cabinet in November 2023, to provide agriculture drones to selected women's self-help groups. SHG members are trained as drone pilots and assistants, and the groups offer drone services — such as nutrient and pesticide application — to farmers on a rental basis. Selection is done by the implementing agencies, not through open individual applications.",
    takeaways: [
      "Targets selected women's SHGs, not individual applicants.",
      "SHG members are trained as drone pilots and assistants.",
      "SHGs earn by offering drone services to farmers.",
      "Verify details with official sources — beware of fake application links.",
    ],
    sections: [
      {
        heading: "Aims of the scheme",
        list: [
          "Empower rural women with technology and skills",
          "Create a sustainable income for SHGs through drone services",
          "Make drone spraying more accessible to farmers",
          "Promote efficient use of fertilisers and pesticides",
        ],
      },
      {
        heading: "Selection and participation",
        body: [
          "Selection of SHGs is carried out through the designated implementing agencies, working with state rural livelihood missions and other partners. Groups in areas where drone use is economically viable are generally prioritised. Individuals do not usually apply directly through an open portal.",
        ],
        subsections: [
          {
            heading: "Training",
            body: [
              "Selected SHG members receive training as drone pilots and drone assistants, including the Remote Pilot Certificate course and agriculture spraying skills.",
            ],
          },
          {
            heading: "Support",
            body: [
              "The package includes the drone and related equipment, with support for operations. Exact components and financial terms are set by the scheme guidelines.",
            ],
          },
        ],
      },
      {
        heading: "Benefit for farmers",
        body: [
          "For farmers, Drone Didi means a trained drone operator closer to the village. Farmers can hire SHG drone services for spraying nutrients and pesticides, often during critical crop stages when timely application matters most.",
        ],
      },
      {
        heading: "How SHGs can prepare",
        list: [
          "Stay in touch with your block or district rural livelihood mission office",
          "Identify members interested in training as pilots or assistants",
          "Understand local demand for drone spraying by crop and season",
          "Keep group records, bank accounts and registrations up to date",
        ],
      },
      {
        heading: "Beware of fake links",
        body: [
          "Fraudulent websites and messages sometimes claim to offer “Drone Didi registration” for a fee. Selection is done through official agencies. Do not pay anyone or share personal and bank details on unofficial links. [Write this only if there is a verified link.]",
        ],
      },
      {
        heading: "Running a successful SHG drone service",
        table: {
          caption: "Practical success factors",
          head: ["Factor", "Why it matters"],
          rows: [
            ["Booking planning", "Group bookings by crop and stage reduce travel"],
            ["Maintenance", "Daily cleaning and checks prevent breakdowns"],
            ["Battery care", "Protects a major running cost"],
            ["Records", "Track acres, income and expenses for the group"],
            ["Safety", "PPE, buffer zones and SOP build farmer trust"],
          ],
        },
      },
      {
        "heading": "Why women's SHGs are a good fit for drone services",
        "body": [
          "Self-help groups already have strong roots in villages, established bank accounts and experience in running small enterprises. They know local farmers personally, which builds trust for a new service like drone spraying. A group structure also helps share tasks — one member flies, another manages bookings, another handles mixing and accounts.",
          "Drone services can also be combined with other SHG activities, giving members a new source of income during peak crop seasons."
        ]
      },
      {
        "heading": "Challenges and how groups overcome them",
        "list": [
          "Seasonal demand: plan bookings early and offer services across crops",
          "Maintenance: keep a trained member responsible for daily checks",
          "Battery and charging: arrange reliable power at the field",
          "Farmer awareness: hold small demonstrations in the village"
        ]
      },
      {
        "heading": "Impact on rural women and farming",
        "body": [
          "Drone Didi links two goals: better crop protection for farmers and new income and skills for rural women. Women pilots operating high-tech equipment also change perceptions of who can work with technology in agriculture. For farmers, a trusted local service makes timely spraying easier during critical crop stages."
        ]
      },
    ],
    faqs: [
      {
        q: "What is the Namo Drone Didi scheme?",
        a: "A central initiative to provide agriculture drones to selected women's self-help groups so they can offer drone services to farmers.",
      },
      {
        q: "When was Namo Drone Didi approved?",
        a: "The Union Cabinet approved it in November 2023.",
      },
      {
        q: "Can an individual woman apply for Drone Didi?",
        a: "Selection is of SHGs through implementing agencies, not open individual applications. Contact your rural livelihood mission office for information.",
      },
      {
        q: "What training do Drone Didis receive?",
        a: "Selected members are trained as drone pilots and assistants, including certified pilot training and agriculture spraying skills.",
      },
      {
        q: "How do Drone Didis earn money?",
        a: "By offering drone spraying and related services to farmers on a rental or per-acre basis.",
      },
      {
        q: "How can farmers hire a Drone Didi?",
        a: "Ask your local SHG, block office or rural livelihood mission whether a Drone Didi service operates in your area.",
      },
      {
        q: "Is there an online registration for Drone Didi?",
        a: "Be cautious of websites claiming open registration for a fee. Verify with official agencies before sharing any details.",
      },
      {
        "q": "What services can Drone Didis provide?",
        "a": "Mainly spraying of nutrients and pesticides approved for drone use, and in some cases other agricultural drone services, depending on training and equipment."
      },
      {
        "q": "Who maintains the drone in a Drone Didi group?",
        "a": "Usually a trained member handles daily care, with support arranged through the scheme or supplier for repairs and servicing."
      },
      {
        "q": "Does a Drone Didi need a pilot certificate?",
        "a": "Yes. Members who fly the drone are trained to obtain the Remote Pilot Certificate, as required for agriculture drone operations."
      },
      {
        "q": "Where can I verify Drone Didi information?",
        "a": "From the Ministry of Agriculture and Farmers Welfare, your state rural livelihood mission or the district agriculture office."
      },
    ],
    cta: { topic: "scheme", label: "Ask about drone schemes" },
    related: ["/agriculture-drone-training/", "/agriculture-drone-subsidy-in-india/"],
    schema: "WebPage",
    showReviewDate: true,
  },
  {
    slug: "how-to-become-agricultural-drone-pilot",
    category: "schemes-training",
    navLabel: "How to Become a Drone Pilot",
    summary: "A step-by-step path to becoming an agricultural drone pilot.",
    h1: "How to Become an Agricultural Drone Pilot in India: 6 Steps to Your First Job",
    seo: {
      title: "How to Become an Agricultural Drone Pilot: 6 Steps",
      description:
        "Step-by-step guide to becoming an agricultural drone pilot in India — eligibility, RPTO training, RPC, spraying skills, first job and starting a service.",
      keywords: [
        "How to become agricultural drone pilot",
        "agriculture drone pilot career",
        "drone pilot job India",
        "drone pilot salary agriculture",
        "start drone spraying business",
        "become a drone pilot after 10th",
      ],
    },
    intro:
      "Agricultural drone pilots are in growing demand as more farmers, FPOs and companies adopt drone spraying. The path is clear and open to anyone who meets the basic eligibility, including farm youth with no college degree. Here are the six steps from interest to your first paid job — and what it takes to run your own service.",
    quickAnswer:
      "To become an agricultural drone pilot in India: check eligibility (generally 18+ and class 10 pass), choose a DGCA-authorised RPTO, complete training and the test to get your Remote Pilot Certificate, learn agriculture spraying skills, gain supervised field experience, and then join a drone service provider or start your own spraying business with a registered drone.",
    takeaways: [
      "No degree required — class 10 pass is the general minimum.",
      "The RPC from an authorised RPTO is the legal foundation.",
      "Spraying skills and field experience make you employable.",
      "A service business needs demand, a drone, batteries, insurance and a vehicle.",
    ],
    sections: [
      {
        heading: "6 steps to becoming an agricultural drone pilot",
        subsections: [
          {
            heading: "1. Check eligibility",
            body: ["Generally at least 18 years old and class 10 pass, as per the Drone Rules."],
          },
          {
            heading: "2. Choose an authorised RPTO",
            body: ["Pick a DGCA-authorised institute with agriculture experience and good flying hours per student."],
          },
          {
            heading: "3. Get your Remote Pilot Certificate",
            body: ["Complete theory, simulator and practical training, pass the test and receive the RPC through Digital Sky."],
          },
          {
            heading: "4. Learn agriculture spraying",
            body: ["Master mission planning, calibration, mixing, pesticide safety and the drone spraying SOP."],
          },
          {
            heading: "5. Gain field experience",
            body: ["Work alongside an experienced operator for a season on different crops and terrain."],
          },
          {
            heading: "6. Get a job or start a service",
            body: ["Join a service company, FPO or agri-business, or start your own spraying service."],
          },
        ],
      },
      {
        heading: "Skills that make a great agri drone pilot",
        list: [
          "Safe, calm flying and good judgement in changing weather",
          "Understanding of crops, pests and spray timing",
          "Accurate mixing and calibration",
          "Basic maintenance and troubleshooting",
          "Clear communication with farmers",
          "Record keeping and planning",
        ],
      },
      {
        heading: "Where agricultural drone pilots work",
        table: {
          caption: "Common employers and work types",
          head: ["Employer", "Typical work"],
          rows: [
            ["Drone service companies", "Spraying across many farms and districts"],
            ["FPOs and cooperatives", "Services for member farmers"],
            ["Custom Hiring Centres", "Renting drones with operators"],
            ["Agri-input companies", "Demonstrations and product application"],
            ["Self-employed", "Own spraying business"],
          ],
        },
      },
      {
        heading: "Before starting a drone service",
        list: [
          "Estimate local demand by crop, season and acreage",
          "Arrange a registered, type-certified drone and enough battery sets",
          "Get insurance and keep all documents ready",
          "Plan a vehicle, generator and water supply",
          "Set fair, clear rates and a booking system",
          "Explore scheme support if you are eligible",
        ],
      },
      {
        heading: "Earning potential — an honest view",
        body: [
          "Income depends on the season, local demand, how many acres you can book and your costs. Spraying work is seasonal, peaking in kharif and rabi. Pilots who combine spraying with mapping, maintenance or training, and who build a reputation for reliable service, tend to find steadier work. We do not quote salary figures because they vary widely by region and employer.",
        ],
      },
      {
        "heading": "A first season plan for new pilots",
        "body": [
          "Your first season sets your reputation. Start with open, simple fields close to home, and take on complex crops and terrain gradually. Keep a checklist for every job: field survey, product check, weather check, settings, neighbours informed, spray record.",
          "Ask satisfied farmers to recommend you to others, and collect their feedback. By the end of the season you will have experience, a client list and real numbers to decide your next step — whether that is a full-time job, a second drone or a bigger service area."
        ]
      },
      {
        "heading": "Common mistakes new pilots make",
        "list": [
          "Skipping the field survey and missing wires or poles",
          "Spraying in rising wind to finish quickly",
          "Guessing the mix instead of measuring",
          "Not cleaning the system, causing blocked nozzles the next day",
          "Poor battery handling that shortens battery life"
        ]
      },
    ],
    faqs: [
      {
        q: "Can I become a drone pilot after 10th?",
        a: "Yes. Class 10 pass is the general educational requirement under the Drone Rules, along with being at least 18.",
      },
      {
        q: "How long does it take to become an agricultural drone pilot?",
        a: "RPC training takes a few days to weeks depending on the RPTO and course. Becoming truly job-ready usually takes a season of field experience.",
      },
      {
        q: "What is the salary of an agriculture drone pilot?",
        a: "It varies by region, employer, season and experience. Ask local service providers and FPOs about current rates.",
      },
      {
        q: "Do I need my own drone to work as a pilot?",
        a: "No. Many pilots work for service companies, FPOs or CHCs that own the drones.",
      },
      {
        q: "Is drone piloting a good career in agriculture?",
        a: "Demand is growing, but it is seasonal. Combining spraying with other drone work makes it more stable.",
      },
      {
        q: "What does it cost to start a drone spraying business?",
        a: "Costs include the drone package, batteries, generator, vehicle, insurance and training. Call 8282802150 for a quote and guidance.",
      },
      {
        q: "Can women become agricultural drone pilots?",
        a: "Yes. Women pilots are increasingly active, including through initiatives for women's SHGs.",
      },
      {
        "q": "Do I need to know farming to become an agri drone pilot?",
        "a": "Basic knowledge of crops, pests and spray timing helps a lot. Many good pilots come from farming families, and training covers essential agricultural knowledge."
      },
      {
        "q": "Is drone piloting physically demanding?",
        "a": "Spraying days start early and involve outdoor work, lifting batteries and water, and moving between fields. Reasonable fitness helps, along with care in hot weather."
      },
      {
        "q": "Can I do drone piloting alongside farming?",
        "a": "Yes. Many farmers fly drones during spraying seasons and focus on their own farm the rest of the time."
      },
      {
        "q": "Which crops should a new pilot start with?",
        "a": "Open, uniform fields such as wheat or paddy are easier to begin with. Orchards, sugarcane and hilly fields need more experience."
      },
    ],
    cta: { topic: "training", label: "Ask about pilot training" },
    related: ["/drone-pilot-training-for-agriculture/", "/drone-didi-scheme/", "/agricultural-drone-in-india/"],
    schema: "WebPage",
  },
];
