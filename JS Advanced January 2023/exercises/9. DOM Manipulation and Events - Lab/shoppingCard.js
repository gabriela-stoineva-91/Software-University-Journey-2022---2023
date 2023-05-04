function solve() {
    let sum = 0;
    let list = [];

    let textAreaElement = document.querySelector('div textarea');
    let buttonCheckOutElement = document.querySelector('div .checkout');
    buttonCheckOutElement.addEventListener('click', check);

    let buttonAddElements = document.querySelectorAll('div .add-product');

    for (let button of buttonAddElements) {
        button.addEventListener('click', add);
    }
    function add(e) {
        let currentParentElement = e.currentTarget.parentElement.parentElement;
        let title = currentParentElement.querySelector('div .product-title').textContent;
        let price = Number(currentParentElement.querySelector('div .product-line-price').textContent);

        textAreaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;

        sum += price;
        
        if (!list.includes(title)) {
            list.push(title);
        }

    }
    function check() {
        textAreaElement.textContent += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`;
        for (let button of buttonAddElements) {
            button.disabled = true;
        };
        buttonCheckOutElement.disabled = true;
    }
}