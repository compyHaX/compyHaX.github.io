const Difficulty = [
    { 
        name: "Very Easy", 
        css: "--very-easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 2, 2,
            2, 2, 2, 2, 3,
         ]
    },
    { 
        name: "Easy", 
        css: "--easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 2, 2, 2,
            2, 2, 2, 2, 2,
            2, 3, 3, 3, 3,
            3, 3, 3, 3, 4,
         ]
    },
    { 
        name: "Normal", 
        css: "--normal",
        dist: [ 
            1, 1, 1, 1, 1,
            2, 2, 2, 2, 2,
            2, 2, 3, 3, 3,
            3, 3, 3, 3, 3,
            3, 3, 4, 4, 5,
         ]
    },
    { 
        name: "Hard", 
        css: "--hard",
        dist: [ 
            1, 1, 1, 2, 2,
            2, 2, 3, 3, 3,
            3, 3, 3, 4, 4,
            4, 4, 4, 5, 5,
            5, 5, 6, 6, 7,
         ]
    },
    { 
        name: "Very Hard", 
        css: "--very-hard",
        dist: [ 
            1, 2, 2, 3, 3,
            3, 3, 3, 3, 3, 
            4, 4, 4, 4, 4,
            4, 5, 5, 5, 5,
            6, 6, 6, 6, 7,
         ]
    },
    { 
        name: "Extreme", 
        css: "--extreme",
        dist: [ 
            2, 2, 3, 3, 3,
            3, 4, 4, 4, 4,
            5, 5, 5, 5, 5,
            5, 6, 6, 6, 6,
            6, 7, 7, 7, 7,
         ]
    },
    { 
        name: "Insane", 
        css: "--insane",
        dist: [ 
            3, 3, 3, 4, 4,
            4, 4, 4, 4, 5,
            5, 5, 5, 5, 6,
            6, 6, 6, 6, 6, 
            6, 7, 7, 7, 7,
         ]
    },
];

const ItemCount = 25;

let json;
let card;

let currentDifficulty = 2;


function shuffleWithSeed(arr, seed) {
  const rng = new Math.seedrandom(seed)
  const seedRand = (func, min, max) => {
    return Math.floor(func() * (max - min + 1)) + min
  }
  const resp = []
  const keys = Object.keys(Array.from(new Array(arr.length)))

  for (let i = 0; i < arr.length; i++) {
    const r = seedRand(rng, 0, keys.length - 1)
    const g = keys[r]
    keys.splice(r, 1)
    resp.push(arr[Number(g)])
  }

  return resp
}



function getDifficulty(e) {
    currentDifficulty = Difficulty.findIndex(d => d.name === e.innerText);
}

function rotateThroughDifficultyClockwise(e) {
    if (currentDifficulty >= Difficulty.length - 1) currentDifficulty = 0;
    else currentDifficulty++;

    adjustDifficulty(e);
}

function rotateThroughDifficultyCounterClockwise(e) {
    if (currentDifficulty <= 0) currentDifficulty = Difficulty.length - 1;
    else currentDifficulty--;

    adjustDifficulty(e);
}

function adjustDifficulty(e) {
    e.innerText = Difficulty[currentDifficulty].name;
    e.style.backgroundColor = `var(${Difficulty[currentDifficulty].css})`;
}

function clearSeedInput() {
    document.querySelector('#seedInput').value = "";
}

function generateRandomCard() {
    card = [];
    const tempItems = items.map(x => x);
    
    let seedText = document.querySelector('#seedInput').value;
    let rng, seedNum;

    if (seedText === "") {
        rng = new Math.seedrandom();
        seedText = rng.int32().toString();
    }
    
    rng = new Math.seedrandom(seedText);
    
    getDifficulty(document.querySelector('.difficulty'));
    
    for (let i = 0; i < ItemCount; i++) {
        seedNum = Math.abs(rng.int32());

        const itemDifficulty = Difficulty[currentDifficulty].dist[i];
        const availableItems = tempItems.filter(item => item.difficulty === itemDifficulty);
        const index = seedNum % availableItems.length;
        const cardItemName = availableItems[index].name;
        const tempIndex = tempItems.findIndex(item => item.name === cardItemName);

        card.push({ name: cardItemName });

        tempItems.splice(tempIndex, 1);
    }

    card = shuffleWithSeed(card, seedText);

    document.querySelector('.copyButton').disabled = false;
    document.querySelector('.generatedNotifier').innerText = `Card Generated on \n ${moment().format('YY.MM.DD.HH.mm.ss.SS')} \n With Seed \n ${seedText}`;
}

function copyCard() {

    navigator.clipboard.writeText(JSON.stringify(card));
    const copiedText = document.querySelector(`.copiedText`);

    copiedText.classList.add("show");

    setTimeout(() => {
        copiedText.classList.remove("show");
    }, '1000');
}
