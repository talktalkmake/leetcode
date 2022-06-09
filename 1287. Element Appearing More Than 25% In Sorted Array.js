/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const quarter = arr.length / 4
    for (let i = 0; i <= arr.length; i++) {
        if (arr.filter(item => item === arr[i]).length > quarter)
            return arr[i]
    }
};