let version = '1.1';

let Difficulty, items;

Difficulty = difficulties.find(d => d.version === version).difficulty;

const ItemCount = 25;
const ALL_RANDOM = "all-random";
const RANDOM     = "random";
const STARTING_DIFFICULTY = 2;

let card;

let currentDifficulty = STARTING_DIFFICULTY;
let showOptions = false;

let toggle_variated     = true;
let toggle_beatGame     = true;
let toggle_gameOver     = true;
let toggle_bowserDoors  = true;

$(document.body).click((e) => {
    let closeOptions = true;

    const checkList = [
        'optionsButton',
        'allOptions',
        'allOptionsContent',
        'optionContainer',
        'optionLabel',
        'switch',
        'optionInput',
        'slider',
    ]

    for (let i = 0; i < checkList.length; i++) {
        if (e.target.classList.contains(checkList[i])) {
            closeOptions = false;
            break;
        }
    }

    if (closeOptions) {
        showOptions = false;
        toggleOptions();
    }

});

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
}

function checkCookies() {

    const temp_difficulty= getCookie('difficulty');
    const temp_seed      = getCookie('seed');

    toggle_variated    = getCookie('variated')    !== "false";
    toggle_beatGame    = getCookie('beatGame')    !== "false";
    toggle_gameOver    = getCookie('gameOver')    !== "false";
    toggle_bowserDoors = getCookie('bowserDoors') !== "false";

    if (temp_difficulty !== '') currentDifficulty  = temp_difficulty;

    if (temp_seed !== '') document.getElementById('seedInput').value = temp_seed;

    document.getElementById('variated').checked    = toggle_variated;
    document.getElementById('beatGame').checked    = toggle_beatGame;
    document.getElementById('gameOver').checked    = toggle_gameOver;
    document.getElementById('bowserDoors').checked = toggle_bowserDoors;

    getItems();
    adjustDifficulty();
}

function updateCheckbox(event) {
    switch (event.id) {
        case 'variated':
            toggle_variated    = event.checked;
            break;
        case 'beatGame':
            toggle_beatGame    = event.checked;
            break;
        case 'gameOver':
            toggle_gameOver    = event.checked;
            break;
        case 'bowserDoors':
            toggle_bowserDoors = event.checked;
            break;
    }

    updateCookies();
}

function updateCookies() {
    setCookie('variated', toggle_variated, 30);
    setCookie('beatGame', toggle_beatGame, 30);
    setCookie('gameOver', toggle_gameOver, 30);
    setCookie('bowserDoors', toggle_bowserDoors, 30);
    setCookie('difficulty', currentDifficulty, 30)
    setCookie('seed', document.getElementById('seedInput').value, 30);
}

function shuffleWithSeed(arr, seed) {
  const rng = new Math.seedrandom(seed);
  const seedRand = (func, min, max) => {
    return Math.floor(func() * (max - min + 1)) + min;
  };
  const resp = [];
  const keys = Object.keys(Array.from(new Array(arr.length)));

  for (let i = 0; i < arr.length; i++) {
    const r = seedRand(rng, 0, keys.length - 1);
    const g = keys[r];
    keys.splice(r, 1);
    resp.push(arr[Number(g)]);
  }

  return resp;
}

function toggleOptions() {
    let options = document.querySelector('.allOptionsContent');

    if (showOptions) {
        options.style.display = "grid";
        return;
    }
    if (!showOptions) {
        options.style.display = "none";
    }
}

function showAllOptions() {
    showOptions = !showOptions;

    toggleOptions();
}

function getDifficulty(e) {
    let difficultyName = e.querySelector('.difficultyName');

    currentDifficulty = Difficulty.findIndex(d => d.name === difficultyName.innerText);
}

function rotateThroughDifficultyClockwise() {
    if (currentDifficulty >= Difficulty.length - 1) currentDifficulty = 0;
    else currentDifficulty++;

    adjustDifficulty();
}

function rotateThroughDifficultyCounterClockwise() {
    if (currentDifficulty <= 0) currentDifficulty = Difficulty.length - 1;
    else currentDifficulty--;

    adjustDifficulty();
}

function changeVersion() {
    const versionSelect = document.querySelector('#itemVersioning');
    version = versionSelect.value;

    getItems();
    adjustDifficulty();
}

function getItems() {
    const itemsOwner = allItems.find((i) => i.version === version);

    items = itemsOwner.items;
}

function adjustDifficulty() {
    const difficultyElement = document.querySelector('.difficulty')

    const difficultyOwner = difficulties.find(d => d.version === version);
    Difficulty = difficultyOwner.difficulty;

    difficultyElement.querySelector('.difficultyIcon').src = `./icons/${Difficulty[currentDifficulty].icon}`;
    difficultyElement.querySelector('.difficultyName').innerText = Difficulty[currentDifficulty].name;
    difficultyElement.querySelector('.difficultyNickname').innerText = Difficulty[currentDifficulty].nickname;

    difficultyElement.querySelector('.difficultyWorlds').innerText = Difficulty[currentDifficulty].worlds;
    difficultyElement.querySelector('.difficultyExtras').innerText = Difficulty[currentDifficulty].extras;

    if (Difficulty[currentDifficulty].type === ALL_RANDOM) {
        difficultyElement.classList.add("all-random");
    } else {
        difficultyElement.classList.remove("all-random");
        difficultyElement.style.backgroundColor = `var(${Difficulty[currentDifficulty].css})`;
    }

    updateCookies();
}

function clearSeedInput() {
    document.querySelector('#seedInput').value = "";
    updateCookies();
}

function removeItemsFromList(list = [], filter) {
    return list.filter(l => l.type !== filter);
}

function getToggles() {
    toggle_variated     = document.getElementById('variated').checked;
    toggle_beatGame     = document.getElementById('beatGame').checked;
    toggle_gameOver     = document.getElementById('gameOver').checked;
    toggle_bowserDoors  = document.getElementById('bowserDoors').checked;
}

function checkAllToggles(list) {
    getToggles();

    if (!toggle_variated)       list = removeItemsFromList(list, 'dynamic');
    else                        list = removeItemsFromList(list, 'replaced');
    if (!toggle_beatGame)       list = removeItemsFromList(list, 'beatGame');
    if (!toggle_gameOver)       list = removeItemsFromList(list, 'gameOver');
    if (!toggle_bowserDoors)    list = removeItemsFromList(list, 'bowserDoor');

    return list;
}

function calculatedOrGoals(list, rng) {
    list.map(x => {
        if (x.type === 'or') {
            const seed = Math.abs(rng.int32());
            const selector = seed % 2;

            x.name = x.name.replace("?",
                selector === 1 ? x.max : x.min
            );
        }

        return x;
    })
}

function calculateVariated(list, rng) {
    list.map(x => {
        if (x.type === 'dynamic') {
            const seed = Math.abs(rng.int32());
            const difference = (x.max - x.min) + 1;

            x.name = x.name.replace("?", (seed % difference) + x.min);
        }

        return x;
    })
}

function calculateBowserDoors(list, rng) {
    const firstDoors = [ '1', '2', '3', '4' ];
    const secondDoors = [ '5', '6', '7', '8' ];

    list.map(x => {
        if (x.type === 'bowserDoor') {
            const seed1 = Math.abs(rng.int32());
            const firstIndex = seed1 % firstDoors.length
            const firstDoor  = firstDoors[firstIndex];

            const seed2 = Math.abs(rng.int32());
            const secondIndex = seed2 % secondDoors.length;
            const secondDoor = secondDoors[secondIndex];

            firstDoors.splice(firstIndex, 1);
            secondDoors.splice(secondIndex, 1);

            x.name = x.name.replace('?', firstDoor);
            x.name = x.name.replace('?', secondDoor);
        }

        return x;
    });
}

function updateSeed() {
    updateCookies();
}

function generateRandomCard() {
    card = [];

    let tempItems = JSON.parse(JSON.stringify(items));

    tempItems = checkAllToggles(tempItems);

    let trueRandom = false;

    let seedText = document.querySelector('#seedInput').value;
    let rng, seedNum;

    if (seedText === "") {
        rng = new Math.seedrandom();
        seedText = rng.int32().toString();
    }

    rng = new Math.seedrandom(seedText);

    calculatedOrGoals(tempItems, rng);

    if (toggle_variated) calculateVariated(tempItems, rng);

    if (toggle_bowserDoors) calculateBowserDoors(tempItems, rng);

    getDifficulty(document.querySelector('.difficulty'));

    if (Difficulty[currentDifficulty].type === RANDOM) {
        currentDifficulty = Math.abs(rng.int32()) % (Difficulty.length - 2);
    }
    if (Difficulty[currentDifficulty].type === ALL_RANDOM) {
        trueRandom = true;
    }

    for (let i = 0; i < ItemCount; i++) {
        let itemDifficulty, availableItems;

        seedNum = Math.abs(rng.int32());

        if (trueRandom) {
            availableItems = tempItems.map(x => x);
        } else {
            itemDifficulty = Difficulty[currentDifficulty].dist[i];
            availableItems = tempItems.filter(item => item.difficulty === itemDifficulty)
        }

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

    navigator.clipboard.writeText(JSON.stringify(card)).then(() => {
        const copiedText = document.querySelector(`.copiedText`);

        copiedText.classList.add("show");

        setTimeout(() => {
            copiedText.classList.remove("show");
        }, '1000');
    });
}
