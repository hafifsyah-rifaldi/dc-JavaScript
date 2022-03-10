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