function movingTarget(input){
    
    let target = input.shift().split(' ').map(Number);
    
    let command = input.shift();
    
    while (command !== 'End') {
        let currentCommand = command.split(' ');
        let action = currentCommand[0];
        let index = Number(currentCommand[1]);
        let value = Number(currentCommand[2]);
        
        switch (action) {
            case 'Shoot':
                if (target[index] !== undefined) {
                    target[index] -= value
                    if (target[index] <= 0) {
                        target.splice(index, 1)
                    }
                }
                break;
                
            case 'Add':
                if (target[index] !== undefined) {
                    target.splice(index, 0, value)
                } else {
                    console.log('Invalid placement!')
                }
                break;
                
            case 'Strike':
                if (target[index] !== undefined && target[index - value] !== undefined && target[index + value] !== undefined) {
                    target.splice(index - value, value * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
            
        }
     
        
        command = input.shift();
    }
    
    console.log(target.join('|'))
    
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])