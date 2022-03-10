const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const {firstName, lastName, age, isMale} = profile;
console.log(firstName, lastName, age);
console.log(isMale);
/* output:
John Doe 18
*/


//Destructuring Assignment 
const profil = {
    namaAwal: "Hafif",
    namaAkhir: "Ifal",
    umur: 20
}
let namaAwal = "Alfi";
let umur = 18;
({namaAwal, umur } = profil);
console.log(namaAwal);
console.log(umur);
/* Output:
Hafif
20
*/