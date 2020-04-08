//6. fibonacci
//Input: n
//output: fibonacci number at n
//input each recursion: a new "n"
//output each recursion: sum of number at n-1 and number at n -2

let fibonacci = function(n) {
    if (n < 2) {
        return 1
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}