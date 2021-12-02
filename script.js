/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// variable is like a box in which you can store a value
let jessica_owen = "JO";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let Job1 = "Developer";
let Job2 = "Teacher";

console.log(myFirstJob); */

/*et javascriptIsFun = true
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jess');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1981;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*let age = 30;
// this is now mutated below
age = 31;

const birthYear = 1991;
birthYear = 1990;

// maths operators
const now = 2021;
const ageJess = now - 1987;
const ageOwen = now - 1988;
console.log(ageJess, ageOwen);

console.log(ageJess * 2, ageJess / 10, 2 ** 3);
//2**3 means 20 to the power of 3 which also means 2 * 2 * 2

const firstName = "Jess";
const lastName = "Schofield";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; //  x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x + x - 1
console.log(x);

//Comparison Operators
console.log(ageJess > ageOwen); // >, <, >=, <=
console.log(ageOwen >= 18);

console.log(now - 1991 > now - 2021);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJess + ageOwen) / 2;
console.log(ageJess, ageOwen, averageAge); */

//coding challange no. 1

const markWeight1 = 78;
const markWeight2 = 96;
const markHeight1 = 1.69;
const markHeight2 = 1.88;

const johnWeight1 = 92;
const johnWeight2 = 85
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

const BMImark1 = markWeight1 / markHeight1 ** 2;
const BMIjohn1 = johnWeight1 / johnHeight1 ** 2;

console.log(BMImark1, BMIjohn1);

markHighterBMI = BMImark1 > BMIjohn1;
console.log(markHighterBMI);

const BMImark2 = markWeight2 / markHeight2 ** 2;
const BMIjohn2 = johnWeight2 / johnHeight2 ** 2;

console.log(BMImark2, BMIjohn2);

markHighterBMI = BMImark2 > BMImark2;
console.log(markHighterBMI);

// coding challange 2

/*if (BMIjohn1 > BMImark1) {
    console.log(`John's BMI  is higher than Mark's`)
} else {
    console.log(`Mark's BMI is higher than John's`)
}


if (BMIjohn2 > BMImark2) {
    console.log(`John's BMI  (${BMIjohn2}) is higher than Mark's (${BMImark2})`)
} else {
    console.log(`Mark's BMI  (${BMImark2}) is higher than John's (${BMIjohn2})`)
}*/

/*const firstName = "Jessica";
const job = "Office Coordinator";
const birthYear = 1987;
const year = 2021;

const jess = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + " !";

console.log(jess);

const jessNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jessNew);

console.log(`just a regular string...`);

console.log(" string with \n\ multiple \n\ lines");

console.log(`string
with
multiple
lines`);*/

/*const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license:🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young she needs to wait another ${yearsLeft} years. `)
}

const birthYear = 2003;
let century;

if (birthYear >= 2000) {
    century = 20
} else {
    century = 19
}
console.log(century); */

/*
// TYPE CONVERSION
const inputYear = "1991";

// can use this number function to convert the string to a number
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
// this results in a NaN as it is not a number (which weirdly is a number in javascript which you can see in the console below) This means it's actually an invalid number.
console.log(typeof NaN);
// below would add 23 as a string first then a number.
console.log(String(23), 23);

//TYPE COERCION

// the plus turns the 23 from a number into a string due to javascript having type coercion
console.log('I am ' + 23 + 'years old.');
// the minus concatinates all to numbers
console.log('23' - '10' - 3); */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}
// above false is activated so goes to else as 0 is a falsey value


let height;
if (height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is undefined')
}
// above as the variable is undefined it is a falsey value so else is executed.

