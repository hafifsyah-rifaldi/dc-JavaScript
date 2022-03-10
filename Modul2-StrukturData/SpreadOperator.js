const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
console.log(...favorites);

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/


//Spread operator untuk object literals, menggabungkan object dengan kode yang lebih ringkas
const obj1 = { firstName: 'Obi-Wan', age: 30};
const obj2 = { lastName: 'Kenobi', gender: 'M'};

const newObj = { ...obj1, ...obj2};
console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/