function careGuineaPig(input) {

    let foodQuantityKg = Number(input[0]);
    let hayQuantity = Number(input[1]);
    let coverQuantity = Number(input[2]);
    let weightsPig = Number(input[3]);
    let days = 30;
    let dayCounter = 0;
    let foodQuantityG = foodQuantityKg * 1000
    
    const foodForOneDay = 300;
    const coverForEveryThirdDay = weightsPig / 3;
    let isEnough = true;

    while (days > 0) {
        dayCounter++;
        foodQuantityG -= foodForOneDay;
        if (dayCounter % 2 === 0) {
            let hayForEverySecondDay = foodQuantityG/1000 * 0.05;
            hayQuantity -= hayForEverySecondDay
        }
        if (dayCounter % 3 === 0) {
            coverQuantity -= coverForEveryThirdDay
        }
        if (foodQuantityG <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            isEnough = false  
            break;
        }
        days--
        
    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantityG / 1000).toFixed(2)}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQuantity.toFixed(2)}.`)
    } else {
        console.log("Merry must go to the pet store!")
    }
    //console.log(dayCounter)

}
careGuineaPig(["10", 
"5", 
"5.2", 
"1"])