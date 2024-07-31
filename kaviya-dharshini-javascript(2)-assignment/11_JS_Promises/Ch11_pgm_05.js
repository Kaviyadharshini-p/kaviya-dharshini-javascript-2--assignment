// Create a new promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']; // Result of the asynchronous operation
      if (skills.includes('Node')) {
        resolve('fullstack developer'); // Resolve the promise if 'Node' is in the skills array
      } else {
        reject('Something wrong has happened'); // Reject the promise if 'Node' is not in the skills array
      }
    }, 2000);
  });
  
  // Handle the promise
  doPromise
    .then(result => {
      console.log(result); // Log the result if the promise is resolved
    })
    .catch(error => console.error(error)); // Log the error if the promise is rejected
  
  // After 2 seconds it will print:
  // Something wrong has happened
  