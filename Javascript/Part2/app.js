// 1 . Stack and heap memory in Javascript

// let myName = "Jagdish singh";
// let anotherName = myName;

// console.log(myName, anotherName);

// anotherName = "jazz Dhami";

// console.log(myName, anotherName);

// let userOne = {
//   email: "user@google.com",
//   upi: "user@ybl",
// };

// let userTwo = userOne;

// console.log(userOne.email);
// console.log(userTwo.email);

// userTwo.email = "Jazz@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);

// Closure in javascript : REal case of closure in javascript

//  a closure is the combination of a function bundled together with refrences to its surrounding state(the lexical envirnoment ). in other words a closure gives you access to an outer functions scope from an inner function . in javascript closure are created every time a function created at function creation time.

// function clickHandler(color) {
//   return function () {
//     document.body.style.backgroundColor = `${color}`;
//   };
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");

// 3. String in Javascript

// const myName = "Jagdish singh Dhami";
// const repocount = 50;

// console.log(`my name is ${myName} and repo count is ${repocount}`);

// const gameName = new String("Jagdish singh dhami");
// // console.log(gameName.__proto__);
// const anotherString = gameName.slice(-24, 4);
// console.log(anotherString);

// const url = "https://jagdish.com/jagdish%20dhami";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("jagdishdhami"));
// console.log(gameName.split(" "));

// 4. Number and Math in javascript

// const score = 400;
// const balance = new Number(400);
// console.log(score);
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);

// const hundred = 1000000;

// console.log(hundred.toLocaleString("en-IN"));

// 5. Date and Time in Javascript

// let myDate = new Date();
// console.log(myDate);

// 6. Array in javascript

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArr[0]);
// myArr.push(9);
// myArr.unshift(0);
// console.log(myArr);
// console.log(myArr.includes(12));
// console.log(myArr.indexOf(12));

// slice methods

// const myN1 = myArr.slice(0, 3);
// console.log("A => ", myArr);
// console.log(myN1);
// console.log("B => ", myArr);

// const myN2 = myArr.splice(0, 3);
// console.log(myN2);
// console.log("C => ", myArr);

// console.log(Array.isArray("jagdish"));
// // console.log(Array.from("jagdish"));
// const newArray = Array.from("jagdish");

// console.log(newArray);
// console.log(Array.isArray(newArray));

// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1, score2, score3));

//  Javascript Objects :

// singleton :

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "jagdish singh",
  age: 24,
  [mySym]: "key1",
  location: "bageshwar",
  email: "jagdish@gmai.com",
  isLoggedIn: false,
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(typeof mySym);

// jsUser.email = "dhami@jazz.com";
// console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.email = "dhami123@jazz.in";

// jsUser.greeting = function () {
//   console.log("Hello Js User this is function");
// };

// console.log(jsUser.greeting());

// jsUser.greetingTwo = function () {
//   console.log(`hello my name is ${this.name} and my age is ${this.age}`);
// };
// console.log(jsUser.greetingTwo());

const tinderUser = new Object();
tinderUser.name = "Jazz Dhami";
tinderUser.age = 24;
tinderUser.isLoggedIn = false;

// const regularUser = {
//   email: "jagdish.dhami@timesinternet.in",
//   fullName: {
//     userFullName: {
//       firstName: "jagdish singh",
//       lastName: "Dhami",
//     },
//   },
// };

// // console.log(tinderUser);
// console.log(regularUser.fullName.userFullName);

// const obj1 = {
//   1: "a",
//   2: "b",
//   3: "cd",
// };
// const obj2 = {
//   3: "cde",
//   4: "d",
//   5: "e",
// };
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// 6. Object de-structure and JSON API intro |

// const course = {
//   courseName: "js in hindi",
//   courseINstructor: "jagdish singh",
//   price: "9999",
// };

// // console.log(course.courseINstructor);
// // console.log(course["courseName"]);

// const { courseName: couname, courseINstructor, price } = course;

// console.log(couname);

// function in javascript

// function addTwoNum(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNum(23, 45);

// function addTwoNum(num1, num2) {
//   const result = num1 + num2;
//   console.log("result => ", result);
//   return result;
// }

// const result1 = addTwoNum(23, 45);
// console.log("result 1 => ", result1);

// function loginUserName(username) {
//   // if (username === undefined) {
//   if (!username) {
//     console.log("please enter username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserName("jazz"));

// function calcuateCartPrice(...num1) {
//   return num1;
// }
// console.log(calcuateCartPrice(200, 300, 400));

// const user = {
//   username: "jagdish dhami",
//   price: 999,
// };
// function handleObject(anyObject) {
//   console.log(
//     `usename is ${anyObject.username} and price is ${anyObject.price}`
//   );
// }

// handleObject(user);

// const myNewArray = [200, 300, 400, 500];

// function returnSecondValue(getArray) {
//   return getArray[1];
// }
// console.log(returnSecondValue(myNewArray));

// IIFE : Immediatly invoked function expression :

// (function chai() {
//   console.log("database connected");
// })();

// function one() {
//   console.log("one");
//   two();
// }
// function two() {
//   console.log("two");
//   three();
// }
// function three() {
//   console.log("three");
// }

// one();
// two();
// three();

// one  two three two three three

// control flow in javascript :

// switch case injavascrit :

// const month = 1;

// switch (month) {
//   case 1:
//     console.log("month is jan");
//     break;
//   case 2:
//     console.log("monthe is feb");
//     break;
//   case 3:
//     console.log("month is march");
//     break;
//   default:
//     console.log("month is unknown");
// }

// let index = 0;

// while (index < 10) {
//   console.log(`the index loop is :  ${index}`);
//   index++;
// }

// let score = 20;

// do {
//   console.log(`the score is ${score}`);
//   score++;
// } while (score <= 10);

// High orader array loops

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr = "Jagdish singh";

// for (const num of arr) {
//   if (num == " ") {
//     continue;
//   }
//   console.log(`the for loop of array : ${num}`);
// }

// const map = new Map();

// map.set("IN", "India");
// map.set("usa", "united state of america");
// map.set("jpn", "republic of Japan");

// // console.log(map);

// // for (let [key, value] of map) {
// //   console.log(`${key} and ${value}`);
// // }

// for (let key in map) {
//   console.log(`${map[key]}`);
// }

// const myObj = {
//   game1: "pubg",
//   game2: "free fire",
//   game3: "battel ground",
// };

// for (let key in myObj) {
//   console.log(`${key} and ${myObj[key]}`);
// }

// const coding = ["html", "css", "javascript", "react", "next"];

// coding.forEach((val, index, arr) => {
//   console.log(`${val}`);
// });

//  filter map reduce methods in javascript

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNums.filter((item) => {
//   if (item > 5) {
//     console.log(`value is ${item}`);
//   }
// });

// const newNums = myNums.filter((item) => item > 4);

// console.log(newNums);
// console.log(myNums);

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// const books = [
//   { title: "book 1", genere: "fiction", publish: 2002, edition: 2022 },
//   { title: "book 2", genere: "not fiction", publish: 2004, edition: 2018 },
//   { title: "book 3", genere: "fiction", publish: 2006, edition: 2014 },
//   { title: "book 4", genere: "not fiction", publish: 2008, edition: 2005 },
//   { title: "book 5", genere: "magic", publish: 2009, edition: 2006 },
//   { title: "book 6", genere: "magic", publish: 2001, edition: 2009 },
// ];

// // const userBooks = books.filter((bk) => bk.genere == "fiction");

// const userBooks = books.filter(
//   (bk) => bk.publish > 2005 && (bk.genere == "fiction" || bk.genere == "magic")
// );
// console.log(userBooks);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6];
// const addNums = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 100);

// console.log(addNums);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6];
// const singleEntry = arr.filter((val, index, arr) => {
//   return arr.indexOf(val) == index;
// });
// console.log(singleEntry);

// const div = document.createElement("div");
// // div.class("divClass");
// // div.id("divID");
// div.setAttribute("class", "divClass");
// div.setAttribute("id", "divID");
// div.className = "newClass";
// div.innerHTML = "this is a div tag";
// console.log(div);
// document.body.appendChild(div);

// function addLanguage(langName) {
//   const li = document.createElement("li");
//   li.innerHTML = `${langName}`;
//   document.querySelector(".language").appendChild(li);
// }
// addLanguage("html");
// addLanguage("css");
// addLanguage("jQuery");

// function makeOtpNum(otpNum) {
//   let otpNums = "";
//   for (let i = 0; i < otpNum; i++) {
//     otpNums += (Math.floor(Math.random() * 10) + 1).toString();
//   }
//   return otpNums;
// }
// console.log(makeOtpNum(6));

// const duplicateNUm = [1, 2, 3, 4, 5, 6, 4, 3, 7, 8, 6, 5, 7, 3, 6, 3, 8, 9, 4];

// const dupliceateNUms = duplicateNUm.filter((val, index, arr) => {
//   return arr.indexOf(val) === index;
// });

// console.log(dupliceateNUms);

// document.getElementById("button").addEventListener("click", function () {
//   console.log("button clicked");
// });

//  setTimeout and setInterval in javscript :
// const setFunc = function () {
//   console.log("SetTimeout run after Two seconds");
//   document.querySelector("h1").innerHTML = "Jagdish Singh Dhamii";
// };

// const changeMe = setTimeout(setFunc, 2000);

// document.querySelector("#stop").addEventListener("click", function () {
//   clearTimeout(changeMe);
//   console.log("stopped");
// });

// setIntewrval and ClearInteerval in javascript :

// const setInterv = setInterval(function () {
//   console.log("setINterval in => ", Date.now());
// }, 2000);

// document.querySelector("#start").addEventListener("click", function () {
//   setInterv;
// });
// document.querySelector("#stop").addEventListener("click", function () {
//   clearInterval(setInterv);
// });

// const promiseOne = new Promise(function (resolve, reject) {
//   // do any async task
//   // db calls, cryptography, network
//   setTimeout(() => {
//     console.log("Async task is complete in One seconds");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(() => {
//   console.log("Promise one has been completed");
// });

// promise 3 :

// const promiseThee = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "Jagdish Singh", email: "Jazz@gmail.com" });
//   }, 1000);
// });
// promiseThee.then(function (user) {
//   console.log(user);
// });
// //

// promise 4 :

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Jagdish dhami", password: "123456" });
//     } else {
//       reject("Error : Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise either resolve and reject");
//   });

// promise 5 :

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "dhami Jazz", password: "123456" });
//     } else {
//       reject("Error : Something went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// promise 6 :
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error => ", error);
//   }
// }

// getAllUsers();

// fetch api in javascript :

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .catch((error) => {
//     console.log("error => ", error);
//   });

// Object oriented in javascript :

// const user = {
//   name: "Jagdish singh",
//   loginCount: 8,
//   signedIn: true,
//   getUserDEtails: function (name) {
//     console.log(`got user ${name} details in above objects`);
//   },
// };

// console.log(user.name);
// console.log(user.getUserDEtails("Jazz Dhamii"));

// function user(username, count, isLoggedIn) {
//   this.username = username;
//   this.count = count;
//   this.isLoggedIn = isLoggedIn;

//   return this;
// }
// const userOne = new user("jazz Dhami", 56, true);
// const userTwo = new user("Dhami jagdish", 23, false);
// console.log(userOne);
// console.log(userTwo);

// Javascript Interview questions :

// myFun();

// // function myFun() {
// //   console.log("first");
// // }
// var myFun = function () {
//   console.log("first");
// };
// myFun();

// function myFun() {
//   console.log("second");
// }
// myFun();

// High order Functions :

// const radius = [3, 4, 5, 6, 7, 8];

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };

// const calculateArea = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculateArea(radius, area));

// Inheritance in javascript :

// in javascript inheritance is primarily acheived through prototype -based inheritance rather than class base inherutance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Bird extends Animal {
//   constructor(name, wingspan) {
//     super(name);
//     this.wingspan = wingspan;
//   }
// }

// const myBird = new Bird("Eagle", "2 meters");

// console.log(myBird.name);

//  forEach methods :
let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element) => {
//   console.log(element);
// });

let sqNum = numbers.map((val) => {
  return val * 2;
});
console.log(numbers);
console.log(sqNum);
