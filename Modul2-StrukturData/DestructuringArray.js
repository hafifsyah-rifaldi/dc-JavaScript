const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);


// mengambil nilai array tanpa index lainnya
const [, , _3Food] = favorites;
console.log(_3Food);
/*
output:
Nugget
*/

// Destructuring Assignment
const favorit = ["Kentang", "Udang", "Nugget", "Ayam"];

let myFood = "Es krim";
let herFood = "Mie";

[myFood, herFood] = favorit;

console.log(myFood);
console.log(herFood);


// ! ALgoritma Sorting tanpa Destructuring Array
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// ! Algoritma sorting dengan Array Destructuring Assignment
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/