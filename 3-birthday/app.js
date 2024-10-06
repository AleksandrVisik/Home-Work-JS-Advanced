"use strict"
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isValidBirthday(dateString) {
    const birthday = new Date(dateString).getTime();
    if (isNaN(birthday)) return "Неверная дата";
    const now = Date.now();
    return new Date(now - birthday).getFullYear() - 1970;
}

let iteration = 10;

while (iteration > 0) {
    const year = getRandom(1970, 2024).toString().padStart(2, 0);
    const month = getRandom(1, 12).toString().padStart(2, 0);
    const day = getRandom(1, 31).toString().padStart(2, 0);
    const date = `${year}-${month}-${day}`;
    const result = isValidBirthday(date);
    console.log({ date, year: result, isValid: result > 14 });
    iteration--;
}