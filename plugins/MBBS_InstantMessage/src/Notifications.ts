interface Message {
  text: string;
  color?: string;
  font?: string;
  size?: number;
}

export default class Notifications {
  private readonly maxMsgs: number;
  private messages: Message[];
  private displayRect: Rectangle;

  constructor(rect: Rectangle) {
    this.maxMsgs = 12;
    this.messages = [];
    this.displayRect = rect; // use default
  }

  getMessages() {
    return this.messages;
  }

  getDisplayRect() {
    return this.displayRect;
  }

  setDisplayRect(rect: Rectangle) {
    this.displayRect = rect;
  }

  post(msg: Message): void {
    if (this.messages.unshift(msg) > this.maxMsgs) {
      this.messages.pop();
    }
  }

  clear(): void {
    this.messages = [];
  }
}
