enum TextColor {
  White = '',
}

interface Message {
  text: string;
  color?: TextColor;
  font?: string;
  size?: number;
}

export default class Notifications {
  private readonly _maxMsgs: number;
  private _msg: Message[];

  constructor() {
    this._maxMsgs = 12;
    this._msg = [];
  }

  post(msg: Message): void {
    if (this._msg.push(msg) > this._maxMsgs) {
      this._msg.shift();
    }

    console.log(this._msg);
  }

  clear(): void {
    this._msg = [];
  }
}
