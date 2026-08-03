// --- 1. HELPER: FORMAT NUMBERS (K, M, B) ---
  function formatValue(num){
    if (!num || num === 0) return "0";

    if (num >=1000000000) {
      return (num / 1000000000).toLocaleString('en-US', {maximumFractionDigits: 2}) +'B';
    }

    if (num >= 1000000) {
      return (num / 1000000).toLocaleString('en-us', {maximumFractionDigits: 2}) + 'M';
    }

    if (num >= 1000) {
      return (num / 1000).toLocaleString('en-us', {maximumFractionDigits: 2}) + 'K';
    }
  }

// --- 1. ITEM DATABASE WITH IMAGE URLS ---
const itemDatabase = [
  // Physical Fruits
  {
    id: "West Dragon     ", 
    name: "West Dragon     ", 
    category: "Physical", 
    value: "5.55B", 
    demand: "10/10", 
    image: "https://i.postimg.cc/7LfBxxs8/West-Dragon.png" 
  },
   {
    id: "East Dragon     ", 
    name: "East Dragon     ", 
    category: "Physical", 
    value: "5.4B", 
    demand: "10/10", 
    image: "https://i.postimg.cc/gkzHzzjS/East-Dragon.png" 
  },
  { 
    id: "kitsune     ", 
    name: "Kitsune     ", 
    category: "Physical", 
    value: "680M", 
    demand: "10/10", 
    image: "https://i.postimg.cc/CLxbycr9/Kitsune.png" 
  },
  { 
    id: "Control     ", 
    name: "Control     ", 
    category: "Physical", 
    value: "170M", 
    demand: "10/10", 
    image: "https://i.postimg.cc/t48L8bFV/latest-cb-20251223165924.webp" 
  },
  { 
    id: "Yeti     ", 
    name: "Yeti     ", 
    category: "Physical", 
    value: "130M", 
    demand: "8/10", 
    image: "https://i.postimg.cc/mrJmk0Jc/Yeti.png" 
  },
  { 
    id: "Gas     ", 
    name: "Gas     ", 
    category: "Physical", 
    value: "60M", 
    demand: "8/10", 
    image: "https://i.postimg.cc/XNCpc4fS/1000-cb-20241223162315.webp" 
  },
  {
    id: "Tiger     ",
    name: "Tiger     ",
    category: "Physical",
    value: "140M",
    demand: "9/10",
    image: "https://i.postimg.cc/vBDS3KNp/download.png"
  },
  {
    id: "Lightning     ",
    name: "Lightning     ",
    category: "Physical",
    value: "50M",
    demand: "5/10",
    image: "https://i.postimg.cc/MHTHLFZD/Rumble.png"
  },
  {
    id: "Venom     ",
    name: "Venom     ",
    category: "Physical",
    value: "20M",
    demand: "8/10",
    image: "https://i.postimg.cc/zGdtZLkF/Venom.png"
  },
  {
    id: "Dough     ",
    name: "Dough     ",
    category: "Physical",
    value: "30M",
    demand: "9/10",
    image: "https://i.postimg.cc/wxckYyqR/Dough.png"
  },
  {
    id: "Pain     ",
    name: "Pain     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://i.postimg.cc/mk21srj7/Pain.png"
  },
  {
    id: "T-Rex     ",
    name: "T-Rex     ",
    category: "Physical",
    value: "20M",
    demand: "8/10",
    image: "https://i.postimg.cc/zGDtcwTf/T-Rex.png"
  },
  {
    id: "Gravity     ",
    name: "Gravity     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://i.postimg.cc/D02Lw6vJ/Gravity.png"
  },
  {
    id: "Mammoth     ",
    name: "Mammoth     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://i.postimg.cc/sXJGqWYV/Mammoth.png"
  },
  {
    id: "Spirit     ",
    name: "Spirit     ",
    category: "Physical",
    value: "10M",
    demand: "7/10",
    image: "https://i.postimg.cc/wTpbhYvL/Spirit.png"
  },
  {
    id: "Shadow     ",
    name: "Shadow     ",
    category: "Physical",
    value: "6.5M",
    demand: "5/10",
    image: "https://i.postimg.cc/kGpGPvBd/Shadow.png"
  },
  {
    id: "Portal     ",
    name: "Portal     ",
    category: "Physical",
    value: "10M",
    demand: "10/10",
    image: "https://i.postimg.cc/DzkWz65v/Portal.png"
  },
  {
    id: "Buddha     ",
    name: "Buddha     ",
    category: "Physical",
    value: "10M",
    demand: "10/10",
    image: "https://i.postimg.cc/02nZD6h1/Buddha.png"
  },
  {
    id: "Blizzard     ",
    name: "Blizzard     ",
    category: "Physical",
    value: "5M",
    demand: "5/10",
    image: "https://i.postimg.cc/fTDBV72v/Blizzard.png"
  },
  {
    id: "Creation     ",
    name: "Creation     ",
    category: "Physical",
    value: "25M",
    demand: "2/10",
    image: "https://i.postimg.cc/HLctq6nT/Creation.png"
  },
  {
    id: "Phoenix     ",
    name: "Phoenix     ",
    category: "Physical",
    value: "27.5M",
    demand: "3/10",
    image: "https://i.postimg.cc/DwbJFHrp/Phoenix.png"
  },
  {
    id: "Sound     ",
    name: "Sound     ",
    category: "Physical",
    value: "25M",
    demand: "4/10",
    image: "https://i.postimg.cc/MKgHs5C7/Sound.png"
  },
  {
    id: "Spider     ",
    name: "Spider     ",
    category: "Physical",
    value: "1.5M",
    demand: "2/10",
    image: "https://i.postimg.cc/MpRTgRwh/Spider.png"
  },
  {
    id: "Love     ",
    name: "Love     ",
    category: "Physical",
    value: "1.5M",
    demand: "3/10",
    image: "https://i.postimg.cc/0NDwGFrK/Love.png"
  },
  {
    id: "Magma     ",
    name: "Magma     ",
    category: "Physical",
    value: "1.15M",
    demand: "5/10",
    image: "https://i.postimg.cc/W3VJ58JW/Magma.png"
  },
  {
    id: "Quake     ",
    name: "Quake     ",
    category: "Physical",
    value: "1M",
    demand: "2/10",
    image: "https://i.postimg.cc/cJRvt35Q/Quake.png"
  },
  {
    id: "Diamond     ",
    name: "Diamond     ",
    category: "Physical",
    value: "1M",
    demand: "2/10",
    image: "https://i.postimg.cc/3N7CD7Bw/Diamond.png"
  },
  {
    id: "Light     ",
    name: "Light     ",
    category: "Physical",
    value: "800K",
    demand: "2/10",
    image: "https://i.postimg.cc/K8dTMxcy/Light.png"
  },
  {
    id: "Ghost     ",
    name: "Ghost     ",
    category: "Physical",
    value: "800K",
    demand: "1/10",
    image: "https://i.postimg.cc/k4PWk9Ly/Ghost.png"
  },
  {
    id: "Eagle     ",
    name: "Eagle     ",
    category: "Physical",
    value: "800K",
    demand: "2/10",
    image: "https://i.postimg.cc/sxcPY864/Eagle.png"
  },
  {
    id: "Rubber     ",
    name: "Rubber     ",
    category: "Physical",
    value: "700K",
    demand: "1/10",
    image: "https://i.postimg.cc/qRQgjTrq/Rubber.png"
  },
  {
    id: "Ice     ",
    name: "Ice     ",
    category: "Physical",
    value: "550K",
    demand: "2/10",
    image: "https://i.postimg.cc/zDjTPs7n/Ice.png"
  },
  {
    id: "Sand     ",
    name: "Sand     ",
    category: "Physical",
    value: "420K",
    demand: "1/10",
    image: "https://i.postimg.cc/QxFVkwyN/Sand.png"
  },
  {
    id: "Dark     ",
    name: "Dark     ",
    category: "Physical",
    value: "400K",
    demand: "1/10",
    image: "https://i.postimg.cc/0NTCP7KD/Dark.png"
  },
  {
    id: "Flame     ",
    name: "Flame     ",
    category: "Physical",
    value: "250K",
    demand: "1/10",
    image: "https://i.postimg.cc/y8WhRLF0/Flame.png"
  },
  {
    id: "Spike     ",
    name: "Spike     ",
    category: "Physical",
    value: "180K",
    demand: "1/10",
    image: "https://i.postimg.cc/fbNLsLTk/Spike.png"
  },
  {
    id: "Smoke     ",
    name: "Smoke     ",
    category: "Physical",
    value: "100K",
    demand: "1/10",
    image: "https://i.postimg.cc/nVRCmpTw/Smoke.png"
  },{
    id: "Bomb     ",
    name: "Bomb     ",
    category: "Physical",
    value: "80K",
    demand: "1/10",
    image: "https://i.postimg.cc/y8NjP1zg/Bomb.png"
  },
  {
    id: "Spring     ",
    name: "Spring     ",
    category: "Physical",
    value: "60K",
    demand: "1/10",
    image: "https://i.postimg.cc/15r7B7nT/Spring.png"
  },
  {
    id: "Blade     ",
    name: "Blade     ",
    category: "Physical",
    value: "50K",
    demand: "1/10",
    image: "https://i.postimg.cc/bYQmYVTJ/Blade.png"
  },
  {
    id: "Spin     ",
    name: "Spin     ",
    category: "Physical",
    value: "7.5K",
    demand: "1/10",
    image: "https://i.postimg.cc/jj4jSbLc/Spin.png"
  },
  {
    id: "Rocket     ",
    name: "Rocket     ",
    category: "Physical",
    value: "5K",
    demand: "1/10",
    image: "https://i.postimg.cc/cHdrRJVP/Rocket.png"
  },

  // Permanent Fruits
  
   {
    id: "Perm Dragon     ", 
    name: "Perm Dragon     ", 
    category: "Permanent",
    value: "7.42B", 
    demand: "9/10",  
    image: "https://img.bloxfruitcalculator.org/fruits/EastDragonFruit.png"
  },
  { 
    id: "Perm kitsune     ", 
    name: "Perm Kitsune     ", 
    category: "Permanent", 
    value: "6.23B", 
    demand: "10/10", 
    image: "https://i.postimg.cc/CLxbycr9/Kitsune.png" 
  },
  { 
    id: "Perm Control     ", 
    name: "Perm Control     ", 
    category: "Permanent", 
    value: "6.23B", 
    demand: "10/10", 
    image: "https://i.postimg.cc/t48L8bFV/latest-cb-20251223165924.webp" 
  },
  { 
    id: "Perm Yeti     ", 
    name: "Perm Yeti     ", 
    category: "Permanent", 
    value: "5.04B", 
    demand: "9/10", 
    image: "https://i.postimg.cc/mrJmk0Jc/Yeti.png" 
  },
  { 
    id: "Perm Gas     ", 
    name: "Perm Gas     ", 
    category: "Permanent", 
    value: "4.36B", 
    demand: "7/10", 
    image: "https://i.postimg.cc/XNCpc4fS/1000-cb-20241223162315.webp" 
  },
  {
    id: "Perm Tiger     ",
    name: "Perm Tiger     ",
    category: "Permanent",
    value: "5.04B",
    demand: "9/10",
    image: "https://i.postimg.cc/vBDS3KNp/download.png"
  },
  {
    id: "Perm Lightning     ",
    name: "Perm Lightning     ",
    category: "Permanent",
    value: "2.65B",
    demand: "8/10",
    image: "https://i.postimg.cc/vBDS3KNp/download.png"
  },
  {
    id: "Perm Venom     ",
    name: "Perm Venom     ",
    category: "Permanent",
    value: "3.85B",
    demand: "7/10",
    image: "https://i.postimg.cc/zGdtZLkF/Venom.png"
  },
  {
    id: "Perm Dough     ",
    name: "Perm Dough     ",
    category: "Permanent",
    value: "3.85B",
    demand: "8/10",
    image: "https://i.postimg.cc/wxckYyqR/Dough.png"
  },
  {
    id: "Perm Pain     ",
    name: "Perm Pain     ",
    category: "Permanent",
    value: "2.82B",
    demand: "8/10",
    image: "https://i.postimg.cc/mk21srj7/Pain.png"
  },
  {
    id: "Perm T-Rex     ",
    name: "Perm T-Rex     ",
    category: "Permanent",
    value: "3.85B",
    demand: "8/10",
    image: "https://i.postimg.cc/zGDtcwTf/T-Rex.png"
  },
  {
    id: "Perm Gravity     ",
    name: "Perm Gravity     ",
    category: "Permanent",
    value: "3.34B",
    demand: "7/10",
    image: "https://i.postimg.cc/D02Lw6vJ/Gravity.png"
  },
  {
    id: "Perm Mammoth     ",
    name: "Perm Mammoth     ",
    category: "Permanent",
    value: "3.85B",
    demand: "6/10",
    image: "https://i.postimg.cc/sXJGqWYV/Mammoth.png"
  },
  {
    id: "Perm Spirit     ",
    name: "Perm Spirit     ",
    category: "Permanent",
    value: "4.36B",
    demand: "5/10",
    image: "https://i.postimg.cc/wTpbhYvL/Spirit.png"
  },
  {
    id: "Perm Shadow     ",
    name: "Perm Shadow     ",
    category: "Permanent",
    value: "3.85B",
    demand: "5/10",
    image: "https://i.postimg.cc/kGpGPvBd/Shadow.png"
  },
  {
    id: "Perm Portal     ",
    name: "Perm Portal     ",
    category: "Permanent",
    value: "2.39B",
    demand: "9/10",
    image: "https://i.postimg.cc/DzkWz65v/Portal.png"
  },
  {
    id: "Perm Buddha     ",
    name: "Perm Buddha     ",
    category: "Permanent",
    value: "1.83B",
    demand: "10/10",
    image: "https://i.postimg.cc/02nZD6h1/Buddha.png"
  },
  {
    id: "Perm Blizzard     ",
    name: "Perm Blizzard     ",
    category: "Permanent",
    value: "2.86B",
    demand: "6/10",
    image: "https://i.postimg.cc/fTDBV72v/Blizzard.png"
  },
  {
    id: "Perm Creation     ",
    name: "Perm Creation     ",
    category: "Permanent",
    value: "1.96B",
    demand: "3/10",
    image: "https://i.postimg.cc/HLctq6nT/Creation.png"
  },
  {
    id: "Perm Phoenix     ",
    name: "Perm Phoenix     ",
    category: "Permanent",
    value: "2.39B",
    demand: "3/10",
    image: "https://i.postimg.cc/DwbJFHrp/Phoenix.png"
  },
  {
    id: "Perm Sound     ",
    name: "Perm Sound     ",
    category: "Permanent",
    value: "2.22B",
    demand: "3/10",
    image: "https://i.postimg.cc/MKgHs5C7/Sound.png"
  },
  {
    id: "Perm Spider     ",
    name: "Perm Spider     ",
    category: "Permanent",
    value: "2.05B",
    demand: "3/10",
    image: "https://i.postimg.cc/MpRTgRwh/Spider.png"
  },
  {
    id: "Perm Love     ",
    name: "Perm Love     ",
    category: "Permanent",
    value: "1.87B",
    demand: "3/10",
    image: "https://i.postimg.cc/0NDwGFrK/Love.png"
  },
  {
    id: "Perm Magma     ",
    name: "Perm Magma     ",
    category: "Permanent",
    value: "1.23B",
    demand: "7/10",
    image: "https://i.postimg.cc/W3VJ58JW/Magma.png"
  },
  {
    id: "Perm Quake     ",
    name: "Perm Quake     ",
    category: "Permanent",
    value: "1.49B",
    demand: "3/10",
    image: "https://i.postimg.cc/cJRvt35Q/Quake.png"
  },
  {
    id: "Perm Diamond     ",
    name: "Perm Diamond     ",
    category: "Permanent",
    value: "900M",
    demand: "3/10",
    image: "https://i.postimg.cc/3N7CD7Bw/Diamond.png"
  },
  {
    id: "Perm Light     ",
    name: "Perm Light     ",
    category: "Permanent",
    value: "1.07B",
    demand: "7/10",
    image: "https://i.postimg.cc/K8dTMxcy/Light.png"
  },
  {
    id: "Perm Ghost     ",
    name: "Perm Ghost     ",
    category: "Permanent",
    value: "1.17B",
    demand: "2/10",
    image: "https://i.postimg.cc/k4PWk9Ly/Ghost.png"
  },
  {
    id: "Perm Eagle     ",
    name: "Perm Eagle     ",
    category: "Permanent",
    value: "880M",
    demand: "3/10",
    image: "https://i.postimg.cc/sxcPY864/Eagle.png"
  },
  {
    id: "Perm Rubber     ",
    name: "Perm Rubber     ",
    category: "Permanent",
    value: "111M",
    demand: "3/10",
    image: "https://i.postimg.cc/qRQgjTrq/Rubber.png"
  },
  {
    id: "Perm Ice     ",
    name: "Perm Ice     ",
    category: "Permanent",
    value: "680M",
    demand: "6/10",
    image: "https://i.postimg.cc/zDjTPs7n/Ice.png"
  },

  {
    id: "Perm Sand     ",
    name: "Perm Sand  ",
    category: "Permanent",
    value: "770M",
    demand: "2/10",
    image: "https://i.postimg.cc/QxFVkwyN/Sand.png"
  },
  {
    id: "Perm Dark     ",
    name: "Perm Dark  ",
    category: "Permanent",
    value: "860M",
    demand: "3/10",
    image: "https://i.postimg.cc/0NTCP7KD/Dark.png"
  },
  {
    id: "Perm Flame     ",
    name: "Perm Flame   ",
    category: "Permanent",
    value: "450M",
    demand: "2/10",
    image: "https://i.postimg.cc/y8WhRLF0/Flame.png"
  },
  {
    id: "Perm Spike     ",
    name: "Perm Spike   ",
    category: "Permanent",
    value: "140M",
    demand: "1/10",
    image: "https://i.postimg.cc/fbNLsLTk/Spike.png"
  },
  {
    id: "Perm Smoke     ",
    name: "Perm Smoke     ",
    category: "Permanent",
    value: "120M",
    demand: "2/10",
    image: "https://i.postimg.cc/nVRCmpTw/Smoke.png"
  },{
    id: "Perm Bomb     ",
    name: "Perm Bomb     ",
    category: "Permanent",
    value: "90M",
    demand: "1/10",
    image: "https://i.postimg.cc/y8NjP1zg/Bomb.png"
  },
  {
    id: "Perm Spring     ",
    name: "Perm Spring     ",
    category: "Permanent",
    value: "60M",
    demand: "1/10",
    image: "https://i.postimg.cc/15r7B7nT/Spring.png"
  },
  {
    id: "Perm Blade     ",
    name: "Perm Blade     ",
    category: "Permanent",
    value: "20M",
    demand: "2/10",
    image: "https://i.postimg.cc/bYQmYVTJ/Blade.png"
  },
  {
    id: "Perm Spin     ",
    name: "Perm Spin     ",
    category: "Permanent",
    value: "15M",
    demand: "1/10",
    image: "https://i.postimg.cc/jj4jSbLc/Spin.png"
  },
  {
    id: "Perm Rocket     ",
    name: "Perm Rocket     ",
    category: "Permanent",
    value: "10M",
    demand: "2/10",
    image: "https://i.postimg.cc/cHdrRJVP/Rocket.png"
  },

  // Gamepasses
  {
    id: "Fruit Notifier     ",
    name: "Fruit Notifier     ",
    category: "Gamepass",
    value: "5.17B",
    demand: "9/10",
    image: "https://i.postimg.cc/Zqdr70sR/Fruit-Notifer.png"
  },
  {
    id: "Dark Blade     ",
    name: "Dark Blade     ",
    category: "Gamepass",
    value: "1.04B",
    demand: "9/10",
    image: "https://i.postimg.cc/fLYfLkYF/Dark-Blade.png"
  },
  {
    id: "Mythical Scrolls     ",
    name: "Mythical Scrolls     ",
    category: "Gamepass",
    value: "1.52B",
    demand: "4/10",
    image: "https://i.postimg.cc/d3HktKNp/Mythical-Scrolls.png"
  },
  {
    id: "Legendary Scrolls     ",
    name: "Legendary Scrolls     ",
    category: "Gamepass",
    value: "680M",
    demand: "3/10",
    image: "https://i.postimg.cc/YqDYtQJ0/Legendary-Scrolls.png"
  },
  {
    id: "+1 Fruit Storage     ",
    name: "+1 Fruit Storage     ",
    category: "Gamepass",
    value: "450M",
    demand: "10/10",
    image: "https://i.postimg.cc/hj7pmcdF/1-Fruit-Storage.png"
  },
  {
    id: "2x Mastery     ",
    name: "2x Mastery     ",
    category: "Gamepass",
    value: "450M",
    demand: "10/10",
    image: "https://i.postimg.cc/0jdntrQm/2x-Mastery.png"
  },
  {
    id: "2x Money     ",
    name: "2x Money     ",
    category: "Gamepass",
    value: "450M",
    demand: "10/10",
    image: "https://i.postimg.cc/rsLgC58M/2x-Money.png"
  },
  {
    id: "2x Boss Drops     ",
    name: "2x Boss Drops     ",
    category: "Gamepass",
    value: "300M",
    demand: "8/10",
    image: "https://i.postimg.cc/HxMBy616/2x-Boss-Drops.png"
  },
  {
    id: "Fast Boats     ",
    name: "Fast Boats     ",
    category: "Gamepass",
    value: "300M",
    demand: "9/10",
    image: "https://i.postimg.cc/NjV6kR4S/Fast-Boats.png"
  },

];

// Helper fallback function in case an image URL breaks
const imgFallback = "https://via.placeholder.com/100?text=Fruit";

// --- 2. STATE MANAGEMENT ---
let activeSide = null;
let yourOffer = [];
let theirOffer = [];

let activeModalCategory = 'All';
let activeValueCategory = 'All';

// --- 3. MODAL LOGIC ---
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
  const search = document.getElementById('modal-search').value.toLowerCase();
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
    
    // NOW USING <img> TAG
    card.innerHTML = `
      <span class="absolute top-1 left-1 text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">${item.category}</span>
      <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain my-2 fruit-img">
      <div class="font-bold text-sm text-white">${item.name}</div>
      <div class="text-green-400 text-xs font-semibold mt-1">${item.value.toLocaleString()}</div>
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

// --- 4. TRADE CALCULATOR SLOTS ---
function updateTradeUI() {
  const yourGrid = document.getElementById('your-offer-grid');
  const theirGrid = document.getElementById('their-offer-grid');

  yourGrid.innerHTML = '';
  theirGrid.innerHTML = '';

  let yourTotal = 0;
  let theirTotal = 0;

  yourOffer.forEach((item, index) => {
    yourTotal += item.value;
    // NOW USING <img> TAG
    yourGrid.innerHTML += `
      <div class="bg-panel border border-gray-700 rounded-lg p-2 text-center relative flex flex-col justify-center items-center">
        <button onclick="removeItem('your', ${index})" class="absolute top-1 right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-red-500 z-10">&times;</button>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain fruit-img">
        <span class="text-xs font-bold mt-1 text-white">${item.name}</span>
      </div>
    `;
  });

  theirOffer.forEach((item, index) => {
    theirTotal += item.value;
    // NOW USING <img> TAG
    theirGrid.innerHTML += `
      <div class="bg-panel border border-gray-700 rounded-lg p-2 text-center relative flex flex-col justify-center items-center">
        <button onclick="removeItem('their', ${index})" class="absolute top-1 right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold hover:bg-red-500 z-10">&times;</button>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-12 h-12 object-contain fruit-img">
        <span class="text-xs font-bold mt-1 text-white">${item.name}</span>
      </div>
    `;
  });

  document.getElementById('your-total').innerText = yourTotal.toLocaleString();
  document.getElementById('their-total').innerText = theirTotal.toLocaleString();

  calculateTradeStatus(yourTotal, theirTotal);
}

function calculateTradeStatus(yourTotal, theirTotal) {
  const statusBar = document.getElementById('status-bar');
  const statusText = document.getElementById('status-text');

  if (yourTotal === 0 && theirTotal === 0) {
    statusBar.className = "w-full bg-panel p-4 rounded-lg text-center mb-6 border border-gray-700";
    statusText.innerText = "ADD FRUITS TO START TRADING";
    statusText.className = "text-2xl font-black text-gray-400";
    return;
  }

  const ratio = yourTotal > 0 ? (theirTotal / yourTotal) : 1;

  if (theirTotal === 0 && yourTotal > 0) {
    statusBar.className = "w-full bg-red-900/40 p-4 rounded-lg text-center mb-6 border-2 border-red-500";
    statusText.innerText = "BIG LOSS (L)";
    statusText.className = "text-2xl font-black text-red-500";
  } else if (ratio >= 1.15) {
    statusBar.className = "w-full bg-green-900/40 p-4 rounded-lg text-center mb-6 border-2 border-green-500";
    statusText.innerText = "BIG WIN (W)";
    statusText.className = "text-2xl font-black text-green-400";
  } else if (ratio >= 0.90 && ratio < 1.15) {
    statusBar.className = "w-full bg-yellow-900/40 p-4 rounded-lg text-center mb-6 border-2 border-yellow-500";
    statusText.innerText = "FAIR TRADE (F)";
    statusText.className = "text-2xl font-black text-yellow-400";
  } else {
    statusBar.className = "w-full bg-red-900/40 p-4 rounded-lg text-center mb-6 border-2 border-red-500";
    statusText.innerText = "LOSS (L)";
    statusText.className = "text-2xl font-black text-red-500";
  }
}

// --- 5. VALUE LIST ---
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

function renderValueList() {
  const valueGrid = document.getElementById('value-list-grid');
  const searchInput = document.getElementById('value-search');
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  valueGrid.innerHTML = '';

  const filtered = itemDatabase.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory = activeValueCategory === 'All' || item.category === activeValueCategory;
    return matchesSearch && matchesCategory;
  });

  filtered.forEach(item => {
    // NOW USING <img> TAG
    const cardHTML = `
      <div class="bg-panel p-4 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition cursor-pointer relative flex flex-col items-center">
        <span class="absolute top-2 left-2 text-xs bg-gray-900 border border-gray-700 text-gray-300 px-2 py-0.5 rounded font-medium">${item.category}</span>
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${imgFallback}'" class="w-20 h-20 object-contain my-3 fruit-img">
        <h4 class="font-bold text-lg">${item.name}</h4>
        <p class="text-green-400 font-black mt-1">${item.value.toLocaleString()}</p>
        <p class="text-gray-500 text-sm mt-1">Demand: ${item.demand}</p>
      </div>
    `;
    valueGrid.innerHTML += cardHTML;
  });
}

function filterValueList() {
  renderValueList();
}

// --- 6. NAVIGATION LOGIC ---
function switchTab(tab) {
  const calcView = document.getElementById('view-calculator');
  const valView = document.getElementById('view-values');
  const btnCalc = document.getElementById('btn-calc');
  const btnVal = document.getElementById('btn-values');

  if (tab === 'calculator') {
    calcView.classList.remove('hidden');
    valView.classList.add('hidden');
    btnCalc.classList.add('bg-blue-600', 'text-white');
    btnCalc.classList.remove('hover:bg-gray-700', 'text-gray-300');
    btnVal.classList.remove('bg-blue-600', 'text-white');
    btnVal.classList.add('hover:bg-gray-700', 'text-gray-300');
  } else {
    valView.classList.remove('hidden');
    calcView.classList.add('hidden');
    btnVal.classList.add('bg-blue-600', 'text-white');
    btnVal.classList.remove('hover:bg-gray-700', 'text-gray-300');
    btnCalc.classList.remove('bg-blue-600', 'text-white');
    btnCalc.classList.add('hover:bg-gray-700', 'text-gray-300');
  }
}

window.onload = () => {
  renderValueList();
};