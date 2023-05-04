function stringManipulation(input) {
    let str = input.shift();
    let command = input.shift();

    while (command !== 'End') {
        command = command.split(' ');
        let action = command.shift();
        switch (action) {
            case 'Translate':
                let [char, replacement] = command;
                if (str.includes(char)) {
                    while (str.includes(char)) {
                        str = str.replace(char, replacement);
                    }  
                }
                console.log(str);
                break;

            case 'Includes':
                let substr = command.shift();
                if (str.includes(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Start':
                let substr2 = command.shift();
                if (str.startsWith(substr2)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Lowercase':
                let stringToLower = str.toLowerCase();
                str = stringToLower;
                console.log(str);
                break;

            case 'FindIndex':
                let charToFind = command.shift();
                if (str.includes(charToFind)) {
                    let index = str.lastIndexOf(charToFind);
                    console.log(index);
                }
                break;
            case 'Remove':
                let [ind, length1] = command;
                let toRemove = str.substring(ind, Number(ind) + Number(length1));
                str = str.replace(toRemove, '');
                console.log(str);
                break;
        }
        //console.log(action)
        command = input.shift();
    }

}
stringManipulation((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"]))