/* Promise merupakan sebuah objek yang digunakan untuk membuat 
sebuah komputasi (kode) ditangguhkan dan berjalan secara asynchronous [5]. 
Untuk membuat objek promise, 
kita gunakan keyword new diikuti dengan constructor dari Promise: */
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
 
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/