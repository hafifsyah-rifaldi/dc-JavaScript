//* ENCAPSULATION 
/* class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
} */

//* ABSTRACTION

//* INHERITANCE
// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
/* class ChildClassName extends ParentClassName{} */
 
 
// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
/* ChildClassName.prototype = new ParentClassName() */

//! CONTOH KODE 
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal' }`;
    }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());

wa1.sendMessage('halo', 0890009999888);


//* POLYMORPHISM