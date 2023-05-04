function chatLogger(array) {

    let newArray = [];

    let command = array.shift();
    let index;

    while (command !== 'end') {
        command = command.split(' ');
        let action = command[0];
        let message;
        

        switch (action) {
            case 'Chat':
                message = command[1]
                newArray.push(message)
                break;

            case 'Delete':
                message = command[1]
                for (let j = 0; j < newArray.length; j++) {
                    if (message === newArray[j]) {
                        index = j
                        newArray.splice(index, 1)
                    }
                }
                break;

            case 'Edit':
                message = command[1]
                let newEl = command[2]
               
                for (let j = 0; j < newArray.length; j++) {
                    if (message == newArray[j]) {
                        index = j
                        newArray.splice(index, 1, newEl);
                    } 
                }
                break;

            case 'Pin':
                message = command[1]
                for (let j = 0; j < newArray.length; j++) {
                    if (message === newArray[j]) {
                        index = j
                        let add = newArray.slice(index, index + 1);
                        newArray.push(add)
                        newArray.splice(index, 1)
                    }
                }
                    break;

            case 'Spam':
                for (let i = 1; i < command.length; i++) {
                    message = command[i]
                    newArray.push(message)
                }
                
                break;
        }

        command = array.shift();
    }
    console.log(newArray.join('\n'))

}
chatLogger((["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]))