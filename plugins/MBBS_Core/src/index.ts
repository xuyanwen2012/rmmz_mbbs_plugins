import {SpriteDebugUnit} from './sprites';
import './aliases';

const pluginName = 'MBBS_Prototype';
const pluginParam = {numTick: 1};

PluginManager.registerCommand(pluginName, 'tick', args => {
  pluginParam.numTick = args.numTick as number;
  console.log(`${pluginParam.numTick}!`);
});

const debugSprites: Array<SpriteDebugUnit> = [
  [1, 2],
  [4, 4],
  [6, 2],
].map(([x, y]) => new SpriteDebugUnit({x, y}));
