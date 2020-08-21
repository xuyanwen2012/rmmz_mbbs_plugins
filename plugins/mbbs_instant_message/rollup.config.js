import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

// TODO: import the plugin

function myPlugin(options = {}) {
  return {
    name: 'my-plugin',

    renderChunk(code) {
      // showed read from a description file
      let help_msg = 'This plugin can be used for \'Mount & Blade\' style battle log or simply for quick debugging display.'

      help_msg = help_msg
        .match(new RegExp('.{1,77}', 'g'))
        .map((line) => ' * ' + line)
        .join('\n');

      return banner_head + help_msg + banner_foot + code;
    }
  }
}

const banner_head = `/*:
 * @target MZ
 * @plugindesc ${pkg.description}
 * @author ${pkg.author}
 *
 * @help ${pkg.main.substring('dist/'.length)} - v${pkg.version}
`;

const banner_foot = '\n */\n';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    myPlugin(),
  ],
  output: {
    file: pkg.main,
    format: 'iife',
    sourcemap: false,
  },
}
