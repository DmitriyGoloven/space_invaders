import {Element} from "./element";
import {body} from "./index";

class Shot extends Element{
    static speed = 12

    constructor(x, y) {
        super(x, y);
        this.node = this.crateShot()
        this.y = this.y -20
    }

    update(){
        this.y = this.y - Shot.speed
    }
    isOutOfScreen(){
        if (this.y < 15){return this.isOut = true }
    }
    crateShot() {
        const shoot = document.createElement('div')
        shoot.classList.add('shot')
        body.appendChild(shoot)
        return shoot
    }
}
export {Shot}

