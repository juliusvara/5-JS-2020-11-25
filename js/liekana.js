/* 
suskaiciuoti, kiek intervale skaiciu dalijasi be liekanos
*/

const nuo1 = 0;
const iki1 = 11;
const daliklis = 3;

let kiekis = 0;

// logic

for (let i = nuo1; i <= iki1; i++){
    if(i % daliklis === 0){
        kiekis++;
    }
    
}

console.log(`tarp ${nuo1} ir ${iki1}  besidalinanciu is ${daliklis} yra ${kiekis} skaiciai`);