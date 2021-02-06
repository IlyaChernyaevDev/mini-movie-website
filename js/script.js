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
const commercialBlock = document.querySelector('.promo__adv');
const banners = commercialBlock.querySelectorAll('img');

function removeElements([...elements]) {
    elements.forEach(element => element.remove());
}

removeElements(banners);

