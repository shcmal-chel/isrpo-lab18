console.log("Hello, JavaScript");

let age = 18;
let name = "Ivan";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);

let value = 10
console.log(value);
value = "Теперь это строка";
console.log(value);
value = true;
console.log(value);

let userName = "Олег";
console.log(`Привет, ${userName}!`)

let price = 99.99;
let temperature = -15;
let infinity = 1 / 0;
let notANumber = 0 / 0;
console.log(0.1 + 0.2);

let bigNumber = 900123409140135n;
let huge = BigInt("1234567890123456789012344567890");

let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;

let x;
let y = undefined;

let userDate = null;

let id = Symbol("id");

let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!")
    },
};

console.log(person);

let fruits = ["apple","banana","orange"];
let numbers = [1,2,3,4,5];
let mixed = ["текст", 42, true, null];

function sum(a, b){
    return a + b;
}

let multiply = function (x, y) {
    return x * y;
};

console.log(sum(5, 3));

let now = new Date();
let birthday = new Date("2007-11-08");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

const numbersArray = [1, 2, 3];
numbersArray[0] = 10;
console.log(numbersArray);
numbersArray = [5, 6, 7];

const persons = {name: "Divan", age: 18};
persons.age = 50;
persons.city = "Volgograd";
console.log(persons);
person = {name: "Capusta"};