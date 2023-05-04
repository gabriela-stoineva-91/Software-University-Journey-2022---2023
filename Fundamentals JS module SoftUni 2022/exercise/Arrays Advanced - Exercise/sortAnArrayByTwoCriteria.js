function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(element => console.log(element))

}