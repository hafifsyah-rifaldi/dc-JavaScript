/* Lalu bagaimana caranya untuk melakukan import atau menggunakan object yang sudah di-export? 
Caranya adalah menggunakan method require(). */
/* Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js 
kita gunakan teknik destructuring object untuk mendapatkan nilai yang di-import seperti ini: */
//* import dari state.js
const {coffeeStock, isCoffeeMachineReady} = require('./state');

console.log(coffeeStock);
console.log(isCoffeeMachineReady);


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