function messagesManager(input) {
    const capacity = Number(input.shift());
    let all = new Map();

    let command = input.shift();
    while (command !== 'Statistics') {
        command = command.split('=');
        let action = command.shift();
        switch (action) {
            case 'Add':
                let [user, sent, received] = command;
                if (!all.has(user)) {
                    all.set(user, { sent: Number(sent), received: Number(received) });
                }
                break;

            case 'Message':
                let [sender, receiver] = command;
                if (all.has(sender) && all.has(receiver)) {
                    all.get(sender).sent += 1;
                    all.get(receiver).received += 1;
                    if ((all.get(sender).sent + all.get(sender).received) >= capacity) {
                        all.delete(sender);
                        console.log(`${sender} reached the capacity!`);
                    }
                    if ((all.get(receiver).received + all.get(receiver).sent) >= capacity) {
                        all.delete(receiver);
                        console.log(`${receiver} reached the capacity!`);
                    }
                }
                break;

            case 'Empty':
                let userToDelete = command.shift();
                if (userToDelete === 'All') {
                    all = new Map;
                }
                if (all.has(userToDelete)) {
                    all.delete(userToDelete)
                }
                break;

        }
        command = input.shift();
    }
    let arr = Array.from(all.entries());
    let userCount = arr.length;
    console.log(`Users count: ${userCount}`);
   
    for (let [userToPrint, box] of arr) {
        console.log(` ${userToPrint} - ${box.sent + box.received}`);
    }
    //console.table(all)

}
messagesManager((["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Empty=All",
    "Statistics"]))