for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}
/* output
Luke
Han
Chewbacca
Leia
*/

let f = 1;
while (f <= 100) {
    console.log(f)
    f++;
}

/*
1
~
~
100
*/

let g = 1;
do {
    console.log(g);
    g++
} while (g <= 100);