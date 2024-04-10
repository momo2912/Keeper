const express = require('express');
const { saveTimerStats } = require('../controllers/timerController');


const timerRouter = express.Router();

timerRouter.post('/timer', saveTimerStats);

module.exports = timerRouter;