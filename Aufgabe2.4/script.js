"use strict";
let optionsEis = document.getElementById("optionsEis");
let konfigList = document.getElementById("currentEis");
let kategorie = document.getElementById("kategorie");
let site = 0;
function loadJsonWaffeln() {
    return JSON.parse(angebotWaffeln);
}
function loadJsonEiskugeln() {
    return JSON.parse(angebotEiskugeln);
}
function loadJsonTopping() {
    return JSON.parse(angebotToppings);
}
// Load dynamik content
if (site === 3) {
    displayKonfigFromLocalStorage(konfigList);
}
else {
    displayOptionsOfWaffel();
    displayKonfigFromLocalStorage(konfigList);
}
let weiterBtn = document.getElementById("weiter");
if (weiterBtn !== null) {
    weiterBtn.addEventListener("click", function (_event) {
        site++;
        if (site === 1) {
            clearOptionList();
            displayOptionsOfEiskugel();
        }
        else if (site === 2) {
            clearOptionList();
            displayOptionsOfTopping();
        }
        else if (site === 3) {
            window.location.href = "./konfig.html";
        }
    });
}
// Ende - Load dynamik content
// Eis Options laden
function displayOptionsOfWaffel() {
    loadJsonWaffeln().forEach(element => {
        let domElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                }
                else {
                    displayText += " - ";
                }
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
function displayOptionsOfEiskugel() {
    loadJsonEiskugeln().forEach(element => {
        let domElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                }
                else {
                    displayText += " - ";
                }
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
function displayOptionsOfTopping() {
    loadJsonTopping().forEach(element => {
        let domElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                }
                else {
                    displayText += " - ";
                }
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
    if (eisKonfigArray === null) {
        eisKonfigArray = [];
    }
    eisKonfigArray.forEach(element => {
        let domElement = document.createElement("div");
        let img = document.createElement("img");
        domElement.classList.add("btn", "options");
        let displayText = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                }
                else {
                    displayText += " - ";
                }
            }
            else {
                img.src = `./media/${element[key]}`;
            }
        }
        domElement.appendChild(img);
        let text = document.createElement("p");
        text.innerText = displayText;
        domElement.appendChild(text);
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