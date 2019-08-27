/* eslint-disable no-console */
const logger = {
  // print the error
  error: (err) => {
    console.error(err);
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`HomeAway Server is up on ${port} and host: ${host}!`);
  },

  info: (val) => {
    console.log('server info', val);
  }
};

module.exports = logger;
