'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const promoBG = document.querySelector('.promo__bg'),
        banners = document.querySelectorAll('.promo__adv img'),
        genre = promoBG.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addMovieForm = document.querySelector('.add'),
        movieNameInput = addMovieForm.querySelector('.adding__input'),
        favoriteMovieCheckbox = addMovieForm.querySelector(`input[type='checkbox']`);

    const movieDB = {
        movies: [
            {name: "логан", favorite: false},
            {name: "лига справедливости", favorite: false},
            {name: "ла-ла лэнд", favorite: false},
            {name: "одержимость", favorite: false},
            {name: "скотт Пилигрим против...", favorite: false},
        ]
    };

    function MakeChanges() {
        promoBG.style.background = `url('img/bg.jpg')`;
        genre.textContent = 'ДРАМА';
    }

    function renderMovieList(movies, movieContainer) {
        movieContainer.innerHTML = '';
        sortMovieArray(movies);
        movies.forEach((movie, index) => {
            
            if(movie.favorite) {
                console.log(movie.favorite);
                movieContainer.innerHTML += `<li class="promo__interactive-item">
                                                <span></span>
                                                ${++index}. ${movie.name}
                                                <div class="delete"></div>
                                            </li>`;
            } else {
                movieContainer.innerHTML += `<li class="promo__interactive-item">
                                                ${++index}. ${movie.name}
                                                <div class="delete"></div>
                                            </li>`;
            }
        });
    }

    function removeElements([...elements]) {
        elements.forEach(element => element.remove());
    }

    function addNewMovie(event) {
        event.preventDefault();
        if(movieNameInput.value) {
            let favorite = isFavoriteMovie(favoriteMovieCheckbox);
            movieNameInput.value = checkLength(movieNameInput.value).toLowerCase();
            movieDB.movies.push({name: movieNameInput.value, favorite: favorite});
            renderMovieList(movieDB.movies, movieList);
        }
        event.target.reset();

    }

    function checkLength(str) {
        return str.length > 21 ? `${str.slice(0, 21)}...` : str;
    }

    function deleteMovieFromList(event) {
        if(event.target && event.target.matches('div.delete')) {
            let listElement = event.target.closest('li');
            movieDB.movies = deleteArrayElement(movieDB.movies, listElement.textContent.trim()[0] - 1);
            listElement.remove();
            renderMovieList(movieDB.movies, movieList);
        }
    }

    function isFavoriteMovie(checkbox) {
        return checkbox.checked ? true : false;
    }

    function deleteArrayElement(array, elementIndex) {
        return array.filter((item, index) => {
            if(index != elementIndex) return item;
        });
    }

    function sortMovieArray(array) {
        array.sort(function(a, b) {
            if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
      
              return 0;
        });
    }

    addMovieForm.addEventListener('submit', addNewMovie);
    movieList.addEventListener('click', deleteMovieFromList);

    MakeChanges();
    removeElements(banners);
    renderMovieList(movieDB.movies, movieList);
});
