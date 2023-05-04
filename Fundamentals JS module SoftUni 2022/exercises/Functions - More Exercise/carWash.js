function carWash(array) {
    
    let price = 0;
    let arrLength = array.length
    
    const countSoup = 10;
    const countWater = 1.20 ;
    const countVacuumCleaner = 1.25;
    const countMudDecrease = 0.90;
    
    for (let i = 0;  i < arrLength; i++) {
        let currentCommand = array[i];
        
        switch (currentCommand) {
            case 'soap':
                price += countSoup;
                break;
            case 'water':
                price *= countWater;
                break;
            case 'vacuum cleaner':
                price *= countVacuumCleaner;
                break;
            case 'mud':
                price *= countMudDecrease;
                break;
        }
    }
    
        console.log(`The car is ${price.toFixed(2)}% clean.`);
}