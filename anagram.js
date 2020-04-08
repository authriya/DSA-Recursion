//10. Anagrams
//input: word with n letters
//output: anagrams of the word
//input recursion: remaining characters
//output recursion: anagram of remaining characters

let anagram = function(word) {
    let anagrams = [];
    if(word.length <= 1) {
        return [word]
    }
    const str = word.split('');
    str.forEach((letter, idx) => {
        let characters = [...str.slice(0, idx), ...str.slice(idx+1)].join('');
        const permutations = anagram(characters);
        permutations.forEach(permutation => {
            anagrams.push(letter + permutation)
        })
    })
    return anagrams
}

console.log(anagram('east'))