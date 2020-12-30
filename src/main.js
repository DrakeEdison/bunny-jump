import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import { banana } from './fruits.js'

console.log('Hello, World!')
console.log(banana.color)
console.dir(Phaser)

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: Game,
    physics: 
    {
        default: 'arcade',
        arcade: 
        {
            gravity: 
            {
                y: 200
            },
            debug: true
        }
    }
})