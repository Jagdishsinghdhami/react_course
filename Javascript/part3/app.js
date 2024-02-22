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

// function formattedNum(num) {
//   return num.toFixed(2);
// }
// console.log(formattedNum(200.90754));

// Array methods

// let arr = new Array(8);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// console.log(arr);

// let courses = new Array(
//   "html",
//   "css",
//   "javascript",
//   "jQuery",
//   "react",
//   "next",
//   "tailwind",
//   "typescript"
// );

// console.log(courses);
// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[5]);
// console.log(courses[6]);
// console.log(courses[7]);

// accessing the last item in the array

// let lastItem = courses[courses.length - 1];

// console.log("Last Item : ", lastItem);

// courses[1] = "node.js";
// courses.push("mongoDb");
// courses.unshift("web development");
// console.log(courses);
// courses.pop();
// courses.shift();
// console.log(courses);
// let spliceMethod = courses.splice(1, 4);
// console.log(courses);
// console.log(spliceMethod);

// let courses = new Array(
//   "html",
//   "css",
//   "javascript",
//   "jQuery",
//   "react",
//   "next",
//   "tailwind",
//   "typescript"
// );

// let otherCourses = ["Node.js", "Expess.js"];

// console.log(courses);
// const names = "jagdish";

// console.log("array.isArray() method ", Array.isArray(courses));
// console.log("array.isArray() method in string", Array.isArray(names));

// console.log("array.instanceof method ", courses instanceof Array);
// console.log("array.instanceof method in string", names instanceof Array);
// courses.forEach((item) => {
//   console.log(item);
// });

// let concatArr = courses.concat(otherCourses);
// console.log(courses);
// console.log(concatArr);

// // conversion array to string :
// console.log(courses.toString());

// let courses = ["HTML", "CSS", "JavaScript", "React"];
// // console.log(courses.join("|"));
// console.log(courses);

// const emp = {
//   name: "Jagdish",
//   age: 25,
//   salary: 40000,
// };
// console.log(emp);
// console.log(delete emp.salary);
// console.log(emp);

// let numArr = [20, 30, 40, 50];

// // Delete 3 elements starting from index 1
// numArr.splice(1, 3);
// numArr.splice(1, 0, 3, 4, 5);
// console.log(numArr);

// let numArr = [20, 30, 40, 50];
// // console.log(numArr.indexOf(200));
// console.log(numArr.includes(20));
// console.log(numArr.includes(500));

// const oldArray = [1, 2, 3, 9, 10, 4, 5, 6, 7, 8];
// const newArray = oldArray.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(oldArray);
// console.log(newArray);

// const newArray = oldArray.filter((elem) => {
//   return elem % 2 === 0;
// });
// console.log(oldArray);
// console.log(newArray);

// let findElement = oldArray.find((elem) => {
//   return elem > 4;
// });

// let findIndexValue = oldArray.findIndex((elem) => {
//   return elem >= 4;
// });

// console.log(oldArray);
// console.log(findElement);
// console.log(findIndexValue);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let everyArr = arr.every((elem) => {
//   return elem > 5;
// });
// console.log(everyArr);

// let someArray = arr.some((elem) => {
//   return elem >= 6;
// });
// console.log(someArray);

// let courses = ["HTML", "CSS", "JavaScript", "React"];

// let copyArray = [];
// courses.forEach((elem) => {
//   copyArray.push(elem);
// });

// console.log(courses);
// console.log(copyArray);

// Javascript Strings

// single constructor

// let str = new String("this is a string");

// console.log(str);
// console.log(typeof str);

// let str = "Learn Html in GFG.";
// let newStr = str.replace("Html", "Javascript");

// console.log(newStr);

// let str = "Mind, Power, Power,  Soul";
// let part = str.replaceAll("Power", "Space");
// console.log(part);

// promise :

// let promise = new Promise(function (resolve, reject) {
//   let x = "jagdish";
//   let y = "jagdish";
//   if (x == y) {
//     resolve("success promise msg.");
//   } else {
//     reject("reject promise msg.");
//   }
// });

// promise
//   .then(function (resolve) {
//     console.log("promise has been successfully done.", resolve);
//   })
//   .catch(function (reject) {
//     console.log("promise has been rejected", reject);
//   })
//   .finally(function () {
//     console.log("promise has been successfully done and reject");
//   });

// function myGeeks() {
//   let looseMap = new WeakMap();
//   let Ram = { name };
//   let Raj = { name };
//   let Rahul = { name };
//   looseMap.set(Ram, "Ram");
//   looseMap.set(Raj, "Raj");
//   looseMap.set(Rahul, "Rahul");
//   console.log(looseMap);
//   console.log(looseMap.has(Ram));
// }
// myGeeks();

// arrow function : annonymous function

// const gfg = () => {
//   console.log("this is arrow functions");
// };
// gfg();

// const gfgAdd = (a, b, c) => {
//   console.log(a + b + c);
// };

// gfgAdd(10, 20, 30);

// Javascript this keywords :

// javascript this keywords always holds the refrence to a single object.

// Implicit Binding :

// const person = {
//   name: "jagdish singh",
//   age: 25,
//   greet: function () {
//     console.log(`Hii my name is ${this.name} and ${this.age} years old.`);
//   },
// };
// console.log(person.greet());

// // Explicit Biniding :

// function ageVerify() {
//   if (this.age > 18) {
//     console.log("You can drive a car");
//   } else {
//     console.log("you can not drive a car");
//   }
// }

// const person1 = {
//   name: "Jagdish singh",
//   age: 25,
// };
// const person2 = {
//   age: 15,
// };

// ageVerify.call(person1);
// ageVerify.call(person2);

//  async / await in javascript :

// const getData = async () => {
//   let data = await "Hello world";
//   console.log(data);
// };
// console.log(1);
// getData();
// console.log(2);

// Chai and code : Javascript

// let value = 3;
// let negValue = -value;

// console.log(negValue);

// console.log("hello".toString());
// console.log((10.11111).toFixed(2));

// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   return this.name;
// };
// let userOne = new User("Jagdish singh");

// console.log(userOne.sayHi());

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = this.lastName;
//   }
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   set fullName(_fullName) {
//     this.firstName = _fullName.split(" ")[0];
//     this.lastName = _fullName.split(" ")[1];
//   }
// }

// let userOne = new User("jagdish ", "singh");
// console.log(userOne.fullName);

// Arrow function : Arrow function is a concise way to written javascript functions in shorter way. arrow function introduced in es6 version. they make our code is more structured and readable. arrow function

// const gfg = async () => {
//   console.log("this is also callled lambeda function.");
// };

// gfg();

// Javascript this keywords : Javascript this keywords always hold the refrence to a single Objects.

// const person = {
//   name: "jagdish singh",
//   age: 25,
//   greet: function () {
//     console.log(
//       `Hii, my name is ${this.name} . and my age is ${this.age} Years old.`
//     );
//   },
// };

// person.greet();

// sum :

// function sumA(num1, num2){
//   return num1 + num2;
// }

// console.log(sumA(2,3));

// function sum(x, y) {
//   if (y == undefined) {
//     return (z) => {
//       return z + x;
//     };
//   }
//   return x + y;
// }

// console.log(sum(2, 3));
// console.log(sum(2)(3));

// const num = 100000000;
// console.log(num.toLocaleString("en-IN"));

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString("en-IN"));

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// function foo() {
//   console.log(x);
//   x = 10;
// }
// foo();

// foo();
// var foo = 20;

// function foo() {
//   console.log("calling foo");
// }
// foo();

// for (var i = 1; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// async function foo() {
//   // throw new Error();
//   return "hello worlds";
// }
// const result = foo();
// console.log(result);

// const user1 = {
//   name: "jagdish singh",
//   age: 25,
//   address: {
//     city: "mumbai",
//     state: "Utttrakhand",
//   },
// };

// // const user2 = { ...user1, address: { ...user1.address } };
// const user2 = structuredClone(user1);

// user2.name = "Jazz Dhamii";
// user2.address.city = "Bageshwar";
// console.log(user1);
// console.log(user2);

// function abc() {
//   console.log("hiiii");
// }

// const result = new abc();

// console.log(result);

// javascript interview Questions :

// var car = new Vehicle("Honda", "white", "2010", "India");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.modal = model;
//   this.color = color;
//   this.year = year;
//   this.coutry = country;
// }

// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x, y;
// }

// console.log(foo);
// console.log(typeof x);
// console.log(typeof y);

// console.log(Math.max());

// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// async function processArray(array) {
//   await array.forEach((item) => {
//     delayedLog(item);
//   });
// }

// processArray([1, 2, 3, 4]);

// let myNumber = 100;
// let myString = "100";

// if (!typeof myNumber === "string") {
//   console.log("It is not a string!");
// } else {
//   console.log("It is a string!");
// }

// if (!typeof myString === "number") {
//   console.log("It is not a number!");
// } else {
//   console.log("It is a number!");
// }

// const [x, ...y] = [1, 2, 3, 4];
// console.log(x, y);

// function verifyAnagrams(word1, word2) {
//   return word1.split("").sort().join("") === word2.split("").sort().join("");
// }
// console.log(verifyAnagrams("eat", "ate"));

// function verifyAnagrams(word1) {
//   return word1.split("").sort().join("");
// }
// console.log(verifyAnagrams("jagdish"));

// var c = 40;

// if (true) {
//   let a = 10;
//   const b = 20;
//   c = 30;
// }

// // console.log(a); //refrence error a is not defined
// // console.log(b);  //refrence error b is not defined
// console.log(c);

// function one() {
//   const username = "jagdish singh";

//   function two() {
//     const website = "Youtube";
//     console.log(username);
//   }
//   two();
// }

// one();

// arrow Function :

// const user = {
//   username: "Jagdish singh",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);
//   },
// };

// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "jagdish";
//   console.log(this);
//   console.log(this.username);
// }

// chai();

// const chai = () => {
//   let usename = "jagdish singh";
//   console.log(                                                                   this);
// };
// chai();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = arr;
// const newFilterArr = newArr.filter((val, index) => {
//   return val % 2 == 0;
// });
// console.log(newFilterArr);
// console.log(newArr);

// Elements and tag , sementic tag, self closing tag, doctype, attribute, example of attribute, meta tags, svg and canvas, difference between block and inline,

// css, cascading means, specifiity, cascade rule, flexbox,

// data types, scope, functions, parameter, argumeents, dom,

// let vehicle = {
//   wheels: "4",
//   fuelType: "Gasoline",
//   color: "Green",
// };
// let carProps = {
//   type: {
//     value: "Volkswagen",
//   },
//   model: {
//     value: "Golf",
//   },
// };

// var car = Object.create(vehicle, carProps);
// console.log(car);

// call methods :

// var employee1 = {
//   firstName: "jagdish singh",
//   lastName: "Dhami",
// };
// var employee2 = {
//   firstName: "Ashok",
//   lastName: "Singh",
// };

// function invite(greeting1, greeting2) {
//   console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// invite.call(employee1, "Hii", "How are you ? ");
// invite.call(employee2, "Hii", "How are you ? ");

// invite.apply(employee1, ["Hello", "whatsapp rey ?"]);
// invite.apply(employee2, ["Hello000", "whatsapp reyyyyyyyyyyyy..... ?"]);

// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);

// inviteEmployee1("hiiii", "how are you...");

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

// console.log(arrayIntegers3);
// console.log(arrayIntegersOriginal3);

// const output = "what's your perfect first date";

// console.log(
//   output
//     .split("")
//     .map(parseInt)
//     .filter((a) => a)
//     .reduce((a, b) => a + b)
//     .toString()
//     .split("")
//     .reverse()
//     .join("")
// );

// IIFE :

// (function () {
//   var message = "Hello world";
//   console.log(message);
// })();

// console.log(message);

// var message;
// console.log(message);
// let message = "hii worlds";

// classes in ES6

// class Bike {
//   constructor(name, value) {
//     this.name = name;
//     this.value = value;
//   }
//   getDetails() {
//     return this.name + " " + this.value;
//   }
// }

// var newBike = new Bike("Royal Enfield", "2,50,000");
// console.log(newBike.getDetails());

// function callBackFunc(name) {
//   console.log(`this is a callBackFunc ${name}`);
// }

// function outerFunc(callBack) {
//   let name = prompt("what is your function");
//   callBack(name);
// }

// outerFunc(callBackFunc);

// var object = {
//   k1: "value1",
//   k2: "Value2",
//   k3: "value3",
// };

// for (let key in object) {
//   if (object.hasOwnProperty(key)) {
//     console.log(`${key} --> ${object[key]}`);
//   }
// }

// var object = {
//   // k1: "value1",
//   // k2: "Value2",
//   // k3: "value3",
// };

// for (let key in object) {
//   if (Object.keys(object).length === 0) {
//     console.log("object length is zero");
//   } else {
//     console.log(`${key} --> ${object[key]}`);
//   }
// }

// console.log("jagdish singh".charAt(0).toUpperCase() + "jagdish singh".slice(1));

// const obj = {
//   name: "jagdish",
//   age: 24,
// };
// console.log(Object.keys(obj));

// max numer in array

// const arr = [10, 1, 2, 3, 46, 8, 54, 34];

// function findMax(number) {
//   let maxNum = number[0];
//   for (let i = 0; i < number.length; i++) {
//     if (maxNum < i) {
//       maxNum = number[i];
//     } else {
//       maxNum;
//     }
//   }
//   return maxNum;
// }

// console.log(findMax(arr));

// const arr = [10, 1, 2, 3, 46, 8, 54, 34];

// function findMax(numbers) {
//   let maxNum = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (maxNum < numbers[i]) {
//       maxNum = numbers[i];
//     }
//   }
//   console.log(maxNum);
//   return maxNum;
// }

// findMax(arr);
