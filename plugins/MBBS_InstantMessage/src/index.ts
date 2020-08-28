import WindowNotification from './WindowNotification';
import Notifications from './Notifications';

const pluginName = 'MBBS_InstantMessage';

// const pluginParam = {numTick: 1};

interface CommandPostParams {
  text: string;
  fontSize: number;
  textColor: string;
}

// const notifications = new Notifications();

PluginManager.registerCommand(pluginName, 'post', (args: CommandPostParams) => {
  const color = ColorManager.normalColor();
  const size = $gameSystem.mainFontSize();
  const font = $gameSystem.mainFontFace();
  const text = args.text;

  // @ts-ignore
  SceneManager._scene.notifications.post({color, size, font, text});
  // @ts-ignore
  SceneManager._scene.notificationWindow.open();
});

// @ts-ignore
Scene_Map = class extends Scene_Map {
  notifications: Notifications | undefined;
  notificationWindow: WindowNotification | undefined;

  createAllWindows() {
    const displayRect = new Rectangle(
      0,
      64,
      Graphics.boxWidth / 2,
      Graphics.boxHeight
    );

    this.notifications = new Notifications(displayRect);
    this.notificationWindow = new WindowNotification(this.notifications);

    this.addWindow(this.notificationWindow);
    super.createAllWindows();
  }

  start() {
    super.start();
    this.notificationWindow?.show();
  }

  update() {
    super.update();
    this.notificationWindow?.update();
  }

  stop() {
    super.stop();
    this.notificationWindow?.hide();
  }
};
