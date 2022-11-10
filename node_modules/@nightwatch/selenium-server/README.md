# selenium-server-jar-download
NPM install wrapper which makes available the selenium standalone server jar file in your node_modules folder.

[![Build Status][build-badge]][build]
[![version][version-badge]][package]

## Installing Selenium 4
This will download the jar file. 

```sh
npm i @nightwatch/selenium-server
```

Install a specific version, e.g. `4.1.1`:
```sh
npm i @nightwatch/selenium-server@4.1.1
```

### Installing Selenium 3
This will install the last Selenium 3 standalone server, version: `3.150.0`

```sh
npm i @nightwatch/selenium-server@3
```

# Usage

```js
const SeleniumServer = require('@nightwatch/selenium-server');

// Get the path to the jar file:
console.log(SeleniumServer.path);
```

The file is downloaded in `node_modules/@nightwatch/selenium-server/lib`.

# License
MIT

[build-badge]: https://github.com/beatfactor/selenium-server-jar-download/actions/workflows/node.js.yml/badge.svg?branch=main
[build]: https://github.com/beatfactor/selenium-server-jar-download/actions/workflows/node.js.yml
[version-badge]: https://img.shields.io/npm/v/@nightwatch/selenium-server.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nightwatch/selenium-server
