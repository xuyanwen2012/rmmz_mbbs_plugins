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

(function () {
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

    // import {debugSprites} from './index';

    const _Spriteset_Map_createCharacters =
      Spriteset_Map.prototype.createCharacters;
    Spriteset_Map.prototype.createCharacters = function () {
      _Spriteset_Map_createCharacters.apply(this);

      this._characterSprites.push(...debugSprites);
      debugSprites.forEach(sprite => this._tilemap.addChild(sprite));
    };

    const pluginName = 'MBBS_Prototype';
    const pluginParam = { numTick: 1 };
    PluginManager.registerCommand(pluginName, 'tick', args => {
        pluginParam.numTick = args.numTick;
        console.log(`${pluginParam.numTick}!`);
    });
    const debugSprites$1 = [
        [1, 2],
        [4, 4],
        [6, 2],
    ].map(([x, y]) => new SpriteDebugUnit({ x, y }));

}());
