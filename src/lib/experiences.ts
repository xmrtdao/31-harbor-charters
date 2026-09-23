export type Region =
  | "Guanacaste & Papagayo"
  | "Nicoya Peninsula"
  | "Central Pacific"
  | "Arenal & Cloud Forest"
  | "Golfo Dulce & Osa Peninsula"
  | "Caribbean Coast";
export type Style =
  | "Ocean & Yacht"
  | "Surf & Coast"
  | "Aerial & Heli"
  | "Wilderness & Wildlife"
  | "Volcano & Thermal"
  | "Whitewater & Canyon";
export type Tier = "$$$" | "$$$$" | "$$$$$";
export type DurationBucket = "Under 3h" | "3–5h" | "Full-Day";

export interface Experience {
  n: number;
  name: string;
  subtitle: string;
  region: Region;
  style: Style;
  operator: string;
  duration: string;
  bucket: DurationBucket;
  privateGroups: string;
  tier: Tier;
  price: string;
  season: string;
}

export const REGIONS: Region[] = [
  "Guanacaste & Papagayo",
  "Nicoya Peninsula",
  "Central Pacific",
  "Arenal & Cloud Forest",
  "Golfo Dulce & Osa Peninsula",
  "Caribbean Coast",
];
export const STYLES: Style[] = [
  "Ocean & Yacht",
  "Surf & Coast",
  "Aerial & Heli",
  "Wilderness & Wildlife",
  "Volcano & Thermal",
  "Whitewater & Canyon",
];
export const TIERS: Tier[] = ["$$$", "$$$$", "$$$$$"];
export const BUCKETS: DurationBucket[] = ["Under 3h", "3–5h", "Full-Day"];

type Row = [string, string, Style, string, string, DurationBucket, string, Tier, string, string];
const G: Row[] = [
  ["The Papagayo Flagship Charter", "Private Catamaran & Secluded Bay Sail", "Ocean & Yacht", "Moonstone (62ft Sunreef) / Vela Tropical, Marina Papagayo", "Half-Day (4h) or Full-Day (8h)", "Full-Day", "Yes — exclusive charter up to 10–25", "$$$$$", "$5,200 – $8,700", "Year-round (Peak: Dec – May)"],
  ["The Legendary Wave Expedition", "Witch’s Rock (Roca Bruja) & Ollie’s Point Surf Boat Charter", "Surf & Coast", "Witch's Rock Surf Charters, Playas del Coco", "Full-Day (7–8h)", "Full-Day", "Yes — max 6 surfers", "$$$$", "$1,200 – $1,800", "Dec – Aug (Best offshore winds: Dec – Apr)"],
  ["The Volcanic Heli-Escape", "Private Helicopter Thermal Springs Tour", "Aerial & Heli", "Volar Costa Rica / Aerobell Charters, Liberia/Papagayo helipads", "4–5 hours", "3–5h", "Yes — private charter 1–5 pax", "$$$$$", "$3,500 – $5,000", "Year-round"],
  ["The Pelagic Apex Dive", "Bat Islands (Islas Murciélago) Bull Shark Scuba Expedition", "Ocean & Yacht", "Rocket Frog Divers, Playas del Coco", "Full-Day (2–3 tanks)", "Full-Day", "Yes — advanced divers only", "$$$$", "$350 – $500 / diver or $2,200 private", "May – Nov (Prime bull shark season)"],
  ["The Blue Water Offshore Pursuit", "Custom Sportfishing Charter for Sailfish & Blue Marlin", "Ocean & Yacht", "Marina Flamingo / Marina Papagayo 50ft Viking Fleet", "Full-Day (8–9h)", "Full-Day", "Yes — max 6 anglers", "$$$$$", "$2,800 – $4,200", "Year-round (Peak billfish: Dec – Apr)"],
  ["The Canyon & Thermal River Traverse", "Rio Negro Canyoning & Private Hot Springs Soak", "Whitewater & Canyon", "Hacienda Guachipelín VIP Private Guide, Rincón de la Vieja", "Full-Day (6h)", "Full-Day", "Yes", "$$$", "$250 – $450 / person", "Year-round"],
  ["The Glowing Bay Odyssey", "Papagayo Bioluminescent Night Kayaking Safari", "Ocean & Yacht", "Peninsula Papagayo Outpost, Bahía Culebra", "2.5 hours (Evening)", "Under 3h", "Yes", "$$$", "$180 – $300 / person", "Dark-sky / new moon periods year-round"],
];
const N: Row[] = [
  ["The Hermosa Break Masterclass", "Private Pro-Coach Surf Session & Telephoto Video Review", "Surf & Coast", "Del Mar Surf / Blue Surf Sanctuary, Santa Teresa", "3 hours", "3–5h", "Yes — 1:1 or private pair", "$$$$", "$350 – $600 / session", "Year-round (Consistent swells)"],
  ["The Tortuga Island Private Crossing", "Private Speedboat & Snorkel Charter to Isla Tortuga", "Ocean & Yacht", "Zuma Tours / Montezuma Charters, Montezuma/Mal País", "Full-Day (6h)", "Full-Day", "Yes — private boat up to 8 pax", "$$$$", "$1,400 – $2,200", "Dec – May (Calmest crossings)"],
  ["The Primary Wilderness Trek", "Cabo Blanco Strict Nature Reserve Private Naturalist Expedition", "Wilderness & Wildlife", "Cabo Blanco Private Naturalist Guides, Cabuya", "5–6 hours", "3–5h", "Yes — private naturalist", "$$$", "$200 – $350 / group", "Dec – May (Dry trails)"],
  ["The Ancient Arribada Vigil", "Ostional Sea Turtle Mass Nesting Guided Night Tour", "Wilderness & Wildlife", "Ostional National Wildlife Refuge Certified Guides, Nosara", "2–3 hours (Night)", "Under 3h", "Yes", "$$$", "$150 – $280 / person", "Jul – Dec (Peak Arribadas: Sep – Nov)"],
  ["The Estuary Drift", "Rio Nosara & Rio Montaña Mangrove SUP Safari", "Surf & Coast", "Experience Nosara, Playa Pelada", "3 hours", "3–5h", "Yes", "$$$", "$160 – $280 / person", "Year-round (Morning high tides)"],
  ["The Prana Sound Sanctuary", "Private Sunset Sound Bath & Restorative Energy Healing", "Wilderness & Wildlife", "Bodhi Tree Yoga Resort / Gilded Iguana Wellness, Nosara", "90 minutes", "Under 3h", "Yes — private shala buyout", "$$$$", "$400 – $800 / session", "Year-round"],
];
const C: Row[] = [
  ["The Pez Vela Offshore Charter", "Private Luxury Yacht Cruise & Sunset Archipelago Sail", "Ocean & Yacht", "Marina Pez Vela Charters, Quepos", "Half-Day (4h) or Sunset (4h)", "3–5h", "Yes — up to 12–20 pax", "$$$$$", "$2,400 – $4,500", "Year-round"],
  ["The Canopy Biome Private Walk", "VIP Dawn Naturalist Tour of Manuel Antonio National Park", "Wilderness & Wildlife", "Manuel Antonio Certified Master Naturalists", "3.5 hours", "3–5h", "Yes — VIP early gate access", "$$$", "$220 – $380 / group", "Year-round (Closed Tuesdays)"],
  ["The Whale’s Tail Pelagic Safari", "Marino Ballena Humpback Whale & Dolphin Expedition", "Ocean & Yacht", "Bahía Aventuras, Uvita", "4 hours", "3–5h", "Yes — private boat", "$$$$", "$850 – $1,500 / boat", "Jul – Oct & Dec – Mar (Migrations)"],
  ["The Nauyaca Canyon Plunge", "Nauyaca Waterfalls Private 4x4 & Cascades Hike", "Whitewater & Canyon", "Don Lulo / Nauyaca Waterfalls VIP, Barú Valley", "5 hours", "3–5h", "Yes", "$$$$", "$450 – $850 / transport & guide", "Dec – May clear; Jun – Nov raging"],
  ["The Labyrinthian Mangrove Glide", "Damas Island Estuary Private Boat Wildlife Cruise", "Wilderness & Wildlife", "Quepos Private River Captains", "3.5 hours", "3–5h", "Yes", "$$$", "$350 – $600 / private boat", "Year-round"],
  ["The Savegre Whitewater Descent", "Class III–IV Whitewater Rafting & Riverside Banquet", "Whitewater & Canyon", "Amigos del Río / Rafiki Safari, Savegre River", "Full-Day (6h)", "Full-Day", "Yes — private raft + safety kayaker", "$$$$", "$500 – $900 / raft", "May – Jan (Optimal volumes)"],
];
const A: Row[] = [
  ["The Canopy Suspension Odyssey", "Mistico Hanging Bridges VIP Sunrise Naturalist Walk", "Wilderness & Wildlife", "Mistico Arenal Hanging Bridges Park, La Fortuna", "3 hours", "3–5h", "Yes — pre-public dawn access", "$$$", "$250 – $400 / group", "Year-round"],
  ["The Volcanic Magma & Mineral River Soak", "Arenal 1968 Lava Trail & Tabacón Private Cabana Night", "Volcano & Thermal", "Tabacón Thermal Resort & Private Local Geologists, Arenal", "6 hours", "Full-Day", "Yes — private Shangri-La cabana buyout", "$$$$$", "$1,200 – $2,000 / couple", "Year-round"],
  ["The Monteverde Cloud Forest Night Walk", "Monteverde & Curi-Cancha Nocturnal Safari", "Wilderness & Wildlife", "Curi-Cancha / Monteverde Reserve Naturalists", "2.5 hours (Twilight/Night)", "Under 3h", "Yes", "$$$", "$180 – $300 / group", "Year-round"],
  ["The Jungle Canyon Waterfall Rappel", "Pure Trek VIP Canyoning & Waterfall Rappel", "Whitewater & Canyon", "Pure Trek Canyoning, La Fortuna", "4 hours", "3–5h", "Yes", "$$$$", "$450 – $750 / group", "Year-round"],
  ["The Bean-to-Bar Rainforest Agro-Tour", "Artisan Single-Origin Cacao & Sloth Habitat Safari", "Wilderness & Wildlife", "Bogarin Wildlife Trail & Don Juan Cacao, La Fortuna", "3.5 hours", "3–5h", "Yes", "$$$", "$200 – $350 / group", "Year-round"],
];
const O: Row[] = [
  ["The Jurassic Heartland Flight", "Corcovado Sirena Station Fly-in Bush Expedition", "Aerial & Heli", "Alfa Romeo Aero Charters / Osa Wild, Puerto Jiménez / Drake Bay", "Full-Day (8h)", "Full-Day", "Yes — charter aircraft + private ranger", "$$$$$", "$2,800 – $4,600 / flight", "Dec – May (Dry runways)"],
  ["The Fjord Whale & Dolphin Super-Pod Safari", "Golfo Dulce Marine Sanctuary Private Cruise", "Ocean & Yacht", "Golfo Dulce Charters / Playa Cativo Expeditions", "Half-Day (4h)", "3–5h", "Yes", "$$$$", "$950 – $1,600", "Year-round (Aug – Oct calving)"],
  ["The Bioluminescent Bay Lagoon Drift", "Night Glow Kayaking in Golfo Dulce", "Ocean & Yacht", "Osa Natural, Puerto Jiménez", "2.5 hours", "Under 3h", "Yes", "$$$", "$160 – $260 / person", "Year-round (New moon weeks)"],
  ["The Caño Island Marine Sanctuary Dive", "Isla del Caño Biological Reserve Private Scuba & Snorkel", "Ocean & Yacht", "Drake Bay Scuba / Caño Divers, Drake Bay", "Full-Day (6–7h)", "Full-Day", "Yes — private dive boat & divemaster", "$$$$$", "$1,800 – $2,800 / boat", "Dec – Apr (Clearest visibility)"],
];
const K: Row[] = [
  ["The Pacuare River Gorge Expedition", "National Geographic Top-10 Class IV Whitewater Rafting", "Whitewater & Canyon", "Ríos Tropicales / Pacuare Outdoor Center, Pacuare River", "Full-Day (7–8h)", "Full-Day", "Yes — exclusive raft & private transfer", "$$$$", "$600 – $1,100 / raft", "Year-round"],
  ["The Afro-Caribbean Reef & Coastal Walk", "Gandoca-Manzanillo Wildlife Refuge Private Coastal Trek", "Wilderness & Wildlife", "Caribe Sur Tours & Local BriBri Naturalists, Puerto Viejo", "4–5 hours", "3–5h", "Yes", "$$$", "$220 – $360 / group", "Sep – Oct & Feb – Apr (Caribbean dry)"],
  ["The Tortuguero Amazonian Waterway Cruise", "Tortuguero National Park Jungle Canal Boat Safari", "Wilderness & Wildlife", "Mawamba Lodge Private Guides / Tortuguero Expeditions", "Full-Day", "Full-Day", "Yes — private boat & captain", "$$$$", "$750 – $1,300", "Year-round (Jul – Oct turtle nesting)"],
];

const groups: [Region, Row[]][] = [
  ["Guanacaste & Papagayo", G], ["Nicoya Peninsula", N], ["Central Pacific", C],
  ["Arenal & Cloud Forest", A], ["Golfo Dulce & Osa Peninsula", O], ["Caribbean Coast", K],
];

let i = 0;
export const EXPERIENCES: Experience[] = groups.flatMap(([region, rows]) =>
  rows.map(([name, subtitle, style, operator, duration, bucket, privateGroups, tier, price, season]) => ({
    n: ++i, name, subtitle, region, style, operator, duration, bucket, privateGroups, tier, price, season,
  })),
);

export const pad = (n: number) => String(n).padStart(2, "0");
