import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    // let sprite = this.add.image(100, 100, 'admin_daiji')
    let player = this.add.sprite(100,450,'admin_daiji').setScale(.5)   
    console.log(player.anims)

    let dajian = this.anims.create({
      key : 'daiji',
      frames : this.anims.generateFrameNumbers('admin_daiji',{start : 0,end : 30}),
      frameRate : 24,
      repeat : -1
    })
      

    this.anims.create({
      key : 'turn',
      frames : [{key : 'admin_daiji',frame : 4}],
      frameRate : 20
    })


    player.anims.play('daiji')
    
    
    // sprite.animations.play('daiji', 24, true);
    let sound = this.sound.add('au_greatwork')
    sound.play()

    let titles = this.add.text(100, 200, '测试点击', {
      color: '#000'
    })
    // this.input.on('pointerdown', () => {
    //   console.log('on-click')
    // })

    titles.setInteractive()
    titles.on('pointerdown', (event) => {
      // this.input.emit('cc-click')
      console.log('ddd');
      player.play('daiji', true)
    })

    /**
     * Delete all the code below to start a fresh scene
     */
    // new PhaserLogo(this, this.cameras.main.width / 2, 100)
    // new PhaserLogo(this, 100, 100)
    this.fpsText = new FpsText(this)

    // async/await example
    const pause = ms => {
      return new Promise(resolve => {
        window.setTimeout(() => {
          resolve()
        }, ms)
      })
    }

    const asyncFunction = async () => {
      console.log('Before Pause')
      await pause(4000) // 4 seconds pause
      console.log('After Pause')
    }
    asyncFunction()

    // Spread operator test
    const numbers = [0, 1, 2, 3]
    const moreNumbers = [...numbers, 4, 5]
    console.log(`All numbers: ` + moreNumbers)

    // display the Phaser.VERSION
    // this.add
    //   .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
    //     color: '#000000',
    //     fontSize: 24
    //   })
    //   .setOrigin(1, 0)
  }

  update() {
    // this.fpsText.update(this)
  }
}
