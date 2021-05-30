namespace script {
    let optionsEis: HTMLElement = document.getElementById("optionsEis");
    let konfigList: HTMLElement = document.getElementById("currentEis");
    let site: number = 0;
    let angebotEiskugeln: Eiskugel[] = [];
    let angebotToppings: Topping[] = [];
    let angebotWaffeln: Waffel[] = [];


    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let data: Response = await response.json();

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
        } else {
            displayOptionsOfWaffel();
            displayKonfigFromLocalStorage(konfigList);
        }


        let weiterBtn: HTMLElement = document.getElementById("weiter");
        if (weiterBtn !== null) {
            weiterBtn.addEventListener("click", function (_event: Event): void {
                site++;
                if (site === 1) {
                    clearOptionList();
                    displayOptionsOfEiskugel();
                } else if (site === 2) {
                    clearOptionList();
                    displayOptionsOfTopping();
                } else if (site === 3) {
                    window.location.href = "./konfig.html";
                }
            });
        }
        // Ende - Load dynamik content

        // Eis Options laden
        function displayOptionsOfWaffel(): void {
            angebotWaffeln.forEach(element => {
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
                if (optionsEis !== null) {
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
            angebotEiskugeln.forEach(element => {
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
                if (optionsEis !== null) {
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
            angebotToppings.forEach(element => {
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
                if (optionsEis !== null) {
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




    }
    communicate("./data.json");
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
    resetBtn.addEventListener("click", function (): void {
        localStorage.clear();
        window.location.href = "./index.html";
    });


    // Server Komunikation:
    async function sendServer(): Promise<void> {
        let url: string = "https://gis-communication.herokuapp.com";
        let sendData: Object = JSON.parse(localStorage.getItem("eisKonfig"));
        let sendDataObjekt: Object = {
            "Waffel": sendData[0],
            "Eiskugel": sendData[1],
            "Topping": sendData[2]
        };
        let query: URLSearchParams = new URLSearchParams(<any>sendDataObjekt);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let data: Response = await response.json();
        let body: HTMLElement = document.querySelector(".center-container");
        let messageDom: HTMLElement = document.createElement("p");
        for (const key in data) {
            if (key === "error") {
                messageDom.innerHTML = data[key];
                messageDom.style.color = "red";
                body.appendChild(messageDom);
            } else if (key === "message") {
                messageDom.innerHTML = data[key];
                messageDom.style.color = "green";
                body.appendChild(messageDom);
            }
        }



    }
    if (window.location.href.substr(-12) === "/konfig.html") {
        sendServer();
    }







}