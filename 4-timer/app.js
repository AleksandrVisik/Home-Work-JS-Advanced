
"use strict"

const dayTimer = document.querySelector(".timer");

function createLabel(number, index) {
    const labels = [
        ["месяц", "месяца", "месяцев"],
        ["день", "дня", "дней"],
        ["час", "часа", "часов"],
        ["минута", "минуты", "минут"],
        ["секунда", "секунды", "секунд"],
    ];
    const patternMap = new Map([
        ["one", 0],
        ["few", 1],
        ["many", 2],
    ]);
    const subIndex = patternMap.get(new Intl.PluralRules("ru-RU", { type: "cardinal" }).select(number));
    return labels[index][subIndex];
}

function getDayToNewYear() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, -1);
    const timeArray = [
        newYear.getMonth() - now.getMonth(),
        newYear.getDate() - now.getDate(),
        newYear.getHours() - now.getHours(),
        newYear.getMinutes() - now.getMinutes(),
        newYear.getSeconds() - now.getSeconds(),
    ];
    const timerText = [];
    timeArray.forEach((number, index) => {
        if (number !== 0) timerText.push(`${number} ${createLabel(number, index)}`);
    });
    return timerText.join(", ");
}

setInterval(() => {
    dayTimer.textContent = getDayToNewYear();
}, 1000);
