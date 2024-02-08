// ES6 : Javascript
//1. const

// const name = "jagdish singh";
// console.log(name);
// name = "jazz Dhami";   // TYpe Error

// const org_name;
// // console.log(org_name); //  SyntaxError: Missing initializer in const declaration
// org_name = "Times Internet"
// console.log(org_name);  // SyntaxError: Missing initializer in const declaration

// 2. let

// let name = "jagdish singh";
// console.log(name);
// name = "jazz Dhamii";
// console.log(name);

// let org_name;
// org_name = "Times Internet";
// console.log(org_name);

// 3. Arrow function :

// simple function

// function simpleFunc(name) {
//   console.log("This is a simple function.", name);
// }
// simpleFunc("simple");

// const arrowFunc = (name) => {
//   console.log("This is arrow function.", name);
// };
// arrowFunc("Arrow");

// 4. Template Literals :

// it allows us to use the javscript variable with the string without using + operator.

// var name = "jagdish singh";
// let str = "Template literals";
// console.log(`Hii my name is ${name} and this is a ${str}`);

// 5. Objects and Array Destructuring .

// Destructing in javascript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts. With the destructing assignment, we can ‘unpack’ array objects into a bunch of variables.

// const college = {
//   name: "DTU",
//   est: 1945,
//   isPvt: false,
// };

// // before object destructuring

// console.log(college.name);
// console.log(college["est"]);

// // after object destructuring
// let { name, est, isPvt } = college;

// console.log(name, est, isPvt);

// // Array Destructuring :

// const arr = ["lionel", "messi", "barcelona"];

// // before array destructring
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// // after array desturctring
// let [value1, value2, value3] = arr;
// console.log(value1, value2, value3);

// 6. Default parameter :

// in Es6 we can declare a function with a default parameter with default variable

// function defaultParameter(a, b = 5) {
//   return a + b;
// }
// console.log(defaultParameter(4, 8));
// console.log(defaultParameter(6));

// 7. classes :

// Es6 introduced classes in javascript. classes in javascript can be used to create a new objects with the help of constructor. each class can only have one constructor inside it.

// class Vehicale {
//   constructor(name, engine) {
//     this.name = name;
//     this.engine = engine;
//   }
// }

// const Bike1 = new Vehicale("Royal Enfield", "350CC");
// const Bike2 = new Vehicale("Pulsar", "250CC");

// console.log(Bike1);
// console.log(Bike1.name, Bike1.engine);
// console.log(Bike2.name, Bike2.engine);

// 8. Rest Parameter :
// It is used to represent a number of parameter in an array to pass them together to a function.

// function restSum(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(restSum(3));
// console.log(restSum(3, 4));
// console.log(restSum(3, 4, 5));
// console.log(restSum(3, 4, 5, 6));
// console.log(restSum(3, 4, 5, 6, 7));

// 9. Spread operator :
// it simply changes an array of n elements into a list of n different elements

// let arr = [1, 2, 3, 4, 5, 6, -1];
// console.log(...arr);
// console.log(arr);
// console.log(Math.max(...arr));

// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// let arr4 = { ...arr1, ...arr2 };
// console.log(arr4);

// let obj1 = {
//   name: "jagdish singh",
//   age: "25",
// };
// let obj2 = {
//   name1: "jazz dhami",
//   age1: 24,
// };

// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// 10. For Of loop
// The for of loop iterate through the iterablel items but in a short syntax as compared to other loops

// const myArr = [3, 4, 5, 6, 7, 8, 9, 10];
// // for (let elem of myArr) {
// //   console.log(elem);
// // }
// for (let elem in myArr) {
//   console.log(myArr[elem]);
// }

// 11. Promise

// javascript promise are used to perform asynchronous tasks. that takes some time to executed . it combines the synchronous and asynchronous task together.

// const jsPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise has been resolved.");
//   }, 3000);
// });
// jsPromise.then((res) => console.log(res));

// 12. string methods :

// String startsWith()
// const useStart = "This string implements the startsWith() method.";
// console.log(useStart.startsWith("This string"), useStart.startsWith("This is"));

// // String endsWith()
// const useEnd = "This string implements the endsWith() method.";
// console.log(useEnd.endsWith("clear() method."), useEnd.endsWith("method."));

// // String includes()
// const useIncludes = "This string implements the includes() method.";
// console.log(
//   useIncludes.includes("includes()"),
//   useIncludes.includes("My name")
// );

// 13. Array methods :

// Array.from() method

// const newArr = Array.from("Jagdish singh");
// console.log("array from methods ", newArr);

// const obj1 = {
//   name: "jagdish",
//   age: 24,
// };

// const newArr1 = Array.from(obj1);
// console.log(newArr1);

// Array.keys() method
// const milkProducts = ["Curd", "Cheese", "Butter", "Ice-Cream"];
// const arrayKeys = milkProducts.keys();
// console.log(arrayKeys);
// for (let key of arrayKeys) {
//   console.log(key);
// }

// 14. Object Enteries

// const myArr = ["apple", "banana", "grapes", "orange"];
// const newArr = myArr.entries();
// for (let key of newArr) {
//   console.log(key);
// }

// flattening and multi dimensional array :

// const flatArr = [1, [2, 3, [4, 5, [6, [7, [8, 9, [1, 2, [3, 4]]]]]]]];

// console.log(flatArr.flat(Infinity));

//seccond ethods using functions

// let output = [];
// function convertedArray(multidimensionArray) {
//   for (let i = 0; i < multidimensionArray.length; i++) {
//     if (Array.isArray(multidimensionArray[i])) {
//       console.log(multidimensionArray[i]);
//       convertedArray(multidimensionArray[i]);
//     } else {
//       console.log("else ", multidimensionArray[i]);
//       output.push(multidimensionArray[i]);
//     }
//   }
//   return output;
// }

// console.log(convertedArray(flatArr));

// currying in javascript :

// function calculateArea(length) {
//   return function (breadth) {
//     return function (height) {
//       return length * breadth * height;
//     };
//   };
// }

// console.log(calculateArea(3)(4)(5));

// heigher order functtion :

// a heigher order function is a function that takes one or more functions as an arguments. or returns a function as its result.

// function callBackFunc() {
//   console.log("I am a callback function");
// }
// // heigher order function

// function heigherOrderFunc(func) {
//   console.log("I am Heigher order function.");
//   func();
// }
// heigherOrderFunc(callBackFunc);

// heigher order function

// const radius = [1, 2, 3, 4, 5];

// // logic to calculate area

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };

// // logic to calculate diameter

// const diameter = (radius) => {
//   return 2 * radius;
// };

// const calculateArea = (radius, logic) => {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculateArea(radius, area));
// console.log(calculateArea(radius, diameter));

// let petName = "Rocky"; //Global Variable
// myFunction();

// function myFunction() {
//   document.getElementById("geeks").innerHTML =
//     typeof petName + "- " + "My pet name is " + petName;
// }

// document.getElementById("Geeks").innerHTML =
//   typeof petName + "- " + "My pet name is " + petName;

// string methods

// console.log("cat".charAt(0));

// function getCharacterLength(str) {
//   // The string iterator that is used here iterates over characters,
//   // not mere code units
//   console.log(...str);
//   return [...str].length;
// }

// console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3

// charCodeAt:

// console.log("AZ".charCodeAt(1)); // z : 90 // A : 65

// for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
//   let char = String.fromCharCode(i);
//   console.log(char);
// }

// Javascript Classes :

// classess are a template to creating objects. classes in js are built on prototypes. but also have some syntax and semantic that are unique to classes.

// class declaration :

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// // Expression : class is annonymous but assign a varible :

// const Rectangle1 = class {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// };

// // expression the class has its own name.

// const Rectangle3 = class Rectangle4 {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// };

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   //methods
//   calcArea() {
//     return this.width * this.height;
//   }

//   // get slides
//   *getSlides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }

// const square = new Rectangle(10, 10);
// console.log(square.area);

function formattedNum(num) {
  return num.toFixed(2);
}
console.log(formattedNum(200.90754));
