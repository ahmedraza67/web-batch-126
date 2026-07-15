// if (condition) {
//   code;
// } else {
//   code;
// }

let balance = 2000;
let userWithdrw = 867;
let isLoggedIn = true;

if (balance > userWithdrw && isLoggedIn) {
  balance -= userWithdrw;
  console.log(
    "current balance:",
    balance,
    "withdraw success",
    "withdraw Amount:",
    userWithdrw,
  );
} else {
  if (!balance > userWithdrw) {
    console.log("insufficiant Balance ");
  } else {
    console.log("or Login Failed");
  }
}

let age = 19;

if (age < 14) {
  console.log("user is child");
} else if (age > 14 && age < 18) {
  console.log("user is teen");
} else {
  console.log("user is adult");
}

let name1 = "raza";
switch (name1) {
  case "ahmed":
    console.log("hello ahmed");
    return;
  case "raza":
    console.log("hello raza");
    return;
  case "shafqat":
    console.log("hello shafqat");
    return;
  default:
    console.log("hello");
    return;
}
