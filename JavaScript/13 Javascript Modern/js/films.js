// const movie = require("./data");

function getAllDirectors(peliculas) {
    let result = [];
    result = peliculas.map(movie =>{
        return movie.director;
    });
    console.table(result);
}


// result = peliculas.map(function director(movie){
    // return movie.director
// })
// console.table(result);