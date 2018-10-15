const postgresAdapter = require('sails-postgresql');

/**
 * Development environment settings
 *
 */

module.exports = {
  port: 5200,
  prefix: '/',
  urls: {
    api: 'http://api.contact.local'
  },
  orm: {
    adapters: {
      postgres: postgresAdapter
    },
    datastores: {
      contactBookDB: {
        adapter: 'postgres',
        host: 'localhost',
        database: 'contactbook',
        user: 'postgres',
        password: 'postgres'
      }
    },
    defaults: {
      connection: 'contactBookDB',
      migrate: 'alter'
    }
  }
};
