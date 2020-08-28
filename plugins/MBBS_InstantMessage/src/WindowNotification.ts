export default class WindowNotification extends Window_Base {
  // x: number, y: number, width: number, height: number
  constructor() {
    // 0, 0, 200, 200
    // The type should be Windows Base
    super(new Rectangle(0, 0, 200, 200));
  }
}
