let notYetPoleys = [ "mrPoley", "jacketPoley", "gumPoley", 
"toastPoley", "poleys", "poleytrio", "poleyduo", "poleyard", "lorePoley", 
"boliePoley"]
let muted = false;

// Poleys
class Poley {
    constructor(name, rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}

let poley = new Poley("poley", 59.4);
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

let bob = new Poley("bob", 12.9);
let bobCounter = 0;

let poleys = [poley, desk_poley, calculator_poley, magic_poley, bug_poley, pole, shiny_pole, shiny_calculator_poley, shiny_desk_poley, shiny_magic_poley, shiny_poley, shiny_bug_poley, bob]

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
    if (!muted){
        music.volume = 0;
        throwSoundEffect.volume=0.2;
    } else {
        if (music.volume != 1){
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
    let poleyArrayRarity = poleyArray.map(function(obj){
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
    switch (poleyMon){
        case "poley":
            poleyCounter +=1;
            changePoleyCounter("poleyCounter", "poley", poleyCounter);
            console.log("poleys: " + poleyCounter)
            break;
        case "desk poley":
            deskPoleyCounter +=1;
            changePoleyCounter("deskPoleyCounter", "desk poley", deskPoleyCounter);
            console.log("poleys: "+deskPoleyCounter)
            break;
        case "calculator poley":
            calculatorPoleyCounter +=1;
            changePoleyCounter("calculatorPoleyCounter", "calculator poley", calculatorPoleyCounter);
            console.log("poleys: ")
            break;
        case "magic poley":
            magicPoleyCounter +=1;
            changePoleyCounter("magicPoleyCounter", "magic poley", magicPoleyCounter);
            console.log("poleys: ")
            break;
        case "bug poley":
            bugPoleyCounter +=1;
            changePoleyCounter("bugPoleyCounter", "bug poley", bugPoleyCounter);
            console.log("poleys: ")
            break;
        case "pole":
            poleCounter +=1;
            changePoleyCounter("poleCounter", "pole", poleCounter);
            console.log("poleys: ")
            break;
        case "shiny poley":
            shinyPoleyCounter +=1;
            changePoleyCounter("shinyPoleyCounter", "shiny poley", shinyPoleyCounter)
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "shiny desk poley":
            shinyDeskPoleyCounter +=1;
            changePoleyCounter("shinyDeskPoleyCounter", "shiny desk poley", shinyDeskPoleyCounter)
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "shiny calculator poley":
            shinyCalculatorPoleyCounter +=1;
            changePoleyCounter("shinyCalculatorPoleyCounter", "shiny calculator poley", shinyCalculatorPoleyCounter);
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "shiny magic poley":
            shinyMagicPoleyCounter +=1;
            changePoleyCounter("shinyMagicPoleyCounter", "shiny magic poley", shinyMagicPoleyCounter);
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "shiny bug poley":
            shinyBugPoleyCounter +=1;
            changePoleyCounter("shinyBugPoleyCounter", "shiny bug poley", shinyBugPoleyCounter);
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "shiny pole":
            shinyPoleCounter +=1;
            changePoleyCounter("shinyPoleCounter", "shiny pole", shinyPoleCounter);
            console.log("poleys: ")
            shinyPoleyEffect.play();
            break;
        case "bob":
            bobCounter += 1;
            changePoleyCounter("bobCounter", "bob", bobCounter);
            break;
        default:
            console.log("error! ln 126, somethin rong :(");
            
    }
    return poleyMon;
}

function changePoleyCounter(poleyCounterName, poleyName, value){
    $("#" + poleyCounterName).html("<img src='poleys/" + poleyName + ".png'><h5 id='"+ poleyCounterName+"'>"+value+"</h5>")
}

function notDisabled(){
    let changedPoley = $("#changePoley");
    changedPoley.prop('disabled', false);
    console.log("not disabled!")
}

function changePoley() {
    audio();
    throwSound();
    let poleyMon = pickPoley(poleys);
    let poleyPerson = "poleys/" + poleyMon + ".png";
    let poleyImg = document.querySelector("#poleyimg");
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
    console.log("disabled!");
}

function startNotDisabled(){
    setTimeout(() => {
        notDisabled();
    }, 5000);
}
