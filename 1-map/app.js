"use strict";

const array = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];
const nameSet = new Set(array.map((el) => array.find((item) => el.id === item.id)));
console.log(array);
console.log(nameSet);
console.log([...nameSet])