// @flow

const { PLATFORMS, log } = require('./constants');

class Extension {
	name: string;
	inputs: Array<any>;
	configs: Object;
	platforms: Array<string>;

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

	execute(action: string, params: any) {
		log('info', action);
		return null;
	}
}

module.exports = Extension;
