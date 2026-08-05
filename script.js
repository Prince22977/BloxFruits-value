// --- 1. HELPER: FORMAT NUMBERS (K, M, B) ---
function formatValue(num) {
  if (num === "N/A" || num === null || num === undefined) return "N/A";
  if (!num || num === 0) return "0";
  if (typeof num === "string") return num;

  if (num >= 1000000000) {
    return (num / 1000000000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'K';
  }
  return num.toString();
}

// Fallback image if URL fails
const imgFallback = "https://via.placeholder.com/100?text=Fruit";

// --- 2. ITEM DATABASE ---
const itemDatabase = [
  // Physical Fruits
  { id: "West Dragon", name: "West Dragon", category: "Physical", value: 5660000000, demand: "10/10", image: "https://i.postimg.cc/7LfBxxs8/West-Dragon.png" },
  { id: "East Dragon", name: "East Dragon", category: "Physical", value: 5000000000, demand: "10/10", image: "https://i.postimg.cc/gkzHzzjS/East-Dragon.png" },
  { id: "Kitsune", name: "Kitsune", category: "Physical", value: 660000000, demand: "10/10", image: "https://i.postimg.cc/CLxbycr9/Kitsune.png" },
  { id: "Control", name: "Control", category: "Physical", value: 160000000, demand: "10/10", image: "https://i.postimg.cc/t48L8bFV/latest-cb-20251223165924.webp" },
  { id: "Yeti", name: "Yeti", category: "Physical", value: 120000000, demand: "8/10", image: "https://i.postimg.cc/mrJmk0Jc/Yeti.png" },
  { id: "Gas", name: "Gas", category: "Physical", value: 60000000, demand: "8/10", image: "https://i.postimg.cc/XNCpc4fS/1000-cb-20241223162315.webp" },
  { id: "Tiger", name: "Tiger", category: "Physical", value: 130000000, demand: "9/10", image: "https://i.postimg.cc/vBDS3KNp/download.png" },
  { id: "Lightning", name: "Lightning", category: "Physical", value: 50000000, demand: "5/10", image: "https://i.postimg.cc/MHTHLFZD/Rumble.png" },
  { id: "Venom", name: "Venom", category: "Physical", value: 20000000, demand: "8/10", image: "https://i.postimg.cc/zGdtZLkF/Venom.png" },
  { id: "Dough", name: "Dough", category: "Physical", value: 30000000, demand: "9/10", image: "https://i.postimg.cc/wxckYyqR/Dough.png" },
  { id: "Pain", name: "Pain", category: "Physical", value: 10000000, demand: "5/10", image: "https://i.postimg.cc/mk21srj7/Pain.png" },
  { id: "T-Rex", name: "T-Rex", category: "Physical", value: 20000000, demand: "8/10", image: "https://i.postimg.cc/zGDtcwTf/T-Rex.png" },
  { id: "Gravity", name: "Gravity", category: "Physical", value: 10000000, demand: "5/10", image: "https://i.postimg.cc/D02Lw6vJ/Gravity.png" },
  { id: "Mammoth", name: "Mammoth", category: "Physical", value: 10000000, demand: "5/10", image: "https://i.postimg.cc/sXJGqWYV/Mammoth.png" },
  { id: "Spirit", name: "Spirit", category: "Physical", value: 10000000, demand: "7/10", image: "https://i.postimg.cc/wTpbhYvL/Spirit.png" },
  { id: "Shadow", name: "Shadow", category: "Physical", value: 6500000, demand: "5/10", image: "https://i.postimg.cc/kGpGPvBd/Shadow.png" },
  { id: "Portal", name: "Portal", category: "Physical", value: 10000000, demand: "10/10", image: "https://i.postimg.cc/DzkWz65v/Portal.png" },
  { id: "Buddha", name: "Buddha", category: "Physical", value: 10000000, demand: "10/10", image: "https://i.postimg.cc/02nZD6h1/Buddha.png" },
  { id: "Blizzard", name: "Blizzard", category: "Physical", value: 5000000, demand: "5/10", image: "https://i.postimg.cc/fTDBV72v/Blizzard.png" },
  { id: "Creation", name: "Creation", category: "Physical", value: 25000000, demand: "2/10", image: "https://i.postimg.cc/HLctq6nT/Creation.png" },
  { id: "Phoenix", name: "Phoenix", category: "Physical", value: 27500000, demand: "3/10", image: "https://i.postimg.cc/DwbJFHrp/Phoenix.png" },
  { id: "Sound", name: "Sound", category: "Physical", value: 25000000, demand: "4/10", image: "https://i.postimg.cc/MKgHs5C7/Sound.png" },
  { id: "Spider", name: "Spider", category: "Physical", value: 1500000, demand: "2/10", image: "https://i.postimg.cc/MpRTgRwh/Spider.png" },
  { id: "Love", name: "Love", category: "Physical", value: 1500000, demand: "3/10", image: "https://i.postimg.cc/0NDwGFrK/Love.png" },
  { id: "Magma", name: "Magma", category: "Physical", value: 1150000, demand: "5/10", image: "https://i.postimg.cc/W3VJ58JW/Magma.png" },
  { id: "Quake", name: "Quake", category: "Physical", value: 1000000, demand: "2/10", image: "https://i.postimg.cc/cJRvt35Q/Quake.png" },
  { id: "Diamond", name: "Diamond", category: "Physical", value: 1000000, demand: "2/10", image: "https://i.postimg.cc/3N7CD7Bw/Diamond.png" },
  { id: "Light", name: "Light", category: "Physical", value: 800000, demand: "2/10", image: "https://i.postimg.cc/K8dTMxcy/Light.png" },
  { id: "Ghost", name: "Ghost", category: "Physical", value: 800000, demand: "1/10", image: "https://i.postimg.cc/k4PWk9Ly/Ghost.png" },
  { id: "Eagle", name: "Eagle", category: "Physical", value: 800000, demand: "2/10", image: "https://i.postimg.cc/sxcPY864/Eagle.png" },
  { id: "Rubber", name: "Rubber", category: "Physical", value: 700000, demand: "1/10", image: "https://i.postimg.cc/qRQgjTrq/Rubber.png" },
  { id: "Ice", name: "Ice", category: "Physical", value: 550000, demand: "2/10", image: "https://i.postimg.cc/zDjTPs7n/Ice.png" },
  { id: "Sand", name: "Sand", category: "Physical", value: 420000, demand: "1/10", image: "https://i.postimg.cc/QxFVkwyN/Sand.png" },
  { id: "Dark", name: "Dark", category: "Physical", value: 400000, demand: "1/10", image: "https://i.postimg.cc/0NTCP7KD/Dark.png" },
  { id: "Flame", name: "Flame", category: "Physical", value: 250000, demand: "1/10", image: "https://i.postimg.cc/y8WhRLF0/Flame.png" },
  { id: "Spike", name: "Spike", category: "Physical", value: 180000, demand: "1/10", image: "https://i.postimg.cc/fbNLsLTk/Spike.png" },
  { id: "Smoke", name: "Smoke", category: "Physical", value: 100000, demand: "1/10", image: "https://i.postimg.cc/nVRCmpTw/Smoke.png" },
  { id: "Bomb", name: "Bomb", category: "Physical", value: 80000, demand: "1/10", image: "https://i.postimg.cc/y8NjP1zg/Bomb.png" },
  { id: "Spring", name: "Spring", category: "Physical", value: 60000, demand: "1/10", image: "https://i.postimg.cc/15r7B7nT/Spring.png" },
  { id: "Blade", name: "Blade", category: "Physical", value: 50000, demand: "1/10", image: "https://i.postimg.cc/bYQmYVTJ/Blade.png" },
  { id: "Spin", name: "Spin", category: "Physical", value: 7500, demand: "1/10", image: "https://i.postimg.cc/jj4jSbLc/Spin.png" },
  { id: "Rocket", name: "Rocket", category: "Physical", value: 5000, demand: "1/10", image: "https://i.postimg.cc/cHdrRJVP/Rocket.png" },

  // Permanent Fruits
  { id: "Perm Dragon", name: "Perm Dragon", category: "Permanent", value: 8050000000, demand: "9/10", image: "https://img.bloxfruitcalculator.org/fruits/EastDragonFruit.png" },
  { id: "Perm Kitsune", name: "Perm Kitsune", category: "Permanent", value: 6980000000, demand: "10/10", image: "https://i.postimg.cc/CLxbycr9/Kitsune.png" },
  { id: "Perm Control", name: "Perm Control", category: "Permanent", value: 6980000000, demand: "10/10", image: "https://i.postimg.cc/t48L8bFV/latest-cb-20251223165924.webp" },
  { id: "Perm Yeti", name: "Perm Yeti", category: "Permanent", value: 5660000000, demand: "9/10", image: "https://i.postimg.cc/mrJmk0Jc/Yeti.png" },
  { id: "Perm Gas", name: "Perm Gas", category: "Permanent", value: 5000000000, demand: "7/10", image: "https://i.postimg.cc/XNCpc4fS/1000-cb-20241223162315.webp" },
  { id: "Perm Tiger", name: "Perm Tiger", category: "Permanent", value: 5660000000, demand: "9/10", image: "https://i.postimg.cc/vBDS3KNp/download.png" },
  { id: "Perm Lightning", name: "Perm Lightning", category: "Permanent", value: 3520000000, demand: "8/10", image: "https://i.postimg.cc/MHTHLFZD/Rumble.png" },
  { id: "Perm Venom", name: "Perm Venom", category: "Permanent", value: 4840000000, demand: "7/10", image: "https://i.postimg.cc/zGdtZLkF/Venom.png" },
  { id: "Perm Dough", name: "Perm Dough", category: "Permanent", value: 4680000000, demand: "8/10", image: "https://i.postimg.cc/wxckYyqR/Dough.png" },
  { id: "Perm Pain", name: "Perm Pain", category: "Permanent", value: 3840000000, demand: "8/10", image: "https://i.postimg.cc/mk21srj7/Pain.png" },
  { id: "Perm T-Rex", name: "Perm T-Rex", category: "Permanent", value: 4520000000, demand: "8/10", image: "https://i.postimg.cc/zGDtcwTf/T-Rex.png" },
  { id: "Perm Gravity", name: "Perm Gravity", category: "Permanent", value: 4360000000, demand: "7/10", image: "https://i.postimg.cc/D02Lw6vJ/Gravity.png" },
  { id: "Perm Mammoth", name: "Perm Mammoth", category: "Permanent", value: 4520000000, demand: "6/10", image: "https://i.postimg.cc/sXJGqWYV/Mammoth.png" },
  { id: "Perm Spirit", name: "Perm Spirit", category: "Permanent", value: 5160000000, demand: "5/10", image: "https://i.postimg.cc/wTpbhYvL/Spirit.png" },
  { id: "Perm Shadow", name: "Perm Shadow", category: "Permanent", value: 4760000000, demand: "5/10", image: "https://i.postimg.cc/kGpGPvBd/Shadow.png" },
  { id: "Perm Portal", name: "Perm Portal", category: "Permanent", value: 3040000000, demand: "9/10", image: "https://i.postimg.cc/DzkWz65v/Portal.png" },
  { id: "Perm Buddha", name: "Perm Buddha", category: "Permanent", value: 2000000000, demand: "10/10", image: "https://i.postimg.cc/02nZD6h1/Buddha.png" },
  { id: "Perm Blizzard", name: "Perm Blizzard", category: "Permanent", value: 3920000000, demand: "6/10", image: "https://i.postimg.cc/fTDBV72v/Blizzard.png" },
  { id: "Perm Creation", name: "Perm Creation", category: "Permanent", value: 2240000000, demand: "3/10", image: "https://i.postimg.cc/HLctq6nT/Creation.png" },
  { id: "Perm Phoenix", name: "Perm Phoenix", category: "Permanent", value: 3040000000, demand: "3/10", image: "https://i.postimg.cc/DwbJFHrp/Phoenix.png" },
  { id: "Perm Sound", name: "Perm Sound", category: "Permanent", value: 2720000000, demand: "3/10", image: "https://i.postimg.cc/MKgHs5C7/Sound.png" },
  { id: "Perm Spider", name: "Perm Spider", category: "Permanent", value: 2400000000, demand: "3/10", image: "https://i.postimg.cc/MpRTgRwh/Spider.png" },
  { id: "Perm Love", name: "Perm Love", category: "Permanent", value: 2080000000, demand: "3/10", image: "https://i.postimg.cc/0NDwGFrK/Love.png" },
  { id: "Perm Magma", name: "Perm Magma", category: "Permanent", value: 1280000000, demand: "7/10", image: "https://i.postimg.cc/W3VJ58JW/Magma.png" },
  { id: "Perm Quake", name: "Perm Quake", category: "Permanent", value: 1520000000, demand: "3/10", image: "https://i.postimg.cc/cJRvt35Q/Quake.png" },
  { id: "Perm Diamond", name: "Perm Diamond", category: "Permanent", value: 840000000, demand: "3/10", image: "https://i.postimg.cc/3N7CD7Bw/Diamond.png" },
  { id: "Perm Light", name: "Perm Light", category: "Permanent", value: 960000000, demand: "7/10", image: "https://i.postimg.cc/K8dTMxcy/Light.png" },
  { id: "Perm Ghost", name: "Perm Ghost", category: "Permanent", value: 1160000000, demand: "2/10", image: "https://i.postimg.cc/k4PWk9Ly/Ghost.png" },
  { id: "Perm Eagle", name: "Perm Eagle", category: "Permanent", value: 820000000, demand: "3/10", image: "https://i.postimg.cc/sxcPY864/Eagle.png" },
  { id: "Perm Rubber", name: "Perm Rubber", category: "Permanent", value: 704000000, demand: "3/10", image: "https://i.postimg.cc/qRQgjTrq/Rubber.png" },
  { id: "Perm Ice", name: "Perm Ice", category: "Permanent", value: 640000000, demand: "6/10", image: "https://i.postimg.cc/zDjTPs7n/Ice.png" },
  { id: "Perm Sand", name: "Perm Sand", category: "Permanent", value: 720000000, demand: "2/10", image: "https://i.postimg.cc/QxFVkwyN/Sand.png" },
  { id: "Perm Dark", name: "Perm Dark", category: "Permanent", value: 800000000, demand: "3/10", image: "https://i.postimg.cc/0NTCP7KD/Dark.png" },
  { id: "Perm Flame", name: "Perm Flame", category: "Permanent", value: 450000000, demand: "2/10", image: "https://i.postimg.cc/y8WhRLF0/Flame.png" },
  { id: "Perm Spike", name: "Perm Spike", category: "Permanent", value: 140000000, demand: "1/10", image: "https://i.postimg.cc/fbNLsLTk/Spike.png" },
  { id: "Perm Smoke", name: "Perm Smoke", category: "Permanent", value: 120000000, demand: "2/10", image: "https://i.postimg.cc/nVRCmpTw/Smoke.png" },
  { id: "Perm Bomb", name: "Perm Bomb", category: "Permanent", value: 90000000, demand: "1/10", image: "https://i.postimg.cc/y8NjP1zg/Bomb.png" },
  { id: "Perm Spring", name: "Perm Spring", category: "Permanent", value: 60000000, demand: "1/10", image: "https://i.postimg.cc/15r7B7nT/Spring.png" },
  { id: "Perm Blade", name: "Perm Blade", category: "Permanent", value: 20000000, demand: "2/10", image: "https://i.postimg.cc/bYQmYVTJ/Blade.png" },
  { id: "Perm Spin", name: "Perm Spin", category: "Permanent", value: 15000000, demand: "1/10", image: "https://i.postimg.cc/jj4jSbLc/Spin.png" },
  { id: "Perm Rocket", name: "Perm Rocket", category: "Permanent", value: 10000000, demand: "2/10", image: "https://i.postimg.cc/cHdrRJVP/Rocket.png" },

  // Gamepasses
  { id: "Fruit Notifier", name: "Fruit Notifier", category: "Gamepass", value: 5170000000, demand: "9/10", image: "https://i.postimg.cc/Zqdr70sR/Fruit-Notifer.png" },
  { id: "Dark Blade", name: "Dark Blade", category: "Gamepass", value: 1040000000, demand: "9/10", image: "https://i.postimg.cc/fLYfLkYF/Dark-Blade.png" },
  { id: "Mythical Scrolls", name: "Mythical Scrolls", category: "Gamepass", value: 1520000000, demand: "4/10", image: "https://i.postimg.cc/d3HktKNp/Mythical-Scrolls.png" },
  { id: "Legendary Scrolls", name: "Legendary Scrolls", category: "Gamepass", value: 680000000, demand: "3/10", image: "https://i.postimg.cc/YqDYtQJ0/Legendary-Scrolls.png" },
  { id: "+1 Fruit Storage", name: "+1 Fruit Storage", category: "Gamepass", value: 450000000, demand: "10/10", image: "https://i.postimg.cc/hj7pmcdF/1-Fruit-Storage.png" },
  { id: "2x Mastery", name: "2x Mastery", category: "Gamepass", value: 450000000, demand: "10/10", image: "https://i.postimg.cc/0jdntrQm/2x-Mastery.png" },
  { id: "2x Money", name: "2x Money", category: "Gamepass", value: 450000000, demand: "10/10", image: "https://i.postimg.cc/rsLgC58M/2x-Money.png" },
  { id: "2x Boss Drops", name: "2x Boss Drops", category: "Gamepass", value: 300000000, demand: "8/10", image: "https://i.postimg.cc/HxMBy616/2x-Boss-Drops.png" },
  { id: "Fast Boats", name: "Fast Boats", category: "Gamepass", value: 300000000, demand: "9/10", image: "https://i.postimg.cc/NjV6kR4S/Fast-Boats.png" },

  // Limiteds (FIXED: Changed unquoted N/A to "N/A")
  { id: "Permanent Dragon Token", name: "Permanent Dragon Token", category: "Limited", value: 8050000000, demand: "6/10", image: "https://i.postimg.cc/59nFmw9g/Permanent-Dragon-Token.png" },
  { id: "Dragon Token", name: "Dragon Token", category: "Limited", value: "N/A", demand: "4/10", image: "https://i.postimg.cc/hPYzkcd7/Dragon-Token.png" },
  { id: "Ember West Dragon", name: "Ember West Dragon", category: "Limited", value: 7900000000, demand: "10/10", image: "https://i.postimg.cc/Qtn7Wv59/latest-cb-20251226164628.webp" },
  { id: "Galaxy Empyrean Kitsune", name: "Galaxy Empyrean Kitsune", category: "Limited", value: 13310000000, demand: "10/10", image: "https://i.postimg.cc/k5JRY7vf/latest-cb-20251226164613.webp" },
  { id: "Crimson Kitsune", name: "Crimson Kitsune", category: "Limited", value: 9680000000, demand: "10/10", image: "https://i.postimg.cc/dtg9fZh5/latest-cb-20251225145618.webp" },
  { id: "Meme-Meme", name: "Meme-Meme", category: "Limited", value: 5250000000, demand: "7/10", image: "https://i.postimg.cc/KYLd2W5J/latest-cb-20260402183037.webp" },
  { id: "Fiend Yeti", name: "Fiend Yeti", category: "Limited", value: 920000000, demand: "7/10", image: "https://i.postimg.cc/fbBmGbCv/latest-cb-20260214132352.webp" },
  { id: "Divine Portal", name: "Divine Portal", category: "Limited", value: 1760000000, demand: "9/10", image: "https://i.postimg.cc/htF9sFwc/latest-cb-20251225222313.webp" },
  { id: "Purple Lightning", name: "Purple Lightning", category: "Limited", value: 5850000000, demand: "10/10", image: "https://i.postimg.cc/d0FsYGYD/Purple-Lightning.png" },
  { id: "Parrot", name: "Parrot", category: "Limited", value: "N/A", demand: "1/10", image: "Screenshot 2026-08-05 121544.png" },
  { id: "Red Lightning", name: "Red Lightning", category: "Limited", value: 3180000000, demand: "10/10", image: "https://i.postimg.cc/s2DmjTkH/Red-Lightning.png" },
  { id: "Yellow Lightning", name: "Yellow Lightning", category: "Limited", value: 1890000000, demand: "9/10", image: "https://i.postimg.cc/cLwx2XPV/Yellow-Lightning.png" },
  { id: "Green Lightning", name: "Green Lightning", category: "Limited", value: 410000000, demand: "7/10", image: "https://i.postimg.cc/MKcKbW5Z/Green-Lightning.png" },
  { id: "Werewolf", name: "Werewolf", category: "Limited", value: 1010000000, demand: "8/10", image: "https://i.postimg.cc/mr2jLmv5/Werewolf.png" },
  { id: "Rose Quartz Diamond", name: "Rose Quartz Diamond", category: "Limited", value: 350000000, demand: "8/10", image: "https://i.postimg.cc/02PQqRHR/Rose-Quartz.webp" },
  { id: "Emerald Diamond", name: "Emerald Diamond", category: "Limited", value: 220000000, demand: "5/10", image: "https://i.postimg.cc/8zCzjdSZ/Emerald.webp" },
  { id: "Topaz Diamond", name: "Topaz Diamond", category: "Limited", value: 220000000, demand: "5/10", image: "https://i.postimg.cc/VLgNfG3S/Topaz.webp" },
  { id: "Ruby Diamond", name: "Ruby Diamond", category: "Limited", value: 160000000, demand: "5/10", image: "https://i.postimg.cc/9XGMSFbY/Ruby.webp" },
  { id: "Eclipse", name: "Eclipse", category: "Limited", value: "N/A", demand: "10/10", image: "https://i.postimg.cc/65MLTkG9/Eclipse.png" },
  { id: "Super Spirit Pain", name: "Super Spirit Pain", category: "Limited", value: 3680000000, demand: "10/10", image: "https://i.postimg.cc/Xv7LjsRD/Super-Spirit-Pain.png" },
  { id: "Torment Pain", name: "Torment Pain", category: "Limited", value: 170000000, demand: "6/10", image: "https://i.postimg.cc/T1qGN3Q0/Torment.png" },
  { id: "Sadness Pain", name: "Sadness Pain", category: "Limited", value: 920000000, demand: "7/10", image: "https://i.postimg.cc/C5VS4qCd/Sadness.png" },
  { id: "Frustration Pain", name: "Frustration Pain", category: "Limited", value: 980000000, demand: "8/10", image: "https://i.postimg.cc/26WCvwZP/Frustration.png" },
  { id: "Celestial Pain", name: "Celestial Pain", category: "Limited", value: 1100000000, demand: "8/10", image: "https://i.postimg.cc/RC7ZvC2r/Celestial-Pain.png" },
  { id: "Eagle Requiem", name: "Eagle Requiem", category: "Limited", value: 160000000, demand: "4/10", image: "https://i.postimg.cc/7P3ZqPjr/Eagle-Requiem.png" },
  { id: "Eagle Glacier", name: "Eagle Glacier", category: "Limited", value: 20000000, demand: "2/10", image: "https://i.postimg.cc/qBsvpBWV/Eagle-Glacier.png" },
  { id: "Eagle Matrix", name: "Eagle Matrix", category: "Limited", value: 250000000, demand: "5/10", image: "https://i.postimg.cc/446xX4qD/Eagle-Matrix.png" },
  { id: "Celebration Bomb", name: "Celebration Bomb", category: "Limited", value: 10000000, demand: "2/10", image: "https://i.postimg.cc/Jh4xrpf6/Celebration-Bomb.png" },
  { id: "Azure Bomb", name: "Azure Bomb", category: "Limited", value: 600000000, demand: "6/10", image: "https://i.postimg.cc/PfW5df9K/Azura-Bomb.png" },
  { id: "Thermite Bomb", name: "Thermite Bomb", category: "Limited", value: 600000000, demand: "6/10", image: "https://i.postimg.cc/T2V3T2Bf/Thermite-Bomb.png" },
  { id: "Nuclear Bomb", name: "Nuclear Bomb", category: "Limited", value: 600000000, demand: "6/10", image: "https://i.postimg.cc/QNQdjNvs/Nuclear-Bomb.png" },
  { id: "Dog Blade", name: "Dog Blade", category: "Limited", value: 460000000, demand: "7/10", image: "Screenshot 2026-08-05 122345.png" },
  { id: "Dog House(Frame Break)", name: "Dog House(Frame Break)", category: "Limited", value: "N/A", demand: "10/10", image: "Screenshot 2026-08-05 122307.png" },
  { id: "Rabid Dog Blade", name: "Rabid Dog Blade", category: "Limited", value: "N/A", demand: "10/10", image: "Screenshot 2026-08-05 121610.png" }
];

// --- 3. STATE MANAGEMENT ---
let activeSide = null;
let yourOffer = [];
let theirOffer = [];
let activeModalCategory = 'All';
let activeValueCategory = 'All';

// --- 4. NAVIGATION / TABS ---
function switchTab(tab) {
  const calcView = document.getElementById('view-calculator');
  const valuesView = document.getElementById('view-values');
  const btnCalc = document.getElementById('btn-calc');
  const btnValues = document.getElementById('btn-values');

  if (tab === 'calculator') {
    calcView.classList.remove('hidden');
    calcView.classList.add('block');
    valuesView.classList.add('hidden');
    valuesView.classList.remove('block');

    btnCalc.className = "px-4 py-2 rounded-md bg-blue-600 font-bold shadow transition text-white";
    btnValues.className = "px-4 py-2 rounded-md hover:bg-gray-700 font-bold text-gray-300 transition";
  } else {
    valuesView.classList.remove('hidden');
    valuesView.classList.add('block');
    calcView.classList.add('hidden');
    calcView.classList.remove('block');

    btnValues.className = "px-4 py-2 rounded-md bg-blue-600 font-bold shadow transition text-white";
    btnCalc.className = "px-4 py-2 rounded-md hover:bg-gray-700 font-bold text-gray-300 transition";
    
    renderValueList();
  }
}

// --- 5. MODAL LOGIC ---
function openModal(side) {
  activeSide = side;
  document.getElementById('modal-search').value = '';
  setModalCategory('All');
  document.getElementById('item-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('item-modal').classList.add('hidden');
  activeSide = null;
}

function setModalCategory(category) {
  activeModalCategory = category;
  document.querySelectorAll('.modal-cat-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.className = "modal-cat-btn px-3 py-1.5 rounded-lg bg-blue-600 font-bold text-white text-xs whitespace-nowrap";
    } else {
      btn.className = "modal-cat-btn px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 font-bold text-gray-300 text-xs whitespace-nowrap";
    }
  });
  renderModalItems();
}

function renderModalItems() {
  const grid = document.getElementById('modal-item-grid');
  const searchInput = document.getElementById('modal-search');
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  grid.innerHTML = '';

  const filtered = itemDatabase.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory = activeModalCategory === 'All' || item.category === activeModalCategory;
    return matchesSearch && matchesCategory;
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = "bg-gray-900 border border-gray-700 hover:border-blue-500 rounded-lg p-3 text-center cursor-pointer transition flex flex-col items-center relative";
    card.onclick = () => selectItem(item);
    
    card.innerHTML = `
      <span class="absolute top-1 left-1 text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">${item.category}</span>
      <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain my-2 fruit-img">
      <div class="font-bold text-sm text-white">${item.name.trim()}</div>
      <div class="text-green-400 text-xs font-semibold mt-1">${formatValue(item.value)}</div>
    `;
    grid.appendChild(card);
  });
}

function selectItem(item) {
  if (activeSide === 'your') {
    if (yourOffer.length < 4) yourOffer.push(item);
  } else if (activeSide === 'their') {
    if (theirOffer.length < 4) theirOffer.push(item);
  }
  closeModal();
  updateTradeUI();
}

function removeItem(side, index) {
  if (side === 'your') {
    yourOffer.splice(index, 1);
  } else {
    theirOffer.splice(index, 1);
  }
  updateTradeUI();
}

// --- 6. TRADE CALCULATOR LOGIC ---
function updateTradeUI() {
  const yourGrid = document.getElementById('your-offer-grid');
  const theirGrid = document.getElementById('their-offer-grid');

  yourGrid.innerHTML = '';
  theirGrid.innerHTML = '';

  let yourTotal = 0;
  let theirTotal = 0;

  yourOffer.forEach((item, index) => {
    if (typeof item.value === 'number') yourTotal += item.value;
    yourGrid.innerHTML += `
      <div class="bg-panel border border-gray-700 rounded-lg p-2 text-center relative flex flex-col justify-center items-center">
        <button onclick="removeItem('your', ${index})" class="absolute top-1 right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-red-500 z-10">&times;</button>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain fruit-img">
        <div class="text-xs font-bold text-white mt-1">${item.name.trim()}</div>
        <div class="text-xs text-green-400 font-bold">${formatValue(item.value)}</div>
      </div>
    `;
  });

  theirOffer.forEach((item, index) => {
    if (typeof item.value === 'number') theirTotal += item.value;
    theirGrid.innerHTML += `
      <div class="bg-panel border border-gray-700 rounded-lg p-2 text-center relative flex flex-col justify-center items-center">
        <button onclick="removeItem('their', ${index})" class="absolute top-1 right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-red-500 z-10">&times;</button>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain fruit-img">
        <div class="text-xs font-bold text-white mt-1">${item.name.trim()}</div>
        <div class="text-xs text-green-400 font-bold">${formatValue(item.value)}</div>
      </div>
    `;
  });

  document.getElementById('your-total').innerText = formatValue(yourTotal);
  document.getElementById('their-total').innerText = formatValue(theirTotal);

  calculateTradeStatus(yourTotal, theirTotal);
}

function calculateTradeStatus(yourTotal, theirTotal) {
  const statusBar = document.getElementById('status-bar');
  const statusText = document.getElementById('status-text');

  if (!statusBar || !statusText) return;

  if (yourTotal === 0 && theirTotal === 0) {
    statusBar.className = "w-full bg-panel p-4 rounded-lg text-center mb-6 border border-gray-700 transition-colors";
    statusText.innerText = "ADD FRUITS TO START TRADING";
    statusText.className = "text-2xl font-black text-gray-400";
    return;
  }

  const diff = theirTotal - yourTotal;

  const FIFTY_MILLION = 50000000;
  const TEN_MILLION   = 10000000;
  const FIVE_MILLION  = 5000000;

  if (diff >= FIFTY_MILLION) {
    statusBar.className = "w-full bg-emerald-900/40 p-4 rounded-lg text-center mb-6 border-2 border-emerald-500 shadow-lg";
    statusText.innerText = "BIG WIN (W)";
    statusText.className = "text-2xl font-black text-emerald-400";

  } else if (diff >= TEN_MILLION) {
    statusBar.className = "w-full bg-green-900/40 p-4 rounded-lg text-center mb-6 border-2 border-green-500";
    statusText.innerText = "WIN (W)";
    statusText.className = "text-2xl font-black text-green-400";

  } else if (diff >= FIVE_MILLION) {
    statusBar.className = "w-full bg-green-900/30 p-4 rounded-lg text-center mb-6 border-2 border-green-600";
    statusText.innerText = "SMALL WIN (W)";
    statusText.className = "text-2xl font-black text-green-300";

  } else if (diff <= -FIFTY_MILLION) {
    statusBar.className = "w-full bg-rose-900/40 p-4 rounded-lg text-center mb-6 border-2 border-rose-500 shadow-lg";
    statusText.innerText = "BIG LOSS (L)";
    statusText.className = "text-2xl font-black text-rose-500";

  } else if (diff <= -TEN_MILLION) {
    statusBar.className = "w-full bg-red-900/40 p-4 rounded-lg text-center mb-6 border-2 border-red-500";
    statusText.innerText = "LOSS (L)";
    statusText.className = "text-2xl font-black text-red-500";

  } else if (diff <= -FIVE_MILLION) {
    statusBar.className = "w-full bg-red-900/30 p-4 rounded-lg text-center mb-6 border-2 border-red-600";
    statusText.innerText = "SMALL LOSS (L)";
    statusText.className = "text-2xl font-black text-red-400";

  } else {
    statusBar.className = "w-full bg-yellow-900/40 p-4 rounded-lg text-center mb-6 border-2 border-yellow-500";
    statusText.innerText = "FAIR TRADE (F)";
    statusText.className = "text-2xl font-black text-yellow-400";
  }
}

// --- 7. VALUE LIST TAB LOGIC ---
function setValueCategory(category) {
  activeValueCategory = category;
  document.querySelectorAll('.val-cat-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.className = "val-cat-btn px-4 py-2 rounded-lg bg-blue-600 font-bold text-white text-sm whitespace-nowrap";
    } else {
      btn.className = "val-cat-btn px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 font-bold text-gray-300 text-sm whitespace-nowrap";
    }
  });
  renderValueList();
}

function filterValueList() {
  renderValueList();
}

function renderValueList() {
  const valueGrid = document.getElementById('value-list-grid');
  const searchInput = document.getElementById('value-search');
  if (!valueGrid) return;

  const search = searchInput ? searchInput.value.toLowerCase() : '';
  valueGrid.innerHTML = '';

  const filtered = itemDatabase.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory = activeValueCategory === 'All' || item.category === activeValueCategory;
    return matchesSearch && matchesCategory;
  });

  filtered.forEach(item => {
    const cardHTML = `
      <div class="bg-panel p-4 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition cursor-pointer relative flex flex-col items-center">
        <span class="absolute top-2 left-2 text-xs bg-gray-900 border border-gray-700 text-gray-300 px-2 py-0.5 rounded font-medium">${item.category}</span>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-20 h-20 object-contain my-3 fruit-img">
        <h4 class="font-bold text-lg text-white">${item.name.trim()}</h4>
        <p class="text-green-400 font-black mt-1">${formatValue(item.value)}</p>
        <p class="text-gray-500 text-sm mt-1">Demand: ${item.demand}</p>
      </div>
    `;
    valueGrid.innerHTML += cardHTML;
  });
}

// --- 8. INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
  renderValueList();
  updateTradeUI();
});