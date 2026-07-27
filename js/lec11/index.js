// let data = ["afas", "qqqqq", "eeee", "ttttt"];
// let data2 = ["ggggg", "hhhh", "jjjjj", "oooo"];

// let newData = [...data, ...data2];
// console.log(newData);

// const employees = [
//   {
//     id: 1,
//     name: "Ahmed",
//     age: 23,
//     department: "IT",
//     salary: 75000,
//     experience: 2,
//     active: true,
//     skills: ["React", "Next.js", "JavaScript"],
//     city: "Lahore",
//   },
//   {
//     id: 2,
//     name: "Ali",
//     age: 28,
//     department: "HR",
//     salary: 60000,
//     experience: 5,
//     active: true,
//     skills: ["Recruitment", "Communication"],
//     city: "Karachi",
//   },
//   {
//     id: 3,
//     name: "Sara",
//     age: 31,
//     department: "Finance",
//     salary: 90000,
//     experience: 8,
//     active: false,
//     skills: ["Excel", "Accounting"],
//     city: "Islamabad",
//   },
//   {
//     id: 4,
//     name: "Usman",
//     age: 26,
//     department: "IT",
//     salary: 82000,
//     experience: 4,
//     active: true,
//     skills: ["Node.js", "MongoDB"],
//     city: "Lahore",
//   },
//   {
//     id: 5,
//     name: "Ayesha",
//     age: 24,
//     department: "Marketing",
//     salary: 55000,
//     experience: 2,
//     active: false,
//     skills: ["SEO", "Content Writing"],
//     city: "Faisalabad",
//   },
//   {
//     id: 6,
//     name: "Hamza",
//     age: 30,
//     department: "IT",
//     salary: 95000,
//     experience: 7,
//     active: true,
//     skills: ["React", "TypeScript", "AWS"],
//     city: "Karachi",
//   },
//   {
//     id: 7,
//     name: "Fatima",
//     age: 27,
//     department: "Finance",
//     salary: 87000,
//     experience: 6,
//     active: true,
//     skills: ["Accounting", "SAP"],
//     city: "Multan",
//   },
//   {
//     id: 8,
//     name: "Bilal",
//     age: 22,
//     department: "Support",
//     salary: 45000,
//     experience: 1,
//     active: true,
//     skills: ["Customer Service"],
//     city: "Lahore",
//   },
//   {
//     id: 9,
//     name: "Hina",
//     age: 29,
//     department: "Marketing",
//     salary: 65000,
//     experience: 5,
//     active: true,
//     skills: ["Social Media", "SEO"],
//     city: "Islamabad",
//   },
//   {
//     id: 10,
//     name: "Zain",
//     age: 35,
//     department: "Management",
//     salary: 120000,
//     experience: 12,
//     active: false,
//     skills: ["Leadership", "Planning"],
//     city: "Karachi",
//   },
// ];

// let findEmp = employees.find((item) => {
//   return item.id == 1;
// });

// findEmp.name = "llllllllllllllllllllllllllllllllllllllllllll";
// console.log(findEmp);

// let finalData = [findEmp, ...employees];
// console.log(employees);

let data = fetch("https://dummyjson.com/posts?limit=20")
  .then((res) => {
    console.log(res);
    if (res.status === 404) {
      console.log("data dont found ente correct url");
      return;
    } else {
      return res.json();
    }
  })
  .then((finalData) => {
    console.log(finalData);

    return finalData;
  })
  .catch((err) => {
    console.log(err.error);
  })
  .finally(() => {
    console.log("Fetch Completed");
  });

console.log(data);
