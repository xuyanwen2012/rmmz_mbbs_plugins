export default class Notification {
  private messages_: string[];
  private showing_: boolean;

  constructor() {
    this.messages_ = []
    this.showing_ = true;
  }

  update(): void {
    if (this.showing_) {
      this.showing_ = false;
    }
  }

  show(): void {
    this.showing_ = true;
  }

  hide(): void {
    this.showing_ = false;
  }
}
