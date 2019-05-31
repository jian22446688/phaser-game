import 'phaser'
import '@babel/polyfill'

import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = 1024 - 200
const DEFAULT_HEIGHT = 768 - 200

const config = {
  title: 'mygame',
  backgroundColor: '#ffffff',
  // scale: {
  //   parent: 'phaser-game',
  //   mode: Phaser.Scale.FIT,
  //   autoCenter: Phaser.Scale.CENTER_BOTH,
  //   width: DEFAULT_WIDTH,
  //   height: DEFAULT_HEIGHT
  // },
  type: Phaser.AUTO,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  scene: [PreloadScene, MainScene],
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     debug: false,
  //     gravity: { y: 400 }
  //   }
  // }
}

window.addEventListener('load', () => {
  let game = new Phaser.Game(config)
})
