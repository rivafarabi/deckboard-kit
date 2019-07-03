import asar from 'asar';
import fs from 'fs-extra';
import { DestroyerOfModules } from 'galactus';

const destroyer = new DestroyerOfModules({
	rootDirectory: '../temp'
});

export const buildExtension = async () => {
	await fs.copy('.', '../temp');
	await destroyer.destroy();
	await asar.createPackage('../temp', 'dist/extension.asar');
	await fs.remove('../temp');
};
