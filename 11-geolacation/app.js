"use strict"

function geolocalionPromise() {
    return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
            reject(new Error('Такого API на клиенте нет'));
        }
        navigator.geolocation.getCurrentPosition(position => resolve(position));
    });
}
geolocalionPromise()
    .then(({ coords }) => {
        console.log(`Ваши коордитнаты
широта: ${coords.latitude} 
долгота: ${coords.longitude}`);
    })
    .catch((err) => {
        console.error(`Ошибка: ${err}`);
    });








