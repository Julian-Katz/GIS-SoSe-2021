"use strict";
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
// Ende - Aufgabe 1
// Load dynamik content
window.addEventListener("load", function () {
    displayOptionsOfKategorie(angebotWaffeln);
    console.log("Dom load Event ausgeführt");
});
// Ende - Load dynamik content
// Eis Options laden
let optionsEis = document.getElementById("optionsEis");
let kategorie = document.getElementById("kategorie");
// Temp Cart
let tempWaffel;
let tempEisKofiguration;
// Ende - Temp Cart
function displayOptionsOfKategorie(_displayItems) {
    _displayItems.forEach(element => {
        let domItem = document.createElement("div");
        domItem.classList.add("btn", "options");
        let displayText = "";
        for (const key in element) {
            displayText = displayText + element[key];
            if (key === "preis") {
                displayText += " €";
            }
            else {
                displayText += " - ";
            }
        }
        domItem.innerText = displayText;
        domItem.addEventListener("click", function () {
            // console.log(element);
            tempWaffel = element;
            console.log(tempWaffel);
        });
        optionsEis.appendChild(domItem);
    });
}
console.log(tempWaffel);
// Ende - Eis Options laden
// Eis zusammenstellen
let eis1 = { waffel: angebotWaffeln[1], eiskugeln: [angebotEisskugeln[1]], toppings: [angebotToppings[1]], preis: 2 };
// Ende - Eis zusammenstellen
//# sourceMappingURL=script.js.map