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

function runFunc() {
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello" + "78");
}
runFunc();
