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
    id: "West Dragon", 
    name: "West Dragon", 
    category: "Physical", 
    value: 5.55e9, 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7LfBxxs8%2FWest-Dragon.png&w=1920&q=95" 
  },
   {
    id: "East Dragon", 
    name: "East Dragon", 
    category: "Physical", 
    value: 5.4e9, 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FgkzHzzjS%2FEast-Dragon.png&w=640&q=95" 
  },
  { 
    id: "kitsune", 
    name: "Kitsune", 
    category: "Physical", 
    value: 680000000, 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FCLxbycr9%2FKitsune.png&w=640&q=95" 
  },
  { 
    id: "Control", 
    name: "Control", 
    category: "Physical", 
    value: 170000000, 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Ft48L8bFV%2Flatest-cb-20251223165924.webp&w=640&q=95" 
  },
  { 
    id: "Yeti", 
    name: "Yeti", 
    category: "Physical", 
    value: 130000000, 
    demand: "8/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FmrJmk0Jc%2FYeti.png&w=640&q=95" 
  },
  { 
    id: "Gas", 
    name: "Gas", 
    category: "Physical", 
    value: 60000000, 
    demand: "8/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FXNCpc4fS%2F1000-cb-20241223162315.webp&w=640&q=95" 
  },
  {
    id: "Tiger",
    name: "Tiger",
    category: "Physical",
    value: 140000000,
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvBDS3KNp%2Fdownload.png&w=640&q=95"
  },
  {
    id: "Lightning",
    name: "Lightning",
    category: "Physical",
    value: 50000000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMHTHLFZD%2FRumble.png&w=640&q=95"
  },
  {
    id: "Venom",
    name: "Venom",
    category: "Physical",
    value: 20000000,
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGdtZLkF%2FVenom.png&w=640&q=95"
  },
  {
    id: "Dough",
    name: "Dough",
    category: "Physical",
    value: 30000000,
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwxckYyqR%2FDough.png&w=640&q=95"
  },
  {
    id: "Pain",
    name: "Pain",
    category: "Physical",
    value: 10000000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk21srj7%2FPain.png&w=640&q=95"
  },
  {
    id: "T-Rex",
    name: "T-Rex",
    category: "Physical",
    value: 20000000,
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGDtcwTf%2FT-Rex.png&w=1920&q=75"
  },
  {
    id: "Gravity",
    name: "Gravity",
    category: "Physical",
    value: 10000000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FD02Lw6vJ%2FGravity.png&w=1920&q=75"
  },
  {
    id: "Mammoth",
    name: "Mammoth",
    category: "Physical",
    value: 10000000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsXJGqWYV%2FMammoth.png&w=1080&q=75"
  },
  {
    id: "Spirit",
    name: "Spirit",
    category: "Physical",
    value: 10000000,
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwTpbhYvL%2FSpirit.png&w=640&q=95"
  },
  {
    id: "Shadow",
    name: "Shadow",
    category: "Physical",
    value: 6500000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FkGpGPvBd%2FShadow.png&w=1920&q=95"
  },
  {
    id: "Portal",
    name: "Portal",
    category: "Physical",
    value: 10000000,
    demand: "10/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDzkWz65v%2FPortal.png&w=640&q=75"
  },
  {
    id: "Buddha",
    name: "Buddha",
    category: "Physical",
    value: 10000000,
    demand: "10/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F02nZD6h1%2FBuddha.png&w=640&q=75"
  },
  {
    id: "Blizzard",
    name: "Blizzard",
    category: "Physical",
    value: 5000000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfTDBV72v%2FBlizzard.png&w=640&q=75"
  },
  {
    id: "Creation",
    name: "Creation",
    category: "Physical",
    value: 2500000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FHLctq6nT%2FCreation.png&w=640&q=75"
  },
  {
    id: "Phoenix",
    name: "Phoenix",
    category: "Physical",
    value: 2750000,
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDwbJFHrp%2FPhoenix.png&w=640&q=75"
  },
  {
    id: "Sound",
    name: "Sound",
    category: "Physical",
    value: 2500000,
    demand: "4/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Spider",
    name: "Spider",
    category: "Physical",
    value: 1500000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Love",
    name: "Love",
    category: "Physical",
    value: 1500000,
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NDwGFrK%2FLove.png&w=640&q=75"
  },
  {
    id: "Magma",
    name: "Magma",
    category: "Physical",
    value: 1150000,
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FW3VJ58JW%2FMagma.png&w=640&q=75"
  },
  {
    id: "Quake",
    name: "Quake",
    category: "Physical",
    value: 1000000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJRvt35Q%2FQuake.png&w=640&q=75"
  },
  {
    id: "Diamond",
    name: "Diamond",
    category: "Physical",
    value: 1000000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3N7CD7Bw%2FDiamond.png&w=640&q=75"
  },
  {
    id: "Light",
    name: "Light",
    category: "Physical",
    value: 800000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FK8dTMxcy%2FLight.png&w=640&q=75"
  },
  {
    id: "Ghost",
    name: "Ghost",
    category: "Physical",
    value: 800000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fk4PWk9Ly%2FGhost.png&w=640&q=75"
  },
  {
    id: "Eagle",
    name: "Eagle",
    category: "Physical",
    value: 800000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsxcPY864%2FEagle.png&w=640&q=75"
  },
  {
    id: "Rubber",
    name: "Rubber",
    category: "Physical",
    value: 700000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRQgjTrq%2FRubber.png&w=640&q=75"
  },
  {
    id: "Ice",
    name: "Ice",
    category: "Physical",
    value: 550000,
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzDjTPs7n%2FIce.png&w=640&q=75"
  },

  {
    id: "Sand",
    name: "Sand",
    category: "Physical",
    value: 420000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQxFVkwyN%2FSand.png&w=640&q=75"
  },
  {
    id: "Dark",
    name: "Dark",
    category: "Physical",
    value: 400000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NTCP7KD%2FDark.png&w=640&q=75"
  },
  {
    id: "Flame",
    name: "Flame",
    category: "Physical",
    value: 250000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8WhRLF0%2FFlame.png&w=640&q=75"
  },
  {
    id: "Spike",
    name: "Spike",
    category: "Physical",
    value: 180000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfbNLsLTk%2FSpike.png&w=640&q=75"
  },
  {
    id: "Smoke",
    name: "Smoke",
    category: "Physical",
    value: 100000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FnVRCmpTw%2FSmoke.png&w=640&q=75"
  },{
    id: "Bomb",
    name: "Bomb",
    category: "Physical",
    value: 80000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8NjP1zg%2FBomb.png&w=1920&q=75"
  },
  {
    id: "Spring",
    name: "Spring",
    category: "Physical",
    value: 60000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F15r7B7nT%2FSpring.png&w=1920&q=75"
  },
  {
    id: "Blade",
    name: "Blade",
    category: "Physical",
    value: 50000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbYQmYVTJ%2FBlade.png&w=1920&q=75"
  },
  {
    id: "Spin",
    name: "Spin",
    category: "Physical",
    value: 7500,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fjj4jSbLc%2FSpin.png&w=1920&q=75"
  },
  {
    id: "Rocket",
    name: "Rocket",
    category: "Physical",
    value: 5000,
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcHdrRJVP%2FRocket.png&w=1080&q=75"
  },

  // Permanent Fruits
  { 
    id: "perm-kitsune", 
    name: "Perm Kitsune", 
    category: "Perm", 
    value: 1200000000, 
    demand: "10/10", 
    image: "https://static.wikia.nocookie.net/bloxfruits/images/e/e4/KitsunePhysical.png" 
  },

  // Gamepasses
  { 
    id: "dark-blade", 
    name: "Dark Blade", 
    category: "Gamepass", 
    value: 450000000, 
    demand: "9/10", 
    image: "https://static.wikia.nocookie.net/bloxfruits/images/6/6c/Dark_Blade.png" 
  }
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