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