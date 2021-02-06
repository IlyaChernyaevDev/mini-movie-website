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
const commercialBlock = document.querySelector('.promo__adv');
const banners = commercialBlock.querySelectorAll('img');
const genre = promoBG.querySelector('.promo__genre');
const filmsArray = document.querySelectorAll('.promo__interactive-item');

promoBG.style.background = `url('img/bg.jpg') center center/cover no-repeat`;
genre.textContent = 'ДРАМА';

movieDB.movies.sort();
filmsArray.forEach((item, index) => {
    item.textContent = `${++index}. ${movieDB.movies[--index]}`;
});

function removeElements([...elements]) {
    elements.forEach(element => element.remove());
}

removeElements(banners);

