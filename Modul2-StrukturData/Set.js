const numberSet = new Set([1, 4, 6, 4, 1]);

//! Menambahkan fungsi add()
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
//! Menambah fungsi delete()
numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/