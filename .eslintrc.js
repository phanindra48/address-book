const fs = require('fs');

const config = {
  extends: ["eslint-config-airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true, printWidth: 100  }],
    "no-underscore-dangle": 0
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  globals: {
    /* config */
    config: true
  }
};

// const services = fs.readdirSync(`${__dirname}/src/services`)
//   .filter(f => f.includes('.js'))
//   .map(f => f.replace('.js', ''));

// services.forEach(service => {
//   config.globals[service] = true;
// });

module.exports = config;
