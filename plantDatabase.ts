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
export const malabarSpinachBase = { ...spinachBase, lifecycle: "annual" as const, growth: { daysToGermination: 10, daysToHarvest: 70 }, sunwardModel: { idealDLI: 18, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 10, nutrientDemand: 4 } };
export const newZealandSpinachBase = { ...spinachBase, water: { weeklyInches: 0.75, droughtTolerance: 6 }, sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 8, nutrientDemand: 4 } };

// ─── BRASSICAS ───────────────────────────────────────────────

export const brassicaBase = {
  category: "brassica",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 5, daysToHarvest: 80 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "clay_loam", "raised_bed"] },
  pests: ["cabbage_worm", "aphids", "flea_beetle", "clubroot", "whitefly"],
  companionPlants: ["dill", "hyssop", "mint", "thyme", "chamomile"],
  avoidNear: ["strawberry", "tomato", "grape"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 80, waterStressSensitivity: 6, rootDepthInches: 12, nutrientDemand: 6 }
};

export const brusselsSproutsBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 110 } };
export const broccoliBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 80 } };
export const cauliflowerBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 80 } };
export const kohlrabiBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 50 } };
export const bokChoyBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 45 } };
export const cabbageBase = { ...brassicaBase, growth: { daysToGermination: 5, daysToHarvest: 70 } };
export const napaCabbageBase = { ...cabbageBase, growth: { daysToGermination: 5, daysToHarvest: 75 } };
export const gaiLanBase = { ...bokChoyBase, growth: { daysToGermination: 5, daysToHarvest: 40 } };
export const romanescoBase = { ...broccoliBase, growth: { daysToGermination: 5, daysToHarvest: 90 } };

// ─── ROOT CROPS ──────────────────────────────────────────────

export const carrotBase = {
  category: "root_crop",
  lifecycle: "biennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 14, daysToHarvest: 70 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 6.8, preferredTypes: ["sandy_loam", "loam", "raised_bed"] },
  pests: ["carrot_fly", "aphids", "leaf_blight", "wireworm"],
  companionPlants: ["onion", "lettuce", "tomato", "rosemary"],
  avoidNear: ["dill", "parsnip"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 80, waterStressSensitivity: 6, rootDepthInches: 12, nutrientDemand: 4 }
};

export const beetBase = {
  category: "root_crop",
  lifecycle: "biennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 60 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["leaf_miners", "aphids", "cercospora_blight"],
  companionPlants: ["onion", "lettuce", "brassicas", "radish"],
  avoidNear: ["pole_beans", "mustard"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 85, waterStressSensitivity: 5, rootDepthInches: 8, nutrientDemand: 4 }
};

export const radishBase = {
  category: "root_crop",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 4, daysToHarvest: 28 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["sandy_loam", "loam"] },
  pests: ["flea_beetle", "aphids", "cabbage_root_fly"],
  companionPlants: ["cucumber", "lettuce", "peas", "nasturtium"],
  avoidNear: ["hyssop"],
  sunwardModel: { idealDLI: 12, heatStressThreshold: 75, waterStressSensitivity: 7, rootDepthInches: 6, nutrientDemand: 3 }
};

export const turnipBase = { ...beetBase, growth: { daysToGermination: 5, daysToHarvest: 50 } };
export const parsnipBase = { ...carrotBase, growth: { daysToGermination: 21, daysToHarvest: 120 } };
export const rutabagaBase = { ...turnipBase, growth: { daysToGermination: 7, daysToHarvest: 90 } };
export const salsifyBase = { ...parsnipBase };
export const celeriacBase = { ...carrotBase, growth: { daysToGermination: 14, daysToHarvest: 110 }, water: { weeklyInches: 1.5, droughtTolerance: 2 } };
export const horseradishBase = {
  category: "root_crop",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 6 },
  growth: { daysToHarvest: 150 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "clay_loam"] },
  pests: ["flea_beetle", "aphids"],
  companionPlants: ["potato"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 85, waterStressSensitivity: 4, rootDepthInches: 24, nutrientDemand: 4 }
};

// ─── ALLIUMS ─────────────────────────────────────────────────

export const onionBase = {
  category: "allium",
  lifecycle: "biennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 10, daysToHarvest: 100 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["onion_thrips", "onion_maggot", "downy_mildew", "botrytis"],
  companionPlants: ["carrot", "beets", "lettuce", "tomato"],
  avoidNear: ["beans", "peas"],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 85, waterStressSensitivity: 6, rootDepthInches: 10, nutrientDemand: 5 }
};

export const greenOnionBase = { ...onionBase, growth: { daysToGermination: 10, daysToHarvest: 60 } };
export const garlicBase = {
  category: "allium",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 14, daysToHarvest: 240 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["onion_thrips", "stem_nematode", "white_rot"],
  companionPlants: ["tomato", "pepper", "carrot", "rose"],
  avoidNear: ["beans", "peas"],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 85, waterStressSensitivity: 5, rootDepthInches: 10, nutrientDemand: 5 }
};

export const leekBase = { ...onionBase, growth: { daysToGermination: 14, daysToHarvest: 120 } };
export const shallotBase = { ...garlicBase, growth: { daysToGermination: 14, daysToHarvest: 100 } };
export const garlicChiveBase = { ...garlicBase, lifecycle: "perennial" as const, growth: { daysToGermination: 10, daysToHarvest: 60 } };

// ─── LEGUMES ─────────────────────────────────────────────────

export const snapBeanBase = {
  category: "legume",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 55 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam", "raised_bed"] },
  pests: ["bean_beetle", "aphids", "white_mold", "bean_mosaic_virus"],
  companionPlants: ["carrot", "cucumber", "radish", "squash", "corn"],
  avoidNear: ["onion", "garlic", "leek", "fennel"],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 85, waterStressSensitivity: 6, rootDepthInches: 8, nutrientDemand: 3 }
};

export const dryBeanBase = { ...snapBeanBase, growth: { daysToGermination: 7, daysToHarvest: 90 } };
export const edamameBase = { ...snapBeanBase, growth: { daysToGermination: 7, daysToHarvest: 75 } };
export const limaBase = { ...snapBeanBase, growth: { daysToGermination: 10, daysToHarvest: 80 } };
export const favaBase = { ...snapBeanBase, growth: { daysToGermination: 7, daysToHarvest: 90 }, sunlight: { idealHours: 6, minimumHours: 4 }, sunwardModel: { idealDLI: 14, heatStressThreshold: 75, waterStressSensitivity: 5, rootDepthInches: 12, nutrientDemand: 3 } };
export const runnerBeanBase = { ...snapBeanBase, growth: { daysToGermination: 10, daysToHarvest: 60 } };
export const yardlongBeanBase = { ...snapBeanBase, growth: { daysToGermination: 7, daysToHarvest: 75 }, sunwardModel: { idealDLI: 20, heatStressThreshold: 95, waterStressSensitivity: 4, rootDepthInches: 10, nutrientDemand: 4 } };
export const cowpeaBase = { ...yardlongBeanBase };
export const blackEyedPeaBase = { ...cowpeaBase };

export const peasBase = {
  category: "legume",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 7, daysToHarvest: 60 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.5, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["pea_aphid", "powdery_mildew", "pea_weevil", "mosaic_virus"],
  companionPlants: ["carrot", "radish", "turnip", "mint"],
  avoidNear: ["onion", "garlic", "leek"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 75, waterStressSensitivity: 6, rootDepthInches: 8, nutrientDemand: 3 }
};

export const peanutBase = {
  category: "legume",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 6 },
  growth: { daysToGermination: 10, daysToHarvest: 130 },
  soil: { preferredPHMin: 5.8, preferredPHMax: 6.2, preferredTypes: ["sandy_loam", "sandy"] },
  pests: ["leaf_spot", "white_mold", "thrips"],
  companionPlants: ["potato", "sunflower"],
  avoidNear: [],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 12, nutrientDemand: 3 }
};

// ─── POTATOES ────────────────────────────────────────────────

export const potatoBase = {
  category: "root_crop",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.5, droughtTolerance: 3 },
  growth: { daysToGermination: 14, daysToHarvest: 80 },
  soil: { preferredPHMin: 5.0, preferredPHMax: 6.5, preferredTypes: ["loam", "sandy_loam", "raised_bed"] },
  pests: ["Colorado_potato_beetle", "aphids", "late_blight", "wireworm", "scab"],
  companionPlants: ["horseradish", "beans", "peas", "marigold"],
  avoidNear: ["tomato", "cucumber", "squash", "sunflower"],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 85, waterStressSensitivity: 7, rootDepthInches: 18, nutrientDemand: 7 }
};

export const sweetPotatoBase = {
  category: "root_crop",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 7 },
  growth: { daysToGermination: 14, daysToHarvest: 100 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["sandy_loam", "loam"] },
  pests: ["sweet_potato_weevil", "wireworm", "root_knot_nematode"],
  companionPlants: ["beans", "thyme", "oregano"],
  avoidNear: ["squash"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 4, rootDepthInches: 12, nutrientDemand: 6 }
};

// ─── CORN ────────────────────────────────────────────────────

export const cornBase = {
  category: "grain",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 75 },
  soil: { preferredPHMin: 5.8, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["corn_earworm", "European_corn_borer", "aphids", "corn_rootworm"],
  companionPlants: ["beans", "squash", "pumpkin"],
  avoidNear: ["tomato"],
  sunwardModel: { idealDLI: 24, heatStressThreshold: 95, waterStressSensitivity: 6, rootDepthInches: 24, nutrientDemand: 9 }
};

// ─── HERBS ───────────────────────────────────────────────────

export const basilBase = {
  category: "herb",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 7, daysToHarvest: 30 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "raised_bed", "compost"] },
  pests: ["aphids", "japanese_beetle", "fusarium_wilt"],
  companionPlants: ["tomato", "pepper", "oregano"],
  avoidNear: ["sage", "thyme"],
  sunwardModel: { idealDLI: 18, heatStressThreshold: 90, waterStressSensitivity: 6, rootDepthInches: 6, nutrientDemand: 4 }
};

export const parsleyBase = {
  category: "herb",
  lifecycle: "biennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 21, daysToHarvest: 70 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "compost"] },
  pests: ["aphids", "carrot_fly", "parsleyworm"],
  companionPlants: ["tomato", "asparagus", "carrot"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 80, waterStressSensitivity: 6, rootDepthInches: 8, nutrientDemand: 4 }
};

export const cilantroBase = {
  category: "herb",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToGermination: 7, daysToHarvest: 45 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["aphids", "whitefly"],
  companionPlants: ["tomato", "pepper", "spinach"],
  avoidNear: ["fennel"],
  sunwardModel: { idealDLI: 12, heatStressThreshold: 75, waterStressSensitivity: 5, rootDepthInches: 6, nutrientDemand: 3 }
};

export const dillBase = {
  ...cilantroBase,
  companionPlants: ["cabbage", "onion", "lettuce"],
  avoidNear: ["tomato", "carrot", "fennel"],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 80, waterStressSensitivity: 5, rootDepthInches: 8, nutrientDemand: 3 }
};

export const oreganoBase = {
  category: "herb",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 0.5, droughtTolerance: 8 },
  growth: { daysToGermination: 10, daysToHarvest: 60 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 8.0, preferredTypes: ["sandy_loam", "loam", "well_drained"] },
  pests: ["aphids", "spider_mites"],
  companionPlants: ["tomato", "pepper", "basil"],
  avoidNear: [],
  sunwardModel: { idealDLI: 18, heatStressThreshold: 95, waterStressSensitivity: 2, rootDepthInches: 6, nutrientDemand: 2 }
};

export const thymeBase = { ...oreganoBase, sunwardModel: { idealDLI: 16, heatStressThreshold: 90, waterStressSensitivity: 2, rootDepthInches: 6, nutrientDemand: 2 } };
export const tarragonBase = { ...oreganoBase, lifecycle: "perennial" as const, water: { weeklyInches: 0.75, droughtTolerance: 6 } };
export const marjoramBase = { ...oreganoBase, lifecycle: "perennial" as const };
export const mintBase = {
  category: "herb",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 4, minimumHours: 2 },
  water: { weeklyInches: 1.5, droughtTolerance: 3 },
  growth: { daysToGermination: 10, daysToHarvest: 60 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "moist"] },
  pests: ["aphids", "spider_mites", "rust"],
  companionPlants: ["tomato", "pepper", "peas"],
  avoidNear: ["chamomile"],
  sunwardModel: { idealDLI: 10, heatStressThreshold: 85, waterStressSensitivity: 5, rootDepthInches: 8, nutrientDemand: 3 }
};

export const lovageBase = { ...parsleyBase, lifecycle: "perennial" as const };
export const lemonBalmBase = { ...mintBase };
export const summerSavoryBase = { ...oreganoBase, lifecycle: "annual" as const };
export const winterSavoryBase = { ...oreganoBase, lifecycle: "perennial" as const };
export const hyssopBase = { ...oreganoBase };
export const steviaBase = { ...basilBase, lifecycle: "perennial" as const };
export const borageBase = {
  category: "herb",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 0.75, droughtTolerance: 7 },
  growth: { daysToGermination: 7, daysToHarvest: 56 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids"],
  companionPlants: ["tomato", "squash", "strawberry"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 85, waterStressSensitivity: 3, rootDepthInches: 8, nutrientDemand: 2 }
};

export const shisoBase = { ...basilBase, lifecycle: "annual" as const };
export const culantroBase = { ...cilantroBase };

// ─── STRAWBERRIES ────────────────────────────────────────────

export const strawberryBase = {
  category: "berry",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToGermination: 21, daysToHarvest: 90 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "sandy_loam", "raised_bed"] },
  pests: ["spider_mites", "gray_mold", "aphids", "slugs", "angular_leaf_spot"],
  companionPlants: ["borage", "spinach", "lettuce", "garlic"],
  avoidNear: ["brassicas", "fennel", "tomato"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 85, waterStressSensitivity: 7, rootDepthInches: 8, nutrientDemand: 5 }
};

// ─── CANE BERRIES ────────────────────────────────────────────

export const raspberryBase = {
  category: "berry",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["spider_mites", "gray_mold", "cane_borer", "aphids", "raspberry_beetle"],
  companionPlants: ["garlic", "marigold", "tansy"],
  avoidNear: ["blackberry", "tomato", "eggplant", "potato"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 85, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 6 }
};

export const blackberryBase = {
  ...raspberryBase,
  pests: ["gray_mold", "cane_blight", "aphids", "spotted_wing_drosophila"],
  avoidNear: ["raspberry", "tomato", "eggplant"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 24, nutrientDemand: 6 }
};

export const blueberryBase = {
  category: "berry",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 3 },
  growth: { daysToHarvest: 730 },
  soil: { preferredPHMin: 4.5, preferredPHMax: 5.5, preferredTypes: ["sandy_loam", "peat", "acidic"] },
  pests: ["mummy_berry", "blueberry_maggot", "aphids", "spotted_wing_drosophila"],
  companionPlants: ["azalea", "rhododendron", "fern", "clover"],
  avoidNear: ["brassicas"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 85, waterStressSensitivity: 6, rootDepthInches: 18, nutrientDemand: 5 }
};

export const mulberryBase = {
  category: "berry",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 0.75, droughtTolerance: 7 },
  growth: { daysToHarvest: 1095 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["scale", "cankers", "bacterial_blight"],
  companionPlants: ["comfrey", "clover"],
  avoidNear: [],
  sunwardModel: { idealDLI: 18, heatStressThreshold: 95, waterStressSensitivity: 3, rootDepthInches: 36, nutrientDemand: 4 }
};

// ─── GRAPES ──────────────────────────────────────────────────

export const grapeBase = {
  category: "vining_fruit",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 6 },
  growth: { daysToHarvest: 1095 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "sandy_loam", "well_drained"] },
  pests: ["grape_berry_moth", "powdery_mildew", "downy_mildew", "phylloxera", "aphids"],
  companionPlants: ["clover", "hyssop", "basil", "oregano"],
  avoidNear: ["cabbage", "radish"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 36, nutrientDemand: 6 }
};

// ─── MELONS ──────────────────────────────────────────────────
export const muskmelonBase = { ...cantaloupeBase };

// ─── FRUIT TREES ─────────────────────────────────────────────

export const appleBase = {
  category: "fruit_tree",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToHarvest: 1095 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["codling_moth", "apple_scab", "fire_blight", "aphids", "cedar_apple_rust"],
  companionPlants: ["clover", "nasturtium", "fennel", "chives"],
  avoidNear: ["potato", "walnut"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 48, nutrientDemand: 6 }
};

export const pearBase = { ...appleBase, pests: ["codling_moth", "fire_blight", "pear_psylla", "aphids"] };
export const peachBase = {
  ...appleBase,
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["sandy_loam", "loam", "well_drained"] },
  pests: ["peach_borer", "brown_rot", "leaf_curl", "aphids"],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 95, waterStressSensitivity: 5, rootDepthInches: 36, nutrientDemand: 6 }
};

export const plumBase = { ...peachBase, pests: ["plum_curculio", "brown_rot", "aphids", "powdery_mildew"] };
export const cherryBase = { ...peachBase, pests: ["cherry_fruit_fly", "brown_rot", "aphids", "bacterial_canker"] };
export const apricotBase = { ...peachBase, pests: ["brown_rot", "aphids", "shot_hole", "cytospora_canker"] };
export const pawpawBase = {
  category: "fruit_tree",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToHarvest: 1825 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["pawpaw_peduncle_borer", "zebra_swallowtail_larvae"],
  companionPlants: ["redbud", "spicebush"],
  avoidNear: [],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 36, nutrientDemand: 4 }
};

// ─── SPECIALTY FRUITS ────────────────────────────────────────

export const figBase = {
  category: "tropical_fruit",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 0.75, droughtTolerance: 8 },
  growth: { daysToHarvest: 730 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 8.0, preferredTypes: ["loam", "sandy_loam", "well_drained"] },
  pests: ["fig_beetle", "rust", "mosaic_virus"],
  companionPlants: ["basil", "marigold"],
  avoidNear: [],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 100, waterStressSensitivity: 3, rootDepthInches: 36, nutrientDemand: 4 }
};

export const dragonFruitBase = {
  category: "tropical_fruit",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 0.5, droughtTolerance: 9 },
  growth: { daysToHarvest: 730 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["sandy_loam", "well_drained"] },
  pests: ["mealybugs", "aphids", "stem_rot"],
  companionPlants: ["lemon_grass", "garlic"],
  avoidNear: [],
  sunwardModel: { idealDLI: 24, heatStressThreshold: 100, waterStressSensitivity: 2, rootDepthInches: 18, nutrientDemand: 4 }
};

// ─── PERENNIAL EDIBLES ───────────────────────────────────────

export const asparagusBase = {
  category: "perennial_edible",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 21, daysToHarvest: 730 },
  soil: { preferredPHMin: 6.5, preferredPHMax: 7.5, preferredTypes: ["sandy_loam", "loam", "well_drained"] },
  pests: ["asparagus_beetle", "crown_rot", "fusarium"],
  companionPlants: ["tomato", "basil", "parsley"],
  avoidNear: ["onion", "garlic", "potato"],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 18, nutrientDemand: 6 }
};

export const rhubarbBase = {
  category: "perennial_edible",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 4 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["crown_rot", "leaf_spot", "slugs"],
  companionPlants: ["garlic", "onion", "roses"],
  avoidNear: ["tomato"],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 80, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 5 }
};

export const artichokeBase = {
  category: "perennial_edible",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToGermination: 14, daysToHarvest: 180 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 8.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids", "artichoke_plume_moth", "slugs"],
  companionPlants: ["tansy", "yarrow", "sunflower"],
  avoidNear: [],
  sunwardModel: { idealDLI: 20, heatStressThreshold: 90, waterStressSensitivity: 5, rootDepthInches: 18, nutrientDemand: 7 }
};

export const jerusalemArtichokeBase = {
  category: "perennial_edible",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 0.75, droughtTolerance: 7 },
  growth: { daysToHarvest: 120 },
  soil: { preferredPHMin: 5.8, preferredPHMax: 7.0, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["sclerotinia", "rust"],
  companionPlants: ["corn", "beans"],
  avoidNear: [],
  sunwardModel: { idealDLI: 18, heatStressThreshold: 90, waterStressSensitivity: 3, rootDepthInches: 24, nutrientDemand: 4 }
};

// ─── SPECIALTY CROPS ─────────────────────────────────────────

export const hopsBase = {
  category: "specialty_crop",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.5, droughtTolerance: 4 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 8.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["downy_mildew", "powdery_mildew", "aphids", "spider_mites"],
  companionPlants: ["chamomile", "yarrow"],
  avoidNear: [],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 85, waterStressSensitivity: 6, rootDepthInches: 36, nutrientDemand: 7 }
};

export const taroBase = {
  category: "specialty_crop",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 2.0, droughtTolerance: 2 },
  growth: { daysToGermination: 21, daysToHarvest: 200 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.0, preferredTypes: ["loam", "moist", "clay"] },
  pests: ["leaf_blight", "aphids", "mites"],
  companionPlants: ["banana", "taro"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 8, rootDepthInches: 12, nutrientDemand: 7 }
};

export const roselleBase = {
  category: "specialty_crop",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 1.0, droughtTolerance: 7 },
  growth: { daysToGermination: 7, daysToHarvest: 150 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 6.5, preferredTypes: ["loam", "sandy_loam"] },
  pests: ["aphids", "root_knot_nematode"],
  companionPlants: ["basil", "okra"],
  avoidNear: [],
  sunwardModel: { idealDLI: 22, heatStressThreshold: 100, waterStressSensitivity: 3, rootDepthInches: 12, nutrientDemand: 5 }
};

export const sesameBase = {
  category: "specialty_crop",
  lifecycle: "annual" as const,
  sunlight: { idealHours: 8, minimumHours: 6 },
  water: { weeklyInches: 0.75, droughtTolerance: 8 },
  growth: { daysToGermination: 7, daysToHarvest: 100 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 8.0, preferredTypes: ["sandy_loam", "loam", "well_drained"] },
  pests: ["aphids", "whitefly", "phytophthora_blight"],
  companionPlants: ["sunflower", "beans"],
  avoidNear: [],
  sunwardModel: { idealDLI: 24, heatStressThreshold: 100, waterStressSensitivity: 2, rootDepthInches: 18, nutrientDemand: 3 }
};

// ─── ORNAMENTAL FLOWERS ──────────────────────────────────────

export const perennialFlowerBase = {
  category: "perennial_flower",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToGermination: 14, daysToHarvest: 180 },
  soil: { preferredPHMin: 6.0, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids", "slugs", "powdery_mildew"],
  companionPlants: ["native_grasses", "sedums"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 12, nutrientDemand: 3 }
};

export const annualFlowerBase = {
  ...perennialFlowerBase,
  lifecycle: "annual" as const,
  growth: { daysToGermination: 7, daysToHarvest: 60 }
};

export const bulbFlowerBase = {
  ...perennialFlowerBase,
  growth: { daysToGermination: 21, daysToHarvest: 90 }
};

export const floweringShrubBase = {
  category: "flowering_shrub",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToHarvest: 730 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.0, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids", "powdery_mildew", "scale"],
  companionPlants: ["perennial_flowers", "ornamental_grasses"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 24, nutrientDemand: 4 }
};

export const nativeWildflowerBase = {
  ...perennialFlowerBase,
  lifecycle: "annual" as const,
  water: { weeklyInches: 0.5, droughtTolerance: 8 },
  sunwardModel: { idealDLI: 16, heatStressThreshold: 95, waterStressSensitivity: 2, rootDepthInches: 10, nutrientDemand: 2 }
};

// ─── LANDSCAPING ─────────────────────────────────────────────

export const landscapingShrubBase = {
  category: "landscaping_shrub",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToHarvest: 1095 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["scale", "aphids", "spider_mites"],
  companionPlants: ["ornamental_grasses", "groundcovers"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 24, nutrientDemand: 3 }
};

export const evergreenBase = {
  ...landscapingShrubBase,
  lifecycle: "perennial" as const,
  water: { weeklyInches: 0.75, droughtTolerance: 6 },
  sunwardModel: { idealDLI: 14, heatStressThreshold: 90, waterStressSensitivity: 3, rootDepthInches: 36, nutrientDemand: 3 }
};

export const ornamentalGrassBase = {
  category: "ornamental_grass",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 0.75, droughtTolerance: 7 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.5, preferredTypes: ["loam", "sandy_loam", "well_drained"] },
  pests: ["rust", "aphids"],
  companionPlants: ["perennial_flowers", "shrubs"],
  avoidNear: [],
  sunwardModel: { idealDLI: 14, heatStressThreshold: 95, waterStressSensitivity: 3, rootDepthInches: 18, nutrientDemand: 2 }
};

export const fernBase = {
  category: "fern",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 2, minimumHours: 1 },
  water: { weeklyInches: 1.5, droughtTolerance: 2 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 4.5, preferredPHMax: 6.0, preferredTypes: ["loam", "compost", "moist"] },
  pests: ["scale", "aphids", "slugs"],
  companionPlants: ["hosta", "astilbe", "bleeding_heart"],
  avoidNear: [],
  sunwardModel: { idealDLI: 6, heatStressThreshold: 80, waterStressSensitivity: 8, rootDepthInches: 8, nutrientDemand: 2 }
};

export const ornamentalTreeBase = {
  category: "ornamental_tree",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 6, minimumHours: 4 },
  water: { weeklyInches: 1.0, droughtTolerance: 5 },
  growth: { daysToHarvest: 1825 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["scale", "aphids", "powdery_mildew", "borers"],
  companionPlants: ["bulbs", "groundcovers", "perennial_flowers"],
  avoidNear: [],
  sunwardModel: { idealDLI: 16, heatStressThreshold: 90, waterStressSensitivity: 4, rootDepthInches: 48, nutrientDemand: 4 }
};

export const groundcoverBase = {
  category: "groundcover",
  lifecycle: "perennial" as const,
  sunlight: { idealHours: 4, minimumHours: 2 },
  water: { weeklyInches: 0.75, droughtTolerance: 6 },
  growth: { daysToHarvest: 365 },
  soil: { preferredPHMin: 5.5, preferredPHMax: 7.5, preferredTypes: ["loam", "well_drained"] },
  pests: ["aphids", "scale", "slugs"],
  companionPlants: ["shade_trees", "shrubs"],
  avoidNear: [],
  sunwardModel: { idealDLI: 8, heatStressThreshold: 85, waterStressSensitivity: 4, rootDepthInches: 6, nutrientDemand: 2 }
};
