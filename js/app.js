'use strict';

function convertToDaysString(offer) {
    const speechForRemainingDays = ['дня', 'дней', 'день'];
    const numeralToDays = offer.remainingDays % 100;
    let resultToDaysString = speechForRemainingDays [1];
    const numeralForFunction = numeralToDays % 10;
    const minRange = 5;
    const maxRange = 20;
    if (numeralToDays >= minRange && numeralToDays <= maxRange) {
        resultToDaysString = speechForRemainingDays[1];
    } else if (numeralToDays) {
        switch (numeralForFunction) {
            case (1):
                resultToDaysString = speechForRemainingDays[2];
                break;
            case (2):
                resultToDaysString = speechForRemainingDays[0];
                break;
            case (3):
                resultToDaysString = speechForRemainingDays[0];
                break;
            case (4):
                resultToDaysString = speechForRemainingDays[0];
                break;
        }
    }
    return resultToDaysString;
}

function addOffer(parentEl, offer) {

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
        daysEl.textContent = `${offer.remainingDays} ${convertToDaysString(offer)}`;
        parentEl.appendChild(daysEl);
        const specificationEl = document.getElementById('description');
        specificationEl.textContent = offer.description;
    }
}

const offer = {
    image: 'https://js-rosbank.ru/assets/offer-school.png',
    remainingDays: 0,
    title: 'Школьные выплаты на карту #МожноВСЁ',
    description: 'Получите 10000Р от государства +1500 от Росбанка',
};

// const newOffer2 = {
//     image: 'https://js-rosbank.ru/assets/offer-visa-cashback.jpg',
//     remainingDays: 21,
//     title: 'Кешбэк 20% по картам VISA',
//     description: 'Оформите карту VISA #МожноВСЁ и получайте кешбэк 20% за покупки у наших партнеров',
// };

addOffer(document.body, offer);