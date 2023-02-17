// 搜索记录存储-路由
var express = require('express');
var router = express.Router();

// 导入record控制器方法
const {
    updateRecord,
    createRecord,
    getOneRecord,
    getAllRecord,
} = require('../controller/record.controller');

// get搜索历史记录
// router.get('/', getAllRecord);

// {op:1,tag:'需要修改的内容'}
// router.put('/:_id', createRecord); // 创建
router.put('/:_id', updateRecord); // 插入
// 示例：
// 新增tag数组元素
// router.put('/:_id', updateTag);
// 删除tag数组元素
// router.put('/:_id', deleteTag);
module.exports = router; // 导出路由
