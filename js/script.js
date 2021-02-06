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

promoBG.style.background = `url('img/bg.jpg') center center/cover no-repeat`;
genre.textContent = 'ДРАМА';

function removeElements([...elements]) {
    elements.forEach(element => element.remove());
}

removeElements(banners);

