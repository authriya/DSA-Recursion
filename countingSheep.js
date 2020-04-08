//1. Counting Sheep
//Input: number of sheep you have 
//Output: sheep you have left that have not jumped the fence
//Input to each recursion: new sheep after jumped
//Output to each recursion: "${Sheep before jumping}: Another one jumps the fence"

const countingSheep = function(sheep) {
    if (sheep === 0) {
        return "All sheep are over the fence"
    }
    console.log(`${sheep}: Another sheep jumps over the fence`)
    newSheep = sheep - 1
    countingSheep(newSheep)
}