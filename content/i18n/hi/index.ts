import type { ContentPack } from "../types";
import { blogA } from "./blog-a";
import { blogB } from "./blog-b";
import { buyingA } from "./buying-a";
import { buyingB } from "./buying-b";
import { buyingC } from "./buying-c";
import { buyingD } from "./buying-d";
import { categoriesA } from "./categories-a";
import { categoriesB } from "./categories-b";
import { cropsA } from "./crops-a";
import { cropsB } from "./crops-b";
import { cropsC } from "./crops-c";
import { home } from "./home";
import { images } from "./images";
import { links } from "./links";
import { main } from "./main";
import { productsA } from "./products-a";
import { productsB } from "./products-b";
import { productsC } from "./products-c";
import { productsD } from "./products-d";
import { schemesA } from "./schemes-a";
import { schemesB } from "./schemes-b";
import { schemesC } from "./schemes-c";
import { schemesD } from "./schemes-d";
import { sprayingCost } from "./spraying-cost";
import { about, blog, contact } from "./utility";

/** हिन्दी translations. */
export const pack: ContentPack = {
  pages: {
    ...main,
    ...productsA,
    ...productsB,
    ...productsC,
    ...productsD,
    ...buyingA,
    ...buyingB,
    ...buyingC,
    ...buyingD,
    ...schemesA,
    ...schemesB,
    ...schemesC,
    ...schemesD,
    ...cropsA,
    ...cropsB,
    ...cropsC,
    ...sprayingCost,
  },
  categories: { ...categoriesA, ...categoriesB },
  articles: { ...blogA, ...blogB },
  home,
  utility: { about, contact, blog },
  images,
  links,
};
