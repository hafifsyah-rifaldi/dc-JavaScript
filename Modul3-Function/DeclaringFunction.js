function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`;
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)
/* output
20
*/

//! Expression Function
const sapaan = function(nama, bahasa) {
    if(bahasa === "Inggris") {
        return "Good Morning " + nama + "!";
    } else if (bahasa === "Perancis") {
        return "Bonjour " + nama + "!";
    } else {
        return "Selamat Pagi " + nama + "!";
    }
}

console.log(sapaan('Hafif', 'Inggris'));
/* output
Selamat Pagi Hafif
*/