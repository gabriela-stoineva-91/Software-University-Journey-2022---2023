function shootForTheWin(array) {

    let targets = array.shift()
        .split(' ')
        .map(Number);

    let i = 0;
    let command = array[i];
    i++;

    let shootTargetCount = 0;

    while (command !== 'End') {
        let currentIndex = Number(command);
        let valueOfTarget = targets[currentIndex];

        if (currentIndex < 0 || currentIndex > targets.length - 1 || valueOfTarget === -1) {

        } else {

                shootTargetCount++;

            for (let i = 0; i < targets.length; i++) {
                let othersValue = Number(targets[i])
                if (othersValue !== -1) {

                    if (valueOfTarget < othersValue) {
                        targets[i] -= valueOfTarget;
                    } else {
                        targets[i] += valueOfTarget;
                    }
                }
            }

            targets.splice(currentIndex, 1, -1);

        }

        command = array[i];
        i++;
    }
    console.log(`Shot targets: ${shootTargetCount} -> ${targets.join(' ')}`)

}
shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]))