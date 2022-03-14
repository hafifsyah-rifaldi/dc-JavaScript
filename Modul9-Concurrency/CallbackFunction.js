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


//* Callback Hell
/* Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah:
1. Menyiapkan bahan
2. Membuat adonan
3. Memasukkan adonan ke cetakan
4. Memanggang adonan */

//! Menghindari callback hell seperti dibawah ini
/* function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
} */

//* solusi callback hell dengan menggunakan PROMISE
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}