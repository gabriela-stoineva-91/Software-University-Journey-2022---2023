function heartDelivery(array) {

    let heartsNeeded = array.shift()
        .split('@')
        .map(Number);

    let i = 0;
    let command = array[i];
    i++;
    let isSuccessfulCount = true;
    let index = 0;

    while (command !== 'Love!') {
        let currentCommand = command.split(' ');
        index += Number(currentCommand[1]);

        if (index > heartsNeeded.length - 1) {
            index = 0
        }
        let value = heartsNeeded[index];
        
        if (heartsNeeded[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`)

        } else {
            
            heartsNeeded.splice(index, 1, (value - 2));
            if (heartsNeeded[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }

        }
        command = array[i];
        i++;
    }
    console.log(`Cupid's last position was ${index}.`)

    let count = 0;
    for (let el of heartsNeeded) {
        if (el !== 0) {
            isSuccessfulCount = false;
            count++
        }
    }

    if (isSuccessfulCount) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${count} places.`)
    }

}
heartDelivery((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]))