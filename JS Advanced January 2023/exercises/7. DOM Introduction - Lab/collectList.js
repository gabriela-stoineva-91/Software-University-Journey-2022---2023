function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
     let textArea = document.querySelector("#result");
     for (let node of itemNodes) {
         textArea.value += node.textContent + "\n";
     }
 }

 //second solution
//  function extractText() {
//     let textElement = document.getElementById('items');
//     let text = textElement.textContent;

//     let resultElement = document.getElementById('result');
//     resultElement.textContent = text;
// }