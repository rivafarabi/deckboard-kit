"use strict";
const Extension = require('./Extension');
const { INPUT_METHOD, PLATFORMS } = require('./constants');
const utils, { log, prompt } = require('./utils');

module.exports = {
  Extension,
  utils,
  prompt,
  log,
  INPUT_METHOD,
  PLATFORMS
};
