function modernTimesOfHashTag(sent) {

    let arrOfSentWords = sent.split(' ');

    for (let word of arrOfSentWords) {
        if (word[0] === '#') {
            if (word.length > 1) {
                let isHash = true
                for (let i = 1; i < word.length; i++) {
                    let code = word[i].charCodeAt();
                    //console.log(code)
                    if (!((code >= 97 && code <= 122) || (code >= 65 && code <= 90))) {
                        isHash = false
                    }
                }
                if (isHash) {
                    console.log(word.substring(1))
                }
            }

        }


    }
}