const names = ['a', 'b', 'c'];

const james = names;

james.push('d')

console.log(james);
console.log(names);
console.log(names === names); // true

const ar1 = ['a'];
const ar2 = ['a'];
console.log(ar1 === ar2); // false