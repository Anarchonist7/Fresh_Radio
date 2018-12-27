// Update with your config settings.
require('dotenv').config();
const pg = require('pg');
// pg.defaults.ssl = false;

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host	    : process.env.DB_HOST || 'localhost',
      user    	: process.env.DB_USER || 'pirate',
      password	: process.env.DB_PASS || 'pirate',
      database	: process.env.DB_NAME || 'pirateradio',
      ssl	      : process.env.DB_SSL  || true,
      port      : process.env.DB_PORT || '5432',
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: '../db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
