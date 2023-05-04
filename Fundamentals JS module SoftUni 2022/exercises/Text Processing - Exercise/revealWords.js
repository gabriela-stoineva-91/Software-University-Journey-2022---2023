function revealWords(words, sent) {
    let wordsArr = words.split(', ');
    
    for (let word of wordsArr) {
        let searchWord = '*'.repeat(word.length);
        
         if (sent.includes(searchWord)) {
             sent = sent.replace(searchWord, word)
         }
    }
    console.log(sent)
}