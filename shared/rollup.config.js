import path from 'path';
import fs from 'fs';

/**
 * @param {object} pkg
 * @param {string} banner
 * @return {object}
 */
export function createConfig(pkg) {
  return {
    input: 'src/index.ts',
    external: Object.keys(pkg.dependencies || {}),
    output: [
      {
        format: 'iife',
        file: pkg.main,
        banner: prependHeader(pkg),
      },
    ],
  };
}

function prependHeader(pkg, headerFile = '_header.txt') {
  const header = `//=============================================================================
// RPG Maker MZ - ${pkg.main.substring(pkg.main.lastIndexOf('/') + 1)}
//=============================================================================
\n`;

  const file = path.resolve(__dirname, headerFile);
  if (fs.existsSync(file)) {
    return header + fs.readFileSync(file, 'utf8');
  } else {
    return header;
  }
}
