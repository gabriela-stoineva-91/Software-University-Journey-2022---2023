function arrayManipulations(input) {

    let currentArray = input
        .shift()
        .split(' ')
        .map(Number)


    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let removedIndex;
        if (command[0] === 'Add') {
            currentArray.push(Number(command[1]))
        }
        if (command[0] === 'Remove') {
            currentArray = currentArray.filter(el => el !== (Number(command[1])));

        }
        if (command[0] === 'RemoveAt') {
            removedIndex = command[1];
            currentArray.splice(removedIndex, 1)
        }
        if (command[0] === 'Insert') {
            removedIndex = command[2];
            let addNum = Number(command[1]);
            currentArray.splice(removedIndex, 0, addNum)
        }

    }
    console.log(currentArray.join(' '))
}
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])