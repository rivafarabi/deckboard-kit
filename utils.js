const electronLog = require("electron-log");

/**
 * 
 * @param {String} logLevel 
 * @param {object} err 
 */
const log = (logLevel = 'info', message) => {
    electronLog[logLevel](`${message}`);
};