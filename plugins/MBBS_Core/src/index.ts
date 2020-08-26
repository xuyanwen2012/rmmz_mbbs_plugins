import {SpriteDebugUnit} from './sprites';

console.log(SpriteDebugUnit);

//
// const pluginName = 'MBBS_Prototype';
// const pluginParam = {numTick: 1};
//
// PluginManager.registerCommand(pluginName, 'tick', args => {
//   pluginParam.numTick = Number(args.numTick);
//   console.log(`${pluginParam.numTick}!`);
// });
//
// // ==========================================================================
// // Aliasing
// // ==========================================================================
//
// const _Spriteset_Map = Spriteset_Map.prototype;
//
// Spriteset_Map.prototype._debugSprites
//
// Spriteset_Map.prototype.initialize = function () {
//   _Spriteset_Map.initialize.apply(this);
//   /**
//    * @type {SpriteDebugUnit[]}
//    */
//   this._debugSprites = [];
// };
//
// Spriteset_Map.prototype.createCharacters = function () {};
//
// //
// // Spriteset_Map = class extends Spriteset_Map {
// //   initialize(...args) {
// //     super.initialize(args);
// //
// //     /**
// //      * @type {SpriteDebugUnit[]}
// //      */
// //     this._debugSprites = [];
// //   }
// //
// //   createCharacters(...args) {
// //     super.createCharacters(args);
// //
// //     this._debugSprites = [
// //       [1, 2],
// //       [4, 4],
// //       [6, 2],
// //     ].map(([x, y]) => new SpriteDebugUnit({x, y}));
// //
// //     this._characterSprites.push(...this._debugSprites);
// //     this._debugSprites.forEach(sprite => this._tilemap.addChild(sprite));
// //   }
// // };
