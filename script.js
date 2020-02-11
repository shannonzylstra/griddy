// import { wordsList, shuffledWordsList } from './modules/words.mjs'

let score, team, boardObj, clickedCards, gameover, mode

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Codenames!')

    let wordsListName = "words"
    console.log('Words will be drawn from a list.')
    console.log('List name:', wordsListName)
    console.log('List words:', wordsListsObject[wordsListName])
    // TODO: add more words lists and specify them.

    console.log('Starting your game!')
    startGame(wordsListName)
})

const startGame = (wordsListName) => {

    var wordsList = wordsListsObject[wordsListName]
    var shuffledWordsList = shuffle(wordsList)
    var cards = populateCards(shuffledWordsList)

    var boardArray = create2dWordArray(cards) // create 2D board array
    var colorArray = create2dColorArray() // create 2D color array
    var coloredBoardArray = getColoredBoardArray(boardArray, colorArray) // add colors to boardArray
    console.log(coloredBoardArray)
    boardObj = getBoard(coloredBoardArray)
    console.log(boardObj)
    colorCodeCards(coloredBoardArray)

    let unclickedCards = document.getElementsByClassName('card')
    for (let i=0; i < unclickedCards.length; i++) {
        unclickedCards[i].classList.add('unclicked')
    }
    clickedCards = {
        '0': [],
        '1': [],
        '2': [],
        '3': []
    }
    addClickListeners()

    gameover = false
    team = 1 // not needed unless I add PVP functionality
    teams = {
        1: 'red',
        2: 'blue',
        red: 1,
        blue: 2
    }

    score = [0,0,0]
    initializeScore()

    mode = 'player'
    // addButtonThings()
}

const initializeScore = () => {
    // not super DRY but there's only two teams
    document.getElementById('team1Score').textContent = score[1]
    document.getElementById('team2Score').textContent = score[2]
}

const addClickListeners = () => {
    console.log('Adding click listeners!')

    var cardsToListen = document.querySelectorAll(".card")
    console.log('cardsToListen:', cardsToListen)
    for (let i=0; i < cardsToListen.length; i++) {
        let clickCard = cardsToListen[i]
        clickCard.addEventListener('click', revealCard);
    }
    console.log('Added card click listeners')

    let buttonsToListen = document.querySelectorAll('.mode button')
    console.log('Buttons to listen:', buttonsToListen)
    for (let i = 0; i < buttonsToListen.length; i++) {
        buttonsToListen[i].addEventListener('click', setMode)
    }
    console.log('Added mode button click listeners')

    console.log('Added all event listeners')
}

function addButtonThings() {
    let playerButton = document.getElementById('player')
    let spyButton = document.getElementById('spymaster')
    playerButton.addEventListener('click', setMode('player'))
    playerButton.addEventListener('click', setMode('spymaster'))
}

const shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


const populateCards = (arr) => {
    let board = document.getElementById("board")

    let cardWords = document.querySelectorAll(".cardWord")
    console.log(cardWords)

    let cards = getCards(arr, 0, 25)
    
    for (let i=0; i < cards.length; i++) {
        cardWords[i].innerHTML = `${cards[i]}`
        cardWords[i].id = cards[i]
    }
    return cards
}

const colorCodeCards = (colorArr) => {
    console.log('Color Coding Cards with colors array:', colorArr)
    let cards = document.getElementsByClassName('card')
    console.log('Cards to add color classes to:', cards)
    for (let i=0; i < 5; i++) {
        // row = i
        for (let j=0; j < 5; j++) {
            // column j
            let color = colorArr[i][j][1]
            console.log('Add color:', color)
            cards[(i*5)+j].classList.add(`${color}`)
        }
    }
    return cards
}

function getCards(arr, start, stop) {
    return arr.slice(start, stop)
}


function shuffleWordArray(arr) {
    return shuffle(arr)
}

function create2dWordArray(arr=wordArray) {
	var boardArray = new Array(5)
	for (var i = 0; i < boardArray.length; i++) {
		let j = 5*i
		boardArray[i] = arr.slice(j,j+5)
	}
	return boardArray
}

function create2dColorArray() {
	const colors = []
	for (let i = 0; i < 9; i++) { // add 9 reds
		colors.push('red')
	}
	for (let i = 0; i < 8; i++) { // add 8 blues
		colors.push('blue')
	}
	for (let i = 0; i < 7; i++ ) { // add 7 whites
		colors.push('neutral')
	}
	colors.push('assassin') // add 1 black
	shuffleWordArray(colors) // shuffle colors array
	var colorArray = new Array(5) // initialize new array
	for (var i = 0; i < colorArray.length; i++) { // loop over array
		let j = 5*i
		colorArray[i] = colors.slice(j,j+5) // add row to array
	}
	return colorArray
}

function getColoredBoardArray(words, colors) {
	var coloredBoardArray = new Array(5)
	for (let i = 0; i < 5; i++) {
		coloredBoardArray[i] = []
		for (let j = 0; j < 5; j++) {
			coloredBoardArray[i][j] = [words[i][j], colors[i][j]]
		}
	}
	return coloredBoardArray
}

function getBoard(arr) {
    // arr should be the coloredBoardArray in the form [ [ words[i][j], colors[i][j] ] ]
    let boardObj = {}
    for (let row=0; row<5; row++) {
        for (let col=0; col<5; col++) {
            boardObj[arr[row][col][0]] = arr[row][col][1]
        }
    }
    return boardObj
}


const wordsListsObject = {
    "words": [
        "AFRICA",
        "AGENT",
        "AIR",
        "ALIEN",
        "ALPS",
        "AMAZON",
        "AMBULANCE",
        "AMERICA",
        "ANGEL",
        "ANTARCTICA",
        "APPLE",
        "ARM",
        "ATLANTIS",
        "AUSTRALIA",
        "AZTEC",
        "BACK",
        "BALL",
        "BAND",
        "BANK",
        "BAR",
        "BARK",
        "BAT",
        "BATTERY",
        "BEACH",
        "BEAR",
        "BEAT",
        "BED",
        "BEIJING",
        "BELL",
        "BELT",
        "BERLIN",
        "BERMUDA",
        "BERRY",
        "BILL",
        "BLOCK",
        "BOARD",
        "BOLT",
        "BOMB",
        "BOND",
        "BOOM",
        "BOOT",
        "BOTTLE",
        "BOW",
        "BOX",
        "BRIDGE",
        "BRUSH",
        "BUCK",
        "BUFFALO",
        "BUG",
        "BUGLE",
        "BUTTON",
        "CALF",
        "CANADA",
        "CAP",
        "CAPITAL",
        "CAR",
        "CARD",
        "CARROT",
        "CASINO",
        "CAST",
        "CAT",
        "CELL",
        "CENTAUR",
        "CENTER",
        "CHAIR",
        "CHANGE",
        "CHARGE",
        "CHECK",
        "CHEST",
        "CHICK",
        "CHINA",
        "CHOCOLATE",
        "CHURCH",
        "CIRCLE",
        "CLIFF",
        "CLOAK",
        "CLUB",
        "CODE",
        "COLD",
        "COMIC",
        "COMPOUND",
        "CONCERT",
        "CONDUCTOR",
        "CONTRACT",
        "COOK",
        "COPPER",
        "COTTON",
        "COURT",
        "COVER",
        "CRANE",
        "CRASH",
        "CRICKET",
        "CROSS",
        "CROWN",
        "CYCLE",
        "CZECH",
        "DANCE",
        "DATE",
        "DAY",
        "DEATH",
        "DECK",
        "DEGREE",
        "DIAMOND",
        "DICE",
        "DINOSAUR",
        "DISEASE",
        "DOCTOR",
        "DOG",
        "DRAFT",
        "DRAGON",
        "DRESS",
        "DRILL",
        "DROP",
        "DUCK",
        "DWARF",
        "EAGLE",
        "EGYPT",
        "EMBASSY",
        "ENGINE",
        "ENGLAND",
        "EUROPE",
        "EYE",
        "FACE",
        "FAIR",
        "FALL",
        "FAN",
        "FENCE",
        "FIELD",
        "FIGHTER",
        "FIGURE",
        "FILE",
        "FILM",
        "FIRE",
        "FISH",
        "FLUTE",
        "FLY",
        "FOOT",
        "FORCE",
        "FOREST",
        "FORK",
        "FRANCE",
        "GAME",
        "GAS",
        "GENIUS",
        "GERMANY",
        "GHOST",
        "GIANT",
        "GLASS",
        "GLOVE",
        "GOLD",
        "GRACE",
        "GRASS",
        "GREECE",
        "GREEN",
        "GROUND",
        "HAM",
        "HAND",
        "HAWK",
        "HEAD",
        "HEART",
        "HELICOPTER",
        "HIMALAYAS",
        "HOLE",
        "HOLLYWOOD",
        "HONEY",
        "HOOD",
        "HOOK",
        "HORN",
        "HORSE",
        "HORSESHOE",
        "HOSPITAL",
        "HOTEL",
        "ICE",
        "ICE CREAM",
        "INDIA",
        "IRON",
        "IVORY",
        "JACK",
        "JAM",
        "JET",
        "JUPITER",
        "KANGAROO",
        "KETCHUP",
        "KEY",
        "KID",
        "KING",
        "KIWI",
        "KNIFE",
        "KNIGHT",
        "LAB",
        "LAP",
        "LASER",
        "LAWYER",
        "LEAD",
        "LEMON",
        "LEPRECHAUN",
        "LIFE",
        "LIGHT",
        "LIMOUSINE",
        "LINE",
        "LINK",
        "LION",
        "LITTER",
        "LOCH NESS",
        "LOCK",
        "LOG",
        "LONDON",
        "LUCK",
        "MAIL",
        "MAMMOTH",
        "MAPLE",
        "MARBLE",
        "MARCH",
        "MASS",
        "MATCH",
        "MERCURY",
        "MEXICO",
        "MICROSCOPE",
        "MILLIONAIRE",
        "MINE",
        "MINT",
        "MISSILE",
        "MODEL",
        "MOLE",
        "MOON",
        "MOSCOW",
        "MOUNT",
        "MOUSE",
        "MOUTH",
        "MUG",
        "NAIL",
        "NEEDLE",
        "NET",
        "NEW YORK",
        "NIGHT",
        "NINJA",
        "NOTE",
        "NOVEL",
        "NURSE",
        "NUT",
        "OCTOPUS",
        "OIL",
        "OLIVE",
        "OLYMPUS",
        "OPERA",
        "ORANGE",
        "ORGAN",
        "PALM",
        "PAN",
        "PANTS",
        "PAPER",
        "PARACHUTE",
        "PARK",
        "PART",
        "PASS",
        "PASTE",
        "PENGUIN",
        "PHOENIX",
        "PIANO",
        "PIE",
        "PILOT",
        "PIN",
        "PIPE",
        "PIRATE",
        "PISTOL",
        "PIT",
        "PITCH",
        "PLANE",
        "PLASTIC",
        "PLATE",
        "PLATYPUS",
        "PLAY",
        "PLOT",
        "POINT",
        "POISON",
        "POLE",
        "POLICE",
        "POOL",
        "PORT",
        "POST",
        "POUND",
        "PRESS",
        "PRINCESS",
        "PUMPKIN",
        "PUPIL",
        "PYRAMID",
        "QUEEN",
        "RABBIT",
        "RACKET",
        "RAY",
        "REVOLUTION",
        "RING",
        "ROBIN",
        "ROBOT",
        "ROCK",
        "ROME",
        "ROOT",
        "ROSE",
        "ROULETTE",
        "ROUND",
        "ROW",
        "RULER",
        "SATELLITE",
        "SATURN",
        "SCALE",
        "SCHOOL",
        "SCIENTIST",
        "SCORPION",
        "SCREEN",
        "SCUBA DIVER",
        "SEAL",
        "SERVER",
        "SHADOW",
        "SHAKESPEARE",
        "SHARK",
        "SHIP",
        "SHOE",
        "SHOP",
        "SHOT",
        "SINK",
        "SKYSCRAPER",
        "SLIP",
        "SLUG",
        "SMUGGLER",
        "SNOW",
        "SNOWMAN",
        "SOCK",
        "SOLDIER",
        "SOUL",
        "SOUND",
        "SPACE",
        "SPELL",
        "SPIDER",
        "SPIKE",
        "SPINE",
        "SPOT",
        "SPRING",
        "SPY",
        "SQUARE",
        "STADIUM",
        "STAFF",
        "STAR",
        "STATE",
        "STICK",
        "STOCK",
        "STRAW",
        "STREAM",
        "STRIKE",
        "STRING",
        "SUB",
        "SUIT",
        "SUPERHERO",
        "SWING",
        "SWITCH",
        "TABLE",
        "TABLET",
        "TAG",
        "TAIL",
        "TAP",
        "TEACHER",
        "TELESCOPE",
        "TEMPLE",
        "THEATER",
        "THIEF",
        "THUMB",
        "TICK",
        "TIE",
        "TIME",
        "TOKYO",
        "TOOTH",
        "TORCH",
        "TOWER",
        "TRACK",
        "TRAIN",
        "TRIANGLE",
        "TRIP",
        "TRUNK",
        "TUBE",
        "TURKEY",
        "UNDERTAKER",
        "UNICORN",
        "VACUUM",
        "VAN",
        "VET",
        "WAKE",
        "WALL",
        "WAR",
        "WASHER",
        "WASHINGTON",
        "WATCH",
        "WATER",
        "WAVE",
        "WEB",
        "WELL",
        "WHALE",
        "WHIP",
        "WIND",
        "WITCH",
        "WORM",
        "YARD"
    ]
}

function handleRevealedCard(revealTeam) {
    if (revealTeam == "assassin") {
        clickedCards[0] = 1
        alert("Oh no! You've revealed the assassin. Your team loses!")
    } 
    else {
        if (revealTeam == "neutral") {
            score[0] += 1
        }
        else if (revealTeam == "red") {
            score[1] += 1
            document.getElementById("team1Score").textContent = `${parseInt(score[1])}`
        } else if (revealTeam == "blue") {
            score[2] += 1
            document.getElementById("team2Score").textContent = `${parseInt(score[2])}`
        }
        checkWin()
    }
}

function checkWin() {
    if (!gameover) {
        if (score[1] == 9 || score[2] == 8) {
            let msg
            if (score[1] == 9) { 
                msg = "Red team wins! You found all the agents on your team. 🥰"
                gameover = true
            } else {
                msg = "Blue team wins! They found all their agents first. 😨"
                gameover = true
            }
            alert(msg)
        }
    }
}

function revealCard(e) {
    console.log("Clicked a card!")

    // Add 'reveal' to classlist of e.target element
    e.target.classList.add('reveal')

    // Get classlist of e.target element (using '.reveal' query)
    let revealedClasses = document.querySelector('.reveal').classList

    // Remove the 'reveal' class from e.target
    e.target.classList.remove('reveal')
    console.log('Target element classlist:', revealedClasses)

    // Determine which element was clicked (div.card or div.cardWord)
    let target = revealedClasses.contains('cardWord') ? e.target.parentNode.parentNode : e.target
    console.log('Target .card element:', target)

    // find div.cardWord element
    let cardWord = target.querySelector('.cardWord')
    console.log(`Target .cardWord element:`, cardWord)
    
    // find word text and reveal team
    let word = cardWord.id
    let revealTeam = boardObj[word]
    console.log(`${word} = ${revealTeam}`)

    // do not display word
    cardWord.textContent = ""

    // add revealed team to .card classes
    target.classList.add(revealTeam)
    // switch a .card class from 'unclicked' to 'clicked'
    target.classList.remove("unclicked")
    target.classList.add('clicked')
    // remove the 'reveal' class from e.target
    e.target.classList.remove('reveal')
    // add the 'revealed' class to .card
    target.classList.add('revealed')

    // remove event listener from target
    target.removeEventListener('click', revealCard)

    // handle the gameplay for revealed team
    handleRevealedCard(revealTeam)
}

function setMode(e) {
    // setting mode
    let mode = e.target.id
    console.log(`setting mode to ${mode}`)
    let cards = document.getElementsByClassName('card')
    for (let i=0; i < cards.length; i++) {
        if (mode == 'spymaster') {
            cards[i].classList.remove('player')
            cards[i].classList.add('spymaster')
        } else if (mode == 'player') {
            cards[i].classList.remove('spymaster')
            cards[i].classList.add('player')
        }
    }
}

function playerMode() {
    cards = document.getElementsByClassName('card)')
}