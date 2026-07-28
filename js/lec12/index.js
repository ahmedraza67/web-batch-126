// let data = fetch('')

let myPromise = new Promise((resolve, reject) => {
  let loggedIn = true;

  setTimeout(() => {
    if (loggedIn == false) {
      reject("Please login First");
    } else {
      resolve("Login Success");
    }
  }, 0);
});

myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// setTimeout(() => {
//   console.log("Timeout");
// }, 5000);

// setInterval(() => {
//   console.log("interval");
// }, 1000);

async function dataFetch() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

dataFetch();
