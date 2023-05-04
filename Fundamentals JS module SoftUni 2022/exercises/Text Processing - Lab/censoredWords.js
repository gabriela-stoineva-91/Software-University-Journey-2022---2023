function censor(sent, word) {
   
    while (sent.includes(word)) {
        sent = sent.replace(word, ('*'.repeat(word.length)))
     }
    console.log(sent)
}