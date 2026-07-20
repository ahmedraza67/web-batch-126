const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);
console.log(fruits);

console.log(fruits.toString());
console.log(fruits.join(""));

// let fName = "ahmed";
// let lName = "raza";

// let firstChrs = fName[0] + lName[0];
// console.log(firstChrs);

console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("grapes"));
console.log(fruits);

console.log(Array.isArray(fruits));
// delete fruits[2];
console.log(fruits);

console.log(fruits.concat(fruits, fruits));

console.log(fruits.copyWithin(1, 0, 1));

const newFruits = [
  "Banana",
  [
    "sjassa",
    [
      "Banana",
      [
        "Banana",
        "Orange",
        "Apple",
        ["Banana", "Orange", "Apple", "Mango"],
        "Mango",
      ],
      "Orange",
      "Apple",
      "Mango",
    ],
    "jsjs",
    "oiouoi",
    "qwertyu",
  ],
  "Orange",
  "Apple",
  "Mango",
];
console.log(newFruits.flat(Infinity));

console.log(fruits.indexOf("apple"));

console.log(fruits.sort());
console.log(fruits.reverse());
