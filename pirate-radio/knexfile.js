require('dotenv').config({ path: './.env' });

const pg = require('pg');

module.exports = {

  development: {
    client: process.env.DB_CONNECTION,
    connection: {
      host	    : process.env.DB_HOST || 'localhost',
      user    	: process.env.DB_USER || 'pirate',
      password	: process.env.DB_PASS || 'pirate',
      database	: process.env.DB_NAME || 'pirateradio',
      ssl	      : false,
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
