import {Element} from "./element";

class Shot extends Element{
    static speed = 12

    constructor(x, y) {
        super(x, y, ['element', 'shot']);
    }

    update(){
        this.y = this.y - Shot.speed
    }
    isOutOfScreen(){
        if (this.y <10){return this.isOut = true }
    }
}
export {Shot}

