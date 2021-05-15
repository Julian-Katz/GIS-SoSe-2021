let optionsEis: HTMLElement = document.getElementById("optionsEis");
let konfigList: HTMLElement = document.getElementById("currentEis");
let kategorie: HTMLElement = document.getElementById("kategorie");
let site: number = 0;
function loadJsonContent(_content: string): any {
    return JSON.parse(_content);
}

// Load dynamik content
window.addEventListener("load", function (): void {
    if (site === 3 ) {
        displayKonfigFromLocalStorage(konfigList);
    } else {
    displayOptionsOfKategorie(loadJsonContent(angebotWaffeln)); 
    displayKonfigFromLocalStorage(konfigList);
    }
});

let weiterBtn: HTMLElement = document.getElementById("weiter");
if(weiterBtn !== null) {
        weiterBtn.addEventListener("click", function(_event: Event): void {
        site++;
        if (site === 1){
            clearOptionList();
            displayOptionsOfKategorie(loadJsonContent(angebotEisskugeln)); 
        } else if (site === 2) {
            clearOptionList();
            displayOptionsOfKategorie(loadJsonContent(angebotToppings));
        } else if ( site === 3) {
            window.location.href = "./konfig.html";
        }
    });
}

// Ende - Load dynamik content

// Eis Options laden

function displayOptionsOfKategorie(_displayItems: any[]): void {
    _displayItems.forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            displayText = displayText + element[key];
            if (key === "preis") {
                displayText += " €";
            } else {
                displayText += " - ";
            }
        }
        domElement.innerText = displayText;
        if(optionsEis !== null){
            optionsEis.appendChild(domElement);
        }
        domElement.addEventListener("click", function (_event: Event): void {
            let eisKonfig: any[];
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
    let eisKonfigArray: any[] = JSON.parse(localStorage.getItem("eisKonfig"));
    eisKonfigArray.forEach(element => {
        let domElement: HTMLElement = document.createElement("div");
        domElement.classList.add("btn", "options");
        let displayText: string = "";
        for (const key in element) {
            displayText = displayText + element[key];
            if (key === "preis") {
                displayText += " €";
            } else {
                displayText += " - ";
            }
        }
        domElement.innerText = displayText;
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