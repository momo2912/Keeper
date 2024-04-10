const knex = require('knex');

const connectedKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: 'timer.sqlite3'
  },
});

module.exports = connectedKnex;