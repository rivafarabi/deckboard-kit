'use strict';
const Extension = require('./Extension');
const { INPUT_METHOD, PLATFORMS } = require('./constants');
const { log, prompt } = require('./utils');

module.exports = {
	Extension,
	prompt,
	log,
	INPUT_METHOD,
	PLATFORMS
};
