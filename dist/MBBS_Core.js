//=============================================================================
// RPG Maker MZ - MBBS_Core.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc The core plugin of M&B Battle System.
 * @author Ivan Xu
 *
 * @help MBBS_Core.js - v1.0.0
 *
 * This plugin enables the 'Mount & Blade' Battle System, providing fundamental
 * code and necessary plugin parameters and commands. Adding other MBBS plugins
 * can greatly enhance the gameplay.
 *
 * @command aCommand
 * @text A command
 * @desc A command description.
 *
 * @arg anArg
 * @type number
 * @min 1
 * @max 60
 * @default 1
 * @text An argument
 * @desc An argument description.
 */

(function (pixi_js, aliases) {
    'use strict';

    class SpriteDebugUnit extends Sprite {
        constructor({ x, y }) {
            super();
            this._state = { x, y };
        }
        /**
         * TODO: [.d.ts] did not define 'initialize'
         */
        initialize() {
            const size = 48;
            const bitmap = new Bitmap(size, size);
            bitmap.drawCircle(size / 2, size / 2, size / 2, '#FF00FF');
            super.initialize();
            this.bitmap = bitmap;
            this.anchor.x = 0.5;
            this.anchor.y = 1;
        }
        update() {
            super.update();
            // this.updatePosition();
            const tileWidth = $gameMap.tileWidth();
            const tileHeight = $gameMap.tileHeight();
            const x = this._state.x;
            const y = this._state.y;
            this.x = ($gameMap.adjustX(x) + 0.5) * tileWidth;
            this.y = $gameMap.adjustY(y) * tileHeight;
        }
    }

    const pluginName = 'MBBS_Prototype';
    const pluginParam = { numTick: 1 };
    PluginManager.registerCommand(pluginName, 'tick', args => {
        pluginParam.numTick = args.numTick;
        console.log(`${pluginParam.numTick}!`);
    });
    const debugSprites = [
        [1, 2],
        [4, 4],
        [6, 2],
    ].map(([x, y]) => new SpriteDebugUnit({ x, y }));
    console.log(debugSprites);
    aliases.setupAliases(debugSprites);

}(null, aliases));
