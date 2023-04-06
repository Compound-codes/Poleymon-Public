let notYetPoleys = ["gumPoley",
    "toastPoley", "poleys", "poleytrio", "poleyduo", "poleyard", "lorePoley"
]
let muted = false;
let poleyEncounters = 0;
let boost = false;
document.cookie = ""

// Poleys
class Poley {
    constructor(name, rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}
let poley = new Poley("poley", 35.4);
let shiny_poley = new Poley("shiny poley", 0.6);
let poleyCounter = 0;
let shinyPoleyCounter = 0;

let desk_poley = new Poley("desk poley", 9.9);
let shiny_desk_poley = new Poley("shiny desk poley", 0.1);
let deskPoleyCounter = 0;
let shinyDeskPoleyCounter = 0;

let calculator_poley = new Poley("calculator poley", 5.94);
let shiny_calculator_poley = new Poley("shiny calculator poley", 0.06)
let calculatorPoleyCounter = 0;
let shinyCalculatorPoleyCounter = 0;

let magic_poley = new Poley("magic poley", 0.099);
let shiny_magic_poley = new Poley("shiny magic poley", 0.001);
let magicPoleyCounter = 0;
let shinyMagicPoleyCounter = 0;

let bug_poley = new Poley("bug poley", 0.99);
let shiny_bug_poley = new Poley("shiny bug poley", 0.01);
let bugPoleyCounter = 0;
let shinyBugPoleyCounter = 0;

let pole = new Poley("pole", 9.9);
let shiny_pole = new Poley("shiny pole", 0.1);
let poleCounter = 0;
let shinyPoleCounter = 0;

let mr_poley = new Poley("mr poley", 15.8);
let shiny_mr_poley = new Poley("shiny mr poley", 0.2);
let mrPoleyCounter = 0;
let shinyMrPoleyCounter = 0;

let bolie_poley = new Poley("bolie poley", 4.95);
let shiny_bolie_poley = new Poley("shiny bolie poley", 0.05);
let boliePoleyCounter = 0;
let shinyBoliePoleyCounter = 0;

let gum_poley = new Poley("gum poley", 7.92);
let shiny_gum_poley = new Poley("shiny gum poley", 0.08);
let gumPoleyCounter = 0;
let shinyGumPoleyCounter = 0;

let bob = new Poley("bob", 12.89);
let shiny_bob = new Poley("bob", 0.01);
let bobCounter = 0;
let shinyBobCounter = 0;

// let completedPoleyThingy = poleyCounter.toLocaleString("en-US") + shinyPoleyCounter.toLocaleString("en-US") + deskPoleyCounter.toLocaleString("en-US") + shinyDeskPoleyCounter.toLocaleString("en-US") + calculatorPoleyCounter.toLocaleString("en-US") + shinyCalculatorPoleyCounter.toLocaleString("en-US") + magicPoleyCounter.toLocaleString("en-US") + shinyMagicPoleyCounter.toLocaleString("en-US") + bugPoleyCounter.toLocaleString("en-US") + shinyBugPoleyCounter.toLocaleString("en-US") + poleCounter.toLocaleString("en-US") + shinyPoleCounter.toLocaleString("en-US") + mrPoleyCounter.toLocaleString("en-US") + shinyMrPoleyCounter.toLocaleString("en-US") + boliePoleyCounter.toLocaleString("en-US") + shinyBoliePoleyCounter.toLocaleString("en-US") + bobCounter.toLocaleString("en-US");

let poleys = [poley, desk_poley, calculator_poley, magic_poley, bug_poley, pole, shiny_pole, shiny_calculator_poley, shiny_desk_poley,
    shiny_magic_poley, shiny_poley, shiny_bug_poley, mr_poley, shiny_mr_poley, bob, bolie_poley, shiny_bolie_poley, gum_poley, 
    shiny_gum_poley, shiny_bob
];
// music
const music = new Audio("AsianSong.mp3");
const throwSoundEffect = new Audio("throw.mp3");
const shinyPoleyEffect = new Audio("shinyPoley.mp3");
throwSoundEffect.volume = 0.7;
music.volume = 0.5;
music.loop = true;

function audio() {
    music.play();
}

function throwSound() {
    throwSoundEffect.play();
}

function mute() {
    if (!muted) {
        music.volume = 0;
        throwSoundEffect.volume = 0.2;
    } else {
        if (music.volume != 1) {
            music.volume += 0.5;
            throwSoundEffect.volume += 0.5;
        }

    }
    muted = !muted;
}

//pick Poleys

function calculateWorth(poleyName) {
    let worth = Math.round(100 / poleyName.rarity);
    console.log("worth: " + worth);
}

function pickPoley(poleyArray) {
    let poleyArrayRarity = poleyArray.map(function (obj) {
        return obj.rarity;
    })
    const totalPercentage = poleyArrayRarity.reduce((acc, val) => acc + val, 0);
    const randomNumber = Math.random() * totalPercentage;
    let cumulativePercentage = 0;
    let selectedObject;
    for (let i = 0; i < poleyArrayRarity.length; i++) {
        cumulativePercentage += poleyArrayRarity[i];
        if (randomNumber <= cumulativePercentage) {
            selectedObject = poleyArray[i];
            break;
        }
    }
    // console.log(selectedObject);

    let poleyMon = selectedObject.name;
    switch (poleyMon) {
        case "poley":
            poleyCounter += 1;
            cPc("poleyCounter", "poley");
            break;
        case "desk poley":
            deskPoleyCounter += 1;
            cPc("deskPoleyCounter", "desk poley");
            break;
        case "calculator poley":
            calculatorPoleyCounter += 1;
            cPc("calculatorPoleyCounter", "calculator poley");
            break;
        case "magic poley":
            magicPoleyCounter += 1;
            cPc("magicPoleyCounter", "magic poley");
            break;
        case "bug poley":
            bugPoleyCounter += 1;
            cPc("bugPoleyCounter", "bug poley");
            break;
        case "pole":
            poleCounter += 1;
            cPc("poleCounter", "pole");
            break;
        case "mr poley":
            mrPoleyCounter += 1;
            cPc("mrPoleyCounter", "mr poley");
            break;
        case "bolie poley":
            boliePoleyCounter += 1;
            cPc("boliePoleyCounter", "bolie poley");
            break;
        case "gum poley":
            gumPoleyCounter +=1;
            cPc("gumPoleyCounter", "gum poley");
            break;
        case "shiny poley":
            shinyPoleyCounter += 1;
            cPc("shinyPoleyCounter", "shiny poley");
            break;
        case "shiny desk poley":
            shinyDeskPoleyCounter += 1;
            cPc("shinyDeskPoleyCounter", "shiny desk Poley");
            break;
        case "shiny calculator poley":
            shinyCalculatorPoleyCounter += 1;
            cPc("shinyCalculatorPoleyCounter", "shiny calculator Poley");
            break;
        case "shiny magic poley":
            shinyMagicPoleyCounter += 1;
            cPc("shinyMagicPoleyCounter", "shiny Magic Poley");
            break;
        case "shiny bug poley":
            shinyBugPoleyCounter += 1;
            cPc("shinyBugPoleyCounter", "shiny bug Poley");
            break;
        case "shiny pole":
            shinyPoleCounter += 1;
            cPc("shinyPoleCounter", "shiny pole");
            break;
        case "shiny mr poley":
            shinyMrPoleyCounter += 1;
            cPc("shinyMrPoleyCounter", "shiny mr poley");
            break;
        case "shiny bolie poley":
            shinyBoliePoleyCounter += 1;
            cPc("shinyBoliePoleyCounter", "shiny bolie poley");
            break;
        case "shiny gum poley":
            shinyGumPoleyCounter += 1;
            cPc("shinyGumPoleyCounter", "shiny gum poley");
            break;
        case "bob":
            bobCounter += 1;
            cPc("bobCounter", "bob");
            break;
        case "shiny bob":
            shinyBobCounter += 1;
            cPc("shinyBobCounter", "shiny bob");
        default:
            console.log("error! ln 126, somethin rong :(");

    }
    poleyEncounters += 1;
    console.log(poleyEncounters + ": broly is cool because he gave me this many poleys")
    return selectedObject;
}

function cPc(poleyCounterName, poleyName) {
    if (poleyName.includes("shiny ")) {
        shinyPoleyEffect.play();
    }
    document.querySelector("#" + poleyCounterName).innerHTML = "<img src='poleys/" + poleyName + ".png'><h5 id='" + poleyCounterName + "'>" + eval(poleyCounterName) + "</h5>"
}

function cP() {
    audio();
    throwSound();
    let poleyMonObject = pickPoley(poleys);
    let poleyMon = poleyMonObject.name;
    let poleyPerson = "poleys/" + poleyMon + ".png";
    let poleyImg = document.querySelector("#poleyimg");
    calculateWorth(poleyMonObject);
    poleyImg.setAttribute("src", poleyPerson);
    if (poleyPerson.includes("Poley")) {
        let poleyMon0 = poleyMon.split("");
        poleyMon0[0] = poleyMon0[0].toUpperCase();
        poleyMon = poleyMon0.toString();
        document.querySelector("#poleygot").innerHTML = poleyMon.replace(/, /g, '');
    } else {
        let poleyMon0 = poleyMon.split("");
        poleyMon0[0] = poleyMon0[0].toUpperCase();
        poleyMon = poleyMon0.toString();
        document.querySelector("#poleygot").innerHTML = poleyMon.replace(/,/g, '');
    }
    let changedPoley = document.querySelector("#changePoley");
    changedPoley.setAttribute('disabled', '');
}

function cookieGenerate() {
    completedPoleyThingy = poleyCounter.toLocaleString("en-US") + " " + shinyPoleyCounter.toLocaleString("en-US") + " " + deskPoleyCounter.toLocaleString("en-US") + " " + shinyDeskPoleyCounter.toLocaleString("en-US") + " " + calculatorPoleyCounter.toLocaleString("en-US") + " " + shinyCalculatorPoleyCounter.toLocaleString("en-US") + " " + magicPoleyCounter.toLocaleString("en-US") + " " + shinyMagicPoleyCounter.toLocaleString("en-US") + " " + bugPoleyCounter.toLocaleString("en-US") + " " + shinyBugPoleyCounter.toLocaleString("en-US") + " " + poleCounter.toLocaleString("en-US") + " " + shinyPoleCounter.toLocaleString("en-US") + " " + mrPoleyCounter.toLocaleString("en-US") + " " + shinyMrPoleyCounter.toLocaleString("en-US") + " " + boliePoleyCounter.toLocaleString("en-US") + " " + shinyBoliePoleyCounter.toLocaleString("en-US") + " " + bobCounter.toLocaleString("en-US") + " ";
    document.cookie = "data=" + completedPoleyThingy + "; expires=Thu, 1 Jan 2032 12:00:00 UTC";
    cookie1 = document.cookie;
    console.log(cookie1);
}

function startNotDisabled() {
    if (boost) {
        setTimeout(notDisabled, 1000);
    } else {
        setTimeout(notDisabled, 2000);
    }
}

function notDisabled() {
    let changedPoley = document.querySelector("#changePoley");
    changedPoley.disabled = false;
}
