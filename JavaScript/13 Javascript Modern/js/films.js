// const movies = require("./data");

const movies = require("./data");

function getAllDirectors(peliculas) {
    let result = [];
    result = peliculas.map(movie =>{
        return movie.director;
    });
    console.table(result);
}

function getMoviesFromDirector(director) {
    const films = movies.filter(ele => ele.director === director);
    console.table(films);
    return films;
   
}

function pelisAverage(director){
const filmsByDirector = movies.filter(movie => movie.director == director);
// console.log("director: " + director);
// console.log(filmsByDirector);

const scores = filmsByDirector.reduce((contador, filmsByDirector) =>{
    // console.log("film: " + filmsByDirector.title + "score: " + filmsByDirector.score);
    return contador + filmsByDirector.score;
}, 0).toFixed(2); /*  / filmsByDirector.length; (resumeix la linia 31 i 31)*/ 
console.log(scores);

// Una altre forma de fer la mitja (per a que me la fagi bé tinc que borrar / filmsByDirector.length; de la linia 26)

const mitja = parseFloat(scores / (filmsByDirector.length)).toFixed(2);
console.log("La suma de las scores del director es: " + scores + " La mitja es: " +  mitja);

}

// 4. Ara implementaràs la lògica per a ordenar les pel·lícules, part fonamental en qualsevol eina
// de visualització de dades.
// En aquest apartat, hauràs de crear una funció, que rebent un array de pel·lícules, el retorni
// ordenat alfabèticament per títol. Només s'han de retornar les 20 primeres pel·lícules
// ordenades.. (amb el sort)

function orderAlphabetically() {
    movies.sort(function (a,b){
        if (a.title < b.title) {
            return 1;
        }
        else if (a.title > b.title){
            return -1;
        } else{
            return 0;
        }
    });
    const vintPrimers = movies.slice(0, 240);
    console.table(vintPrimers);
    return vintPrimers;
}