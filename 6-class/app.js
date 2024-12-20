"use strict"

class Car {
    #_brand;
    #_model;
    #_mileage;

    constructor(brand, model, mileage) {
        this.#_brand = brand;
        this.#_model = model;
        this.#mileage = mileage;
    }

    get #mileage() {
        return this.#_mileage;
    }

    set #mileage(value) {
        this.#_mileage = value;
    }

    #checkMileage(value) {
        return this.#mileage === value;
    }

    changeMileage(value) {
        if (this.#checkMileage(value)) {
            console.log(`Введите другой пробег отличный от ${this.#mileage}`);
            return false;
        }

        console.log(`Пробег ${this.#mileage} изменен на ${value}`);
        this.#_mileage = value;
        return true;
    }
    info() {
        console.log(`Марка: ${this.#_brand}, 
Модель: ${this.#_model},
Пробег: ${this.#mileage}.`);
    }
}

const car1 = new Car("Lada", "Vesta", 10000);
car1.info();
car1.changeMileage(10000);
car1.changeMileage(2500);

const car2 = new Car("AUDI", "Q5", 1500);
car2.info();
car2.changeMileage(5000);
car2.changeMileage(5000);