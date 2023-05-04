function manOwar(array) {
    
    let statusPirateShip = array.shift().split('>').map(Number)
    let warShipStatus = array.shift().split('>').map(Number)
    let maxHealthCapacity = Number(array.shift());
    
    let command = array.shift();
    let isBreak = false;
    let isDownPirateShip = false;
    
    while (command !== 'Retire') {
        
        command = command.split(' ');
        let action = command[0];
        
        switch (action) {
            case 'Fire':
                let index = Number(command[1]);
                if (warShipStatus[index] !== undefined) {
                    let damage = Number(command[2]);
                    warShipStatus[index]-= damage;
                    if (warShipStatus[index] <= 0) {
                        isBreak = true;
                        break;
                    }
                }
                break;
                
            case 'Defend': 
                let firstInd = Number(command[1]);
                let secondInd = Number(command[2]);
                if (statusPirateShip[firstInd] !== undefined && statusPirateShip[secondInd] !== undefined && firstInd !== secondInd) {
                    let damage1 = Number(command[3]);
                    for (let i = firstInd; i <= secondInd; i++) {
                        statusPirateShip[i]-= damage1;
                        if (statusPirateShip[i] <= 0) {
                            isDownPirateShip = true;
                            break;
                        }
                    }
                }
                break;
                
            case 'Repair':
                let repearIndex = Number(command[1]);
                if (statusPirateShip[repearIndex] !== undefined) {
                    let plushHealth = Number(command[2]);
                   statusPirateShip[repearIndex]+= plushHealth;
                    if (statusPirateShip[repearIndex] > maxHealthCapacity) {
                       statusPirateShip[repearIndex] = maxHealthCapacity 
                    }
                    
                }
                break;
                
            case 'Status':
                let repareMin = maxHealthCapacity * 0.20;
                let statusRepearCount = 0;
                for (let s = 0; s < statusPirateShip.length; s++) {
                    if (statusPirateShip[s] < repareMin) {
                      statusRepearCount++  
                    }
                }
                console.log(`${statusRepearCount} sections need repair.`);
                break;
                
        }
        
       if (isBreak) {
           console.log("You won! The enemy ship has sunken.");
           break;
       } 
       if (isDownPirateShip) {
           console.log("You lost! The pirate ship has sunken.");
           break;
       }
        
      command = array.shift();  
    }
      if ((!isBreak) && (!isDownPirateShip)) {
           let pirateSum = 0;
       for (let e = 0; e < statusPirateShip.length; e++) {
           pirateSum += statusPirateShip[e]
       }
       let warShipSum = 0;
       for (let w = 0; w < warShipStatus.length; w++) {
           warShipSum += warShipStatus[w]
       }
           console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warShipSum}`)
       }
}