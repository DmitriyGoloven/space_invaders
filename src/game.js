import {Spaceship} from "./spaceShip";
import {Alien} from "./aliens";

const MOVE_LEFT = 'MOVE_LEFT'
const MOVE_RIGHT = 'MOVE_RIGHT'
const MOVE_TOP = 'MOVE_TOP'
const MOVE_BOTTOM = 'MOVE_BOTTOM'

class Game {
    elements = []

    constructor() {
        this.elements.push(new Spaceship(15, 470));
        this.addAliens(4500)
        this.addEvents()
        this.drawLoop()
        this.updateLoop()

    }

    drawLoop() {
        setInterval(() => {
            this.elements.forEach((element) => {
                element.draw()
            })
        }, 1000 / 60)
    }

    updateLoop() {
        setInterval(() => {

            for (let i = this.elements.length - 1; i >= 0; i--) {
                const element = this.elements[i]

                if (element.isOutOfScreen()) {
                    element.remove()
                    this.elements.splice(i, 1);
                    continue
                }
                if (element instanceof Spaceship) {
                    const shot = element.shot()
                    shot && this.elements.push(shot)
                }

                element.update && element.update()
            }
        }, 50)
    }

    moveElements(move) {
        for (let i = this.elements.length - 1; i >= 0; i--) {
            const element = this.elements[i]
            element.move && element.move(move)
        }
    }

    addEvents() {
        document.addEventListener('keypress', (e) => {
            switch (e.key) {
                case '8':
                    this.moveElements(MOVE_TOP);
                    break
                case '2':
                    this.moveElements(MOVE_BOTTOM);
                    break
                case '4':
                    this.moveElements(MOVE_LEFT);
                    break
                case '6':
                    this.moveElements(MOVE_RIGHT);
                    break

            }
        })
    }

    addAliens(time) {
        setTimeout(()=>{clearInterval(aliens)},15000)
       const aliens =  setInterval(() => {
            this.elements.push(new Alien(35, 10));
            this.elements.push(new Alien(135, 10));
            this.elements.push(new Alien(235, 10));
            this.elements.push(new Alien(335, 10));
            this.elements.push(new Alien(435, 10));
            this.elements.push(new Alien(535, 10));
            this.elements.push(new Alien(635, 10));
            console.log(this.elements)
        }, time)
    }


}

export {Game}
export {MOVE_RIGHT, MOVE_TOP, MOVE_LEFT, MOVE_BOTTOM}