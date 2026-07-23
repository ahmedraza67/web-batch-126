let data = [12, 34, 334, 56, 23];

let reducedarr = data.reduce((acc, item, index, array) => {
  acc = acc + item;
  return acc;
}, 10);
console.log(reducedarr);

let sum = 0;
let mapp = data.map((item) => {
  sum += item;
  return item;
});

console.log(sum);
console.log(mapp);

let fruits = ["mango", "banana", "grapes", "mango", "mango"];
fruits[0];
// let fruit={
//   mango: 3,
//   grapes: 1,
//   banana: 1,
// }
// fruit['banana']

let occ = fruits.reduce((acc, fruit, index) => {
  //   console.log(acc);
  //   console.log(fruit);
  //   console.log((acc[fruit] || 0));

  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(occ);

