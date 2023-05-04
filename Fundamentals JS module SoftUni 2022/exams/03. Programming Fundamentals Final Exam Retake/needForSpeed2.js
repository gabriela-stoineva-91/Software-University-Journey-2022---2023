function needForSpeed2(input) {
    let numCars = Number(input.shift());
    let garage = new Map();
    const oldCount = 100000;
    const fuelMax = 75;
    const milMin = 10000;

    for (let i = 0; i < numCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        garage.set(car, { mileage: Number(mileage), fuel: Number(fuel) })
    }
    let command = input.shift();
    while (command !== 'Stop') {
        command = command.split(' : ');
        let action = command.shift();
        switch (action) {
            case 'Drive':
                let [car1, distance, needFuel] = command;
                if (garage.get(car1).fuel < Number(needFuel)) {
                    console.log('Not enough fuel to make that ride')
                } else {
                    garage.get(car1).fuel -= Number(needFuel);
                    garage.get(car1).mileage += Number(distance);
                    console.log(`${car1} driven for ${distance} kilometers. ${needFuel} liters of fuel consumed.`);
                    if (garage.get(car1).mileage >= oldCount) {
                        garage.delete(car1);
                        console.log(`Time to sell the ${car1}!`);
                    }
                }
                break;

            case 'Refuel':
                let [car2, plusFuel] = command;
                if ((garage.get(car2).fuel + Number(plusFuel)) > fuelMax) {
                    plusFuel = fuelMax - garage.get(car2).fuel;
                }
                garage.get(car2).fuel += Number(plusFuel);
                console.log(`${car2} refueled with ${plusFuel} liters`);
                break;

            case 'Revert':
                let [car3, kilometers] = command;
                if (garage.get(car3).mileage - Number(kilometers) < milMin) {
                    garage.get(car3).mileage = milMin;
                } else {
                    garage.get(car3).mileage -= Number(kilometers);
                    console.log(`${car3} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
        command = input.shift();
    }
    let arr = Array.from(garage.entries());
    for (let [carPrint, obj] of arr) {
        console.log(`${carPrint} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`);
    }
    //console.table(garage)
}
needForSpeed2([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)