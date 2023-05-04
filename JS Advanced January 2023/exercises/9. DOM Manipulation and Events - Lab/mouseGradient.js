function attachGradientEvents() {
    let mouseFieldElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    
    const mouseGradientHandler = function(e) {
      let percent = Math.floor(e.offsetX / 300 * 100);
      resultElement.textContent = `${percent}%`
    };
    
    mouseFieldElement.addEventListener('mousemove', mouseGradientHandler);
}