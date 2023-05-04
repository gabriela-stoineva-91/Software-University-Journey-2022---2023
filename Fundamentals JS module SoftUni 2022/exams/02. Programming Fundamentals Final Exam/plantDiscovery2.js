function plantDiscovery2(input) {
    let num = Number(input.shift());
    let collect = {};
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input.shift().split('<->');
        collect[plant] = { rarity: Number(rarity), rating: [] };
    }
    let command = input.shift();

    while (command !== 'Exhibition') {
        command = command.split(': ');
        let action = command.shift();
        command = command.join();
        switch (action) {
            case 'Rate':
                let [plant1, ratingToStore] = command.split(' - ');
                if (collect.hasOwnProperty(plant1)) {
                    collect[plant1].rating.push(Number(ratingToStore))
                } else {
                    console.log('error');
                }
                break;

            case 'Update':
                let [plant2, newRarity] = command.split(' - ');
                if (collect.hasOwnProperty(plant2)) {
                    collect[plant2].rarity = Number(newRarity);
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                let plant3 = command.split();
                if (collect.hasOwnProperty(plant3)) {
                    collect[plant3].rating = [];
                } else {
                    console.log('error');
                }
                break;
        }
        command = input.shift();
    }
    console.log('Plants for the exhibition:')
    let arr = Array.from(Object.entries(collect));
    for (let [name, obj] of arr) {
        let sum = 0;
        obj.rating.forEach(num => {
            sum += num
        });
        let average = 0;
        if (obj.rating.length > 0) {
            average = sum / obj.rating.length;
        }
        console.log(`- ${name}; Rarity: ${obj.rarity}; Rating: ${average.toFixed(2)}`)
    }
    //console.table(collect)
}
plantDiscovery2((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]))