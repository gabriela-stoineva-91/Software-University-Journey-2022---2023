function addItem() {
    let inputElement = document.getElementById('newItemText');

    let parentToAddChildElement = document.getElementById('items');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    inputElement.value = '';

    let aElement = document.createElement('a')
    aElement.href = "#";
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });


    newElement.appendChild(aElement);
    parentToAddChildElement.appendChild(newElement);

}