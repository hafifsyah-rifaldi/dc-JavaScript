//* REGULAR FUNCTION
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`);
}

//* ARROW FUNCTION
//function expression
const sayHi = (greet) => {
    console.log(`${greet}!`)
}

const sayNama = (nama) => {
    console.log(`Nama saya ${nama}`)
}

sayNama("Leia");
/* output
Nama saya Leia
*/

//* Jika tidak membutuhkan parameter, dapat menuliskan tanda kurung kosong
const sayPagi = () => {
    console.log("Selamat pagi semuanya!")
};

sayPagi();


//* Ketika body dari function terdiri dari satu baris, dapat menghapus tanda kurung kurawal untuk hemat baris kode yang ditulis
const sebutNama = nama => console.log(`Nama saya ${nama}`);
sebutNama("Hafif");

const sebutHello = () => console.log("Selamat pagi semuanya");
sebutHello();
/* Output
Nama saya Hafif
Selamat Pagi semuanya!
*/