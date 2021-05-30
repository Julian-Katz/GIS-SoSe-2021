namespace data {
    // Eis Datenstruktur
    interface EisKonfiguration {
        waffel: Waffel;
        eiskugeln: Eiskugel[];
        toppings: Topping[];
    }

    interface Waffel {
        art: String;
        größe: String;
        preis: number;
    }

    interface Eiskugel {
        geschmack: String;
        preis: number;
    }

    interface Topping {
        art: String;
        preis: number;
    }
    // Ende - Eis Datenstruktur

}