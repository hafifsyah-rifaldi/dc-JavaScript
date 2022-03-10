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