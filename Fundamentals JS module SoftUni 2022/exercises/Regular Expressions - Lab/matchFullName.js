function printCorrectName(string) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let all = string.match(pattern);

    console.log(all.join(' '));
}
