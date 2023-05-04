function lowerOrUpper(character) {
    let print = character == character.toLowerCase()
                ? 'lower-case'
                : 'upper-case';
    console.log(print);
}
lowerOrUpper('g')