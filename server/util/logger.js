/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

const logger = {
  // print the error
  error: (err) => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`HomeAway Server is up ! ${chalk.green('✓')}`);
  },

  info: (val)=>{
    console.log('server info',val)
  }
};

module.exports = logger;
