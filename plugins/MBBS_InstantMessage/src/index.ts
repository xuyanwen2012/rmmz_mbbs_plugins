// const pluginParam = {numTick: 1};
import WindowNotification from './WindowNotification';

// @ts-ignore
Scene_Map = class extends Scene_Map {
  createWindowLayer() {
    super.createWindowLayer();

    // @ts-ignore
    this._notificationWindow = new WindowNotification();

    // @ts-ignore
    this.addWindow(this._notificationWindow);
  }

  start() {
    super.start();
    // @ts-ignore
    this._notificationWindow.show();
  }

  update() {
    super.update();
    // @ts-ignore
    this._notificationWindow.update();
  }

  stop() {
    super.stop();
    // @ts-ignore
    this._notificationWindow.hide();
  }
};
