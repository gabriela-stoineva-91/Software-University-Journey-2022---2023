function messageTranslate(input) {
    let count = Number(input.shift());
    let pattern = /(!)(?<command>[A-Z][a-z]{2,})\1:\[(?<string1>[A-Za-z]{8,})\]/g;
    let answer;

    for (let i = 0; i < count; i++) {
        let current = input[i];
        answer = pattern.test(current);
        if (answer === false) {
            console.log(`The message is invalid`)
        } else {
            pattern = /(!)(?<command>[A-Z][a-z]{2,})\1:\[(?<string1>[A-Za-z]{8,})\]/g;
            let matchMessage = current.matchAll(pattern);
            for (let match1 of matchMessage) {
                if (match1 !== undefined) {
                    let currentString = match1.groups.string1;
                    let result = '';
                    for (let ch = 0; ch < currentString.length; ch++) {
                        result += ' ' + currentString[ch].charCodeAt();
                    }
                    console.log(`${match1.groups.command}:${result}`)
                }
            }
        }

    }
}
messageTranslate((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]))