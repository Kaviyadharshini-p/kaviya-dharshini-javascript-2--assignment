// Function that performs an asynchronous operation and accepts a callback
const doSomething = callback => {
  // Simulate a delay using setTimeout
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']; // Result of the asynchronous operation
    callback(false, skills); // Call the callback with no error (false) and the result
  }, 2000);
};

// Call the doSomething function with an anonymous callback function
doSomething((err, result) => {
  if (err) {
    return console.log(err); // If there is an error, log it
  }
  return console.log(result); // Otherwise, log the result
});

// After 2 seconds it will print the skills array:
// ["HTML", "CSS", "JS"]
