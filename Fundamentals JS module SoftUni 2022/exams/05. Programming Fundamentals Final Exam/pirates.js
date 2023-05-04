function pirates(input) {
    let citiesInfo = input.shift();
    let cityCollect = new Map();

    while (citiesInfo !== 'Sail') {
        let [cityName, population, gold] = citiesInfo.split('||');
        if (!cityCollect.has(cityName)) {
            cityCollect.set(cityName, { population: 0, gold: 0 })
        }
        cityCollect.get(cityName).population += Number(population);
        cityCollect.get(cityName).gold += Number(gold);

        citiesInfo = input.shift();
    }
    let command = input.shift();
    while (command !== 'End') {
        command = command.split('=>');
        let action = command.shift();
        switch (action) {
            case 'Plunder':
                let [town, people, stealedGold] = command;
                if (cityCollect.has(town)) {
                    cityCollect.get(town).population -= Number(people);
                    cityCollect.get(town).gold -= Number(stealedGold);
                    console.log(`${town} plundered! ${stealedGold} gold stolen, ${people} citizens killed.`)
                    if (cityCollect.get(town).population === 0 || cityCollect.get(town).gold === 0) {
                        cityCollect.delete(town);
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
                break;

            case 'Prosper':
                let [prosperedTown, plusGold] = command;
                if (cityCollect.has(prosperedTown)) {
                    if (Number(plusGold < 0)) {
                        console.log('Gold added cannot be a negative number!')
                    } else {
                        cityCollect.get(prosperedTown).gold += Number(plusGold);
                        console.log(`${plusGold} gold added to the city treasury. ${prosperedTown} now has ${cityCollect.get(prosperedTown).gold} gold.`)
                    }
                }
                break;
        }

        command = input.shift();
    }
    let arr = Array.from(cityCollect.entries());
    if (arr.length < 1) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);
        for (let [cityToPrint, obj] of arr) {

            console.log(`${cityToPrint} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`)
        }
    }

    //console.table(arr)
}