function game(array) {

    let arrayOfNumbers = array.shift().split(' ');

    let i = 0;
    let command = array[i];
    i++
    let moveCount = 0;
    let isWin = false;
    while (command !== 'end') {

        let currentCommand = command.split(' ');
        moveCount++


        let firstInd = Number(currentCommand[0]);
        let secondInd = Number(currentCommand[1]);

        if ((secondInd === firstInd) || (arrayOfNumbers[firstInd] === undefined) || (arrayOfNumbers[secondInd] === undefined)) {

            arrayOfNumbers.splice(arrayOfNumbers.length / 2, 0, (`-${moveCount}a`));
            arrayOfNumbers.splice(arrayOfNumbers.length / 2, 0, (`-${moveCount}a`));
            console.log("Invalid input! Adding additional elements to the board")
        } else {
            let firstNum = arrayOfNumbers[firstInd];
            let secNum = arrayOfNumbers[secondInd];

            if (firstNum == secNum) {
                if (secondInd > firstInd) {
                    arrayOfNumbers.splice(secondInd, 1)
                    arrayOfNumbers.splice(firstInd, 1)
                } else {

                    arrayOfNumbers.splice(firstInd, 1)
                    arrayOfNumbers.splice(secondInd, 1)

                }
                console.log(`Congrats! You have found matching elements - ${firstNum}!`)
                //continue;

            } else if (firstNum !== secNum) {
                console.log("Try again!")
            }
        }
        if (arrayOfNumbers.length < 2) {
            isWin = true
            console.log(`You have won in ${moveCount} turns!`);
            break;
        }

        command = array[i];
        i++

    }
    if (!isWin) {
        console.log(`Sorry you lose :(
${arrayOfNumbers.join(' ')}`)
    }

}