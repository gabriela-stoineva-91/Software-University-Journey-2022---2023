function cookingByNumbers(...actions) {
    let num = actions.shift();
    let numToDo = {
        chop(){num /= 2},
        dice(){num = Math.sqrt(num)},
        spice(){num++},
        bake(){num *= 3},
        fillet(){num *= 0.8}
    }
    actions.forEach(act => {
        numToDo[act]();
        console.log(num)
        return num
    })

}