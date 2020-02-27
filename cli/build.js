const asar = require('asar');
const chalk = require('chalk');
const fs = require('fs-extra');
const Listr = require('listr');
const path = require('path');
const yaml = require('yaml');
const os = require('os');
const { DestroyerOfModules } = require('galactus');
const { Observable } = require('rxjs');
const { promisify } = require('util');

const extDir = path.join(os.homedir(), '/deckboard/extensions');
const access = promisify(fs.access);
const projectDir = process.cwd();
const ymlDir = path.resolve(process.cwd(), 'extension.yml');
const tempDir = path.join(process.cwd(), '../.temp');
const outputDir = path.join(process.cwd(), 'dist');

const destroyer = new DestroyerOfModules({
	rootDirectory: tempDir
});

const buildExtension = async (install = false) => {
	const tasks = new Listr([
		{
			title: 'Checking package info',
			task: ctx => checkYamlPackageFile(ctx)
		},
		{
			title: 'Preparing files',
			task: () => createTemporaryFolder()
		},
		{
			title: 'Packaging extension files',
			task: ctx => createExtensionPackage(ctx)
		},
		...(install
			? [
					{
						title: 'Copy package to extensions folder',
						task: ctx => copyPackageToExtension(ctx)
					}
			  ]
			: [])
	]);

	await tasks.run();

	console.log(chalk.bold.green('DONE'), 'Packaging finished!');
};

const checkYamlPackageFile = async ctx => {
	try {
		await access(ymlDir, fs.constants.R_OK);
		const file = fs.readFileSync(ymlDir, 'utf8');
		ctx.packageInfo = yaml.parse(file);
	} catch (err) {
		throw new Error(
			chalk.bold.red(
				`${projectDir} is not Deckboard extension project. extension.yml file not found!`
			)
		);
	}
};

const createTemporaryFolder = async () =>
	new Observable(async observer => {
		observer.next('Copy files to temp folder');
		await fs.copy(projectDir, tempDir);

		try {
			observer.next('Delete devDependencies modules');
			await destroyer.destroy();
		} catch (err) {
			observer.error();
			throw new Error(chalk.bold.red(err));
		}

		observer.complete();
	});

const createExtensionPackage = async ctx =>
	new Observable(async observer => {
		try {
			observer.next('Package files');
			await fs.remove(outputDir);

			await asar.createPackage(
				tempDir,
				path.join(outputDir, ctx.packageInfo.package + '.asar')
			);

			observer.next('Delete temp folder');
			await fs.remove(tempDir);
		} catch (err) {
			observer.error();
			throw new Error(chalk.bold.red(err));
		}
		observer.complete();
	});

const createExtensionPackage = async ctx =>
	new Observable(async observer => {
		try {
			observer.next('Copy package to extensions folder');

			await fs.copy(
				path.join(outputDir, ctx.packageInfo.package + '.asar'),
				extDir
			);
		} catch (err) {
			observer.error();
			throw new Error(chalk.bold.red(err));
		}
		observer.complete();
	});

module.exports = {
	buildExtension
};
