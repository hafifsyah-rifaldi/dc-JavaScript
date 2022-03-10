const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
console.log(...favorites);

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/
