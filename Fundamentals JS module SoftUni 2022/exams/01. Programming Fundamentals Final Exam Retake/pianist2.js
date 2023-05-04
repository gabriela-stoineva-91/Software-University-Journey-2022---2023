function pianist(input) {
    let numOfPieces = Number(input.shift());
    let favoriteList = new Map();

    for (let i = 0; i < numOfPieces; i++) {
        let current = input.shift().split('|');
        let [piece, composer, key] = current;
        favoriteList.set(piece, { composer: composer, key: key })
    }
    let command = input.shift();
    while (command !== 'Stop') {
        command = command.split('|');
        let action = command.shift();
        switch (action) {
            case 'Add':
                let [piece1, comp, key1] = command;
                if (favoriteList.has(piece1)) {
                    console.log(`${piece1} is already in the collection!`)
                } else {
                    favoriteList.set(piece1, { composer: comp, key: key1 });
                    console.log(`${piece1} by ${comp} in ${key1} added to the collection!`);
                }
                break;

            case 'Remove':
                let piece2 = command.shift();
                if (favoriteList.has(piece2)) {
                    favoriteList.delete(piece2);
                    console.log(`Successfully removed ${piece2}!`);
                } else {
                    console.log(`Invalid operation! ${piece2} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                let [piece3, newKey] = command;
                if (favoriteList.has(piece3)) {
                    favoriteList.get(piece3).key = newKey;
                    console.log(`Changed the key of ${piece3} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece3} does not exist in the collection.`);
                }
                break;
        }
        command = input.shift();
    }
    let arr = Array.from(favoriteList.entries());
    for (let [pieceName, pieceInfo] of arr) {
        console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
    //console.table(favoriteList)

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])