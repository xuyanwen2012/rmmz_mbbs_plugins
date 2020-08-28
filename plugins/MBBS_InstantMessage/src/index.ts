import WindowNotification from './WindowNotification';

// const pluginParam = {numTick: 1};

let notificationWindow: WindowNotification;

// @ts-ignore
Scene_Map = class extends Scene_Map {
  createWindowLayer() {
    super.createWindowLayer();

    const displayRect = new Rectangle(0, 0, 256, Graphics.boxHeight);

    notificationWindow = new WindowNotification(displayRect);
    SceneManager._scene.addChild(notificationWindow);
  }

  start() {
    super.start();
    notificationWindow.show();
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
