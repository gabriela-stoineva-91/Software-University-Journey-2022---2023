function makeListOfSong(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time
        }
    }

    let songs = [];
    let numSongs = Number(input.shift());
    let typeOfSong = input.pop();


    for (let i = 0; i < numSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song (type, name, time);
        songs.push(song)
        //console.table(songs)

    }
    if (typeOfSong === 'all') {
        songs.forEach((a) => {
            console.log(a.name) });
    } else {
        let filteredList = songs.filter((b) => b.type === typeOfSong);
        filteredList.forEach(a => console.log(a.name))
    }

}
makeListOfSong([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])