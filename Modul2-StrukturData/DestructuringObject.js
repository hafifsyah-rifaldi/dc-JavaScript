const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const {firstName, lastName, age, isMale, isFemale = false} = profile;
console.log(firstName, lastName, age);
console.log(isMale);
console.log(isFemale); //  opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan
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