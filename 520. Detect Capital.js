/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if ( word.length < 2 )
        return true
    if ( !isCapitalLetter(word[0]) && isCapitalLetter(word[1]) )
        return false
    for ( let i = 2; i < word.length; i++ ){
        if ( isCapitalLetter(word[i]) !== isCapitalLetter(word[i-1]) )
            return false
    }
    return true
    // uppercase letters are between 65–90
    function isCapitalLetter(letter){
        const charCode = letter.charCodeAt()
        return charCode > 64 && charCode < 91
            ? true
            : false
    }
    return isCapitalLetter(word)
};
