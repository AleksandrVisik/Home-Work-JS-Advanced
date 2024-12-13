"use strict"

const Hero = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Hero.prototype.talk = function () {
    console.log(`Язык: ${this.language}, Имя: ${this.name}`);
}

const Ork = function (race, name, language, weapon) {
    Hero.call(this, race, name, language);
    this.weapon = weapon;
}

Ork.prototype = new Object(Hero.prototype);
Ork.prototype.strike = function () {
    console.log(`${this.race} ${this.name} наносит удар оружием - ${this.weapon}`);
}

const Elf = function (race, name, language, spell) {
    Hero.call(this, race, name, language);
    this.spell = spell;
}

Elf.prototype = new Object(Hero.prototype);
Elf.prototype.createSpell = function () {
    console.log(`${this.race} ${this.name} произносит заклинание - ${this.spell}`);
}

const ork = new Ork("Орк", "Гришнакх", "Орочий", "Чоппа");
const elf = new Elf("Эльф", "Тата", "Эльфийский", "Зов отчаяния");
ork.talk();
ork.strike();

elf.talk();
elf.createSpell();
