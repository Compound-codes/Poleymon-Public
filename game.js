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

let poley = new Poley("poley", 60);
let poleyCounter = 0;

let desk_poley = new Poley("desk poley", 10);
let deskPoleyCounter = 0;

let calculator_poley = new Poley("calculator poley", 6);
let calculatorPoleyCounter = 0;

let magic_poley = new Poley("magic poley", 0.1);
let magicPoleyCounter = 0;

let bug_poley = new Poley("bug poley", 1);
let bugPoleyCounter = 0;

let pole = new Poley("pole", 14.9);
let poleCounter = 0;

let poleys = [poley, desk_poley, calculator_poley, magic_poley, bug_poley, pole]

const music = new Audio("AsianSong.mp3");
const throwSoundEffect = new Audio("throw.mp3");
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
            console.log("poleys " + poleyCounter);
            $("#poleyCounter").html("<img src='poleys/poley.png' alt=''><h5 id='poleyCounter'>"+ poleyCounter + "</h5>")
            break;
        case "desk poley":
            deskPoleyCounter +=1;
            console.log("desk poleys "+ deskPoleyCounter);
            $("#deskPoleyCounter").html("<img src='poleys/desk Poley.png' alt=''><h5 id='deskPoleyCounter'>"+ deskPoleyCounter + "</h5>")
            break;
        case "calculator poley":
            calculatorPoleyCounter +=1;
            console.log("calculator poleys " + calculatorPoleyCounter);
            $("#calculatorPoleyCounter").html("<img src='poleys/calculator Poley.png' alt=''><h5 id='calculatorPoleyCounter'>"+ calculatorPoleyCounter + "</h5>")
            break;
        case "magic poley":
            magicPoleyCounter +=1;
            console.log("magic poleys " + magicPoleyCounter);
            $("#magicPoleyCounter").html("<img src='poleys/magic Poley.png' alt=''><h5 id='magicPoleyCounter'>"+ magicPoleyCounter + "</h5>")
            break;
        case "bug poley":
            bugPoleyCounter +=1;
            console.log("bug poleys " + bugPoleyCounter);
            $("#bugPoleyCounter").html("<img src='poleys/bug Poley.png' alt=''><h5 id='bugPoleyCounter'>"+ bugPoleyCounter + "</h5>")
            break;
        case "pole":
            poleCounter +=1
            console.log("poles " + poleCounter);
            $("#poleCounter").html("<img src='poleys/pole.png' alt=''><h5 id='poleCounter'>"+ poleCounter + "</h5>")
            break;
    }
    return poleyMon;
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

