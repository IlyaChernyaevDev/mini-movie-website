'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB(privat) {
        if(!privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres(genresArray) {
        for(let i = 0, n = 1; i <= 2; i++, n++) {
            genresArray[i] = prompt(`Ваш любимый жанр под номером ${n}`);
            if(genresArray[i] == '' || genresArray[i] == null) {
                i--;
                n--;
            }
        }
        genresArray.forEach((genre, index) => {
            console.log(`Любимый жанр #${++index} - это ${genre}`);
        });
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
    },
    toggleVisibleMyDB(privat) {
        privat === true ? this.privat = false : this.privat = true;
    }
};


personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.ememberMyFilms();
personalMovieDB.detectPersonalLevel(personalMovieDB.count);
personalMovieDB.writeYourGenres(personalMovieDB.genres);



