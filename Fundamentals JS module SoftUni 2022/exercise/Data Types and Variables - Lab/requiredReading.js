function reading(pages, pagesHour, days) {
    let currentBookPages = pages;
    let readPagesInOneHour = pagesHour;
    let numberOfDays = days;
    
    let allNeedOur = currentBookPages / readPagesInOneHour
    let oneDayReadCount = allNeedOur / numberOfDays
    
    console.log(oneDayReadCount)
    
}