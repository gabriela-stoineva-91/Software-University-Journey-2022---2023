function experienceGaining(array) {

    let amountNeeded = Number(array.shift());
    let countOfBattles = Number(array.shift());
    let sum = 0;
    let count = 0;
    let isEnough = false;

    for (let i = 0; i < countOfBattles; i++) {
        let currentValueBattle = Number(array[i]);
        count++

        if (count % 3 === 0) {
            currentValueBattle *= 1.15
        }
        if (count % 5 === 0) {
            currentValueBattle *= 0.90
        }
        if (count % 15 === 0) {
            currentValueBattle *= 1.05
        }
        sum += currentValueBattle
        if (sum >= amountNeeded) {
            isEnough = true

            break;
        }
    }
    
    let diff = Math.abs(sum - amountNeeded);
    
    if (!isEnough) {
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`)
    } else {
        console.log(`Player successfully collected his needed experience for ${count} battles.`)
    }
}
experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    20]))