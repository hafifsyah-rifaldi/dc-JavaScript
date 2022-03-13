//* ARRAY MAP
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

//* ARRAY FILTER
const truthyArray = [1, '', 'Hallo', null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);
/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */

//* Contoh lain ARRAY FILTER
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);
/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

//* ARRAY REDUCE
const anotherStudents = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const totalScore = anotherStudents.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
/**
 * output:
 * 313
 * 
 */

//* ARRAY SOME
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);
/**
 * output true
 */

//* ARRAY FIND
const lainStudents = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

const findJames = lainStudents.find(student => student.name === 'James');
console.log(findJames);
/**
output
{ name: 'James', score: 88 }
**/

//* ARRAY SORT
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]