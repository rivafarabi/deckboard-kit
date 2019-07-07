const { Extension, log, INPUT_METHOD, PLATFORMS } = require('..');

class MyExtension extends Extension {
	constructor() {
		super();
		this.name = 'Sample Extension';
		this.platforms = [PLATFORMS.WINDOWS, PLATFORMS.MAC];
		this.inputs = [
			{
				label: 'Do Something', // Action lookup label
				value: 'study', // Action lookup value
				icon: 'book', // FontAwesome icon
				color: '#8E44AD', // Button's default color
				inputs: [
					{
						type: INPUT_METHOD.INPUT_SELECT, // Create a drop down selection field input
						label: 'Subject', // Label for drop down field
						ref: 'subject', // Field's reference name that can be used in execute function
						items: [
							// Array of drop down items
							{
								value: 'math',
								label: 'Mathematics'
							},
							{
								value: 'biology',
								label: 'Biology'
							}
						]
					},
					{
						type: INPUT_METHOD.INPUT_TEXT, // Create a text field input
						label: 'Additional Note',
						ref: 'note'
					}
				]
			}
		];
	}

	execute = (action, args) => {
		switch (action) {
			case 'study':
				this.doStudy(args.subject, args.note);
				break;
			default:
				this.doNothing();
				break;
		}
	};

	doStudy(activity, options) {
		log.info(`I did  ${activity}. ${options ? 'Notes: ' + options : ''}`);
	}

	doNothing() {
		log.info('I did nothing...');
	}
}

module.exports = new MyExtension();
