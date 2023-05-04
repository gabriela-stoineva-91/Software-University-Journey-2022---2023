function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let allRowInfoElements = document.querySelectorAll('.container tr');
    let inputElement = document.getElementById('searchField');

    function onClick() {

        let searched = inputElement.value;

        for (let row1 of allRowInfoElements) {
            row1.classList.remove('select');
        }

        for (let row of allRowInfoElements) {
            if (row.innerText.includes(searched) && searched !== '') {
                row.className = 'select'
            }
            searched.value = '';
        }

    }
}