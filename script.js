'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 0, n = 1; i <= 2; i++, n++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${n}`);
        if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
            i--;
            n--;
        }
    }
}

function rememberMyFilms() {
    for(let i = 0; i < 2; ) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = +prompt('На сколько оцените его?', '');
        if(a.length > 50 || a.length === 0) {
            continue;
        } else {
             i++;
            personalMovieDB.movies[a] = b;
        }
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count > 9 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 29) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// start();
// showMyDB();
// rememberMyFilms();
// detectPersonalLevel();
writeYourGenres();
console.log(personalMovieDB.genres);


