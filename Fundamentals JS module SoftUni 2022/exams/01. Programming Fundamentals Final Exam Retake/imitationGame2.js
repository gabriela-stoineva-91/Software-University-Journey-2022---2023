function imitationGame(input) {
    let message = input.shift();

    let command = input.shift();
    while (command !== 'Decode') {
        command = command.split('|');
        let action = command.shift();
        switch (action) {
            case 'Move':
                let numberOfLetters = Number(command.shift());
                let first = message.substring(0,numberOfLetters);
                let sec = message.substring(numberOfLetters);
                message = sec + first;
                break;

            case 'Insert':
                let index = Number(command.shift());
                let newPart = command.shift();
                let lastPart = message.substring(index);
                let firstPart = message.substring(0, index);
                message = firstPart + newPart + lastPart;
                break;

            case 'ChangeAll':
                let subs = command.shift();
                let replacement = command.shift();
                while (message.includes(subs)) {
                    message = message.replace(subs, replacement);
                }
                break;
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`)
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])