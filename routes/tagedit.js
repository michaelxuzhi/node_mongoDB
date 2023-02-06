// 指令标签修改-路由
var express = require('express');
var router = express.Router();

// router.post('/', function (req, res) {
router.get('/', function (req, res) {
    res.send('tag-edit');
});
// connection.end();
module.exports = router; // 导出路由
