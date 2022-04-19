import {Element} from "./element";
import {Shot} from "./shot";
import {MOVE_LEFT, MOVE_RIGHT, MOVE_TOP, MOVE_BOTTOM} from "./game";
import {body} from "./index";

class Spaceship extends Element {
    lastShoot = null
    isDead = false

    constructor(x, y) {
        super(x, y);
        this.node = this.crateShip()
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

    shot() {
        const time = new Date().getTime()

        if (this.lastShoot && time - this.lastShoot < 500) {
            return null
        }

        this.lastShoot = time

        if (!this.isDead) {
            return new Shot(this.x, this.y)
        }
    }

    isOutOfScreen() {
        return this.isOut = false
    }

    crateShip() {

        const ship = document.createElement('div')
        ship.classList.add('square')
        const element1 = document.createElement('div')
        element1.classList.add('element1')
        const element2 = document.createElement('div')
        element2.classList.add('element2')
        const element3 = document.createElement('div')
        element3.classList.add('element3')
        const element4 = document.createElement('div')
        element4.classList.add('element4')
        ship.appendChild(element1)
        ship.appendChild(element2)
        ship.appendChild(element3)
        ship.appendChild(element4)
        body.appendChild(ship)
        return ship
    }
}

export {Spaceship}
