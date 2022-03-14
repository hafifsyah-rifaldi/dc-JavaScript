/* Pada ES6 module, jika kita hanya mengekspor satu nilai pada sebuah berkas JavaScript 
baik itu primitive value, function, array, object, atau class, 
kita gunakan keyword export default. Contohnya seperti ini: */

/* Lalu untuk mengimpor nilainya kita dapat menggunakan keyword import … from seperti berikut ini: */
import {coffeeStock as stock, isCoffeeMachineReady} from './state2.js';
console.log(stock);
console.log(isCoffeeMachineReady);
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(stock);
