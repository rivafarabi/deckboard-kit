import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export const createProject = async options => {
    try {
        console.log(chalk.blue(`Creating ${options.packageName} folder`));
        const targetDir = path.join(process.cwd(), options.packageName);
        if (fs.pathExistsSync(targetDir)) {
            return console.log(chalk.red(`ERROR: Directory ${options.packageName} already exists in ${process.cwd()}. Extension initiation has been cancelled.`))
        } else {
            await fs.mkdir(targetDir);
            await copyTemplateFilesToProjectFolder;
        }
    } catch (err) {
        console.log(chalk.red(err));
    }
}

const copyTemplateFilesToProjectFolder = async options => {
    try {
        console.log(chalk.blue('Copying template files to project folder'));
    } catch (err) {
        console.log(chalk.red(err));
    }
}
