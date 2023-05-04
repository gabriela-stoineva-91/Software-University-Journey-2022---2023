function passwordValidator(enteredPassword) {

    let enteredPasswordLength = enteredPassword.length;
    let digitCounter = 0;



    let isSymbol = false;


    for (let i = 0; i < enteredPasswordLength; i++) {
        let index = enteredPassword[i].charCodeAt();

        let isDigit = index >= 48 && index <= 57;
        if (isDigit) {
            digitCounter++
        }
        let isSmallLetter = index >= 65 && index <= 90

        let isBigLetter = index >= 97 && index <= 122

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }

    }


    if ((enteredPasswordLength >= 6 && enteredPasswordLength <= 10) && (digitCounter >= 2) && (!isSymbol)) {
        console.log('Password is valid')
    }
    if (enteredPasswordLength < 6 || enteredPasswordLength > 10) {
        console.log("Password must be between 6 and 10 characters")
    }
    if (isSymbol) {
        console.log("Password must consist only of letters and digits")
    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits")
    }

}