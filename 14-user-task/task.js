'use strict';
export class Task {
    #wrapper = document.querySelector('.wrapper');
    constructor(message) {
        this.message = message;
    }
    run() {
        // console.log(this.message);
        this.message.split('').forEach((char, i) => {
            setTimeout(() => {
                this.#wrapper.innerHTML += char;
            }, i * 100);
            setTimeout(() => {
                let lastIndex = this.#wrapper.innerHTML.length - 1;
                if (lastIndex >= 0) {
                    this.#wrapper.innerHTML = this.#wrapper.innerHTML.substring(0, lastIndex);
                }
            }, (this.message.length + i) * 100);
        }, this.message.length * 2 * 100 + 200);
    }
}