const express = require('express');
const timerRouter = require('./routes/timerStatsRoute');
const connectedKnex = require('./db/knex');
const cors = require('cors');
// const sqlite3 = require('sqlite3').verbose();
// let sql;

const server = express();

server.use(express.json());

server.use(cors());

server.set('db', connectedKnex);

server.use('/api', timerRouter);


module.exports = server;