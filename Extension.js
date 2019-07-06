'use strict';
const { PLATFORMS } = require('./constants');

class Extension {
	constructor() {
		this.name = '';
		this.inputs = [];
		this.platforms = [PLATFORMS.WINDOWS];
	}

	get selections() {
		return [
			{
				header: this.name
			},
			...this.inputs
		];
	}

	/**
	 * @param {String} action
	 * @param {object} params
	 */
	execute(action, params) {
		extensionLog('info', action);
		return null;
	}
}

module.exports = Extension;
