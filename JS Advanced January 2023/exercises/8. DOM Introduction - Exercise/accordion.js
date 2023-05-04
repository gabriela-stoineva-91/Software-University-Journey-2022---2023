function toggle() {
    let buttonElement = document.querySelector('span.button');
    let textToShowElement = document.querySelector('#extra');
  
    let buttonText = buttonElement.textContent;

    if (buttonText === 'More') {
        textToShowElement.style.display = 'block';
        buttonElement.textContent = 'Less';

    } else if (buttonText === 'Less') {
        textToShowElement.style.display = 'none';
        buttonElement.textContent = 'More';   
    }
}