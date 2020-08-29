import WindowNotification from './WindowNotification';
import Notifications from './Notifications';

const pluginName = 'MBBS_InstantMessage';

let pluginParam = {maxLineLimit: 12, displayDuration: 4};

interface CommandPostParams {
  text: string;
  fontSize: number;
  textColor: string;
}

const displayRect = new Rectangle(0, 64, 808 / 2, 616 - 64);
const $gameNotifications = new Notifications(displayRect);

const parameters = PluginManager.parameters('MBBS_InstantMessage');

// @ts-ignore
// eslint-disable-next-line node/no-unsupported-features/es-builtins
pluginParam = Object.fromEntries(
  Object.keys(pluginParam).map(key => {
    return [key, parameters[key]];
  })
);

console.log(pluginParam);

PluginManager.registerCommand(pluginName, 'post', (args: CommandPostParams) => {
  const color = ColorManager.normalColor();
  const size = $gameSystem.mainFontSize();
  const font = $gameSystem.mainFontFace();
  const text = args.text;

  $gameNotifications.post({color, size, font, text});
  // @ts-ignore
  SceneManager._scene.notificationWindow.open();
});

// @ts-ignore
Scene_Map = class extends Scene_Map {
  notificationWindow: WindowNotification | undefined;

  createAllWindows() {
    this.notificationWindow = new WindowNotification($gameNotifications);

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
