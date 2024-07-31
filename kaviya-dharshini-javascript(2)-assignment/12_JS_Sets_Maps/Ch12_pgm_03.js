const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] }
  ];
  
  const countLanguages = (countries) => {
    const languageCount = {};
  
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    return languageCount;
  };
  
  const languageCount = countLanguages(countries);
  console.log("Number of languages:", Object.keys(languageCount).length);

  
  const mostSpokenLanguages = (countries, limit) => {
    const languageCount = countLanguages(countries);
  
    // Convert languageCount to an array of objects for easier sorting
    const languageArray = Object.keys(languageCount).map(language => ({
      [language]: languageCount[language]
    }));
  
    // Sort languages based on count in descending order
    languageArray.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
  
    // Return the top `limit` languages
    return languageArray.slice(0, limit);
  };
  
  // Example usage
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  