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
//numbersArray = [5, 6, 7];

const persons = {name: "Divan", age: 18};
persons.age = 50;
persons.city = "Volgograd";
console.log(persons);
//person = {name: "Capusta"};

console.log(typeof "текст");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

// Задание
let newPrice = 12;
console.log(newPrice, typeof newPrice);
newPrice = "I am a Batman";
console.log(newPrice, typeof newPrice);

let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = {name: "John"};
let obj2 = {name: "John"};

console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(arr1 === arr2);

let users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
];
console.table(users);