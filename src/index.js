import './style/style.scss';
import {Game} from './game'

const body = document.getElementById("body")
body.classList.add('body')

new Game()

export {body}