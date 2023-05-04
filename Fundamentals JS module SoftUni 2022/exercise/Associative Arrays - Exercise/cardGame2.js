function cardGame(array) {
    let persons = new Map();

    for (let line of array) {
        let [name, cards] = line.split(': ')
        cards = cards.split(', ');
        if (!persons.has(name)) {
            persons.set(name, new Set())
        }
        for (let card of cards) {
            persons.get(name).add(card)
        }
    }

    for (let [key, value] of persons) {
        let sum = 0;
        const enumPower = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        }
        const enumType = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
        for (let card of value) {
            let cardInfo = card.split('');
            let type = cardInfo.pop();
            let power = cardInfo.join('');
            let typeValue = enumType[type];
            let powerValue = enumPower[power];
            sum += typeValue * powerValue;

        }

        console.log(`${key}: ${sum}`)
    }

}