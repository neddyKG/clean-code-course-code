/* Side-effect: A change to the systems state. Be catious with unexpected side effects */
/* Side-effect: This is to be argued cause you could say:
            * No side-effect, cause you have to return an error or not if it was successful.
            * Yes, cause it's connecting and validating. The function name seems like it's going to connect, 
but it returns true false, based on connection result.
*/
// Option 1
// function connectDatabase() { 
//   const didConnect = database.connect();  // Side-effect: expected
//   if (didConnect) {
//     return true;
//   } else {
//     console.log('Could not connect to database!'); // Side-effect: expected
//     return false;
//   }
// }


// Option 2
function initApp() {
  const success = connectDatabase()
  if (!success) {
    console.log('Could not connect to database!')
  }
  // ...
}

function connectDatabase() { 
  const didConnect = database.connect()
  return didConnect 
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function determineSupportAgent(ticket) { // Side-effect: not expected | The function name seems like it only determines support agent (solution: rename getAgentBasedOnRequestType())
  if (ticket.requestType === 'unknown') {
    /* R2 We don't know if these functions have side effects or not, just by looking 
    at the func names, we would have to look at the implementation, 
    if they make an HTTP request, access DB, etc. they indeed would have side-effects.
    */
    return findStandardAgent();  
  }
  // R2 "" 
  return findAgentByRequestType(ticket.requestType); 
}

// R3 Wrong - Not that clean, it's not a pure function
function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    /* Side-effect: unexpected, since the function is not only validating (returning true or false), 
    but also logging, so it's doing more than whats expected.
    */
    console.log('Invalid input!');   
    return false;
  }
  return true;
}

// R3 Solution
function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log('Invalid input!');   
  }
  // ...
}

// Now it's a pure function, because it'll return the same response values (true or false)
function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}