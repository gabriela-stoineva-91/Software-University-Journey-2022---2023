function squareOfStars(number = 5) {
    const star = '* ';

    for (let i = 1; i <= number; i++) {
        console.log(star.repeat(number))
    }
}