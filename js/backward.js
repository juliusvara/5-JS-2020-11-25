console.log('---------------------------------');


/* 
parasyti zodi is kitos puses
*/

const text = 'Labas!';

let backward = '';

for (let i = text.length -1; i >= 0; i--) {
    const letter = text[i];
    backward += letter;
    console.log(letter, backward);
}


// 

