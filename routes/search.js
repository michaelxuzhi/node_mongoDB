// 搜索记录存储-路由
var express = require('express');
var router = express.Router();

// 导入record中间件方法
const { LRUValidator } = require('../middleware/record.middleware');

// 导入record控制器方法
const { updateRecord, getAllRecord } = require('../controller/record.controller');

// get搜索历史记录
router.get('/', getAllRecord);

router.put('/:_id/in', LRUValidator, updateRecord); // 插入
module.exports = router; // 导出路由
