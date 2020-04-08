//12.Binary
//input: a number
//output: a binary
//input recursion: number divided by 2
//output recursion: number remainder divided by 2

let binary = function(number) {
    if(number < 1) {
        return ''
    } else {
        return binary(number/2) + Math.floor(number % 2)
    }
}