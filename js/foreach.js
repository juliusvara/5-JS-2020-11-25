/* 
foreach -> per kiekviena

tai yra nebe funkcija, o metodas

nera efektyvus, letas. Naudojamas ant nedideliu sarasu
*/

const skaiciai = [1,2,3,4,5,6];

console.log(skaiciai);

function kvadratu(x){
    const rez = x*x;
    console.log(rez);
    return rez;
}

skaiciai.forEach(kvadratu);

skaiciai.forEach(function(p){
    const kvd = p*p;
    console.log(kvd);
    return kvd;
})

