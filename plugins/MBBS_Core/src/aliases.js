// import {debugSprites} from './index';

const _Spriteset_Map_createCharacters =
  Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
  _Spriteset_Map_createCharacters.apply(this);

  this._characterSprites.push(...debugSprites);
  debugSprites.forEach(sprite => this._tilemap.addChild(sprite));
};

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export default null;
