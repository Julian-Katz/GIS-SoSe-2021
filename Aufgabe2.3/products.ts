// Eis Datenstruktur
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
// Ende - Eis Datenstruktur