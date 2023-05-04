function create(words) {
    let parentElement = document.getElementById('content');

    for (let word of words) {
        let newDivElement = document.createElement('div');
        let newPElement = document.createElement('p');
        newPElement.textContent = word;
        newPElement.style.display = 'none';

        newDivElement.addEventListener('click', (e) => {
            e.currentTarget.querySelector('p').style.display = 'block';
            let allP = document.querySelectorAll('p');
            for (let p of allP) {
                if (p !== (e.currentTarget.querySelector('p'))) {
                    p.style.display = 'none';
                }
            }
        })

        newDivElement.appendChild(newPElement);
        parentElement.appendChild(newDivElement);

    }
}
//second solution
// function create(words) {
//     let parentElement = document.getElementById('content');
 
//     for (let word of words) {
//        let newDivElement = document.createElement('div');
//        let newPElement = document.createElement('p');
//        newPElement.textContent = word;
//        newPElement.style.display = 'none';
//        newDivElement.addEventListener('click', (e) => {
//           e.currentTarget.querySelector('p').style.display = 'block';
//          // let allPElement = document.querySelectorAll('p');
//        })
 
//        newDivElement.appendChild(newPElement);
//        parentElement.appendChild(newDivElement);
 
//     }
//  }