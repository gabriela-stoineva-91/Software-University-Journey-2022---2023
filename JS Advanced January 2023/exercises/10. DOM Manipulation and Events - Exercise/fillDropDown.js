function addItem() {
    let newOptionTextEl = document.getElementById('newItemText').value;
    let newOptionValueEl = document.getElementById('newItemValue').value;

    let parentElement = document.getElementById('menu');
    let newElement = document.createElement('option');
    newElement.textContent = newOptionTextEl;
    newElement.value = newOptionValueEl;

    parentElement.appendChild(newElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}