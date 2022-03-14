/* Hal yang seringkali membingungkan ketika bekerja dengan program synchronous 
dan asynchronous adalah bagaimana menangani suatu nilai yang didapatkan 
secara asynchronous pada program yang berjalan secara synchronous. 
Contohnya seperti kode berikut: */

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu..");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee); // menambahkan callback, fungsi tidak perlu mengembalikan value. hapus return coffee
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/