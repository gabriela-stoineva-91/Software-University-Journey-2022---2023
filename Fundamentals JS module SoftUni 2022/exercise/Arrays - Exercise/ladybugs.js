function ladybugs(array) {

    let bugsArrayLength = Number(array.shift());

    let arrayOfBugs = ('0' + ' ').repeat(bugsArrayLength - 1).split(' ').map(Number);

    let indexOfCurrentBugs = array.shift().split(' ').map(Number);

    for (let el of indexOfCurrentBugs) {
        if (el > 0 && el < bugsArrayLength) {
            for (let i = 0; i < indexOfCurrentBugs.length; i++) {
                arrayOfBugs[indexOfCurrentBugs[i]] = 1;
                
            }
        }
    }

    

    for (let c = 0; c < array.length; c++) {
        let command = array[c];
        command = command.split(' ');
        let index = Number(command[0]);
        let way = command[1];
        let jump = Number(command[2]);

        if (jump < 0 && way == 'left') {
            way = 'right';
            jump *= (-1)
        } else if (jump < 0 && way == 'right') {
            way = 'left'
            jump *= (-1)
        } 
       

        if (arrayOfBugs[index] !== undefined && arrayOfBugs[index] !== 0) {
           
            switch (way) {
                case 'right':
                    if (arrayOfBugs[index + jump] === undefined) {
                        arrayOfBugs[index] = 0 
                    }
                    while (arrayOfBugs[index + jump] !== undefined) {
                        if (arrayOfBugs[index + jump] !== 1) {
                            arrayOfBugs[index] = 0
                            arrayOfBugs[index + jump] = 1;
                            break;
                        }
                        jump += jump
                        if (arrayOfBugs[index + jump] === undefined) {
                            arrayOfBugs[index] = 0 ;
                            break;
                        }
                        
                    }
                    
                    break;

                case 'left':
                    if (arrayOfBugs[index - (jump)] === undefined) {
                        arrayOfBugs[index] = 0 
                    }
                    
                    while (arrayOfBugs[index - jump] !== undefined) {
                        
                        if (arrayOfBugs[index - (jump)] !== 1) {
                            arrayOfBugs[index] = 0
                            arrayOfBugs[index - jump] = 1;
                            break;
                        } 
                        jump += jump;
                        if (arrayOfBugs[index + jump] === undefined) {
                            arrayOfBugs[index] = 0 ;
                            break;
                        }
                    }
                    
                    break;
            }
        }
       
    }
    console.log(arrayOfBugs.join(' '))
}
ladybugs([ 5, '3',
'3 left 2',
'1 left -2'])