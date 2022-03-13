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