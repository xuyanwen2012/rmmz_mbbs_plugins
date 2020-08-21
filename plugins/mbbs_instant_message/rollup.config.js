import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

// TODO: import the plugin

function myPlugin(options = {}) {
  console.log('-----------------------------------------------------------');
  console.log(options);
  console.log('-----------------------------------------------------------');

  return {
    name: 'my-plugin',
  }
}

const banner = [
  `/*:`,
  ` * @target MZ`,
  ` * @plugindesc ${pkg.description}`,
  ` * @author ${pkg.author}`,
  ` *`,
  ` * @help ${pkg.name}.js - v${pkg.version}`,
  ` *`,
  ` * ${pkg.name} is licensed under the MIT License.`,
  ` * http://www.opensource.org/licenses/mit-license`,
  ` */`,
].join('\n');

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    myPlugin(),
  ],
  output: {
    file: pkg.main,
    format: 'iife',
    banner,
    sourcemap: true,
  },
}