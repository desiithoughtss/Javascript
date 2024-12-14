// Number
let balance = 120;
let anotherBalance = new Number(120);
console.log(balance);
console.log(anotherBalance);

console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean
let isActive = true;
let isReallyActive = true;

// null and undefined
let firstName;
console.log(firstName);
console.log(typeof firstName);

firstName = null;
console.log(firstName);
console.log(typeof firstName);

// String
let myString = "hello"
let myString1 = `${myString}, coding`
console.log(myString1)

// Symbol
let sm1 = Symbol("a")
let sm2 = Symbol("a")
console.log(sm1 == sm2)