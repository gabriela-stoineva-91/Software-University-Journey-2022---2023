function addAndRemoveElements(commandsArr) {

    let result = [];

    for (let i = 0; i < commandsArr.length; i++) {
        let current = commandsArr[i];
        if (current === 'add') {
            result.push(i + 1);
        } else if (current === 'remove') {
            result.pop();
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}