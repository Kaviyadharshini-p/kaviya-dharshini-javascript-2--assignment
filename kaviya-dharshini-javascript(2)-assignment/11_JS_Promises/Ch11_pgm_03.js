// Create a new promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']; // Result of the asynchronous operation
    if (skills.length > 0) {
      resolve(skills); // Resolve the promise with the skills array if it's not empty
    } else {
      reject('Something wrong has happened'); // Reject the promise with an error message if the skills array is empty
    }
  }, 2000);
});

// Handle the promise
doPromise
  .then(result => {
    console.log(result); // Log the result if the promise is resolved
  })
  .catch(error => console.log(error)); // Log the error if the promise is rejected

// After 2 seconds it will print:
// ["HTML", "CSS", "JS"]
