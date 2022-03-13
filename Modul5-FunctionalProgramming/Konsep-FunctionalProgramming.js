//* Pure Function
/* Salah satu konsep besar dari paradigma FP adalah Pure Function. 
Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. 
Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, 
terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
*/
//* CONTOH PURE FUNCTION
/* //! let PI = 3.14;

//! const hitungLuasLingkaran =  (jariJari) => {
  //!  return PI * (jariJari * jariJari);
}
//! console.log(hitungLuasLingkaran(4)); // 50.24
//! PI = 5; //tidak sengaja nilai PI berubah
//! console.log(hitungLuasLingkaran(4));// 80 */

//* CONTOH PURE FUNCTION YANG BENAR
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

//! Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.