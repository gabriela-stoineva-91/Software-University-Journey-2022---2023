function replace(string) {
    let firstChar = string[0];
    let result = firstChar
    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];
        let lastChar = string[i - 1]
        if (currentChar !== lastChar) {
            result += currentChar
        }
    }
    console.log(result)
}
replace('aaaaabbbbbcdddeeeedssaa')