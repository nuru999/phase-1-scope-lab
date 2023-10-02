// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    if (customerName) {
      customerName = customerName.toUpperCase();
    }
  }
  
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
 
  const leastFavoriteCustomer = 'someone';

  function changeLeastFavoriteCustomer() {
    // Attempting to change the constant will result in an error
    leastFavoriteCustomer = 'new least favorite'; // This line will throw an error
  }
  