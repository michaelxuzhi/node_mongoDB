var express = require('express');
var router = express.Router();

// router.post('/', function (req, res) {
router.get('/', function (req, res) {
    res.send('我是register');
});
// connection.end();
module.exports = router; // 导出路由
