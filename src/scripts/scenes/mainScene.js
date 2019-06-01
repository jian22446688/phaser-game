import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    // let sprite = this.add.image(100, 100, 'admin_daiji')
    // sprite.animations.play('daiji', 24, true);
    let sound = this.sound.add('au_greatwork')
    sound.play()

    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "bg_bg2");
    let guang = this.add.image(this.cameras.main.width / 2, 295, 'bg_guang')
    this.add.image(this.cameras.main.width / 2, 395, 'bg_bg1').setScale(.8)

    var frimes = []
    for (let i = 0; i < 50; i++) {
      frimes.push({ key: 'daiji_'+ (i+1) })
    }

    var config = {
        key: 'daji',
        frames: frimes,
        frameRate: 24,
        repeat: -1
      };

    this.anims.create(config);
    let player = this.add.sprite(260, 280,'daiji_1').setScale(.7);
    player.play('daji')

    let titles = this.add.text(100, 200, '测试点击', { color: '#000'})
    let yun_1 = this.add.image(this.cameras.main.width + 100, 160, 'bg_bg3').setScale(.6)
    let yun_2 = this.add.image(this.cameras.main.width + 100, 80, 'bg_bg3').setScale(.5)
    this.tweens.add({ targets: yun_1, x: -50, duration: 72000, ease: "Power2", loop: -1})
    this.tweens.add({ targets: yun_2, x: -50, delay: 1000, duration: 112000, loop: -1 })
    this.tweens.add({ targets: guang, scaleX: 1.2, scaleY: 1.2, duration: 5000, yoyo: true, loop: -1 })


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
    this.leftBase = new Phaser.Geom.Ellipse(player.x, player.y, 160, 260);
    console.log(this.leftBase)

    this.input.setDraggable([sele_1,sele_2,sele_3])
    sele_3.depth
    let pos = null
    let self = this
    let tempDepth = 9999
    let objDepth = 0
    this.input.on('dragstart', function (pointer, gameObject) {
      pos = gameObject.getCenter()
      objDepth = sele_3.depth
      gameObject.setDepth(tempDepth)
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    
    this.input.on('dragend', function (pointer, gameObject) {
      gameObject.setDepth(objDepth)
      if(self.leftBase.contains(gameObject.x, gameObject.y)) {
        console.log('chidao')
        sound.play()
      }
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


    // this.input.on('pointerdown', () => {
    //   console.log('on-click')
    // })

    titles.setInteractive()
    titles.on('pointerdown', (event) => {
      // this.input.emit('cc-click')
      console.log('ddd');
      sound.play()
      player.play('daji')
    })

  }

  update() {
    // this.fpsText.update(this)
  }
  
}
