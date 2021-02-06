'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoBG = document.querySelector('.promo__bg');
const banners = document.querySelectorAll('.promo__adv img');
const genre = promoBG.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const addMovieForm = document.querySelector('.add');
const movieNameInput = document.querySelector('.adding__input');
const favoriteMovieCheckbox = document.querySelector(`input[type='checkbox']`);

movieList.innerHTML = '';

promoBG.style.background = `url('img/bg.jpg')`;
genre.textContent = 'ДРАМА';

movieDB.movies.sort();
movieDB.movies.forEach((movie, index) => {
    movieList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">
                                                    ${++index}. ${movie}
                                                    <div class="delete"></div>
                                                </li>`);
});

function removeElements([...elements]) {
    elements.forEach(element => element.remove());
}
addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isFavoriteMovie(favoriteMovieCheckbox);
    movieDB.movies.push(checkLength(movieNameInput.value));
    movieNameInput.value = '';
    favoriteMovieCheckbox.checked = false;
});
removeElements(banners);

function checkLength(str) {
    return str.length > 21 ? `${str.slice(0, 21)}...` : str;
}

movieList.addEventListener('click', e => {
    e.target.closest('li').remove();
});


function isFavoriteMovie(checkbox) {
    checkbox.checked === true ? console.log('Сделать любимым') : '' ;
}
