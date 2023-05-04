function worldTour2(input) {
    let allMyStops = input.shift();
    let command = input.shift();

    while (command !== 'Travel') {
        command = command.split(':');
        let action = command.shift();
        switch (action) {
            case 'Add Stop':
                let [index, newString] = command;
                if (allMyStops[Number(index)] !== undefined) {
                    let first = allMyStops.substring(0, Number(index));
                    let last = allMyStops.substring(Number(index));
                    allMyStops = first + newString + last;
                }
                console.log(allMyStops);
                break;

            case 'Remove Stop':
                let [start, end] = command;
                if (allMyStops[Number(start)] !== undefined && allMyStops[Number(end)] !== undefined) {
                    let partToRemove = allMyStops.substring(Number(start), Number(end) + 1);
                    allMyStops = allMyStops.replace(partToRemove, '');
                }
                console.log(allMyStops);
                break;

            case 'Switch':
                let [oldString, newStr] = command;
                if (allMyStops.includes(oldString)) {
                 allMyStops = allMyStops.replace(oldString, newStr);
                }
                // with while I made infinity loop!!!!!
                console.log(allMyStops);
                break;
        }

        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allMyStops}`);

}
worldTour2((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))