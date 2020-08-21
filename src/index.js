import testA from './testA';
import Notification from './test_lib';

let instance = new Notification();

const _SceneMap = Scene_Map.prototype;
Scene_Map = class extends Scene_Map {
  start(...args) {
    _SceneMap.start.apply(this, args);
    instance.show();
  }

  update(...args) {
    _SceneMap.update.apply(this, args);
    instance.update();
  }

  stop(...args) {
    _SceneMap.stop.apply(this, args);
    instance.show();
  }
};

console.log(testA('roar'));
