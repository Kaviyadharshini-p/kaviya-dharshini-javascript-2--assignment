class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    // Method to display basic information about the animal
    animalInfo() {
      return `${this.name} is ${this.age} years old, has ${this.color} fur, and ${this.legs} legs.`;
    }
  }
  
  // Test the Animal class
  const lion = new Animal('Simba', 5, 'golden', 4);
  console.log(lion.animalInfo()); // Simba is 5 years old, has golden fur, and 4 legs.
  
  class Dog extends Animal {
    constructor(name, age, color) {
      super(name, age, color, 4); // Dogs typically have 4 legs
    }
  
    // Override the animalInfo method
    animalInfo() {
      return `${this.name} is a dog who is ${this.age} years old, has ${this.color} fur, and has ${this.legs} legs.`;
    }
  
    // Method to bark
    bark() {
      return `${this.name} barks Woof Woof!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age, color, 4); // Cats typically have 4 legs
    }
  
    // Override the animalInfo method
    animalInfo() {
      return `${this.name} is a cat who is ${this.age} years old, has ${this.color} fur, and has ${this.legs} legs.`;
    }
  
    // Method to meow
    meow() {
      return `${this.name} meows Meow Meow!`;
    }
  }
  
  // Test the Dog and Cat classes
  const dog = new Dog('Buddy', 3, 'brown');
  console.log(dog.animalInfo()); // Buddy is a dog who is 3 years old, has brown fur, and has 4 legs.
  console.log(dog.bark()); // Buddy barks Woof Woof!
  
  const cat = new Cat('Whiskers', 2, 'gray');
  console.log(cat.animalInfo()); // Whiskers is a cat who is 2 years old, has gray fur, and has 4 legs.
  console.log(cat.meow()); // Whiskers meows Meow Meow!
  
  class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, curr) => acc + curr, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      if (sortedData.length % 2 === 0) {
        return (sortedData[mid - 1] + sortedData[mid]) / 2;
      } else {
        return sortedData[mid];
      }
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
      });
  
      let mode = [];
      let maxFreq = 0;
      for (const num in frequency) {
        if (frequency[num] > maxFreq) {
          mode = [num];
          maxFreq = frequency[num];
        } else if (frequency[num] === maxFreq) {
          mode.push(num);
        }
      }
  
      return { mode: mode.map(Number), count: maxFreq };
    }
  
    var() {
      const mean = this.mean();
      const squaredDiffs = this.data.map(num => (num - mean) ** 2);
      return this.sumArray(squaredDiffs) / this.data.length;
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
      });
  
      return Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .map(([num, freq]) => [freq, parseInt(num)]);
    }
  
    sumArray(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  // Test the Statistics class with the ages data
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 29.76
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // { mode: [26], count: 5 }
  console.log('Variance: ', statistics.var()); // 17.92
  console.log('Standard Deviation: ', statistics.std()); // 4.233
  console.log('Frequency Distribution: ', statistics.freqDist()); // [ [ 5, 26 ], [ 4, 27 ], [ 4, 32 ], [ 4, 37 ], [ 3, 31 ], [ 3, 24 ], [ 3, 33 ], [ 2, 25 ], [ 2, 38 ], [ 1, 34 ], [ 1, 29 ] ]
  