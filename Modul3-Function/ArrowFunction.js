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