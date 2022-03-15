import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

/**output
 * 10
 */

const myArray2 = [5, 6, 7, 8];
const sum2 = _.sum(myArray2);

console.log(sum2);

/**output
 * 26
 */