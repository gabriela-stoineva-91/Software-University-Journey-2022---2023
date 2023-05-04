function partyTime(input) {
		
    let command = input.shift();
    let obj = {}
    
    let vip = [];
    let regular = [];
    obj.v = vip;
    obj.r = regular;
  
    while (command !== 'PARTY') {
    	let name = command;

      if (isNaN(name[0])) {
      regular.push(name)
      } else {
      	vip.push(name)
      }
      command = input.shift();
    }
    
    let allGuests = vip.concat(regular)
    
    for (const guest of input) {
        let index = allGuests.indexOf(guest)
       allGuests.splice(index, 1)
    }
    console.log(allGuests.length)
    console.log(allGuests.join('\n'))
}