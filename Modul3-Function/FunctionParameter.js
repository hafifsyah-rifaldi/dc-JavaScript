const { exp } = require("prelude-ls");

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce ({displayName, fullName}) {
    console.log((`${displayName} is ${fullName}`));
}
introduce (user);
/* output
kren is Kylo Ren
*/

//! Default Parameters
function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentsFormula(2);
/* output
2^undefined = NaN
*/