function pickLetter(text, step) {
    //input validation
    
    if (typeof text !== 'string') {
        return 'Error: pirmas parametras turi but tekstas'
    }
    if (typeof text === ''){
        return 'Error: pirmas parametras negali buti tuscias tekstas'
    }
    if (typeof step !== 'number') {
        return 'Error: step nera skaicius'
    }
    if (step > text.length) {
        return 'Error: nurodytas step negali virsyti teksto ilgio'
    }
    if (step === 0) {
        return 'Error: nurodytas step negali buti 0'
    }
    //logic
    let word = '';
    for (let i = step - 1; i < text.length; i += step) {
        const letter = text[i];
        word += letter;
    }

    // post logic validation
    if (word === '') {
        return 'nutiko kazkas labai keisto, nes si klauda  turejo buti neimanom gauti'
    }

    // return result

    return word;
}


// console.log(pickLetter('abc', false));
// console.log(pickLetter('abc', []));
// console.log(pickLetter(1561, 2 ) );
// console.log(pickLetter('abc', 4 ) );
// console.log(pickLetter('abc', 0 ) );
console.log('----------------------------');



console.log(pickLetter('abcdefg', 2 ),'->', 'bdf');

console.log(pickLetter('abcdefghijkl', 3),'->', 'cfil' );
 






 