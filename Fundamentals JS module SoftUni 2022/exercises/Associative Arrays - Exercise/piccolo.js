function piccolo(array) {

	let obj = {};
  
  let parking = [];
  
  array.forEach(line => {
  	line = line.split(', ');
   
    if (line[0] == 'IN') {
    	obj[line[1]] = 1
    }
    if (line[0] == 'OUT' && obj.hasOwnProperty(line[1])) {
    	obj[line[1]]--
    }
  })
  
  for(let car in obj) {
  	if (obj[car] > 0) {
    parking.push(car)
   }
  }
  let sorted = parking.sort((a,b) => a.localeCompare(b));
  
  if (parking.length < 1) {
  	console.log("Parking Lot is Empty")
  } else {
  	console.log(sorted.join('\n'))
  }

	
}