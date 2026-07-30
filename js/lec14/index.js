let heading = document.querySelector("#maindiv");
let switchBtn = document.getElementById("switchBtn");
let mainInp = document.getElementById("maininp");

console.log(heading);
heading.className = "mainHeadinglight";

console.log(heading.classList);

// heading.onclick = () => {
//   console.log("hello");
// };

switchBtn.onclick = () => {
  if (heading.className == "mainHeadingLight") {
    heading.className = "mainHeadingDark";
  } else {
    heading.className = "mainHeadingLight";
  }

  console.log(mainInp.value);
};

mainInp.oninput = (e) => {
  console.log(e.target.value);
  console.log(mainInp.value);
};



// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()