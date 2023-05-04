function emojiDetector(text) {
    text = text.toString();
    let patternEm = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let numPattern = /(?<num>[0-9]+)/g;

    let allFindNum = text.match(numPattern);
    let coolFundedDig = '';

    for (let digit of allFindNum) {
        coolFundedDig += digit
    }
    let coolCount = 1;
    for (let plus of coolFundedDig) {
        coolCount *= Number(plus)
    }
    console.log(`Cool threshold: ${coolCount}`)

    let count = text.match(patternEm)
    console.log(`${count.length} emojis found in the text. The cool ones are:`)
    for (let emo of count) {
        let currentCoolCount = 0;
        for (let i = 2; i < emo.length - 2; i++) {
            currentCoolCount += emo[i].charCodeAt();
        }
        if (currentCoolCount >= coolCount) {
            console.log(emo)
        }
    }
}