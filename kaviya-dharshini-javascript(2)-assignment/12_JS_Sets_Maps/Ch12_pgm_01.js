const emptySet = new Set();
console.log(emptySet); // Set {}
  
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet); // Set { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }


numberSet.delete(5); // Removes the element 5 from the set
console.log(numberSet); // Set { 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 }

numberSet.clear();
console.log(numberSet); // Set {}


const stringSet = new Set();
countries.forEach(country => {
  stringSet.add(country);
});
console.log(stringSet); // Set { 'Finland', 'Sweden', 'Norway' }
