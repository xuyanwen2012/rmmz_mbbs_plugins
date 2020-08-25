/*:
 * @target MZ
 * @plugindesc A plugin description
 * @author Ivan Xu
 *
 * @help MBBS_Prototype.js - v1.0.0
 *
 * This plugin can be used for 'Mount & Blade' style battle log or simply for
 * quick debugging display.
 */
(function () {
  'use strict';

  /**
   * @extends {Sprite}
   */
  class SpriteDebugUnit extends Sprite {
    /**
     * @param {{x: number, y: number}} state
     */
    constructor(state = {x: 0, y: 0}) {
      super();

      /**
       * @type {{x: number, y: number}}
       * @private
       */
      this._state = state;
    }

    /**
     * @override
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

    /**
     * @override
     */
    update() {
      super.update();

      // this.updatePosition();
      const tileWidth = $gameMap.tileWidth();
      const tileHeight = $gameMap.tileHeight();
      const x = this._state.x;
      const y = this._state.y;
      this.x = ($gameMap.adjustX(x) + 0.5) * tileWidth;
      this.y = ($gameMap.adjustY(y)) * tileHeight;
    }
  }

  // ==========================================================================

  const pluginName = 'MBBS_Prototype';
  const pluginParam = {numTick: 1};

  PluginManager.registerCommand(pluginName, 'tick', (args) => {
    pluginParam.numTick = Number(args.numTick);
    console.log(`${pluginParam.numTick}!`);
  });

  Scene_Map = class extends Scene_Map {
    start(...args) {
      super.start(args);
    }

    update(...args) {
      super.update(args);
    }

    stop(...args) {
      super.stop(args);
    }
  };

  // ==========================================================================
  // Aliasing
  // ==========================================================================

  Spriteset_Map = class extends Spriteset_Map {
    initialize(...args) {
      super.initialize(args);

      /**
       * @type {SpriteDebugUnit[]}
       */
      this._debugSprites = [];
    }

    createCharacters(...args) {
      super.createCharacters(args);

      this._debugSprites = [[1, 2], [4, 4], [6, 2]]
        .map(([x, y]) => new SpriteDebugUnit({x, y}));

      this._characterSprites.push(...this._debugSprites);
      this._debugSprites.forEach((sprite) => this._tilemap.addChild(sprite));
    }
  };

}());
