let isLightOn = true;
let isRaining = false;
let isHungry = false;
let trueValue = 4 > 3;
let falseValue = 4 < 3;

let un1;
console.log(un1);
let un2;
console.log(un2);
let un3;
console.log(un3);

let empty1 = null;
console.log(empty1);
console.log(typeof(empty1));
let empty2 = null;
console.log(empty2);
let empty3 = null;
console.log(empty3);

let firstName1 = "Alex";
let lastName1 = "Z";

// = x=y x=y
// += x+=y x=x+y
// -= x-=y x=x-y
// *= x*=y x=x*y
// /= x/=y x=x/y
// %= x%=y x=x%y
// **= x**=y x=x**y

let numOne = 2
let numTwo = 1;

let sum = numOne + numTwo;
let diff = numOne - numTwo;
let multi = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, multi, div, remainder, powerOf);

const PI = 3.14;
let radius = 100;
let areaOfCircle = PI * radius * radius ;
console.log(areaOfCircle);

const gravity = 9.81;
let mass = 72;
let weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37;
console.log(`Human body temperature is ${bodyTemp}, \nBoiling point of water is ${boilingPoint}`);

// == check only value
// === check value and data type
// != not equal
// > greater than
// < lesser than
// >= greater than or equal to
// <= lesser than or equal to

console.log(3 > 2);
console.log(3 != 2);
console.log(3==="3")
console.log(3==2);

console.log("mango".length == "mango".length);
console.log("mango".length != "apple".length);
console.log("apple".length < "avocado".length);
console.log("hello".length < "hi".length);
console.log("apple".length === "apple".length);

let ampersand1 = 4 >= 4 && 1 < 2;
console.log(ampersand1); 
let ampersand2 = 4 === 4 && 5 < 10;
console.log(ampersand2); 
let ampersand3 = 1 !== "1" && 2 > 1;
console.log(ampersand3);
let ampersand4 = 4 === "4" && 5 === 5;
console.log(ampersand4);

let pipe1 = 4 === "4" || 5 ===5;
console.log(pipe1);
let pipe2 = 5 >= 6 || 5 <= 6;
console.log(pipe2);
let pipe3 = 4 > 2 || 2 > 1;
console.log(pipe3);
let pipe4 = 1 > 2 || 2 > 3;
console.log(pipe4);

let negation1 = 5 > 2;
console.log(negation1);
let negation2 = !(5 > 2);
console.log(negation2);
let isLightsOn = true;
let isLightsOff = !isLightsOn;
console.log(isLightsOff);
let isMarried = !true;
console.log(isMarried);

let count1 = 0;
console.log(++count1);
console.log(count1);
console.log(count1);

let count2 = 0;
console.log(count2++);
console.log(count2);
console.log(count2);

let count3 = 0;
console.log(--count3);
console.log(count3);

let count4 = 0;
console.log(count4--);
console.log(count4);

let isRaining1 = true;
isRaining1 ? console.log("go later") : console.log("you can go now");

let isMarried1 = false;
isMarried1 ? console.log("yes he is married") : console.log("going to get married next year");

let number1 = 5;
number1 > 0 
? console.log(`${number1} is positive`) 
: console.log(`${number1} is negative`); 

let number2 = -5;
number2 > 0
? console.log(`${number2} is positive`)
: console.log(`${number2} is negative`);

// let prompt1 = prompt("enter number", "ok");
// console.log(prompt1);

// let confirm1 = confirm("shall we go");
// console.log(confirm1);
let now = new Date();
console.log(now);

let now1 = new Date();
console.log(now1.getFullYear());

let now2 = new Date();
console.log(now2.getMonth());

let now3 = new Date();
console.log(now3.getDate());

let now4 = new Date();
console.log(now4.getDay());

let now5 = new Date();
console.log(now5.getHours());

let now6 = new Date();
console.log(now6.getMinutes());

let now7 = new Date();
console.log(now7.getSeconds());

let now8 = new Date();
console.log(now8.getMilliseconds());

let now9 = Date.now();
console.log(now9);

//4/1/2020 0:56
let now10 = new Date();
let date = now10.getDate();
let month = now10.getMonth();
let year = now10.getFullYear();
let hour = now10.getHours();
let minutes = now10.getMinutes();
console.log(`${date}/${month}/${year} ${hour}:${minutes}`);