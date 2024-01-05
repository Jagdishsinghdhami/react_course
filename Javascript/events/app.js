// var person = {
//   age: 23,
//   getAge: function () {
//     return this.age;
//   },
// };
// var person2 = { age: 54 };
// person.getAge.call(person2);

// function saySomething(message) {
//   return console.log(`${this.name} + " is " + ${message}`);
// }
// var person4 = { name: "John" };
// saySomething.apply(person4, ["awesome"]);

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var person1 = new Person("jagdish", 24, "male");
// console.log(person1);

// var person2 = new Person("dhamu", 25, "male");
// console.log(person2);

// Rest Parameter :

// function restOperator(...args) {
//   return console.log(args[1]);
// }
// restOperator(5, 6, 7, 8);

// function addAllargs(...args) {
//   let sumOfArgs = 0;
//   let i = 0;

//   while (i < args.length) {
//     sumOfArgs += args[i];
//     i++;
//   }
//   return console.log(`sumOfArgs : ${sumOfArgs}`);
// }

// addAllargs(56, 7, 89, 9, 0, 76, 56, 4, 5, 45, 6);

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);

//   var x = 2;
//   let y = 12;
// }
// func1();

// function func2() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

// function runFunc() {
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello" + "78");
// }
// runFunc();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var object = new Person("jazz");

// Call methods :

// function invite(greeting1, greeting2) {
//   return console.log(
//     `${greeting1}  my name is ${this.firstName} ${this.lastName} , ${greeting2}`
//   );
// }

// var employee1 = { firstName: "Jagdish ", lastName: "Dhami" };
// var employee2 = { firstName: "Dhami", lastName: "Jazz" };

// invite.call(employee1, "Hii", "How are you?");
// invite.call(employee2, "Hello", "How are you?");

// invite.apply(employee2, ["Hello", "How are you?"]);
// invite.apply(employee2, ["Hello", "How are you?"]);

// Bind: returns a new function, allowing you to pass any number of arguments

// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);

// inviteEmployee1("hiii", "how are you bro..");
// inviteEmployee2("hello", "whatsapp rey.");

// Heigher order functions :

// A heigher order function is a function that accepts another function as an arguments or returns a function as a return value or both

// const firstOrderFunc = () => console.log("hello I am a first order function");

// const heigherOrder = (returnFirstOrderFunc) => returnFirstOrderFunc();

// heigherOrder(firstOrderFunc);

// (function () {
//   var message = "IIFE";
//   console.log(message);
// })();
// console.log(message); //Error: message is not defined

// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// console.log(encoded_uri);
// console.log(decoded_uri);
// var message;
// console.log(message);
// message = "The variable Has been hoisted";

// message("good morning");
// function message(name) {
//   console.log(name);
// }

// class Bike {
//   constructor(color, modal) {
//     this.color = color;
//     this.modal = modal;
//   }
//   getDetails() {
//     return this.color + " " + this.modal;
//   }
// }
// console.log(Bike("green", "1234"));

// function callbackFunction(name) {
//   console.log("Hello " + name);
// }

// function outerFunction(callback) {
//   let name = prompt("Please enter your name.");
//   callback(name);
// }

// outerFunction(callbackFunction);

// promise chaining :

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

for (i = 0; i < 10; i++) {
  var text = "jazz";

  if (i === 5) {
    continue;
  }
  console.log(`num : ${i}`);
}
