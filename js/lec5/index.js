let department = "computer information system";
let fName = "ahmedytrty";
let lName = "         raza";

console.log(fName.length);
console.log(lName.trim().charAt(0));
console.log(fName.charCodeAt(0));
console.log(fName.codePointAt(0));
let fullName = fName.concat(lName);
console.log(fName.concat(lName, department));
console.log(fName.at(0));
console.log(fName[0]);
let finalName = fName.slice(0, 5);
console.log(finalName);

console.log(lName);
console.log(lName.trim());

console.log(lName.trim().repeat(5));
console.log(fName.replace("ytrty", ""));

console.log(fName.split(""));
console.log(department.split("",10));

// if (fName.length < 8 || fName.length > 14) {
//   console.log("FName length must be greater the 8 and and less then 14");
// } else {
//   console.log("Register Suucess");
// }
