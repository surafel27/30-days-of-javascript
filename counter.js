// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var firstTime = true;
    return function() {
        if(firstTime) {
            firstTime = false;
            return n;
        } else {
            n = n + 1;
            return n;
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */