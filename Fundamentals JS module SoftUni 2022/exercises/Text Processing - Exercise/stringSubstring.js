function substring(word, text) {
    let textToLower = text.toLowerCase().split(' ');
    for (let w of textToLower) {
        if (w === word.toLowerCase()) {
            return word
        }
    }
    // if (textToLower.includes(word.toLowerCase())) {
    //     return word
    // }
    console.log(`${word} not found!`)
}
substring('javascript',
'JavaScript is the best programming language');
substring('python',
'JavaScript is the best programming language')