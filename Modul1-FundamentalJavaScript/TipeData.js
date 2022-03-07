let x;
console.log(typeof (x));
/* Output: Undefined 
Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.
*/

let y = 10;
console.log(typeof (y))
/* Output Number */

let z = 17.25;
console.log(typeof (z))
/* Output Number */

let a = 12;
let b = 9;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment Decrement */
let postfix = 5;
console.log(postfix++);
/* Output 5 */
console.log(postfix);
/* Output 6 */

let prefix = 5;
console.log(++prefix);
/* Output 6 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
console.log(5n + 2n)
console.log(5n - 2n)
console.log(5n * 2n)
console.log(5n / 2n)
console.log(5n % 2n)

/* output 
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

let greet = "Hello";
console.log(typeof (greet))
/* Output String */
let moreGreet = greet + greet;
console.log(moreGreet);
/* Output Hello Hello*/

const question = '"What do you think of JavaScript?" I asked';
console.log(question)
/* output: "What do you think of JavaScript?" I asked */
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer)
console.log("Windows path: C:\\Program Files\\MyProject");

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);
/* output: Hello, my name is Luke. */


let t = true;
let f = false;
console.log(typeof (t))
console.log(typeof (f))
/* output:
boolean
boolean
*/

const d = 10;
const e = 12;
let isGreater = d > e;
let isLess = d < e;

console.log(isGreater);
console.log(isLess);
/* output:
false
true
*/

let someLaterData = null;
console.log(someLaterData);
/* output: null */

const id = Symbol("id");
console.log(id);
/* output Symbol(id) */

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);
/* Output false */