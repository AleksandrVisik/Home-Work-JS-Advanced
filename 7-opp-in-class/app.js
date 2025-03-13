"use strict"

class Hero {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    talk() {
        console.log(`Язык: ${this.language}, Имя: ${this.name}`);
    }
}

class Ork extends Hero {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    strike() {
        console.log(`${this.race} ${this.name} наносит удар оружием - ${this.weapon}`);
    }
    talk() {
        console.log(`Я сильнейший орк по имени ${this.name}`)
    }
}

class Elf extends Hero {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }
    createSpell() {
        console.log(`${this.race} ${this.name} произносит заклинание - ${this.spell}`)
    }
    talk() {
        console.log(`Я эльф по имени ${this.name}`)
    }
}

const ork = new Ork("Орк", "Гришнакх", "Орочий", "Чоппа");
const elf = new Elf("Эльф", "Тата", "Эльфийский", "Зов отчаяния");
ork.talk();
ork.strike();

elf.talk();
elf.createSpell();
