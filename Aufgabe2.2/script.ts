namespace Aufgabe2_2 {
    // Aufgabe 1
    // a
console.log(min(5, 5, 30, 100, -8, -10, 33, -100, -20));
function min(..._outputs: number[]): number {
        let min: number = _outputs[0];
        for (const num of _outputs) {
            if (min > num) {
                min = num;
            }
        }
        return min;
    }

    // b
console.log(isEven(-1));
function isEven(num: number): boolean {
    // Um negative Zahlen auch abzudecken wir deinfach der Betrag der Zahl genommen.
    if ( num < 0 ) {
        num = num * (-1); 
    }
    if (num == 1) {
        return false;
    }
    if (num == 0) {
        return true;
    }
    if (isEven(num - 2)) {
        return true;
    }
    return false;
    }

    // c
class Student {
    name: string;
    vorname: string;
    matrikelnummer: number;

    constructor(_name: string, _vorname: string, _matrikelnummer: number) {
        this.name = _name;
        this.vorname = _vorname;
        this.matrikelnummer = _matrikelnummer;
    }

    public showInfo(): void {
                console.log(`Name: ${this.name}, Vorname: ${this.vorname}, Matrikkelnummer: ${this.matrikelnummer}`);
    }
}

let s1: Student = new Student("Mustermann", "Max", 11111);
let s2: Student = new Student("Misterfrau", "Maria", 22222);
let s3: Student = new Student("Katz", "Julian", 12345);

let studierende: Student[] = [];

studierende.push(s1);
studierende.push(s2);
studierende.push(s3);
studierende.push(new Student("Robert", "Schuhmann", 12345));

s1.showInfo();
s2.showInfo();
s3.showInfo();
studierende[3].showInfo();


//Aufgabe 2

let testArrayNum: number[] = [1, 2, 3, 5, 3, 100, 2, 99, -100, -33, 5];
let testArrayNum2: number[] = [4, 5, 7];
let testArrayNum3: number[] = [5, 5, 5];
let testArrayNum4: number[] = [6, 6, 6];
let testArrayNum5: number[] = [7, 7, 7];
let testArrayString: string[] = ["Dose", "Bannane", "Elefant", "Flasche", "Eimer"];

// a
console.log(testArrayNum);
console.log(backwards(testArrayNum));

console.log(testArrayString);
console.log(backwards(testArrayString));

function backwards(_input: number[] | string[]): number[] {
    // anny benutzt um number und string abzudecken.
    let newArray: any[] = [];
    for (let i: number = _input.length - 1; i >= 0; i--) {
       newArray.push(_input[i]);
    }
    return newArray;
}



// b
// Hier sind komische Typisierungs Fehler entstanden welche ich nicht nachvollziehen kann. Code funktuniert trotzdem wie gewollt.
console.log(join(testArrayNum, testArrayNum2, testArrayNum3, testArrayNum4, testArrayNum5));

function join(_array1: number[], _array2: number[], ..._inputs: number[]): number[] {
    let newArray: number[] = [];
    _array1.forEach(element => {
        newArray.push(element);
    });
    _array2.forEach(element => {
        newArray.push(element);
    });
    _inputs.forEach(inputsElement => {
        // 
        inputsElement.forEach(arrayElement => {
            newArray.push(arrayElement);    
        });
    });
    return newArray;
}

// c
console.log(split(testArrayNum, 3, 5));
console.log(split(testArrayNum, 0, 99));
console.log(split(testArrayNum, 5, 3));

function split(_inputArray: number[], _von: number, _bis: number): number[] {
    let newArray: number[] = [];
    if (_von < 0 || _bis < 0) {
        return null;
    }
    for (let i: number = 0; i < _inputArray.length; i++) {
        if (i >= _von && i <= _bis) {
            newArray.push(_inputArray[i]);
        } else if (i <= _von && i >= _bis) {
            newArray.push(_inputArray[i]);
        }  
    }
    return newArray;
}

// Test Code aus Aufgabenstellung:
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c

// Aufgabe 3

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineCap = "round";
context.lineJoin = "round";
context.strokeStyle = "black";
context.lineWidth = 1;

// a

// context.fillStyle = "blue";
// context.fillRect(0, 0, 500, 500);
// context.fillStyle = "green";
// context.fillRect(0, 300, 500, 300);

// context.lineWidth = 10;
// // Wall
// context.strokeRect(75, 190, 150, 110);

// // Door
// context.fillStyle = "black";
// context.fillRect(130, 240, 40, 60);

// // Roof
// context.beginPath();
// context.moveTo(50, 190);
// context.lineTo(150, 110);
// context.lineTo(250, 190);
// context.closePath();
// context.stroke();

// context.fillStyle = "brown";
// context.fillRect(390, 270, 20, 100):

// context.fillStyle = "green";
// context.beginPath();
// context.arc(400, 230, 60, 0, 2 * Math.PI);
// context.fill();


// b
class Rectangel {
    private startX: number;
    private startY: number;
    private height: number;
    private width: number;
    // c
    constructor() {
        this.startX = Math.random() * 500;
        this.startY = Math.random() * 500;
        this.height = Math.random() * 200;
        this.width = Math.random() * 200;
    }
    // d
    drawRect(): void {
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.startX + this.width, this.startY);
    context.lineTo(this.startX + this.width, this.startY + this.height);
    context.lineTo(this.startX, this.startY + this.height);
    context.lineTo(this.startX, this.startY);
    context.stroke();
    context.closePath();
    }
}
// e
let rectangels: Rectangel[] = [];
for (let i: number = 0; i < 100; i++) {
    rectangels.push(new Rectangel());
}

rectangels.forEach(rectangel => {
  rectangel.drawRect();  
});

}


