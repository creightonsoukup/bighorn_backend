// Update with your config settings.
const pg = require('pg');
const dotenv = require('dotenv').config();


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bighorn_crossing',
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds'
      }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
  }

};
