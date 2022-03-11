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
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentsFormula(3);
/* output
3^2 = 9
*/