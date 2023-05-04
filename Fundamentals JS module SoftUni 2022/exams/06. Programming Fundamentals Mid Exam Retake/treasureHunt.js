function treasureHunt(input) {

    let printList = input.shift().split('|');

    let command = input.shift();

    while (command !== 'Yohoho!') {
        let currentCommand = command.split(' ');

        let action = currentCommand[0];

        switch(action) {
            case 'Loot':
                
                 break;

            case 'Drop':
                 break;

            case 'Steal':
                 break;
            
        }


        console.log(currentCommand)

        command = input.shift();
    }


}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]))