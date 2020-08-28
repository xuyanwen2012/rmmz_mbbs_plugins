export default class WindowNotification extends Window_Base {
  private opacity: number;
  private contentsOpacity: number;
  private _showCount: number;

  constructor(rect: Rectangle) {
    super(rect);
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._showCount = 0;
  }

  initialize(rect: Rectangle) {
    super.initialize(rect);
    this.refresh();
  }

  update() {
    super.update();
    if (this._showCount > 0) {
      this.contentsOpacity = 255;
      this._showCount--;
    } else {
      // fade out
      this.contentsOpacity -= 16;
    }
  }

  open() {
    this.refresh();
    this._showCount = 150;
  }

  private refresh() {
    this.contents.clear();
    const maxWidth = this.contentsWidth();

    const test = 'a very long and very long and very long test message';

    this.drawTextWrap(test, 0, 0, maxWidth);
  }

  private drawTextWrap(text: string, x: number, y: number, maxWidth: number) {
    text.split(' ').forEach((word: string) => {
      word = this.convertEscapeCharacters(word);
      const width = this.textWidth(word + ' ');

      if (x + width >= this.contents.width) {
        y += this.lineHeight();
        x = 0;
      }

      this.drawText(word + ' ', x, y, maxWidth, 'left');
      x += width;
    });
  }
}
