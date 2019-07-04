const electronLog = require("electron-log");

/**
 * 
 * @param {String} logLevel 
 * @param {object} err 
 */
export const log = (logLevel = 'info', message) => {
    electronLog[logLevel](`${message}`);
};