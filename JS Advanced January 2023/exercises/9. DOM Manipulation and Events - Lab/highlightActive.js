function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');

    for (let input of inputElements) {
        input.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.className = "focused";
        });
        input.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.className = "blur";
        })
    }
}