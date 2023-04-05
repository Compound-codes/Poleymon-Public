let notYetPoleys = ["jacketPoley", "gumPoley",
    "toastPoley", "poleys", "poleytrio", "poleyduo", "poleyard", "lorePoley"
]
let muted = false;
let poleyEncounters = 0;
let boost = false;
// Poleys
class Poley {
    constructor(name, rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}
let poley = new Poley("poley", 39.4);
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

let mr_poley = new Poley("mr poley", 19.8);
let shiny_mr_poley = new Poley("shiny mr poley", 0.2);
let mrPoleyCounter = 0;
let shinyMrPoleyCounter = 0;

let bolie_poley = new Poley("bolie poley", 4.95);
let shiny_bolie_poley = new Poley("shiny bolie poley", 0.05);
let boliePoleyCounter = 0;
let shinyBoliePoleyCounter = 0;

let bob = new Poley("bob", 12.9);
let bobCounter = 0;

let poleys = [poley, desk_poley, calculator_poley, magic_poley, bug_poley, pole, shiny_pole, shiny_calculator_poley, shiny_desk_poley, 
    shiny_magic_poley, shiny_poley, shiny_bug_poley, mr_poley, shiny_mr_poley, bob, bolie_poley, shiny_bolie_poley];

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

function calculateWorth(poleyName) {
    let worth = Math.round(100 / poleyName.rarity);
    console.log("worth: " + worth);
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

function volume() {
    let volumeSlider = $("#volume");
    console.log(volumeSlider.attr("value"));
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
    console.log(selectedObject);
    let poleyMon = selectedObject.name;
    switch (poleyMon) {
        case "poley":
            poleyCounter += 1;
            changePoleyCounter("poleyCounter", "poley");
            break;
        case "desk poley":
            deskPoleyCounter += 1;
            changePoleyCounter("deskPoleyCounter", "desk poley");
            break;
        case "calculator poley":
            calculatorPoleyCounter += 1;
            changePoleyCounter("calculatorPoleyCounter", "calculator poley");
            break;
        case "magic poley":
            magicPoleyCounter += 1;
            changePoleyCounter("magicPoleyCounter", "magic poley");
            break;
        case "bug poley":
            bugPoleyCounter += 1;
            changePoleyCounter("bugPoleyCounter", "bug poley");
            break;
        case "pole":
            poleCounter += 1;
            changePoleyCounter("poleCounter", "pole");
            break;
        case "mr poley":
            mrPoleyCounter +=1;
            changePoleyCounter("mrPoleyCounter", "mr poley");
            break;
        case "bolie poley":
            boliePoleyCounter +=1;
            changePoleyCounter("boliePoleyCounter", "bolie poley");
            break;
        case "shiny poley":
            shinyPoleyCounter += 1;
            changePoleyCounter("shinyPoleyCounter", "shiny poley");
            shinyPoleyEffect.play();
            break;
        case "shiny desk poley":
            shinyDeskPoleyCounter += 1;
            changePoleyCounter("shinyDeskPoleyCounter", "shiny desk poley");
            shinyPoleyEffect.play();
            break;
        case "shiny calculator poley":
            shinyCalculatorPoleyCounter += 1;
            changePoleyCounter("shinyCalculatorPoleyCounter", "shiny calculator poley");
            shinyPoleyEffect.play();
            break;
        case "shiny magic poley":
            shinyMagicPoleyCounter += 1;
            changePoleyCounter("shinyMagicPoleyCounter", "shiny magic poley");
            shinyPoleyEffect.play();
            break;
        case "shiny bug poley":
            shinyBugPoleyCounter += 1;
            changePoleyCounter("shinyBugPoleyCounter", "shiny bug poley");
            shinyPoleyEffect.play();
            break;
        case "shiny pole":
            shinyPoleCounter += 1;
            changePoleyCounter("shinyPoleCounter", "shiny pole");
            shinyPoleyEffect.play();
            break;
        case "shiny mr poley":
            shinyMrPoleyCounter +=1;
            changePoleyCounter("shinyMrPoleyCounter", "shiny mr poley");
            shinyPoleyEffect.play();
            break;
        case "shiny bolie poley":
            shinyBoliePoleyCounter +=1;
            changePoleyCounter("shinyBoliePoleyCounter", "shiny bolie poley");
            break;
        case "bob":
            bobCounter += 1;
            changePoleyCounter("bobCounter", "bob");
            break;
        default:
            console.log("error! ln 126, somethin rong :(");

    }
    poleyEncounters +=1;
    console.log(poleyEncounters + ": broly is cool because he gave me this many poleys")
    return selectedObject;
}

function changePoleyCounter(poleyCounterName, poleyName) {
    $("#" + poleyCounterName).html("<img src='poleys/" + poleyName + ".png'><h5 id='" + poleyCounterName + "'>" + eval(poleyCounterName) + "</h5>")
}

function notDisabled() {
    let changedPoley = $("#changePoley");
    changedPoley.prop('disabled', false);
}

function changePoley() {
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
        $("#poleygot").html(poleyMon.split(","));
    } else {
        let poleyMon0 = poleyMon.split("");
        poleyMon0[0] = poleyMon0[0].toUpperCase();
        poleyMon = poleyMon0.toString();
        $("#poleygot").html(poleyMon.split(","));
    }
    let changedPoley = $("#changePoley");
    changedPoley.prop('disabled', true);
}

function startNotDisabled() {
    if (boost) {
        setTimeout(notDisabled, 1000);
    } else {
        setTimeout(notDisabled, 2000);
    }
}
