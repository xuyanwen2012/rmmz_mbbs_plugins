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
        constructor(rect) {
            super(rect);
            this.opacity = 0;
            this.contentsOpacity = 0;
            this._showCount = 0;
        }
        initialize(rect) {
            super.initialize(rect);
            this.refresh();
        }
        update() {
            super.update();
            if (this._showCount > 0) {
                this.contentsOpacity = 255;
                this._showCount--;
            }
            else {
                // fade out
                this.contentsOpacity -= 16;
            }
        }
        open() {
            this.refresh();
            this._showCount = 150;
        }
        refresh() {
            this.contents.clear();
            const maxWidth = this.contentsWidth();
            const test = 'a very long and very long and very long test message';
            this.drawTextWrap(test, 0, 0, maxWidth);
        }
        drawTextWrap(text, x, y, maxWidth) {
            text.split(' ').forEach((word) => {
                word = this.convertEscapeCharacters(word);
                const width = this.textWidth(word + ' ');
                if (x + width >= this.contents.width) {
                    y += this.lineHeight();
                    x = 0;
                }
                this.drawText(word + ' ', x, y, maxWidth, 'left');
                x += width;
            });
        }
    }

    // const pluginParam = {numTick: 1};
    let notificationWindow;
    // @ts-ignore
    Scene_Map = class extends Scene_Map {
        createAllWindows() {
            const rect = new Rectangle(0, 64, Graphics.boxWidth / 3, Graphics.boxHeight);
            notificationWindow = new WindowNotification(rect);
            this.addWindow(notificationWindow);
            super.createAllWindows();
        }
        start() {
            super.start();
            notificationWindow.open();
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
