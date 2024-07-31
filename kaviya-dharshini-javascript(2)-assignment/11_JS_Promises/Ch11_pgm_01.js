// Function that performs an asynchronous operation and accepts a callback
const doSomething = (callback) => {
  // Simulate a delay using setTimeout
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']; // Result of the asynchronous operation
    callback('It did not go well', skills); // Call the callback with an error and the result
  }, 2000);
};

// Callback function to handle the result of the asynchronous operation
const callback = (err, result) => {
  if (err) {
    return console.log(err); // If there is an error, log it
  }
  return console.log(result); // Otherwise, log the result
};

// Call the doSomething function with the callback
doSomething(callback);

// After 2 seconds, it will print:
// It did not go well
