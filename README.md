# express-es6-webpack-workflow
Basic es6 express server app with production build and development workflows. Based off [fulls1z3/webpack](https://github.com/fulls1z3/webpack) repo to make developing in webpack in es6 easy as well as bundling without presets. 

## Requirements
node v8.3.0+

## Installation
`npm i` - to install all dependencies

## Run Backend App in Dev Mode
`npm run dev`

Features:
- webpack - bundles the js files into: `server.bundle.dev.js`.
- watch - watches for file changes in the `src/` directory to trigger webpack bundling.
- nodemon - restarts the server instance when `server.bundle.dev.js` changes.
- source-map - ouput for debugging: `server.bundle.dev.js.map`.

## Build App for Production
`npm run build`

Features:
- Bundles code with webpack while stripping out redundant code and comments.
- Minified js bundle: `server.bundle.min.js`.

## Run Production App
`npm run start`

This is just a wrapper for running `node dist/server.bundle.min.js` <- the built output from running `build`.