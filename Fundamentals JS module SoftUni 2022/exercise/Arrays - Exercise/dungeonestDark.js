function dungeonestDark(string) {

    let arr = string.join(' ');
    arr = arr.split('|');

    let health = 100;
    let coins = 0;

    let roomCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let actionWord = command[0];
        let healthOtBitcoinCount = Number(command[1]);
        roomCounter++

        switch (actionWord) {
            case 'potion':
                if (health < 100) {
                    health += healthOtBitcoinCount;
                    if (health > 100) {
                        let diff = health - 100;
                        healthOtBitcoinCount -= diff;
                        health = 100
                    }
                    console.log(`You healed for ${healthOtBitcoinCount} hp.`);
                    console.log(`Current health: ${health} hp.`)
                }
                break;

            case 'chest':
                coins += healthOtBitcoinCount;
                console.log(`You found ${healthOtBitcoinCount} coins.`);
                break;

            default:
                health -= healthOtBitcoinCount;
                if (health <= 0) {
                    console.log(`You died! Killed by ${actionWord}.`);
                    console.log(`Best room: ${roomCounter} `)
                } else {
                    console.log(`You slayed ${actionWord}.`)
                }
                break;
        }
        if (health <= 0) {
            break;
        }

    }
    if (roomCounter == arr.length && health > 0) {

        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }

}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])