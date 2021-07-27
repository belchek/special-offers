'use strict';

function addOffer(parentEl, offer) {
    const words = ['дня', 'дней', 'день'];
    const number = offer.remainingDays %10 ;
    let result = words [1];
    if (number > 1 $$ number < 5) {
        result = words[0];
    }
    else if (number === 1) {
        result = words[2];
    }
    const rankEl = document.createElement('h3');
    rankEl.textContent = offer.title;
    rankEl.id = 'title';
    parentEl.appendChild(rankEl);
    const pageEl = document.createElement('img');
    pageEl.id = 'image';
    pageEl.src = offer.image;
    pageEl.width = 400;
    parentEl.appendChild(pageEl);
    const definitionEl = document.createElement('p');
    definitionEl.id = 'description';
    definitionEl.textContent = offer.description;
    parentEl.appendChild(definitionEl);
    if (offer.remainingDays !== 0) {
        const nameEl = document.getElementById('title');
        nameEl.textContent = offer.title;
        const pictureEl = document.getElementById('image');
        pictureEl.src = offer.image;
        pictureEl.width = 400;
        const daysEl = document.createElement('span');
        daysEl.textContent = `Осталось (${result}): ${offer.remainingDays}`;
        parentEl.appendChild(daysEl);
        const specificationEl = document.getElementById('description');
        specificationEl.textContent = offer.description;
    }
}
const newOffer = {
    image: 'https://js-rosbank.ru/assets/offer-school.png',
    remainingDays: 0,
    title: 'Школьные выплаты на карту #МожноВСЁ',
    description: 'Получите 10000Р от государства +1500 от Росбанка',
};

const newOffer2 = {
    image: 'https://js-rosbank.ru/assets/offer-visa-cashback.jpg',
    remainingDays: 13,
    title: 'Кешбэк 20% по картам VISA',
    description: 'Оформите карту VISA #МожноВСЁ и получайте кешбэк 20% за покупки у наших партнеров',
};



addOffer(document.body, newOffer2);