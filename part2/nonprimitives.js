// Object
const username = {
  " first name": "a",
  isLoggedI: true,
};

// username = {
//   firstname: "b",
//   isLoggedI: true,
// };

console.log(username);
console.log(typeof username);

console.log(username.firstname);
username.firstname = "b";

console.log(username);

username.new = "aaa";

console.log(username);

console.log(username[" first name"]);

// Array
let anotherUser = ["a", true];
console.log(anotherUser[0]);
