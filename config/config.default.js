'use strict';

module.exports = appInfo => {
  const config = exports = {
    alinode = {
      appid: '54171',
      secret: 'c308e971092ae7d64c2640430c9ecc2ab6fdcf1e',
      logdir: '/tmp/',
      error_log: [
        '/root/.logs/error.#YYYY#-#MM#-#DD#.log'
      ]
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529930826341_1425';

  // add your config here
  config.middleware = [];

  return config;
};

