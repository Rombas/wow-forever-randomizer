// Playable options in World of Warcraft: Forever (patch 1.60.1).
// Race/class table: Warcraft Tavern's races guide, checked against the number of classes per
// race and the named new combinations in Blizzard's "Create the Hero You Want to Be in World
// of Warcraft: Forever" (both read 2026-11-08).

export const allianceCombinations: { [key: string]: string[] } = {
    priest: ["human", "dwarf", "gnome", "night elf"],
    mage: ["human", "gnome", "high order skyborne"],
    warlock: ["human", "gnome"],
    druid: ["night elf", "high order skyborne"],
    rogue: ["human", "dwarf", "gnome", "night elf", "high order skyborne"],
    hunter: ["human", "dwarf", "night elf", "high order skyborne"],
    paladin: ["human", "dwarf"],
    warrior: ["human", "dwarf", "gnome", "night elf", "high order skyborne"],
    shaman: ["dwarf"],
};

export const hordeCombinations: { [key: string]: string[] } = {
    priest: ["undead", "troll"],
    mage: ["orc", "undead", "troll"],
    warlock: ["orc", "undead", "troll"],
    druid: ["tauren", "windshaper skyborne"],
    rogue: ["orc", "undead", "troll", "windshaper skyborne"],
    hunter: ["orc", "tauren", "troll", "windshaper skyborne"],
    paladin: ["undead"],
    warrior: ["orc", "undead", "tauren", "troll", "windshaper skyborne"],
    shaman: ["orc", "tauren", "troll", "windshaper skyborne"],
};

export const specs: { [key: string]: string[] } = {
    priest: ["holy", "shadow", "discipline"],
    mage: ["arcane", "fire", "frost", "frost AOE"],
    warlock: ["affliction", "demonology", "destruction"],
    druid: ["balance", "feral", "guardian", "restoration"],
    rogue: ["assassination", "combat", "subtlety"],
    hunter: ["beast mastery", "marksmanship", "survival"],
    paladin: ["holy", "protection", "retribution"],
    warrior: ["arms", "fury", "protection"],
    shaman: ["elemental", "enhancement", "restoration"],
};

export const professions: { [key: string]: string[] } = {
    priest: ["alchemy", "engineering", "tailoring"],
    mage: ["alchemy", "engineering", "tailoring"],
    warlock: ["alchemy", "engineering", "tailoring"],
    druid: ["alchemy", "engineering", "leatherworking", "tailoring"],
    rogue: ["alchemy", "engineering", "leatherworking"],
    hunter: ["alchemy", "engineering", "leatherworking"],
    paladin: [
        "alchemy",
        "engineering",
        "enchanting",
        "blacksmithing",
        "tailoring",
    ],
    warrior: ["alchemy", "engineering", "blacksmithing"],
    shaman: [
        "alchemy",
        "engineering",
        "blacksmithing",
        "leatherworking",
        "tailoring",
    ],
};

export const wowClasses = [
    "priest",
    "mage",
    "warlock",
    "druid",
    "rogue",
    "hunter",
    "paladin",
    "warrior",
    "shaman",
];

export const allianceRaces = [
    "human",
    "dwarf",
    "gnome",
    "night elf",
    "high order skyborne",
];

export const hordeRaces = [
    "orc",
    "undead",
    "tauren",
    "troll",
    "windshaper skyborne",
];

export const mainProfessions = [
    "alchemy",
    "engineering",
    "tailoring",
    "leatherworking",
    "enchanting",
    "blacksmithing",
];
