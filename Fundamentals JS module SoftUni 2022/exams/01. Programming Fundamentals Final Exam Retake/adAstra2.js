function adAstra(input) {
    let text = input.shift();
    let pattern = /(\||#)(?<item>[A-Za-z\ ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    const caloriesForOneDay = 2000;

    let matchForCalorie = text.matchAll(pattern);
    let sum = 0;
    for (let match of matchForCalorie) {
        sum += Number(match.groups.calories)
    }
    let days = Math.floor(sum / caloriesForOneDay);
    console.log(`You have food to last you for: ${days} days!`);

    let matchToPrint = text.matchAll(pattern);
    for (let matchItemInfo of matchToPrint) {
        console.log(`Item: ${matchItemInfo.groups.item}, Best before: ${matchItemInfo.groups.date}, Nutrition: ${matchItemInfo.groups.calories}`);
    }

}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])