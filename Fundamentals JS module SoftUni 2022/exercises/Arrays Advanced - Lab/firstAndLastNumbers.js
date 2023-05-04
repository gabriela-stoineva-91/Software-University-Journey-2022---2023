function firstAndLastNumbers(array) {

    let count = Number(array.shift());

    let firstArr = array.slice(0, count);
    let secArr = array.splice((array.length - count), count);

    console.log(firstArr.join(' '));
    console.log(secArr.join(' '));

}
firstAndLastNumbers([2, 7, 8, 9])