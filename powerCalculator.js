//2. Power Calculator
//Input: 2 parameters, base and exponent integers
//Output: base to the power of the exponent
//Input for each recursion: minusing or adding to the integer
//Output for each recursion: multiplying the base with another base

let powerCalculator = function(base, integer) {
    if(integer === 0) {
        return 1
    } if(integer > 0) {
        return base * powerCalculator(base, integer - 1)
    } else {
        return (1/base) * powerCalculator(base, integer + 1)
    }
}