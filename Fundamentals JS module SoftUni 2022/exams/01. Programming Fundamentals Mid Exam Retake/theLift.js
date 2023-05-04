function lift(array) {
    const liftMaximum = 4;
    let waitingPeople = Number(array.shift());
    let currenStateOfLift = array.shift().split(' ').map(Number);
    let fullCount = 0;
    
    for (let i = 0; i < currenStateOfLift.length; i++) {
        if (currenStateOfLift[i] < liftMaximum) {
            if (waitingPeople > 0) {
            let diff = (liftMaximum - currenStateOfLift[i])
            if (diff > waitingPeople) {
                diff = waitingPeople
            }
            waitingPeople -= diff
            currenStateOfLift[i] += diff;
            } 
             if (currenStateOfLift[i] === liftMaximum) {
                fullCount++
            }
            if (waitingPeople <= 0 && fullCount < currenStateOfLift.length) {
                console.log(`The lift has empty spots!
${currenStateOfLift.join(' ')}`)
                break;
            }
            
           
        }
    }
    if (waitingPeople > 0 ) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!
${currenStateOfLift.join(' ')}`)
    }
    if (fullCount === currenStateOfLift.length && waitingPeople === 0){
        console.log(currenStateOfLift.join(' '))
    }
    
	   
}