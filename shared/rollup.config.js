/**
 * @param {any} pkg
 * @return {any}
 */
function pluginBanner(pkg) {
  const banner_head = `/*:
 * @target MZ
 * @plugindesc ${pkg.description}
 * @author ${pkg.author}
 *
 * @help ${pkg.main.substring('dist/'.length)} - v${pkg.version}
 *\n`;

  const banner_foot = '\n */\n';

  return {
    name: 'my-plugin',

    renderChunk(code) {
      // should read from a description file
      // eslint-disable-next-line max-len
      const help_msg = 'This plugin can be used for \'Mount & Blade\' style battle log or simply for quick debugging display.';
      const width = 30;
      const reg = new RegExp(`([\\w\\s]{${width - 2},}?\\w)\\s?\\b`, 'g');

      const banner_content = help_msg.replace(reg, '$1\n')
          .split('\n')
          .map((line) => ' * ' + line)
          .join('\n');

      return banner_head + banner_content + banner_foot + code;
    },
  };
}

/**
 * @param {any} pkg
 * @return {any}
 */
export function createConfig(pkg) {
  return {
    input: 'src/index.js',
    plugins: [pluginBanner(pkg)],
    external: Object.keys(pkg.dependencies || {}),
    output: [
      {
        format: 'iife',
        file: pkg.main,
      },
    ],
  };
}
