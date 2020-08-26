# rmmz-plugins-starter

> RPG Maker MV/MZ plugin development starter in TypeScript

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository is a monorepo that allows easy development of for RPG Maker MV/MZ plugins.
It serves as a starting point for plugin developer who loves to write RM plugins in TypeScripts. 
The monorepo is especially useful for developers who produce many plugins. 
Rather than having many repositories each filled with redundant toolchains and dependencies, we can manage them as a whole in this template.

- :white_check_mark: The template uses [TypeScript](https://www.typescriptlang.org/). 
Code with confidence and build safer RPG Maker Plugin!
- :white_check_mark: The template uses [Rollup.js](https://github.com/rollup/rollup) as the module bundler, 
which compiles small pieces of code into a single JavaScript that ready to use. 
- :white_check_mark: The template uses [pnpm](https://github.com/pnpm/pnpm) to manage all plugins in a single repository.
- :white_check_mark: The template follows the [Google TypeScript Style](https://google.github.io/styleguide/jsguide.html). 
To enforce the style guide and provide automated fixes, we uses [gts](https://github.com/google/gts) from Google. 

Simply clone this repository to start building your plugins.

## Template Structure

Under the `plugins` directory, lies each plugin

```
rmmz_plugins-starter
│
└───dist
│   │   Plugin1.js      // The generated ready-to-use plugins,
│   │   Plugin2.js      // simply copy them to your RPG Maker Plugin folder
│   │   ...  
│
└───plugins
│   │
│   └───Plugin1
│   │   │   _header.txt        // Plugin parameters goes here etc.
│   │   │   package.json       // Should specify the plugin's name here, used by the pnpm.
│   │   │   rollup.config.js   
│   │   │   tsconfig.json      
│   │   │
│   │   └───src
│   │       │   index.js       // The entry point of your plugin
│   │       │   others.js
│   │       │   ...
│   │
│   └───plugin2
│   │   │    ...
│   │
│   │   ...
```

When making a new plugin, just copy paste the example `Plugin1` directory (excluding `node_modules`). 
Give the plugin a proper name in the `package.json`. 
Run `pnpm install` again to install some dependency.
Then you are ready to go.

## Installation and Usage

We recommend using [pnpm](https://github.com/pnpm/pnpm) since this is a monorepo.
Alternately you can still use `npm`, which then involves extra manual work.
Once `pnpm` is installed, just use pnpm in place of npm/Yarn.
E.g., install dependencies via:

```
pnpm install
```

To compile a plugin you wrote. For example `plugin1`,
where _plugin1_ is the package name specified in `plugins/Plugin1/package.json`.

```
pnpm build                          // build all plugins
pnpm build --filter plugin1         // build only plugin 'plugin1' 
```

> Note, npm package name does not allow upper case characters, 
thus all package name should be named in lower case.

Then the compiled RM plugin will be at `/dist/Plugin1.js`

You can also do a style check or fix on your plugin code via:

```
pnpm run check --filter plugin1     // check all plugins 
pnpm run fix                        // automatically fix all source code
```

## License

Released under the [MIT](https://github.com/xuyanwen2012/rmmz-plugins-starter/blob/master/LICENSE) License.
