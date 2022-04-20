class Element {
    x;
    y;
    node = document.createElement('div');
    isDead = false
    isOut = false


    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

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

