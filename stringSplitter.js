//5. String splitter
//Input: string
//Output: Array with split string by separator
//input each recursion: string minus the character we just evaluated
//output each recursion: either the function (if the character was the separator) or the character and the recursive function

let stringSplitter = function(string, sep) {
    if (string.length === 0) {
        return ""
    } else if (string[0] === sep){
        return stringSplitter(string.slice(1), sep)
    } else {
        return string[0] + stringSplitter(string.slice(1), sep)
    }
}