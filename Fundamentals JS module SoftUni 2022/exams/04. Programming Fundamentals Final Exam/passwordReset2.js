function passwordReset(input) {
    let currentString = input.shift();
    let result = '';

    let command = input.shift();

    while (command !== 'Done') {
        command = command.split(' ');
        let action = command.shift();
        switch (action) {
            case 'TakeOdd':
                for (let i = 0; i < currentString.length; i++) {
                    if (i % 2 !== 0) {
                        let char = currentString[i];
                        result += char;
                    }
                }
                currentString = result;
                console.log(result);
                break;

            case 'Cut':
                let index = Number(command.shift());
                let lengthInd = Number(command.shift());
                let first = currentString.substring(index, index + lengthInd);
                //let sec = currentString.substring(index + lengthInd);
                //result = first + sec;
                currentString = currentString.replace(first, '');
                console.log(currentString)
                break;

            case 'Substitute':
                let current = command.shift();
                let toReplaceWithThis = command.shift();

                if (currentString.includes(current)) {
                    while (currentString.includes(current)) {
                        currentString = currentString.replace(current, toReplaceWithThis);
                    }
                    console.log(currentString)
                } else {
                    console.log('Nothing to replace!')
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Your password is: ${currentString}`)
}
