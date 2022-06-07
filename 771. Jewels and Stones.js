/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    stones = stones.split('')
    const hash = {}
    for (let i = 0; i <= jewels.length - 1; i++) {
        let noItems = stones.filter(item => item === jewels[i]).length
        hash.hasOwnProperty(jewels[i])
            ? hash[jewels[i]] += noItems
            : hash[jewels[i]] = noItems
    }
    return Object.values(hash).reduce((p, c) => p + c)
};
numJewelsInStones('aA', 'aAAbbbb')