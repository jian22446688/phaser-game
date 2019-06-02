export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.loadingText = this.add.text(this.cameras.main.width / 2 - 50, this.cameras.main.height / 2 - 6, 'Loading res', {
      color: '#000'
    })
    var progressbg = this.add.graphics()
    progressbg.fillStyle(0x00ff00, 1)
    progressbg.fillRect(this.cameras.main.width / 2 - 100, 170, 200, 20)
    var progress = this.add.graphics()
    this.load.on('progress',  (value) => {
        progress.clear();
        progress.fillStyle(0xff0000, 1)
        progress.fillRect(this.cameras.main.width / 2 - 100, 170, 200 * value, 20)
        this.loadingText.text = 'loading: ' + parseInt((value * 100)) + '%'
    });

    // this.load.on('complete', function () {
    //     progress.destroy();
    // });

    // load json
    this.load.json('json_questData', 'assets/json/DEMO-0522.json')
    // load image
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.audio('au_btns', 'assets/audio/btns.mp3')
    this.load.audio('au_greatwork', 'assets/audio/GreatWork.wav')
    this.load.audio('au_chichi', 'assets/audio/chichi.wav')
    this.load.audio('au_tianshetou', 'assets/audio/tianshetou.wav')
    this.load.audio('au_fanu', 'assets/audio/发怒2.wav')
    this.load.audio('au_zhangzui', 'assets/audio/zhangzui.wav')

    for (let i = 0; i < 50; i++) {
      if (i + 1 < 10) {
        this.load.image('daiji_'+ (i+1), 'assets/admin/daiji/未命名-1000' + (i + 1) + '.png')
      }else {
        this.load.image('daiji_'+ (i+1), 'assets/admin/daiji/未命名-100' + (i + 1) + '.png')
      }
    }
    for (let i = 0; i < 35; i++) {
      if (i + 1 < 10) {
        this.load.image('zhangzui_'+ (i+1), 'assets/anims/张嘴动画/未命名-z1000' + (i + 1) + '.png')
      }else {
        this.load.image('zhangzui_'+ (i+1), 'assets/anims/张嘴动画/未命名-z100' + (i + 1) + '.png')
      }
    }
    for (let i = 0; i < 79; i++) {
      if (i + 1 < 10) {
        this.load.image('dadui_'+ (i+1), 'assets/anims/怪兽答对序列/未命名-d1000' + (i + 1) + '.png')
      }else {
        this.load.image('dadui_'+ (i+1), 'assets/anims/怪兽答对序列/未命名-d100' + (i + 1) + '.png')
      }
    }
    for (let i = 0; i < 24; i++) {
      if (i + 1 < 10) {
        this.load.image('dacuo_'+ (i+1), 'assets/anims/怪兽答错序列/未命名-dc1000' + (i + 1) + '.png')
      }else {
        this.load.image('dacuo_'+ (i+1), 'assets/anims/怪兽答错序列/未命名-dc100' + (i + 1) + '.png')
      }
    }
    this.load.image('bg_bg2', 'assets/bg_2.png')
    this.load.image('bg_bg1', 'assets/bg_1.png')
    this.load.image('bg_bg3', 'assets/bg_3.png')
    this.load.image('select_bg', 'assets/sele_bg.png')
    this.load.image('bg_guang', 'assets/guangyuan.png')
    this.load.image('ui_btn_play', 'assets/btn_2.png')
    this.load.image('ui_btn_next', 'assets/btn_next.png')

    // this.load.onFileComplete.add(function(progress) {
    //   this.loadingText.text = progress + '%';
    // })
    let imga = this.load.image('aaaa', 'http://localhost:8080/assets/resources/image/big_A.png')
    
    this.load.sceneFile('loadingScene', 'assets/scenes/loadingScene.js')
    
  }

  create() {
    // rul http://localhost:8080/assets/audio/tianshetou.wav

   
    setTimeout(() => {
      this.add.image(300, 333, 'aaaa')
    }, 1000)

    this.input.once('onDown', () => {
      this.game.sound.context.resume();
    })
    this.scene.start('MainScene')
    // this.scene.start('loadingMy')
    

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
