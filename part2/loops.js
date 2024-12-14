// 1
let num1 = 1;
let sum = 0;
while (num1 <= 5) {
  sum = sum + num1;
  num1++;
}
console.log(sum);

// 2

let num2 = 5;
let countdown = [];
while (num2 >= 1) {
  countdown.push(num2);
  num2--;
}
console.log(countdown);

/* // 3
let teaCollection = [];
let tea;

do {
  tea = prompt(`enter the values (type "stop" to end)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
 */

// 4
let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

// 5 
let arr = [2,4,6]
let newArr = []
for( let i = 0; i < arr.length; i++){
    let newElement = arr[i] * 2
    newArr.push(newElement)
}
console.log(newArr)

// 6
let arr1 = ["a", "b", "c"]
// let newArr1 = [arr1[1]]
// console.log(newArr1)
let newArr1 = []
for(let i =0; i<arr1.length; i++){
    newArr1.push(arr1[i])
}
console.log(newArr1)