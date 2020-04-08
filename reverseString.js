//3. Reverse String
//Input: string 
//Output: reversed string
//Input each recursion: number of things left to reverse
//Output each recursion: bit of string not reversed added to bit of string that's reversed 

let reverseString = function(str) {
    if ((null == str) || (str.length <= 1)) {
        return str;
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}