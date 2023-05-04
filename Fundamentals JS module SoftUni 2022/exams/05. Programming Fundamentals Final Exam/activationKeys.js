function activationKey(input) {
    let rawActivationKey = input.shift();
    let command = input.shift();
    while (command !== 'Generate') {
        command = command.split('>>>');
        let action = command.shift();
        switch (action) {
            case 'Contains':
                let searchSubstring = command.shift();
                if (rawActivationKey.includes(searchSubstring)) {
                    console.log(`${rawActivationKey} contains ${searchSubstring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip':
                let [type, start, end] = command;
                let rawSubstring = rawActivationKey.substring(Number(start), Number(end));
                let newStr = '';
                switch (type) {
                    case 'Upper':
                        newStr = rawSubstring.toUpperCase();
                        break;
                    case 'Lower':
                        newStr = rawSubstring.toLowerCase();
                        break;
                }
                rawActivationKey = rawActivationKey.replace(rawSubstring, newStr);
                console.log(rawActivationKey)
                break;

            case 'Slice':
                let [first, second] = command;
                let firstPart = rawActivationKey.substring(0, Number(first));
                let secPart = rawActivationKey.substring(second);
                rawActivationKey = firstPart + secPart;
                console.log(rawActivationKey)
                break;

        }


        command = input.shift();
    }
    console.log(`Your activation key is: ${rawActivationKey}`)
}