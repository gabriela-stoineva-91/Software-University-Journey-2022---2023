function loadingBar(num) {
    
    let repeatTimePercent = num / 10;
    let repeatTimeDots = 10 - repeatTimePercent
    let percentToPrint = '%'.repeat(repeatTimePercent);
    let dotsToPrint = '.'.repeat(repeatTimeDots);
    
    console.log(`${num}% [${percentToPrint}${dotsToPrint}]
    Still loading...`)
    //console.log(percentToPrint)
    
}