// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
const newForEach = function(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}

/* You will create your own versions of the following built-in methods:
some(), every(), find(), findIndex(), map(), and filter().
Make sure to name your functions as follows in order for testing to function properly:
newSome, newEvery, newFind, newFindIndex, newMap, newFilter
Your functions will take two arguments: the array and the callback function.
The built-in functions are called using the dot notation. For example:
array.forEach(callback)
Your functions will not be called with dot notation, but instead they will be called using a simple function call:
newForEach(array, callback)
*/

// ENTER YOUR CODE BELOW HERE:
