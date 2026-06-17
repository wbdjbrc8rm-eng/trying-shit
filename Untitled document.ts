// ============================================================
// Sunward Plant Database — Master Schema
// ============================================================

export interface PlantProfile {
  id: string;
  commonName: string;
  category: string;
  lifecycle: "annual" | "biennial" | "perennial";
  sunlight: {
    idealHours: number;
    minimumHours: number;
  };
  water: {
    weeklyInches: number;
    droughtTolerance: number; // 1–10
  };
  growth: {
    daysToGermination?: number;
    daysToHarvest?: number;
    maturityClass?: string; // "early" | "mid" | "late"
  };
  soil: {
    preferredPHMin?: number;
    preferredPHMax?: number;
    preferredTypes?: string[];
  };
  yield: {
    low?: number;
    average?: number;
    high?: number;
    unit?: string;
  };
  pests: string[];
  companionPlants: string[];
  avoidNear: string[];
  sunwardModel?: {
    idealDLI: number;              // mol/m²/day
    heatStressThreshold: number;   // °F
    waterStressSensitivity: number; // 1–10
    rootDepthInches: number;
    nutrientDemand: number;        // 1–10
  };
}

// ============================================================
// Sunward Plant Database — Family Base Templates
// Each base is spread-merged with variety overrides
// ============================================================

// ─── FRUITING VEGETABLES ────────────────────────────────────

export const tomatoBase = {
  category: "fruiting_vegetable",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 75 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 6.8, preferredTypes: ["raised_bed", "loam", "compost"] },
  pests: ["aphids", "hornworm", "early_blight", "late_blight", "whitefly"],
  companionPlants: ["basil", "marigold", "onion", "carrot"],
  avoidNear: ["corn", "fennel", "brassicas"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 7, rootDepthInches: 18, nutrientDemand: 8 }
};

export const pepperBase = {
  category: "fruiting_vegetable",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 10, daysToHarvest: 70 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 6.8, preferredTypes: ["loam", "raised_bed", "compost"] },
  pests: ["aphids", "spider_mites", "bacterial_spot", "anthracnose"],
  companionPlants: ["basil", "tomato", "carrot", "parsley"],
  avoidNear: ["fennel", "brassicas"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 95, waterStressSensitivity: 6, rootDepthInches: 12, nutrientDemand: 7 }
};

export const eggplantBase = {
  category: "fruiting_vegetable",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 10, daysToHarvest: 80 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "sandy_loam", "raised_bed"] },
  pests: ["flea_beetle", "spider_mites", "aphids", "Colorado_potato_beetle"],
  companionPlants: ["basil", "pepper", "marigold"],
  avoidNear: ["fennel"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 95, waterStressSensitivity: 6, rootDepthInches: 12, nutrientDemand: 7 }
};

export const okraBase = {
  category: "fruiting_vegetable",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 7 },
  growth: { daysToGermination: 7, daysToHarvest: 55 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 6.8, preferredTypes: ["loam", "clay_loam"] },
  pests: ["aphids", "corn_earworm", "stink_bug", "whitefly"],
  companionPlants: ["pepper", "basil", "sunflower"],
  avoidNear: [],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 100, waterStressSensitivity: 4, rootDepthInches: 18, nutrientDemand: 6 }
};

export const tomatilloBase = {
  category: "fruiting_vegetable",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 6 },
  growth: { daysToGermination: 7, daysToHarvest: 75 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.0, preferredTypes: ["loam", "raised_bed"] },
  pests: ["aphids", "flea_beetle", "hornworm"],
  companionPlants: ["basil", "marigold", "pepper"],
  avoidNear: ["fennel"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 12, nutrientDemand: 6 }
};

export const groundCherryBase = {
  ...tomatilloBase,
  growth: { daysToGermination: 7, daysToHarvest: 70 },
  sunwardModel: { idealDLI: 18, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 10, nutrientDemand: 5 }
};

// ─── CUCURBITS ───────────────────────────────────────────────

export const cucumberBase = {
  category: "cucurbit",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 3 },
  growth: { daysToGermination: 7, daysToHarvest: 55 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam", "raised_bed"] },
  pests: ["cucumber_beetle", "aphids", "powdery_mildew", "mosaic_virus"],
  companionPlants: ["beans", "radish", "marigold", "dill"],
  avoidNear: ["sage", "potato"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 90, waterStressSensitivity: 8, rootDepthInches: 12, nutrientDemand: 6 }
};

export const watermelonBase = {
  category: "cucurbit",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 5 },
  growth: { daysToGermination: 7, daysToHarvest: 85 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["sandy_loam", "loam"] },
  pests: ["cucumber_beetle", "aphids", "vine_borer", "fusarium_wilt"],
  companionPlants: ["nasturtium", "radish", "marigold"],
  avoidNear: ["potato"],
  sunwardModel: { idealDLI: 25, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 7 }
};

export const cantaloupeBase = {
  ...watermelonBase,
  growth: { daysToGermination: 7, daysToHarvest: 80 },
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 7 }
};

export const honeydewBase = {
  ...watermelonBase,
  growth: { daysToGermination: 7, daysToHarvest: 90 }
};

export const pumpkinBase = {
  category: "cucurbit",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 100 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["squash_vine_borer", "powdery_mildew", "cucumber_beetle", "aphids"],
  companionPlants: ["corn", "beans", "nasturtium"],
  avoidNear: ["potato"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 24, nutrientDemand: 7 }
};

export const winterSquashBase = {
  ...pumpkinBase,
  growth: { daysToGermination: 7, daysToHarvest: 95 }
};

export const summerSquashBase = {
  category: "cucurbit",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 50 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "raised_bed"] },
  pests: ["squash_vine_borer", "powdery_mildew", "squash_bug", "aphids"],
  companionPlants: ["nasturtium", "marigold", "beans"],
  avoidNear: ["potato"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 90, waterStressSensitivity: 6, rootDepthInches: 12, nutrientDemand: 7 }
};

export const luffaBase = {
  ...summerSquashBase,
  growth: { daysToGermination: 10, daysToHarvest: 90 },
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 6 }
};

export const bottleGourdBase = { ...luffaBase };
export const snakeGourdBase = { ...luffaBase };

export const bitterMelonBase = {
  ...luffaBase,
  sunwardModel: { idealDLI: 22, heatStressThreshold: 100, waterStressSensitivity: 4, rootDepthInches: 18, nutrientDemand: 5 }
};

export const chayoteBase = {
  category: "cucurbit",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 6 },
  growth: { daysToHarvest: 120 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids", "spider_mites"],
  companionPlants: ["beans", "corn"],
  avoidNear: [],
  sunwardModel: { idealDLI: 18, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 18, nutrientDemand: 5 }
};

// ─── LEAFY GREENS ────────────────────────────────────────────

export const lettuceBase = {
  category: "leafy_green",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 2 },
  growth: { daysToGermination: 5, daysToHarvest: 45 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "raised_bed", "compost"] },
  pests: ["aphids", "slugs", "leaf_miners", "downy_mildew"],
  companionPlants: ["radish", "carrot", "strawberry", "chives"],
  avoidNear: ["fennel"],
  sunwardModel: { idealDLI: 12, heatStressThreshold: 80, waterStressSensitivity: 8, rootDepthInches: 8, nutrientDemand: 4 }
};

export const kaleBase = {
  category: "leafy_green",
  lifecycle: "biennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 5, daysToHarvest: 55 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "clay_loam", "raised_bed"] },
  pests: ["aphids", "cabbage_worm", "flea_beetle", "slugs"],
  companionPlants: ["beets", "celery", "herbs", "onion"],
  avoidNear: ["strawberry", "tomato"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 85, waterStressSensitivity: 5, rootDepthInches: 12, nutrientDemand: 5 }
};

export const spinachBase = {
  category: "leafy_green",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 7, daysToHarvest: 40 },
  soil: { preferredPHMin: 6.5, preferredPHMax: 7.5, preferredTypes: ["loam", "raised_bed", "compost"] },
  pests: ["aphids", "leaf_miners", "downy_mildew"],
  companionPlants: ["strawberry", "peas", "radish"],
  avoidNear: ["fennel"],
  sunwardModel: { idealDLI: 12, heatStressThreshold: 75, waterStressSensitivity: 7, rootDepthInches: 6, nutrientDemand: 4 }
};

export const swissChardBase = {
  ...spinachBase,
  lifecycle: "biennial" as const,
  growth: { daysToGermination: 7, daysToHarvest: 50 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "raised_bed"] },
  sunwardModel: { idealDLI: 14, heatStressThreshold: 85, waterStressSensitivity: 6, rootDepthInches: 8, nutrientDemand: 5 }
};

export const arugulaBase = {
  ...lettuceBase,
  growth: { daysToGermination: 5, daysToHarvest: 30 },
  sunwardModel: { idealDLI: 10, heatStressThreshold: 75, waterStressSensitivity: 7, rootDepthInches: 6, nutrientDemand: 3 }
};

export const collardBase = { ...kaleBase, growth: { daysToGermination: 5, daysToHarvest: 60 } };
export const mustardGreensBase = { ...kaleBase, growth: { daysToGermination: 5, daysToHarvest: 40 } };
export const endiveBase = { ...lettuceBase, growth: { daysToGermination: 7, daysToHarvest: 90 } };
export const escaroleBase = { ...endiveBase };

export const sorrelBase = {
  category: "leafy_green",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 7, daysToHarvest: 60 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam"] },
  pests: ["aphids", "slugs"],
  companionPlants: ["strawberry"],
  avoidNear: [],
  sunwardModel: { idealDLI: 12, heatStressThreshold: 80, waterStressSensitivity: 5, rootDepthInches: 8, nutrientDemand: 3 }
};

export const macheBase = { ...lettuceBase, growth: { daysToGermination: 10, daysToHarvest: 45 } };
export const tatsoiBase = { ...kaleBase, growth: { daysToGermination: 5, daysToHarvest: 45 } };
export const mizunaBase = { ...tatsoiBase };

export const malabarSpinachBase = {
  ...spinachBase,
  lifecycle: "annual" as const,
  growth: { daysToGermination: 10, daysToHarvest: 70 },
  sunwardModel: { idealDLI: 18, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 10, nutrientDemand: 4 }
};

export const newZealandSpinachBase = {
  ...spinachBase,
  water: { weeklyInches: 0.75, droughtTolerance: 6 },
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 8, nutrientDemand: 4 }
};

// ─── TOMATO VARIETIES ────────────────────────────────────────

export const romaTomato = {
  ...tomatoBase,
  id: "tomato_roma",
  commonName: "Roma Tomato",
  growth: { ...tomatoBase.growth, daysToHarvest: 78, maturityClass: "mid" },
  yield: { low: 6, average: 10, high: 15, unit: "lbs_per_plant" }
};

export const beefsteakTomato = {
  ...tomatoBase,
  id: "tomato_beefsteak",
  commonName: "Beefsteak Tomato",
  growth: { ...tomatoBase.growth, daysToHarvest: 85, maturityClass: "late" },
  yield: { low: 8, average: 15, high: 25, unit: "lbs_per_plant" }
};

export const cherryTomato = {
  ...tomatoBase,
  id: "tomato_cherry",
  commonName: "Cherry Tomato",
  growth: { ...tomatoBase.growth, daysToHarvest: 65, maturityClass: "early" },
  yield: { low: 4, average: 8, high: 12, unit: "lbs_per_plant" }
};

export const sanMarzanoTomato = {
  ...tomatoBase,
  id: "tomato_san_marzano",
  commonName: "San Marzano Tomato",
  growth: { ...tomatoBase.growth, daysToHarvest: 80, maturityClass: "mid" },
  yield: { low: 6, average: 10, high: 14, unit: "lbs_per_plant" }
};

export const grapeTomato = {
  ...tomatoBase,
  id: "tomato_grape",
  commonName: "Grape Tomato",
  growth: { ...tomatoBase.growth, daysToHarvest: 70, maturityClass: "mid" },
  yield: { low: 4, average: 7, high: 10, unit: "lbs_per_plant" }
};

// ─── PEPPER VARIETIES ────────────────────────────────────────

export const californiaWonderPepper = {
  ...pepperBase,
  id: "pepper_california_wonder",
  commonName: "California Wonder Pepper",
  growth: { ...pepperBase.growth, daysToHarvest: 75, maturityClass: "mid" },
  yield: { low: 2, average: 4, high: 6, unit: "lbs_per_plant" }
};

export const bellPepper = {
  ...pepperBase,
  id: "pepper_bell",
  commonName: "Bell Pepper",
  growth: { ...pepperBase.growth, daysToHarvest: 70, maturityClass: "mid" },
  yield: { low: 2, average: 4, high: 6, unit: "lbs_per_plant" }
};

export const jalapenoPepper = {
  ...pepperBase,
  id: "pepper_jalapeno",
  commonName: "Jalapeño Pepper",
  growth: { ...pepperBase.growth, daysToHarvest: 75, maturityClass: "mid" },
  yield: { low: 1, average: 3, high: 5, unit: "lbs_per_plant" }
};

// ─── SQUASH VARIETIES ────────────────────────────────────────

export const blackBeautyZucchini = {
  ...summerSquashBase,
  id: "zucchini_black_beauty",
  commonName: "Black Beauty Zucchini",
  growth: { ...summerSquashBase.growth, daysToHarvest: 58, maturityClass: "early" },
  yield: { low: 6, average: 10, high: 15, unit: "lbs_per_plant" }
};

export const butternutSquash = {
  ...winterSquashBase,
  id: "squash_butternut",
  commonName: "Butternut Squash",
  growth: { ...winterSquashBase.growth, daysToHarvest: 110, maturityClass: "mid" },
  yield: { low: 3, average: 5, high: 8, unit: "fruits_per_plant" }
};

export const bitterMelon = {
  ...bitterMelonBase,
  id: "cucurbit_bitter_melon",
  commonName: "Bitter Melon",
  growth: { ...bitterMelonBase.growth, daysToHarvest: 90, maturityClass: "late" },
  yield: { low: 3, average: 6, high: 10, unit: "fruits_per_plant" }
};
