function spiceMustFlow(firstDayYield) {
    startYield = Number(firstDayYield);
    const dailyMinus = 10;

    let dayCounter = 0;
    let currentYield = 0;
    const consumeOfWorkers = 26;
    let leavingYield = 0;

    while (startYield !== 0) {
        
        currentYield = startYield
        if (currentYield >= consumeOfWorkers){
        leavingYield -= consumeOfWorkers
        }
        if (startYield < 100) {
           
            break;
        } 
        dayCounter++;
        leavingYield += currentYield ; 
        startYield -= dailyMinus
        
    }  
    if (leavingYield < 0) {
        leavingYield = 0
    }
    console.log(dayCounter)  
    console.log(leavingYield)

}
spiceMustFlow(111)