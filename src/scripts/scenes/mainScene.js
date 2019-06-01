import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
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
    console.log(Phaser)
    new PhaserLogo(this, this.cameras.main.width / 2, 100)

    var aa = this.add.tileSprite(110, 200, )
    const logo = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "bg_bg2");
    let spre = this.add.image(this.cameras.main.width / 2, 395, 'bg_bg1')
    spre.setScale(0.8, .8)

    this.guaiwu = this.add.image(200, 280, 'phaser-logo')
    let sele_1 = this.add.image(this.cameras.main.width - 100, 180, 'select_bg')
    let sele_2 = this.add.image(this.cameras.main.width - 100, 296, 'select_bg')
    let sele_3 = this.add.image(this.cameras.main.width - 100, 410, 'select_bg')
    sele_1.setScale(.6)
    sele_2.setScale(.6)
    sele_3.setScale(.6)
    sele_1.inputEnable = true
    sele_2.inputEnable = true
    sele_3.inputEnable = true
    sele_1.setInteractive();
    sele_2.setInteractive();
    sele_3.setInteractive();
    // sele_1.on('pointerdown', (e) => {
    //   console.log(e)
    // }, this);
    this.leftBase = new Phaser.Geom.Ellipse(this.guaiwu.x, this.guaiwu.y, 80, 80);
    this.input.setDraggable([sele_1,sele_2,sele_3])

    let pos = null
    let self = this
    this.input.on('dragstart', function (pointer, gameObject) {
      pos = gameObject.getCenter()
      
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
        if(self.leftBase.contains(gameObject.x, gameObject.y)) {
          console.log('chidiao')
        }
    });
    
    this.input.on('dragend', function (pointer, gameObject) {
      
      self.tweens.add({
        targets: gameObject,
        x: pos.x,
        y: pos.y,
        duration: 300
      })
    });
    // this.tweens.add({
    //   targets: [sele_1, sele_2, sele_3 ],
    //   x: 150,
    //   duration: 2000,
    //   ease: "Power2",
    //   yoyo: true,
    //   loop: -1
    // });

    // logo.inputEnabled = true
    // logo.enableDrag()
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
