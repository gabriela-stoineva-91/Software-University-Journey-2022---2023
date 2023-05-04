function mirrorWords(input) {
    let string = input.toString();
    let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let allMatched = [];
    let delimiter = ' <=> ';
    let result = [];

    let allMatchWords = string.matchAll(pattern);
    for (let match of allMatchWords) {
        allMatched.push(match.groups.word);
        allMatched.push(match.groups.word2);
    }
    for (let i = 0; i < allMatched.length; i++) {
        let current = allMatched[i];
        for (let j = i+1; j < allMatched.length; j++) {
            let second = allMatched[j].split('')
                .reverse()
                .join('');
            if (current === second) {
                result.push(current + delimiter + allMatched[j]);
                i++;
            }
        }
    }

    let pairs = Math.floor(allMatched.length / 2);

    if (allMatched.length < 2) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairs} word pairs found!`);
    }
    if (result.length < 1) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${result.join(', ')}`)
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])