// let a = 100;
// let b = 20;

// {
//   let a = 10;
//   let b = 30;
//   console.log(`${a} : ${b}`);
// }

// {
//   let a = 50;
//   console.log(`${a} : ${b}`);
// }

// console.log(`${a} : ${b}`);

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// spread operator

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 4, 6, 7, 8, 9];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// function array(b, ...a) {
//   console.log(a);
// }
// array(1, 2, 3, 8, 9);
let a = [9, 8, 6, 3, 5, 1, 2, 3, 4, 5, 6];
// a.sort((a, b) => {
//   return a - b;
// });
// console.log(a);

// let uniqueArr = a.filter((value, index, arr) => {
//   // console.log("value = > ", value);
//   // console.log("index => ", index);
//   // console.log("arr => ", arr);
//   return arr.indexOf(value) === index;
// });
// console.log(a);
// console.log(uniqueArr);

// function foo() {
//   console.log("Hello from foo");
// }

// function bar() {
//   console.log("Starting bar");
//   foo();
//   console.log("Ending bar");
// }

// bar();

// function factorail(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorail(n - 1);
//   }
// }
// // const result = factorail(6);
// // console.log(result);

// console.log(factorail(6));

//  async and await in javascript :

// const p = new Promise((resolve, reject) => {
//   resolve("promised resolved value");
// });
// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// High Order Function :=>

// a function which gets another function as arguments and return and function from it is known as heigher order functions.

const radius = [2, 3, 4, 5, 6];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const caluclate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(caluclate(radius, area));

// flat map mehods

// const arr = [
//   [1, 2, [3, [45, 43]]],
//   [4, 5, [6, 7]],
// ];

// console.log(arr.flat(Infinity));

// const text = "My name is jagdish singh dhami, I am a front-end web developer";
// const words = text.split(" ");

// const char = words.flatMap((w) => w.split(""));
// console.log(char);

// currying in javascript fn(a)(b)(c)

// function sum(a, b) {
//   return a + b;
// }
// function product(a, b) {
//   return a * b;
// }
// function op(operation) {
//   return function (a) {
//     return function (b) {
//       return operation(a, b);
//     };
//   };
// }

// console.log(op(sum)(5)(6));
// console.log(op(product)(6)(6));

// object short-hand

// const name = "jagdish singh";
// const age = 25;

// const person = { name, age };
// console.log({ name, age });

// bind , call, apply

// var name = "Dhami jazz";

// function say(title = "Mr.") {
//   return title + " " + this.name;
// }
// const person = {
//   name: "Jagdish SIngh",
//   age: 25,
// };
// const tell = say.bind(person);
// console.log(tell());

// console.log(say.call(person, "miss"));
// console.log(say.apply(person, ["Developer"]));

// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const g = generator();
// // console.log([...g]);
// console.log(g.next());

// closure in loop

for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  })(i);
}
