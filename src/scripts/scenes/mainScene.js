import button from '../objects/button'
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
    this.questData = null
  }
  
  preload() {
    let basePath = 'assets/resources/'
    this.questData = this.cache.json.get('json_questData')
    console.log('quess', this.questData)
    this.questData.forEach(item => {
      this.load.image(item.select_a, basePath + item.select_a)
    })
  }

  create() {
    this.initData()
    // let sprite = this.add.image(100, 100, 'admin_daiji')
    // sprite.animations.play('daiji', 24, true);
    let zhengque = this.sound.add('au_greatwork')
    let tianshetou = this.sound.add('au_tianshetou')
    let au_fanu = this.sound.add('au_fanu')
    let au_chichi = this.sound.add('au_chichi')
    let au_zhangzui = this.sound.add('au_zhangzui')

    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "bg_bg2");
    let guang = this.add.image(this.cameras.main.width / 2, 295, 'bg_guang')
    this.add.image(this.cameras.main.width / 2, 395, 'bg_bg1').setScale(.8)
    let yun_1 = this.add.image(this.cameras.main.width + 100, 160, 'bg_bg3').setScale(.6)
    let yun_2 = this.add.image(this.cameras.main.width + 100, 80, 'bg_bg3').setScale(.5)
    this.tweens.add({ targets: yun_1, x: -50, duration: 72000, ease: "Power2", loop: -1})
    this.tweens.add({ targets: yun_2, x: -50, delay: 1000, duration: 112000, loop: -1 })
    this.tweens.add({ targets: guang, scaleX: 1.2, scaleY: 1.2, duration: 5000, yoyo: true, loop: -1 })

    this.initAnimation()

    let player = this.add.sprite(260, 280,'daiji_1').setScale(.7);
    player.play('daji')
    player.on('animationstart-daji', () => {
      setTimeout(() => { tianshetou.play() }, 300)
    })
    player.on('animationrepeat-daji', () => {
      setTimeout(() => { tianshetou.play() }, 300)
    })
    player.on('animationstart-dacuo', () => {
      this.isdragLook = false
      setTimeout(() => { au_fanu.play() }, 300)
    })
    player.on('animationcomplete-dacuo', () => {
      this.isdragLook = true
      setTimeout(() => { player.play('daji') }, 500)
    })
    player.on('animationstart-dadui', () => {
      this.isdragLook = false
      setTimeout(() => { au_chichi.play() }, 300)
      setTimeout(() => { zhengque.play() }, 2300)
    })
    player.on('animationcomplete-dadui', () => {
      this.isdragLook = true
      player.play('daji')
    })
    player.on('animationstart-zhangzui', () => {
      setTimeout(() => { au_zhangzui.play() }, 300)
    })

    // let titles = this.add.text(100, 200, '测试点击', { color: '#000'})
    let ui_btn_play = new button(this, 50, 50, 'ui_btn_play').setScale(.6)
    let ui_btn_next = new button(this, this.cameras.main.width - 100, this.cameras.main.height - 60, 'ui_btn_next').setScale(.6)
    let sele_1 = this.add.image(this.cameras.main.width - 100, 170, 'select_bg')
    let sele_2 = this.add.image(this.cameras.main.width - 100, 286, 'select_bg')
    let sele_3 = this.add.image(this.cameras.main.width - 100, 400, 'select_bg')
    let answ_1 = this.add.sprite(this.cameras.main.width - 100, 170, 'image/book_picture_1.jpg') 
    let answ_2 = this.add.sprite(this.cameras.main.width - 100, 286, 'image/book_picture_1.jpg') 
    let answ_3 = this.add.sprite(this.cameras.main.width - 100, 400, 'image/book_picture_1.jpg') 
    answ_1.setDisplaySize(86, 86)
    answ_2.setDisplaySize(86, 86)
    answ_3.setDisplaySize(86, 86)
    
    sele_1.setScale(.6).setInteractive()
    sele_2.setScale(.6).setInteractive()
    sele_3.setScale(.6).setInteractive()
    
    ui_btn_play.on('pointerup', () => {
      let au = this.questData[0].question
      let aua = this.load.audio('aa','assets/resource/' + au)
    })
    ui_btn_next.on('pointerup', () => {
      this.sound.play('au_fanu')
    })

    this.leftBase = new Phaser.Geom.Ellipse(player.x, player.y, 160, 260)
    this.input.setDraggable([sele_1, sele_2, sele_3])
    sele_3.depth
    let pos = null
    let self = this
    let tempDepth = 9999
    let objDepth = 0
    this.isMove = false
    this.isdragLook = true
    this.input.on('dragstart', function (pointer, gameObject) {
      if (!self.isdragLook) return
      pos = gameObject.getCenter()
      objDepth = sele_3.depth
      gameObject.setDepth(tempDepth)
      player.play('zhangzui')
      this.isMove = true
    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      if (this.isMove) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      } 
    });
    this.input.on('dragend', function (pointer, gameObject) {
      if (!self.isdragLook) return
      this.isMove = false
      gameObject.setDepth(objDepth)
      if(self.leftBase.contains(gameObject.x, gameObject.y)) {
        console.log('chidao')
        // sound.play()
        if (Math.random() * 5 > 2) {
          player.play('dadui')
        } else {
          player.play('dacuo')
        } 
      } else {
        player.play('daji')
      }
      self.tweens.add({
        targets: gameObject,
        x: pos.x,
        y: pos.y,
        duration: 300
      })
    })

  }

  initData() {
    
  }
  initAnimation() {
    let frimes = []
    let zhangzuiFrimes = []
    let dwchi = []
    let dacuo = []
    for (let i = 0; i < 50; i++) {
      frimes.push({ key: 'daiji_'+ (i+1) })
    }
    for (let i = 0; i < 35; i++) {
      zhangzuiFrimes.push({ key: 'zhangzui_'+ (i+1) })
    }
    for (let i = 0; i < 79; i++) {
      dwchi.push({ key: 'dadui_'+ (i+1) })
    }
    for (let i = 0; i < 24; i++) {
      dacuo.push({ key: 'dacuo_'+ (i+1) })
    }

    // 待机动画
    this.anims.create({ key: 'daji', frames: frimes, frameRate: 24, repeat: -1,})
    // 张嘴
    this.anims.create({ key: 'zhangzui', frames: zhangzuiFrimes, frameRate: 24 })
    // 吃 答对
    this.anims.create({ key: 'dadui', frames: dwchi, frameRate: 24 })
    // 打错
    this.anims.create({ key: 'dacuo', frames: dacuo, frameRate: 24 })
  }

  update() {
    // this.fpsText.update(this)
  }
  
}
