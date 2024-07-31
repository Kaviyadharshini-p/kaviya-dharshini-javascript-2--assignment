const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    let totalWeight = 0;
    let count = 0;

    cats.forEach(cat => {
      const weight = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weight[0] + weight[1]) / 2;
      totalWeight += averageWeight;
      count++;
    });

    const averageWeight = totalWeight / count;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
  } catch (err) {
    console.error(err);
  }
};

fetchAverageCatWeight();

const countriesAPI = 'https://restcountries.com/v2/all';

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
    console.error(err);
  }
};

fetchLargestCountries();

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
      console.error(err);
    }
  };
  
  fetchTotalLanguages();
  
