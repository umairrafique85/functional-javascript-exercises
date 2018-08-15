

// Fuck. 
/* made function that uses recursion to achieve the task, all conditions fulfilled, but the fucking conditions */
/*
let wordCounter = function(tarArray) {
    firstWord = tarArray.shift();
    countObj[firstWord] ? countObj[firstWord] += 1 : countObj[firstWord] = 1;
    if (tarArray.length > 0) {
        wordCounter(tarArray);
    }
    return countObj;
}
*/

function reduce(arr, fn, initial) {
	firstWord = arr.shift();
	initial[firstWord] ? initial[firstWord] += 1 : initial[firstWord] =1;
	if (arr.length >0) {
		reduce(arr);
	}
	return initial;     
}
module.exports = reduce
