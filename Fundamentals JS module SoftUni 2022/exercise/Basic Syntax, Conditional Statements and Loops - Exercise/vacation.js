function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
	let price = 0;
  
  switch (typeOfTheGroup) {
  	case 'Students':
    	switch (dayOfTheWeek) {
      	case 'Friday': price = groupOfPeople * 8.45; break;
        case 'Saturday': price = groupOfPeople * 9.80; break;
        case 'Sunday': price = groupOfPeople * 10.46; break;
      }
      if (groupOfPeople >= 30) {
      	price *= 0.85
      }
     break;
    case 'Business':
    	if (groupOfPeople >= 100) {
      	groupOfPeople -= 10
      }
    	switch (dayOfTheWeek) {
      	case 'Friday': price = groupOfPeople * 10.90; break;
        case 'Saturday': price = groupOfPeople * 15.60; break;
        case 'Sunday': price = groupOfPeople * 16; break;
      }
     break;
    case 'Regular':
    	switch (dayOfTheWeek) {
      	case 'Friday': price = groupOfPeople * 15; break;
        case 'Saturday': price = groupOfPeople * 20; break;
        case 'Sunday': price = groupOfPeople * 22.50; break;
      }
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
      	price *= 0.95
      }
     break;
  }
  console.log(`Total price: ${price.toFixed(2)}`)

}