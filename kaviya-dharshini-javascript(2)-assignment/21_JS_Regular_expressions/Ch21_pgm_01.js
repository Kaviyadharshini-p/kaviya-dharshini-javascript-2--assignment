function is_valid_variable(variableName) {
    // Regular expression to check if the string is a valid JavaScript variable name
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  
    // Test the variableName against the regex
    return regex.test(variableName);
  }
  
  // Test cases
  console.log(is_valid_variable('first_name'));    // True
  console.log(is_valid_variable('first-name'));    // False
  console.log(is_valid_variable('1first_name'));   // False
  console.log(is_valid_variable('firstname'));     // True
  