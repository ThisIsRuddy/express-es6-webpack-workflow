# express-es6-webpack-workflow
Basic Express app in written in ES6 (now with: ES6 polyfil for full ES6 advantages & also just added experimental ES7 support via stage-0 babel presets). This app is a barebones workflow for developing ES6 syntax express based apps, this is a bare bones app for quick start projects as configuring webpack and babel can take quite some time.

## Installation
`npm i` - to install all dependencies

## Run Backend App in Dev Mode
`npm run dev`

Features:
- watch - triggers JS transpiring with webpack + babel-loader + ES2015
- hmr - injects hot updates to make development faster/efficient
- ss - StartServer to restart the server instance on changes

##### Note: Some hot-update files may get left in `dist/` folder and may need clearing from time to time

## Build App for Production
`npm run build`

Features:
- Transpires code down for compatibility
- Uglifies code
- Minifies code
- Bundles code with webpack

## Run Production App
`npm run start`

This is just a wrapper for running `node dist/server.bundle.js` <- the built output from running `build`.