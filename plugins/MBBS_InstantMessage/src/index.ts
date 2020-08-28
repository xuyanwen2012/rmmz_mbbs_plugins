import WindowNotification from './WindowNotification';

const pluginName = 'MBBS_InstantMessage';
// const pluginParam = {numTick: 1};

interface PluginParams {
  text: string;
  fontSize: number;
  textColor: string;
}

let notificationWindow: WindowNotification;

PluginManager.registerCommand(pluginName, 'post', (args: PluginParams) => {
  notificationWindow.open();
});

// @ts-ignore
Scene_Map = class extends Scene_Map {
  createAllWindows() {
    const rect = new Rectangle(
      0,
      64,
      Graphics.boxWidth / 2,
      Graphics.boxHeight
    );
    notificationWindow = new WindowNotification(rect);
    this.addWindow(notificationWindow);
    super.createAllWindows();
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
