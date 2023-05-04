function secretChat(input) {
    let currentMessage = input.shift();
    let result = '';
    let command = input.shift();

    while (command !== 'Reveal') {
        command = command.split(':|:');
        let action = command.shift();
        
        switch (action) {
            case 'InsertSpace':
                let index = Number(command.shift())
                let firstPart = currentMessage.substring(0, index);
                let secPart = currentMessage.substring(index);
                result = firstPart + ' ' + secPart;
                currentMessage = result;
                console.log(currentMessage);
                 break;

            case 'Reverse':
                let partOfString = command.shift();
                let newString = partOfString.split('').reverse().join('')
                if (!currentMessage.includes(partOfString)) {
                    console.log('error')
                } else {
                    let startInd = currentMessage.indexOf(partOfString);
                    let first = currentMessage.substring(0, startInd);
                    let sec = currentMessage.substring(startInd + partOfString.length);
                    result = first + sec + newString;
                    currentMessage = result;
                    console.log(currentMessage);
                }
                 break;

            case 'ChangeAll':
                let old = command.shift();
                let newOne = command.shift();
                currentMessage = currentMessage.replace(old, newOne)
                while (currentMessage.includes(old)) {
                    currentMessage = currentMessage.replace(old, newOne)
                }
                console.log(currentMessage);
                 break;
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${currentMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])