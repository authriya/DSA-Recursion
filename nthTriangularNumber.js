//4. nth Triangular Number
//1. input: n
//2. output: nth number in sequence
//3. recursive input: n - 1 until n is 0
//4. recursive output: sum of n up until that point

let nthNumber = function(n) {
    if (n === 0) {
        return 0
    }
    return n + nthNumber(n-1)
}