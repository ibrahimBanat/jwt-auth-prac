const express = require('express');
const router = express.Router();

router.get('/', rootHandler);

function rootHandler(req, res) {
  res.send('root route is working ');
}

module.exports = router;
