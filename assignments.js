//values and variables 1 & 2
const country = "England";
const continent = "Europe";
let population = 59;

console.log(country);
console.log(continent);
console.log(population);

// Data Types 1 & 2

const isIsland = true;
language = "English";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//isIsland = false;
//let, const & var 1.2.3

/*console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);*/


//const description = country + " is in " + continent + ", and it's " + population + " million people speak " + language + ".";

//console.log(description);

// ^ basic operators 1,2,3,4,5.

// strings, templates and literals. Recreate below with template literal syntax

/*const description = ` ${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description)

const populationAverage = 33;

if (population >= populationAverage) {
    console.log(`England's population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million
    below average`)
}*/

//Type conversion and coercion
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143