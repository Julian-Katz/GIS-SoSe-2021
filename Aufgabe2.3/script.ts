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
// Ende - Aufgabe 1

// Eis zusammenstellen
let eis1: EisKonfiguration = { waffel: angebotWaffeln[1], eiskugeln: [angebotEisskugeln[1]], toppings: [angebotToppings[1]], preis: 2 };
console.log(eis1);
// Ende - Eis zusammenstellen
