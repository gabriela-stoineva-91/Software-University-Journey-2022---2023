function extract(content) {
    let pattern = /\((?<word>[^(]+)\)/g;

    let textEl = document.getElementById('content').textContent;
    let matches = textEl.matchAll(pattern);

    let result = [];
    for (let match of matches) {
        let current = match.groups.word;
        result.push(current);
    }
    return result.join('; ');  
}
