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

    class WindowNotification extends Sprite {
        constructor(rect) {
            super();
            this.bitmap = new Bitmap(rect.width, rect.height);
            this.bitmap.fillAll(ColorManager.normalColor());
            this.x = rect.x;
            this.y = rect.y;
            this.width = rect.width;
            this.height = rect.height;
            $gameSystem.mainFontSize();
        }
        // update() {
        //   super.update();
        // }
        redraw() {
            this.bitmap.clear();
            // temp
            const msgs = ['What a test message, good'];
            let x = 0;
            const y = 0;
            msgs.slice(0, 12).forEach((str) => {
                str.split('').forEach((char) => {
                    const charWidth = this.bitmap.measureTextWidth(char);
                    // if (charWidth > this.bitmap.width) {
                    //   x = 0;
                    //   y += h;
                    // }
                    this.bitmap.drawText(char, x, y, this.bitmap.width, 22, 'left');
                    x += charWidth + 2;
                });
            });
        }
        resetFontSettings() {
            this.bitmap.fontFace = $gameSystem.mainFontFace();
            this.bitmap.fontSize = $gameSystem.mainFontSize();
            this.bitmap.textColor = ColorManager.normalColor();
            this.bitmap.outlineColor = ColorManager.outlineColor();
        }
        show() {
            this.visible = true;
            this.refresh();
        }
        hide() {
            this.visible = false;
        }
        refresh() {
            this.redraw();
        }
    }

    // const pluginParam = {numTick: 1};
    let notificationWindow;
    // @ts-ignore
    Scene_Map = class extends Scene_Map {
        createWindowLayer() {
            super.createWindowLayer();
            const displayRect = new Rectangle(0, 0, 256, Graphics.boxHeight);
            notificationWindow = new WindowNotification(displayRect);
            // this.addWindow(notificationWindow);
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

}());
