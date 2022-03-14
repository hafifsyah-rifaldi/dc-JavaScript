/* Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di-export? 
Caranya adalah menggunakan method require(). */
//* import dari state.js
const coffeeStock = require('./state');

const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);
console.log(coffeeStock);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/