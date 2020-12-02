/* 

Objektas

*/
const zmogus = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    amzius: 99,
    gimimoMetai: 1921,
    kojuSkaicius: 2,
    rankuSkaicius: 2,
    galvos: 1,
    turiKate: true,
    turiSuni: false,
    gyvenamosiosVietos: [
        {
            miestas: 'Vilnius',
            gatve: 'Gedimino pr.'
        },
        {
            mietas: 'Kaunas',
            gatve: 'Laisves al.'
        },
    ],
    tevai : [
        {
            vardas: 'Onute',
            amzius:50
        },
        {
            vardas: 'Petras',
            amsiu: 55
        }
    ]
}

// Ovjekto iskvietimas
console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['turiKate']);

console.log(zmogus.vardas);
console.log(zmogus.turiKate);


const auto = {
    marke: 'Tesla',
    modelis: '3',
    spalva: 'raudona',
    baterija: '100',
}

console.log(`Mano ${auto.marke} yra ${auto.spalva}`);

// Zmogui priskiriame automobili
//iskvieciame priskirtame objekte duomenis is masyvo

zmogus.automobilis = auto;

console.log(zmogus.automobilis.marke);

console.log(zmogus.tevai[0].vardas);
console.log(zmogus.tevai[1].vardas);

// Sujungiame zmogaus ir automobilio objektius


