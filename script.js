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
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F7LfBxxs8%2FWest-Dragon.png&w=1920&q=95" 
  },
   {
    id: "East Dragon     ", 
    name: "East Dragon     ", 
    category: "Physical", 
    value: "5.4B", 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FgkzHzzjS%2FEast-Dragon.png&w=640&q=95" 
  },
  { 
    id: "kitsune     ", 
    name: "Kitsune     ", 
    category: "Physical", 
    value: "680M", 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FCLxbycr9%2FKitsune.png&w=640&q=95" 
  },
  { 
    id: "Control     ", 
    name: "Control     ", 
    category: "Physical", 
    value: "170M", 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Ft48L8bFV%2Flatest-cb-20251223165924.webp&w=640&q=95" 
  },
  { 
    id: "Yeti     ", 
    name: "Yeti     ", 
    category: "Physical", 
    value: "130M", 
    demand: "8/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FmrJmk0Jc%2FYeti.png&w=640&q=95" 
  },
  { 
    id: "Gas     ", 
    name: "Gas     ", 
    category: "Physical", 
    value: "60M", 
    demand: "8/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FXNCpc4fS%2F1000-cb-20241223162315.webp&w=640&q=95" 
  },
  {
    id: "Tiger     ",
    name: "Tiger     ",
    category: "Physical",
    value: "140M",
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvBDS3KNp%2Fdownload.png&w=640&q=95"
  },
  {
    id: "Lightning     ",
    name: "Lightning     ",
    category: "Physical",
    value: "50M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMHTHLFZD%2FRumble.png&w=640&q=95"
  },
  {
    id: "Venom     ",
    name: "Venom     ",
    category: "Physical",
    value: "20M",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGdtZLkF%2FVenom.png&w=640&q=95"
  },
  {
    id: "Dough     ",
    name: "Dough     ",
    category: "Physical",
    value: "30M",
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwxckYyqR%2FDough.png&w=640&q=95"
  },
  {
    id: "Pain     ",
    name: "Pain     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk21srj7%2FPain.png&w=640&q=95"
  },
  {
    id: "T-Rex     ",
    name: "T-Rex     ",
    category: "Physical",
    value: "20M",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGDtcwTf%2FT-Rex.png&w=1920&q=75"
  },
  {
    id: "Gravity     ",
    name: "Gravity     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FD02Lw6vJ%2FGravity.png&w=1920&q=75"
  },
  {
    id: "Mammoth     ",
    name: "Mammoth     ",
    category: "Physical",
    value: "10M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsXJGqWYV%2FMammoth.png&w=1080&q=75"
  },
  {
    id: "Spirit     ",
    name: "Spirit     ",
    category: "Physical",
    value: "10M",
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwTpbhYvL%2FSpirit.png&w=640&q=95"
  },
  {
    id: "Shadow     ",
    name: "Shadow     ",
    category: "Physical",
    value: "6.5M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FkGpGPvBd%2FShadow.png&w=1920&q=95"
  },
  {
    id: "Portal     ",
    name: "Portal     ",
    category: "Physical",
    value: "10M",
    demand: "10/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDzkWz65v%2FPortal.png&w=640&q=75"
  },
  {
    id: "Buddha     ",
    name: "Buddha     ",
    category: "Physical",
    value: "10M",
    demand: "10/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F02nZD6h1%2FBuddha.png&w=640&q=75"
  },
  {
    id: "Blizzard     ",
    name: "Blizzard     ",
    category: "Physical",
    value: "5M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfTDBV72v%2FBlizzard.png&w=640&q=75"
  },
  {
    id: "Creation     ",
    name: "Creation     ",
    category: "Physical",
    value: "25M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FHLctq6nT%2FCreation.png&w=640&q=75"
  },
  {
    id: "Phoenix     ",
    name: "Phoenix     ",
    category: "Physical",
    value: "27.5M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDwbJFHrp%2FPhoenix.png&w=640&q=75"
  },
  {
    id: "Sound     ",
    name: "Sound     ",
    category: "Physical",
    value: "25M",
    demand: "4/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Spider     ",
    name: "Spider     ",
    category: "Physical",
    value: "1.5M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Love     ",
    name: "Love     ",
    category: "Physical",
    value: "1.5M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NDwGFrK%2FLove.png&w=640&q=75"
  },
  {
    id: "Magma     ",
    name: "Magma     ",
    category: "Physical",
    value: "1.15M",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FW3VJ58JW%2FMagma.png&w=640&q=75"
  },
  {
    id: "Quake     ",
    name: "Quake     ",
    category: "Physical",
    value: "1M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJRvt35Q%2FQuake.png&w=640&q=75"
  },
  {
    id: "Diamond     ",
    name: "Diamond     ",
    category: "Physical",
    value: "1M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3N7CD7Bw%2FDiamond.png&w=640&q=75"
  },
  {
    id: "Light     ",
    name: "Light     ",
    category: "Physical",
    value: "800K",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FK8dTMxcy%2FLight.png&w=640&q=75"
  },
  {
    id: "Ghost     ",
    name: "Ghost     ",
    category: "Physical",
    value: "800K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fk4PWk9Ly%2FGhost.png&w=640&q=75"
  },
  {
    id: "Eagle     ",
    name: "Eagle     ",
    category: "Physical",
    value: "800K",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsxcPY864%2FEagle.png&w=640&q=75"
  },
  {
    id: "Rubber     ",
    name: "Rubber     ",
    category: "Physical",
    value: "700K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRQgjTrq%2FRubber.png&w=640&q=75"
  },
  {
    id: "Ice     ",
    name: "Ice     ",
    category: "Physical",
    value: "550K",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzDjTPs7n%2FIce.png&w=640&q=75"
  },
  {
    id: "Sand     ",
    name: "Sand     ",
    category: "Physical",
    value: "420K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQxFVkwyN%2FSand.png&w=640&q=75"
  },
  {
    id: "Dark     ",
    name: "Dark     ",
    category: "Physical",
    value: "400K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NTCP7KD%2FDark.png&w=640&q=75"
  },
  {
    id: "Flame     ",
    name: "Flame     ",
    category: "Physical",
    value: "250K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8WhRLF0%2FFlame.png&w=640&q=75"
  },
  {
    id: "Spike     ",
    name: "Spike     ",
    category: "Physical",
    value: "180K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfbNLsLTk%2FSpike.png&w=640&q=75"
  },
  {
    id: "Smoke     ",
    name: "Smoke     ",
    category: "Physical",
    value: "100K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FnVRCmpTw%2FSmoke.png&w=640&q=75"
  },{
    id: "Bomb     ",
    name: "Bomb     ",
    category: "Physical",
    value: "80K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8NjP1zg%2FBomb.png&w=1920&q=75"
  },
  {
    id: "Spring     ",
    name: "Spring     ",
    category: "Physical",
    value: "60K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F15r7B7nT%2FSpring.png&w=1920&q=75"
  },
  {
    id: "Blade     ",
    name: "Blade     ",
    category: "Physical",
    value: "50K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbYQmYVTJ%2FBlade.png&w=1920&q=75"
  },
  {
    id: "Spin     ",
    name: "Spin     ",
    category: "Physical",
    value: "7.5K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fjj4jSbLc%2FSpin.png&w=1920&q=75"
  },
  {
    id: "Rocket     ",
    name: "Rocket     ",
    category: "Physical",
    value: "5K",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcHdrRJVP%2FRocket.png&w=1080&q=75"
  },

  // Permanent Fruits
  
   {
    id: "Perm Dragon     ", 
    name: "Perm Dragon     ", 
    category: "Permanent",
    value: "7.42B", 
    demand: "9/10",  
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FgkzHzzjS%2FEast-Dragon.png&w=640&q=95" 
  },
  { 
    id: "Perm kitsune     ", 
    name: "Perm Kitsune     ", 
    category: "Permanent", 
    value: "6.23B", 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FCLxbycr9%2FKitsune.png&w=640&q=95" 
  },
  { 
    id: "Perm Control     ", 
    name: "Perm Control     ", 
    category: "Permanent", 
    value: "6.23B", 
    demand: "10/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Ft48L8bFV%2Flatest-cb-20251223165924.webp&w=640&q=95" 
  },
  { 
    id: "Perm Yeti     ", 
    name: "Perm Yeti     ", 
    category: "Permanent", 
    value: "5.04B", 
    demand: "9/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FmrJmk0Jc%2FYeti.png&w=640&q=95" 
  },
  { 
    id: "Perm Gas     ", 
    name: "Perm Gas     ", 
    category: "Permanent", 
    value: "4.36B", 
    demand: "7/10", 
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FXNCpc4fS%2F1000-cb-20241223162315.webp&w=640&q=95" 
  },
  {
    id: "Perm Tiger     ",
    name: "Perm Tiger     ",
    category: "Permanent",
    value: "5.04B",
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvBDS3KNp%2Fdownload.png&w=640&q=95"
  },
  {
    id: "Perm Lightning     ",
    name: "Perm Lightning     ",
    category: "Permanent",
    value: "2.65B",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMHTHLFZD%2FRumble.png&w=640&q=95"
  },
  {
    id: "Perm Venom     ",
    name: "Perm Venom     ",
    category: "Permanent",
    value: "3.85B",
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGdtZLkF%2FVenom.png&w=640&q=95"
  },
  {
    id: "Perm Dough     ",
    name: "Perm Dough     ",
    category: "Permanent",
    value: "3.85B",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwxckYyqR%2FDough.png&w=640&q=95"
  },
  {
    id: "Perm Pain     ",
    name: "Perm Pain     ",
    category: "Permanent",
    value: "2.82B",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk21srj7%2FPain.png&w=640&q=95"
  },
  {
    id: "Perm T-Rex     ",
    name: "Perm T-Rex     ",
    category: "Permanent",
    value: "3.85B",
    demand: "8/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGDtcwTf%2FT-Rex.png&w=1920&q=75"
  },
  {
    id: "Perm Gravity     ",
    name: "Perm Gravity     ",
    category: "Permanent",
    value: "3.34B",
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FD02Lw6vJ%2FGravity.png&w=1920&q=75"
  },
  {
    id: "Perm Mammoth     ",
    name: "Perm Mammoth     ",
    category: "Permanent",
    value: "3.85B",
    demand: "6/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsXJGqWYV%2FMammoth.png&w=1080&q=75"
  },
  {
    id: "Perm Spirit     ",
    name: "Perm Spirit     ",
    category: "Permanent",
    value: "4.36B",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwTpbhYvL%2FSpirit.png&w=640&q=95"
  },
  {
    id: "Perm Shadow     ",
    name: "Perm Shadow     ",
    category: "Permanent",
    value: "3.85B",
    demand: "5/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FkGpGPvBd%2FShadow.png&w=1920&q=95"
  },
  {
    id: "Perm Portal     ",
    name: "Perm Portal     ",
    category: "Permanent",
    value: "2.39B",
    demand: "9/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDzkWz65v%2FPortal.png&w=640&q=75"
  },
  {
    id: "Perm Buddha     ",
    name: "Perm Buddha     ",
    category: "Permanent",
    value: "1.83B",
    demand: "10/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F02nZD6h1%2FBuddha.png&w=640&q=75"
  },
  {
    id: "Perm Blizzard     ",
    name: "Perm Blizzard     ",
    category: "Permanent",
    value: "2.86B",
    demand: "6/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfTDBV72v%2FBlizzard.png&w=640&q=75"
  },
  {
    id: "Perm Creation     ",
    name: "Perm Creation     ",
    category: "Permanent",
    value: "1.96B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FHLctq6nT%2FCreation.png&w=640&q=75"
  },
  {
    id: "Perm Phoenix     ",
    name: "Perm Phoenix     ",
    category: "Permanent",
    value: "2.39B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDwbJFHrp%2FPhoenix.png&w=640&q=75"
  },
  {
    id: "Perm Sound     ",
    name: "Perm Sound     ",
    category: "Permanent",
    value: "2.22B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Perm Spider     ",
    name: "Perm Spider     ",
    category: "Permanent",
    value: "2.05B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMKgHs5C7%2FSound.png&w=640&q=75"
  },
  {
    id: "Perm Love     ",
    name: "Perm Love     ",
    category: "Permanent",
    value: "1.87B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NDwGFrK%2FLove.png&w=640&q=75"
  },
  {
    id: "Perm Magma     ",
    name: "Perm Magma     ",
    category: "Permanent",
    value: "1.23B",
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FW3VJ58JW%2FMagma.png&w=640&q=75"
  },
  {
    id: "Perm Quake     ",
    name: "Perm Quake     ",
    category: "Permanent",
    value: "1.49B",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJRvt35Q%2FQuake.png&w=640&q=75"
  },
  {
    id: "Perm Diamond     ",
    name: "Perm Diamond     ",
    category: "Permanent",
    value: "900M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3N7CD7Bw%2FDiamond.png&w=640&q=75"
  },
  {
    id: "Perm Light     ",
    name: "Perm Light     ",
    category: "Permanent",
    value: "1.07B",
    demand: "7/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FK8dTMxcy%2FLight.png&w=640&q=75"
  },
  {
    id: "Perm Ghost     ",
    name: "Perm Ghost     ",
    category: "Permanent",
    value: "1.17B",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fk4PWk9Ly%2FGhost.png&w=640&q=75"
  },
  {
    id: "Perm Eagle     ",
    name: "Perm Eagle     ",
    category: "Permanent",
    value: "880M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsxcPY864%2FEagle.png&w=640&q=75"
  },
  {
    id: "Perm Rubber     ",
    name: "Perm Rubber     ",
    category: "Permanent",
    value: "111M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRQgjTrq%2FRubber.png&w=640&q=75"
  },
  {
    id: "Perm Ice     ",
    name: "Perm Ice     ",
    category: "Permanent",
    value: "680M",
    demand: "6/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzDjTPs7n%2FIce.png&w=640&q=75"
  },

  {
    id: "Perm Sand     ",
    name: "Perm Sand  ",
    category: "Permanent",
    value: "770M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQxFVkwyN%2FSand.png&w=640&q=75"
  },
  {
    id: "Perm Dark     ",
    name: "Perm Dark  ",
    category: "Permanent",
    value: "860M",
    demand: "3/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0NTCP7KD%2FDark.png&w=640&q=75"
  },
  {
    id: "Perm Flame     ",
    name: "Perm Flame   ",
    category: "Permanent",
    value: "450M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8WhRLF0%2FFlame.png&w=640&q=75"
  },
  {
    id: "Perm Spike     ",
    name: "Perm Spike   ",
    category: "Permanent",
    value: "140M",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfbNLsLTk%2FSpike.png&w=640&q=75"
  },
  {
    id: "Perm Smoke     ",
    name: "Perm Smoke     ",
    category: "Permanent",
    value: "120M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FnVRCmpTw%2FSmoke.png&w=640&q=75"
  },{
    id: "Perm Bomb     ",
    name: "Perm Bomb     ",
    category: "Permanent",
    value: "90M",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy8NjP1zg%2FBomb.png&w=1920&q=75"
  },
  {
    id: "Perm Spring     ",
    name: "Perm Spring     ",
    category: "Permanent",
    value: "60M",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F15r7B7nT%2FSpring.png&w=1920&q=75"
  },
  {
    id: "Perm Blade     ",
    name: "Perm Blade     ",
    category: "Permanent",
    value: "20M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbYQmYVTJ%2FBlade.png&w=1920&q=75"
  },
  {
    id: "Perm Spin     ",
    name: "Perm Spin     ",
    category: "Permanent",
    value: "15M",
    demand: "1/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fjj4jSbLc%2FSpin.png&w=1920&q=75"
  },
  {
    id: "Perm Rocket     ",
    name: "Perm Rocket     ",
    category: "Permanent",
    value: "100M",
    demand: "2/10",
    image: "https://bloxfruitsvalues.com/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcHdrRJVP%2FRocket.png&w=1080&q=75"
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