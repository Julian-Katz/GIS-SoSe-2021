let optionsEis: HTMLElement = document.getElementById("optionsEis");
let konfigList: HTMLElement = document.getElementById("currentEis");
let kategorie: HTMLElement = document.getElementById("kategorie");
let site: number = 0;
function loadJsonWaffeln(): Waffel[] {
    return JSON.parse(angebotWaffeln);
}
function loadJsonEiskugeln(): Eiskugel[] {
    return JSON.parse(angebotEiskugeln);
}
function loadJsonTopping(): Topping[] {
    return JSON.parse(angebotToppings);
}


// Load dynamik content
if (site === 3 ) {
    displayKonfigFromLocalStorage(konfigList);
} else {
displayOptionsOfWaffel(); 
displayKonfigFromLocalStorage(konfigList);
}


let weiterBtn: HTMLElement = document.getElementById("weiter");
if(weiterBtn !== null) {
        weiterBtn.addEventListener("click", function(_event: Event): void {
        site++;
        if (site === 1){
            clearOptionList();
            displayOptionsOfEiskugel(); 
        } else if (site === 2) {
            clearOptionList();
            displayOptionsOfTopping();
        } else if ( site === 3) {
            window.location.href = "./konfig.html";
        }
    });
}
// Ende - Load dynamik content

// Eis Options laden
function displayOptionsOfWaffel(): void {
    loadJsonWaffeln().forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                } else {
                    displayText += " - ";
                }
            }
        }
        domElement.innerText = displayText;
        if(optionsEis !== null){
            optionsEis.appendChild(domElement);
        }
        domElement.addEventListener("click", function (_event: Event): void {
            let eisKonfig: Object[];
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

function displayOptionsOfEiskugel(): void {
    loadJsonEiskugeln().forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                } else {
                    displayText += " - ";
                }
            }
        }
        domElement.innerText = displayText;
        if(optionsEis !== null){
            optionsEis.appendChild(domElement);
        }
        domElement.addEventListener("click", function (_event: Event): void {
            let eisKonfig: Object[];
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

function displayOptionsOfTopping(): void {
    loadJsonTopping().forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                } else {
                    displayText += " - ";
                }
            }
        }
        domElement.innerText = displayText;
        if(optionsEis !== null){
            optionsEis.appendChild(domElement);
        }
        domElement.addEventListener("click", function (_event: Event): void {
            let eisKonfig: Object[];
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


function displayKonfigFromLocalStorage(_displayTo: HTMLElement): void {
    let eisKonfigArray: Object[] = JSON.parse(localStorage.getItem("eisKonfig"));
    if (eisKonfigArray === null) {
      eisKonfigArray = [];
    }
    eisKonfigArray.forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            if (key !== "img") {
                displayText = displayText + element[key];
                if (key === "preis") {
                    displayText += " €";
                } else {
                    displayText += " - ";
                }
            } else {
                img.src = `./media/${element[key]}`;
            }
        }
        domElement.appendChild(img);
        let text: HTMLElement = document.createElement("p");
        text.innerText = displayText;
        domElement.appendChild(text);
        _displayTo.appendChild(domElement);
    });
}

// Clear Lists
function clearOptionList(): void {
    optionsEis.innerHTML = "";
}
function clearKonfigList(): void {
    konfigList.innerHTML = "";
}

// reset btn
let resetBtn: HTMLElement = document.getElementById("reset");
resetBtn.addEventListener("click", function(): void {
    localStorage.clear();
    window.location.href = "./index.html";
}); 