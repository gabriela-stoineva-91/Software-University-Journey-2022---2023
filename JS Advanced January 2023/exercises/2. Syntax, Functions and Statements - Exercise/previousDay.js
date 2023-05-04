function previousDay(year, month, day) {
    let dayToPrint = new Date(year, month - 1, day - 1);
    let newYear = dayToPrint.getFullYear();
    let newMonth = dayToPrint.getMonth() + 1;
    let newDay = dayToPrint.getDate()
    console.log(`${newYear}-${newMonth}-${newDay}`)
}