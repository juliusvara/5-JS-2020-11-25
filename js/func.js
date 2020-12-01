// function func(pirmasSkaicius, antrasSkaicius) {
//     return pirmasSkaicius * antrasSkaicius;
// }

// const skaicius1 = 4;
// const skaicius2 = 8;
// const skaicius3 = -5;

// console.log(func(skaicius1, skaicius3));

function litres(time) {
    let a =0;
    let b =0;
    a = time * 0.5;
    b = a % 1;
    a = a-b;
    return a; 
  }
   let c = 6.7;
   console.log(litres(c));