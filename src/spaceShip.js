import {Element} from "./element";
import {Shot} from "./shoot";
import {MOVE_LEFT, MOVE_RIGHT, MOVE_TOP, MOVE_BOTTOM} from "./game";

class Spaceship extends Element {
    lastShoot = null

    constructor(x, y) {
        super(x, y, ['element', 'square']);
        this.crateShip()
    }

    move(direction) {
        switch (direction) {
            case MOVE_LEFT:
                this.x = this.x - 10
                break
            case MOVE_RIGHT:
                this.x = this.x + 10
                break
            case MOVE_TOP:
                this.y = this.y - 10
                break
            case MOVE_BOTTOM:
                this.y = this.y + 10
                break
        }
    }

    shoot() {
        const time = new Date().getTime()

        if (this.lastShoot && time - this.lastShoot < 400) {
            return null
        }

        this.lastShoot = time
        return new Shot(this.x, this.y)
    }

    isOutOfScreen() {
        return this.isOut = false
    }

    crateShip() {

        const ship = document.querySelector('div')
        const element1 = document.createElement('div')
        element1.classList.add('element1')
        const element2 = document.createElement('div')
        element2.classList.add('element2')
        const element3 = document.createElement('div')
        element3.classList.add('element3')
        ship.appendChild(element1)
        ship.appendChild(element2)
        ship.appendChild(element3)
    }
}

export {Spaceship}
