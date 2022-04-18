import {Element} from "./element";
import {body} from "./index";


class Alien extends Element {

    static speed = 0.8
    
    constructor(x, y) {
        super(x, y);
        this.node = this.crateAlien()
    }

    update() {
        this.y = this.y + Alien.speed
    }

    isOutOfScreen() {
        if (this.y > 455) {
            return this.isOut = true
        }
    }


    crateAlien() {
        const alien = document.createElement('div')
        alien.classList.add('alien')
        const alien1 = document.createElement('div')
        alien1.classList.add('alien1')
        const alien2 = document.createElement('div')
        alien2.classList.add('alien2')
        const alien3 = document.createElement('div')
        alien3.classList.add('alien3')
        const alien4 = document.createElement('div')
        alien4.classList.add('alien4')
        const alien5 = document.createElement('div')
        alien5.classList.add('alien5')
        const alien6 = document.createElement('div')
        alien6.classList.add('alien6')


        alien.appendChild(alien1)
        alien.appendChild(alien2)
        alien.appendChild(alien3)
        alien.appendChild(alien4)
        alien.appendChild(alien5)
        alien.appendChild(alien6)
        body.appendChild(alien)
        return alien
    }

}

export {Alien}