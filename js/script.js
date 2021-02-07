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

promoBG.style.background = `url('img/bg.jpg')`;
genre.textContent = 'ДРАМА';

function renderMovieList() {
    movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((movie, index) => {
        movieList.innerHTML += `<li class="promo__interactive-item">
                                    ${++index}. ${movie}
                                    <div class="delete"></div>
                                </li>`;
    });
}

function removeElements([...elements]) {
    elements.forEach(element => element.remove());
}

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isFavoriteMovie(favoriteMovieCheckbox);
    movieDB.movies.push(checkLength(movieNameInput.value));
    resetForm();
    renderMovieList();
});

function checkLength(str) {
    return str.length > 21 ? `${str.slice(0, 21)}...` : str;
}

movieList.addEventListener('click', e => {
    let listElement = e.target.closest('li');
    console.log(listElement.textContent.trim()[0]);
    movieDB.movies = deleteArrayElement(movieDB.movies, listElement.textContent.trim()[0] - 1);
    listElement.remove();
    renderMovieList();
});

function resetForm() {
    movieNameInput.value = '';
    favoriteMovieCheckbox.checked = false;
}

function isFavoriteMovie(checkbox) {
    if(checkbox.checked) console.log('Сделать любимым');
}

function deleteArrayElement(array, elementIndex) {
    return array.filter((item, index) => {
        if(index != elementIndex) return item;
    });
}

removeElements(banners);
renderMovieList();