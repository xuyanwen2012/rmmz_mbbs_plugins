// ==========================================================================
// Plugin parameters, Plugin Commands
// ==========================================================================

import SpriteDebugUnit from './sprite_debug_unit';

const pluginName = 'MBBS_Prototype';
const pluginParam = {numTick: 1};

PluginManager.registerCommand(pluginName, 'tick', (args) => {
  pluginParam.numTick = Number(args.numTick);
  console.log(`${pluginParam.numTick}!`);
});

// ==========================================================================
// Aliasing
// ==========================================================================

Spriteset_Map = class extends Spriteset_Map {
  /**
   * @override
   * @param {any} args
   */
  initialize(...args) {
    super.initialize(args);

    /**
     * @type {SpriteDebugUnit[]}
     */
    this._debugSprites = [];
  }

  /**
   * @override
   * @param {any} args
   */
  createCharacters(...args) {
    super.createCharacters(args);

    this._debugSprites = [[1, 2], [4, 4], [6, 2]]
        .map(([x, y]) => new SpriteDebugUnit({x, y}));

    this._characterSprites.push(...this._debugSprites);
    this._debugSprites.forEach((sprite) => this._tilemap.addChild(sprite));
  }
};
