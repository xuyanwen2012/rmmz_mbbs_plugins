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
            this.x = rect.x;
            this.y = rect.y;
            this.width = rect.width;
            this.height = rect.height;
            $gameSystem.mainFontSize();
        }
        // update() {
        //   super.update();
        // }
        drawMsgs(msgs) {
            this.bitmap.clear();
            // .slice(0, 12)
            const lineHeight = 22;
            let x = this.x;
            let y = this.y;
            msgs.forEach(str => {
                str.split('').forEach(char => {
                    const charWidth = this.bitmap.measureTextWidth(char);
                    if (x + charWidth > this.bitmap.width) {
                        // newline
                        x = 0;
                        y += lineHeight;
                    }
                    this.bitmap.drawText(char, x, y, this.bitmap.width, lineHeight, 'left');
                    x += charWidth;
                });
                // newline
                x = 0;
                y += lineHeight;
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
            this.drawMsgs(['line 1: what a message', 'line 2: what a shit']);
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
