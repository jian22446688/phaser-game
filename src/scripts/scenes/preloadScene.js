export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.audio('au_btns', 'assets/audio/btns.mp3')
    this.load.audio('au_greatwork', 'assets/audio/GreatWork.wav')
    let daijiarr = []
    for (let i = 0; i < 50; i++) {
      if (i + 1 < 10) {
        daijiarr.push('assets/admin/daiji/未命名-1000' + (i + 1) + '.png')
      }else {
        daijiarr.push('assets/admin/daiji/未命名-100' + (i + 1) + '.png')
      }
    }
    this.load.spritesheet('admin_daiji', daijiarr, {
      frameWidth: 600,
      frameHeight: 700
    })
    
  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
