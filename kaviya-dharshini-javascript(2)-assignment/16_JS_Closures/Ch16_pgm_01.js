// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.

// Closure with one inner function
function createClosure() {
    let outerVar = "I'm in the outer scope";

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

const innerFn = createClosure();
innerFn(); // Output: I'm in the outer scope

// Closure with three inner functions
function createClosure() {
    let outerVar = "I'm in the outer scope";

    function innerFunction1() {
        console.log(outerVar);
    }

    function innerFunction2() {
        console.log("This is inner function 2");
    }

    function innerFunction3() {
        console.log("This is inner function 3");
    }

    return {
        innerFn1: innerFunction1,
        innerFn2: innerFunction2,
        innerFn3: innerFunction3
    };
}

const closures = createClosure();
closures.innerFn1(); // Output: I'm in the outer scope
closures.innerFn2(); // Output: This is inner function 2
closures.innerFn3(); // Output: This is inner function 3


// personAccount function with closures for managing income and expenses
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nAccount Balance: ${totalIncome() - totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

// Example usage:
const myAccount = personAccount('John', 'Doe');
myAccount.addIncome(2000, 'Salary');
myAccount.addExpense(500, 'Rent');
myAccount.addExpense(300, 'Groceries');
console.log(myAccount.accountInfo()); // Output account information
console.log(myAccount.accountBalance()); // Output account balance
