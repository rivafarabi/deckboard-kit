const asar = require('asar');
const { DestroyerOfModules } = require('galactus');
const fs = require('fs-extra');

const destroyer = new DestroyerOfModules({
    rootDirectory: '../temp'
});

async function createTempFolder() {
    await fs.copy('.', '../temp');
    await destroyer.destroy();
    await asar.createPackage('../temp', 'dist/extension.asar');
    await fs.remove('../temp');
}

createTempFolder();