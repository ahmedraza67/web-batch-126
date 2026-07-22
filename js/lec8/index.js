// resultCalc();
// function resultCalc(params) {
//   console.log("simple function");
// }
// console.log(name1);
// let name1 = 0;
// console.log(name1);

// let resultCalc1 = () => {
//   console.log("hdhh");
// };

// resultCalc1();

let users = ["ahmed", "raza", "ali"];
let nums = [23, 342, 54, 32, 54, 2, 32];

let tarnsformedArray = users.map((item, i) => {
  return item.replaceAll("a", "r");
});
// let filterarray2 = users.map((item, i) => {
//   return item[0] == "a";
// });
// console.log(filterarray2);

let stdData = [
  { name: "Ahmed", marks: 478 },
  { name: "Ali", marks: 452 },
  { name: "Usman", marks: 489 },
  { name: "Hamza", marks: 465 },
  { name: "Bilal", marks: 441 },
  { name: "Zain", marks: 475 },
  { name: "Ayan", marks: 458 },
  { name: "Saad", marks: 482 },
  { name: "Hassan", marks: 470 },
  { name: "Taha", marks: 446 },
  { name: "Shayan", marks: 491 },
  { name: "Farhan", marks: 455 },
  { name: "Daniyal", marks: 468 },
  { name: "Fahad", marks: 439 },
  { name: "Abdullah", marks: 484 },
  { name: "Ibrahim", marks: 460 },
  { name: "Talha", marks: 473 },
  { name: "Arham", marks: 450 },
  { name: "Rayan", marks: 487 },
  { name: "Huzaifa", marks: 466 },
];
let filterarray = users.filter((item) => {
  return item.marks > 90;
});
console.log(filterarray);

// item
// index

// function hello(callbackFun) {
//   console.log("sddads");
//   callbackFun();
// }

// function hello2() {
//   console.log(hello2);
// }

// hello(hello2);
