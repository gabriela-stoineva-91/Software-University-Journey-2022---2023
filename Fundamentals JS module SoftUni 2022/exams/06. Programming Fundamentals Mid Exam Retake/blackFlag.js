function blackFlag(input) {

    let days = Number(input[0]);
    let plunderForOneDay = Number(input[1]);
    let targetPlunder = Number(input[2]);
    let dayCounter = 0;
    let sum = 0;

    while (days > 0) {
        
        sum += plunderForOneDay;
        dayCounter++;
        if (dayCounter % 3 === 0) {
            sum += plunderForOneDay / 2
        }
        if (dayCounter % 5 === 0) {
            sum *= 0.70
        }
        days--;
    }

    if (sum < targetPlunder) {
        let percentageSum = sum / targetPlunder * 100 ;
        console.log(`Collected only ${percentageSum.toFixed(2)}% of the plunder.`)
    } else {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`)
    }
    //console.log(dayCounter)

}
blackFlag(["10",
"20",
"380"])