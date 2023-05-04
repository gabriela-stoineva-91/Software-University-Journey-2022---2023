function area(argument) {
    if (argument === Number(argument)) {
        let area = Math.pow(argument, 2) * Math.PI;
        console.log(area.toFixed(2))
    } else {
        let type = typeof (argument);
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }

}