const numbers = [3, 5, 7 ,9 ,4];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers [i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// numbers.map(function(element, index, array){
//     console.log(element,index, array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })
// or
     
     // array element double kora
const result2 = numbers.map(x => x * x);
console.log(result2);

     // element filter        // arrow function
const result = numbers.filter(x => x < 5);
console.log(result);
    
    // element find
const isThere = numbers.find(x => x > 5 );
console.log(isThere);