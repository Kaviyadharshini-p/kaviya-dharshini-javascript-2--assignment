// Define your information
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const country = 'United States';
const city = 'New York';

// Store in localStorage
localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

console.log('Level 1 data stored in localStorage.');


// Define the student object
const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Canada',
    enrolled: {
      '30DaysOfJavaScript': true,
      '30DaysOfPython': false,
      '30DaysOfReact': true
    }
  };
  
  // Convert student object to JSON string
  const studentJSON = JSON.stringify(student);
  
  // Store in localStorage
  localStorage.setItem('student', studentJSON);
  
  console.log('Level 2 student object stored in localStorage.');
  

  // Define the personAccount object
const personAccount = {
    firstName: 'Alice',
    lastName: 'Johnson',
    incomes: {
      salary: 50000,
      freelance: 2000
    },
    expenses: {
      rent: 1200,
      groceries: 300,
      entertainment: 100
    },
    totalIncome: function() {
      let total = 0;
      for (const income in this.incomes) {
        total += this.incomes[income];
      }
      return total;
    },
    totalExpense: function() {
      let total = 0;
      for (const expense in this.expenses) {
        total += this.expenses[expense];
      }
      return total;
    },
    accountInfo: function() {
      return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
    },
    addIncome: function(description, amount) {
      this.incomes[description] = amount;
    },
    addExpense: function(description, amount) {
      this.expenses[description] = amount;
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Convert personAccount object to JSON string
  const personAccountJSON = JSON.stringify(personAccount);
  
  // Store in localStorage
  localStorage.setItem('personAccount', personAccountJSON);
  
  console.log('Level 3 personAccount object stored in localStorage.');
  