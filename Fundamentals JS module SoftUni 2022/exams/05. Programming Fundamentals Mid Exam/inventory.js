function inventory(array) {

    let printCollection = array.shift().split(', ');
    let command = array.shift();

    while (command !== 'Craft!') {
        
        command = command.split(' - ');
       
        let currentCommand = command[0];
        let item = command[1];

        switch (currentCommand) {
            case 'Collect':
                if (!printCollection.includes(item)) {
                    printCollection.push(item)
                }
                 break;

            case 'Drop':
                if (printCollection.includes(item)) {
                    printCollection = printCollection.filter((x) => x !== (item))
                }
                 break; 

            case 'Combine Items':
                item = item.split(':')
                if (printCollection.includes(item[0])) {
                    let index = printCollection.indexOf(item[0]);
                    printCollection.splice(index + 1, 0, item[1])
                    
                }
                 break; 

            case 'Renew':
                if (printCollection.includes(item)) {
                let index2 = printCollection.indexOf(item);
                let itemToMove = printCollection.slice(index2, index2 + 1);
                printCollection.push(itemToMove)
                printCollection.splice(index2, 1)
                }
                 break; 
        }
        command = array.shift()
    }

    console.log(printCollection.join(', '))

}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])