function pascalCaseSplitter(textToSplit) {
    let copyText = textToSplit.toLowerCase();
   
    let result = textToSplit[0];

    for (let i = 1; i < textToSplit.length; i++) {
        if (copyText[i] !== textToSplit[i]) {
           result += ', ';
        }
        result += textToSplit[i];
    }
    console.log(result);

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')