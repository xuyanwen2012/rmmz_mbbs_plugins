import {SpriteDebugUnit} from './sprites';

const pluginName = 'MBBS_Prototype';
const pluginParam = {numTick: 1};

PluginManager.registerCommand(pluginName, 'tick', args => {
  pluginParam.numTick = Number(args.numTick);
  console.log(`${pluginParam.numTick}!`);
});

// ==========================================================================
// Aliasing
// ==========================================================================

const _Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
Spriteset_Map.prototype.initialize = function () {
  _Spriteset_Map_initialize.apply(this);
  /**
   * @type {SpriteDebugUnit[]}
   */
  this._debugSprites = [];
};

const _Spriteset_Map_createCharacters =
  Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
  _Spriteset_Map_createCharacters.apply(this);

  this._debugSprites = [
    [1, 2],
    [4, 4],
    [6, 2],
  ].map(([x, y]) => new SpriteDebugUnit({x, y}));

  this._characterSprites.push(...this._debugSprites);
  this._debugSprites.forEach(sprite => this._tilemap.addChild(sprite));
};
