function wordsTracker(input) {
    let searchWords = input.shift().split(' ');
    let obj = {};

    for (const word of searchWords) {
        obj[word] = 0;
    }
    input.forEach(currentWord => {
        if (obj.hasOwnProperty(currentWord)) {
            obj[currentWord]++
        }
    });
    let sortedPrint = Object.entries(obj).sort((a,b) => b[1] - a[1])
    sortedPrint.forEach(word =>{
        console.log(`${word[0]} - ${word[1]}`)
    })
    
}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])