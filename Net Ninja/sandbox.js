// ASYNC - AWAIT
const fetchSomething = async (resource) => {
  const response = await fetch(resource);

  if (response.status !== 200) {
    throw new Error("Cannot Fetch the Data");
  }

  const data = await response.json();

  return data;
};

const resources = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/users",
];

console.log(1);
console.log(2);

resources.forEach((res) =>
  fetchSomething(res)
    .then((data) => console.log("Resolved: ", data))
    .catch((err) => console.log("Rejected: ", err.message))
);

console.log(3);
console.log(4);

//FETCH API + PROMISES
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Rejected: ", err);
//   });

// // PROMISES
// const getSomething = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("could not fetch data");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// // Good Chained Promise Syntax
// getSomething("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log("promise 1 resolved:", data);
//     return getSomething("https://jsonplaceholder.typicode.com/todos");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved:", data);
//     return getSomething("https://jsonplaceholder.typicode.com/users");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved:", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//CALLBACKS
// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch data", undefined);
//     }
//   });

//   request.open("GET", resource);
//   request.send();
// };

// // Callback Function Calls
// getTodos("https://jsonplaceholder.typicode.com/posts", (err, data) => {
//   console.log(data);
//   getTodos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
//     console.log(data);
//     getTodos("https://jsonplaceholder.typicode.com/users", (err, data) => {
//       console.log(data);
//     });
//   });
// });
