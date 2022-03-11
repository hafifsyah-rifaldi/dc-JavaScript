/* Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
Lexical scope berarti pada sebuah fungsi bersarang, 
fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya. */

const { objToLists } = require("prelude-ls");

//* Lexical Scope
function init() {
    var name = 'Obi Wan '; // Variable lokal di dalam scope fungsi init

    function greet() {  // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`); //Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();
/* output
Halo, Obi Wan
*/

function init() {
    var name = "Wan Obi";

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

let myFunction = init();
myFunction();
/* Output
halo, Wan Obi */
/* 
Kode di atas akan menghasilkan output yang sama. 
Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. */