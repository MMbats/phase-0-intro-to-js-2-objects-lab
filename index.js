// 1. Create an employee object with name and streetAddress keys
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 2. updateEmployeeWithKeyAndValue() function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object and update the key with the new value
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Example usage of updateEmployeeWithKeyAndValue
  console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St"));
  // Expected output: { name: "John Doe", streetAddress: "456 Elm St" }
  // Original employee remains unchanged
  
  // 3. destructivelyUpdateEmployeeWithKeyAndValue() function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly
    employee[key] = value;
    return employee;
  }
  
  // Example usage of destructivelyUpdateEmployeeWithKeyAndValue
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Oak St"));
  // Expected output: { name: "John Doe", streetAddress: "789 Oak St" }
  // Original employee is modified
  
  // 4. deleteFromEmployeeByKey() function
  function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to create a new object without the specified key
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Example usage of deleteFromEmployeeByKey
  console.log(deleteFromEmployeeByKey(employee, "name"));
  // Expected output: { streetAddress: "789 Oak St" }
  // Original employee remains unchanged
  
  // 5. destructivelyDeleteFromEmployeeByKey() function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the original employee object
    delete employee[key];
    return employee;
  }
  
  // Example usage of destructivelyDeleteFromEmployeeByKey
  consol
  