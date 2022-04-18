import {Element} from "./element";


class Alien extends Element {

    static speed = 0.8

    constructor(x, y) {
        super(x, y, ['element', 'alien']);
    }

    update() {
        this.y = this.y + Alien.speed
    }

    isOutOfScreen() {
        if (this.y > 480) {
            return this.isOut = true
        }
    }
}

export {Alien}