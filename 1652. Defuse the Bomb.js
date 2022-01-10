var decrypt = function(code, k) {
    // If k === 0, return quickly to satify that condition
    if ( k === 0 ) 
        return new Array(code.length).fill(0)

    const length = code.length;

    // Iterate the given $code to produce a single value per $num
    return code.map((num, index) => {
        
        return [...Array(Math.abs(k))].reduce((previousValue, currentValue, currentIndex) => {
            // calculate the $next pointer based on the $index (0 in this case) 
            let next = index + (
                // to cater for $k's less than one
                k > 0
                    // either we add the $index plus one (to account for arrays being zero indexed)
                    ? currentIndex + 1
                    // or we invert the result 
                    : -(currentIndex + 1)
            )

            // now we have the position of the $next pointer
            // we need to check it's within the bounds of $length
            // adding the $length to $next will provide the correct index for negative $nexts
            if (next < 0) next += length;
            // in the case we're out of bounds (greater than the $length), we subtract the $length from $next
            if (next >= length) next -= length;
            // we then return the previousValue added to the $code[$next] value
            // because we've used Array.reduce, the return value to line 10 is an integer; a sum of the $nexts
            return previousValue + code[next];
            // don't forget to provide a starting previousValue
        }, 0)

	});
};