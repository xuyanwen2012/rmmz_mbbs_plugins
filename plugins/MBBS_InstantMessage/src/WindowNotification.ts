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

  drawMsgs(msgs: string[]) {
    this.bitmap.clear();

    // .slice(0, 12)
    const margin = 4; // Window_Message.newLineX
    const lineHeight = 22;

    let x = this.x + margin;
    let y = this.y;
    msgs.forEach(str => {
      str.split('').forEach(char => {
        const charWidth = this.bitmap.measureTextWidth(char);

        if (x + charWidth > this.bitmap.width) {
          // newline
          x = 0;
          y += lineHeight;
        }

        this.bitmap.drawText(char, x, y, this.bitmap.width, lineHeight, 'left');
        x += charWidth;
      });
      // newline
      x = 0;
      y += lineHeight;
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
    this.drawMsgs(['line 1: what a message', 'line 2: what a shit']);
  }
}
