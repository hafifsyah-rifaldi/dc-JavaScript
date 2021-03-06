let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

/* mengakses array 
menggunakan index
*/
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/


//Menambahkan data ke dalam array metode push()
myArray.push('JavaScript');
console.log(myArray);
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

//Mengeluarkan data elemen terakhir dari array menggunakan metode pop()
myArray.pop();
console.log(myArray);
/* output
[ Orange, 42.5, 22, true ]
*/


//Metode lain
myArray.shift(); // Metode shift() digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); // unshift() digunakan untuk menambahkan elemen di awal array.
console.log(myArray);


//Menghapus elemen menggunakan metode splice()
myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/