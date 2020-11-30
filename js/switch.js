const darzove = 'bulbe';

switch(darzove) {
    case 'morka':
        console.log('labai gerai akims');
        break;
    case 'bulve':
        console.log('bulvinis');
        break;
    case 'pomidoras':
        console.log('kazkas');
        break;
    default:
        console.log('netatitiko reiksmes');
        break;
}

// Isemus break vykdoma iki sekancio break, prasideda nuo teisingo case


console.log('---------------------------------------')
/* 
KADA switch'e nereikia break'u
*/

const etapas = 'pirmas';

switch(etapas){
    case 'pirmas':
        console.log('1 etapas');
    case 'antras':
        console.log('2 etapas');
    case 'trecias':
        console.log('3 etapas');
//  case 'ketvirtas':.......
    case 'pabaiga':
        console.log('pabaiga');
        break;
}