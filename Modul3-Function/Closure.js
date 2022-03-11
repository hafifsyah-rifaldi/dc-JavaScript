/* Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
Lexical scope berarti pada sebuah fungsi bersarang, 
fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya. */
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