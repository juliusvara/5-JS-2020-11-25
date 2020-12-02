/* 
While () {}
"tol-kol" tenkina salyga
*/
let i = 0;

while (i < 5){
    console.log('Labas');
    i++
}

const pazymiai = [5, 10, 8, 7];
let sum = 0;
let pazimysIndex = 0;
const pazymiuKiekis = pazymiai.length;

while (pazimysIndex < pazymiuKiekis) {
    sum += pazymiai[pazimysIndex];
    pazimysIndex++;
}

console.log(sum);



console.log('======================================');

/* 
sumuoti atsitiktini skaiciu, tol kol gausim suma 10
*/

let randomSum = 0;

while(randomSum < 10) {
    randomSum += Math.random();
    console.log(randomSum);
}

