/* 
Arrow function
*/
console.log('-----------------------------------');

// Iprastine funkcija
function sum(a,b){
    return a+b;
}
console.log(sum(88,99));

// kintamajam priskirta anonimine funkcija
const atimtis = function(a,b) {
    return a - b;
}

console.log(atimtis(14,5));

//arrow function - rodykline funkcija 
const dalyba = (a,b) => {
    return a / b;
}

console.log(dalyba(81,3));

// arrow function - jei logika sudaryti tik is vienos proceduros, tuomet nereik skliaustu ir return'o

const daugyba = (a,b) =>  a * b;

console.log(daugyba(81,3));

// Jei yra tik vienas gaunamas parametras

const kvadratu1 = a => a * a;


console.log(kvadratu1(10));