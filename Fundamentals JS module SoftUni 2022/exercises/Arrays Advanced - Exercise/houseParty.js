function houseParty(array) {

    let guestList = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let name = command[0];

        if (!command.includes('not')) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guestList.push(name)
            }
        } else {

            if (!guestList.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1)
            }

        }
    }
    console.log(guestList.join('\n'))

}