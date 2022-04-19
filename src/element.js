class Element {
    x;
    y;
    node = document.createElement('div');
    isDead = false


    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.draw()
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

