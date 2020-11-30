/* 
Matematinai operatoriai

*/

let pinigine = 0;

console.log(pinigine);

// pinigine = pinigine + 100; //<<-- tas pats kaip apacioje
pinigine += 100;
console.log(pinigine);


console.log('------------------------------');

/*
 ++ padidinti vienu vinetu
 -- sumazinti vienu vienetu

 i++ prideda po to (jei iskart atvaizuojama)
 ++i prideda pries

 PVZ:
 */

console.log(`Pinigu yra ${pinigine++}`);
console.log(`Pinigu yra ${pinigine}`);
console.log(`Pinigu yra ${++pinigine}`);
