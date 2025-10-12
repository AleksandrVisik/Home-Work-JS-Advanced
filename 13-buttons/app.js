"use strict";

const elements = {
    buttons: document.querySelector('.wrapper__buttons'),
    count: document.querySelector('.wrapper__count'),
    reset: document.querySelector('.button__reset'),
};
elements.reset.addEventListener('click', (e) => {
    elements.count.innerHTML = 0;
    [...elements.buttons.children].forEach((button) => {
        button.innerHTML = 'Нажми меня';
        button.classList.remove('active');
    });
});

elements.buttons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    const currentCount = Number(elements.count.innerHTML);
    elements.count.innerHTML = currentCount + 1;
    [...elements.buttons.children].forEach((button) => {
        if (button === event.target) {
            button.innerHTML = 'Нажата!';
            button.classList.add('active');
        } else {
            button.innerHTML = 'Нажми меня';
            button.classList.remove('active');
        }
    });
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON') e.target.classList.toggle('focus');
});
document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON') e.target.classList.toggle('focus');
});


