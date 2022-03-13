/* Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) 
pada sebuah method ataupun constructor yang dimiliki oleh parent class. 
Sehingga, ia dapat disesuaikan dengan behavior di child class. */

//* Contoh kasus Inheritance atau pewarisan :
class WhatsApp{
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    //Overriding method => Melakukan Override Total
   sendMessage(msg, to) {
       super.sendMessage(msg, to) {
           console.log('Send by Wa');

    }
}

const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);
 
/**
Output:
Send by WA
**/