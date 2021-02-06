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

removeElements(banners);

