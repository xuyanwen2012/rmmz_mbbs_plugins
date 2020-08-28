//=============================================================================
// RPG Maker MZ - MBBS_InstantMessage.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc A standalone onscreen message logging system.
 * @author Ivan Xu
 *
 * @help MBBS_InstantMessage.js - v1.0.0
 *
 * This plugin can be used for 'Mount & Blade' style battle log or simply for
 * quick debugging display.
 */

(function () {
    'use strict';

    class WindowNotification extends Window_Base {
        // x: number, y: number, width: number, height: number
        constructor() {
            // 0, 0, 200, 200
            // The type should be Windows Base
            super(new Rectangle(0, 0, 200, 200));
        }
    }

    // const pluginParam = {numTick: 1};
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

}());
