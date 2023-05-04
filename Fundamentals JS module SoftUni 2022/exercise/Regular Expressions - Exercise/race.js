function race(input) {
    let all = {};
    let racers = input.shift().split(', ');
    racers.forEach((name) => {
        all[name] = 0
    })

    let current = input.shift();
    let namePattern = /(?<char>[A-Za-z]+)/g;
    let distancePattern = /(?<dist>[\d])/g;

    while (current !== 'end of race') {
        let name = "";
        let nameMatch = current.match(namePattern);
        for (let char of nameMatch) {
            name += char
        }
        if (all.hasOwnProperty(name)) {
            let dist = current.match(distancePattern);
            for (let n of dist) {
                all[name] += Number(n)
            }
        }

        current = input.shift();
    }
    let arr = Array.from(Object.entries(all)).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`)
    console.log(`3rd place: ${arr[2][0]}`)

}