const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST', '127.0.0.1'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME', 'strapi'),
      user: env('DB_USER', 'strapi'),
      password: env('DB_PASS', 'password'),
    },
  },
});
