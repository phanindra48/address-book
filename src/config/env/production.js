const postgresAdapter = require('sails-postgresql');

/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
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
      localPostgres: {
        adapter: 'postgres',
        host: 'localhost',
        database: 'contactbook',
        user: 'postgres',
        password: 'postgres'
      }
    },
    defaults: {
      connection: 'localPostgres',
      migrate: 'safe'
    }
  }
};
