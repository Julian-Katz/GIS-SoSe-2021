let newRecBtn: HTMLElement = document.getElementById("newRec");
let resetRec: HTMLElement = document.getElementById("resetRecs");

let recFrame: HTMLElement = document.getElementById("recFrame");

resetRec.addEventListener("click", function (): void {
    recFrame.innerHTML = ``;
});

newRecBtn.addEventListener("click", function (): void {
    let randomDiv: HTMLElement = document.createElement("div");
    randomDiv.style.top = `${Math.random() * 100}%`;
    randomDiv.style.left = `${Math.random() * 100}%`;
    randomDiv.style.height = `${Math.random() * 100}%`;
    randomDiv.style.width = `${Math.random() * 100}%`;
    randomDiv.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    randomDiv.classList.add("randomRec");
    recFrame.appendChild(randomDiv);
    console.log(randomDiv);

});

interface EisKonfiguration {
    waffel: Waffel;
    eiskugeln: Eiskugel[];
    toppings: Topping[];
    preis: number;
}

class Waffel {
    art: String;
    größe: String;
    preis: number;

    constructor(_art: String, _größe: String, _preis: number) {
        this.art = _art;
        this.größe = _größe;
        this.preis = _preis;
    }
}

class Eiskugel {
    geschmack: String;
    preis: number;

    constructor(_geschmack: String) {
        this.geschmack = _geschmack;
        this.preis = 1.80;
    }
}

class Topping {
    art: String;
    preis: number;

    constructor(_art: String, _preis: number) {
        this.art = _art;
        this.preis = _preis;
    }
}

let eis1: EisKonfiguration = { waffel: angebotWaffeln[1], eiskugeln: [angebotEisskugeln[1]], toppings: [angebotToppings[1]], preis: 2 };
console.log(eis1);
