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
 *
 * @param maxLineLimit
 * @type number
 * @min 1
 * @default 12
 * @text Max Line Limit
 * @desc How many lines can be displayed on the screen.
 *
 * @param displayDuration
 * @type number
 * @min 1
 * @default 4
 * @text Display Duration in Sec
 * @desc How long (in seconds) will the messages be shown on the screen.
 *
 * @command post
 * @text Post
 * @desc Post a message to the screen.
 *
 * @arg text
 * @type string
 * @text Text
 * @desc The text to print.
 *
 * @arg fontSize
 * @type number
 * @default 26
 * @text Font size
 * @desc The size of the font.
 *
 * @arg textColor
 * @type string
 * @default #000000
 * @text Text
 * @desc The color of the text;
 */

(function () {
    'use strict';

    class WindowNotification extends Window_Base {
        constructor(notification) {
            super(notification.getDisplayRect());
            this.opacity = 0;
            this.contentsOpacity = 0;
            this.showCount = 0;
            this.notification = notification;
        }
        initialize(rect) {
            super.initialize(rect);
            this.refresh();
        }
        update() {
            super.update();
            if (this.showCount > 0) {
                this.contentsOpacity = 255;
                this.showCount--;
            }
            else {
                // fade out
                this.contentsOpacity -= 16;
            }
        }
        open() {
            this.refresh();
            this.showCount = 150;
        }
        /**
         * Should simply redraw the contents based on the state of notification.
         * @private
         */
        refresh() {
            this.contents.clear();
            const maxWidth = this.contentsWidth();
            const maxHeight = this.contentsHeight();
            if (!this.notification)
                return;
            let y = maxHeight;
            this.notification.getMessages().forEach(msg => {
                const lines = this.calcMsgNumLines(msg.text, maxWidth);
                y -= lines;
                this.drawTextWrap(msg.text, 0, y, maxWidth);
            });
        }
        calcMsgNumLines(text, maxWidth) {
            return this.drawTextWrap(text, 0, 0, maxWidth, true);
        }
        drawTextWrap(text, x, y, maxWidth, noEmit = false) {
            text.split(' ').forEach((word) => {
                word = this.convertEscapeCharacters(word);
                const width = this.textWidth(word + ' ');
                // trigger new-line break
                if (x + width >= this.contentsWidth()) {
                    y -= this.lineHeight();
                    x = 0;
                }
                if (!noEmit) {
                    this.drawText(word + ' ', x, y, maxWidth, 'left');
                }
                x += width;
            });
            // Return the new y coordinate of the next line.
            return y - this.lineHeight();
        }
    }

    class Notifications {
        constructor(rect) {
            this.maxMsgs = 12;
            this.messages = [];
            this.displayRect = rect; // use default
        }
        getMessages() {
            return this.messages;
        }
        getDisplayRect() {
            return this.displayRect;
        }
        setDisplayRect(rect) {
            this.displayRect = rect;
        }
        post(msg) {
            if (this.messages.unshift(msg) > this.maxMsgs) {
                this.messages.pop();
            }
        }
        clear() {
            this.messages = [];
        }
    }

    const pluginName = 'MBBS_InstantMessage';
    let pluginParam = { maxLineLimit: 12, displayDuration: 4 };
    const displayRect = new Rectangle(0, 64, 808 / 2, 616 - 64);
    const $gameNotifications = new Notifications(displayRect);
    const parameters = PluginManager.parameters('MBBS_InstantMessage');
    // @ts-ignore
    // eslint-disable-next-line node/no-unsupported-features/es-builtins
    pluginParam = Object.fromEntries(Object.keys(pluginParam).map(key => {
        return [key, parameters[key]];
    }));
    console.log(pluginParam);
    PluginManager.registerCommand(pluginName, 'post', (args) => {
        const color = ColorManager.normalColor();
        const size = $gameSystem.mainFontSize();
        const font = $gameSystem.mainFontFace();
        const text = args.text;
        $gameNotifications.post({ color, size, font, text });
        // @ts-ignore
        SceneManager._scene.notificationWindow.open();
    });
    // @ts-ignore
    Scene_Map = class extends Scene_Map {
        createAllWindows() {
            this.notificationWindow = new WindowNotification($gameNotifications);
            this.addWindow(this.notificationWindow);
            super.createAllWindows();
        }
        start() {
            var _a;
            super.start();
            (_a = this.notificationWindow) === null || _a === void 0 ? void 0 : _a.show();
        }
        update() {
            var _a;
            super.update();
            (_a = this.notificationWindow) === null || _a === void 0 ? void 0 : _a.update();
        }
        stop() {
            var _a;
            super.stop();
            (_a = this.notificationWindow) === null || _a === void 0 ? void 0 : _a.hide();
        }
    };

}());
