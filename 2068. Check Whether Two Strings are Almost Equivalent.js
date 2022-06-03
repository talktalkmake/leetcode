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
var checkAlmostEquivalent = function (word1, word2) {
    const hash = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0}
    for ( let i = 0; i <= word1.length - 1; i++ ){
        hash[word1[i]] += 1
    }
    for ( let i = 0; i <= word2.length - 1; i++ ){
        hash[word2[i]] -= 1
    }
    const letters = Object.keys(hash);
    for ( let i = 0; i <= letters.length - 1; i++ ) {
        if ( hash[letters[i]] > 3 || hash[letters[i]] < -3 ) return false
    }
    return true
};
checkAlmostEquivalent('aaaa', 'bccb')