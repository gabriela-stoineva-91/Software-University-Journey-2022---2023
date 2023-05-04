function mirrorWord2(input) {
    let text = input.toString();
    let pattern = /(@|#)(?<word1>[A-Za-z]{3,})\1\1(?<sec>[A-Za-z]{3,})\1/g;
    let allMatches = text.matchAll(pattern);
    let arr = Array.from(allMatches);
    let mirrorWordsToPrint = [];

    if (arr.length < 1) {
        console.log('No word pairs found!')
    } else {
        console.log(`${arr.length} word pairs found!`);
        allMatches = text.matchAll(pattern);
        for (let match of allMatches) {
            let current = match.groups.word1;
            let second = match.groups.sec;
            let revSec = second.split('').reverse().join('');
            if (current === revSec) {
                mirrorWordsToPrint.push(current + ' <=> ' + second)
            }
        }
    }
    if (mirrorWordsToPrint.length < 1) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${mirrorWordsToPrint.join(', ')}`);  
    }  
}
mirrorWord2([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])