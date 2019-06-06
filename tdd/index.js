/**
 * Sums an array of numbers
 * @param {Array} arr - The array of numbers to sum
 *
 * @returns {number} - The sum of the numbers
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Checks if a number is a multiple of 8
 * @param {number} number - The number to check
 *
 * @returns {boolean} - True if the number is a multiple
 */
function isMultipleOfEight(number) {
  if (number % 8) {
    return false;
  }
  return true;
}

/**
 * Checks if a user is valid
 * @param {Object} user - The user to check
 *
 * @returns {boolean} - True if the User is valid and verified, otherwise false
 */
function isUserValid(user) {
  if (!user) {
    return false;
  }
  if (user.verified) {
    if (user.valid) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * Uses the provided function to greet 'user'
 * @param {function} greetFunction - The function to use
 *
 * @returns {string} - Done if user was greeted, No greeting otherwise
 */
function greeter(greetFunction) {
  if (greetFunction) {
    greetFunction('user');
    return 'Done';
  }
  return 'No greeting';
}

/**
 * Makes a request using request, passing requestParams if present
 * It then sends a response using the data gotten from request.
 *
 * @param {function} request - The function to use for requests
 * @param {function} response - The function to use for the response
 * @param {Object} [requestParams] - The params to send to the request.
 *                                  If not present, uses 'value'
 *
 */
function makeRequest(request, response, requestParams) {
  let data;
  if (requestParams) {
    data = request(requestParams);
  } else {
    data = request('value');
  }
  response(data);
}

module.exports = {
  sum,
  isMultipleOfEight,
  isUserValid,
  greeter,
  makeRequest,
};