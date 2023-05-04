function counterStrike(input) {

    let index = 0;
    let startEnergy = Number(input[index]);
    index++;
    let command = input[index];
    let inputLength = input.length;
    let winCounter = 0;
    let sum = 0;

    while((inputLength - 1) > 0) {
        command = input[index];
        index++;

        if (command === "End of battle") {
            diff = Math.abs(startEnergy - sum);
            console.log(`Won battles: ${winCounter}. Energy left: ${startEnergy}`)
            break;
        }
        
        let distance = Number(command);
         
        if (startEnergy >= distance) {
            winCounter++;
            startEnergy -= distance;
            sum += distance;
            if (winCounter % 3 === 0) {
                startEnergy += winCounter
            }
        } else {
            if (startEnergy < 0) {
                startEnergy = 0
            }
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${startEnergy} energy`);
            break;
        }

        inputLength--;
    }
    
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])