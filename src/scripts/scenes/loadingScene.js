 class loadingScene extends Phaser.Scene {
  constructor() {
    super('loadingMy')
  }

  preload() {
    let basePath = 'assets/resources/'
    this.questData = this.cache.json.get('json_questData');
    console.log('ques', this.questData)
    this.questData.forEach(item => {
      this.load.image(item.select_a, item.select_a)
    });
  }

  create() {

  }
}
