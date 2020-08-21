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

export default {
  input: 'src/index.js',
  plugins: [
    myPlugin()
  ],
  output: {
    file: pkg.main,
    format: 'iife',
    sourcemap: true,
  },
}