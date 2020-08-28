import WindowNotification from './WindowNotification';

// const pluginParam = {numTick: 1};

let notificationWindow: WindowNotification;

// @ts-ignore
Scene_Map = class extends Scene_Map {
  createAllWindows() {
    const rect = new Rectangle(
      0,
      64,
      Graphics.boxWidth / 3,
      Graphics.boxHeight
    );
    notificationWindow = new WindowNotification(rect);
    this.addWindow(notificationWindow);
    super.createAllWindows();
  }

  start() {
    super.start();
    notificationWindow.open();
  }

  update() {
    super.update();
    notificationWindow.update();
  }

  stop() {
    super.stop();
    notificationWindow.hide();
  }
};
