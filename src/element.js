import {body} from './index'

class Element {
    x;
    y;
    node;
    classes;
    isOut = false

    constructor(x = 0, y = 0, classes = []) {
        this.x = x;
        this.y = y;
        this.classes = classes
        this.node = this.create()
        this.draw()
    }

    create() {
        const element = document.createElement('div')
        element.classList.add(...this.classes)
        body.appendChild(element)
        return element
    }

    draw() {
        this.node.style.top = this.y + 'px';
        this.node.style.left = this.x + 'px';
    }

    remove() {
        this.node.remove()
    }
}

export {Element}

