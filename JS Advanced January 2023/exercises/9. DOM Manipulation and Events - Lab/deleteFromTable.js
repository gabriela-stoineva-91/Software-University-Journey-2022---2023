function deleteByEmail() {

    let tableElements = document.querySelectorAll('#customers tr');
    let resultElement = document.getElementById('result');
    let inputEmailElement = document.querySelector('input[name="email"]');
    
    let inputMatchValue = inputEmailElement.value;
    
    for (let el of tableElements) {
        if (el.textContent.includes(inputMatchValue)) {
         el.remove();
         resultElement.textContent = 'Deleted.';
        } else {
        resultElement.textContent = 'Not found.'
        }
        inputEmailElement.value = '';
    }
    
}