# rmmz-plugins-starter

> RPG Maker MV/MZ plugin development starter

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This repository is a Monorepo that allows easy development of for RPG Maker MV/MZ plugins.
It serves as a starting point for plugin developer who loves to write RM plugins in ES6 and modules,
especially useful for developer who produce many plugins.

- :white_check_mark: The template uses [Rollup.js](https://github.com/rollup/rollup) as the module bundler.
- :white_check_mark: The template uses [pnpm](https://github.com/pnpm/pnpm) to save space on your disk.
- :white_check_mark: The template follows the [Google style guide](https://google.github.io/styleguide/jsguide.html).

We are hoping to intergrate this setup with TypeScript soon.

## Template Structure

Under the `plugins` directory, lies each plugins

```
plugins
│
└───plugin1
│   │   package.json       // Should specify per plugin names, description, and help messages here
│   │   rollup.config.js   // Per plugin rollup specifation here
│   │
│   └───src
│   │   │   index.js       // The entry point of your plugin
│   │   │   others.js
│   │   │   ...
│   │
│   └───dist
│       │  Plugin1.js      // The generated ready-to-use plugin,
│       │                  // simply copy it to your RPG Maker Plugin folder
│
└───plugin2
│   │    ...
│
│   ...
```

## Installation and Usage

We recomment using [pnpm](https://github.com/pnpm/pnpm) since this is a Monorepo.
Alternately you can still use `npm`, which then involves extra manual work.
Once `pnpm` is installed, just use pnpm in place of npm/Yarn.
E.g., install dependencies via:

```
pnpm install
```

To compile a plugin you wrote. For example `plugin1`,
where plugin1 is the package name specified in 'plugins/plugin1/package.json'

```
pnpm run build --filter plugin1
```

Then the compiled RM plugin will be at `plugins/plugin1/dist/Plugin1.js`

You can also do a style check and fix your plugin code via:

```
pnpm run lint --filter plugin1
```

## License

Released under the [MIT](https://github.com/xuyanwen2012/rmmz-plugins-starter/blob/master/LICENSE) License.
