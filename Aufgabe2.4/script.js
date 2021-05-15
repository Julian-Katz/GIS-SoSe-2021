"use strict";
let optionsEis = document.getElementById("optionsEis");
let konfigList = document.getElementById("currentEis");
let kategorie = document.getElementById("kategorie");
let site = 0;
function loadJsonContent(_content) {
    return JSON.parse(_content);
}
// Load dynamik content
window.addEventListener("load", function () {
    if (site === 3) {
        displayKonfigFromLocalStorage(konfigList);
    }
    else {
        displayOptionsOfKategorie(loadJsonContent(angebotWaffeln));
        displayKonfigFromLocalStorage(konfigList);
    }
});
let weiterBtn = document.getElementById("weiter");
if (weiterBtn !== null) {
    weiterBtn.addEventListener("click", function (_event) {
        site++;
        if (site === 1) {
            clearOptionList();
            displayOptionsOfKategorie(loadJsonContent(angebotEisskugeln));
        }
        else if (site === 2) {
            clearOptionList();
            displayOptionsOfKategorie(loadJsonContent(angebotToppings));
        }
        else if (site === 3) {
            window.location.href = "./konfig.html";
        }
    });
}
// Ende - Load dynamik content
// Eis Options laden
function displayOptionsOfKategorie(_displayItems) {
    _displayItems.forEach(element => {
        let domElement = document.createElement("div");
        domElement.classList.add("btn", "options");
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
        domElement.innerText = displayText;
        if (optionsEis !== null) {
            optionsEis.appendChild(domElement);
        }
        domElement.addEventListener("click", function (_event) {
            let eisKonfig;
            eisKonfig = JSON.parse(localStorage.getItem("eisKonfig"));
            if (eisKonfig === null) {
                eisKonfig = [];
            }
            eisKonfig.push(element);
            localStorage.setItem("eisKonfig", JSON.stringify(eisKonfig));
            clearKonfigList();
            displayKonfigFromLocalStorage(konfigList);
        });
    });
}
function displayKonfigFromLocalStorage(_displayTo) {
    let eisKonfigArray = JSON.parse(localStorage.getItem("eisKonfig"));
    eisKonfigArray.forEach(element => {
        let domElement = document.createElement("div");
        domElement.classList.add("btn", "options");
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
        domElement.innerText = displayText;
        _displayTo.appendChild(domElement);
    });
}
// Clear Lists
function clearOptionList() {
    optionsEis.innerHTML = "";
}
function clearKonfigList() {
    konfigList.innerHTML = "";
}
// reset btn
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "./index.html";
});
//# sourceMappingURL=script.js.map