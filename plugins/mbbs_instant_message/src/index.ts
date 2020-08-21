/* eslint-disable @typescript-eslint/no-explicit-any */
import Notification from './notification';

const instance = new Notification();

// eslint-disable-next-line prefer-const
declare let Scene_Map: any;

const _SceneMap = Scene_Map.prototype;
Scene_Map = class extends Scene_Map {
  start(...args: any[]) {
    _SceneMap.start.apply(this, args);
    instance.show();
  }

  update(...args: any[]) {
    _SceneMap.update.apply(this, args);
    instance.update();
  }

  stop(...args: any[]) {
    _SceneMap.stop.apply(this, args);
    instance.show();
  }
};