let poleys = ["poley", "desk Poley", "calculator Poley", "magic Poley", "bug Poley", "pole"]

let notYetPoleys = [ "mr Poley", "jacket Poley", "gum Poley", 
"toastPoley", "poleys", "poleytrio", "poleyduo", "poleyard", "lore Poley", 
"bolie poley"]

// let poley = new Poley("poley", 0.6)


const music = new Audio("Poleymon.mp3");
music.loop = true;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function audio() {
    music.play();
}

class Poley {
    constructor(name, rarity) {
        this.name = name;
        this.rarity = rarity;
    }
}

function pickRand(poleyArray) {
    let poleyLen = poleyArray.length -1;
    poleyMon = poleys[Math.round(Math.random()*poleyLen)];
    
    return poleyMon;
}

function changePoley() {
    audio();
    pickRand(poleys);
    poleyPerson = poleyMon + ".png";
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
}



pickRand(poleys);
