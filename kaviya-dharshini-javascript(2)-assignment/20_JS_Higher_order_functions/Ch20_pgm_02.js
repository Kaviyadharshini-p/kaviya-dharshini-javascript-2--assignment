// Level 2

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const totalPrice = products
  .filter(product => typeof product.price === 'number' && !isNaN(product.price))
  .map(product => product.price)
  .reduce((acc, curr) => acc + curr, 0);

console.log('Total price of products:', totalPrice);

const sumOfPrices = products.reduce((acc, curr) => {
  if (typeof curr.price === 'number' && !isNaN(curr.price)) {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);

console.log('Sum of prices of products:', sumOfPrices);

const categorizeCountries = pattern => {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
};
const letterCountStart = () => {
  const letterCount = {};
  countries.forEach(country => {
    const firstLetter = country[0].toLowerCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });

  return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
};
const getFirstTenCountries = () => countries.slice(0, 10);
const getLastTenCountries = () => countries.slice(-10);
const mostFrequentStartingLetter = () => {
  const letterCount = {};
  countries.forEach(country => {
    const firstLetter = country[0].toLowerCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });

  let mostFrequentLetter = '';
  let maxCount = 0;
  Object.entries(letterCount).forEach(([letter, count]) => {
    if (count > maxCount) {
      mostFrequentLetter = letter;
      maxCount = count;
    }
  });

  return mostFrequentLetter;
};
