let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let date: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//! When to use annotations

// 1) Function that returns the 'any' type

// Before:
// const json = '{"x": 10, "y": 20}';
// const coordinates:  = JSON.parse(json);
// console.log(coordinates); // {x: 10, y: 20}

// After:
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialize it later

// Before:
// let words = ['red', 'green', 'blue'];
// let foundWord; // Deklaration: line 49

// for(let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true; // Initialization: line 53
//   }}

// After:
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Deklaration and Annotation: line 49

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // Initialization: line 53
  }
}

// 3) Variable whose type cannot be inferred correctly

// Before:
// let numbers = [-10, -1, 12];
// let numberAboveZero = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = numbers[i];
//   }
// }

// After:
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
