//7. factorial
//input: a number
//output: n*n-1*n-2 etc....
//input recursive: n-1
//output recursive: that n multiplying other ns

let factorial = function(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}