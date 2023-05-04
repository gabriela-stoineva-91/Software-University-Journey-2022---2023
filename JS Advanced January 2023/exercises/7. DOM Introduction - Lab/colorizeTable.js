function colorize() {
    let toColorEl = document.querySelectorAll('table tr');

    let arr = Array.from(toColorEl);
    arr.forEach((el, i) => {
        if (i % 2 !== 0) {
            el.style.background = "teal";
        }  
    });
}