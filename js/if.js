/* 
if:
-galimi palyginimo operatoriai > , < , >= , <= , === , !==
-naudotini :  > , < , >= , <= , === , !==, =
-nenaudotini : ==, !=


uzrasymas
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} ........... else if () {}
    if () {} else if () {} ........... else if () {} else {}
*/


const c = 4;
const d = 2;
//ar c yra daugiau uz d

if (c>d) {
    console.log('taip');
}

// if () {} else {}

if (c<d) {
    console.log('c yra maziau uz d');
} 
else {
    console.log('d yra maziau uz c');
}

const duSkaiciai = [6, 612];

if (duSkaiciai[0] > duSkaiciai[1]) {
    console.log('didesnis pirmas');
} else {
    console.log('didesnis antras');
}
console.log('----------------------')

const diena = 'ant'

// else if 

if (diena === 'pir') {
    console.log('Pirmadienis');
} else if (diena === 'ant') {
    console.log('Antradienis')
} else if (diena === 'tre') {
    console.log('Trecaidienis');
}

console.clear();