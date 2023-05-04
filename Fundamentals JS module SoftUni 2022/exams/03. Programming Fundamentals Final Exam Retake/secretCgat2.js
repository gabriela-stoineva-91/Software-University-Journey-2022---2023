function secretChat2(input) {
    let message = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {
        command = command.split(':|:');
        let action = command.shift();
        switch (action) {
            case 'InsertSpace':
                let index = Number(command.shift());
                let first = message.substring(0, index);
                let end = message.substring(index);
                message = first + ' ' + end;
                console.log(message);
                break;

            case 'Reverse':
                let newString = command.shift();
                let reversedStr = newString.split('').reverse().join('');
                if (message.includes(newString)) {
                    message = message.replace(newString, '');
                    message = message + reversedStr;
                    console.log(message);
                } else {
                    console.log('error')
                }
                break;

            case 'ChangeAll':
                let [old, newOne] = command;
                if (message.includes(old)) {
                    while (message.includes(old)) {
                        message = message.replace(old, newOne);
                    }
                }
                console.log(message);
                break;
        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`)

}
secretChat2([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])