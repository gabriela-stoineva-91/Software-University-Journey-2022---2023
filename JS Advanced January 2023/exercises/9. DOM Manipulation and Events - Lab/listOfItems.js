function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;
    let parentElement = document.getElementById('items');
    let newLiElement = document.createElement('li');

    newLiElement.textContent = inputText;
    parentElement.appendChild(newLiElement);
}