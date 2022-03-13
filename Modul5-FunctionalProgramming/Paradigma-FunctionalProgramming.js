/* Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. 
Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

Sebagai gambaran buat Anda yang belum tahu apa itu deklaratif dan imperatif lebih jauh, silakan simak contoh kode berikut. */
//* Gaya Imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i< names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);
/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

//* Gaya Deklaratif
const nama2 = ['Hafif', 'Ifal', "Alfi", 'Budi'];

const newNama2WithExcMark = nama2.map((nama) => `${nama}!`);

console.log(newNama2WithExcMark);

/* output:
*  [ 'Hafif!, 'Ifal!', 'Alfi!', 'Budi!' ]
*/
