export default class WindowNotification extends Sprite {
  constructor(rect: Rectangle) {
    super();
    this.bitmap = new Bitmap(rect.width, rect.height);

    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;

    $gameSystem.mainFontSize();
  }

  // update() {
  //   super.update();
  // }

  redraw() {
    this.bitmap.clear();

    // temp
    const msgs = ['What a test message, good'];

    let x = 0;
    const y = 0;

    msgs.slice(0, 12).forEach((str: string) => {
      str.split('').forEach((char: string) => {
        const charWidth = this.bitmap.measureTextWidth(char);

        // if (charWidth > this.bitmap.width) {
        //   x = 0;
        //   y += h;
        // }

        this.bitmap.drawText(char, x, y, this.bitmap.width, 22, 'left');
        x += charWidth + 2;
      });
    });
  }

  resetFontSettings() {
    this.bitmap.fontFace = $gameSystem.mainFontFace();
    this.bitmap.fontSize = $gameSystem.mainFontSize();
    this.bitmap.textColor = ColorManager.normalColor();
    this.bitmap.outlineColor = ColorManager.outlineColor();
  }

  show() {
    this.visible = true;
    this.refresh();
  }

  hide() {
    this.visible = false;
  }

  private refresh() {
    this.redraw();
  }
}
