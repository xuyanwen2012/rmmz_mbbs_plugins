import Notification from "./notification";

let instance = new Notification();

declare var Scene_Map: any;

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