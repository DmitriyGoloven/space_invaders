import {Spaceship} from "./spaceShip";
import {Alien} from "./aliens";
import {Shot} from "./shot"
import {body} from "./index";

const MOVE_LEFT = 'MOVE_LEFT'
const MOVE_RIGHT = 'MOVE_RIGHT'
const MOVE_TOP = 'MOVE_TOP'
const MOVE_BOTTOM = 'MOVE_BOTTOM'

class Game {
    elements = []

    constructor() {
        this.elements.push(new Spaceship(70, 470));
        this.addAliens(4500)
        this.addEvents()
        this.drawLoop()
        this.updateLoop()
        this.result()
    }

    drawLoop() {
        setInterval(() => {
            this.elements.forEach((element) => {
                element.draw()
            })
        }, 1000 / 50)
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

            this.collision()
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
                case '5':
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
        setTimeout(() => {
            clearInterval(aliens)
        }, 15000)
        const aliens = setInterval(() => {
            this.elements.push(new Alien(30, 10));
            this.elements.push(new Alien(130, 10));
            this.elements.push(new Alien(230, 10));
            this.elements.push(new Alien(330, 10));
            this.elements.push(new Alien(430, 10));
            this.elements.push(new Alien(530, 10));
            this.elements.push(new Alien(630, 10));
        }, time)
    }

    collision() {
        let shots = [];
        let aliens = [];
        let spaceship;
        this.elements.forEach((element) => {

            if (element instanceof Alien && !element.isDead) {
                aliens.push(element)
            }
            if (element instanceof Shot && !element.isDead) {
                shots.push(element)
            }
            if (element instanceof Spaceship && !element.isDead) {
                spaceship = element
            }

            shots.forEach((shot) => {
                aliens.forEach((alien) => {

                    let touchOnX = spaceship.x >= alien.x - 30 && spaceship.x <= alien.x + 30
                    let touchOnY = spaceship.y >= alien.y && spaceship.y <= alien.y + 60

                    if (touchOnX && touchOnY) {
                        spaceship.remove()
                        spaceship.isDead = true
                    }

                    let hitOnX = shot.x >= alien.x - 30 && shot.x <= alien.x + 30
                    let hitOnY = shot.y >= alien.y && shot.y <= alien.y + 60

                    if (hitOnY && hitOnX) {
                        alien.remove()
                        alien.isDead = true
                        shot.remove()
                        shot.isDead = true
                    }
                })
            })
        })
    }

    result() {
        setTimeout(() => {
            let info = setInterval(() => {

                let ship = this.elements.filter(element => element instanceof Spaceship)
                if (ship[0].isDead) {
                    this.elements.forEach((element) => {
                        element.remove()
                    })
                    this.resultWindow("The END")
                    clearInterval(info)
                }

                let aliens = this.elements.filter(element => element instanceof Alien && !element.isDead)
                if (aliens.length === 0) {
                    clearInterval(info)
                    this.resultWindow("YOU WIN!!!")
                }
                aliens.forEach((alien) => {
                    if (alien.y > 450) {
                        clearInterval(info)
                        this.elements.forEach((element) => {
                            element.remove()
                        })
                        this.resultWindow("The END")

                    }
                })

            }, 500)
        }, 5000)
    }

    resultWindow(end) {
        const result = document.createElement('div')
        result.classList.add('result')
        result.textContent = end
        body.appendChild(result)
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }
}

export {Game}
export {MOVE_RIGHT, MOVE_TOP, MOVE_LEFT, MOVE_BOTTOM}