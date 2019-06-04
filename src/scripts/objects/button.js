export default class Button extends Phaser.GameObjects.Image {
  constructor(scene, x, y, image) {
    super(scene, x, y, image)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerup', () => {
      // this.setScale(this.scaleX + (this.scaleX * 0.1), this.scaleY + (this.scaleY * 0.1))
      this.clearTint()
    })
    this.on('pointerout', function (pointer) {
      // this.setScale(this.scaleX + (this.scaleX * 0.1), this.scaleY + (this.scaleY * 0.1))
      this.clearTint()
    })
    this.on('pointerdown', () => {
      // this.setScale(this.scaleX - (this.scaleX * 0.1), this.scaleY - (this.scaleY * 0.1))
      this.setTint(0x44aaa4);
    })
    this.on('pointerover', () => {
      // this.setScale(this.scaleX - (this.scaleX * 0.1), this.scaleY - (this.scaleY * 0.1))
      this.setTint(0x44ff44);
    })

  }
}
