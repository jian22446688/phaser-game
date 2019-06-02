class loadingScene extends Phaser.Scene {
  constructor() {
    super('loadingMy')
  }

  preload() {
    let basePath = 'assets/resources/'
    this.questData = this.cache.json.get('json_questData');
    console.log('quess', this.questData)
    this.questData.forEach(item => {
      this.load.image(item.select_a, basePath + item.select_a)
    });
  }

  create() {
    let imag = this.add.image(100,100,'bg_bg2')
    imag.setTexture('image/book_picture_1.jpg')
    imag.setTexture('image/pencil_picture_1.jpg')
  }
}
