function needForSpeedThree(input) {
    let numbersOfCars = Number(input.shift());
    let allCars = new Map();

    for (let i = 0; i < numbersOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        allCars.set(car, { mileage: Number(mileage), fuel: Number(fuel) });
    }
    let command = input.shift();

    while (command !== 'Stop') {
        command = command.split(' : ');
        let action = command.shift();
        switch (action) {
            case 'Drive':
                let [currentCar, distance, needFuel] = command;
                if (allCars.get(currentCar).fuel >= Number(needFuel)) {
                    allCars.get(currentCar).mileage += Number(distance);
                    allCars.get(currentCar).fuel -= Number(needFuel);
                    console.log(`${currentCar} driven for ${distance} kilometers. ${needFuel} liters of fuel consumed.`);
                    if (allCars.get(currentCar).mileage >= 100000) {
                        allCars.delete(currentCar);
                        console.log(`Time to sell the ${currentCar}!`)
                    }
                } else {
                    console.log('Not enough fuel to make that ride')
                }

                break;

            case 'Refuel':
                let [carToPlus, plusFuel] = command;
                let diff = 75 - allCars.get(carToPlus).fuel;
                if ((Number(plusFuel) + allCars.get(carToPlus).fuel) > 75) {
                    plusFuel = diff;
                }
                allCars.get(carToPlus).fuel += Number(plusFuel);
                console.log(`${carToPlus} refueled with ${plusFuel} liters`);
                break;

            case 'Revert':
                let [carToChange, kilometers] = command;
                if (allCars.get(carToChange).mileage - Number(kilometers) < 10000) {
                    allCars.get(carToChange).mileage = 10000;
                } else {
                    allCars.get(carToChange).mileage -= Number(kilometers);
                    console.log(`${carToChange} mileage decreased by ${kilometers} kilometers`)
                }

                break;
        }
        command = input.shift();
    }
    let arr = Array.from(allCars.entries());
  
     for (let [carToPrint, obj] of arr) {
         console.log(`${carToPrint} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`);

    }
}
needForSpeedThree([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])