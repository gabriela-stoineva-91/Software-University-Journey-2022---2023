function countStringOccurrences(sent, word) {
    let text = sent.split(' ');
    let textFiltered = text.filter(w => w === word );
    console.log(textFiltered.length)
}