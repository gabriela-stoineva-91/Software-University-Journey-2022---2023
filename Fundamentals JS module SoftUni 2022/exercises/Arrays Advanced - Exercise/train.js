function train(input) {
    let currentWagonPassengerArray = input.shift().split(' ');
  
    let wagonCount = Number(input.shift());
  
    for (let i = 0; i < input.length; i++) {
      let command = input[i];
      command = command.split(' ');
  
      if (command[0] === 'Add') {
        currentWagonPassengerArray.push(command[1]);
      } else {
        for (let j = 0; j < currentWagonPassengerArray.length; j++) {
          let currentEl = Number(currentWagonPassengerArray[j]);
          if ((currentEl + Number(command[0])) <= wagonCount) {
          currentWagonPassengerArray[j] = Number(currentWagonPassengerArray[j]) + Number(command[0]);
          break;
            
          }
          
        }
      }
  
    }
  
    console.log(currentWagonPassengerArray.join(' '));  
  
  }