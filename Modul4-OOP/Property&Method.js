class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'hafif@gmail.com');
/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

/*
//* Contoh diatas untuk meninisialisasi/mengakses atribut global dari sebuah kelas
    menggunakan -> this.attributeName
*/


/** 
//* cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function mailCoba1() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
this._contacts = []
// contoh
class mailCoba2 {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
this._contacts = [];
// contoh
class mailCoba3{
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}