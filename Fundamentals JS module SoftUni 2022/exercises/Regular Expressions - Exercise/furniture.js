function matchDates(input) {
    let text = input.toString();

    let pattern = /\b(?<day>\d{2})(?<del>[-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let all = text.matchAll(pattern);

    for (let match of all) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`)
    }
}