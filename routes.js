const express = require('express');
const router = express.Router();
const db = require('./database/queries')

router.post('/signups', async (req, res, next) => {
  res.send('success')
});

module.exports = router
