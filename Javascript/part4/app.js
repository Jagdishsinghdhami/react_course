// const coding = ["js", "html", "css", "jQuery", "c++"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);

// console.log(myNums);
// console.log(newNums);

// create a new element in dev

// const div = document.createElement("div");
// div.className = "main";
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "Generated Title");
// div.innerText = "Jagdish singh dhami";
// div.style.backgroundColor = "red";
// div.style.padding = "10px";
// document.body.appendChild(div);
// console.log(div);

// function addLanguage(langName) {
//   const li = document.createElement("li");
//   li.innerText = langName;
//   document.querySelector(".language").appendChild(li);
// }

// addLanguage("html");
// addLanguage("jQuery");
// addLanguage("React.js");

// console.log(this);

// var obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };

// obj.x();

// var student = {
//   name: "jagdish singh",
//   printName: function () {
//     console.log(this.name);
//   },
// };
// student.printName();
// var student2 = {
//   name: "Jazz dhamii",
// };

// student.printName.call(student2);

let students = [
  { name: "Jagdish singh", rollNumber: 123, marks: 80 },
  { name: "Ashok singh", rollNumber: 123, marks: 80 },
  { name: "Jazz Dhami", rollNumber: 123, marks: 80 },
  { name: "Maya singh", rollNumber: 123, marks: 80 },
];

let newNames = [];
for (let i = 0; i < students.length; i++) {
  newNames.push(students[i].name.toUpperCase());
}

console.log(newNames);
