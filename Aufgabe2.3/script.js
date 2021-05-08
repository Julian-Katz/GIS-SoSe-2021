"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let newRecBtn = document.getElementById("newRec");
    let resetRec = document.getElementById("resetRecs");
    let recFrame = document.getElementById("recFrame");
    resetRec.addEventListener("click", function () {
        recFrame.innerHTML = ``;
    });
    newRecBtn.addEventListener("click", function () {
        let randomDiv = document.createElement("div");
        randomDiv.style.top = `${Math.random() * 100}%`;
        randomDiv.style.left = `${Math.random() * 100}%`;
        randomDiv.style.height = `${Math.random() * 100}%`;
        randomDiv.style.width = `${Math.random() * 100}%`;
        randomDiv.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        randomDiv.classList.add("randomRec");
        recFrame.appendChild(randomDiv);
        console.log(randomDiv);
    });
    class Waffel {
        constructor(_art, _größe, _preis) {
            this.art = _art;
            this.größe = _größe;
            this.preis = _preis;
        }
    }
    class Eiskugel {
        constructor(_geschmack) {
            this.geschmack = _geschmack;
            this.preis = 1.80;
        }
    }
    class Topping {
        constructor(_art, _preis) {
            this.art = _art;
            this.preis = _preis;
        }
    }
    let eis1 = { waffel: data_1.Daten.angebotWaffeln[1], eiskugeln: [data_1.Daten.angebotEisskugeln[1]], toppings: [data_1.Daten.angebotToppings[1]], preis: 2 };
    console.log(eis1);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map