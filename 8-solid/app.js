"use strict"
class Billing {
    #amount = 1;
    calculateTotal() {
        return this.#amount;
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        console.log(super.calculateTotal());
    }
}

class HourBilling extends Billing {
    constructor(hour) {
        super();
        this.hour = hour;
    }
    calculateTotal() {
        console.log(super.calculateTotal() * this.hour);
    }
}

class ItemBilling extends Billing {
    constructor(items) {
        super();
        this.items = items;
    }
    calculateTotal() {
        console.log(super.calculateTotal() * this.items.length);
    }
}

const items = ["Book", "Car", "Phone", "TV"];
const hour = new Date().getHours();

const fixBilling = new FixBilling();
const hourBiling = new HourBilling(hour);
const itemBiling = new ItemBilling(items);

fixBilling.calculateTotal();
hourBiling.calculateTotal();
itemBiling.calculateTotal()
