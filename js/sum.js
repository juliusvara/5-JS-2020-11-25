/* 
suskaiciuoti skaiciu suma intervale
*/
 console.log('--------------------------------------')

const nuo = 2;
const iki = 5;

let suma1 = 0;

for (let i = nuo; i <= iki; i++) {
    suma1 += i;
    console.log(i, '=>', suma1);
}