/* Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di-export? 
Caranya adalah menggunakan method require(). */
//* import dari state.js
const coffeeStock = require('./state');
console.log(coffeeStock);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/