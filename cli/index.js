#!/usr/bin/env node
require = require('esm')(module);
module.exports = require('./cli').cli(process.argv);