function imitationGame(input) {
    let str = input.shift()//.split('');
    let result = str;

    let command = input.shift();

    while (command !== 'Decode') {
        command = command.split('|');

        let action = command[0];
        switch (action) {
            case 'Move':
                let count = command[1];
                let newLast = result.substring(0, count);
                let newFirst = result.substring(count);
                result = newFirst + newLast;
                break;

            case 'Insert':
                let index = Number(command[1]);
                let value = command[2];
                let first = result.substring(0, index);
                let sec = result.substring(index);
                result = first + value + sec;
                break;

            case 'ChangeAll':
                let current = command[1];
                let newStr = command[2];

                while (result.includes(current)) {
                    result = result.replace(current, newStr);
                }

        }

        command = input.shift();

    }
    console.log(`The decrypted message is: ${result}`)

}