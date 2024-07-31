// Function to return the square of a number using async
const square = async function (n) {
  return n * n;
};

// Using await to get the value from the promise returned by the async function
const getSquareValue = async () => {
  const value = await square(2);
  console.log(value); // 4
};

getSquareValue();

// Example of fetching API data using both promise method and async/await method

const url = 'https://restcountries.com/v2/all';

// Fetching data using promise method
fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log('===== promise method =====');
      console.log(data);
  })
  .catch(error => console.error(error));

// Fetching data using async/await method
const fetchData = async () => {
  try {
      const response = await fetch(url);
      const countries = await response.json();
      console.log('===== async and await =====');
      console.log(countries);
  } catch (err) {
      console.error(err);
  }
};

fetchData();
