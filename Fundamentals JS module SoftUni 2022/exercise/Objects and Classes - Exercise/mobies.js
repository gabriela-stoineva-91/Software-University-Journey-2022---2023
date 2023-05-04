function movieDescription(array) {

    let allMovies = [];

    array.forEach(currentLine => {
        if (currentLine.includes('addMovie ')) {
            let name = currentLine.split('addMovie ')[1];
            let movie = {}
            movie.name = name
            allMovies.push(movie)
            
        } else if (currentLine.includes(' directedBy ')) {
            let [name, director] = currentLine.split(' directedBy ')
            let movie = allMovies.find(el => el.name === name);
            if (movie) {
                movie.director = director
            }
        } else if (currentLine.includes(' onDate ')) {
            let [name, date] = currentLine.split(' onDate ');
            let movie = allMovies.find(el => el.name === name);
            if (movie) {
                movie.date = date;
            }
        }

    });
    allMovies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    })

}
movieDescription([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])