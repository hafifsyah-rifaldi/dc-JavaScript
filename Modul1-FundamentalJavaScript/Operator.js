let x = 10;
let y = 5;

x += y; //artinya -> x = x + y;
x -= y; //artinya -> x = x - y;
x *= y; //artinya -> x = x * y;
x /= y; //artinya -> x = x / y;
x %= y; //artinya -> x = x % y;
console.log(x);

/* output
0
*/

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
/* output
true
false
*/