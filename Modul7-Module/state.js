const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const isCoffeeMachineReady = true;
// Solusinya export adalah kita tetap mengekspor satu nilai, tetapi kita akan memanfaatkan object literals ({ }).
module.exports = {coffeeStock, isCoffeeMachineReady};

console.log(module);