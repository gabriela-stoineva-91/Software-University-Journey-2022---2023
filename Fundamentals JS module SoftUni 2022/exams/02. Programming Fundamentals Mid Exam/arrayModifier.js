function arrayModifier(array) {

    let arrayOfnembers = array.shift()
                              .split(' ')
                              .map(Number)
    let i = 0;
    let command = array[i];
    i++;
    let firstSwapElement;
    let secondSwapElement;
    let multiplyElement;
    
    
    while (command !== 'end') {
  
      let currentCommand = command.split(' ');
      
      let functionallity = currentCommand[0];
      let firstInd = Number(currentCommand[1]);
      let secondInd = Number(currentCommand[2]);
      
      
      switch (functionallity) {
          case 'swap':
              
      firstSwapElement = Number(arrayOfnembers.slice(firstInd, firstInd + 1));
      secondSwapElement = Number(arrayOfnembers.slice(secondInd, secondInd + 1 ))
      //23 -2 321 87 42 90 -123'
      arrayOfnembers.splice(firstInd, 1, secondSwapElement);
      arrayOfnembers.splice(secondInd, 1, firstSwapElement)
      
              break;
              
          case 'multiply':
      multiplyElement = (arrayOfnembers.slice(firstInd, firstInd + 1)) * (arrayOfnembers.slice(secondInd, secondInd + 1));
      arrayOfnembers.splice(firstInd, 1, multiplyElement)
      
     
              break;
          case 'decrease':
      arrayOfnembers = arrayOfnembers.map(x => x - 1)
              
              
              break;
      }
      
     
     
      command = array[i];
      i++;
  
    }
  
    console.log(arrayOfnembers.join(', '))
  
  }