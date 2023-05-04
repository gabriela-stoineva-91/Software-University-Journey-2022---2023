function destinationMaper2(string) {
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let all = string.matchAll(pattern);
    let destinations = [];
    let sumPoint = 0;
    for (let match of all) {
        destinations.push(match.groups.destination);
        sumPoint += match.groups.destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${sumPoint}`);
}
destinationMaper2(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
destinationMaper2(("ThisIs some InvalidInput"))