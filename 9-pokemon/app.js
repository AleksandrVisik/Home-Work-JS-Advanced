"use strict"

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const { abilities } = JSON.parse(this.responseText);
    const { ability } = abilities[0]
    const { url } = ability

    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
        const { effect_entries } = JSON.parse(this.responseText);
        const { effect } = effect_entries.find(({ language }) => language.name === "en");
        console.log(effect)
    })
})








