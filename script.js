'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB(privat) {
        if(!privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        for(let i = 0, n = 1; i <= 2; i++, n++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${n}`);
            if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                i--;
                n--;
            }
        }
    },
    rememberMyFilms() {
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
    },
    detectPersonalLevel(filmCount) {
        if(filmCount < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if(filmCount > 9 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if(filmCount > 29) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    }
};


personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.ememberMyFilms();
personalMovieDB.detectPersonalLevel(personalMovieDB.count);
personalMovieDB.writeYourGenres();
console.log(personalMovieDB.genres);


