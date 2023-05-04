function softUniReception(input) {
    let firstEmployerCount = Number(input[0]);
    let secondEmployerCount = Number(input[1]);
    let thirdEmployerCount = Number(input[2]);
    let students = Number(input[3]);

    let employersCount = firstEmployerCount + secondEmployerCount + thirdEmployerCount;
    let hoursCounter = 0;
   
    while (students > 0) {
        hoursCounter++;
        if (hoursCounter % 4 !== 0) {
            
            students -= employersCount
        } 
    }
    console.log(`Time needed: ${hoursCounter}h.`);

}
softUniReception(['3', '2', '5', '40'])