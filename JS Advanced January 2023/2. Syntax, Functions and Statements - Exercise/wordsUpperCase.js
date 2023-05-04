function wordsUpperCase(string) {
    let pattern = /[A-Za-z0-9]+/g;

    let words = string.match(pattern);
  
    let result = [];
    for (let word of words) {
        word = word.toUpperCase();
        result.push(word)
    }
    console.log(result.join(', '))

}