function tenMostFrequentWords(paragraph, limit = 10) {
    // Remove punctuation marks and convert to lowercase
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  
    // Count frequency of each word using an object
    const wordFrequency = {};
    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    // Convert the object into an array of objects and sort by frequency in descending order
    const sortedWords = Object.keys(wordFrequency).map(word => ({
      word: word,
      count: wordFrequency[word]
    })).sort((a, b) => b.count - a.count);
  
    // Return the top 'limit' number of words
    return sortedWords.slice(0, limit);
  }
  
  // Test the function with the provided paragraph
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  console.log(tenMostFrequentWords(paragraph));
  
  // Test with different limit (e.g., 10)
  console.log(tenMostFrequentWords(paragraph, 10));
  
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}
]


console.log(tenMostFrequentWords(paragraph, 10))

[{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]