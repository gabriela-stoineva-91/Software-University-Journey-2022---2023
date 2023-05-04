function lockedProfile() {

    let buttonElements = document.querySelectorAll('button');

    for (let button of buttonElements) {

        button.addEventListener('click', onClick);
        
        function onClick(e){
            let profileDivElement = e.currentTarget.parentElement;
            let personUnlockRadioElement = profileDivElement.querySelector('input[value="unlock"]')//.checked;
            let divElement = profileDivElement.querySelector('div');

            if (personUnlockRadioElement.checked === true) {
                if (e.currentTarget.textContent === 'Show more') {
                    e.currentTarget.textContent = 'Hide it';
                    divElement.style.display = 'block';
                } else if (e.currentTarget.textContent === 'Hide it') {
                    e.currentTarget.textContent = 'Show more';
                    divElement.style.display = 'none';
                }
            }
        };
    }
}

