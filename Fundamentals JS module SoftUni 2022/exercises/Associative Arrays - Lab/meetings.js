function meetingsList(input) {

    let meetings = {};

    for (const line of input) {
        let [day, name] = line.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
    }

}
meetingsList(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])