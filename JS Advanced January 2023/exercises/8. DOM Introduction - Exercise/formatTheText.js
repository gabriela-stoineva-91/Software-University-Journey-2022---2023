function solve() {
    
    let inputTextElement = document.getElementById('input');
    let resultOutputElement = document.getElementById('output');

    let sentences = inputTextElement.value.split('.').filter(s => s !== '');

    while (sentences.length > 0) {
        let currentSent = sentences.splice(0, 3).join('. ') + '.';

        let par = document.createElement('p');
        par.textContent = currentSent;
        resultOutputElement.appendChild(par);
    }
}