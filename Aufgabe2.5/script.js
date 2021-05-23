"use strict";
var script;
(function (script) {
    let optionsEis = document.getElementById("optionsEis");
    let konfigList = document.getElementById("currentEis");
    let site = 0;
    let angebotEiskugeln = [];
    let angebotToppings = [];
    let angebotWaffeln = [];
    async function communicate(_url) {
        let response = await fetch(_url);
        let data = await response.json();
        data["angebotWaffeln"].forEach(element => {
            angebotWaffeln.push(element);
        });
        data["angebotEiskugeln"].forEach(element => {
            angebotEiskugeln.push(element);
        });
        data["angebotToppings"].forEach(element => {
            angebotToppings.push(element);
        });
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
            angebotWaffeln.forEach(element => {
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
            angebotEiskugeln.forEach(element => {
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
            angebotToppings.forEach(element => {
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
    }
    communicate("./data.json");
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
    // Server Komunikation:
    async function sendServer() {
        let url = "https://gis-communication.herokuapp.com";
        let sendData = JSON.parse(localStorage.getItem("eisKonfig"));
        let sendDataObjekt = {
            "Waffel": sendData[0],
            "Eiskugel": sendData[1],
            "Topping": sendData[2]
        };
        let query = new URLSearchParams(sendDataObjekt);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let data = await response.json();
        let body = document.querySelector(".center-container");
        let messageDom = document.createElement("p");
        for (const key in data) {
            if (key === "error") {
                messageDom.innerHTML = data[key];
                messageDom.style.color = "red";
                body.appendChild(messageDom);
            }
            else if (key === "message") {
                messageDom.innerHTML = data[key];
                messageDom.style.color = "green";
                body.appendChild(messageDom);
            }
        }
    }
    if (window.location.href.substr(-12) === "/konfig.html") {
        sendServer();
    }
})(script || (script = {}));
//# sourceMappingURL=script.js.map