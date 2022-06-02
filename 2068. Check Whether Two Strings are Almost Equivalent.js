/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const charCode = char => char.charCodeAt()
var checkAlmostEquivalent = function (word1, word2) {
 // find the unique characters between both strings
 // making the strings lowercase will help return a consistent character code later
 // sorting is important to avoid a negative decider
 const uniques = [...new Set([...word1.toLowerCase().split(''), ...word2.toLowerCase().split('')])].sort();
 const decider = uniques.reduce(( previousValue, currentValue, i ) => charCode(uniques[i]) - charCode(uniques[i-1] || uniques[0]), uniques[0]);
 return decider > 3 ? true : false;
};
checkAlmostEquivalent('aaaa', 'bccb') //?
checkAlmostEquivalent('aaaa', 'xbccb') //?
checkAlmostEquivalent('cccddabba', 'babababab') //?