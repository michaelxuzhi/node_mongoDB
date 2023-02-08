var express = require('express');
var router = express.Router();

const { find, findAll } = require('../controller/at.controller');
/* GET home page. */
// router.get('/', find);
router.get('/', findAll);

module.exports = router;
