import {SpriteDebugUnit} from './sprites';

const pluginName = 'MBBS_Prototype';
const pluginParam = {numTick: 1};

PluginManager.registerCommand(pluginName, 'tick', args => {
  pluginParam.numTick = args.numTick as number;
  console.log(`${pluginParam.numTick}!`);
});

// @ts-ignore
Spriteset_Map = class extends Spriteset_Map {
  initialize(bitmap?: Bitmap) {
    super.initialize(bitmap);

    // @ts-ignore
    this._debugSprites = [];
  }

  createCharacters() {
    super.createCharacters();

    // @ts-ignore
    this._debugSprites = [
      [1, 2],
      [4, 4],
      [6, 2],
    ].map(([x, y]) => new SpriteDebugUnit({x, y}));

    // @ts-ignore
    this._characterSprites.push(...this._debugSprites);

    // @ts-ignore
    this._debugSprites.forEach(sprite => this._tilemap.addChild(sprite));
  }
};
