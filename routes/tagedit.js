// 指令标签修改-路由
var express = require('express');
var router = express.Router();

// 导入at控制器方法
const { find, findAll, updateTag } = require('../controller/at.controller');

// router.post('/', function (req, res) {
router.put('/:_id', updateTag);
// connection.end();
module.exports = router; // 导出路由
