#!/usr/bin/env node

import arg from 'arg';
import inquirer from 'inquirer';
import { buildExtension } from './build';

const parseArgumentIntoOptions = rawArgs => {
	const args = arg(
		{
			'--init': Boolean,
			'--build': Boolean,
			'-i': '--init',
			'-b': '--build'
		},
		{
			argv: rawArgs.slice(2)
		}
	);
	return {
		init: args['--init'],
		build: args['--build'],
		packageName: args._[0]
	};
};

const promptForInit = async options => {
	const questions = [];
	questions.push({
		type: 'input',
		name: 'extName',
		message: 'Extension Name	:'
	});
	questions.push({
		type: 'input',
		name: 'author',
		message: 'Author		:'
	});

	const answers = await inquirer.prompt(questions);
	return {
		...options,
		...answers
	};
};

export const cli = async args => {
	let options = parseArgumentIntoOptions(args);
	if (options.init) options = await promptForInit(options);
	else if (options.build) await buildExtension();
	console.log(options);
};
