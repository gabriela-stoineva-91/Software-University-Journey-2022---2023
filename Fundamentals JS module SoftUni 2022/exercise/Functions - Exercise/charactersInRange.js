function charactersInRange(firstChar, secondChar) {

    let startRange = Math.min(Number(firstChar.charCodeAt()), Number(secondChar.charCodeAt()));
    let finalRange = Math.max(Number(secondChar.charCodeAt()), Number(firstChar.charCodeAt()));

    let result = []
    for (let i = startRange + 1; i < finalRange; i++) {
        let currentChar = String.fromCharCode(i)
        result.push(currentChar)
    }
    console.log(result.join(' '))

}
