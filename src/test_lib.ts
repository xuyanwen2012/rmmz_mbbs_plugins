export default class Notification {
  private messages_: string[];
  private showing_: boolean;

  constructor() {
    this.messages_ = []
    this.showing_ = true;
  }

  update() {
    if (this.showing_) {

    }
  }

  show() {
    this.showing_ = true;
  }

  hide() {
    this.showing_ = false;
  }
}