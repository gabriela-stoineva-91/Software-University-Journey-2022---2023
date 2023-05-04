function plantDiscovery(input) {
    let collection = new Map();
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let plantInfo = input[i].split('<->');
        let plantName = plantInfo[0];
        let rarity = plantInfo[1];
        if (!collection.has(plantName)) {
            collection.set(plantName, { rar: 0, rating: [] });
        }
        collection.get(plantName).rar += Number(rarity)
        // collect objects in map 
    }
    let command = input.shift();

    while (command !== 'Exhibition') {
        command = command.split(': ');
        let action = command.shift();
        command = command.join('');
        switch (action) {
            case 'Rate':
                let [name, ratingPlus] = command.split(' - ');
                if (!collection.has(name)) {  
                    console.log(`error`) 
                } else {
                    collection.get(name).rating.push(Number(ratingPlus));
                }
                break;

            case 'Update':
                let [name1, newRarity] = command.split(' - ');
                if (!collection.has(name1)) {
                    console.log('error')
                } else {
                    collection.get(name1).rar = newRarity;
                }
                break;

            case 'Reset':
                let plantToDelRating = command;
                if (!collection.has(plantToDelRating)) {
                    console.log('error');
                } else {
                    collection.get(plantToDelRating).rating = [];
                }
                break;
        }

        command = input.shift();
    }

    let arr = Array.from(collection.entries());

    console.log(`Plants for the exhibition:`);
    
    function print(arrayOfCollection) {
        arrayOfCollection.forEach((a) => {
            let nameToPrint = a[0]; // key
            let obj = a[1]; // value = obj
            let rarityToPrint = obj.rar;
            let arrayOfRatings = obj.rating;

            function aver(array) {
                let sum = 0;
                let aver = 0;
                if (array.length > 0) {
                    array.forEach((n) => {
                        sum += Number(n)
                    })
                    aver = sum / array.length
                }
                return aver
            }
            let ratingToPrint = aver(arrayOfRatings);// obj.rating = array of rates

            console.log(`- ${nameToPrint}; Rarity: ${rarityToPrint}; Rating: ${ratingToPrint.toFixed(2)}`)
        })

    }
    print(arr); 
    
}
plantDiscovery(([
    "4",
    "Arnoldii<->4",
    "Woodii<->7",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]));