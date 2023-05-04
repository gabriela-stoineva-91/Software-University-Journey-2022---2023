function triplesOfLatinLetters(n) {
    let num = Number(n);

    for (let i = 0; i < num; i++) {
        let firstNumber = String.fromCharCode(97 + i);
        for (let b = 0; b < num; b++) {
            let secondNumber = String.fromCharCode(97 + b);
            for (let c = 0; c < num ; c++) {
                let thirdNumber = String.fromCharCode(97 + c);
                console.log(firstNumber + secondNumber + thirdNumber);
            }
        }
    }
}

triplesOfLatinLetters(3)