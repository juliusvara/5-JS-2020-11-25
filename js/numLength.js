function numLength (num) {
    let length = 0;
    if(typeof num !== 'number') {
        return 'Error: duotas ne skaicius';
    }
    if (isNaN(num)) {
        return 'Error: duotas ne skaicius (NaN)';
    }
    if (!isFinite(num)) {
        return 'Error: duotas ne skaicius (infinite number)';
    }
    if (num % 1 !== 0) {
        const textNumber = '' + num; //arba num.toString();
        length = textNumber.length - 1;
        return length;
    }
    const textNumber = '' + num; //arba num.toString();
    length = textNumber.length;
    return length;
}



console.log( numLength( 5 ), '->',1);	
console.log( numLength( 781 ), '->',3 );
console.log( numLength( 37060123456 ), '->',11 );1
console.log( numLength( true ) );
console.log( numLength( 'asd' ) );	
console.log( numLength( NaN ) );

console.log('--------------------------------');

console.log( numLength( 3.1415 ), '->',5);	



