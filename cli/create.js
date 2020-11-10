const chalk = require('chalk');
const fs = require('fs-extra');
const Listr = require('listr');
const path = require('path');
const YAML = require('yaml');
const { promisify } = require('util');
const { Observable } = require('rxjs');

const access = promisify(fs.access);
const copyFile = promisify(fs.copyFile);
const writeFile = promisify(fs.writeFile);
const writeJson = promisify(fs.writeJSON);

const createProject = async options => {
	const tasks = new Listr([
		{
			title: 'Creating project folder',
			task: ctx => createProjectFolder(ctx)
		},
		{
			title: 'Generating files',
			task: ctx => generateProjectFiles(ctx)
		}
	]);

	await tasks.run({
		options,
		dir: path.join(process.cwd(), options.packageName)
	});

	console.log(chalk.bold.green('DONE'), 'Packaging finished!');
};

const generateProjectFiles = async ctx =>
	new Observable(async observer => {
		observer.next('Generate package.json');
		await createPackageJson(ctx);

		observer.next('Generate extension.yml');
		await createExtensionYml(ctx);

		observer.next('Generate index.js');
		await createInitialScript(ctx);

		observer.complete();
	});

const createProjectFolder = async ctx => {
	const { options, dir } = ctx;

	try {
		await access(dir, fs.constants.F_OK);
		throw new Error(
			chalk.bold.red(
				`Directory ${options.packageName
				} already exists in ${process.cwd()}. Extension initiation has been cancelled.`
			)
		);
	} catch (err) {
		try {
			await fs.mkdir(dir);
		} catch (err) {
			throw new Error(chalk.bold.red(err));
		}
	}
};

const createPackageJson = async ctx => {
	const { options, dir } = ctx;
	try {
		const jsonContent = {
			name: options.extName.replace(' ', '-').toLowerCase(),
			version: '1.0.0',
			description: options.description,
			main: 'index.js',
			scripts: {
				build: 'deckboard-kit --build',
				install: 'deckboard-kit --install'
			},
			author: options.author,
			license: 'MIT',
			dependencies: {
				'deckboard-kit':
					'https://github.com/rivafarabi/deckboard-kit.git'
			}
		};
		await writeJson(path.resolve(dir, 'package.json'), jsonContent, 'utf8');
	} catch (err) {
		throw new Error(chalk.bold.red(err));
	}
};

const createExtensionYml = async ctx => {
	const { options, dir } = ctx;
	try {
		const yamlContent = {
			name: options.extName,
			package: options.packageName,
			version: '1.0.0',
			description: options.description,
			author: options.author,
			license: 'MIT',
			repository: ''
		};
		await writeFile(
			path.resolve(dir, 'extension.yml'),
			YAML.stringify(yamlContent),
			'utf8'
		);
	} catch (err) {
		throw new Error(chalk.bold.red(err));
	}
};

const createInitialScript = async ctx => {
	const { options, dir } = ctx;
	try {
		await copyFile(
			path.resolve(__dirname, 'template', 'index.js'),
			path.resolve(dir, 'index.js')
		);
		const file = fs.readFileSync(path.resolve(dir, 'index.js'), 'utf8');
		const generatedFile = file.replace('Sample Extension', options.extName);
		await writeFile(path.resolve(dir, 'index.js'), generatedFile, 'utf8');
	} catch (err) {
		throw new Error(chalk.bold.red(err));
	}
};

module.exports = {
	createProject
};
