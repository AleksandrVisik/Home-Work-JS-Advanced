"use strict"

function getData(url, errorMessage, method = "GET") {
    return fetch(url, { method })
        .then(responce => {
            if (!responce.ok) {
                throw new Error(`${errorMessage} ${responce.status}`)
            }
            return responce.json();
        })
}

getData("https://pokeapi.co/api/v2/pokemon/ditto", "Ошибка")
    .then(data => {
        console.log(data);
        return getData("https://pokeapi.co/api/v2/pokemon/ditto")
    })
    .then(({ abilities }) => {
        const url = abilities[0].ability.url
        return getData(url)
    })
    .then(({ effect_entries }) => {
        const { effect } = effect_entries.find(({ language }) => language.name === "en");
        console.log(effect)
    })
    .catch(error => console.log(error.message))
    .finally(() => console.log('FINALLY'));










