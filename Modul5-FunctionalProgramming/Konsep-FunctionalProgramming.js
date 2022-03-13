//* 1. Pure Function
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

//! Selain dilarang untuk bergantung terhadap nilai luar, 
//! pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. 
//! Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
//* CONTOH PURE FUNCTION SIDE EFFECT(SALAH)
/* //! const createPersonWithAge = (age, person) => {
    //! person.age = age;
    //! return person;
//! };

//! const person = {
//!     name: `Bobo`
//! };

//! const newPerson = createPersonWithAge(18, person);
//! console.log({
  //!  person,
    //! newPerson,
//! }); */
/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

//* CONTOH PURE FUNCTION (Benar, memanfaatkan destructuring object)
const createPersonWithAge = (age, person) => {
    return { ...person, age};
};

const person = {
    name: `Bobo`
};
const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});
/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/

//* Immutability
/* Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.
Konsep immutability sangat kental pada paradigma FP.
Anda bisa lihat sebelumnya pada contoh penggunaan array map.
Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);
console.log({
    names,
    newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */
//* Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:
const user = {
    firstName: 'Harry',
    lastName: 'Protter', //ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);
/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */
//* Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP.
/* Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas.
Lantas bagaimana solusinya? 
Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, 
terapkan perubahan tersebut pada nilai return dalam objek baru.
*/

const user2 = {
    firstName: 'Hafif',
    lastName: 'Ifral', //ups, typo;
}

const createUserWithNewLastName = (newLastName, user2) => {
    return { ...user2, lastName: newLastName }
}
const newUser = createUserWithNewLastName('Ifal', user2);
console.log(newUser);
/**
 * output:
 * { firstName: 'Hafif', lastName: 'Ifal' }
 */
/* Hasilnya sama kan? 
Selain itu, Anda juga bisa menyesuaikan nama fungsinya dari renameLastNameUser
menjadi createUserWithNewLastName.
Hal itu perlu untuk mengindikasikan bahwa
fungsi mengembalikan atau menghasilkan objek user baru.
*/