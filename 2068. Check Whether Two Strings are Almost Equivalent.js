/*
    Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
    Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.
    The frequency of a letter x is the number of times it occurs in the string.
*/
/**
* @param {string} word1
* @param {string} word2
* @return {boolean}
*/
const count = (needle, haystack) => haystack.filter(item => item === needle).length
var checkAlmostEquivalent = function (word1, word2) {
    // make a unique set of letters
    const firstWord = word1.split('');
    const secondWord = word2.split('');
    const uniques = [...new Set([...firstWord, ...secondWord])]
    // loop the letters and check the frequency of occurence in both words
    for( let i = 0; i <= uniques.length; i++ ) {
        const a = count(uniques[i], firstWord);
        const b = count(uniques[i], secondWord);
        // return false if the count is greater than 3
        if (( a - b ) > 3 || ( b - a ) > 3) return false
    }
    return true
};
checkAlmostEquivalent('aaaa', 'bccb') //?
checkAlmostEquivalent("abcdeef", "abaaacc") //? 
checkAlmostEquivalent("cccddabba", "babababab") //? 
checkAlmostEquivalent("zzzyyy", "iiiiii") //? 

// const charCode = char => char.charCodeAt()
// var checkAlmostEquivalent2 = function (word1, word2) {
//  // find the unique characters between both strings
//  // making the strings lowercase will help return a consistent character code later
//  // sorting is important to avoid a negative decider
//  const uniques = [...new Set([...word1.toLowerCase().split(''), ...word2.toLowerCase().split('')])].sort();
//  uniques //?
//  const decider = uniques.reduce(( previousValue, currentValue, i ) => charCode(uniques[i]) - charCode(uniques[i-1] || uniques[0]), uniques[0]);
//  return decider > 3 ? true : false;
// };
