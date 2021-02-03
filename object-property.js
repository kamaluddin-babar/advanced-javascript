const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
    {id: 81, name: 'PoriMoni'}
];

// students.map(function (element) {
//     console.log(element.name);
// })
const names = students.map(s => s.name);
const ids = students.map(std => std.id);

console.log(names);
console.log(ids);

const biggerId = students.filter(s => s.id > 50);
console.log(biggerId);

const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);