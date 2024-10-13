"use strict"
const acceptDices = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function errorMessage(dice) {
    if (!acceptDices.includes(dice)) {
        return `Игральная кость ${dice} не подходит для игры. Доступные значения: [${acceptDices.join(", ")}]`;
    }
    return null;
}

function getRandomDice(dice, fn) {
    const error = errorMessage(dice);
    if (error) return error;
    const max = fn(dice);
    return { dice, num: Math.floor(Math.random() * max + 1) };
}

function consoleRandomResult(fn) {
    console.log(getRandomDice("d1", fn));
    console.log(getRandomDice("d2", fn));
    console.log(getRandomDice("d4", fn));
    console.log(getRandomDice("d6", fn));
    console.log(getRandomDice("d8", fn));
    console.log(getRandomDice("d10", fn));
    console.log(getRandomDice("d12", fn));
    const iteration = getRandom(1, 20);
    const diceRollArray = [];
    for (let i = 0; i < iteration; i++) {
        const result = getRandomDice("d" + getRandom(1, 20), fn);
        if (result) diceRollArray.push(result);
    }
    const diceMap = new Map([["iteration", iteration]]);
    const diceSet = new Set(diceRollArray.filter((fl) => fl?.dice).map((item) => diceRollArray.find((x) => x.dice === item.dice).dice));
    for (const dice of diceSet) {
        const diceRolls = diceRollArray.filter((fl) => fl.dice === dice).map((dice) => dice.num);
        diceMap.set(dice, diceRolls);
    }
}
function getMaxPattern(dice) {
    const pattern = new RegExp("\\d+", "g");
    return Number.parseInt(dice.match(pattern));
}
consoleRandomResult(getMaxPattern);