export const allianceCombinations: { [key: string]: string[] } = {
    priest: ["human", "dwarf", "night elf", "high elf"],
    mage: ["gnome", "human", "dwarf", "high elf"],
    warlock: ["gnome", "human"],
    druid: ["night elf"],
    rogue: ["human", "night elf", "gnome", "dwarf", "high elf"],
    hunter: ["night elf", "dwarf", "human", "gnome", "high elf"],
    paladin: ["human", "dwarf", "high elf"],
    warrior: ["human", "gnome", "dwarf", "night elf", "high elf"],
};

export const hordeCombinations: { [key: string]: string[] } = {
    priest: ["undead", "troll"],
    mage: ["undead", "troll", "orc", "goblin"],
    warlock: ["undead", "orc", "troll", "goblin"],
    druid: ["tauren"],
    rogue: ["undead", "troll", "orc", "goblin"],
    hunter: ["troll", "orc", "undead", "tauren", "goblin"],
    warrior: ["undead", "troll", "orc", "tauren", "goblin"],
    shaman: ["troll", "orc", "tauren"],
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
    priest: ["alchemy", "engineering", "tailoring", "jewelcrafting"],
    mage: ["alchemy", "engineering", "tailoring", "jewelcrafting"],
    warlock: ["alchemy", "engineering", "tailoring", "jewelcrafting"],
    druid: ["alchemy", "engineering", "leatherworking", "tailoring", "jewelcrafting"],
    rogue: ["alchemy", "engineering", "leatherworking", "jewelcrafting"],
    hunter: ["alchemy", "engineering", "leatherworking", "jewelcrafting"],
    paladin: [
        "alchemy",
        "engineering",
        "enchanting",
        "blacksmithing",
        
        "tailoring",
    ],
    warrior: ["alchemy", "engineering", "blacksmithing", "jewelcrafting"],
    shaman: [
        "alchemy",
        "engineering",
        "blacksmithing",
        "leatherworking",
        "jewelcrafting",
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

export const allianceRaces = ["human", "dwarf", "gnome", "night elf" , "high elf"];

export const hordeRaces = ["undead", "troll", "tauren", "orc", "goblin"];

export const mainProfessions = [
    "alchemy",
    "engineering",
    "tailoring",
    "leatherworking",
    "enchanting",
    "blacksmithing",
    "jewelcrafting",
];
