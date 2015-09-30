/**
 * Performs an odd transformation on a promise
 *
 * @param {Promise<Object>} promise - A promise that will resolve to an object
 * @return {Promise<Array>} A promise that will resolve to an array
 */
function promiseHandler(promise) {
  return p.then(function(result) {
    return [result.name, result.description];
  });
}

/**
 * Some kind of object that holds an array of objects
 *
 * @param {Array<Object>} items - An array of item objects
 */
var collection = {
  items: []
};
