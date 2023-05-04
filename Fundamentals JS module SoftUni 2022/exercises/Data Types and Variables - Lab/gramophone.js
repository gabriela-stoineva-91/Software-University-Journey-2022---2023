function gramophone(aStr, bStr, cStr) {
    let nameOfTheBand = aStr;
    let nameOfTheAlbum = bStr;
    let songsName = cStr;
    
    let timeInSec = ((nameOfTheAlbum.length * nameOfTheBand.length) * songsName.length) / 2
    let repeatTimes = Math.ceil(timeInSec / 2.5)
    
    //(albumName.length * bandName.length) * song-name.length / 2
   
    console.log(`The plate was rotated ${repeatTimes} times.`)
}