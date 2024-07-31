const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Using sets for union
const unionSet = new Set([...a, ...b]);
const unionArray = [...unionSet];
console.log("Union of a and b:", unionArray); // [ 4, 5, 8, 9, 3, 7 ]


// Using filter for intersection
const intersectionArray = a.filter(value => b.includes(value));
console.log("Intersection of a and b:", intersectionArray); // [ 4, 5 ]


// Using filter for difference
const differenceArray = a.filter(value => !b.includes(value));
console.log("Difference of a and b:", differenceArray); // [ 8, 9 ]
