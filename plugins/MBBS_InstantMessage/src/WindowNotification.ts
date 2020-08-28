import Notifications from './Notifications';

export default class WindowNotification extends Window_Base {
  protected opacity: number;
  protected contentsOpacity: number;
  private showCount: number;
  private readonly notification: Notifications;

  constructor(notification: Notifications) {
    super(notification.getDisplayRect());
    this.opacity = 0;
    this.contentsOpacity = 0;
    this.showCount = 0;
    this.notification = notification;
    console.log(this.notification);
    console.log(this);
  }

  initialize(rect: Rectangle) {
    super.initialize(rect);
    this.refresh();
  }

  update() {
    super.update();
    if (this.showCount > 0) {
      this.contentsOpacity = 255;
      this.showCount--;
    } else {
      // fade out
      this.contentsOpacity -= 16;
    }
  }

  open() {
    this.refresh();
    this.showCount = 150;
  }

  /**
   * Should simply redraw the contents based on the state of notification.
   * @private
   */
  private refresh() {
    this.contents.clear();
    const maxWidth = this.contentsWidth();

    if (!this.notification) return;

    let y = 0;
    this.notification.getMessages().forEach(msg => {
      y = this.drawTextWrap(msg.text, 0, y, maxWidth);
    });
  }

  private drawTextWrap(
    text: string,
    x: number,
    y: number,
    maxWidth: number
  ): number {
    text.split(' ').forEach((word: string) => {
      word = this.convertEscapeCharacters(word);
      const width = this.textWidth(word + ' ');

      // trigger new-line break
      if (x + width >= this.contentsWidth()) {
        y += this.lineHeight();
        x = 0;
      }

      this.drawText(word + ' ', x, y, maxWidth, 'left');
      x += width;
    });

    // Return the y coordinate of the new line.
    return y + this.lineHeight();
  }
}
