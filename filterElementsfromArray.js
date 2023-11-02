// Given an integer array arr and a filtering function fn, return a filtered array 
//filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
// evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        // fn function returns true or false
        //check if the fn function accepts how many argument
        if(fn.length == 2) {
            if(fn(arr[i], i)){ 
                newArray.push(arr[i])
            }
        } else {
            if(fn(arr[i])){
                newArray.push(arr[i])
            }
        }
    }
    return newArray;
};