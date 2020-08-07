const student = [
    {id: 34, name: 'Arif'},
    {id: 14, name: 'manna'},
    {id: 24, name: 'dipjol'},
    {id: 54, name: 'sakib'},

];
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student [i];
//     const name = element.name;
//     output.push(name);
// }
// console.log(output);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);

const bigger = student.filter(s => s.id > 20);

const biggerOne = student.find(s => s.id > 20);


console.log(biggerOne);