function worldTour(input) {
  let finalTour = input.shift();
  let command = input.shift();

  while (command !== 'Travel') {
    command = command.split(':');
    let action = command.shift();
    switch (action) {
      case 'Add Stop':
        let [index, stop] = command;
        if (finalTour[index] !== undefined) {
          let firstPart = finalTour.substring(0, index);
          let endPart = finalTour.substring(index);
          finalTour = firstPart + stop + endPart;
        }
        console.log(finalTour)
        break;

      case 'Remove Stop':
        let [startInd, endInd] = command;
        if (finalTour[startInd] !== undefined && finalTour[endInd] !== undefined) {
          let first = finalTour.substring(0, Number(startInd));
          let sec = finalTour.substring(Number(endInd) + 1);
          finalTour = first + sec;
        }
        console.log(finalTour)
        break;

      case 'Switch':
        let [old, newOne] = command;
        if (finalTour.includes(old)) {
          finalTour = finalTour.replace(old, newOne);
        }
        console.log(finalTour);
        break;


    }

    command = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${finalTour}`)
}