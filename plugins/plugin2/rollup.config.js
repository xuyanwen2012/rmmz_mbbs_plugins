import pkg from './package.json';

import {createConfig} from '../../shared/rollup.config';

export default {
  ...createConfig(pkg),
};
