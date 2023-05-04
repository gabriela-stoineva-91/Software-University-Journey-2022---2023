function search() {
    let townsElementCollection = document.querySelectorAll('#towns li');
    let inputTextElement = document.getElementById('searchText');
    let resultElement = document.getElementById('result');

    let searchedText = inputTextElement.value;
    let counter = 0;

    for (let townInfo of townsElementCollection) {
      let current = townInfo.textContent;
      if (current.includes(searchedText)) {
         counter++;
         townInfo.style.fontWeight = 'bold';
         townInfo.style.textDecoration = 'underline';
         inputTextElement.value = '';
      } else {
         townInfo.style.fontWeight = 'normal';
         townInfo.style.textDecoration = 'none';
      }
    }
    resultElement.textContent = `${counter} matches found`;

}