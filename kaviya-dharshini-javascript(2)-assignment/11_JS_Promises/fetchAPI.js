const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Task 1: Average Weight of Cats in Metric Units
const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    let totalWeight = 0;
    let count = 0;

    cats.forEach(cat => {
      const weightRange = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weightRange[0] + weightRange[1]) / 2;
      totalWeight += averageWeight;
      count++;
    });

    const averageWeight = totalWeight / count;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
  } catch (err) {
    console.error('Error fetching cat data:', err);
  }
};

// Task 2: Find the 10 Largest Countries by Area
const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const sortedCountries = countries.sort((a, b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10);

    console.log('10 Largest Countries by Area:');
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} km²`);
    });
  } catch (err) {
    console.error('Error fetching country data:', err);
  }
};

// Task 3: Count the Total Number of Official Languages
const fetchTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const languageSet = new Set();

    countries.forEach(country => {
      country.languages.forEach(language => {
        languageSet.add(language.name);
      });
    });

    console.log(`Total number of official languages: ${languageSet.size}`);
  } catch (err) {
    console.error('Error fetching country data:', err);
  }
};

// Call all the functions
fetchAverageCatWeight();
fetchLargestCountries();
fetchTotalLanguages();
