/* Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. 
Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. 
Jika variabel didefinisikan di dalam fungsi, 
maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut 
beserta turunannya.
 */

//* Contoh Scoping dalam kode:
// global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    //local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 

    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}


//* Berhati hati dalam mendefinisikan variabel dalam fungsi
/* 
Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. 
Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan, 
contohnya seperti berikut: */
function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total);
/* output
400
*/

/* 
Mungkin kita berharap nilai total akan tetap 9, 
mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. 
Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal. 
Kita tidak menggunakan keyword const atau let ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global. */
//! Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
