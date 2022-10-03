let firstName = "Alex";
let lastName = "Z";
let country = "India";
let city = "Chennai";
let age = 25;
let isMarried = true;
let year = new Date().getFullYear();
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
console.log(year);

let check1 = "10";
let check2 = 10;
console.log(check1 === check2);

let check3 = parseInt("9.8");
let check4 = 10;
console.log(check3 === check4);

let firstName1 = "Alex";
let lastName2 = "Z";
let fullName = firstName1 +" "+ lastName2;
console.log(fullName);

let num1 = 5
let num2 = 6;
console.log(num1 + num2);

let ampersand = 5 >= 5 && 7 < 10;
console.log(ampersand);

let isMarried1 = !true;
console.log(isMarried1);

let country1;
console.log(country1);

let empty = " ";
console.log(empty);

let num3 = 5;
let num4 = 5;
console.log(num3 % num4);

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log( 4 === "4"); //false

let python = "python".length;
let jargon = "jargon".length;
console.log(python != jargon);

console.log("Hello");

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3));//true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true

let python1 = "python";
console.log(!(python1.includes("on")));
let jargon1 = "jargon";
console.log(!(jargon1.includes("on")));

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

/*
let base = prompt("Enter the base");
let height = prompt("Enter the Height");
let area = 0.5*base*height;
console.log(area);

let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");
console.log("The perimeter of the triangle is " + (parseInt(sideA) + parseInt(sideB) + parseInt(sideC))); 

let length = parseInt(prompt("length"));
let width = parseInt(prompt("width"));
let area = length * width;
let perimeter = 2 *  (length + width);
console.log("area: " + area );
console.log("perimeter: " + perimeter);


let pi = parseInt(prompt("pi"));
let r = parseInt(prompt("r"));
let area = pi*r*r;
console.log("area of circle: " + area);


let hour = parseInt(prompt("Enter hours:"));
let rate = parseInt(prompt("Enter rate per hour:"));
let weekly = hour * rate ;
console.log("weekly earning is: " + weekly);
*/

let person = "hello";
let length = person.length;

let nameLength = length > 7
? "name is long" : "name is short" 
console.log(nameLength);

let name1 = "Asabeneh"
let name2 = "Yetayehaaaa";
let firstName2 = name1.length;
let lastName3= name2.length;

let lenCompare = firstName2 > lastName3
? `your first name, ${name1} is longer than your family name, ${name2}`
:`your family name, ${name2} is longer than your first name, ${name1}`;
console.log(lenCompare);

let myAge = 250;
let yourAge = 25;
let ageDif = myAge - yourAge;
console.log(`i am ${ageDif} years older than you.`)

/*
let bornYear = parseInt(prompt("Born year:"));
let yearDiff = new Date().getFullYear() - bornYear;
let riteAge = 18 - yearDiff;
let permission = yearDiff >= 18 
? `you are ${yearDiff}. you are old enough to drive`
: `you are ${yearDiff}. you will be allowed to drive after ${riteAge} years`;
console.log(permission)


let sec = parseInt(prompt("years:"));
let totalSec = sec * 365 * 24 * 60 * 60;
console.log(`you lived ${totalSec} seconds`);
*/

let readable = new Date()

let year1 = readable.getFullYear();
let month1 = readable.getMonth();
let day1 = readable.getDate();
let hours1 = readable.getHours();
let minutes1 = readable.getMinutes();

console.log(`${year1}-${month1}-${day1} ${hours1}:${minutes1}`);
console.log(`${day1}-${month1}-${year1} ${hours1}:${minutes1}`);
console.log(`${day1}/${month1}/${year1} ${hours1}:${minutes1}`);


let hm = readable.toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
console.log(hm);

console.log(`${year1}-${month1}-${day1} ${hm}`);
