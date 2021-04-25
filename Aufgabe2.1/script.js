"use strict";
// Aufgabe 1a
// Ausgabe:
// "Alles"
// "Klar?"
// "Logo!"
// Die Variablen können enthalten: _, $, Buchstaben, Zahlen(außer erste Stelle)
// Aufgabe 1b
// Zuerst wird a1 ausgeführt dann inerhaln von a1 func1, dann läuft a1 weiter
// Aufgabe 1c
function a1() {
    let x = "Alles";
    console.log(x);
    func0();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func0() {
    console.log("Gute!");
}
// Aufgabe2
// Ausgabe: 9 8 7 6 5 4 3 2 1
// Springt immer wieder hoch in do bis while false wird.
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
// Aufgabe 3a
function a3() {
    let i = 9;
    do {
        console.log(i);
        i = i + 1;
    } while (i > 0);
}
// a3(); --> Es kommt zur Endlosschleife da while nie false wird.
// Aufgabe 4a
// Ausgabe:
// Hallo
// Bla
// Hallo
// Blubb
// Test
let x = "Hallo";
console.log(x);
func(x);
console.log(x);
func2();
func3();
console.log(x);
function func(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// Aufgabe 4b
// Globale Variablen(let) sind überall Aufrufbar, sie können trotzdem wie in func3 überschrieben werden. Allerdings nur wenn es keine neu deklarierte lokale Variable mit dem selben Namen gibt, sonst wird diese Überschrieben. Lokale Variablen gelten immer nur zwischen zwei {}.
// Man könnte beide einer Variable zuweisen, dann muss die function allerdings vor der Ausführung deklariert werden. Darin unterscheiden sie sich auch, normale funtionen konnen auch erst nach dem Aufruf deklariert werden, bei variablen geht das nicht. 
// Aufgabe 5
let a = 2;
let b = 5;
console.log(multiply(a, b));
console.log(max(a, b));
count();
random10n();
console.log(factorial(5));
leapyears();
// a
function multiply(a, b) {
    return a * b;
}
// b
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
// c
function count() {
    let i = 1;
    let count = 0;
    while (i <= 100) {
        count = count + i;
        if (i == 100) {
            console.log(count);
        }
        i++;
    }
}
// d
function random10n() {
    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * 100);
    }
}
// e
function factorial(n) {
    let factorial = 1;
    if (n < 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= n; i++)
            factorial = factorial * i;
    }
    return factorial;
}
// f
function leapyears() {
    for (let i = 1900; i <= 2021; i++) {
        if (i % 400 == 0) {
            console.log(i);
        }
        else if (i % 4 == 0 && i % 100 != 0) {
            console.log(i);
        }
    }
}
// Aufgabe 6 
hashtag();
b6();
c6();
c6clever();
console.log(d6());
console.log(e6(10, 5));
// a
function hashtag() {
    let hashtag = "";
    for (let i = 0; i < 7; i++) {
        hashtag = hashtag + "#";
        console.log(hashtag);
    }
}
// b
function b6() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
// c
function c6() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}
function c6clever() {
    for (let i = 0; i < 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}
// d
function d6() {
    let output = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 != 0) {
            for (let i = 0; i < 4; i++) {
                output = output + " #";
            }
        }
        else {
            for (let i = 0; i < 4; i++) {
                output = output + "# ";
            }
        }
        output = output + "\n";
    }
    return output;
}
// e
function e6(height, width) {
    let output = "";
    for (let i = 0; i < height; i++) {
        if (i % 2 != 0) {
            for (let i = 0; i < width / 2; i++) {
                output = output + " #";
            }
        }
        else {
            for (let i = 0; i < width / 2; i++) {
                output = output + "# ";
            }
        }
        output = output + "\n";
    }
    return output;
}
//# sourceMappingURL=script.js.map