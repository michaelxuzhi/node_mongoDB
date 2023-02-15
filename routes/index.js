var express = require('express');
var router = express.Router();

const { getOneAt, getAllAt } = require('../controller/at.controller');
// const { getOneRecord, getAllRecord } = require('../controller/record.controller');
/* GET home page. */
// router.get('/', find);
router.get('/', getAllAt);
// router.get('/', getAllRecord);
// router.get('/', getOneAt);

module.exports = router;
