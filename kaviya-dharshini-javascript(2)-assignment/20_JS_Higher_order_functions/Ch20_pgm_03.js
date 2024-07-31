const countries = require('./data/countries_data');

// Function to sort countries by a given key
const sortCountries = (countries, key) => {
  // Make a copy of the countries array to avoid mutating the original data
  const sortedCountries = [...countries];

  // Sorting based on the key
  sortedCountries.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });

  return sortedCountries;
};

console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Function to find the most spoken languages
const mostSpokenLanguages = (countries, n) => {
    const languageCount = {};
  
    // Count languages across all countries
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    // Convert to array of objects and sort by count in descending order
    const sortedLanguages = Object.entries(languageCount)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count);
  
    // Return only the top 'n' languages
    return sortedLanguages.slice(0, n);
  };
   
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
]

// Function to find the most populated countries
const mostPopulatedCountries = (countries, n) => {
    // Sort countries by population in descending order and return top 'n'
    const sortedCountries = countries.sort((a, b) => b.population - a.population);
  
    // Return only the top 'n' countries with their name and population
    return sortedCountries.slice(0, n).map(country => ({
      country: country.name,
      population: country.population
    }));
  };
console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]



